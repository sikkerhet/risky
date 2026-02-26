// Kommentar-håndtering

let currentRiskIdForComment = null;
let currentEditingCommentId = null;

// Åpne kommentar-modal
function openCommentModal(riskId) {
    currentRiskIdForComment = riskId;
    currentEditingCommentId = null;

    const modal = document.getElementById('commentModal');
    modal.classList.add('active');

    // Reset form
    document.getElementById('commentType').value = 'tiltak';
    document.getElementById('commentText').value = '';
    document.getElementById('commentLinksContainer').textContent = '';

    // Vis eksisterende kommentarer
    renderExistingComments(riskId);
}

// Lukk kommentar-modal
function closeCommentModal() {
    const modal = document.getElementById('commentModal');
    modal.classList.remove('active');
    currentRiskIdForComment = null;
    currentEditingCommentId = null;
}

// Setup kommentar-modal
function setupCommentModal() {
    const modal = document.getElementById('commentModal');
    if (!modal) return;

    // Lukk ved klikk på overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCommentModal();
        }
    });

    // ESC-tast
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCommentModal();
        }
    });
}

// Legg til lenke-felt
function addLinkField() {
    const container = document.getElementById('commentLinksContainer');
    const linkItem = document.createElement('div');
    linkItem.className = 'comment-link-item';

    const urlInput = document.createElement('input');
    urlInput.type = 'url';
    urlInput.placeholder = 'https://github.com/user/repo/issues/123';
    urlInput.className = 'link-url';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Beskrivelse (valgfritt)';
    titleInput.className = 'link-title';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn-remove-link';
    removeBtn.textContent = '×';
    removeBtn.type = 'button';
    removeBtn.onclick = () => linkItem.remove();

    linkItem.appendChild(urlInput);
    linkItem.appendChild(titleInput);
    linkItem.appendChild(removeBtn);

    container.appendChild(linkItem);
}

// Lagre kommentar
function saveComment() {
    if (!currentRiskIdForComment) return;

    const type = document.getElementById('commentType').value;
    const text = document.getElementById('commentText').value.trim();

    if (!text) {
        alert('Kommentar kan ikke være tom');
        return;
    }

    // Samle lenker
    const links = [];
    const linkItems = document.querySelectorAll('.comment-link-item');
    linkItems.forEach(item => {
        const url = item.querySelector('.link-url').value.trim();
        const title = item.querySelector('.link-title').value.trim();
        if (url) {
            links.push({ url, title: title || url });
        }
    });

    const risk = currentAnalysis.risikoer.find(r => r.id === currentRiskIdForComment);
    if (!risk) return;

    // Initialiser comments array hvis den ikke finnes
    if (!risk.comments) {
        risk.comments = [];
    }

    // Opprett kommentar
    const comment = {
        id: generateUUID(),
        type: type,
        text: text,
        links: links,
        created: new Date().toISOString(),
        visible: true // Default synlig
    };

    risk.comments.push(comment);

    // Oppdater analyse
    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });

    // Re-render
    renderRisksTable();
    renderComments();
    renderExistingComments(currentRiskIdForComment);

    // Reset form
    document.getElementById('commentText').value = '';
    document.getElementById('commentLinksContainer').textContent = '';

    showSavedIndicator();
}

// Render eksisterende kommentarer i modal
function renderExistingComments(riskId) {
    const container = document.getElementById('existingCommentsContainer');
    container.textContent = '';

    const risk = currentAnalysis.risikoer.find(r => r.id === riskId);
    if (!risk || !risk.comments || risk.comments.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'Ingen kommentarer lagt til ennå.';
        empty.style.color = '#999';
        empty.style.fontStyle = 'italic';
        container.appendChild(empty);
        return;
    }

    risk.comments.forEach(comment => {
        const item = createCommentItem(comment, riskId);
        container.appendChild(item);
    });
}

// Opprett kommentar-element
function createCommentItem(comment, riskId) {
    const item = document.createElement('div');
    item.className = `comment-item type-${comment.type}`;

    // Legg til dimmed-klasse hvis skjult
    if (comment.visible === false) {
        item.classList.add('comment-dimmed');
    }

    const header = document.createElement('div');
    header.className = 'comment-item-header';

    const leftSection = document.createElement('div');
    leftSection.className = 'comment-header-left';

    const badge = document.createElement('span');
    badge.className = `comment-type-badge ${comment.type}`;
    const typeLabels = {
        'tiltak': 'Tiltak',
        'kommentar': 'Kommentar',
        'oppfolging': 'Oppfølging',
        'intern': 'Intern kommentar'
    };
    badge.textContent = typeLabels[comment.type] || comment.type;
    leftSection.appendChild(badge);

    // Synlighets-indikator
    if (comment.visible === false) {
        const hiddenBadge = document.createElement('span');
        hiddenBadge.className = 'comment-hidden-badge';
        hiddenBadge.textContent = '🚫 Skjult i eksport';
        leftSection.appendChild(hiddenBadge);
    }

    header.appendChild(leftSection);

    const buttonSection = document.createElement('div');
    buttonSection.className = 'comment-header-buttons';

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn-toggle-comment';
    toggleBtn.textContent = comment.visible === false ? '👁️ Vis' : '🚫 Skjul';
    toggleBtn.title = comment.visible === false ? 'Vis i eksport' : 'Skjul i eksport';
    toggleBtn.onclick = () => toggleCommentVisibility(riskId, comment.id);
    buttonSection.appendChild(toggleBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete-comment';
    deleteBtn.textContent = 'Slett';
    deleteBtn.onclick = () => deleteComment(riskId, comment.id);
    buttonSection.appendChild(deleteBtn);

    header.appendChild(buttonSection);

    item.appendChild(header);

    const text = document.createElement('div');
    text.className = 'comment-text';
    text.textContent = comment.text;
    item.appendChild(text);

    if (comment.links && comment.links.length > 0) {
        const linksDiv = document.createElement('div');
        linksDiv.className = 'comment-links-list';

        comment.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.className = 'comment-link';
            linkElement.href = link.url;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            linkElement.textContent = link.title;
            linksDiv.appendChild(linkElement);
        });

        item.appendChild(linksDiv);
    }

    return item;
}

// Toggle synlighet på enkelt-kommentar
function toggleCommentVisibility(riskId, commentId) {
    const risk = currentAnalysis.risikoer.find(r => r.id === riskId);
    if (!risk || !risk.comments) return;

    const comment = risk.comments.find(c => c.id === commentId);
    if (!comment) return;

    // Toggle visible flag (default til true hvis ikke satt)
    comment.visible = comment.visible === false ? true : false;

    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });

    renderRisksTable();
    renderComments();
    if (currentRiskIdForComment === riskId) {
        renderExistingComments(riskId);
    }

    showSavedIndicator();
}

// Slett kommentar
function deleteComment(riskId, commentId) {
    if (!confirm('Er du sikker på at du vil slette denne kommentaren?')) return;

    const risk = currentAnalysis.risikoer.find(r => r.id === riskId);
    if (!risk || !risk.comments) return;

    risk.comments = risk.comments.filter(c => c.id !== commentId);

    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });

    renderRisksTable();
    renderComments();
    renderExistingComments(riskId);
}

// State for hvilke typer som vises
let showTiltak = true;
let showKommentar = true;
let showOppfolging = true;
let showInternKommentar = true;

// Render kommentar-seksjonen i editor
function renderComments() {
    const container = document.getElementById('commentsContent');
    if (!container) return;

    container.textContent = '';

    // Finn alle risikoer med kommentarer
    const risksWithComments = currentAnalysis.risikoer.filter(r => r.comments && r.comments.length > 0);

    if (risksWithComments.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'no-comments';
        empty.textContent = 'Ingen tiltak eller kommentarer lagt til ennå.';
        container.appendChild(empty);
        return;
    }

    let hasVisibleComments = false;

    risksWithComments.forEach(risk => {
        const section = document.createElement('div');
        section.className = 'comments-by-risk';

        const title = document.createElement('div');
        title.className = 'comments-risk-title';
        title.textContent = `#${risk.nr} - ${risk.risikoelement}`;

        let sectionHasComments = false;

        risk.comments.forEach(comment => {
            // Filtrer basert på type
            if ((comment.type === 'tiltak' && !showTiltak) ||
                (comment.type === 'kommentar' && !showKommentar) ||
                (comment.type === 'oppfolging' && !showOppfolging) ||
                (comment.type === 'intern' && !showInternKommentar)) {
                return;
            }

            // Vis alltid kommentaren i UI, men marker hvis skjult
            if (!sectionHasComments) {
                section.appendChild(title);
                sectionHasComments = true;
            }

            const item = createCommentItem(comment, risk.id);
            section.appendChild(item);
            hasVisibleComments = true;
        });

        if (sectionHasComments) {
            container.appendChild(section);
        }
    });

    if (!hasVisibleComments) {
        const empty = document.createElement('div');
        empty.className = 'no-comments';
        empty.textContent = 'Ingen synlige tiltak eller kommentarer.';
        container.appendChild(empty);
    }
}

// Toggle visning av kommentar-type
function toggleCommentType(type) {
    const toggleMap = {
        'tiltak': {
            state: () => showTiltak = !showTiltak,
            btnId: 'toggleTiltakBtn',
            activeText: 'Skjul tiltak',
            inactiveText: 'Vis tiltak',
            getState: () => showTiltak
        },
        'kommentar': {
            state: () => showKommentar = !showKommentar,
            btnId: 'toggleKommentarBtn',
            activeText: 'Skjul kommentarer',
            inactiveText: 'Vis kommentarer',
            getState: () => showKommentar
        },
        'oppfolging': {
            state: () => showOppfolging = !showOppfolging,
            btnId: 'toggleOppfolgingBtn',
            activeText: 'Skjul oppfølging',
            inactiveText: 'Vis oppfølging',
            getState: () => showOppfolging
        },
        'intern': {
            state: () => showInternKommentar = !showInternKommentar,
            btnId: 'toggleInternBtn',
            activeText: 'Skjul intern',
            inactiveText: 'Vis intern',
            getState: () => showInternKommentar
        }
    };

    const config = toggleMap[type];
    if (!config) return;

    config.state();
    const btn = document.getElementById(config.btnId);
    if (btn) {
        if (config.getState()) {
            btn.classList.add('active');
            btn.textContent = config.activeText;
        } else {
            btn.classList.remove('active');
            btn.textContent = config.inactiveText;
        }
    }

    renderComments();
}

// Sjekk om en type er synlig (brukes av eksport)
function isCommentTypeVisible(type) {
    if (type === 'tiltak') return showTiltak;
    if (type === 'kommentar') return showKommentar;
    if (type === 'oppfolging') return showOppfolging;
    if (type === 'intern') return showInternKommentar;
    return false;
}

// Tell kommentarer for en risiko
function getCommentCount(riskId) {
    const risk = currentAnalysis.risikoer.find(r => r.id === riskId);
    if (!risk || !risk.comments) return 0;
    return risk.comments.length;
}
