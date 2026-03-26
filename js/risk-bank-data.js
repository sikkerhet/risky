window.EMBEDDED_RISK_BANKS = [
  {
    "id": "ai-tjenester",
    "navn": {
      "no": "KI-tjenester og agentisk AI",
      "en": "AI Services and Agentic AI"
    },
    "beskrivelse": {
      "no": "Risikoer spesifikke for KI- og ML-tjenester, LLM-applikasjoner og autonome KI-agenter",
      "en": "Risks specific to AI/ML services, LLM applications, and autonomous AI agents"
    },
    "kategorier": [
      {
        "id": "llm-sikkerhet",
        "navn": {
          "no": "LLM-sikkerhet",
          "en": "LLM Security"
        },
        "risikoer": [
          {
            "id": "llm-001",
            "risikoelement": {
              "no": "Prompt injection - bruker manipulerer AI til uønsket oppførsel",
              "en": "Prompt injection causes the AI to produce unintended behavior"
            },
            "saarbarhet": {
              "no": "Manglende sanitering av brukerinput, direkte konkatenering i prompts",
              "en": "Missing sanitization of user input and direct concatenation in prompts"
            },
            "eksisterendeBeskyttelse": {
              "no": "Input-validering, content filters",
              "en": "Input validation and content filters"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av prompt og manuell gjennomgang av svar",
              "en": "Logging of prompts, manual review of outputs"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Promptmaler, sanitering av input, separate bruker- og systemkontekster og validering av output",
              "en": "Prompt templating, input sanitization, separate user/system contexts, output validation"
            }
          },
          {
            "id": "llm-002",
            "risikoelement": {
              "no": "Sensitive data lekker via treningsdata eller kontekst",
              "en": "Sensitive data leaks through training data or context"
            },
            "saarbarhet": {
              "no": "PII eller konfidensielle data finnes i treningsdata eller promptkontekst",
              "en": "PII or confidential data in training set or prompt context"
            },
            "eksisterendeBeskyttelse": {
              "no": "Policyer for maskering av data",
              "en": "Data masking policies"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av treningsdata",
              "en": "Quarterly audit of training data"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Oppdagelse og sladding av PII, dataminimering og separate modeller for ulike sensitivitetsnivåer",
              "en": "PII detection/redaction, data minimization, separate models per sensitivity level"
            }
          },
          {
            "id": "llm-003",
            "risikoelement": {
              "no": "Hallucinations - AI genererer falsk eller misvisende informasjon",
              "en": "Hallucinations cause the AI to generate false or misleading information"
            },
            "saarbarhet": {
              "no": "LLM-er genererer plausibel men feil informasjon",
              "en": "LLMs generate plausible but incorrect information"
            },
            "eksisterendeBeskyttelse": {
              "no": "Disclaimer om at AI kan ta feil",
              "en": "Disclaimer stating that the AI can be wrong"
            },
            "eksisterendeKontroll": {
              "no": "Stikkprøvekontroll av svar",
              "en": "Spot-checking of outputs"
            },
            "K": 2,
            "I": 5,
            "T": 1,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Retrieval-Augmented Generation (RAG), lag for faktasjekk, konfidensskårer og menneskelig kontroll ved kritiske beslutninger",
              "en": "Retrieval-Augmented Generation (RAG), a fact-checking layer, confidence scores, and human review for critical decisions"
            }
          },
          {
            "id": "llm-004",
            "risikoelement": {
              "no": "Model inversion - uthenting av treningsdata",
              "en": "Model inversion exposes training data"
            },
            "saarbarhet": {
              "no": "Adversarial queries kan hente ut memoriserte treningsdata",
              "en": "Adversarial queries can extract memorized training data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Frekvensbegrensning og spørringsovervåking",
              "en": "Rate limiting, query monitoring"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av uvanlige spørringer",
              "en": "Logging of unusual queries"
            },
            "K": 5,
            "I": 2,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Differential privacy i treningen, filtrering av output og testing for memorisering",
              "en": "Differential privacy in training, output filtering, memorization testing"
            }
          },
          {
            "id": "llm-005",
            "risikoelement": {
              "no": "Indirekte prompt injection via eksternt innhold",
              "en": "Indirect prompt injection through external content"
            },
            "saarbarhet": {
              "no": "KI behandler ubetrodd innhold som e-post, PDF-er og nettsider som instruksjoner",
              "en": "The AI processes untrusted content (emails, PDFs, web pages) as instructions"
            },
            "eksisterendeBeskyttelse": {
              "no": "Begrensninger på innholdstyper",
              "en": "Content type restrictions"
            },
            "eksisterendeKontroll": {
              "no": "Manuell gjennomgang av integrasjoner",
              "en": "Manual review of integrations"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Isoler eksternt innhold, skil mellom privilegier og krev eksplisitt bekreftelse for sensitive handlinger",
              "en": "Isolate external content, privilege separation, action confirmation for sensitive operations"
            }
          },
          {
            "id": "llm-006",
            "risikoelement": {
              "no": "Modelleksfiltrasjon via API-kall",
              "en": "Model theft through API queries"
            },
            "saarbarhet": {
              "no": "En angriper kan gjenskape modellen gjennom API-tilgang",
              "en": "An adversary can recreate the model through API access"
            },
            "eksisterendeBeskyttelse": {
              "no": "Frekvensbegrensning i API",
              "en": "API rate limiting"
            },
            "eksisterendeKontroll": {
              "no": "Bruksanalyse",
              "en": "Usage analytics"
            },
            "K": 3,
            "I": 2,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Deteksjon av spørringsmønstre, forstyrrelse av output, vannmerking og strenge frekvensgrenser",
              "en": "Query pattern detection, output perturbation, watermarking, strict rate limits"
            }
          },
          {
            "id": "llm-007",
            "risikoelement": {
              "no": "Usikker håndtering av output gir XSS eller injeksjon via KI-generert innhold",
              "en": "Insecure output handling enables XSS or injection through AI output"
            },
            "saarbarhet": {
              "no": "KI-generert output blir ikke sanert før visning",
              "en": "AI-generated output is not sanitized before rendering"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe escaping av output",
              "en": "Some output escaping"
            },
            "eksisterendeKontroll": {
              "no": "Sikkerhetstesting",
              "en": "Security testing"
            },
            "K": 3,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Rensing av output, CSP-headere, behandling av AI-output som ubetrodd og sikker parsing av markdown/HTML",
              "en": "Output sanitization, CSP headers, treat AI output as untrusted, markdown/HTML parsing security"
            }
          }
        ]
      },
      {
        "id": "agentic-ai",
        "navn": {
          "no": "Agentisk AI og autonome systemer",
          "en": "Agentic AI and Autonomous Systems"
        },
        "risikoer": [
          {
            "id": "agent-001",
            "risikoelement": {
              "no": "Ukontrollerte handlinger - agent utfører destruktive operasjoner",
              "en": "Uncontrolled actions cause the agent to perform destructive operations"
            },
            "saarbarhet": {
              "no": "Agenten har verktøytilgang uten tilstrekkelige beskyttelsesmekanismer",
              "en": "Agent har tool access without tilstrekkelige guardrails"
            },
            "eksisterendeBeskyttelse": {
              "no": "Skrivebeskyttede verktøy der det er mulig",
              "en": "Read-only tools where possible"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av alle agenthandlinger",
              "en": "Logging of all agent actions"
            },
            "K": 3,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Menneskelig godkjenning for destruktive operasjoner, tillatt- og blokklistede handlinger, tørrkjøringsmodus og mulighet for å angre",
              "en": "Human-in-the-loop for destructive ops, action whitelist/blacklist, dry-run mode, undo capability"
            }
          },
          {
            "id": "agent-002",
            "risikoelement": {
              "no": "Privilegieeskalering - agenten får mer tilgang enn tiltenkt",
              "en": "Privilege escalation - agent gets mer access than tiltenkt"
            },
            "saarbarhet": {
              "no": "Verktøyrettigheter er ikke granulære nok, og verktøy kan kjedes sammen",
              "en": "Tool permissions not granular nok, chaining of tools"
            },
            "eksisterendeBeskyttelse": {
              "no": "Rollebasert verktøytilgang",
              "en": "Role-based tool access"
            },
            "eksisterendeKontroll": {
              "no": "Gjennomgang av verktøyrettigheter",
              "en": "Audit of tool permissions"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Minste privilegium per verktøy, kapabilitetsbasert sikkerhet, sandkassekjøring og handlingsbudsjetter",
              "en": "Least privilege per tool, capability-based security, sandbox execution, action budgets"
            }
          },
          {
            "id": "agent-003",
            "risikoelement": {
              "no": "Uendelige løkker og ressursutmattelse",
              "en": "Uendelige loops and resource exhaustion"
            },
            "saarbarhet": {
              "no": "Agenten kan gå i løkke eller bruke for mye ressurser",
              "en": "An agent can enter a loop or consume excessive resources"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell timeout på forespørsler",
              "en": "General timeout on requests"
            },
            "eksisterendeKontroll": {
              "no": "Ressursovervåking",
              "en": "Resource monitoring"
            },
            "K": 1,
            "I": 1,
            "T": 5,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Maksgrense for iterasjoner, stegbudsjett, circuit breakers, kostnadstak og loopdeteksjon",
              "en": "Max iterations limit, step budget, circuit breakers, cost caps, loop detection"
            }
          },
          {
            "id": "agent-004",
            "risikoelement": {
              "no": "Målfeiljustering - agenten optimerer feil måltall",
              "en": "Goal misalignment causes the agent to optimize the wrong metric"
            },
            "saarbarhet": {
              "no": "Belønningsfunksjonen er ikke justert mot ønsket utfall",
              "en": "Reward function not aligned with intended outcome"
            },
            "eksisterendeBeskyttelse": {
              "no": "Manuell gjennomgang av agentresultater",
              "en": "Manual review of agent outputs"
            },
            "eksisterendeKontroll": {
              "no": "Sporing av resultatmål",
              "en": "Success metrics tracking"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Inverse reward learning, multiobjektiv optimalisering, menneskelig tilbakemelding og prinsipper fra Constitutional AI",
              "en": "Inverse reward learning, multi-objective optimization, human feedback, constitutional AI principles"
            }
          },
          {
            "id": "agent-005",
            "risikoelement": {
              "no": "Informasjonslekkasje gjennom bruk av verktøy",
              "en": "Information leakage via tool use"
            },
            "saarbarhet": {
              "no": "Agenten sender sensitive data til eksterne API-er eller verktøy",
              "en": "Agent send sensitive data to external APIs/tools"
            },
            "eksisterendeBeskyttelse": {
              "no": "Retningslinje mot eksterne API-kall",
              "en": "Policy mot external API-calls"
            },
            "eksisterendeKontroll": {
              "no": "Nettverksovervåking",
              "en": "Network monitoring"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "DLP på verktøyinput, tillattliste for eksterne verktøy og revisjon av alle eksterne kall",
              "en": "Data loss prevention on tool inputs, allowlist of external tools, audit all external calls"
            }
          },
          {
            "id": "agent-006",
            "risikoelement": {
              "no": "Agent-til-agent-angrep via kompromitterte agenter",
              "en": "Agent-to-agent attacks via compromised agents"
            },
            "saarbarhet": {
              "no": "Agenter kommuniserer uten tilstrekkelig verifisering av tillit",
              "en": "Agents kommuniserer without tilstrekkelig trust verification"
            },
            "eksisterendeBeskyttelse": {
              "no": "Agentautentisering",
              "en": "Agent authentication"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av kommunikasjon mellom agenter",
              "en": "Inter-agent communication logging"
            },
            "K": 4,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Verifisering av agentidentitet, meldingssignering, kapabilitetstokener og zero trust-arkitektur",
              "en": "Agent identity verification, message signing, capability tokens, zero-trust architecture"
            }
          },
          {
            "id": "agent-007",
            "risikoelement": {
              "no": "Fremvoksende motstridig atferd",
              "en": "Emergent adversarial behavior"
            },
            "saarbarhet": {
              "no": "Multiagentsystemer utvikler uønsket samarbeid eller konkurranse",
              "en": "Multi-agent systems utvikler undesired collaboration/konkuranse"
            },
            "eksisterendeBeskyttelse": {
              "no": "Utrulling med én agent",
              "en": "Single-agent deployment"
            },
            "eksisterendeKontroll": {
              "no": "Atferdsovervåking",
              "en": "Behavioral monitoring"
            },
            "K": 3,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Simulering og testing av multiagentløsninger, atferdsbegrensninger, koordineringsprotokoller og kill switch",
              "en": "Multi-agent simulation/testing, behavioral constraints, coordination protocols, kill switches"
            }
          },
          {
            "id": "agent-008",
            "risikoelement": {
              "no": "Jailbreaking via manipulering av chain-of-thought",
              "en": "Jailbreaking via chain-of-thought manipulation"
            },
            "saarbarhet": {
              "no": "Agentens resonnement kan manipuleres med utspekulerte prompt",
              "en": "Agent's reasoning can manipuleres via clever prompting"
            },
            "eksisterendeBeskyttelse": {
              "no": "Systemprompt med sikkerhetsinstruksjoner",
              "en": "System prompts with safety instructions"
            },
            "eksisterendeKontroll": {
              "no": "Red teaming av agentatferd",
              "en": "Red-teaming of agent behavior"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Constitutional AI, refleksjonsmekanismer, trinnvis sikkerhetsvalidering og kritikk-lag",
              "en": "Constitutional AI, reflection mechanisms, step-by-step safety validation, critique layers"
            }
          }
        ]
      },
      {
        "id": "ml-model-sikkerhet",
        "navn": {
          "no": "ML-modellsikkerhet",
          "en": "ML Model Security"
        },
        "risikoer": [
          {
            "id": "model-001",
            "risikoelement": {
              "no": "Adversarial examples - spesiallaget input får modellen til å feile",
              "en": "Adversarial examples - crafted input fails modellen"
            },
            "saarbarhet": {
              "no": "Modellen er ikke robust mot adversarial perturbations",
              "en": "Modell not robust mot adversarial perturbations"
            },
            "eksisterendeBeskyttelse": {
              "no": "Validering av input",
              "en": "Input validation"
            },
            "eksisterendeKontroll": {
              "no": "Overvåking av treffsikkerhet i produksjon",
              "en": "Accuracy monitoring in prod"
            },
            "K": 2,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Adversarial trening, forhåndsbehandling av input, ensemblemetoder og avviksdeteksjon",
              "en": "Adversarial training, input preprocessing, ensemble methods, anomaly detection"
            }
          },
          {
            "id": "model-002",
            "risikoelement": {
              "no": "Data poisoning - treningsdata er kompromittert",
              "en": "Data poisoning - training data kompromittert"
            },
            "saarbarhet": {
              "no": "Ubetrodde eller uvaliderte data i treningssettet",
              "en": "Untrusted or uvalidert data in training set"
            },
            "eksisterendeBeskyttelse": {
              "no": "Begrensninger på datakilder",
              "en": "Data source restrictions"
            },
            "eksisterendeKontroll": {
              "no": "Manuell inspeksjon av data",
              "en": "Manual data inspection"
            },
            "K": 3,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Sporing av dataopprinnelse, avviksdeteksjon, robust trening og datavalideringsløp",
              "en": "Data provenance tracking, outlier detection, robust training, data validation pipelines"
            }
          },
          {
            "id": "model-003",
            "risikoelement": {
              "no": "Model drift - treffsikkerheten svekkes over tid",
              "en": "Model operations - accuracy degraderer over time"
            },
            "saarbarhet": {
              "no": "Fordelingsskifte mellom treningsdata og produksjonsdata",
              "en": "Distribution shift mellom training and production data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kvartalsvis retrening",
              "en": "Quarterly retraining"
            },
            "eksisterendeKontroll": {
              "no": "Dashbord for treffsikkerhet",
              "en": "Accuracy dashboards"
            },
            "K": 2,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Kontinuerlig overvåking, drift-deteksjon, automatisert retrening, A/B-testing og kanariutrulling",
              "en": "Continuous monitoring, operations detection, automated retraining, A/B testing, canary deployments"
            }
          },
          {
            "id": "model-004",
            "risikoelement": {
              "no": "Angrep via leverandørkjeden gjennom ML-avhengigheter",
              "en": "Supply chain attacks via ML dependencies"
            },
            "saarbarhet": {
              "no": "Kompromitterte ML-biblioteker og forhåndstrente modeller",
              "en": "Kompromitterte ML-biblioteker, pre-trained models"
            },
            "eksisterendeBeskyttelse": {
              "no": "Skanning av avhengigheter",
              "en": "Dependency scanning"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av avhengigheter",
              "en": "Quarterly dependency review"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Verifisering av modellopprinnelse, SBOM for ML, pålitelige modellregistre og validering av sjekksummer",
              "en": "Model provenance verification, SBOM for ML, trusted model registries, checksum validation"
            }
          },
          {
            "id": "model-005",
            "risikoelement": {
              "no": "Infrastruktur for modellservering er kompromittert",
              "en": "Model serving infrastructure kompromittert"
            },
            "saarbarhet": {
              "no": "Inference-endepunkter er ikke tilstrekkelig sikret",
              "en": "Inference endpoints not tilstrekkelig sikret"
            },
            "eksisterendeBeskyttelse": {
              "no": "API-autentisering",
              "en": "API authentication"
            },
            "eksisterendeKontroll": {
              "no": "Infrastrukturovervåking",
              "en": "Infrastructure monitoring"
            },
            "K": 4,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Modellkryptering i hvile og under overføring, sikre enklaver (TEE), tilgangskontroller og uforanderlige utrullinger",
              "en": "Model encryption at rest/transit, secure enclaves (TEE), access controls, immutable deployments"
            }
          }
        ]
      },
      {
        "id": "ai-data-privacy",
        "navn": {
          "no": "KI-spesifikk datahåndtering",
          "en": "AI Data Privacy"
        },
        "risikoer": [
          {
            "id": "data-001",
            "risikoelement": {
              "no": "Memorisering av sensitive treningsdata",
              "en": "Memorization of sensitive treningsdata"
            },
            "saarbarhet": {
              "no": "Modellen memorerer ordrette eksempler fra treningsdata",
              "en": "Modell memorerer verbatim training examples"
            },
            "eksisterendeBeskyttelse": {
              "no": "Fjerning av PII fra treningsdata",
              "en": "PII removal from training data"
            },
            "eksisterendeKontroll": {
              "no": "Testing av ekstraksjonsangrep",
              "en": "Extraction attacks testing"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Differential privacy, deduplisering av data, mål for memorisering og kanaritokener",
              "en": "Differential privacy, data deduplication, memorization metrics, canary tokens"
            }
          },
          {
            "id": "data-002",
            "risikoelement": {
              "no": "Re-identifisering via modelloutput",
              "en": "Re-identification via model outputs"
            },
            "saarbarhet": {
              "no": "Aggregerte eller anonymiserte data kan re-identifiseres",
              "en": "Aggregated/anonymized data can re-identifiseres"
            },
            "eksisterendeBeskyttelse": {
              "no": "K-anonymitet i output",
              "en": "K-anonymity in outputs"
            },
            "eksisterendeKontroll": {
              "no": "Vurderinger av personvernkonsekvenser",
              "en": "Privacy impact assessments"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Formelle personverngarantier, forstyrrelse av output, aggregeringsterskler og GDPR-etterlevelse by design",
              "en": "Formal privacy guarantees, output perturbation, aggregation thresholds, GDPR compliance by design"
            }
          },
          {
            "id": "data-003",
            "risikoelement": {
              "no": "Membership inference - avdekke hvem som var i treningssettet",
              "en": "Membership inference - avdekke who that var in training set"
            },
            "saarbarhet": {
              "no": "En angriper kan utlede om et individ var i treningsdata",
              "en": "Adversary can dedusere about a individ var in training data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Aggregerte modellresultater",
              "en": "Aggregate model outputs"
            },
            "eksisterendeKontroll": {
              "no": "Testing av membership inference",
              "en": "Membership inference testing"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Differential privacy, regularisering, grenser for spørringsbudsjett og konfidensgrenser",
              "en": "Differential privacy, regularization, query budget limits, confidence thresholds"
            }
          },
          {
            "id": "data-004",
            "risikoelement": {
              "no": "Treningsdata blir ikke slettet på forespørsel (GDPR)",
              "en": "Training data is not erased on request as required by GDPR"
            },
            "saarbarhet": {
              "no": "Kan ikke oppfylle retten til å bli glemt for treningsdata",
              "en": "Cannot fulfill 'right to be forgotten' for training data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Retningslinjer for datalagring",
              "en": "Data retention policies"
            },
            "eksisterendeKontroll": {
              "no": "DPIA for KI-systemer",
              "en": "DPIA for AI systems"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Maskinell unlearning, modulær trening, sporing av datalinje og prosedyrer for retrening",
              "en": "Machine unlearning techniques, modular training, data lineage tracking, retraining procedures"
            }
          },
          {
            "id": "data-005",
            "risikoelement": {
              "no": "Dataoverføring over landegrenser via KI-tjeneste",
              "en": "Cross-border data transfer via AI service"
            },
            "saarbarhet": {
              "no": "Data behandles i jurisdiksjoner uten tilstrekkelig beskyttelse",
              "en": "Data prosessert in jurisdiksjoner without adequate protection"
            },
            "eksisterendeBeskyttelse": {
              "no": "Modellhosting i EU",
              "en": "EU-based model hosting"
            },
            "eksisterendeKontroll": {
              "no": "Gjennomgang av datalagringssted",
              "en": "Data residency audit"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Datalokalisering, on-premise-alternativer, SCC-er og personvernbevarende maskinlæring (federated learning)",
              "en": "Data localization, on-premise deployment options, SCCs, privacy-preserving ML (federated learning)"
            }
          }
        ]
      },
      {
        "id": "ai-bias-fairness",
        "navn": {
          "no": "Bias og rettferdighet",
          "en": "AI Bias and Fairness"
        },
        "risikoer": [
          {
            "id": "bias-001",
            "risikoelement": {
              "no": "Diskriminerende beslutninger på grunn av skjeve treningsdata",
              "en": "Diskriminerende decisions pga. biased training data"
            },
            "saarbarhet": {
              "no": "Treningsdata gjenspeiler historisk skjevhet og diskriminering",
              "en": "Training data reflekterer historisk bias/diskriminering"
            },
            "eksisterendeBeskyttelse": {
              "no": "Mangfold i treningsdata",
              "en": "Diversity in training data"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av rettferdighet",
              "en": "Annual fairness audit"
            },
            "K": 2,
            "I": 5,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Rettferdighetsmål som demographic parity og equalized odds, teknikker for å redusere bias og varierte datasett",
              "en": "Fairness metrics (demographic parity, equalized odds), bias mitigation techniques, diverse datasets"
            }
          },
          {
            "id": "bias-002",
            "risikoelement": {
              "no": "Feedback loops forsterker eksisterende bias",
              "en": "Feedback loops forsterker eksisterende bias"
            },
            "saarbarhet": {
              "no": "Modellprediksjoner påvirker fremtidige data og forsterker eksisterende bias",
              "en": "Model predictions affects future data that reinforcer bias"
            },
            "eksisterendeBeskyttelse": {
              "no": "Varierte treningskilder",
              "en": "Diverse training sources"
            },
            "eksisterendeKontroll": {
              "no": "Overvåking av utfall på tvers av demografier",
              "en": "Outcome monitoring across demographics"
            },
            "K": 2,
            "I": 5,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Counterfactual fairness, intervensjonsstrategier og jevnlig retrening med korrigerte data",
              "en": "Counterfactual fairness, intervention strategies, regular retraining with corrected data"
            }
          },
          {
            "id": "bias-003",
            "risikoelement": {
              "no": "Manglende representasjon av minoritetsgrupper",
              "en": "Missing representasjon of minoritetsgrupper"
            },
            "saarbarhet": {
              "no": "Undergrupper er underrepresentert i trenings- og testdata",
              "en": "Subgrupper underrepresentert in training/test data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Minimumsstørrelse på utvalg",
              "en": "Minimum sample sizes"
            },
            "eksisterendeKontroll": {
              "no": "Analyse av ytelse per undergruppe",
              "en": "Subgroup performance analysis"
            },
            "K": 2,
            "I": 4,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Stratifisert sampling, syntetisk oversampling av minoriteter, disaggregerte evalueringer og gruppespesifikke rettferdighetskrav",
              "en": "Stratified sampling, synthetic minority oversampling, disaggregated evaluation, group fairness constraints"
            }
          },
          {
            "id": "bias-004",
            "risikoelement": {
              "no": "Manglende åpenhet om KI-beslutninger",
              "en": "Missing transparency about AI-decisions"
            },
            "saarbarhet": {
              "no": "Brukere kan ikke forstå eller utfordre AI-beslutninger",
              "en": "Users cannot understand or challenge AI decisions"
            },
            "eksisterendeBeskyttelse": {
              "no": "Informasjon om bruk av KI",
              "en": "Disclaimer about AI-bruk"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av beslutninger",
              "en": "Quarterly review of decisions"
            },
            "K": 1,
            "I": 4,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Forklarbar KI som SHAP og LIME, begrunnelser for beslutninger, klagemekanismer og model cards",
              "en": "Explainable AI (SHAP, LIME), decision justifications, appeal mechanisms, model cards"
            }
          }
        ]
      },
      {
        "id": "ai-governance",
        "navn": {
          "no": "KI-governance og etterlevelse",
          "en": "AI Governance"
        },
        "risikoer": [
          {
            "id": "gov-001",
            "risikoelement": {
              "no": "Manglende etterlevelse av EU AI Act",
              "en": "Non-compliance with EU AI Act"
            },
            "saarbarhet": {
              "no": "KI-systemer med høy risiko mangler påkrevde sikkerhetsmekanismer",
              "en": "High-risk AI system without required safeguards"
            },
            "eksisterendeBeskyttelse": {
              "no": "Risikovurdering av AI-systemer",
              "en": "Risk assessment of AI systems"
            },
            "eksisterendeKontroll": {
              "no": "Juridisk gjennomgang av AI-utrullinger",
              "en": "Legal review of AI deployments"
            },
            "K": 2,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Rammeverk for etterlevelse av AI Act, konsekvensvurderinger, dokumentasjonskrav og samsvarsvurdering",
              "en": "AI Act compliance framework, impact assessments, documentation requirements, conformity assessment"
            }
          },
          {
            "id": "gov-002",
            "risikoelement": {
              "no": "Manglende dokumentasjon av AI-modellen",
              "en": "Missing AI model documentation"
            },
            "saarbarhet": {
              "no": "Utilstrekkelig dokumentasjon av modellens egenskaper og begrensninger",
              "en": "Insufficient documentation of model capabilities/limitations"
            },
            "eksisterendeBeskyttelse": {
              "no": "README-filer",
              "en": "README files"
            },
            "eksisterendeKontroll": {
              "no": "Krav til kodegjennomgang",
              "en": "Code review requirements"
            },
            "K": 1,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Model cards, datasheets for datasett, systemkort, versjonering og revisjonsspor",
              "en": "Model cards, datasheets for datasets, system cards, versioning, audit trails"
            }
          },
          {
            "id": "gov-003",
            "risikoelement": {
              "no": "Ansvar for AI-beslutninger er uklart",
              "en": "Accountability for AI decisions is unclear"
            },
            "saarbarhet": {
              "no": "Det er ikke klart eierskap når AI feiler",
              "en": "No clear ownership when AI fails"
            },
            "eksisterendeBeskyttelse": {
              "no": "Produkteierskap er definert",
              "en": "Product ownership defined"
            },
            "eksisterendeKontroll": {
              "no": "Prosess for hendelsesgjennomgang",
              "en": "Incident review process"
            },
            "K": 2,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "AI-styringsforum, tydelig RACI-matrise, prosedyrer for hendelseshåndtering og krav til menneskelig tilsyn",
              "en": "AI governance board, clear RACI matrix, incident response procedures, human oversight requirements"
            }
          },
          {
            "id": "gov-004",
            "risikoelement": {
              "no": "Utilstrekkelig testing av AI-systemer før utrulling",
              "en": "Insufficient testing of AI systems before deployment"
            },
            "saarbarhet": {
              "no": "Manglende adversarial testing og validering av randtilfeller",
              "en": "Missing adversarial testing, edge case validation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard QA-prosess",
              "en": "Standard QA process"
            },
            "eksisterendeKontroll": {
              "no": "Brukeraksepttesting",
              "en": "User acceptance testing"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "KI-spesifikke testrammeverk, red teaming, chaos engineering for KI og trinnvis utrulling",
              "en": "AI-specific testing frameworks, red-teaming, chaos engineering for AI, staged rollouts"
            }
          },
          {
            "id": "gov-005",
            "risikoelement": {
              "no": "Leverandørlåsing til proprietær AI-plattform",
              "en": "Vendor lock-in to proprietary AI platform"
            },
            "saarbarhet": {
              "no": "Avhengighet av en bestemt LLM-leverandør eller KI-plattform",
              "en": "dependency of specific LLM provider or AI platform"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kontraktsforhandlinger",
              "en": "Contract negotiations"
            },
            "eksisterendeKontroll": {
              "no": "Årlige leverandørgjennomganger",
              "en": "Yearly vendor reviews"
            },
            "K": 2,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Multimodellstrategi, abstraksjonslag, åpen kildekode-alternativer, portabilitetstesting og exit-strategier",
              "en": "Multi-model strategy, abstraction layers, open-source alternatives, portability testing, exit strategies"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "devops-cicd",
    "navn": {
      "no": "DevOps & CI/CD",
      "en": "DevOps and CI/CD"
    },
    "beskrivelse": {
      "no": "Risikoer knyttet til utviklingsprosess, CI/CD-pipelines og utrulling",
      "en": "Risks related to the development process, CI/CD pipelines, and deployment"
    },
    "kategorier": [
      {
        "id": "pipeline-sikkerhet",
        "navn": {
          "no": "Pipeline-sikkerhet",
          "en": "Pipeline Security"
        },
        "risikoer": [
          {
            "id": "cicd-001",
            "risikoelement": {
              "no": "Kompromittert CI/CD-pipeline injiserer ondsinnet kode",
              "en": "Kompromittert CI/CD-pipeline injiserer ondsinnet code"
            },
            "saarbarhet": {
              "no": "Manglende signing av artifacts, svak tilgangskontroll på pipeline",
              "en": "Missing signing of artifacts, weak access control on pipeline"
            },
            "eksisterendeBeskyttelse": {
              "no": "Pipeline-as-code, branch protection",
              "en": "Pipeline-as-code, branch protection"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av pipeline-kjøringer",
              "en": "Logging of pipeline runs"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Code signing, artifact attestation, SLSA Level 3+, immutable build environments",
              "en": "Code signing, artifact attestation, SLSA Level 3+, immutable build environments"
            }
          },
          {
            "id": "cicd-002",
            "risikoelement": {
              "no": "Secrets eksponert i CI/CD logs eller environment variables",
              "en": "Secrets eksponert in CI/CD logs or environment variables"
            },
            "saarbarhet": {
              "no": "Hardkodede secrets, secrets i plaintext logs, ekko av env vars",
              "en": "Hardcoded secrets, secrets in plaintext logs, ekko of env vars"
            },
            "eksisterendeBeskyttelse": {
              "no": "Secret scanning i repos",
              "en": "Secret scanning in repositories"
            },
            "eksisterendeKontroll": {
              "no": "Periodisk gjennomgang av logs",
              "en": "Periodisk review of logs"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Secret managers (Vault, AWS Secrets Manager), secret rotation, mask secrets in logs",
              "en": "Secret managers (Vault, AWS Secrets Manager), secret rotation, mask secrets in logs"
            }
          },
          {
            "id": "cicd-003",
            "risikoelement": {
              "no": "Ukontrollert utrulling til produksjon",
              "en": "Uncontrolled deployment to production"
            },
            "saarbarhet": {
              "no": "Manglende approvals, ingen utrulling gates, direktegang fra dev til prod",
              "en": "Missing approvals, no deployment gates, direktegang from dev to prod"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell approval for prod",
              "en": "Manual approval for prod"
            },
            "eksisterendeKontroll": {
              "no": "utrulling loggføring",
              "en": "Deployment logging"
            },
            "K": 3,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "4-eyes principle, automated testing gates, canary utrullinger, rollback plan",
              "en": "4-eyes principle, automated testing gates, canary deployments, rollback plan"
            }
          },
          {
            "id": "cicd-004",
            "risikoelement": {
              "no": "Drift av usignerte eller uverifiserte artifacts",
              "en": "operations of usignerte or uverifiserte artifacts"
            },
            "saarbarhet": {
              "no": "Ingen signatursjekk på binaries, manglende provenance",
              "en": "No signaturcheck on binaries, missing provenance"
            },
            "eksisterendeBeskyttelse": {
              "no": "Artifacts fra trusted pipeline",
              "en": "Artifacts from trusted pipeline"
            },
            "eksisterendeKontroll": {
              "no": "manuell verifisering ved kritiske releases",
              "en": "Manual verifisering during critical releases"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Sigstore/Cosign, SLSA provenance, artifact verification before utrulling",
              "en": "Sigstore/Cosign, SLSA provenance, artifact verification before deployment"
            }
          },
          {
            "id": "cicd-005",
            "risikoelement": {
              "no": "Lateral movement fra kompromittert build agent",
              "en": "Lateral movement from kompromittert build agent"
            },
            "saarbarhet": {
              "no": "Build agents med for mange tilganger, delte credentials",
              "en": "Build agents have excessive access and use shared credentials"
            },
            "eksisterendeBeskyttelse": {
              "no": "Isolerte build environments",
              "en": "Isolerte build environments"
            },
            "eksisterendeKontroll": {
              "no": "nettverk segmentation",
              "en": "Network segmentation"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Ephemeral build agents, workload identity, zero trust networking",
              "en": "Ephemeral build agents, workload identity, zero trust networking"
            }
          }
        ]
      },
      {
        "id": "kildekode-sikkerhet",
        "navn": {
          "no": "Kildekode-sikkerhet",
          "en": "Source Code Security"
        },
        "risikoer": [
          {
            "id": "code-001",
            "risikoelement": {
              "no": "Secrets committed til source control (API keys, passwords)",
              "en": "Secrets committed to source control (API keys, passwords)"
            },
            "saarbarhet": {
              "no": "Utviklere committer.env-filer, hardkoder credentials",
              "en": "Utviklere committer.env-filer, hardkoder credentials"
            },
            "eksisterendeBeskyttelse": {
              "no": ".gitignore for sensitive files",
              "en": ".gitignore for sensitive files"
            },
            "eksisterendeKontroll": {
              "no": "Pre-commit hooks med secret scanning",
              "en": "Pre-commit hooks with secret scanning"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Gitleaks/TruffleHog, automated secret rotation ved leak, developer opplæring",
              "en": "Gitleaks/TruffleHog, automated secret rotation during leak, developer training"
            }
          },
          {
            "id": "code-002",
            "risikoelement": {
              "no": "Code gjennomgang fanger ikke opp sikkerhetsfeil",
              "en": "Code review does not detect security issues"
            },
            "saarbarhet": {
              "no": "Manglende sikkerhetsfokus i gjennomganger og tidspress",
              "en": "Missing security focus in reviews, tidspress"
            },
            "eksisterendeBeskyttelse": {
              "no": "Mandatory code gjennomgang",
              "en": "Mandatory code review"
            },
            "eksisterendeKontroll": {
              "no": "gjennomgang metrics",
              "en": "Review metrics"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Program for security champions, SAST i PR-flyt og sikkerhetssjekklister",
              "en": "Security champions program, SAST in PR-flow, security checklists"
            }
          },
          {
            "id": "code-003",
            "risikoelement": {
              "no": "Manglende branch protection tillater force push til main",
              "en": "Missing branch protection tillater force push to main"
            },
            "saarbarhet": {
              "no": "Åpen main branch uten krav til gjennomganger",
              "en": "Open main branch with no required reviews"
            },
            "eksisterendeBeskyttelse": {
              "no": "Branch protection på viktige repos",
              "en": "Branch protection on viktige repositories"
            },
            "eksisterendeKontroll": {
              "no": "Audit logs",
              "en": "Audit logs"
            },
            "K": 3,
            "I": 5,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Enforce branch protection, require signed commits, linear history",
              "en": "Enforce branch protection, require signed commits, linear history"
            }
          },
          {
            "id": "code-004",
            "risikoelement": {
              "no": "Kompromittert utviklerkonto gir tilgang til alle repos",
              "en": "A compromised developer account provides access to all repositories"
            },
            "saarbarhet": {
              "no": "Svake passord, manglende MFA, over-privilegerte tilganger",
              "en": "Weak passwords, missing MFA, and overly privileged access"
            },
            "eksisterendeBeskyttelse": {
              "no": "MFA requirement",
              "en": "MFA requirement"
            },
            "eksisterendeKontroll": {
              "no": "tilgangsgjennomganger",
              "en": "Access reviews"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Hardware keys (YubiKey), FIDO2, just-in-time tilgang, PAM for source control",
              "en": "Hardware keys (YubiKey), FIDO2, just-in-time access, PAM for source control"
            }
          }
        ]
      },
      {
        "id": "dependency-management",
        "navn": {
          "no": "Avhengighetsstyring",
          "en": "Dependency Management"
        },
        "risikoer": [
          {
            "id": "dep-001",
            "risikoelement": {
              "no": "Kjente sårbarheter i dependencies (CVE-er)",
              "en": "known vulnerabilities in dependencies (CVE-is)"
            },
            "saarbarhet": {
              "no": "Utdaterte packages, ingen automatisk oppdatering",
              "en": "Utdaterte packages, no automatic updating"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dependabot alerts",
              "en": "Dependabot alerts"
            },
            "eksisterendeKontroll": {
              "no": "Ukentlig gjennomgang av sikkerhetsvarsler",
              "en": "Ukentlig review of security advisories"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Automated dependency updates, SCA scanning, SBOM generation",
              "en": "Automated dependency updates, SCA scanning, SBOM generation"
            }
          },
          {
            "id": "dep-002",
            "risikoelement": {
              "no": "Dependency confusion / typosquatting attack",
              "en": "Dependency confusion / typosquatting attack"
            },
            "saarbarhet": {
              "no": "Manglende validering av package sources, public registries før private",
              "en": "Missing validation of package sources, public registries before private"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked dependency versions",
              "en": "Locked dependency versions"
            },
            "eksisterendeKontroll": {
              "no": "manuell verification av nye packages",
              "en": "Manual verification of nye packages"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Private registry først, namespace reservation, checksum verification",
              "en": "Use a private registry first, reserve namespaces, and verify checksums"
            }
          },
          {
            "id": "dep-003",
            "risikoelement": {
              "no": "Ondsinnet package installert fra kompromittert registry",
              "en": "Ondsinnet package installert from kompromittert registry"
            },
            "saarbarhet": {
              "no": "Automatisk installasjon uten verifikasjon, manglende signing",
              "en": "Automatic installasjon without verifikasjon, missing signing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Curated package list",
              "en": "Curated package list"
            },
            "eksisterendeKontroll": {
              "no": "Firewall rules for package downloads",
              "en": "Firewall rules for package downloads"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Package signing verification, air-gapped builds, vendoring dependencies",
              "en": "Package signing verification, air-gapped builds, vendoring dependencies"
            }
          },
          {
            "id": "dep-004",
            "risikoelement": {
              "no": "Transitive dependencies inneholder malware",
              "en": "Transitive dependencies inneholder malware"
            },
            "saarbarhet": {
              "no": "Manglende scanning av hele dependency tree",
              "en": "Missing scanning of hele dependency tree"
            },
            "eksisterendeBeskyttelse": {
              "no": "Direct dependencies scannet",
              "en": "Direct dependencies scannet"
            },
            "eksisterendeKontroll": {
              "no": "SBOM gjennomgang",
              "en": "SBOM review"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Deep SCA scanning, dependency tree visualization, minimize dependencies",
              "en": "Deep SCA scanning, dependency tree visualization, minimize dependencies"
            }
          }
        ]
      },
      {
        "id": "iac-config",
        "navn": {
          "no": "Infrastructure-as-Code",
          "en": "Infrastructure as Code"
        },
        "risikoer": [
          {
            "id": "iac-001",
            "risikoelement": {
              "no": "Feilkonfigurert infrastructure via IaC",
              "en": "Misconfigured infrastructure via IaC"
            },
            "saarbarhet": {
              "no": "Manglende validering av Terraform/CloudFormation og ingen håndheving av policy",
              "en": "Missing validation of Terraform/CloudFormation, no policy enforcement"
            },
            "eksisterendeBeskyttelse": {
              "no": "Peer gjennomgang av IaC changes",
              "en": "Peer review of IaC changes"
            },
            "eksisterendeKontroll": {
              "no": "Post-utrulling validation",
              "en": "Post-deployment validation"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "policy-as-code (OPA, Sentinel), automated testing, drift-deteksjon",
              "en": "Policy-as-code (OPA, Sentinel), automated testing, operations detection"
            }
          },
          {
            "id": "iac-002",
            "risikoelement": {
              "no": "Secrets i IaC templates",
              "en": "Secrets in IaC templates"
            },
            "saarbarhet": {
              "no": "Hardkodede legitimasjonsopplysninger i Terraform state og CloudFormation-parametere",
              "en": "Hardcoded credentials in Terraform state, CloudFormation parameters"
            },
            "eksisterendeBeskyttelse": {
              "no": "Encrypted Terraform state",
              "en": "Encrypted Terraform state"
            },
            "eksisterendeKontroll": {
              "no": "Secret scanning",
              "en": "Secret scanning"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "External secret stores, dynamic credentials, state file encryption",
              "en": "External secret stores, dynamic credentials, state file encryption"
            }
          },
          {
            "id": "iac-003",
            "risikoelement": {
              "no": "Uautoriserte endringer i produksjon-infrastruktur",
              "en": "Uautoriserte endringer in production-infrastruktur"
            },
            "saarbarhet": {
              "no": "Direkte tilgang til sky console, clickops, drift fra IaC",
              "en": "Direct access to the cloud console, click-ops, and operations from infrastructure as code"
            },
            "eksisterendeBeskyttelse": {
              "no": "Change management prosess",
              "en": "Change management process"
            },
            "eksisterendeKontroll": {
              "no": "drift-deteksjon tools",
              "en": "operations detection tools"
            },
            "K": 3,
            "I": 5,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Read-only console, automation-only changes, drift remediation",
              "en": "Read-only console, automation-only changes, operations remediation"
            }
          }
        ]
      },
      {
        "id": "container-security",
        "navn": {
          "no": "Container-sikkerhet",
          "en": "Container Security"
        },
        "risikoer": [
          {
            "id": "container-001",
            "risikoelement": {
              "no": "Sårbarheter i container images",
              "en": "Vulnerabilities in container images"
            },
            "saarbarhet": {
              "no": "Utdaterte base images, unødvendige packages",
              "en": "Outdated base images and unnecessary packages"
            },
            "eksisterendeBeskyttelse": {
              "no": "Official base images",
              "en": "Official base images"
            },
            "eksisterendeKontroll": {
              "no": "Weekly image scanning",
              "en": "Weekly image scanning"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Distroless images, automated scanning (Trivy, Grype), image signing",
              "en": "Distroless images, automated scanning (Trivy, Grype), image signing"
            }
          },
          {
            "id": "container-002",
            "risikoelement": {
              "no": "Privileged containers eller root execution",
              "en": "Privileged containers or root execution"
            },
            "saarbarhet": {
              "no": "Containers kjører som root, privileged mode",
              "en": "Containers run as root and in privileged mode"
            },
            "eksisterendeBeskyttelse": {
              "no": "Definerte sikkerhetskontekster",
              "en": "Security contexts defined"
            },
            "eksisterendeKontroll": {
              "no": "Admission controller warnings",
              "en": "Admission controller warnings"
            },
            "K": 4,
            "I": 5,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Ikke-root-brukere, fjerning av capabilities og Pod Security Standards",
              "en": "Non-root users, drop capabilities, Pod Security Standards"
            }
          },
          {
            "id": "container-003",
            "risikoelement": {
              "no": "Kompromittert container registry",
              "en": "Kompromittert container registry"
            },
            "saarbarhet": {
              "no": "Svak tilgangskontroll, manglende image signing",
              "en": "Weak access control, missing image signing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Private registry",
              "en": "Private registry"
            },
            "eksisterendeKontroll": {
              "no": "tilgang logs",
              "en": "Access logs"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Image signing (Cosign), admission webhooks, registry scanning",
              "en": "Image signing (Cosign), admission webhooks, registry scanning"
            }
          }
        ]
      },
      {
        "id": "deployment",
        "navn": {
          "no": "utrulling og release",
          "en": "Deployment"
        },
        "risikoer": [
          {
            "id": "deploy-001",
            "risikoelement": {
              "no": "Mislykket utrulling uten rollback-mulighet",
              "en": "Mislykket deployment without rollback-mulighet"
            },
            "saarbarhet": {
              "no": "Manglende rollback-strategi, irreversible migrations",
              "en": "Missing rollback-strategy, irreversible migrations"
            },
            "eksisterendeBeskyttelse": {
              "no": "Blue-green utrulling",
              "en": "Blue-green deployment"
            },
            "eksisterendeKontroll": {
              "no": "Health checks",
              "en": "Health checks"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automated rollback, feature flags, database migrations versioned",
              "en": "Automated rollback, feature flags, database migrations versioned"
            }
          },
          {
            "id": "deploy-002",
            "risikoelement": {
              "no": "Ukoordinert utrulling av avhengige tjenester",
              "en": "Ukoordinert deployment of avhengige services"
            },
            "saarbarhet": {
              "no": "Mikroservices deployed uavhengig uten API version control",
              "en": "Mikroservices deployed uavhengig without API version control"
            },
            "eksisterendeBeskyttelse": {
              "no": "utrulling windows",
              "en": "Deployment windows"
            },
            "eksisterendeKontroll": {
              "no": "Integration tests",
              "en": "Integration tests"
            },
            "K": 2,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "API versioning, backward compatibility, orchestrated utrullinger",
              "en": "API versioning, backward compatibility, orchestrated deployments"
            }
          },
          {
            "id": "deploy-003",
            "risikoelement": {
              "no": "Manglende observability etter utrulling",
              "en": "Missing observability after deployment"
            },
            "saarbarhet": {
              "no": "Problemer oppdages ikke før brukere rapporterer",
              "en": "Problemer oppdages not before users reports"
            },
            "eksisterendeBeskyttelse": {
              "no": "Basic overvåking",
              "en": "Basic monitoring"
            },
            "eksisterendeKontroll": {
              "no": "User reports",
              "en": "User reports"
            },
            "K": 2,
            "I": 3,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Distributed tracing, utrulling markers, SLO overvåking, canary metrics",
              "en": "Distributed tracing, deployment markers, SLO monitoring, canary metrics"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "fysisk-sikkerhet",
    "navn": {
      "no": "Fysisk sikkerhet",
      "en": "Physical Security"
    },
    "beskrivelse": {
      "no": "Risikoer knyttet til fysisk sikring av lokaler, datasentre, utstyr og personell",
      "en": "Risks related to physical protection of facilities, data centers, equipment, and personnel"
    },
    "kategorier": [
      {
        "id": "adgangskontroll",
        "navn": {
          "no": "Fysisk adgangskontroll",
          "en": "Physical Access Control"
        },
        "risikoer": [
          {
            "id": "physical-001",
            "risikoelement": {
              "no": "Uautorisert fysisk tilgang til datasenter/serverrom",
              "en": "Unauthorized physical access to the data center or server room"
            },
            "saarbarhet": {
              "no": "Svak adgangskontroll, deling av koder, tailgating",
              "en": "Weak access control, shared codes, and tailgating"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kortleser ved inngang",
              "en": "Card readers at entrances"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av adgang",
              "en": "Access logging"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Biometrisk tilgang, mantrap/airlock, vakthold, CCTV og tailgate-deteksjon",
              "en": "Biometric access, mantrap/airlock, security guards, CCTV, tailgate detection"
            }
          },
          {
            "id": "physical-002",
            "risikoelement": {
              "no": "Tapte eller stjålne adgangskort ikke deaktivert",
              "en": "Lost or stolen access cards are not deactivated"
            },
            "saarbarhet": {
              "no": "Langsom rapportering, manglende prosedyre for kort-deaktivering",
              "en": "Slow reporting and no clear procedure for card deactivation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Rapporteringsprosedyre",
              "en": "Reporting procedure"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig gjennomgang av aktive kort",
              "en": "Monthly review of active cards"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Instant card deactivation, 24/7 helpdesk, automatic expiry, multi-factor physical tilgang",
              "en": "Instant card deactivation, 24/7 helpdesk, automatic expiry, multi-factor physical access"
            }
          },
          {
            "id": "physical-003",
            "risikoelement": {
              "no": "Besøkende får ukontrollert tilgang til sensitive områder",
              "en": "Visitors gain uncontrolled access to sensitive areas"
            },
            "saarbarhet": {
              "no": "Manglende escort policy, besøkskort med for mye tilgang",
              "en": "No escort policy and visitor badges grant too much access"
            },
            "eksisterendeBeskyttelse": {
              "no": "Besøksregistrering",
              "en": "Visitor registration"
            },
            "eksisterendeKontroll": {
              "no": "Resepsjonsloggbok",
              "en": "Reception logbook"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Mandatory escort, visitor badges (time-limited), dedicated visitor areas, sign-in/out",
              "en": "Mandatory escort, visitor badges (time-limited), dedicated visitor areas, sign-in/out"
            }
          },
          {
            "id": "physical-004",
            "risikoelement": {
              "no": "Adgang utenom arbeidstid ikke logget eller overvåket",
              "en": "Access outside working hours is not logged or monitored"
            },
            "saarbarhet": {
              "no": "Manglende overvåking etter stengetid, ingen alarmer",
              "en": "No monitoring after closing hours and no alarms"
            },
            "eksisterendeBeskyttelse": {
              "no": "Adgangskortlogging",
              "en": "Access card logging"
            },
            "eksisterendeKontroll": {
              "no": "Ukentlig logggjennomgang",
              "en": "Weekly log review"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Real-time alerts for after-hours tilgang, CCTV integration, SOC overvåking",
              "en": "Real-time alerts for after-hours access, CCTV integration, SOC monitoring"
            }
          },
          {
            "id": "physical-005",
            "risikoelement": {
              "no": "Nødflukt-dører brukes som ordinær inngang (bypasser kontroll)",
              "en": "Emergency exits are used as normal entrances and bypass access control"
            },
            "saarbarhet": {
              "no": "Alarm-fatigue, propping av branndører, manglende enforcement",
              "en": "Alarm fatigue, fire doors propped open, and weak enforcement"
            },
            "eksisterendeBeskyttelse": {
              "no": "Door alarms",
              "en": "Door alarms"
            },
            "eksisterendeKontroll": {
              "no": "Periodiske inspeksjoner",
              "en": "Periodic inspections"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Delayed egress, instant SOC notification, door position sensors, video verification",
              "en": "Delayed egress, instant SOC notification, door position sensors, video verification"
            }
          }
        ]
      },
      {
        "id": "utstyrssikring",
        "navn": {
          "no": "Utstyrssikring",
          "en": "Equipment Security"
        },
        "risikoer": [
          {
            "id": "equip-001",
            "risikoelement": {
              "no": "Tyveri av bærbare enheter (laptops, telefoner, tablets)",
              "en": "Portable devices such as laptops, phones, and tablets are stolen"
            },
            "saarbarhet": {
              "no": "Enheter etterlatt usikret, manglende kabellås",
              "en": "Devices are left unsecured and cable locks are missing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Awareness-opplæring",
              "en": "Awareness-training"
            },
            "eksisterendeKontroll": {
              "no": "Asset sporing",
              "en": "Asset tracking"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Full disk encryption (mandatory), cable locks, clean desk policy, LoJack/enhet sporing",
              "en": "Full disk encryption (mandatory), cable locks, clean desk policy, LoJack/device tracking"
            }
          },
          {
            "id": "equip-002",
            "risikoelement": {
              "no": "Servere eller nettverksutstyr stjålet fra datasenter",
              "en": "Servers or network equipment are stolen from the data center"
            },
            "saarbarhet": {
              "no": "Rackenheter ikke låst eller boltet, manglende alarmer",
              "en": "Rack units are not locked or bolted down, and alarms are missing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked server room",
              "en": "Locked server room"
            },
            "eksisterendeKontroll": {
              "no": "Inventory checks",
              "en": "Inventory checks"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Rack locks, chassis locks, asset tags with alarms, cage/colocation security",
              "en": "Rack locks, chassis locks, asset tags with alarms, cage/colocation security"
            }
          },
          {
            "id": "equip-003",
            "risikoelement": {
              "no": "USB eller physical enheter brukes for data exfiltration",
              "en": "USB devices or other physical media are used for data exfiltration"
            },
            "saarbarhet": {
              "no": "USB-porter åpne, ingen enhet control",
              "en": "USB ports are open and there is no device control"
            },
            "eksisterendeBeskyttelse": {
              "no": "USB policy",
              "en": "USB policy"
            },
            "eksisterendeKontroll": {
              "no": "manuell enforcement",
              "en": "Manual enforcement"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Blokker USB-porter der det er mulig, bruk DLP, godkjent enhetsliste og moderne endepunktsbeskyttelse",
              "en": "USB port blocking, DLP, approved device whitelist, endpoint protection"
            }
          },
          {
            "id": "equip-004",
            "risikoelement": {
              "no": "Manglende destruksjon av utstyr ved avhending",
              "en": "Missing secure destruction of equipment during disposal"
            },
            "saarbarhet": {
              "no": "Harddisker ikke wiped, enheter solgt/donert med data",
              "en": "Harddisker not wiped, devices solgt/donert with data"
            },
            "eksisterendeBeskyttelse": {
              "no": "IT disposes of equipment",
              "en": "IT disposes of equipment"
            },
            "eksisterendeKontroll": {
              "no": "manuell wipe sjekkliste",
              "en": "Manual wipe checklist"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Certified data destruction (NIST 800-88), degaussing, physical destruction, chain of custody",
              "en": "Certified data destruction (NIST 800-88), degaussing, physical destruction, chain of custody"
            }
          }
        ]
      },
      {
        "id": "miljokontroll",
        "navn": {
          "no": "Miljøkontroll",
          "en": "Environmental Controls"
        },
        "risikoer": [
          {
            "id": "env-001",
            "risikoelement": {
              "no": "Brann i datasenter ødelegger kritisk utstyr",
              "en": "Fire in the data center destroys critical equipment"
            },
            "saarbarhet": {
              "no": "Manglende brannslokkingssystem, brennbare materialer",
              "en": "Missing brannslokkingssystem, brennbare materialer"
            },
            "eksisterendeBeskyttelse": {
              "no": "Smoke detectors",
              "en": "Smoke detectors"
            },
            "eksisterendeKontroll": {
              "no": "årlig fire drill",
              "en": "Annual fire drill"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 1,
            "foreslaatteTiltak": {
              "no": "FM-200/Inergen suppression, early warning detection, redundant sites, fire-resistant construction",
              "en": "FM-200/Inergen suppression, early warning detection, redundant sites, fire-resistant construction"
            }
          },
          {
            "id": "env-002",
            "risikoelement": {
              "no": "Vannlekkasje fra tak/rør ødelegger servere",
              "en": "Water leakage from roofs or pipes damages servers"
            },
            "saarbarhet": {
              "no": "Rør over racks, flat tak, manglende leak detection",
              "en": "Pipes above racks, flat roofs, and missing leak detection"
            },
            "eksisterendeBeskyttelse": {
              "no": "Waterproof ceiling",
              "en": "Waterproof ceiling"
            },
            "eksisterendeKontroll": {
              "no": "Visual inspections",
              "en": "Visual inspections"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Water leak detection sensors, raised floors, no pipes above racks, drainage",
              "en": "Water leak detection sensors, raised floors, no pipes above racks, drainage"
            }
          },
          {
            "id": "env-003",
            "risikoelement": {
              "no": "Overoppheting/kjølesvikt fører til shutdown",
              "en": "Overheating or cooling failure leads to shutdown"
            },
            "saarbarhet": {
              "no": "Enkeltstående AC, ingen redundans i kjøling",
              "en": "Single cooling unit and no redundancy in cooling"
            },
            "eksisterendeBeskyttelse": {
              "no": "HVAC system",
              "en": "HVAC system"
            },
            "eksisterendeKontroll": {
              "no": "Temperature overvåking",
              "en": "Temperature monitoring"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Redundant HVAC (N+1), hot/cold aisle containment, temp/humidity alarms, emergency cooling",
              "en": "Redundant HVAC (N+1), hot/cold aisle containment, temp/humidity alarms, emergency cooling"
            }
          },
          {
            "id": "env-004",
            "risikoelement": {
              "no": "Strømbrudd uten tilstrekkelig backup",
              "en": "power outages without tilstrekkelig backup"
            },
            "saarbarhet": {
              "no": "Enkelt strømforsyning, UPS runtime for kort",
              "en": "Single power feed and UPS runtime that is too short"
            },
            "eksisterendeBeskyttelse": {
              "no": "UPS backup",
              "en": "UPS backup"
            },
            "eksisterendeKontroll": {
              "no": "månedlig UPS tests",
              "en": "Monthly UPS tests"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Redundant power (A+B feeds), generator backup, extended UPS runtime, automatic failover",
              "en": "Redundant power (A+B feeds), generator backup, extended UPS runtime, automatic failover"
            }
          },
          {
            "id": "env-005",
            "risikoelement": {
              "no": "Naturkatastrofe (flom, jordskjelv, storm) ødelegger fasiliteter",
              "en": "Natural disasters such as floods, earthquakes, or storms damage facilities"
            },
            "saarbarhet": {
              "no": "Singel site, høyrisikoområde",
              "en": "Single site in a high-risk area"
            },
            "eksisterendeBeskyttelse": {
              "no": "Insurance",
              "en": "Insurance"
            },
            "eksisterendeKontroll": {
              "no": "Disaster gjenoppretting plan",
              "en": "Disaster recovery plan"
            },
            "K": 4,
            "I": 5,
            "T": 5,
            "sannsynlighet": 1,
            "foreslaatteTiltak": {
              "no": "Geographically distributed datacenters, disaster gjenoppretting sites, regular DR testing",
              "en": "Geographically distributed datacenters, disaster recovery sites, regular DR testing"
            }
          }
        ]
      },
      {
        "id": "overvaking",
        "navn": {
          "no": "Overvåkning",
          "en": "Monitoring"
        },
        "risikoer": [
          {
            "id": "surv-001",
            "risikoelement": {
              "no": "Manglende CCTV-dekning av kritiske områder",
              "en": "Missing CCTV-dekning of critical areas"
            },
            "saarbarhet": {
              "no": "Blinde soner, utdaterte kameraer, dårlig oppløsning",
              "en": "Blind spots, outdated cameras, and poor resolution"
            },
            "eksisterendeBeskyttelse": {
              "no": "CCTV i inngangsområder",
              "en": "CCTV in entrance areas"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis camera checks",
              "en": "Quarterly camera checks"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Full coverage CCTV, HD cameras, motion detection, 90-day retention, SOC integration",
              "en": "Full coverage CCTV, HD cameras, motion detection, 90-day retention, SOC integration"
            }
          },
          {
            "id": "surv-002",
            "risikoelement": {
              "no": "CCTV-opptak ikke lagret eller tilgjengelig ved hendelse",
              "en": "CCTV-opptak not lagret or tilgjengelig during incident"
            },
            "saarbarhet": {
              "no": "Kort retention, overskrevet data, manglende backup",
              "en": "short retention, overskrevet data, missing backup"
            },
            "eksisterendeBeskyttelse": {
              "no": "30-day retention",
              "en": "30-day retention"
            },
            "eksisterendeKontroll": {
              "no": "manuell backup on request",
              "en": "Manual backup on request"
            },
            "K": 3,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "90+ day retention, redundant storage, encrypted backups, tamper-evident",
              "en": "90+ day retention, redundant storage, encrypted backups, tamper-evident"
            }
          },
          {
            "id": "surv-003",
            "risikoelement": {
              "no": "Ingen varsling ved sikkerhetshendelser (uautorisert adgang)",
              "en": "No alerting during security incidents such as unauthorized physical access"
            },
            "saarbarhet": {
              "no": "Alarmer kun lokalt, ingen SOC-integrasjon",
              "en": "Alarmer only local, no SOC-integrasjon"
            },
            "eksisterendeBeskyttelse": {
              "no": "Local alarms",
              "en": "Local alarms"
            },
            "eksisterendeKontroll": {
              "no": "Weekly alarm tests",
              "en": "Weekly alarm tests"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "24/7 SOC-overvåking, umiddelbare varsler, respons fra vekter og integrasjon med SIEM",
              "en": "24/7 SOC monitoring, instant alerts, security guard response, integration with SIEM"
            }
          },
          {
            "id": "surv-004",
            "risikoelement": {
              "no": "CCTV-system selv kompromittert",
              "en": "CCTV-system selv kompromittert"
            },
            "saarbarhet": {
              "no": "Default credentials, utdatert firmware, nettverkstilgang",
              "en": "Default credentials, outdated firmware, and network access"
            },
            "eksisterendeBeskyttelse": {
              "no": "Isolated VLAN",
              "en": "Isolated VLAN"
            },
            "eksisterendeKontroll": {
              "no": "Årlig sikkerhetsgjennomgang",
              "en": "Annual security review"
            },
            "K": 4,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Segmented nettverk, strong auth, firmware updates, encrypted streams, VPN tilgang only",
              "en": "Segmented network, strong auth, firmware updates, encrypted streams, VPN access only"
            }
          }
        ]
      },
      {
        "id": "dokumenthåndtering",
        "navn": {
          "no": "Dokumenthåndtering",
          "en": "Document Handling"
        },
        "risikoer": [
          {
            "id": "doc-001",
            "risikoelement": {
              "no": "Sensitive dokumenter etterlatt på skrivere/printere",
              "en": "Sensitive documents are left on printers"
            },
            "saarbarhet": {
              "no": "Manglende pull-printing, clean desk ikke håndhevet",
              "en": "Missing pull printing and a clean desk policy that is not enforced"
            },
            "eksisterendeBeskyttelse": {
              "no": "Clean desk policy",
              "en": "Clean desk policy"
            },
            "eksisterendeKontroll": {
              "no": "Periodic desk audits",
              "en": "Periodic desk audits"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Pull printing (PIN/badge), automatic document shredding, clean desk enforcement",
              "en": "Pull printing (PIN/badge), automatic document shredding, clean desk enforcement"
            }
          },
          {
            "id": "doc-002",
            "risikoelement": {
              "no": "Papirdokumenter destrueres ikke forsvarlig",
              "en": "Paper documents are not destroyed securely"
            },
            "saarbarhet": {
              "no": "Dokumenter i vanlig søppel, dumpster diving mulig",
              "en": "Documents are discarded in regular waste, making dumpster diving possible"
            },
            "eksisterendeBeskyttelse": {
              "no": "Shredding bins",
              "en": "Shredding bins"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis awareness reminders",
              "en": "Quarterly awareness reminders"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Cross-cut shredders (DIN P-4+), certified destruction service, locked disposal bins",
              "en": "Cross-cut shredders (DIN P-4+), certified destruction service, locked disposal bins"
            }
          },
          {
            "id": "doc-003",
            "risikoelement": {
              "no": "Whiteboards med sensitive info synlig gjennom vinduer",
              "en": "Whiteboards with sensitive information are visible through windows"
            },
            "saarbarhet": {
              "no": "Møterom mot gateplan, ingen personvern film",
              "en": "Meeting rooms facing street level and no privacy film"
            },
            "eksisterendeBeskyttelse": {
              "no": "Awareness about personvern",
              "en": "Awareness about privacy"
            },
            "eksisterendeKontroll": {
              "no": "Visual checks",
              "en": "Visual checks"
            },
            "K": 4,
            "I": 2,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "personvern film on windows, interior meeting rooms, clean whiteboard policy, digital whiteboards",
              "en": "Privacy film on windows, interior meeting rooms, clean whiteboard policy, digital whiteboards"
            }
          }
        ]
      },
      {
        "id": "inngangsportaler",
        "navn": {
          "no": "Resepsjon og inngang",
          "en": "Entry Points"
        },
        "risikoer": [
          {
            "id": "reception-001",
            "risikoelement": {
              "no": "Social engineering ved resepsjon gir uautorisert adgang",
              "en": "Social engineering at reception provides unauthorized access"
            },
            "saarbarhet": {
              "no": "Resepsjonist ikke trent i sikkerhetsbevissthet, høflig-hetsfelle",
              "en": "Reception staff are not trained in security awareness and are vulnerable to politeness-based social engineering"
            },
            "eksisterendeBeskyttelse": {
              "no": "Visitor registration",
              "en": "Visitor registration"
            },
            "eksisterendeKontroll": {
              "no": "sikkerhetsbevissthet opplæring",
              "en": "Security awareness training"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Regelmessige øvelser i sosial manipulering, tydelige eskaleringsprosedyrer og sikkerhetskultur",
              "en": "Regular social engineering drills, clear escalation procedures, security culture"
            }
          },
          {
            "id": "reception-002",
            "risikoelement": {
              "no": "Pakker eller leveranser inneholder skjult utstyr (bugs, enheter)",
              "en": "Packages or deliveries contain hidden equipment such as bugs or other devices"
            },
            "saarbarhet": {
              "no": "Ukontrollert mottak av pakker, ingen scanning",
              "en": "Packages are received without sufficient control and are not scanned"
            },
            "eksisterendeBeskyttelse": {
              "no": "Delivery area separate from office",
              "en": "Delivery area separate from office"
            },
            "eksisterendeKontroll": {
              "no": "Visual inspection",
              "en": "Visual inspection"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 1,
            "foreslaatteTiltak": {
              "no": "Røntgenscreening i områder med høyt sikkerhetsnivå, policy for verifiserte avsendere og rutiner for postmottak",
              "en": "Use X-ray screening in high-security areas, require verified senders, and establish mail-room procedures"
            }
          },
          {
            "id": "reception-003",
            "risikoelement": {
              "no": "Piggybacking/tailgating ved hovedinngang",
              "en": "Piggybacking or tailgating at the main entrance"
            },
            "saarbarhet": {
              "no": "Stor trafikk, mange ansatte holder døren for andre",
              "en": "Heavy traffic means many employees hold the door open for others"
            },
            "eksisterendeBeskyttelse": {
              "no": "Sikkerhetsskilting",
              "en": "Security signage"
            },
            "eksisterendeKontroll": {
              "no": "Periodic observations",
              "en": "Periodic observations"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Sluser, mantraps, anti-tailgate-sensorer og kampanjer for sikkerhetskultur",
              "en": "Turnstiles, mantraps, anti-tailgate sensors, security culture campaigns"
            }
          }
        ]
      },
      {
        "id": "remote-sites",
        "navn": {
          "no": "Remote sites og filialer",
          "en": "Remote Sites"
        },
        "risikoer": [
          {
            "id": "remote-001",
            "risikoelement": {
              "no": "Mindre kontorer kan lettere bli kompromittert fysisk",
              "en": "Smaller offices are more easily compromised physically"
            },
            "saarbarhet": {
              "no": "Manglende standardisering, budsjettmessige begrensninger",
              "en": "Missing standardisering, budsjettmessige begrensninger"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked doors",
              "en": "Locked doors"
            },
            "eksisterendeKontroll": {
              "no": "årlig site visits",
              "en": "Annual site visits"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Felles sikkerhetsstandarder for alle lokasjoner, sentral overvåking og risikobaserte kontroller",
              "en": "Corporate security standards for all sites, central monitoring, risk-based controls"
            }
          },
          {
            "id": "remote-002",
            "risikoelement": {
              "no": "Remote datacom closets/IDF usikret",
              "en": "Remote data communication closets and IDF rooms are unsecured"
            },
            "saarbarhet": {
              "no": "Nettverksutstyr i låste rom men med bred nøkkeltilgang",
              "en": "Network equipment is in locked rooms, but too many people have key access"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked closets",
              "en": "Locked closets"
            },
            "eksisterendeKontroll": {
              "no": "Periodic inspections",
              "en": "Periodic inspections"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Korttilgang til IDF-rom, nettverkstilgangskontroll (802.1X), portsikkerhet og alarmer",
              "en": "Card access on IDF rooms, network access control (802.1X), port security, alarms"
            }
          },
          {
            "id": "remote-003",
            "risikoelement": {
              "no": "Hjemmekontor mangler fysisk sikkerhet",
              "en": "Hjemmekontor lacks Physical security"
            },
            "saarbarhet": {
              "no": "Ansatte jobber fra usikrede lokasjoner, familie har tilgang",
              "en": "Employees work from unsecured locations where family members or others may gain access"
            },
            "eksisterendeBeskyttelse": {
              "no": "Work-from-home policy",
              "en": "Work-from-home policy"
            },
            "eksisterendeKontroll": {
              "no": "Self-certification",
              "en": "Self-certification"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Endepunktsikkerhet (EDR), full diskkryptering, personvernfilter, kabellåser og obligatorisk VPN",
              "en": "Endpoint security (EDR), full disk encryption, privacy screens, cable locks, VPN mandatory"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "generell",
    "navn": {
      "no": "Generell IT-tjeneste",
      "en": "General IT Service"
    },
    "beskrivelse": {
      "no": "Risikoer som gjelder for de fleste IT-tjenester",
      "en": "Risks that apply to most IT services"
    },
    "kategorier": [
      {
        "id": "tilgangsstyring",
        "navn": {
          "no": "Tilgangsstyring",
          "en": "Access Management"
        },
        "risikoer": [
          {
            "id": "tilgang-001",
            "risikoelement": {
              "no": "Brukere får ikke tilgang til systemet",
              "en": "Users cannot access the system"
            },
            "saarbarhet": {
              "no": "Manuelle rutiner for vedlikehold av admin/superbrukere",
              "en": "Manual routines for maintaining admin and superuser accounts"
            },
            "eksisterendeBeskyttelse": {
              "no": "FEIDE autentisering, weblogin med tofaktor",
              "en": "FEIDE authentication and web login with MFA"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig gjennomgang av brukerrettigheter",
              "en": "Monthly review of user permissions"
            },
            "K": 2,
            "I": 1,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automatisere brukeradministrasjon, implementere selvbetjeningsportal",
              "en": "Automate user administration and implement a self-service portal"
            }
          },
          {
            "id": "tilgang-002",
            "risikoelement": {
              "no": "Bruker beholder tilgang etter at bruker har sluttet/endret stilling",
              "en": "A user retains access after leaving or changing role"
            },
            "saarbarhet": {
              "no": "Dårlige rutiner for avslutning av brukere, manglende automatikk",
              "en": "Poor user offboarding routines and missing automation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Delvis HR-system integrasjon",
              "en": "Partial HR system integration"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis tilgangsgjennomgang",
              "en": "Quarterly access review"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automatisk deaktivering ved avslutning, full integrasjon med HR-system",
              "en": "Automatic deactivation during offboarding and full integration with the HR system"
            }
          },
          {
            "id": "tilgang-003",
            "risikoelement": {
              "no": "Bruker får flere tilganger enn nødvendig",
              "en": "A user receives more access than necessary"
            },
            "saarbarhet": {
              "no": "Lite granulerte tilganger, vanskelig å vurdere hva en bruker skal ha",
              "en": "Coarse-grained access rights make it difficult to assess what access a user should have"
            },
            "eksisterendeBeskyttelse": {
              "no": "Godkjenning av leder ved tildeling",
              "en": "Manager approval during access assignment"
            },
            "eksisterendeKontroll": {
              "no": "Årlig tilgangsgjennomgang",
              "en": "Annual access review"
            },
            "K": 3,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere roller-basert tilgangsstyring (RBAC), minste privilegium",
              "en": "Implement role-based access control (RBAC) and least privilege"
            }
          },
          {
            "id": "tilgang-004",
            "risikoelement": {
              "no": "Uvedkommende får tilgang pga. passord på avveie",
              "en": "Unauthorized parties gain access because of compromised passwords"
            },
            "saarbarhet": {
              "no": "Usikker oppbevaring av passord, passord som brukes på flere systemer",
              "en": "Insecure password storage and password reuse across multiple systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "Passordpolicy med krav til kompleksitet",
              "en": "Password policy with complexity requirements"
            },
            "eksisterendeKontroll": {
              "no": "Tofaktorautentisering for admin",
              "en": "Multi-factor authentication for admin"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Passkeys/FIDO2, obligatorisk tofaktor for alle",
              "en": "Passkeys/FIDO2 and mandatory MFA for all users"
            }
          },
          {
            "id": "tilgang-005",
            "risikoelement": {
              "no": "Delte brukerkontoer gjør sporing umulig",
              "en": "Shared user accounts make traceability impossible"
            },
            "saarbarhet": {
              "no": "Generiske admin-kontoer, delte funksjonskontoer",
              "en": "Generic admin accounts and shared functional accounts"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot deling",
              "en": "Policy against account sharing"
            },
            "eksisterendeKontroll": {
              "no": "Logggjennomgang",
              "en": "Log review"
            },
            "K": 3,
            "I": 5,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Personlige kontoer for alle, PAM-løsning, sporbarhet i logger",
              "en": "Individual accounts for all users, a PAM solution, and traceability in logs"
            }
          },
          {
            "id": "tilgang-006",
            "risikoelement": {
              "no": "Service accounts med permanente credentials",
              "en": "Service accounts use permanent credentials"
            },
            "saarbarhet": {
              "no": "Hardkodede passord, ingen rotasjon av secrets",
              "en": "Hardcoded passwords and no rotation of secrets"
            },
            "eksisterendeBeskyttelse": {
              "no": "Krypterte konfig-filer",
              "en": "Encrypted configuration files"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av service accounts",
              "en": "Annual review of service accounts"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Secrets management (Vault), automatisk rotasjon, short-lived tokens",
              "en": "Secrets management (Vault), automatic rotation, and short-lived tokens"
            }
          },
          {
            "id": "tilgang-007",
            "risikoelement": {
              "no": "API-nøkler eksponert i kode eller logger",
              "en": "API keys are exposed in code or logs"
            },
            "saarbarhet": {
              "no": "Secrets i git history, klartekst-loggføring",
              "en": "Secrets in git history and plaintext logging"
            },
            "eksisterendeBeskyttelse": {
              "no": ".gitignore for secrets",
              "en": ".gitignore for secrets"
            },
            "eksisterendeKontroll": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Secret scanning (TruffleHog), secrets manager, pre-commit hooks",
              "en": "Secret scanning (TruffleHog), secrets manager, pre-commit hooks"
            }
          },
          {
            "id": "tilgang-008",
            "risikoelement": {
              "no": "SSO/federation feil låser ut mange brukere",
              "en": "SSO or federation failures lock out many users"
            },
            "saarbarhet": {
              "no": "Single point of failure i SAML/OIDC-integrasjon, feil konfigurasjon, sertifikat utløpt",
              "en": "Single point of failure in the SAML/OIDC integration, misconfiguration, and expired certificates"
            },
            "eksisterendeBeskyttelse": {
              "no": "SSO via FEIDE/Azure AD",
              "en": "SSO via FEIDE/Azure AD"
            },
            "eksisterendeKontroll": {
              "no": "Overvåking av innlogginger",
              "en": "Monitoring of logins"
            },
            "K": 4,
            "I": 2,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Redundans i federation, sertifikatovervåking, break-glass accounts utenfor SSO, dokumenterte gjenoppretting-prosedyrer",
              "en": "Redundancy in federation, certificate monitoring, break-glass accounts outside SSO, and documented recovery procedures"
            }
          },
          {
            "id": "tilgang-009",
            "risikoelement": {
              "no": "Foreldreløse kontoer uten eier",
              "en": "Orphaned accounts without an owner"
            },
            "saarbarhet": {
              "no": "Kontoer for tidligere ansatte eller test-kontoer som fortsatt eksisterer uten kjent eier eller formål",
              "en": "Accounts for former employees or test accounts still exist without a known owner or purpose"
            },
            "eksisterendeBeskyttelse": {
              "no": "Periodisk tilgangsgjennomgang",
              "en": "Periodic access review"
            },
            "eksisterendeKontroll": {
              "no": "Manuell gjennomgang ved gjennomgang",
              "en": "Manual review during periodic access reviews"
            },
            "K": 3,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Automatisert identifisering av orphaned accounts, krav om eier for alle kontoer, automatisk deaktivering etter inaktivitet",
              "en": "Automated identification of orphaned accounts, owner requirements for all accounts, and automatic deactivation after inactivity"
            }
          },
          {
            "id": "tilgang-010",
            "risikoelement": {
              "no": "Manglende eller ineffektiv tilgang certification",
              "en": "Missing or ineffective access certification"
            },
            "saarbarhet": {
              "no": "Tilgangsgjennomganger ikke gjennomført, attestations blir 'rubber stamped', ingen oppfølging av funn",
              "en": "Access reviews are not completed, attestations are rubber-stamped, and findings are not followed up"
            },
            "eksisterendeBeskyttelse": {
              "no": "Årlig tilgangsgjennomgang",
              "en": "Annual access review"
            },
            "eksisterendeKontroll": {
              "no": "Spreadsheet-basert gjennomgang",
              "en": "Spreadsheet-based review"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Implementere verktøy for identitetsstyring, risikobaserte gjennomganger og automatisk tilbakekalling ved manglende svar",
              "en": "Implement identity governance tooling, risk-based reviews for high-risk access, and automatic revocation on non-response"
            }
          },
          {
            "id": "tilgang-011",
            "risikoelement": {
              "no": "Privilegert tilgang styres ikke tilstrekkelig",
              "en": "Privileged access is not managed sufficiently"
            },
            "saarbarhet": {
              "no": "Privilegerte kontoer deles, ingen session recording, permanente admin-rettigheter, ikke sporbart hvem som gjorde hva",
              "en": "Privileged accounts are shared, there is no session recording, admin rights are permanent, and it is not traceable who did what"
            },
            "eksisterendeBeskyttelse": {
              "no": "Admin-kontoer er separerte",
              "en": "Dedicated admin accounts are used"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av admin-aktivitet",
              "en": "Logging of admin activity"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere PAM-løsning med session recording, privileged elevation arbeidsflyt, just-in-time admin tilgang",
              "en": "Implement a PAM solution with session recording, privileged elevation workflows, and just-in-time admin access"
            }
          },
          {
            "id": "tilgang-012",
            "risikoelement": {
              "no": "Manglende Just-In-Time (JIT) tilgang",
              "en": "Missing Just-In-Time (JIT) access"
            },
            "saarbarhet": {
              "no": "Brukere får permanente tilganger i stedet for midlertidige, øker risiko ved kompromittering",
              "en": "Users receive permanent access instead of temporary access, increasing risk in the event of compromise"
            },
            "eksisterendeBeskyttelse": {
              "no": "Manuelle tildelinger ved behov",
              "en": "Manual assignments as needed"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang fjerner noe",
              "en": "Annual review removes some excess access"
            },
            "K": 3,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere JIT tilgang med automatisk utløp, self-service med godkjenning, time-boxed privileged tilgang",
              "en": "Implement JIT access with automatic expiry, self-service with approval, and time-boxed privileged access"
            }
          },
          {
            "id": "tilgang-013",
            "risikoelement": {
              "no": "Directory services synkroniseringsfeil",
              "en": "Directory service synchronization failures"
            },
            "saarbarhet": {
              "no": "AD/LDAP sync feiler, schema drift mellom systemer, ukonsistente brukerdata på tvers av systemer",
              "en": "AD/LDAP sync fails, schema operations occurs between systems, and user data becomes inconsistent across systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "Automatisk AD-sync til sky",
              "en": "Automatic AD sync to the cloud"
            },
            "eksisterendeKontroll": {
              "no": "Ukentlig sjekk av sync-status",
              "en": "Weekly check of sync status"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Overvåke sync-status kontinuerlig, varsling ved feil, reconciliation-rapporter, test sync i staging",
              "en": "Continuously monitor sync status, alert on failures, generate reconciliation reports, and test sync in staging"
            }
          },
          {
            "id": "tilgang-014",
            "risikoelement": {
              "no": "Eksterne identiteter får for mye tilgang eller feil livssyklus",
              "en": "External identities receive excessive access or are managed with the wrong lifecycle"
            },
            "saarbarhet": {
              "no": "B2B-partnere, konsulenter og leverandører får interne kontoer, vanskelig å skille fra ansatte, ingen utløpsdato",
              "en": "B2B partners, consultants, and vendors receive internal accounts, are hard to distinguish from employees, and have no expiry date"
            },
            "eksisterendeBeskyttelse": {
              "no": "Guest-kontoer i Azure AD",
              "en": "Guest accounts in Azure AD"
            },
            "eksisterendeKontroll": {
              "no": "Manuell oppfølging av eksterne",
              "en": "Manual follow-up of external users"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Dedikert external identity management, automatisk utløp, tydelig merking, attestation av sponsor",
              "en": "Dedicated external identity management, automatic expiry, clear labeling, and sponsor attestation"
            }
          },
          {
            "id": "tilgang-015",
            "risikoelement": {
              "no": "Break-glass-tilgang fungerer ikke når den trengs",
              "en": "Break-glass access does not work when it is needed"
            },
            "saarbarhet": {
              "no": "Ingen emergency tilgang når SSO/IAM feiler, break-glass kontoer ikke testet eller dokumentert",
              "en": "No emergency access is available when SSO/IAM fails, and break-glass accounts are not tested or documented"
            },
            "eksisterendeBeskyttelse": {
              "no": "Lokal admin-konto på noen systemer",
              "en": "Local admin accounts on some systems"
            },
            "eksisterendeKontroll": {
              "no": "Passord i safe",
              "en": "Passwords stored in a safe"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Dokumenterte break-glass prosedyrer, test kvartalsvis, varsling ved bruk, rotasjon av credentials etter bruk",
              "en": "Documented break-glass procedures, quarterly testing, alerting on use, and credential rotation after use"
            }
          }
        ]
      },
      {
        "id": "teknisk-drift",
        "navn": {
          "no": "Teknisk drift",
          "en": "Technical Operations"
        },
        "risikoer": [
          {
            "id": "drift-001",
            "risikoelement": {
              "no": "Systemet kan ikke gjenopprettes etter feil/krasj",
              "en": "The service cannot be restored after failures or crashes"
            },
            "saarbarhet": {
              "no": "Manglende backup av systemet, ikke testet backup",
              "en": "Missing backup of the system and untested backups"
            },
            "eksisterendeBeskyttelse": {
              "no": "Daglig backup til separate servere",
              "en": "Daily backup to separate servers"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig backup-test",
              "en": "Monthly backup test"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automatisk backup-testing, dokumentere gjenopprettingsprosedyrer",
              "en": "Automatic backup testing and documented recovery procedures"
            }
          },
          {
            "id": "drift-002",
            "risikoelement": {
              "no": "Kritisk programvare blir utdatert og usikker",
              "en": "Critical software becomes outdated and insecure"
            },
            "saarbarhet": {
              "no": "Manglende patch-management, forsinkelser i oppdatering",
              "en": "Missing patch management and delayed updates"
            },
            "eksisterendeBeskyttelse": {
              "no": "Månedlig oppdateringsvindu",
              "en": "Monthly maintenance window for updates"
            },
            "eksisterendeKontroll": {
              "no": "Sårbarhetsskanning",
              "en": "Vulnerability scanning"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automatisert patch-management, kritiske oppdateringer innen 24t",
              "en": "Automated patch management and critical updates within 24 hours"
            }
          },
          {
            "id": "drift-003",
            "risikoelement": {
              "no": "backup feiler uten at noen oppdager det",
              "en": "Backup fails without anyone noticing"
            },
            "saarbarhet": {
              "no": "Manglende overvåking av backup-jobber",
              "en": "Missing monitoring of backup jobs"
            },
            "eksisterendeBeskyttelse": {
              "no": "Ukentlig manuell sjekk",
              "en": "Weekly manual check"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig test-restore",
              "en": "Monthly test-restore"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automatisk overvåking, varsling ved feil, backup verification",
              "en": "Automatic monitoring, alerting on failures, and backup verification"
            }
          },
          {
            "id": "drift-004",
            "risikoelement": {
              "no": "Lang downtime ved gjenoppretting",
              "en": "Long downtime during recovery"
            },
            "saarbarhet": {
              "no": "backup ikke tilpasset RTO/RPO-krav",
              "en": "Backup not tilpasset RTO/RPO-requirements"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentert prosedyre",
              "en": "Documented procedure"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis DR-test",
              "en": "Quarterly DR-test"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Inkrementell backup, hot standby, redusere RTO/RPO",
              "en": "Inkrementell backup, hot standby, reduce RTO/RPO"
            }
          },
          {
            "id": "drift-005",
            "risikoelement": {
              "no": "Nøkkelpersoner slutter - kunnskapstap",
              "en": "Key personnel slutter - kunnskapstap"
            },
            "saarbarhet": {
              "no": "Manglende dokumentasjon, kunnskapssiloer",
              "en": "Missing documentation, kunnskapssiloer"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe dokumentasjon",
              "en": "some documentation"
            },
            "eksisterendeKontroll": {
              "no": "Knowledge sharing møter",
              "en": "Knowledge sharing meetings"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Runbooks, cross-opplæring, dokumentasjonsstandarder",
              "en": "Runbooks, cross-training, dokumentasjonsstandarder"
            }
          }
        ]
      },
      {
        "id": "applikasjon",
        "navn": {
          "no": "Applikasjonssikkerhet",
          "en": "Application Security"
        },
        "risikoer": [
          {
            "id": "app-001",
            "risikoelement": {
              "no": "SQL injection gir uautorisert tilgang til database",
              "en": "SQL injection gives unauthorized access to the database"
            },
            "saarbarhet": {
              "no": "Manglende input-validering, dynamiske SQL-spørringer",
              "en": "Missing input validation and dynamic SQL queries"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe parameterisering av queries",
              "en": "some parameterisering of queries"
            },
            "eksisterendeKontroll": {
              "no": "Årlig penetrasjonstest",
              "en": "Annual penetrasjonstest"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Parameteriserte queries overalt, input-validering, WAF",
              "en": "Parameteriserte queries overalt, input-validation, WAF"
            }
          },
          {
            "id": "app-002",
            "risikoelement": {
              "no": "Cross-Site Scripting (XSS) angrep",
              "en": "Cross-Site Scripting (XSS) angrep"
            },
            "saarbarhet": {
              "no": "Manglende output encoding, tillater bruker-generert HTML",
              "en": "Missing output encoding, tillater user-generert HTML"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe input-sanitering",
              "en": "some input-sanitization"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis sårbarhetsscanning",
              "en": "Quarterly vulnerability scanning"
            },
            "K": 3,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Content Security Policy (CSP) og output-koding",
              "en": "Content Security Policy (CSP), output encoding"
            }
          },
          {
            "id": "app-003",
            "risikoelement": {
              "no": "Avhengigheter med kjente sårbarheter",
              "en": "Avhengigheter with known vulnerabilities"
            },
            "saarbarhet": {
              "no": "Utdaterte biblioteker og pakker med sikkerhetshull",
              "en": "Utdaterte biblioteker and packages with sikkerhetshull"
            },
            "eksisterendeBeskyttelse": {
              "no": "Delvis oppdatering av avhengigheter",
              "en": "Partial updating of avhengigheter"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis dependency scanning",
              "en": "Quarterly dependency scanning"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Automatisk dependency scanning i CI/CD, patch innen 7 dager",
              "en": "Automatic dependency scanning in CI/CD, patch innen 7 dager"
            }
          },
          {
            "id": "app-004",
            "risikoelement": {
              "no": "Broken tilgang Control - horisontalt (IDOR)",
              "en": "Broken Access Control - horisontalt (IDOR)"
            },
            "saarbarhet": {
              "no": "Manglende objekt-nivå autorisasjon",
              "en": "Missing object-level authorization"
            },
            "eksisterendeBeskyttelse": {
              "no": "Autentisering",
              "en": "Autentisering"
            },
            "eksisterendeKontroll": {
              "no": "Manuell testing",
              "en": "Manuell testing"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Autorisasjon på alle endepunkter, IDOR-testing, session-based tilgang",
              "en": "Authorization on all endpoints, IDOR testing, and session-based access control"
            }
          },
          {
            "id": "app-005",
            "risikoelement": {
              "no": "Cross-Site Request Forgery (CSRF)",
              "en": "Cross-Site Request Forgery (CSRF)"
            },
            "saarbarhet": {
              "no": "Manglende CSRF-tokens",
              "en": "Missing CSRF-tokens"
            },
            "eksisterendeBeskyttelse": {
              "no": "SameSite cookies",
              "en": "SameSite cookies"
            },
            "eksisterendeKontroll": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "K": 3,
            "I": 5,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "CSRF tokens, SameSite=Strict, double submit pattern",
              "en": "CSRF tokens, SameSite=Strict, double submit pattern"
            }
          },
          {
            "id": "app-006",
            "risikoelement": {
              "no": "Sensitive data i error messages",
              "en": "Sensitive data in error messages"
            },
            "saarbarhet": {
              "no": "Stack traces, SQL errors sendt til klient",
              "en": "Stack traces, SQL errors sendt to klient"
            },
            "eksisterendeBeskyttelse": {
              "no": "Production error handling",
              "en": "Production error handling"
            },
            "eksisterendeKontroll": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "K": 4,
            "I": 2,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Generiske error messages, detaljert loggføring kun server-side",
              "en": "Generic error messages, detaljert logging only server-side"
            }
          },
          {
            "id": "app-007",
            "risikoelement": {
              "no": "Manglende rate limiting på API",
              "en": "Missing rate limiting on API"
            },
            "saarbarhet": {
              "no": "Ubegrensede requests, ingen throttling",
              "en": "Ubegrensede requests, no throttling"
            },
            "eksisterendeBeskyttelse": {
              "no": "API gateway",
              "en": "API gateway"
            },
            "eksisterendeKontroll": {
              "no": "overvåking",
              "en": "Monitoring"
            },
            "K": 2,
            "I": 2,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Rate limiting per bruker/IP, CAPTCHA ved misbruk, WAF",
              "en": "Rate limiting per user/IP, CAPTCHA during misbruk, WAF"
            }
          }
        ]
      },
      {
        "id": "logging",
        "navn": {
          "no": "loggføring og overvåking",
          "en": "Logging and Monitoring"
        },
        "risikoer": [
          {
            "id": "log-001",
            "risikoelement": {
              "no": "Sensitive data logges i klartekst",
              "en": "Sensitive data logges in plaintext"
            },
            "saarbarhet": {
              "no": "Passord, PII, tokens i logger",
              "en": "Passwords, PII, tokens in logs"
            },
            "eksisterendeBeskyttelse": {
              "no": "Begrenset log-tilgang",
              "en": "Restricted log access"
            },
            "eksisterendeKontroll": {
              "no": "Log gjennomgang",
              "en": "Log review"
            },
            "K": 5,
            "I": 2,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Log sanitering, maskering av sensitive felt, kryptering",
              "en": "Log sanitization, maskering of sensitive felt, encryption"
            }
          },
          {
            "id": "log-002",
            "risikoelement": {
              "no": "Sikkerhetshendelser logges ikke tilstrekkelig",
              "en": "Security events are not logged sufficiently"
            },
            "saarbarhet": {
              "no": "Mangler loggføring av failed login, privilege escalation",
              "en": "Lacks logging of failed login, privilege escalation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe sikkerhetsloggføring",
              "en": "some security logging"
            },
            "eksisterendeKontroll": {
              "no": "SIEM",
              "en": "SIEM"
            },
            "K": 2,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Comprehensive audit loggføring, SIEM correlation, alerting",
              "en": "Comprehensive audit logging, SIEM correlation, alerting"
            }
          },
          {
            "id": "log-003",
            "risikoelement": {
              "no": "Logger kan slettes eller manipuleres",
              "en": "Logs can slettes or manipuleres"
            },
            "saarbarhet": {
              "no": "Skrivbare logger, ingen integritetssjekk",
              "en": "Skrivbare logs, no integritetscheck"
            },
            "eksisterendeBeskyttelse": {
              "no": "Log aggregering",
              "en": "Log aggregering"
            },
            "eksisterendeKontroll": {
              "no": "backup av logger",
              "en": "Backup of logs"
            },
            "K": 2,
            "I": 5,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Immutable logs, write-once storage, log signing",
              "en": "Immutable logs, write-once storage, log signing"
            }
          }
        ]
      },
      {
        "id": "nettverk",
        "navn": {
          "no": "Nettverk og kommunikasjon",
          "en": "Network"
        },
        "risikoer": [
          {
            "id": "net-001",
            "risikoelement": {
              "no": "Data avlyttes under overføring",
              "en": "Data is intercepted during transmission"
            },
            "saarbarhet": {
              "no": "Manglende eller svak kryptering av trafikk",
              "en": "Missing or weak encryption of trafikk"
            },
            "eksisterendeBeskyttelse": {
              "no": "TLS 1.2 for web-trafikk",
              "en": "TLS 1.2 for web-trafikk"
            },
            "eksisterendeKontroll": {
              "no": "SSL Labs scanning",
              "en": "SSL Labs scanning"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "TLS 1.3, end-to-end encryption, VPN for sensitiv trafikk",
              "en": "TLS 1.3, end-to-end encryption, VPN for sensitiv trafikk"
            }
          },
          {
            "id": "net-002",
            "risikoelement": {
              "no": "DDoS-angrep gjør tjenesten utilgjengelig",
              "en": "DDoS-angrep makes the service utilgjengelig"
            },
            "saarbarhet": {
              "no": "Manglende DDoS-beskyttelse",
              "en": "Missing DDoS protection"
            },
            "eksisterendeBeskyttelse": {
              "no": "Firewall, rate limiting",
              "en": "Firewall, rate limiting"
            },
            "eksisterendeKontroll": {
              "no": "Traffic overvåking",
              "en": "Traffic monitoring"
            },
            "K": 1,
            "I": 1,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "DDoS-beskyttelse (Cloudflare/Akamai), CDN og automatisk skalering",
              "en": "DDoS protection (CloudFlare/Akamai), CDN, auto-scaling"
            }
          },
          {
            "id": "net-003",
            "risikoelement": {
              "no": "Man-in-the-Middle angrep",
              "en": "Man-in-the-Middle angrep"
            },
            "saarbarhet": {
              "no": "Svak sertifikatvalidering, tillater downgrades",
              "en": "Weak sertifikatvalidering, tillater downgrades"
            },
            "eksisterendeBeskyttelse": {
              "no": "HTTPS",
              "en": "HTTPS"
            },
            "eksisterendeKontroll": {
              "no": "Årlig sikkerhetsrevisjon",
              "en": "Annual security audit"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Certificate pinning, HSTS, mutual TLS",
              "en": "Certificate pinning, HSTS, mutual TLS"
            }
          },
          {
            "id": "net-004",
            "risikoelement": {
              "no": "DNS hijacking/poisoning",
              "en": "DNS hijacking/poisoning"
            },
            "saarbarhet": {
              "no": "Manglende DNSSEC",
              "en": "Missing DNSSEC"
            },
            "eksisterendeBeskyttelse": {
              "no": "Trusted DNS provider",
              "en": "Trusted DNS provider"
            },
            "eksisterendeKontroll": {
              "no": "månedlig DNS verification",
              "en": "Monthly DNS verification"
            },
            "K": 4,
            "I": 5,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "DNSSEC, registrar 2FA, DNS overvåking",
              "en": "DNSSEC, registrar 2FA, DNS monitoring"
            }
          },
          {
            "id": "net-005",
            "risikoelement": {
              "no": "Nettverkssegmentering mangler - lateral movement",
              "en": "Network segmentation is missing, enabling lateral movement"
            },
            "saarbarhet": {
              "no": "Flat nettverksarkitektur",
              "en": "The network architecture is flat"
            },
            "eksisterendeBeskyttelse": {
              "no": "Perimeter firewall",
              "en": "Perimeter firewall"
            },
            "eksisterendeKontroll": {
              "no": "nettverk scanning",
              "en": "Network scanning"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Mikrosegmentering, VLAN separation, zero trust, IDS/IPS",
              "en": "Mikrosegmentering, VLAN separation, zero trust, IDS/IPS"
            }
          }
        ]
      },
      {
        "id": "organisatorisk",
        "navn": {
          "no": "Organisatoriske forhold",
          "en": "Organizational"
        },
        "risikoer": [
          {
            "id": "org-001",
            "risikoelement": {
              "no": "Manglende sikkerhetskompetanse i teamet",
              "en": "Missing sikkerhetskompetanse in teamet"
            },
            "saarbarhet": {
              "no": "Ingen sikkerhetstrening, kjenner ikke OWASP Top 10",
              "en": "No sikkerhetstrening, know not OWASP Top 10"
            },
            "eksisterendeBeskyttelse": {
              "no": "Gjennomgang av kritiske endringer av sikkerhetsteamet",
              "en": "Security team review of critical endringer"
            },
            "eksisterendeKontroll": {
              "no": "Årlig sikkerhetspresentasjon",
              "en": "Annual security presentation"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Obligatorisk sikkerhetsopplæring, retningslinjer for sikker koding og security champions",
              "en": "Mandatory sikkerhetstrening, secure coding guidelines, security champions"
            }
          },
          {
            "id": "org-002",
            "risikoelement": {
              "no": "Ingen hendelse respons plan",
              "en": "No incident response plan"
            },
            "saarbarhet": {
              "no": "Uklare roller ved sikkerhetshendelser",
              "en": "Roles are unclear during a security incident"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell IT-beredskapsplan",
              "en": "General IT contingency plan"
            },
            "eksisterendeKontroll": {
              "no": "Ingen IR-øvelser",
              "en": "No IR-exercises"
            },
            "K": 3,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "IR-team, playbooks, tabletop exercises, eskaleringsprosedyrer",
              "en": "IR team, playbooks, tabletop exercises, and escalation procedures"
            }
          },
          {
            "id": "org-003",
            "risikoelement": {
              "no": "Manglende sikkerhetsbevissthet hos ansatte",
              "en": "Missing security awareness hos employees"
            },
            "saarbarhet": {
              "no": "Faller for phishing, svake passord",
              "en": "Employees fall for phishing and use weak passwords"
            },
            "eksisterendeBeskyttelse": {
              "no": "Årlig e-learning",
              "en": "Annual e-learning"
            },
            "eksisterendeKontroll": {
              "no": "Phishing simulations",
              "en": "Phishing simulations"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Regelmessig bevisstgjøringsopplæring, phishing-testing og sikkerhetskultur",
              "en": "Regelmessig awareness training, phishing testing, security culture"
            }
          },
          {
            "id": "org-004",
            "risikoelement": {
              "no": "Shadow IT - uautoriserte tjenester",
              "en": "Shadow IT - uautoriserte services"
            },
            "saarbarhet": {
              "no": "Ansatte bruker ikke-godkjente sky-tjenester",
              "en": "Employees user not-godkjente cloud-services"
            },
            "eksisterendeBeskyttelse": {
              "no": "IT policy",
              "en": "IT policy"
            },
            "eksisterendeKontroll": {
              "no": "Nettverksovervåking",
              "en": "Network monitoring"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "CASB, approved SaaS catalog, DLP, user education",
              "en": "CASB, approved SaaS catalog, DLP, user education"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "governance",
    "navn": {
      "no": "Governance og organisasjon",
      "en": "Governance and Organization"
    },
    "beskrivelse": {
      "no": "Ledelsesforankring, styring, strategi, eierskap, compliance og leverandørstyring",
      "en": "Management anchoring, governance, strategy, ownership, compliance, and vendor management"
    },
    "kategorier": [
      {
        "id": "ledelse-styring",
        "navn": {
          "no": "Ledelse og styring",
          "en": "Leadership and Governance"
        },
        "risikoer": [
          {
            "id": "ledelse-001",
            "risikoelement": {
              "no": "Manglende ledelsesforankring av informasjonssikkerhet",
              "en": "Missing executive sponsorship for information security"
            },
            "saarbarhet": {
              "no": "Sikkerhet ikke prioritert av toppledelsen, ikke på agendaen i ledergruppe",
              "en": "Security is not prioritized by executive management and is not on the leadership team agenda"
            },
            "eksisterendeBeskyttelse": {
              "no": "CISO rapporterer til CTO",
              "en": "The CISO reports to the CTO"
            },
            "eksisterendeKontroll": {
              "no": "Årlig sikkerhetspresentasjon for ledelsen",
              "en": "Annual security presentation to executive management"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Sikkerhet fast på ledergruppens agenda, CISO i ledergruppen, styresrapportering, KPI-er for sikkerhet",
              "en": "Security is a standing item on the leadership team agenda, the CISO is part of the leadership team, board reporting is in place, and security KPIs are tracked"
            }
          },
          {
            "id": "ledelse-002",
            "risikoelement": {
              "no": "Ingen sikkerhetsstrategi eller overordnet plan",
              "en": "No security strategy or overarching plan"
            },
            "saarbarhet": {
              "no": "Ad-hoc sikkerhetstiltak, manglende helhetlig approach",
              "en": "Ad hoc security measures and no holistic approach"
            },
            "eksisterendeBeskyttelse": {
              "no": "IT-strategi nevner sikkerhet",
              "en": "The IT strategy mentions security"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av sikkerhetstiltak",
              "en": "Annual review of security measures"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Utarbeide sikkerhetsstrategi godkjent av ledelsen, 3-årig roadmap, målsettinger og suksesskriterier",
              "en": "Develop a security strategy approved by executive management, with a three-year roadmap, clear goals, and success criteria"
            }
          },
          {
            "id": "ledelse-003",
            "risikoelement": {
              "no": "Sikkerhetsarbeidet er underfinansiert og underbemannet",
              "en": "Security work is underfunded and understaffed"
            },
            "saarbarhet": {
              "no": "Sikkerhetstiltak nedprioriteres pga. kostnad",
              "en": "Security measures are deprioritized due to cost"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe budsjett allokert",
              "en": "Some budget is allocated"
            },
            "eksisterendeKontroll": {
              "no": "Årlig budsjettgjennomgang",
              "en": "Annual budget review"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Risk-based budgettering, business case for sikkerhetsinvesteringer, sikkerhet som % av IT-budsjett",
              "en": "Risk-based budgeting, business cases for security investments, and a defined security share of the IT budget"
            }
          },
          {
            "id": "ledelse-004",
            "risikoelement": {
              "no": "Ingen sikkerhetsstyring / governance board",
              "en": "No dedicated security governance board"
            },
            "saarbarhet": {
              "no": "Ingen forum for sikkerhetsbeslutninger på tvers av org",
              "en": "No forum for security decisions across the organization"
            },
            "eksisterendeBeskyttelse": {
              "no": "IT-styring dekker noe sikkerhet",
              "en": "IT governance covers some security topics"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc møter ved behov",
              "en": "Ad hoc meetings as needed"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Etablere et sikkerhetsstyringsforum med mandat, vedtaksmyndighet og fast møtefrekvens",
              "en": "Establish a Security Steering Committee with a clear mandate, decision-making authority, and a fixed meeting cadence"
            }
          },
          {
            "id": "ledelse-005",
            "risikoelement": {
              "no": "Sikkerhet ikke integrert i prosjekt- og endringsstyring",
              "en": "Security is not integrated into project and change management"
            },
            "saarbarhet": {
              "no": "Sikkerhet kommer som etterpåklokskap i prosjekter",
              "en": "Security is treated as an afterthought in projects"
            },
            "eksisterendeBeskyttelse": {
              "no": "Sikkerhetsgjennomgang av store prosjekter",
              "en": "Security review of major projects"
            },
            "eksisterendeKontroll": {
              "no": "Gate-gjennomganger i prosjektmodellen",
              "en": "Gate reviews in the project model"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Security by design, obligatorisk threat modeling, en security champion i alle prosjekter og SSDLC",
              "en": "Security by design, mandatory threat modeling, a security champion in every project, and an SSDLC"
            }
          }
        ]
      },
      {
        "id": "roller-ansvar",
        "navn": {
          "no": "Roller, ansvar og eierskap",
          "en": "Roles and Responsibilities"
        },
        "risikoer": [
          {
            "id": "roller-001",
            "risikoelement": {
              "no": "Informasjonsverdier står uten tydelig eier",
              "en": "Information assets are left without a clear owner"
            },
            "saarbarhet": {
              "no": "Ingen vet hvem som er ansvarlig for datasett/systemer",
              "en": "No one knows who is responsible for datasets and systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "System owners dokumentert noen steder",
              "en": "System owners are documented in some places"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av system inventory",
              "en": "Annual review of system inventory"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Data eierskap model (data owners, data stewards, data custodians), RACI matrix, asset register",
              "en": "Data ownership model (data owners, data stewards, data custodians), RACI matrix, asset register"
            }
          },
          {
            "id": "roller-002",
            "risikoelement": {
              "no": "Manglende segregation of duties (SoD)",
              "en": "Missing segregation of duties (SoD)"
            },
            "saarbarhet": {
              "no": "Samme person kan initiere og godkjenne kritiske transaksjoner",
              "en": "The same person can initiate and approve critical transactions"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe rolleseparasjon",
              "en": "Some role separation exists"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis tilgangsgjennomgang",
              "en": "Quarterly access review"
            },
            "K": 3,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "SoD matrix, automated SoD controls, maker-checker for kritiske operasjoner, SoD violation overvåking",
              "en": "An SoD matrix, automated SoD controls, maker-checker for critical operations, and monitoring of SoD violations"
            }
          },
          {
            "id": "roller-003",
            "risikoelement": {
              "no": "Sikkerhetsroller og ansvar blir misforstått eller overlappende",
              "en": "Security roles and responsibilities are misunderstood or overlap"
            },
            "saarbarhet": {
              "no": "Overlapp eller gap i hvem som er ansvarlig for sikkerhet",
              "en": "There are overlaps or gaps in who is responsible for security"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generelle rollenbeskrivelser",
              "en": "General role descriptions exist"
            },
            "eksisterendeKontroll": {
              "no": "Jobbeskrivelser nevner sikkerhet",
              "en": "Job descriptions mention security"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Detaljert RACI for sikkerhetsprosesser, sikkerhetsroller i stillingsbeskrivelser og årlig RACI-gjennomgang",
              "en": "Define a detailed RACI for security processes, include security roles in job descriptions, and review the RACI annually"
            }
          },
          {
            "id": "roller-004",
            "risikoelement": {
              "no": "Ingen dedikert sikkerhetsressurs / CISO",
              "en": "There is no dedicated security resource or CISO"
            },
            "saarbarhet": {
              "no": "Sikkerhet er en deltidsjobb for IT-ansatte",
              "en": "Security is handled as a part-time responsibility for IT staff"
            },
            "eksisterendeBeskyttelse": {
              "no": "IT-sjef har ansvar",
              "en": "The IT manager carries the responsibility"
            },
            "eksisterendeKontroll": {
              "no": "Noe sikkerhetsfokus",
              "en": "There is some security focus"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Dedikert CISO eller sikkerhetsleder, sikkerhetsteam og program for security champions",
              "en": "Dedikert CISO or security lead, security team, security champions program"
            }
          }
        ]
      },
      {
        "id": "policy-compliance",
        "navn": {
          "no": "policy og compliance",
          "en": "Policies and Compliance"
        },
        "risikoer": [
          {
            "id": "policy-001",
            "risikoelement": {
              "no": "Sikkerhetspolicyer mangler eller er utdaterte",
              "en": "Sikkerhetspolicyer lacks or is utdaterte"
            },
            "saarbarhet": {
              "no": "Ingen klare regler for sikker oppførsel",
              "en": "There are no clear rules for secure behavior"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noen gamle policyer",
              "en": "Anyone gamle policies"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc oppdateringer",
              "en": "Ad-hoc updates"
            },
            "K": 3,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "policy framework (hierarki: policy->standard->procedure), årlig gjennomgang, versjonskontroll, godkjenningsprosess",
              "en": "Policy framework (hierarki: policy->standard->procedure), annual review, version control, approval process"
            }
          },
          {
            "id": "policy-002",
            "risikoelement": {
              "no": "Policyer ikke kommunisert eller håndhevet",
              "en": "Policies are not communicated or enforced"
            },
            "saarbarhet": {
              "no": "Ansatte kjenner ikke til eller følger ikke policyer",
              "en": "Employees do not know or follow the policies"
            },
            "eksisterendeBeskyttelse": {
              "no": "policyer publisert på intranett",
              "en": "Policies publisert on intranett"
            },
            "eksisterendeKontroll": {
              "no": "onboarding mention av policyer",
              "en": "Onboarding mention of policies"
            },
            "K": 3,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "policy acknowledgement (signering), awareness campaigns, konsekvenser ved brudd, spot-checks",
              "en": "Policy acknowledgement (signering), awareness campaigns, konsekvenser during breaches, spot-checks"
            }
          },
          {
            "id": "policy-003",
            "risikoelement": {
              "no": "Manglende compliance-oversikt (regulatorisk)",
              "en": "Missing compliance-overview (regulatorisk)"
            },
            "saarbarhet": {
              "no": "Vet ikke hvilke lover/forskrifter som gjelder",
              "en": "Vet not hvilke lover/forskrifter that apply to"
            },
            "eksisterendeBeskyttelse": {
              "no": "Juridisk avdeling konsulteres ved behov",
              "en": "Juridisk avdeling konsulteres as needed"
            },
            "eksisterendeKontroll": {
              "no": "Ad hoc juridiske gjennomganger",
              "en": "Ad-hoc legal reviews"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Register for etterlevelse, overvåking av regulatoriske endringer, vurderinger av etterlevelseskonsekvenser og involvering av juridisk rådgiver",
              "en": "Compliance register, regulatory change monitoring, compliance impact assessments, legal counsel involvement"
            }
          },
          {
            "id": "policy-004",
            "risikoelement": {
              "no": "Ingen systematisk compliance-testing",
              "en": "No systematisk compliance-testing"
            },
            "saarbarhet": {
              "no": "Vet ikke om vi faktisk følger krav og policyer",
              "en": "It is unclear whether requirements and policies are actually being followed"
            },
            "eksisterendeBeskyttelse": {
              "no": "Årlig ekstern audit",
              "en": "Annual external audit"
            },
            "eksisterendeKontroll": {
              "no": "Leverandøraudit",
              "en": "Vendor audit"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Continuous compliance overvåking, internal audit program, compliance testing automation, control attestation",
              "en": "Continuous compliance monitoring, internal audit program, compliance testing automation, control attestation"
            }
          },
          {
            "id": "policy-005",
            "risikoelement": {
              "no": "Manglende risikoaksept-prosess",
              "en": "Missing risikoaksept-process"
            },
            "saarbarhet": {
              "no": "Risikoer aksepteres uten formell godkjenning på riktig nivå",
              "en": "Risks are accepted without formal approval at the correct level"
            },
            "eksisterendeBeskyttelse": {
              "no": "Prosjektledere tar beslutninger",
              "en": "Prosjektledere tar decisions"
            },
            "eksisterendeKontroll": {
              "no": "Risk register",
              "en": "Risk register"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Formell risk acceptance framework, godkjenningsnivåer basert på risiko, risk register, time-boxed acceptances",
              "en": "Establish a formal risk acceptance framework, approval levels based on risk, a risk register, and time-boxed acceptances"
            }
          },
          {
            "id": "policy-006",
            "risikoelement": {
              "no": "Informasjonsklassifisering ikke implementert",
              "en": "Informasjonsklassifisering not implemented"
            },
            "saarbarhet": {
              "no": "Ansatte vet ikke hva som er konfidensielt vs. public",
              "en": "Employees vet not what that is konfidensielt vs. public"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe generell forståelse",
              "en": "Some general understanding"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc vurderinger",
              "en": "Ad-hoc vurderinger"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Classification scheme (Public, Internal, Confidential, Restricted), labeling, handling requirements per class, DLP integration",
              "en": "Classification scheme (Public, Internal, Confidential, Restricted), labeling, handling requirements per class, DLP integration"
            }
          }
        ]
      },
      {
        "id": "leverandorstyring",
        "navn": {
          "no": "Leverandørstyring",
          "en": "Vendor Management"
        },
        "risikoer": [
          {
            "id": "vendor-001",
            "risikoelement": {
              "no": "Ingen systematisk leverandørrisiko-vurdering",
              "en": "There is no systematic vendor risk assessment"
            },
            "saarbarhet": {
              "no": "Leverandører ikke vurdert for sikkerhet før kontraktsinngåelse",
              "en": "Vendors are not assessed for security before contract signing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Innkjøpsprosess",
              "en": "Procurement process"
            },
            "eksisterendeKontroll": {
              "no": "Kontraktsgjennomgang",
              "en": "Contract review"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Rammeverk for leverandørrisikovurdering, sikkerhetsspørreskjemaer, kategorisering av leverandører og due diligence",
              "en": "Vendor risk assessment framework, security questionnaires, tiering of vendors, due diligence"
            }
          },
          {
            "id": "vendor-002",
            "risikoelement": {
              "no": "Kritiske leverandører blir ikke sikkerhetsvurdert godt nok",
              "en": "Critical vendors are not assessed thoroughly enough for security risk"
            },
            "saarbarhet": {
              "no": "Single points of failure i leverandørkjeden ikke kartlagt",
              "en": "Single points of failure in the supply chain are not mapped"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe leverandør management",
              "en": "some vendor management"
            },
            "eksisterendeKontroll": {
              "no": "Leverandørgjennomganger",
              "en": "Supplier reviews"
            },
            "K": 3,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Critical leverandør identification, business impact analysis per leverandør, alternative leverandører, contingency plans",
              "en": "Critical vendor identification, business impact analysis per vendor, alternative vendors, contingency plans"
            }
          },
          {
            "id": "vendor-003",
            "risikoelement": {
              "no": "Kontrakter mangler tydelige sikkerhetskrav",
              "en": "Contracts lack clear security requirements"
            },
            "saarbarhet": {
              "no": "Leverandørkontrakter mangler sikkerhetsklausuler",
              "en": "Vendor contracts lack security clauses"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard kontraktsmaler",
              "en": "Standard kontraktsmaler"
            },
            "eksisterendeKontroll": {
              "no": "Juridisk gjennomgang",
              "en": "Juridisk review"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Mal for sikkerhetstillegg, SLA for sikkerhet, klausuler for varsling om brudd, revisjonsrettigheter og ansvarsbestemmelser",
              "en": "Security addendum template, SLA for security, breach notification clauses, audit rights, liability terms"
            }
          },
          {
            "id": "vendor-004",
            "risikoelement": {
              "no": "Ikke ongoing overvåking av leverandører",
              "en": "Not ongoing monitoring of vendors"
            },
            "saarbarhet": {
              "no": "Leverandør-sikkerhet kun vurdert ved anskaffelse",
              "en": "Vendor-security only assessed during anskaffelse"
            },
            "eksisterendeBeskyttelse": {
              "no": "Initial leverandør vurdering",
              "en": "Initial vendor assessment"
            },
            "eksisterendeKontroll": {
              "no": "Årlige møter",
              "en": "Annual meetings"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Kontinuerlig leverandørovervåking, periodiske revurderinger, sporing av varsel om brudd og ytelsesgjennomganger",
              "en": "Continuous vendor monitoring, periodic reassessments, breach notification tracking, performance reviews"
            }
          },
          {
            "id": "vendor-005",
            "risikoelement": {
              "no": "Underleverandører (4th party) ikke styrt",
              "en": "Subcontractors (4th party) not styrt"
            },
            "saarbarhet": {
              "no": "Våre leverandører bruker underleverandører vi ikke har oversikt over",
              "en": "Our vendors user subcontractors vi not har overview over"
            },
            "eksisterendeBeskyttelse": {
              "no": "Avtaleklausul om underleverandører",
              "en": "Avtaleklausul about subcontractors"
            },
            "eksisterendeKontroll": {
              "no": "None",
              "en": "None"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Styring av 4.-partsrisiko, godkjenningsrett for underleverandører, videreføringsklausuler og kartlegging av leverandørkjeden",
              "en": "4th party risk management, approval rights for subcontractors, flow-down clauses, supply chain mapping"
            }
          },
          {
            "id": "vendor-006",
            "risikoelement": {
              "no": "Leverandører fases ikke ut på en kontrollert måte",
              "en": "Vendors are not offboarded in a controlled manner"
            },
            "saarbarhet": {
              "no": "Data ikke returnert/slettet når kontrakt avsluttes",
              "en": "Data not returnert/erased when kontrakt avsluttes"
            },
            "eksisterendeBeskyttelse": {
              "no": "Ad-hoc håndtering",
              "en": "Ad-hoc handling"
            },
            "eksisterendeKontroll": {
              "no": "Prosjektavslutning",
              "en": "Prosjektavslutning"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "leverandør offboarding sjekkliste, data return/destruction verification, tilgang revocation, kontrakt closeout procedures",
              "en": "Vendor offboarding checklist, data return/destruction verification, access revocation, contract closeout procedures"
            }
          }
        ]
      },
      {
        "id": "audit-tilsyn",
        "navn": {
          "no": "Audit og tilsyn",
          "en": "Audit and Oversight"
        },
        "risikoer": [
          {
            "id": "audit-001",
            "risikoelement": {
              "no": "Ingen internrevisjon / internal audit",
              "en": "No internrevisjon / internal audit"
            },
            "saarbarhet": {
              "no": "Kontroller ikke verifisert uavhengig",
              "en": "Kontroller not verifisert uavhengig"
            },
            "eksisterendeBeskyttelse": {
              "no": "Gjennomganger hos linjeleder",
              "en": "Line manager reviews"
            },
            "eksisterendeKontroll": {
              "no": "Ekstern audit årlig",
              "en": "external audit annual"
            },
            "K": 3,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Internal audit function, risk-based audit plan, independence, audit committee reporting",
              "en": "Internal audit function, risk-based audit plan, independence, audit committee reporting"
            }
          },
          {
            "id": "audit-002",
            "risikoelement": {
              "no": "Audit findings ikke fulgt opp",
              "en": "Audit findings not fulgt opp"
            },
            "saarbarhet": {
              "no": "Issues identifisert men ikke remediert",
              "en": "Issues identified men not remediert"
            },
            "eksisterendeBeskyttelse": {
              "no": "Action items fra audit",
              "en": "Action items from audit"
            },
            "eksisterendeKontroll": {
              "no": "Management respons",
              "en": "Management response"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Audit finding tracker, remediation deadlines, escalation for overdue items, periodic status reporting",
              "en": "Audit finding tracker, remediation deadlines, escalation for overdue items, periodic status reporting"
            }
          },
          {
            "id": "audit-003",
            "risikoelement": {
              "no": "Manglende audit trail / sporbarhet",
              "en": "Missing audit trail / traceability"
            },
            "saarbarhet": {
              "no": "Kan ikke dokumentere hvem som gjorde hva når",
              "en": "Cannot document who that gjorde what when"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe loggføring",
              "en": "some logging"
            },
            "eksisterendeKontroll": {
              "no": "Log retention",
              "en": "Log retention"
            },
            "K": 3,
            "I": 5,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Comprehensive audit loggføring, immutable logs, SIEM, long-term retention, log integrity protection",
              "en": "Comprehensive audit logging, immutable logs, SIEM, long-term retention, log integrity protection"
            }
          },
          {
            "id": "audit-004",
            "risikoelement": {
              "no": "Sertifiseringer ikke opprettholdt (ISO27001, SOC2)",
              "en": "Sertifiseringer not opprettholdt (ISO27001, SOC2)"
            },
            "saarbarhet": {
              "no": "Har sertifisering men ikke kontinuerlig compliance",
              "en": "Har sertifisering men not kontinuerlig compliance"
            },
            "eksisterendeBeskyttelse": {
              "no": "Årlig recertification",
              "en": "Annual recertification"
            },
            "eksisterendeKontroll": {
              "no": "Surveillance audits",
              "en": "Surveillance audits"
            },
            "K": 2,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Continuous compliance program, control testing schedule, evidence collection automation, mock audits",
              "en": "Continuous compliance program, control testing schedule, evidence collection automation, mock audits"
            }
          }
        ]
      },
      {
        "id": "dokumentasjon-kunnskap",
        "navn": {
          "no": "Dokumentasjon og kunnskapsstyring",
          "en": "Documentation and Knowledge"
        },
        "risikoer": [
          {
            "id": "dok-001",
            "risikoelement": {
              "no": "Kritisk dokumentasjon mangler eller er utdatert",
              "en": "Critical documentation lacks or is outdated"
            },
            "saarbarhet": {
              "no": "Prosedyrer, runbooks, arkitektur ikke dokumentert",
              "en": "Procedures, runbooks, arkitektur not documented"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe wiki-dokumentasjon",
              "en": "some wiki-documentation"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc oppdateringer",
              "en": "Ad-hoc updates"
            },
            "K": 2,
            "I": 3,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "dokumentasjon standards, gjennomgang cycles, version control, templates, dokumentasjon-as-code",
              "en": "Documentation standards, review cycles, version control, templates, documentation-as-code"
            }
          },
          {
            "id": "dok-002",
            "risikoelement": {
              "no": "Ingen oversikt over informasjonsverdier / asset register",
              "en": "No overview over information assets / asset register"
            },
            "saarbarhet": {
              "no": "Vet ikke hva vi har av systemer, data, verdier",
              "en": "Vet not what vi har of systems, data, verdier"
            },
            "eksisterendeBeskyttelse": {
              "no": "CMDB for noe utstyr",
              "en": "CMDB for some equipment"
            },
            "eksisterendeKontroll": {
              "no": "Årlig inventory",
              "en": "Annual inventory"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Comprehensive asset register, automated discovery, data mapping, classification, owner attribution",
              "en": "Comprehensive asset register, automated discovery, data mapping, classification, owner attribution"
            }
          },
          {
            "id": "dok-003",
            "risikoelement": {
              "no": "Intellectual property ikke beskyttet",
              "en": "Intellectual property is not adequately protected"
            },
            "saarbarhet": {
              "no": "Kildekode, forretningshemmeligheter, IP ikke sikret",
              "en": "Source code, forretningshemmeligheter, IP not sikret"
            },
            "eksisterendeBeskyttelse": {
              "no": "NDA med ansatte",
              "en": "NDA with employees"
            },
            "eksisterendeKontroll": {
              "no": "tilgang controls",
              "en": "Access controls"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "IP register, protective markings, DLP, repository tilgang controls, invention assignment agreements",
              "en": "IP register, protective markings, DLP, repository access controls, invention assignment agreements"
            }
          },
          {
            "id": "dok-004",
            "risikoelement": {
              "no": "Records management og arkivering ikke ivaretatt",
              "en": "Records management and arkivering not ivaretatt"
            },
            "saarbarhet": {
              "no": "Dokumenter ikke arkivert iht. lovkrav, retention ikke styrt",
              "en": "Documents are not archived in line with legal requirements, and retention is not governed"
            },
            "eksisterendeBeskyttelse": {
              "no": "Filserver backup",
              "en": "Filserver backup"
            },
            "eksisterendeKontroll": {
              "no": "Noe retention policyer",
              "en": "some retention policies"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Records management policy, retention schedules, secure disposal, archive solution, legal hold procedures",
              "en": "Records management policy, retention schedules, secure disposal, archive solution, legal hold procedures"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "integrasjoner",
    "navn": {
      "no": "Integrasjoner og systemsamspill",
      "en": "Integrations and System Interactions"
    },
    "beskrivelse": {
      "no": "API-integrasjoner, meldingskøer, data pipelines, asynkron kommunikasjon, ESB/middleware og systemsamspill",
      "en": "API integrations, message queues, data pipelines, asynchronous communication, ESB/middleware, and system interactions"
    },
    "kategorier": [
      {
        "id": "synkron-integrasjon",
        "navn": {
          "no": "Synkron integrasjon (REST/SOAP/GraphQL)",
          "en": "Synchronous Integration"
        },
        "risikoer": [
          {
            "id": "sync-001",
            "risikoelement": {
              "no": "Manglende eller for korte timeouts",
              "en": "Missing or overly short timeouts"
            },
            "saarbarhet": {
              "no": "API-kall henger uten timeout, eller timeout så kort at normale operasjoner feiler",
              "en": "API calls hang without a timeout, or the timeout is so short that normal operations fail"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard HTTP timeout (30s)",
              "en": "Standard HTTP timeout (30s)"
            },
            "eksisterendeKontroll": {
              "no": "Sporadisk testing",
              "en": "Sporadic testing"
            },
            "K": 3,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Definere timeouts per operasjon basert på SLA, implementere connection timeout og read timeout separat",
              "en": "Define timeouts per operation based on the SLA, and implement connection and read timeouts separately"
            }
          },
          {
            "id": "sync-002",
            "risikoelement": {
              "no": "HTTP-feil håndteres feil eller for likt",
              "en": "HTTP errors are handled incorrectly or too uniformly"
            },
            "saarbarhet": {
              "no": "Klient behandler alle feil likt, retry på 4xx, ingen skille mellom transient og permanent feil",
              "en": "The client handles all errors the same way, retries on 4xx responses, and does not distinguish between transient and permanent errors"
            },
            "eksisterendeBeskyttelse": {
              "no": "Try-catch på API-kall",
              "en": "Try-catch around API calls"
            },
            "eksisterendeKontroll": {
              "no": "Error loggføring",
              "en": "Error logging"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Implementere feilhåndtering basert på HTTP status (2xx, 4xx, 5xx), kun retry på transient errors (429, 503, etc.)",
              "en": "Implement error handling based on HTTP status (2xx, 4xx, 5xx), and only retry transient errors such as 429 and 503"
            }
          },
          {
            "id": "sync-003",
            "risikoelement": {
              "no": "API versioning ikke implementert",
              "en": "API versioning is not implemented"
            },
            "saarbarhet": {
              "no": "Breaking changes bryter eksisterende klienter, ingen deprecation-strategi, tvungen migrering",
              "en": "Breaking changes disrupt existing clients, there is no deprecation strategy, and migration is forced"
            },
            "eksisterendeBeskyttelse": {
              "no": "Planlagt vedlikehold ved endringer",
              "en": "Planned maintenance during changes"
            },
            "eksisterendeKontroll": {
              "no": "Release notes",
              "en": "Release notes"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere API versioning (URL-path eller header), semantic versioning, deprecation policy med sunset-dato",
              "en": "Implement API versioning through the URL path or headers, use semantic versioning, and define a deprecation policy with a sunset date"
            }
          },
          {
            "id": "sync-004",
            "risikoelement": {
              "no": "Manglende rate limiting på API",
              "en": "Missing rate limiting on API"
            },
            "saarbarhet": {
              "no": "Én klient kan overbelaste API, ingen beskyttelse mot misbruk eller bugs i klient",
              "en": "A single client can overload the API, and there is no protection against misuse or client-side bugs"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell WAF",
              "en": "General WAF protection"
            },
            "eksisterendeKontroll": {
              "no": "Infrastruktur-nivå begrensninger",
              "en": "Infrastructure-level limits"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere rate limiting per klient/API-key, returnere 429 med Retry-After header, dokumentere limits",
              "en": "Implement rate limiting per client and API key, return HTTP 429 with a Retry-After header, and document the limits"
            }
          },
          {
            "id": "sync-005",
            "risikoelement": {
              "no": "Manglende circuit breaker",
              "en": "Missing circuit breaker"
            },
            "saarbarhet": {
              "no": "Fortsetter å kalle feilende tjeneste, forverrer situasjon, cascade failures, ingen graceful degradation",
              "en": "The system continues to call a failing service, worsens the situation, causes cascading failures, and lacks graceful degradation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Timeout stopper langvarige kall",
              "en": "Timeouts stop long-running calls"
            },
            "eksisterendeKontroll": {
              "no": "Manuell restart ved problemer",
              "en": "Manual restart during incidents"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere circuit breaker pattern (closed/open/half-open), fallback-mekanisme, overvåke circuit breaker state",
              "en": "Implement a circuit breaker pattern (closed/open/half-open), add a fallback mechanism, and monitor the circuit breaker state"
            }
          },
          {
            "id": "sync-006",
            "risikoelement": {
              "no": "API-dokumentasjon utdatert eller feil",
              "en": "API documentation is outdated or incorrect"
            },
            "saarbarhet": {
              "no": "Klienter implementerer basert på feil dokumentasjon, OpenAPI/Swagger ikke i sync med kode",
              "en": "Clients implement against incorrect documentation, and the OpenAPI/Swagger specification is out of sync with the code"
            },
            "eksisterendeBeskyttelse": {
              "no": "README med API-dokumentasjon",
              "en": "README with API documentation"
            },
            "eksisterendeKontroll": {
              "no": "Manuell oppdatering ved endringer",
              "en": "Manual updates during changes"
            },
            "K": 2,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Generere API-dokumentasjon fra kode (OpenAPI annotations), automatisk validering i CI/CD, kontrakt testing",
              "en": "Generate API documentation from code using OpenAPI annotations, add automatic validation in CI/CD, and use contract testing"
            }
          }
        ]
      },
      {
        "id": "asynkron-meldingskoer",
        "navn": {
          "no": "Asynkron integrasjon og meldingskøer",
          "en": "Asynchronous Message Queues"
        },
        "risikoer": [
          {
            "id": "async-001",
            "risikoelement": {
              "no": "Meldinger går tapt uten varsling",
              "en": "Messages are lost without alerting"
            },
            "saarbarhet": {
              "no": "Message broker feiler, ingen persistering, ikke-durables køer, ingen dead letter queue",
              "en": "The message broker fails, persistence is missing, queues are not durable, and there is no dead-letter queue"
            },
            "eksisterendeBeskyttelse": {
              "no": "Message broker med basic config",
              "en": "Message broker with basic config"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av sendte meldinger",
              "en": "Logging of sent messages"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Durable queues, publisher confirms/acks, dead letter queues, message replay capability, overvåke message rates",
              "en": "Use durable queues, publisher confirms/acks, dead-letter queues, message replay capability, and monitor message rates"
            }
          },
          {
            "id": "async-002",
            "risikoelement": {
              "no": "Duplikat-prosessering av meldinger",
              "en": "Duplicate processing of messages"
            },
            "saarbarhet": {
              "no": "At-least-once delivery uten idempotency, meldinger prosesseres flere ganger, data-korrupsjon",
              "en": "At-least-once delivery without idempotency causes messages to be processed multiple times and can corrupt data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Message broker leverer meldinger",
              "en": "The message broker delivers messages"
            },
            "eksisterendeKontroll": {
              "no": "Ingen spesifikk håndtering",
              "en": "No specific handling"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere idempotency i consumers (idempotency keys), deduplication logic, transaksjonell prosessering",
              "en": "Implement idempotency in consumers with idempotency keys, deduplication logic, and transactional processing"
            }
          },
          {
            "id": "async-003",
            "risikoelement": {
              "no": "Message ordering problemer",
              "en": "Message ordering issues"
            },
            "saarbarhet": {
              "no": "Meldinger prosesseres i feil rekkefølge, partisjonering ikke konfigurert, concurrent consumers",
              "en": "Messages are processed in the wrong order, partitioning is not configured, and consumers run concurrently"
            },
            "eksisterendeBeskyttelse": {
              "no": "FIFO-køer",
              "en": "FIFO queues"
            },
            "eksisterendeKontroll": {
              "no": "Timestamps i meldinger",
              "en": "Timestamps in messages"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Bruke partition keys (Kafka) eller message groups (SQS FIFO), sequence numbers, single consumer per partition hvor ordering kreves",
              "en": "Bruke partition keys (Kafka) or message groups (SQS FIFO), sequence numbers, single consumer per partition hvor ordering kreves"
            }
          },
          {
            "id": "async-004",
            "risikoelement": {
              "no": "Eventual consistency ikke håndtert",
              "en": "Eventual consistency not handled"
            },
            "saarbarhet": {
              "no": "Applikasjon forventer umiddelbar konsistens, race conditions, bruker ser utdatert data",
              "en": "Applikasjon forventer umiddelbar konsistens, race conditions, user ser outdated data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Async processing dokumentert",
              "en": "Async processing documented"
            },
            "eksisterendeKontroll": {
              "no": "Ingen spesifikk håndtering",
              "en": "No specific handling"
            },
            "K": 3,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Design for eventual consistency, optimistic UI, polling/webhooks for status, versioning på data, conflict resolution",
              "en": "Design for eventual consistency, optimistic UI, polling/webhooks for status, versioning on data, conflict resolution"
            }
          },
          {
            "id": "async-005",
            "risikoelement": {
              "no": "Poison messages blokkerer kø",
              "en": "Poison messages blokkerer queue"
            },
            "saarbarhet": {
              "no": "Én ugyldig melding feiler processing, blokkerer hele køen, ingen DLQ, infinite retry loop",
              "en": "A single invalid message breaks processing, blocks the entire queue, there is no DLQ, and retries continue indefinitely"
            },
            "eksisterendeBeskyttelse": {
              "no": "Error loggføring",
              "en": "Error logging"
            },
            "eksisterendeKontroll": {
              "no": "Manuell fjerning ved problem",
              "en": "Manuell fjerning during problem"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Dead Letter Queue (DLQ) etter N retries, max retry count, message validation før processing, DLQ overvåking og alerts",
              "en": "Dead Letter Queue (DLQ) after N retries, max retry count, message validation before processing, DLQ monitoring and alerts"
            }
          },
          {
            "id": "async-006",
            "risikoelement": {
              "no": "Consumer lag øker ukontrollert",
              "en": "Consumer lag increases uncontrollably"
            },
            "saarbarhet": {
              "no": "Producers sender raskere enn consumers prosesserer, backlog bygges opp, memory issues, datedness",
              "en": "Producers send messages faster than consumers can process them, causing backlog growth, memory pressure, and stale data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Basic overvåking av kø-lengde",
              "en": "Basic monitoring of queue length"
            },
            "eksisterendeKontroll": {
              "no": "Manuell skalering ved behov",
              "en": "Manuell skalering as needed"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Overvåke consumer lag kontinuerlig, auto-scaling av consumers, backpressure mekanismer, alerting på lag threshold",
              "en": "Continuously monitor consumer lag, use auto-scaling for consumers, add backpressure mechanisms, and alert when lag thresholds are exceeded"
            }
          },
          {
            "id": "async-007",
            "risikoelement": {
              "no": "Manglende message schema validation",
              "en": "Missing message schema validation"
            },
            "saarbarhet": {
              "no": "Ugyldige meldinger aksepteres, schema changes bryter consumers, ingen versjonering av meldinger",
              "en": "Ugyldige messages aksepteres, schema changes bryter consumers, no versjonering of messages"
            },
            "eksisterendeBeskyttelse": {
              "no": "JSON-struktur dokumentert",
              "en": "JSON-struktur documented"
            },
            "eksisterendeKontroll": {
              "no": "Runtime errors ved parsing",
              "en": "Runtime errors during parsing"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Schema registry (Avro, Protobuf), validering ved produce og consume, schema evolution rules (backward/forward compatible)",
              "en": "Schema registry (Avro, Protobuf), validation during produce and consume, schema evolution rules (backward/forward compatible)"
            }
          }
        ]
      },
      {
        "id": "data-pipelines",
        "navn": {
          "no": "Data pipelines og ETL",
          "en": "Data Pipelines"
        },
        "risikoer": [
          {
            "id": "etl-001",
            "risikoelement": {
              "no": "Data transformasjonsfeil",
              "en": "Data transformation errors"
            },
            "saarbarhet": {
              "no": "Feil i mapping logic, nullverdier ikke håndtert, type casting feiler, data-korrupsjon",
              "en": "Errors in mapping logic, nullverdier not handled, type casting fails, data-korrupsjon"
            },
            "eksisterendeBeskyttelse": {
              "no": "Unit tests på transformasjoner",
              "en": "Unit tests on transformasjoner"
            },
            "eksisterendeKontroll": {
              "no": "Sample-basert validering",
              "en": "Sample-based validation"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Comprehensive testing av transformasjoner, null-handling, type safety, data quality checks, reconciliation reports",
              "en": "Comprehensive testing of transformasjoner, null-handling, type safety, data quality checks, reconciliation reports"
            }
          },
          {
            "id": "etl-002",
            "risikoelement": {
              "no": "Schema drift mellom systemer",
              "en": "Schema operations mellom systems"
            },
            "saarbarhet": {
              "no": "Source system endrer schema uten varsel, pipelines feiler, data mappes feil, nye felter ignoreres",
              "en": "The source system changes the schema without warning, pipelines fail, data is mapped incorrectly, and new fields are ignored"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentert datakatalog",
              "en": "Documented datakatalog"
            },
            "eksisterendeKontroll": {
              "no": "Pipeline feiler ved schema mismatch",
              "en": "Pipeline fails during schema mismatch"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Schema registry, automated schema validation, schema evolution notifications, backward compatibility testing",
              "en": "Schema registry, automated schema validation, schema evolution notifications, backward compatibility testing"
            }
          },
          {
            "id": "etl-003",
            "risikoelement": {
              "no": "Data quality issues ikke oppdaget",
              "en": "Data quality issues not oppdaget"
            },
            "saarbarhet": {
              "no": "Duplikater, manglende data, ugyldig data prosesseres og lagres, ingen data quality gates",
              "en": "Duplicate, missing, or invalid data is processed and stored because there are no data quality gates"
            },
            "eksisterendeBeskyttelse": {
              "no": "Basic validation av required fields",
              "en": "Basic validation of required fields"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc data quality sjekker",
              "en": "Ad-hoc data quality checker"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Implement a data quality framework (for example Great Expectations or Deequ), add automated quality checks, quarantine bad data, and track quality metrics",
              "en": "Implement a data quality framework such as Great Expectations or Deequ, add automated quality checks, quarantine bad data, and track quality metrics"
            }
          },
          {
            "id": "etl-004",
            "risikoelement": {
              "no": "Pipeline feil gir inkomplette data",
              "en": "Pipeline errors lead to incomplete data"
            },
            "saarbarhet": {
              "no": "Pipeline feiler midt i kjøring, partial data loaded, ingen transaksjonalitet, vanskelig å gjenoppretting",
              "en": "A pipeline fails midway through a run, partial data is loaded, there is no transactional control, and recovery is difficult"
            },
            "eksisterendeBeskyttelse": {
              "no": "loggføring av pipeline status",
              "en": "Logging of pipeline status"
            },
            "eksisterendeKontroll": {
              "no": "overvåking av pipeline completion",
              "en": "Monitoring of pipeline completion"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Atomic loads (staging + swap), checkpointing, idempotent pipelines, automated gjenoppretting, data lineage sporing",
              "en": "Atomic loads (staging + swap), checkpointing, idempotent pipelines, automated recovery, data lineage tracking"
            }
          },
          {
            "id": "etl-005",
            "risikoelement": {
              "no": "Full load vs incremental load problemer",
              "en": "Full load vs incremental load problemer"
            },
            "saarbarhet": {
              "no": "Incremental logic feil (missed updates/deletes), watermarks ikke oppdatert, change data capture (CDC) feiler",
              "en": "Incremental logic errors cause missed updates/deletes, watermarks are not updated, and change data capture (CDC) fails"
            },
            "eksisterendeBeskyttelse": {
              "no": "Timestamp-basert incremental load",
              "en": "Timestamp-based incremental load"
            },
            "eksisterendeKontroll": {
              "no": "Periodic full refresh",
              "en": "Periodic full refresh"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Reliable CDC implementation, watermark management, reconciliation between full and incremental, soft deletes",
              "en": "Reliable CDC implementation, watermark management, reconciliation between full and incremental, soft deletes"
            }
          },
          {
            "id": "etl-006",
            "risikoelement": {
              "no": "Manglende data lineage og observability",
              "en": "Missing data lineage and observability"
            },
            "saarbarhet": {
              "no": "Umulig å spore hvor data kom fra, debugging vanskelig, compliance issues, ingen impact analysis",
              "en": "Umulig to spore hvor data kom from, debugging difficult, compliance issues, no impact analysis"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentasjon av dataflyt",
              "en": "Documentation of dataflyt"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av pipeline kjøringer",
              "en": "Logging of pipeline runs"
            },
            "K": 3,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implement data lineage sporing (for example OpenLineage), metadata management, a data catalog, and end-to-end tracing",
              "en": "Implement data lineage tracking such as OpenLineage, together with metadata management, a data catalog, and end-to-end tracing"
            }
          }
        ]
      },
      {
        "id": "integrasjonsmonstre",
        "navn": {
          "no": "Integrasjonsmønstre og orkesterering",
          "en": "Integration Anti-patterns"
        },
        "risikoer": [
          {
            "id": "pattern-001",
            "risikoelement": {
              "no": "Choreography uten koordinering",
              "en": "Choreography without koordinering"
            },
            "saarbarhet": {
              "no": "Hendelsesdrevet arkitektur uten oversikt, ingen felles forståelse av arbeidsflyter og vanskelig feilsøking",
              "en": "An event-driven architecture lacks overview, there is no shared understanding of workflows, and debugging is difficult"
            },
            "eksisterendeBeskyttelse": {
              "no": "Event-driven kommunikasjon",
              "en": "Event-driven communications"
            },
            "eksisterendeKontroll": {
              "no": "Dokumenterte events",
              "en": "Documented events"
            },
            "K": 3,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Event schema registry, event storming workshops, distributed tracing, service mesh for observability",
              "en": "Event schema registry, event storming workshops, distributed tracing, service mesh for observability"
            }
          },
          {
            "id": "pattern-002",
            "risikoelement": {
              "no": "Saga pattern feil og kompensering",
              "en": "Saga pattern errors and compensation failures"
            },
            "saarbarhet": {
              "no": "Distribuert transaksjon feiler midt i saga, kompenserende transaksjoner ikke implementert eller feiler",
              "en": "A distributed transaction fails midway through a saga, and compensating transactions are missing or fail"
            },
            "eksisterendeBeskyttelse": {
              "no": "Arbeidsflyter med flere steg",
              "en": "Multi-step workflows"
            },
            "eksisterendeKontroll": {
              "no": "Manuell rollback ved feil",
              "en": "Manuell rollback on failure"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere saga pattern med orchestration (Temporal, Camunda), kompenserende transaksjoner, saga status sporing",
              "en": "Implement the saga pattern with orchestration through tools such as Temporal or Camunda, together with compensating transactions and saga status tracking"
            }
          },
          {
            "id": "pattern-003",
            "risikoelement": {
              "no": "Distribuerte transaksjoner uten 2PC/consistency",
              "en": "distributed transactions without 2PC/consistency"
            },
            "saarbarhet": {
              "no": "Data inkonsistent på tvers av systemer, manglende transaksjonalitet, race conditions",
              "en": "Data inkonsistent on across of systems, missing transaksjonalitet, race conditions"
            },
            "eksisterendeBeskyttelse": {
              "no": "Best-effort consistency",
              "en": "Best-effort consistency"
            },
            "eksisterendeKontroll": {
              "no": "Eventual consistency",
              "en": "Eventual consistency"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Unngå distribuerte transaksjoner hvor mulig, bruk saga pattern, eventual consistency med reconciliation, idempotency",
              "en": "Avoid distributed transactions where possible, use a saga pattern, and combine eventual consistency with reconciliation and idempotency"
            }
          },
          {
            "id": "pattern-004",
            "risikoelement": {
              "no": "Orkestreringstjeneste single point of failure",
              "en": "Orkestreringstjeneste single point of failure"
            },
            "saarbarhet": {
              "no": "Arbeidsflytmotor eller orkestrator feiler, alle arbeidsflyter stopper og tilstandsdata går tapt",
              "en": "Workflow engine/orchestrator fails, all workflows stopper, state data goes tapt"
            },
            "eksisterendeBeskyttelse": {
              "no": "Orchestration platform (Airflow/Temporal)",
              "en": "Orchestration platform (Airflow/Temporal)"
            },
            "eksisterendeKontroll": {
              "no": "overvåking av orchestrator",
              "en": "Monitoring of orchestrator"
            },
            "K": 5,
            "I": 3,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "High availability orchestrator, persistent state store, arbeidsflyt resume capability, circuit breakers til orchestrator",
              "en": "High availability orchestrator, persistent state store, workflow resume capability, circuit breakers to orchestrator"
            }
          },
          {
            "id": "pattern-005",
            "risikoelement": {
              "no": "Tilstandshåndtering i distribuerte arbeidsflyter",
              "en": "State management in distributed workflows"
            },
            "saarbarhet": {
              "no": "arbeidsflyt state ikke persistent, retry feiler fordi state tapt, ingen deduplication",
              "en": "Workflow state not persistent, retry fails fordi state tapt, no deduplication"
            },
            "eksisterendeBeskyttelse": {
              "no": "In-memory state",
              "en": "In-memory state"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av arbeidsflyt status",
              "en": "Logging of workflow status"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Persistent arbeidsflyt state (database, arbeidsflyt engine), idempotency keys, state machine pattern, event sourcing",
              "en": "Persistent workflow state (database, workflow engine), idempotency keys, state machine pattern, event sourcing"
            }
          }
        ]
      },
      {
        "id": "resiliens-feilhandtering",
        "navn": {
          "no": "Resiliens og feilhåndtering",
          "en": "Resilience and Error Handling"
        },
        "risikoer": [
          {
            "id": "resiliens-001",
            "risikoelement": {
              "no": "Retry logic uten exponential backoff",
              "en": "Retry logic without exponential backoff"
            },
            "saarbarhet": {
              "no": "Aggressive retries forverrer overload, thundering herd, ingen jitter, DDoS på egen infrastruktur",
              "en": "Aggressive retries worsens overload, thundering herd, no jitter, DDoS on egen infrastruktur"
            },
            "eksisterendeBeskyttelse": {
              "no": "Retry 3 ganger ved feil",
              "en": "Retry 3 ganger on failure"
            },
            "eksisterendeKontroll": {
              "no": "Fixed delay mellom retries",
              "en": "Fixed delay mellom retries"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Exponential backoff med jitter, max retry count, retry kun transient errors, circuit breaker for å stoppe retries",
              "en": "Exponential backoff with jitter, max retry count, retry only transient errors, circuit breaker for to stoppe retries"
            }
          },
          {
            "id": "resiliens-002",
            "risikoelement": {
              "no": "Manglende idempotency i operasjoner",
              "en": "Missing idempotency in operations"
            },
            "saarbarhet": {
              "no": "Retry eller replay av operasjon gir uønsket duplikater (dobbel betaling, dupliserte orders)",
              "en": "Retry or replay of operation gives undesired duplicates (dobbel betaling, dupliserte orders)"
            },
            "eksisterendeBeskyttelse": {
              "no": "Unike IDer på transaksjoner",
              "en": "Unike IDer on transactions"
            },
            "eksisterendeKontroll": {
              "no": "Håp om at retries ikke skjer",
              "en": "Hope that retries do not happen"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Design alle operasjoner idempotent, idempotency keys, deduplication store (TTL cache), safe to retry",
              "en": "Design all operations idempotent, idempotency keys, deduplication store (TTL cache), safe to retry"
            }
          },
          {
            "id": "resiliens-003",
            "risikoelement": {
              "no": "Ingen backpressure-mekanisme",
              "en": "No backpressure-mechanism"
            },
            "saarbarhet": {
              "no": "Upstream sender raskere enn downstream kan prosessere, memory exhaustion, cascading failures",
              "en": "Upstream systems send data faster than downstream systems can process it, leading to memory exhaustion and cascading failures"
            },
            "eksisterendeBeskyttelse": {
              "no": "Buffering i minne",
              "en": "Buffering in minne"
            },
            "eksisterendeKontroll": {
              "no": "Restart ved out-of-memory",
              "en": "Restart during out-of-memory"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implement backpressure with reactive streams, bounded queues, load shedding, rate limiting, and 429/503 responses",
              "en": "Implement backpressure with reactive streams, bounded queues, load shedding, rate limiting, and 429/503 responses"
            }
          },
          {
            "id": "resiliens-004",
            "risikoelement": {
              "no": "Manglende graceful degradation",
              "en": "Missing graceful degradation"
            },
            "saarbarhet": {
              "no": "Når en avhengighet feiler, feiler hele tjenesten i stedet for å degradere funksjonalitet",
              "en": "When a dependency fails, fails hele the service in stedet for to degradere funksjonalitet"
            },
            "eksisterendeBeskyttelse": {
              "no": "Error handling",
              "en": "Error handling"
            },
            "eksisterendeKontroll": {
              "no": "Manuell failover",
              "en": "Manuell failover"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Feature toggles for non-critical features, fallback values, cached responses, static content som fallback",
              "en": "Feature toggles for non-critical features, fallback values, cached responses, static content that fallback"
            }
          },
          {
            "id": "resiliens-005",
            "risikoelement": {
              "no": "Dependency failures kaskaderer",
              "en": "Dependency failures kaskaderer"
            },
            "saarbarhet": {
              "no": "Én tjeneste feiler, trekker ned alle avhengige tjenester, ingen isolasjon, tight coupling",
              "en": "Én service fails, trekker ned all avhengige services, no isolasjon, tight coupling"
            },
            "eksisterendeBeskyttelse": {
              "no": "overvåking av avhengigheter",
              "en": "Monitoring of avhengigheter"
            },
            "eksisterendeKontroll": {
              "no": "Alerting ved feil",
              "en": "Alerting on failure"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Circuit breakers, bulkheads (isolere ressurser), timeouts, async kommunikasjon, fail-fast på non-critical paths",
              "en": "Circuit breakers, bulkheads (isolere resources), timeouts, async communications, fail-fast on non-critical paths"
            }
          },
          {
            "id": "resiliens-006",
            "risikoelement": {
              "no": "Manglende chaos engineering og resiliens-testing",
              "en": "Missing chaos engineering and resilience-testing"
            },
            "saarbarhet": {
              "no": "Resiliens-mekanismer ikke testet, finner ut ved faktisk nedetid at fallbacks ikke virker",
              "en": "Resilience-mekanismer not tested, finner ut during actual nedetid at fallbacks not virker"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard testing",
              "en": "Standard testing"
            },
            "eksisterendeKontroll": {
              "no": "Ingen chaos testing",
              "en": "No chaos testing"
            },
            "K": 3,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Implementere chaos engineering (Chaos Monkey, fault injection), teste failure scenarios, gamedays, test i prod",
              "en": "Implement chaos engineering such as fault injection, test failure scenarios, run gamedays, and test in production where appropriate"
            }
          }
        ]
      },
      {
        "id": "middleware-platform",
        "navn": {
          "no": "Middleware og integrasjonsplattformer",
          "en": "Middleware Platform"
        },
        "risikoer": [
          {
            "id": "middleware-001",
            "risikoelement": {
              "no": "ESB/middleware single point of failure",
              "en": "ESB/middleware single point of failure"
            },
            "saarbarhet": {
              "no": "All integrasjon går via én ESB/middleware, hvis denne feiler stopper all dataflyt",
              "en": "All integrasjon goes via én ESB/middleware, hvis denne fails stopper all dataflyt"
            },
            "eksisterendeBeskyttelse": {
              "no": "Enterprise Service Bus",
              "en": "Enterprise Service Bus"
            },
            "eksisterendeKontroll": {
              "no": "overvåking av ESB",
              "en": "Monitoring of ESB"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "High availability setup, clustering, vurdere å gå bort fra ESB til point-to-point eller service mesh",
              "en": "Use a highly available setup with clustering, and consider moving away from the ESB toward point-to-point integrations or a service mesh"
            }
          },
          {
            "id": "middleware-002",
            "risikoelement": {
              "no": "Message transformation i middleware gir leverandør lock-in",
              "en": "Message transformation in middleware gives vendor lock-in"
            },
            "saarbarhet": {
              "no": "Business logic i middleware-config, vanskelig å migrere, proprietær transformasjonslogikk",
              "en": "Business logic is embedded in middleware configuration, is difficult to migrate, and relies on proprietary transformation logic"
            },
            "eksisterendeBeskyttelse": {
              "no": "ESB håndterer transformasjoner",
              "en": "ESB handles transformasjoner"
            },
            "eksisterendeKontroll": {
              "no": "Dokumentert i ESB",
              "en": "Documented in ESB"
            },
            "K": 3,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Flytte transformasjonslogikk til services, minimal logic i middleware, infrastructure as code for middleware config",
              "en": "Flytte transformasjonslogikk to services, minimal logic in middleware, infrastructure as code for middleware config"
            }
          },
          {
            "id": "middleware-003",
            "risikoelement": {
              "no": "Performance bottleneck i integrasjonsplattform",
              "en": "Performance bottleneck in integrasjonsplattform"
            },
            "saarbarhet": {
              "no": "All trafikk går via middleware, begrenset throughput, latency øker, skaleringsutfordringer",
              "en": "All trafikk goes via middleware, begrenset throughput, latency increases, skaleringsutfordringer"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dedikert integrasjonsserver",
              "en": "Dedikert integrasjonsserver"
            },
            "eksisterendeKontroll": {
              "no": "Performance overvåking",
              "en": "Performance monitoring"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Horizontal scaling av middleware, vurdere direct integration for high-volume, caching, async patterns",
              "en": "Horizontal scaling of middleware, assess direct integration for high-volume, caching, async patterns"
            }
          },
          {
            "id": "middleware-004",
            "risikoelement": {
              "no": "Configuration drift i middleware",
              "en": "Configuration operations in middleware"
            },
            "saarbarhet": {
              "no": "Manuelle endringer i GUI, ikke versjonskontrollert, staging og prod ut-av-sync, ingen audit trail",
              "en": "Manual GUI changes are not version-controlled, staging and production operations apart, and there is no audit trail"
            },
            "eksisterendeBeskyttelse": {
              "no": "Change management prosess",
              "en": "Change management process"
            },
            "eksisterendeKontroll": {
              "no": "Dokumentasjon av endringer",
              "en": "Documentation of endringer"
            },
            "K": 3,
            "I": 3,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Infrastructure as Code for middleware, versjonskontroll av config, automated utrulling, configuration validation",
              "en": "Use Infrastructure as Code for middleware, version control configuration, automate deployment, and validate configuration changes"
            }
          },
          {
            "id": "middleware-005",
            "risikoelement": {
              "no": "Manglende observability i integrasjonsflyt",
              "en": "Missing observability in integrasjonsflyt"
            },
            "saarbarhet": {
              "no": "Melding går inn i middleware og forsvinner, vanskelig å trace end-to-end, debugging tar lang tid",
              "en": "Message goes inn in middleware and forsvinner, difficult to trace end-to-end, debugging tar lang time"
            },
            "eksisterendeBeskyttelse": {
              "no": "loggføring i middleware",
              "en": "Logging in middleware"
            },
            "eksisterendeKontroll": {
              "no": "Log aggregation",
              "en": "Log aggregation"
            },
            "K": 3,
            "I": 2,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Distributed tracing (correlation IDs), end-to-end transaction overvåking, business prosess overvåking, integration flow visualization",
              "en": "Distributed tracing (correlation IDs), end-to-end transaction monitoring, business process monitoring, integration flow visualization"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "iot-embedded",
    "navn": {
      "no": "IoT og Embedded Systems",
      "en": "IoT and Embedded Systems"
    },
    "beskrivelse": {
      "no": "Risikoer knyttet til IoT-enheter, embedded systems og OT (Operational Technology)",
      "en": "Risks related to IoT-devices, embedded systems and OT (Operational Technology)"
    },
    "kategorier": [
      {
        "id": "device-security",
        "navn": {
          "no": "Enhetssikkerhet",
          "en": "Device Security"
        },
        "risikoer": [
          {
            "id": "iot-001",
            "risikoelement": {
              "no": "IoT-enheter med default credentials",
              "en": "IoT-devices with default credentials"
            },
            "saarbarhet": {
              "no": "Admin/admin, root/root, hardkodet factory password",
              "en": "Admin/admin, root/root, hardkodet factory password"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentert passordbytte ved installasjon",
              "en": "Documented passordbytte during installasjon"
            },
            "eksisterendeKontroll": {
              "no": "Scanning av default credentials",
              "en": "Scanning of default credentials"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Force password change ved first boot, unique per-enhet credentials, certificate-based auth",
              "en": "Force password change during first boot, unique per-device credentials, certificate-based auth"
            }
          },
          {
            "id": "iot-002",
            "risikoelement": {
              "no": "Manglende firmware-oppdateringer på IoT-enheter",
              "en": "Missing firmware-updates on IoT-devices"
            },
            "saarbarhet": {
              "no": "Ingen OTA (over-the-air) update, manuell firmware-oppdatering",
              "en": "No OTA (over-the-air) update, manuell firmware-updating"
            },
            "eksisterendeBeskyttelse": {
              "no": "Firmwareversjon dokumentert",
              "en": "Firmwareversjon documented"
            },
            "eksisterendeKontroll": {
              "no": "Årlig firmware gjennomgang",
              "en": "Annual firmware review"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "Automated OTA updates, signed firmware, rollback mechanism, update overvåking",
              "en": "Automated OTA updates, signed firmware, rollback mechanism, update monitoring"
            }
          },
          {
            "id": "iot-003",
            "risikoelement": {
              "no": "Ukryptert kommunikasjon fra IoT-enhet til backend",
              "en": "unencrypted communications from IoT-device to backend"
            },
            "saarbarhet": {
              "no": "HTTP i stedet for HTTPS, ingen TLS, plaintext MQTT",
              "en": "HTTP is used instead of HTTPS, there is no TLS, and MQTT traffic is sent in plaintext"
            },
            "eksisterendeBeskyttelse": {
              "no": "Isolated IoT VLAN",
              "en": "Isolated IoT VLAN"
            },
            "eksisterendeKontroll": {
              "no": "nettverk traffic overvåking",
              "en": "Network traffic monitoring"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Mandatory TLS/DTLS, certificate pinning, encrypted MQTT (TLS), VPN for legacy enheter",
              "en": "Mandatory TLS/DTLS, certificate pinning, encrypted MQTT (TLS), VPN for legacy devices"
            }
          },
          {
            "id": "iot-004",
            "risikoelement": {
              "no": "Fysisk tilgang til enhet gir full kontroll",
              "en": "Physical access to the device provides full control"
            },
            "saarbarhet": {
              "no": "Debug ports åpne, ingen secure boot, ukryptert storage",
              "en": "Debug ports are open, secure boot is missing, and storage is unencrypted"
            },
            "eksisterendeBeskyttelse": {
              "no": "Fysisk sikring av kritiske enheter",
              "en": "Physical protection of critical devices"
            },
            "eksisterendeKontroll": {
              "no": "Revisjon av fysisk sikkerhet",
              "en": "Physical security audit"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Secure boot, encrypted storage, disabled debug ports, tamper detection",
              "en": "Secure boot, encrypted storage, disabled debug ports, tamper detection"
            }
          },
          {
            "id": "iot-005",
            "risikoelement": {
              "no": "Enhet kan brukes som inngangsport til OT-nettverk",
              "en": "A device can be used as an entry point into the OT network"
            },
            "saarbarhet": {
              "no": "IoT-enheter på samme VLAN som SCADA/ICS",
              "en": "IoT devices share the same VLAN as SCADA or ICS systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "Separate nettverk",
              "en": "Separate networks"
            },
            "eksisterendeKontroll": {
              "no": "nettverk segmentation gjennomgang",
              "en": "Network segmentation review"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Air-gapped OT nettverk, industrial DMZ, IDS/IPS, micro-segmentation",
              "en": "Air-gapped OT network, industrial DMZ, IDS/IPS, micro-segmentation"
            }
          }
        ]
      },
      {
        "id": "firmware",
        "navn": {
          "no": "Firmware-sikkerhet",
          "en": "Firmware Security"
        },
        "risikoer": [
          {
            "id": "fw-001",
            "risikoelement": {
              "no": "Usignert eller uverifisert firmware kan installeres",
              "en": "Usignert or uverifisert firmware can installeres"
            },
            "saarbarhet": {
              "no": "Manglende signature verification, unsigned updates",
              "en": "Missing signature verification, unsigned updates"
            },
            "eksisterendeBeskyttelse": {
              "no": "Controlled update prosess",
              "en": "Controlled update process"
            },
            "eksisterendeKontroll": {
              "no": "manuell verification",
              "en": "Manual verification"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Mandatory code signing, secure boot chain, hardware root of trust (TPM/TEE)",
              "en": "Mandatory code signing, secure boot chain, hardware root of trust (TPM/TEE)"
            }
          },
          {
            "id": "fw-002",
            "risikoelement": {
              "no": "Hardkodede credentials eller secrets i firmware",
              "en": "Hardcoded credentials or secrets in firmware"
            },
            "saarbarhet": {
              "no": "API keys, encryption keys, passwords embedded in binary",
              "en": "API keys, encryption keys, passwords embedded in binary"
            },
            "eksisterendeBeskyttelse": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "eksisterendeKontroll": {
              "no": "Static analysis",
              "en": "Static analysis"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Secure element for key storage, runtime key injection, no hardcoded secrets",
              "en": "Secure element for key storage, runtime key injection, no hardcoded secrets"
            }
          },
          {
            "id": "fw-003",
            "risikoelement": {
              "no": "Buffer overflow eller memory corruption i embedded kode",
              "en": "Buffer overflow or memory corruption in embedded code"
            },
            "saarbarhet": {
              "no": "Usikker C/C++ kode, manglende bounds checking",
              "en": "Insecure C/C++ code, missing bounds checking"
            },
            "eksisterendeBeskyttelse": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "eksisterendeKontroll": {
              "no": "manuell testing",
              "en": "Manual testing"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Memory-safe languages (Rust), ASLR, stack canaries, fuzzing, SAST",
              "en": "Memory-safe languages (Rust), ASLR, stack canaries, fuzzing, SAST"
            }
          },
          {
            "id": "fw-004",
            "risikoelement": {
              "no": "Firmware kan dumpes og reverse engineeres",
              "en": "Firmware can dumpes and reverse engineeres"
            },
            "saarbarhet": {
              "no": "Ukryptert firmware, ingen obfuscation, debug symbols",
              "en": "unencrypted firmware, no obfuscation, debug symbols"
            },
            "eksisterendeBeskyttelse": {
              "no": "Proprietary protocols",
              "en": "Proprietary protocols"
            },
            "eksisterendeKontroll": {
              "no": "Legal protection (NDAs)",
              "en": "Legal protection (NDAs)"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Encrypted firmware, code obfuscation, strip debug symbols, IP protection",
              "en": "Encrypted firmware, code obfuscation, strip debug symbols, IP protection"
            }
          }
        ]
      },
      {
        "id": "ot-scada",
        "navn": {
          "no": "OT/SCADA/ICS",
          "en": "OT and SCADA"
        },
        "risikoer": [
          {
            "id": "ot-001",
            "risikoelement": {
              "no": "Legacy OT-system uten sikkerhetsoppdateringer",
              "en": "Legacy OT-system without security patches"
            },
            "saarbarhet": {
              "no": "Utdaterte SCADA-systemer, embedded Windows XP, leverandør support ended",
              "en": "Utdaterte SCADA-systems, embedded Windows XP, vendor support ended"
            },
            "eksisterendeBeskyttelse": {
              "no": "Air-gapped nettverk",
              "en": "Air-gapped network"
            },
            "eksisterendeKontroll": {
              "no": "Physical tilgang control",
              "en": "Physical access control"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Virtual patching, nettverk isolation, compensating controls, upgrade path",
              "en": "Virtual patching, network isolation, compensating controls, upgrade path"
            }
          },
          {
            "id": "ot-002",
            "risikoelement": {
              "no": "USB eller removable media introduserer malware til OT",
              "en": "USB or removable media introduserer malware to OT"
            },
            "saarbarhet": {
              "no": "USB ports åpne, ingen enhet control",
              "en": "USB ports are open and there is no device control"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot USB bruk",
              "en": "Policy mot USB bruk"
            },
            "eksisterendeKontroll": {
              "no": "manuell enforcement",
              "en": "Manual enforcement"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "USB port blocking, kiosk mode, media sanitization station, endpoint protection",
              "en": "USB port blocking, kiosk mode, media sanitization station, endpoint protection"
            }
          },
          {
            "id": "ot-003",
            "risikoelement": {
              "no": "Ukrypterte industrielle protokoller (Modbus, DNP3)",
              "en": "Ukrypterte industrielle protokoller (Modbus, DNP3)"
            },
            "saarbarhet": {
              "no": "Legacy protocols uten encryption, man-in-the-middle mulig",
              "en": "Legacy protocols without encryption, man-in-the-middle possible"
            },
            "eksisterendeBeskyttelse": {
              "no": "Isolated nettverk",
              "en": "Isolated network"
            },
            "eksisterendeKontroll": {
              "no": "Physical security",
              "en": "Physical security"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Protocol gateways, VPN overlays, IDS signatures, Purdue model segmentation",
              "en": "Protocol gateways, VPN overlays, IDS signatures, Purdue model segmentation"
            }
          },
          {
            "id": "ot-004",
            "risikoelement": {
              "no": "IT/OT convergence introduserer nye angrepsvektorer",
              "en": "IT/OT convergence introduserer nye angrepsvektorer"
            },
            "saarbarhet": {
              "no": "Remote tilgang fra IT til OT, sky connectivity",
              "en": "Remote access from IT to OT, cloud connectivity"
            },
            "eksisterendeBeskyttelse": {
              "no": "Firewall between IT and OT",
              "en": "Firewall between IT and OT"
            },
            "eksisterendeKontroll": {
              "no": "tilgang loggføring",
              "en": "Access logging"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Industrial DMZ, unidirectional gateways, jump hosts, anomaly detection",
              "en": "Industrial DMZ, unidirectional gateways, jump hosts, anomaly detection"
            }
          },
          {
            "id": "ot-005",
            "risikoelement": {
              "no": "Utilsiktet shutdown av kritisk infrastruktur",
              "en": "Accidental shutdown of critical infrastruktur"
            },
            "saarbarhet": {
              "no": "Manglende change control, uforutsette effekter av endringer",
              "en": "Missing change control, uforutsette effekter of endringer"
            },
            "eksisterendeBeskyttelse": {
              "no": "Change management prosess",
              "en": "Change management process"
            },
            "eksisterendeKontroll": {
              "no": "Testing i lab-miljø",
              "en": "testing in lab-environment"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Digital twins for testing, staged rollouts, emergency stop procedures",
              "en": "Digital twins for testing, staged rollouts, emergency stop procedures"
            }
          }
        ]
      },
      {
        "id": "iot-backend",
        "navn": {
          "no": "IoT Backend og sky",
          "en": "IoT Backend"
        },
        "risikoer": [
          {
            "id": "cloud-iot-001",
            "risikoelement": {
              "no": "IoT sky platform kompromittert",
              "en": "IoT cloud platform kompromittert"
            },
            "saarbarhet": {
              "no": "Sentral kontroll over alle enheter, single point of failure",
              "en": "Central control over all devices creates a single point of failure"
            },
            "eksisterendeBeskyttelse": {
              "no": "Beste praksis for skysikkerhet",
              "en": "Cloud security best practices"
            },
            "eksisterendeKontroll": {
              "no": "Penetration testing",
              "en": "Penetration testing"
            },
            "K": 5,
            "I": 5,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Zero trust architecture, enhet authentication, encrypted commands, audit loggføring",
              "en": "Zero trust architecture, device authentication, encrypted commands, audit logging"
            }
          },
          {
            "id": "cloud-iot-002",
            "risikoelement": {
              "no": "DDoS-angrep fra botnet av kompromitterte IoT-enheter",
              "en": "DDoS-angrep from botnet of kompromitterte IoT-devices"
            },
            "saarbarhet": {
              "no": "Millioner av enheter kan utnyttes til amplification attacks",
              "en": "Millioner of devices can utnyttes to amplification attacks"
            },
            "eksisterendeBeskyttelse": {
              "no": "Rate limiting",
              "en": "Rate limiting"
            },
            "eksisterendeKontroll": {
              "no": "DDoS overvåking",
              "en": "DDoS monitoring"
            },
            "K": 2,
            "I": 2,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "enhet health overvåking, anomaly detection, kill switch, DDoS mitigation",
              "en": "Device health monitoring, anomaly detection, kill switch, DDoS mitigation"
            }
          },
          {
            "id": "cloud-iot-003",
            "risikoelement": {
              "no": "Sårbart IoT API eksponert på internett",
              "en": "A vulnerable IoT API is exposed on the internet"
            },
            "saarbarhet": {
              "no": "OWASP API Top 10, broken object-level authorization",
              "en": "OWASP API Top 10, broken object-level authorization"
            },
            "eksisterendeBeskyttelse": {
              "no": "API authentication",
              "en": "API authentication"
            },
            "eksisterendeKontroll": {
              "no": "Sikkerhetsskanning av API",
              "en": "API security scanning"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "API gateway, rate limiting, OAuth scopes, input validation, WAF",
              "en": "API gateway, rate limiting, OAuth scopes, input validation, WAF"
            }
          },
          {
            "id": "cloud-iot-004",
            "risikoelement": {
              "no": "Datalekkasje fra telemetri/sensor data",
              "en": "Datalekkasje from telemetri/sensor data"
            },
            "saarbarhet": {
              "no": "Sensitive data i telemetry, persondata fra sensorer",
              "en": "Sensitive data in telemetry, personal data from sensorer"
            },
            "eksisterendeBeskyttelse": {
              "no": "Data classification",
              "en": "Data classification"
            },
            "eksisterendeKontroll": {
              "no": "GDPR compliance gjennomgang",
              "en": "GDPR compliance review"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Data minimization, edge processing, anonymization, encryption at rest",
              "en": "Data minimization, edge processing, anonymization, encryption at rest"
            }
          }
        ]
      },
      {
        "id": "supply-chain-iot",
        "navn": {
          "no": "IoT Supply Chain",
          "en": "IoT Supply Chain"
        },
        "risikoer": [
          {
            "id": "iot-supply-001",
            "risikoelement": {
              "no": "Kompromitterte enheter fra produsent",
              "en": "Kompromitterte devices from produsent"
            },
            "saarbarhet": {
              "no": "Malware pre-installed, backdoors i firmware",
              "en": "Malware pre-installed, backdoors in firmware"
            },
            "eksisterendeBeskyttelse": {
              "no": "Trusted leverandører",
              "en": "Trusted vendors"
            },
            "eksisterendeKontroll": {
              "no": "Sikkerhetsvurdering av leverandør",
              "en": "Vendor security assessment"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 1,
            "foreslaatteTiltak": {
              "no": "Sikkerhetsrevisjon av leverandør, firmwarevalidering, sikker leverandørkjede og attestering",
              "en": "Vendor security audit, firmware validation, secure supply chain, attestation"
            }
          },
          {
            "id": "iot-supply-002",
            "risikoelement": {
              "no": "Counterfeit eller cloned IoT-enheter",
              "en": "Counterfeit or cloned IoT-devices"
            },
            "saarbarhet": {
              "no": "Manglende enhet attestation, ukjent hardware origin",
              "en": "Missing device attestation, unknown hardware origin"
            },
            "eksisterendeBeskyttelse": {
              "no": "Purchase from authorized distributors",
              "en": "Purchase from authorized distributors"
            },
            "eksisterendeKontroll": {
              "no": "Visual inspection",
              "en": "Visual inspection"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Hardware attestation, unique enhet IDs, secure elements, supply chain verification",
              "en": "Hardware attestation, unique device IDs, secure elements, supply chain verification"
            }
          },
          {
            "id": "iot-supply-003",
            "risikoelement": {
              "no": "Mangel på firmware- og sikkerhetsoppdateringer etter EOL",
              "en": "Mangel on firmware/security updates after EOL"
            },
            "saarbarhet": {
              "no": "leverandør discontinues support, no update path",
              "en": "Vendor discontinues support, no update path"
            },
            "eksisterendeBeskyttelse": {
              "no": "Extended support kontrakter",
              "en": "Extended support contracts"
            },
            "eksisterendeKontroll": {
              "no": "Lifecycle sporing",
              "en": "Lifecycle tracking"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Lifecycle planning, replacement budget, open-source firmware option, long-term support agreements",
              "en": "Lifecycle planning, replacement budget, open-source firmware option, long-term support agreements"
            }
          }
        ]
      },
      {
        "id": "edge-computing",
        "navn": {
          "no": "Edge Computing",
          "en": "Edge Computing"
        },
        "risikoer": [
          {
            "id": "edge-001",
            "risikoelement": {
              "no": "Kompromittert edge gateway gir tilgang til alle downstream enheter",
              "en": "A compromised edge gateway provides access to all downstream devices"
            },
            "saarbarhet": {
              "no": "Edge node som single point of failure, over-privileged",
              "en": "Edge node that single point of failure, over-privileged"
            },
            "eksisterendeBeskyttelse": {
              "no": "Hardened edge OS",
              "en": "Hardened edge OS"
            },
            "eksisterendeKontroll": {
              "no": "Sikkerhetsovervåking",
              "en": "Security monitoring"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Micro-segmentation, least privilege, attestation, anomaly detection",
              "en": "Micro-segmentation, least privilege, attestation, anomaly detection"
            }
          },
          {
            "id": "edge-002",
            "risikoelement": {
              "no": "Fysisk tilgang til edge-enhet i usikret lokasjon",
              "en": "Physical access to an edge device in an unsecured location"
            },
            "saarbarhet": {
              "no": "Edge nodes i remote/public locations, ingen physical security",
              "en": "Edge nodes in remote/public locations, no physical security"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked cabinets",
              "en": "Locked cabinets"
            },
            "eksisterendeKontroll": {
              "no": "Physical checks",
              "en": "Physical checks"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Encrypted storage, tamper detection, secure boot, remote wipe capability",
              "en": "Encrypted storage, tamper detection, secure boot, remote wipe capability"
            }
          },
          {
            "id": "edge-003",
            "risikoelement": {
              "no": "Edge ML-modeller kan bli stjålet eller poisoned",
              "en": "Edge ML-modeller can bli stolen or poisoned"
            },
            "saarbarhet": {
              "no": "Modeller deployert til edge uten beskyttelse",
              "en": "Models are deployed to edge environments without adequate protection"
            },
            "eksisterendeBeskyttelse": {
              "no": "Model encryption",
              "en": "Model encryption"
            },
            "eksisterendeKontroll": {
              "no": "Model versioning",
              "en": "Model versioning"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Model encryption, TEE for inference, model watermarking, federated learning",
              "en": "Model encryption, TEE for inference, model watermarking, federated learning"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "kontinuitet",
    "navn": {
      "no": "Business Continuity og resiliens",
      "en": "Business Continuity and Resilience"
    },
    "beskrivelse": {
      "no": "BCP/DR, krisehåndtering, gjenoppretting, tester, leverandørresiliens og hendelseshåndtering",
      "en": "BCP/DR, crisis management, recovery, exercises, vendor resilience, and incident response"
    },
    "kategorier": [
      {
        "id": "bcp-planlegging",
        "navn": {
          "no": "BCP/DR-planlegging",
          "en": "Business Continuity Planning"
        },
        "risikoer": [
          {
            "id": "bcp-001",
            "risikoelement": {
              "no": "Manglende eller utdatert BCP/DR-plan",
              "en": "Missing or outdated BCP/DR plan"
            },
            "saarbarhet": {
              "no": "Planer eksisterer ikke, er ikke oppdatert eller dekker ikke aktuelle trusler og systemer",
              "en": "Plans do not exist, are not updated, or do not cover current threats and systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "Ad-hoc krisehåndtering, noen dokumenterte prosedyrer",
              "en": "Ad-hoc crisis management and a few documented procedures"
            },
            "eksisterendeKontroll": {
              "no": "Ingen formell plan eller kun grovt skissert plan",
              "en": "No formal plan, or only a rough draft"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Utarbeide formell BCP/DR-plan med årlig revisjon, inkludere alle kritiske systemer og tjenester",
              "en": "Prepare a formal BCP/DR plan, review it annually, and include all critical systems and services"
            }
          },
          {
            "id": "bcp-002",
            "risikoelement": {
              "no": "Ukjente eller udokumenterte avhengigheter",
              "en": "Unknown or undocumented dependencies"
            },
            "saarbarhet": {
              "no": "Kritiske avhengigheter mellom systemer, leverandører eller prosesser er ikke kartlagt",
              "en": "Critical dependencies between systems, vendors, and processes have not been mapped"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noen kjente integrasjoner dokumentert",
              "en": "Some known integrations are documented"
            },
            "eksisterendeKontroll": {
              "no": "Sporadisk gjennomgang ved endringer",
              "en": "Ad-hoc reviews during changes"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Gjennomføre Business Impact Analysis (BIA) med avhengighetskartlegging, vedlikeholde dependency map",
              "en": "Conduct a Business Impact Analysis (BIA) with dependency mapping and maintain a dependency map"
            }
          },
          {
            "id": "bcp-003",
            "risikoelement": {
              "no": "Manglende RTO/RPO-definering",
              "en": "Missing RTO/RPO definitions"
            },
            "saarbarhet": {
              "no": "gjenoppretting Time Objective og gjenoppretting Point Objective ikke definert for kritiske systemer",
              "en": "Recovery Time Objective and Recovery Point Objective are not defined for critical systems"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generelle forventninger til oppetid",
              "en": "General uptime expectations"
            },
            "eksisterendeKontroll": {
              "no": "Ingen formaliserte krav",
              "en": "No formal requirements"
            },
            "K": 3,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Definere RTO/RPO per system basert på BIA, forankre i SLA og backup-strategi",
              "en": "Define RTO and RPO per system based on the BIA, and anchor them in SLAs and the backup strategy"
            }
          },
          {
            "id": "bcp-004",
            "risikoelement": {
              "no": "BCP dekker ikke alle kritiske tjenester",
              "en": "The BCP does not cover all critical services"
            },
            "saarbarhet": {
              "no": "Nyere systemer eller shadow IT ikke inkludert i kontinuitetsplanlegging",
              "en": "Newer systems or shadow IT are not included in continuity planning"
            },
            "eksisterendeBeskyttelse": {
              "no": "Plan dekker primære systemer",
              "en": "The plan covers the primary systems"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av plan",
              "en": "Annual review of plan"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Regelmessig oppdatering av systemkatalog, inkludere nye systemer i BCP-prosess",
              "en": "Update the system inventory regularly and include new systems in the BCP process"
            }
          },
          {
            "id": "bcp-005",
            "risikoelement": {
              "no": "Kritisk infrastruktur er ikke geografisk tilstrekkelig spredt",
              "en": "Critical infrastructure is not geographically distributed sufficiently"
            },
            "saarbarhet": {
              "no": "Primær og backup-lokasjon i samme geografiske område (felles risiko for naturkatastrofer, strømbrudd, etc.)",
              "en": "The primary and backup locations are in the same geographic area, creating shared risk from natural disasters, power outages, and similar events"
            },
            "eksisterendeBeskyttelse": {
              "no": "backup i annen availability zone",
              "en": "Backup in another availability zone"
            },
            "eksisterendeKontroll": {
              "no": "Sjekk av redundans ved design",
              "en": "Redundancy is reviewed during design"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Sikre geografisk spredning av kritisk infrastruktur over ulike regioner, multi-region strategi for skytjenester",
              "en": "Ensure geographic separation of critical infrastructure across regions and use a multi-region strategy for cloud services"
            }
          }
        ]
      },
      {
        "id": "backup-restore",
        "navn": {
          "no": "backup og gjenoppretting",
          "en": "Backup and recovery"
        },
        "risikoer": [
          {
            "id": "backup-001",
            "risikoelement": {
              "no": "backup feiler uten varsling",
              "en": "Backup fails without alerting"
            },
            "saarbarhet": {
              "no": "Automatiske backuper feiler, men ingen overvåker eller varsler om feil",
              "en": "Automatic backups fail, but nobody monitors them or sends alerts about failures"
            },
            "eksisterendeBeskyttelse": {
              "no": "Automatiserte backup-jobber",
              "en": "Automated backup jobs"
            },
            "eksisterendeKontroll": {
              "no": "Ukentlig manuell sjekk av logger",
              "en": "Weekly manual check of logs"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Implementere automatisk monitorering av backup-status med umiddelbar varsling ved feil, success/failure metrics",
              "en": "Implement automatic monitoring of backup status with immediate alerts on failure, and track both success and failure metrics"
            }
          },
          {
            "id": "backup-002",
            "risikoelement": {
              "no": "backup aldri testet for gjenoppretting",
              "en": "Backups are never tested for recovery"
            },
            "saarbarhet": {
              "no": "Ingen regelmessig test av restore-prosedyre, ukjent om backup faktisk fungerer",
              "en": "There is no regular testing of the restore procedure, so it is unknown whether backups actually work"
            },
            "eksisterendeBeskyttelse": {
              "no": "backup kjører daglig",
              "en": "Backups run daily"
            },
            "eksisterendeKontroll": {
              "no": "backup kun testet ved faktisk hendelse",
              "en": "Backups are only tested during real incidents"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Kvartalsvis restore-test i isolert miljø, dokumentere restore-tid og prosedyre",
              "en": "Run quarterly restore tests in an isolated environment and document restore time and procedure"
            }
          },
          {
            "id": "backup-003",
            "risikoelement": {
              "no": "backup-retention oppfyller ikke krav",
              "en": "Backup retention does not meet requirements"
            },
            "saarbarhet": {
              "no": "Backups slettes for raskt (compliance, legal hold) eller beholdes for lenge (lagringskostnad, GDPR)",
              "en": "Backups are deleted too quickly or retained for too long, creating compliance, cost, or privacy issues"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard 30-dagers retention",
              "en": "Standard 30-day retention"
            },
            "eksisterendeKontroll": {
              "no": "Ingen spesifikk policy",
              "en": "No specific policy"
            },
            "K": 3,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Definere retention-policy basert på compliance-krav, implementere lifecycle management",
              "en": "Define a retention policy based on compliance requirements and implement lifecycle management"
            }
          },
          {
            "id": "backup-004",
            "risikoelement": {
              "no": "backup-data kan eksponeres fordi de ikke er godt nok beskyttet",
              "en": "Backup data can be exposed because it is not adequately protected"
            },
            "saarbarhet": {
              "no": "backup-data lagres ukryptert eller med svak kryptering, kan leses ved lekkasje",
              "en": "Backup data is stored unencrypted or with weak encryption and can be read if exposed"
            },
            "eksisterendeBeskyttelse": {
              "no": "backup lagres på separat storage",
              "en": "Backups are stored on separate storage"
            },
            "eksisterendeKontroll": {
              "no": "Tilgangskontroll på backup-volume",
              "en": "Access control on the backup volume"
            },
            "K": 4,
            "I": 5,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Kryptere alle backups at-rest og in-transit, sikker nøkkelhåndtering, immutable backups mot ransomware",
              "en": "Encrypt all backups at rest and in transit, use secure key management, and maintain immutable backups against ransomware"
            }
          },
          {
            "id": "backup-005",
            "risikoelement": {
              "no": "Manglende offline/air-gapped backup",
              "en": "Missing offline/air-gapped backup"
            },
            "saarbarhet": {
              "no": "Alle backups er online og tilgjengelige for samme autentisering - sårbar for ransomware og malicious insiders",
              "en": "All backups are online and accessible through the same authentication path, making them vulnerable to ransomware and malicious insiders"
            },
            "eksisterendeBeskyttelse": {
              "no": "Online backup til sky storage",
              "en": "Online backup to cloud storage"
            },
            "eksisterendeKontroll": {
              "no": "Tilgangskontroll og versjonering",
              "en": "Access control and versjonering"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Implementere 3-2-1 backup-strategi med offline eller air-gapped kopi, immutable backups",
              "en": "Implement a 3-2-1 backup strategy with an offline or air-gapped copy and immutable backups"
            }
          },
          {
            "id": "backup-006",
            "risikoelement": {
              "no": "Konfigurasjoner og hemmeligheter sikkerhetskopieres ikke tilstrekkelig",
              "en": "Configurations and secrets are not backed up sufficiently"
            },
            "saarbarhet": {
              "no": "Infrastructure-as-Code, secrets, nøkler og konfigurasjoner ikke inkludert i backup",
              "en": "Infrastructure as Code, secrets, keys, and configurations are not included in backups"
            },
            "eksisterendeBeskyttelse": {
              "no": "Applikasjonsdata backed up",
              "en": "Applikasjonsdata backed up"
            },
            "eksisterendeKontroll": {
              "no": "Git for IaC, manuell dokumentasjon",
              "en": "Git for IaC, manuell documentation"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Inkludere konfigurasjoner, IaC state, secrets (kryptert) i backup-strategi, automatisere config backup",
              "en": "Include configurations, IaC state, and encrypted secrets in the backup strategy, and automate configuration backups"
            }
          }
        ]
      },
      {
        "id": "krisehandtering",
        "navn": {
          "no": "Krisehåndtering og kommunikasjon",
          "en": "Crisis Management"
        },
        "risikoer": [
          {
            "id": "krise-001",
            "risikoelement": {
              "no": "Roller og ansvar kolliderer i en krisesituasjon",
              "en": "Roles and responsibilities collide during a crisis"
            },
            "saarbarhet": {
              "no": "Ingen definert kriseteam, ansvar eller beslutningsstruktur ved alvorlige hendelser",
              "en": "There is no defined crisis team, no clear responsibilities, and no decision structure for major incidents"
            },
            "eksisterendeBeskyttelse": {
              "no": "Nøkkelpersoner vet hvem de skal kontakte",
              "en": "Key personnel vet who de skal kontakte"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc organisering ved hendelse",
              "en": "Ad-hoc organization during incidents"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere Crisis Management Team (CMT) med definerte roller (hendelse commander, kommunikasjon, teknisk), RACI for krisehåndtering",
              "en": "Establish a Crisis Management Team (CMT) with defined roles such as incident commander, communications, and technical lead, and maintain a RACI for crisis management"
            }
          },
          {
            "id": "krise-002",
            "risikoelement": {
              "no": "Mangelfull eller forsinket intern kommunikasjon",
              "en": "Mangelfull or forsinket intern communications"
            },
            "saarbarhet": {
              "no": "Ansatte ikke informert om hendelser, usikkerhet og rykter sprer seg",
              "en": "Employees are not informed about incidents, and uncertainty and rumors spread"
            },
            "eksisterendeBeskyttelse": {
              "no": "E-post til berørte team",
              "en": "Email to affected teams"
            },
            "eksisterendeKontroll": {
              "no": "Manuell vurdering av hvem som skal informeres",
              "en": "Manuell vurdering of who that skal informeres"
            },
            "K": 2,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere kommunikasjonsplan for kriser, definere eskaleringsnivåer og kommunikasjonskanaler, pre-approved meldingsmaler",
              "en": "Establish a crisis communication plan, define escalation levels and communication channels, and prepare pre-approved message templates"
            }
          },
          {
            "id": "krise-003",
            "risikoelement": {
              "no": "Uforberedt ekstern kommunikasjon",
              "en": "Uforberedt external communications"
            },
            "saarbarhet": {
              "no": "Ingen plan for kundekommunikasjon, pressehåndtering eller regulatormeldinger ved alvorlige hendelser",
              "en": "There is no plan for customer communication, media handling, or regulatory notifications during major incidents"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell kommunikasjonsavdeling",
              "en": "Generell kommunikasjonsavdeling"
            },
            "eksisterendeKontroll": {
              "no": "Ad-hoc håndtering ved behov",
              "en": "Ad-hoc handling as needed"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Utarbeide kommunikasjonsmaler for ulike hendelsestyper, definere godkjenningsprosess, media opplæring for nøkkelpersoner",
              "en": "Prepare communication templates for different incident types, define an approval process, and provide media training for key personnel"
            }
          },
          {
            "id": "krise-004",
            "risikoelement": {
              "no": "Manglende beslutningskompetanse utenfor arbeidstid",
              "en": "Missing beslutningskompetanse outside arbeidstid"
            },
            "saarbarhet": {
              "no": "Kritiske beslutninger krever ledere som ikke er tilgjengelige kveld/helg",
              "en": "Critical decisions krever ledere that not is tilgjengelige kveld/helg"
            },
            "eksisterendeBeskyttelse": {
              "no": "Vaktordning for teknisk personell",
              "en": "Vaktordning for technical Personnel"
            },
            "eksisterendeKontroll": {
              "no": "Eskalering til ledelse ved arbeidstid",
              "en": "escalation to ledelse during arbeidstid"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Etablere delegert beslutningskompetanse for vaktlag, definere hva som krever lederinvolvering, 24/7 kontaktliste",
              "en": "establish delegert beslutningskompetanse for vaktlag, define what that krever lederinvolvering, 24/7 kontaktliste"
            }
          },
          {
            "id": "krise-005",
            "risikoelement": {
              "no": "Krisehåndteringen svikter fordi dokumentasjonen er for svak",
              "en": "Crisis handling fails because the documentation is too weak"
            },
            "saarbarhet": {
              "no": "Mangelfull loggføring av beslutninger, tiltak og tidslinje under krise",
              "en": "Mangelfull logging of decisions, tiltak and tidslinje under krise"
            },
            "eksisterendeBeskyttelse": {
              "no": "hendelse tickets og meldinger",
              "en": "Incident tickets and messages"
            },
            "eksisterendeKontroll": {
              "no": "Sporadisk loggføring",
              "en": "Sporadisk logging"
            },
            "K": 2,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere strukturert loggføring under hendelser (timeline, beslutninger, ansvarlige), bruke dedikert hendelse management tool",
              "en": "Establish structured logging during incidents, including a timeline, decisions, and responsible persons, and use a dedicated incident management tool"
            }
          }
        ]
      },
      {
        "id": "testing-oving",
        "navn": {
          "no": "Testing og øving",
          "en": "testing and Exercises"
        },
        "risikoer": [
          {
            "id": "test-001",
            "risikoelement": {
              "no": "BCP/DR-plan aldri testet",
              "en": "BCP/DR-plan aldri tested"
            },
            "saarbarhet": {
              "no": "Planen er kun teoretisk, ukjent om den faktisk fungerer i praksis",
              "en": "Planen is only teoretisk, unknown about den actual fungerer in praksis"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentert plan eksisterer",
              "en": "Documented plan eksisterer"
            },
            "eksisterendeKontroll": {
              "no": "Ingen strukturerte tester",
              "en": "No strukturerte tester"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Gjennomføre årlig fullskala DR-test, halvårlige desktop exercises, dokumentere funn og forbedre plan",
              "en": "Conduct an annual full-scale disaster recovery test, semiannual tabletop exercises, document findings, and improve the plan"
            }
          },
          {
            "id": "test-002",
            "risikoelement": {
              "no": "Tabletop exercises aldri gjennomført",
              "en": "Tabletop exercises aldri completed"
            },
            "saarbarhet": {
              "no": "Kriseteam har ikke øvd på samarbeid og beslutningsprosesser i simulerte kriser",
              "en": "The crisis team has not practiced collaboration and decision-making in simulated crises"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumenterte prosedyrer",
              "en": "Documented procedures"
            },
            "eksisterendeKontroll": {
              "no": "Ingen øvelser",
              "en": "No exercises"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Gjennomføre kvartalsvise tabletop exercises med ulike scenarioer, involvere både teknisk og ledelse",
              "en": "Conduct quarterly tabletop exercises with different scenarios and involve both technical teams and management"
            }
          },
          {
            "id": "test-003",
            "risikoelement": {
              "no": "Funn fra tester ikke fulgt opp",
              "en": "Findings from tester not fulgt opp"
            },
            "saarbarhet": {
              "no": "Svakheter identifiseres i tester, men ikke lukkes før neste test",
              "en": "Weaknesses are identified in exercises but are not closed before the next test"
            },
            "eksisterendeBeskyttelse": {
              "no": "Tester gjennomføres sporadisk",
              "en": "Exercises are run sporadically"
            },
            "eksisterendeKontroll": {
              "no": "Rapportering av funn",
              "en": "Rapportering of findings"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere formell oppfølgingsprosess for testfunn, tildele ansvarlige og deadlines, verifisere lukking",
              "en": "Establish a formal follow-up process for exercise findings, assign owners and deadlines, and verify closure"
            }
          },
          {
            "id": "test-004",
            "risikoelement": {
              "no": "Tester dekker ikke realistiske scenarioer",
              "en": "Tester dekker not realistiske scenarioer"
            },
            "saarbarhet": {
              "no": "Øvelser fokuserer på enkle feil, ikke komplekse eller kaskadefeil",
              "en": "Exercises focus on simple failures rather than complex incidents or cascading failures"
            },
            "eksisterendeBeskyttelse": {
              "no": "Enkle failover-tester",
              "en": "Enkle failover-tester"
            },
            "eksisterendeKontroll": {
              "no": "Sjekkliste for standard scenarioer",
              "en": "Sjekkliste for standard scenarioer"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Utvikle scenarioer basert på faktiske trusler (ransomware, leverandørbrudd, etc.), inkludere stress-testing av team",
              "en": "Develop scenarios based on real threats such as ransomware and vendor disruption, and include stress-testing of the team"
            }
          },
          {
            "id": "test-005",
            "risikoelement": {
              "no": "Nøkkelpersonell deltar ikke i øvelser",
              "en": "Key personnel deltar not in exercises"
            },
            "saarbarhet": {
              "no": "Kritiske roller (ledelse, kommunikasjon, tekniske eksperter) ikke involvert i testing",
              "en": "Critical roles (ledelse, communications, tekniske eksperter) not involvert in testing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Teknisk team tester failover",
              "en": "technical team tester failover"
            },
            "eksisterendeKontroll": {
              "no": "Driftsteam deltar",
              "en": "Driftsteam deltar"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Sikre deltagelse fra alle roller i CMT, rotere deltagere for å bygge bredere kompetanse",
              "en": "Sikre deltagelse from all roles in CMT, rotere deltagere for to bygge bredere expertise"
            }
          }
        ]
      },
      {
        "id": "leverandor-resiliens",
        "navn": {
          "no": "Leverandør- og avhengighetsresiliens",
          "en": "Vendor Resilience"
        },
        "risikoer": [
          {
            "id": "lev-res-001",
            "risikoelement": {
              "no": "Single point of failure hos kritisk leverandør",
              "en": "Single point of failure hos critical vendor"
            },
            "saarbarhet": {
              "no": "Én leverandør for kritisk tjeneste uten redundans eller alternativ",
              "en": "Én vendor for critical service without redundancy or alternativ"
            },
            "eksisterendeBeskyttelse": {
              "no": "SLA med leverandør",
              "en": "SLA with vendor"
            },
            "eksisterendeKontroll": {
              "no": "Leverandørvurdering ved inngåelse",
              "en": "Vendor assessment during onboarding or contract award"
            },
            "K": 5,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Identifisere kritiske leverandører, etablere redundans eller exit-strategi, multi-leverandør for kritiske tjenester der mulig",
              "en": "Identify critical vendors, establish redundancy or exit strategies, and use multiple vendors for critical services where possible"
            }
          },
          {
            "id": "lev-res-002",
            "risikoelement": {
              "no": "Leverandørens BCP/DR tåler ikke et reelt avbrudd",
              "en": "The vendor's BCP/DR capability does not withstand a real disruption"
            },
            "saarbarhet": {
              "no": "Leverandørens egen beredskap ikke validert, ukjent hvordan de håndterer hendelser",
              "en": "The vendor's own preparedness has not been validated, and it is unclear how incidents are handled"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generelle kontraktsvilkår",
              "en": "General contractual terms"
            },
            "eksisterendeKontroll": {
              "no": "Ikke gjennomgått leverandørs BCP",
              "en": "The vendor's BCP has not been reviewed"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Kreve BCP/DR-dokumentasjon fra kritiske leverandører, inkludere i leverandør due diligence, årlig oppdatering",
              "en": "Kreve BCP/DR-documentation from critical vendors, include in vendor due diligence, annual updating"
            }
          },
          {
            "id": "lev-res-003",
            "risikoelement": {
              "no": "Manglende varsling ved leverandørhendelser",
              "en": "Missing alerts for vendor incidents"
            },
            "saarbarhet": {
              "no": "Leverandør informerer ikke proaktivt om hendelser som påvirker tjenesten",
              "en": "The vendor does not proactively inform the organization about incidents affecting the service"
            },
            "eksisterendeBeskyttelse": {
              "no": "Support-kanaler tilgjengelig",
              "en": "Support-kanaler tilgjengelig"
            },
            "eksisterendeKontroll": {
              "no": "Status-side for større leverandører",
              "en": "Status page for major vendors"
            },
            "K": 3,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Kontraktsfeste varslingskrav, abonnere på status-varsler, etablere eskaleringspunkt hos leverandør",
              "en": "Contractually require notifications, subscribe to status alerts, and establish a clear escalation point with the vendor"
            }
          },
          {
            "id": "lev-res-004",
            "risikoelement": {
              "no": "Kaskadeeffekt fra underleverandør",
              "en": "Kaskadeeffekt from subcontractor"
            },
            "saarbarhet": {
              "no": "Leverandørens underleverandører (4th party) påvirker vår tjeneste uten at vi er klar over avhengigheten",
              "en": "The vendor's subcontractors affect our service without us being aware of the dependency"
            },
            "eksisterendeBeskyttelse": {
              "no": "Direkte leverandør-relasjon",
              "en": "Direct vendor-relasjon"
            },
            "eksisterendeKontroll": {
              "no": "Ikke kartlagt underleverandører",
              "en": "Not mapped subcontractors"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Kreve transparens om kritiske underleverandører, inkludere i leverandør risk vurdering, 4th party disclosure",
              "en": "Kreve transparens about critical subcontractors, include in vendor risk assessment, 4th party disclosure"
            }
          },
          {
            "id": "lev-res-005",
            "risikoelement": {
              "no": "Leverandørkonkurs eller tjeneste nedlagt",
              "en": "Vendor bankruptcy or service shutdown"
            },
            "saarbarhet": {
              "no": "Leverandør går konkurs eller legger ned tjeneste uten tilstrekkelig varsel",
              "en": "The vendor goes bankrupt or shuts down the service without sufficient notice"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kontrakt med oppsigelsesfrist",
              "en": "Kontrakt with oppsigelsesfrist"
            },
            "eksisterendeKontroll": {
              "no": "Ikke overvåket leverandørs finansielle helse",
              "en": "The vendor's financial health is not monitored"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Exit-strategi for kritiske leverandører, escrow-avtaler for kritisk kildekode, overvåke leverandørs finansielle situasjon",
              "en": "Define an exit strategy for critical vendors, use escrow agreements for critical source code, and monitor the vendor's financial situation"
            }
          }
        ]
      },
      {
        "id": "incident-response",
        "navn": {
          "no": "Hendelseshåndtering og resiliens",
          "en": "Incident Response"
        },
        "risikoer": [
          {
            "id": "ir-001",
            "risikoelement": {
              "no": "Manglende hendelse respons plan",
              "en": "Missing incident response plan"
            },
            "saarbarhet": {
              "no": "Ingen strukturert tilnærming til deteksjon, respons og gjenoppretting fra sikkerhetshendelser",
              "en": "There is no structured approach to detection, response, and recovery for security incidents"
            },
            "eksisterendeBeskyttelse": {
              "no": "Teknisk team håndterer hendelser ad-hoc",
              "en": "The technical team handles incidents ad hoc"
            },
            "eksisterendeKontroll": {
              "no": "Uformell prosess",
              "en": "Informal process"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere formell hendelse respons Plan (IRP) basert på NIST/SANS, definere faser: forberedelse, deteksjon, containment, eradication, gjenoppretting, lessons learned",
              "en": "establish formell Incident Response plan (IRP) based on NIST/SANS, define faser: forberedelse, detection, containment, eradication, recovery, lessons learned"
            }
          },
          {
            "id": "ir-002",
            "risikoelement": {
              "no": "Langsom deteksjon av hendelser",
              "en": "Slow detection of incidents"
            },
            "saarbarhet": {
              "no": "Hendelser oppdages sent eller kun ved tilfeldighet, lang dwell time for angrep",
              "en": "Incidents oppdages sent or only during tilfeldighet, lang dwell time for angrep"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe loggføring og basic alerts",
              "en": "some logging and basic alerts"
            },
            "eksisterendeKontroll": {
              "no": "Manuell gjennomgang av logger ved mistanke",
              "en": "Manual review of logs during mistanke"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Implementere SIEM eller Security Analytics, definere use cases for deteksjon og etablere 24/7-overvåking eller SOC",
              "en": "Implement SIEM or security analytics, define concrete detection use cases, and establish 24/7 monitoring or a SOC"
            }
          },
          {
            "id": "ir-003",
            "risikoelement": {
              "no": "Digitale spor går tapt før de kan sikres",
              "en": "Digital evidence is lost before it can be secured"
            },
            "saarbarhet": {
              "no": "Manglende verktøy, kompetanse eller prosedyrer for digital etterforskning",
              "en": "Missing tools, expertise or procedures for digital etterforskning"
            },
            "eksisterendeBeskyttelse": {
              "no": "Teknisk team kan undersøke systemer",
              "en": "technical team can investigate systems"
            },
            "eksisterendeKontroll": {
              "no": "Ingen formell forensics-kompetanse",
              "en": "No formell forensics-expertise"
            },
            "K": 3,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Etablere forensics-beredskap (verktøy, kompetanse eller retainer med ekstern), dokumentere chain of custody prosedyrer",
              "en": "Establish digital forensics readiness, including tools, competence, or an external retainer, and document chain-of-custody procedures"
            }
          },
          {
            "id": "ir-004",
            "risikoelement": {
              "no": "Manglende post-hendelse gjennomgang",
              "en": "Missing post-incident review"
            },
            "saarbarhet": {
              "no": "Hendelser håndteres men ingen strukturert læring, samme feil gjentas",
              "en": "Incidents are handled, but there is no structured learning and the same errors recur"
            },
            "eksisterendeBeskyttelse": {
              "no": "hendelse tickets dokumenterer hendelse",
              "en": "Incident tickets document the incident"
            },
            "eksisterendeKontroll": {
              "no": "Sporadisk diskusjon i team",
              "en": "Sporadisk diskusjon in team"
            },
            "K": 2,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Etablere obligatorisk post-hendelse gjennomgang (PIR) for alle P1/P2 hendelser, blameless post-mortem kultur, trackable action items",
              "en": "Establish mandatory post-incident reviews for all P1 and P2 incidents, use a blameless post-mortem culture, and track action items to closure"
            }
          },
          {
            "id": "ir-005",
            "risikoelement": {
              "no": "Ingen runbooks for vanlige hendelser",
              "en": "No runbooks for common incidents"
            },
            "saarbarhet": {
              "no": "Team må 'finne ut' hvordan håndtere kjente hendelsestyper hver gang",
              "en": "The team must rediscover how to handle known incident types each time"
            },
            "eksisterendeBeskyttelse": {
              "no": "Erfarne team-medlemmer kjenner prosedyrer",
              "en": "Erfarne team-medlemmer know procedures"
            },
            "eksisterendeKontroll": {
              "no": "Muntlig kunnskapsoverføring",
              "en": "Verbal knowledge transfer"
            },
            "K": 3,
            "I": 2,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Utvikle runbooks for vanlige hendelser (DDoS, ransomware, databrudd), inkludere playbooks i IRP, holde oppdatert",
              "en": "Develop runbooks for common incidents such as DDoS, ransomware, and data breaches, include the playbooks in the incident response plan, and keep them updated"
            }
          },
          {
            "id": "ir-006",
            "risikoelement": {
              "no": "Manglende kapasitet ved storskala hendelse",
              "en": "Insufficient capacity during large-scale incidents"
            },
            "saarbarhet": {
              "no": "Team overveldes ved større hendelser, ikke skalert for langvarig respons",
              "en": "The team is overwhelmed during larger incidents and is not scaled for prolonged response"
            },
            "eksisterendeBeskyttelse": {
              "no": "Teknisk team kan mobiliseres",
              "en": "technical team can mobiliseres"
            },
            "eksisterendeKontroll": {
              "no": "On-call rotation",
              "en": "On-call rotation"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Etablere surge capacity plan (ekstra ressurser, eksterne konsulenter), retainer med IR-firma, cross-opplæring for bredere bemanning",
              "en": "Establish a surge capacity plan with additional resources and external consultants, maintain a retainer with an incident response firm, and cross-train staff for broader coverage"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "lokal-server",
    "navn": {
      "no": "Lokal server/on-premise",
      "en": "Local server/on-premises"
    },
    "beskrivelse": {
      "no": "Risikoer spesifikke for lokale servere",
      "en": "Risks specific to local servers"
    },
    "kategorier": [
      {
        "id": "lokal-fysisk",
        "navn": {
          "no": "Fysisk sikkerhet",
          "en": "Local Physical Security"
        },
        "risikoer": [
          {
            "id": "lokal-fys-001",
            "risikoelement": {
              "no": "Uvedkommende får fysisk tilgang til servere",
              "en": "Unauthorized parties gain physical access to servers"
            },
            "saarbarhet": {
              "no": "Utilstrekkelig fysisk sikring av serverrom",
              "en": "Insufficient physical protection of the server room"
            },
            "eksisterendeBeskyttelse": {
              "no": "Adgangskortleser, låste dører",
              "en": "Card readers and locked doors"
            },
            "eksisterendeKontroll": {
              "no": "Loggføring av adgang, overvåkningskamera",
              "en": "Access logging and CCTV"
            },
            "K": 4,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Biometrisk tilgangskontroll, alarmsystem, disk-kryptering",
              "en": "Strengthen physical access control with layered barriers, alarms, CCTV, and disk encryption on critical systems"
            }
          },
          {
            "id": "lokal-fys-002",
            "risikoelement": {
              "no": "Servere ødelagt av brann/vann/strømbrudd",
              "en": "Servers are damaged by fire, water, or power outages"
            },
            "saarbarhet": {
              "no": "Ingen redundans, sårbart for lokale hendelser",
              "en": "There is no redundancy, making the environment vulnerable to local incidents"
            },
            "eksisterendeBeskyttelse": {
              "no": "UPS, brannslukningsanlegg",
              "en": "UPS and fire suppression systems"
            },
            "eksisterendeKontroll": {
              "no": "Årlig inspeksjon av serverrom",
              "en": "Annual inspection of the server room"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Geografisk redundans, offsite backup, DR-plan",
              "en": "Establish geographic redundancy, offsite backups, and a tested disaster recovery plan"
            }
          },
          {
            "id": "lokal-fys-003",
            "risikoelement": {
              "no": "Servere/utstyr blir stjålet",
              "en": "Servers or equipment are stolen"
            },
            "saarbarhet": {
              "no": "Manglende fysisk sikring, ingen disk-kryptering",
              "en": "Missing physical protection and no disk encryption"
            },
            "eksisterendeBeskyttelse": {
              "no": "Låst serverrom",
              "en": "Locked server room"
            },
            "eksisterendeKontroll": {
              "no": "Inventarliste, adgangskontroll",
              "en": "Asset inventory and access control"
            },
            "K": 5,
            "I": 3,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Full disk-kryptering, GPS-sporing, bedre fysisk sikring",
              "en": "Full-disk encryption, asset tracking where appropriate, and stronger physical security"
            }
          },
          {
            "id": "lokal-fys-004",
            "risikoelement": {
              "no": "Uvedkommende får tilgang via dumpster diving",
              "en": "Unauthorized parties gain access through dumpster diving"
            },
            "saarbarhet": {
              "no": "Utskrifter, old hard drives kastes usikret",
              "en": "Printouts and old hard drives are discarded insecurely"
            },
            "eksisterendeBeskyttelse": {
              "no": "Låst søppel",
              "en": "Locked waste containers"
            },
            "eksisterendeKontroll": {
              "no": "Sikker destruksjonspolicy",
              "en": "Secure destruction policy"
            },
            "K": 4,
            "I": 2,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Sertifisert destruksjon, shredding, disk wiping",
              "en": "Certified destruction, shredding, and secure disk wiping"
            }
          }
        ]
      },
      {
        "id": "lokal-drift",
        "navn": {
          "no": "Lokal drift",
          "en": "Local Operations"
        },
        "risikoer": [
          {
            "id": "lokal-drift-001",
            "risikoelement": {
              "no": "Manglende kapasitet/vedlikehold av hardware",
              "en": "Insufficient capacity planning and hardware maintenance"
            },
            "saarbarhet": {
              "no": "Aldring av hardware, ingen lifecycle management",
              "en": "Aging hardware and no lifecycle management"
            },
            "eksisterendeBeskyttelse": {
              "no": "Preventivt vedlikehold",
              "en": "Preventive maintenance"
            },
            "eksisterendeKontroll": {
              "no": "Årlig hardwaregjennomgang",
              "en": "Annual hardware review"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Hardware refresh-syklus, redundante komponenter, monitorering",
              "en": "Plan hardware refresh cycles, use redundant components, and monitor capacity and hardware health continuously"
            }
          },
          {
            "id": "lokal-drift-002",
            "risikoelement": {
              "no": "Data kommer på avveie via gammel hardware",
              "en": "Data is exposed through old hardware"
            },
            "saarbarhet": {
              "no": "Manglende destruksjon av utrangert utstyr",
              "en": "Missing secure destruction of decommissioned equipment"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy for destruksjon",
              "en": "Destruction policy"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av destruksjonsprosess",
              "en": "Annual review of the destruction process"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Sertifisert destruksjon av disker, disk-kryptering, loggføring",
              "en": "Certified disk destruction, disk encryption, and logging"
            }
          },
          {
            "id": "lokal-drift-003",
            "risikoelement": {
              "no": "Manglende kapasitetsplanlegging",
              "en": "Missing capacity planning"
            },
            "saarbarhet": {
              "no": "Aldring av hardware, ingen lifecycle management",
              "en": "Aging hardware and no lifecycle management"
            },
            "eksisterendeBeskyttelse": {
              "no": "Preventivt vedlikehold",
              "en": "Preventive maintenance"
            },
            "eksisterendeKontroll": {
              "no": "Årlig hardwaregjennomgang",
              "en": "Annual hardware review"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Hardware refresh-syklus, redundante komponenter, capacity overvåking",
              "en": "A hardware refresh cycle, redundant components, and capacity monitoring"
            }
          },
          {
            "id": "lokal-drift-004",
            "risikoelement": {
              "no": "Ingen change management - uautoriserte endringer",
              "en": "No change management and unauthorized changes"
            },
            "saarbarhet": {
              "no": "Manglende change control prosess",
              "en": "Missing change control process"
            },
            "eksisterendeBeskyttelse": {
              "no": "Informal approval",
              "en": "Informal approval"
            },
            "eksisterendeKontroll": {
              "no": "Post-change gjennomgang",
              "en": "Post-change review"
            },
            "K": 2,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Formal change management, CAB, approval arbeidsflyt, rollback procedures",
              "en": "Formal change management, CAB, approval workflow, rollback procedures"
            }
          }
        ]
      },
      {
        "id": "lokal-nettverk",
        "navn": {
          "no": "Lokalt nettverk",
          "en": "Local Network"
        },
        "risikoer": [
          {
            "id": "lokal-net-001",
            "risikoelement": {
              "no": "Intern angriper på lokalt nettverk",
              "en": "An internal attacker operates on the local network"
            },
            "saarbarhet": {
              "no": "Flat nettverksarkitektur, manglende segmentering",
              "en": "The network architecture is flat and segmentation is missing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Firewall mot internett",
              "en": "Firewall mot internett"
            },
            "eksisterendeKontroll": {
              "no": "Nettverksovervåking",
              "en": "Network monitoring"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Mikrosegmentering, VLAN-separasjon, IDS/IPS",
              "en": "Mikrosegmentering, VLAN-separasjon, IDS/IPS"
            }
          },
          {
            "id": "lokal-net-002",
            "risikoelement": {
              "no": "Nettverksutstyr blir utdatert og usikkert",
              "en": "network equipment becomes outdated and usikkert"
            },
            "saarbarhet": {
              "no": "Gamle switcher/rutere uten oppdateringer",
              "en": "Gamle switcher/rutere without updates"
            },
            "eksisterendeBeskyttelse": {
              "no": "Firmware oppdateres årlig",
              "en": "Firmware oppdateres annual"
            },
            "eksisterendeKontroll": {
              "no": "Sårbarhetsskanning av nettverksutstyr",
              "en": "Vulnerability scanning of network equipment"
            },
            "K": 4,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Regelmessig firmware-oppdatering, lifecycle management",
              "en": "Regelmessig firmware-updating, lifecycle management"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "persondata",
    "navn": {
      "no": "Persondata/GDPR",
      "en": "Personal Data and GDPR"
    },
    "beskrivelse": {
      "no": "Risikoer knyttet til behandling av personopplysninger",
      "en": "Risks related to the processing of personal data"
    },
    "kategorier": [
      {
        "id": "gdpr-grunnlag",
        "navn": {
          "no": "Behandlingsgrunnlag",
          "en": "GDPR Legal Basis"
        },
        "risikoer": [
          {
            "id": "gdpr-001",
            "risikoelement": {
              "no": "Manglende eller ugyldig behandlingsgrunnlag",
              "en": "Missing or invalid legal basis for processing"
            },
            "saarbarhet": {
              "no": "Uklart rettslig grunnlag, manglende samtykke",
              "en": "Unclear legal basis and missing consent"
            },
            "eksisterendeBeskyttelse": {
              "no": "Personvernombud, DPIA",
              "en": "Data Protection Officer and DPIA"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av behandlingsgrunnlag",
              "en": "Annual review of legal basis for processing"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Dokumentere behandlingsgrunnlag, samtykkeløsning, legal gjennomgang",
              "en": "Document the legal basis for processing, implement a consent solution, and perform legal review"
            }
          },
          {
            "id": "gdpr-002",
            "risikoelement": {
              "no": "Persondata brukes til andre formål enn opprinnelig",
              "en": "Personal data is used for purposes other than the original purpose"
            },
            "saarbarhet": {
              "no": "Manglende formålsbegrensning, bred datainnsamling",
              "en": "Missing purpose limitation and overly broad data collection"
            },
            "eksisterendeBeskyttelse": {
              "no": "personvern policy",
              "en": "Privacy policy"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av databehandling",
              "en": "Quarterly review of data processing"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Formålsbegrensning i system, data minimization",
              "en": "Purpose limitation in the system and data minimization"
            }
          },
          {
            "id": "gdpr-003",
            "risikoelement": {
              "no": "Data minimization ikke oppfylt",
              "en": "Data minimization is not fulfilled"
            },
            "saarbarhet": {
              "no": "Samler inn mer data enn nødvendig",
              "en": "Collects more data than necessary"
            },
            "eksisterendeBeskyttelse": {
              "no": "personvern policy",
              "en": "Privacy policy"
            },
            "eksisterendeKontroll": {
              "no": "DPIA",
              "en": "DPIA"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Data minimization by design, regular data inventory gjennomgang",
              "en": "Data minimization by design, regular data inventory review"
            }
          }
        ]
      },
      {
        "id": "gdpr-rettigheter",
        "navn": {
          "no": "Registrertes rettigheter",
          "en": "GDPR Rights"
        },
        "risikoer": [
          {
            "id": "gdpr-rett-001",
            "risikoelement": {
              "no": "Kan ikke oppfylle rett til sletting",
              "en": "Cannot fulfill the right to erasure"
            },
            "saarbarhet": {
              "no": "Data spredt i mange systemer, manglende oversikt",
              "en": "Data is spread across many systems and there is no overview"
            },
            "eksisterendeBeskyttelse": {
              "no": "Rutine for sletting",
              "en": "Routine for deletion"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av slettingsforespørsler",
              "en": "Logging of deletion requests"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Data inventory, sentralisert slettingsfunksjon, testing",
              "en": "Data inventory, centralized deletion functionality, and testing"
            }
          },
          {
            "id": "gdpr-rett-002",
            "risikoelement": {
              "no": "Kan ikke oppfylle rett til dataportabilitet",
              "en": "Cannot fulfill the right to data portability"
            },
            "saarbarhet": {
              "no": "Data i proprietære formater, ingen eksportfunksjon",
              "en": "Data is stored in proprietary formats and there is no export function"
            },
            "eksisterendeBeskyttelse": {
              "no": "Manuell eksport mulig",
              "en": "Manual export is possible"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis test av eksport",
              "en": "Quarterly test of export"
            },
            "K": 3,
            "I": 2,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automatisk eksport i strukturert format (JSON/CSV)",
              "en": "Automatic export in a structured format (JSON/CSV)"
            }
          },
          {
            "id": "gdpr-rett-003",
            "risikoelement": {
              "no": "Kan ikke identifisere all data om en person",
              "en": "Cannot identify all data about an individual"
            },
            "saarbarhet": {
              "no": "Data spredt, manglende mapping",
              "en": "Data is spread out and mapping is missing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Data inventory",
              "en": "Data inventory"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis gjennomgang",
              "en": "Quarterly review"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Complete data inventory, data lineage sporing, tagging",
              "en": "Complete data inventory, data lineage tracking, tagging"
            }
          }
        ]
      },
      {
        "id": "gdpr-deling",
        "navn": {
          "no": "Datadeling",
          "en": "GDPR Data Sharing"
        },
        "risikoer": [
          {
            "id": "gdpr-del-001",
            "risikoelement": {
              "no": "Persondata deles uten databehandleravtale",
              "en": "Personal data is shared without a data processing agreement"
            },
            "saarbarhet": {
              "no": "Uklar oversikt over alle databehandlere, manglende avtaler",
              "en": "Unclear overview of all data processors and missing agreements"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard databehandleravtale",
              "en": "Standard data processing agreement"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av databehandlere",
              "en": "Annual review of data processors"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Register over databehandlere, avtalemal, leverandør management",
              "en": "Register of data processors, agreement templates, and vendor management"
            }
          },
          {
            "id": "gdpr-del-002",
            "risikoelement": {
              "no": "Overføring til tredjeland uten grunnlag",
              "en": "Transfers to third countries take place without a valid legal basis"
            },
            "saarbarhet": {
              "no": "Uklar oversikt over hvor data lagres, sky-tjenester i USA",
              "en": "Uklar overview over hvor data is stored, cloud-services in USA"
            },
            "eksisterendeBeskyttelse": {
              "no": "Schrems II vurdering",
              "en": "Schrems II vurdering"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang av dataflyt",
              "en": "Annual review of dataflyt"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Data residency-krav, EU-region for sky, SCC",
              "en": "Define data residency requirements, use EU regions for cloud services where necessary, and put SCCs in place where transfers require them"
            }
          },
          {
            "id": "gdpr-del-003",
            "risikoelement": {
              "no": "Sub-processorer ikke dokumentert",
              "en": "Sub-processorer not documented"
            },
            "saarbarhet": {
              "no": "Ukjente underbehandlere, chain of processing",
              "en": "Ukjente underbehandlere, chain of processing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Hovedavtaler med leverandører",
              "en": "Hovedavtaler with vendors"
            },
            "eksisterendeKontroll": {
              "no": "Årlig leverandør gjennomgang",
              "en": "Annual vendor review"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Sub-processor register, notification requirements, audit rights",
              "en": "Sub-processor register, notification requirements, audit rights"
            }
          }
        ]
      },
      {
        "id": "gdpr-sikkerhet",
        "navn": {
          "no": "GDPR sikkerhetstiltak",
          "en": "GDPR Security"
        },
        "risikoer": [
          {
            "id": "gdpr-sik-001",
            "risikoelement": {
              "no": "Manglende kryptering av persondata",
              "en": "Missing encryption of personal data"
            },
            "saarbarhet": {
              "no": "Data i klartekst at rest og in transit",
              "en": "Data in plaintext at rest and in transit"
            },
            "eksisterendeBeskyttelse": {
              "no": "HTTPS for web",
              "en": "HTTPS for web"
            },
            "eksisterendeKontroll": {
              "no": "årlig gjennomgang",
              "en": "Annual review"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Encryption at rest, TLS 1.3, field-level encryption for sensitive data",
              "en": "Encryption at rest, TLS 1.3, field-level encryption for sensitive data"
            }
          },
          {
            "id": "gdpr-sik-002",
            "risikoelement": {
              "no": "Ingen pseudonymisering eller anonymisering",
              "en": "No pseudonymisering or anonymisering"
            },
            "saarbarhet": {
              "no": "Persondata alltid i identifiserbar form",
              "en": "Personal data alltid in identifiserbar form"
            },
            "eksisterendeBeskyttelse": {
              "no": "tilgang controls",
              "en": "Access controls"
            },
            "eksisterendeKontroll": {
              "no": "DPIA",
              "en": "DPIA"
            },
            "K": 5,
            "I": 2,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Pseudonymization for analytics, anonymization techniques, k-anonymity",
              "en": "Pseudonymization for analytics, anonymization techniques, k-anonymity"
            }
          },
          {
            "id": "gdpr-sik-003",
            "risikoelement": {
              "no": "Manglende data breach notification prosedyre",
              "en": "Missing data breach notification procedure"
            },
            "saarbarhet": {
              "no": "Ikke i stand til å varsle innen 72 timer",
              "en": "Not in stand to varsle innen 72 timer"
            },
            "eksisterendeBeskyttelse": {
              "no": "hendelse respons plan",
              "en": "Incident response plan"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang",
              "en": "Annual review"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Breach notification playbook, pre-drafted templates, DPO involvement",
              "en": "Breach notification playbook, pre-drafted templates, DPO involvement"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "personell",
    "navn": {
      "no": "Personell og menneskelige faktorer",
      "en": "Personnel and Human Factors"
    },
    "beskrivelse": {
      "no": "HR-sikkerhet, insider threat, sikkerhetsbevissthet, BYOD, fjernarbeid og menneskelig faktor",
      "en": "HR security, insider threat, security awareness, BYOD, remote work, and human factors"
    },
    "kategorier": [
      {
        "id": "hr-livssyklus",
        "navn": {
          "no": "HR-livssyklus sikkerhet",
          "en": "HR Lifecycle"
        },
        "risikoer": [
          {
            "id": "hr-001",
            "risikoelement": {
              "no": "Manglende background checks ved ansettelse",
              "en": "Missing background checks during hiring"
            },
            "saarbarhet": {
              "no": "Kritiske roller ansatt uten screening",
              "en": "Critical roles are filled without screening"
            },
            "eksisterendeBeskyttelse": {
              "no": "Referansesjekk",
              "en": "Reference checks"
            },
            "eksisterendeKontroll": {
              "no": "HR standard prosess",
              "en": "Standard HR process"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Background screening policy, politiattest for sensitive roller, education verification, employment history check",
              "en": "Establish a background screening policy, require criminal record checks where lawful and relevant, verify education, and verify employment history"
            }
          },
          {
            "id": "hr-002",
            "risikoelement": {
              "no": "Nye ansatte får tilgang før de forstår sikkerhetskravene",
              "en": "New employees receive access before they understand the security requirements"
            },
            "saarbarhet": {
              "no": "Nyansatte får tilganger før sikkerhetsopplæring",
              "en": "New hires receive access before security training"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell onboarding",
              "en": "General onboarding"
            },
            "eksisterendeKontroll": {
              "no": "Welcome email med policyer",
              "en": "Welcome email with policies"
            },
            "K": 3,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Obligatorisk sikkerhetsintroduksjon før systemtilgang, signering av taushetserklæring, policybekreftelse og sikkerhetsquiz",
              "en": "Require security induction before system access, signed confidentiality commitments, policy acknowledgement, and a basic security quiz"
            }
          },
          {
            "id": "hr-003",
            "risikoelement": {
              "no": "Tilganger ikke fjernet ved offboarding",
              "en": "Access rights are not removed during offboarding"
            },
            "saarbarhet": {
              "no": "Tidligere ansatte beholder tilgang til systemer",
              "en": "Former employees retain access to systems"
            },
            "eksisterendeBeskrettelse": "HR melder fra til IT",
            "eksisterendeKontroll": {
              "no": "månedlig tilgang gjennomgang",
              "en": "Monthly access review"
            },
            "K": 5,
            "I": 5,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automated offboarding arbeidsflyt, HR-system integration, exit sjekkliste, immediate tilgang revocation, asset return",
              "en": "Automated offboarding workflow, HR system integration, exit checklist, immediate access revocation, asset return"
            },
            "eksisterendeBeskyttelse": {
              "no": "HR melder fra til IT ved avslutning av arbeidsforhold",
              "en": "HR notifies IT when employment ends"
            }
          },
          {
            "id": "hr-004",
            "risikoelement": {
              "no": "Ingen exit interviews eller offboarding-samtaler",
              "en": "No exit interviews or offboarding meetings"
            },
            "saarbarhet": {
              "no": "Misfornøyde/truende ansatte ikke identifisert ved avgang",
              "en": "Disgruntled or high-risk employees are not identified during departure"
            },
            "eksisterendeBeskyttelse": {
              "no": "HR exit procedure",
              "en": "HR exit procedure"
            },
            "eksisterendeKontroll": {
              "no": "Avsluttende samtale",
              "en": "Exit meeting"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Structured exit interview, threat vurdering, graduated offboarding for high-risk terminations, overvåking post-termination",
              "en": "Structured exit interview, threat assessment, graduated offboarding for high-risk terminations, monitoring post-termination"
            }
          },
          {
            "id": "hr-005",
            "risikoelement": {
              "no": "Rolleendringer ikke reflektert i tilganger",
              "en": "Role changes are not reflected in access rights"
            },
            "saarbarhet": {
              "no": "Ansatte akkumulerer tilganger ved jobbytte internt",
              "en": "Employees accumulate access when changing roles internally"
            },
            "eksisterendeBeskyttelse": {
              "no": "Manager requests",
              "en": "Manager requests"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvise tilgangsgjennomganger",
              "en": "Quarterly access reviews"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "HR trigger for tilgang gjennomgang ved rolleendring, birthright tilgang per rolle, automated deprovisioning of old role",
              "en": "Trigger an access review when roles change, define birthright access per role, and automatically remove access from the old role"
            }
          },
          {
            "id": "hr-006",
            "risikoelement": {
              "no": "Konsulenter og innleide styres ikke som ansatte",
              "en": "Contractors and consultants are not governed with the same security controls as employees"
            },
            "saarbarhet": {
              "no": "Eksterne konsulenter har for høy tilgang, manglende screening",
              "en": "External consultants have excessive access and are not screened sufficiently"
            },
            "eksisterendeBeskyttelse": {
              "no": "leverandør kontrakter",
              "en": "Vendor contracts"
            },
            "eksisterendeKontroll": {
              "no": "Manager oversight",
              "en": "Manager oversight"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Policy for håndtering av konsulenter, samme screening som for ansatte, tidsbegrenset tilgang, separat identitetslivssyklus og krav om taushetserklæring",
              "en": "Contractor management policy, same screening as employees, time-limited access, separate identity lifecycle, NDA requirements"
            }
          }
        ]
      },
      {
        "id": "insider-threat",
        "navn": {
          "no": "Insider threat",
          "en": "Insider Threat"
        },
        "risikoer": [
          {
            "id": "insider-001",
            "risikoelement": {
              "no": "Ondsinnet innsider (malicious insider)",
              "en": "Malicious insider"
            },
            "saarbarhet": {
              "no": "Ansatt med legitim tilgang misbruker den bevisst",
              "en": "An employee with legitimate access intentionally abuses it"
            },
            "eksisterendeBeskyttelse": {
              "no": "tilgang controls, loggføring",
              "en": "Access controls, logging"
            },
            "eksisterendeKontroll": {
              "no": "Periodiske tilgangsgjennomganger",
              "en": "Periodic access reviews"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "User behavior analytics (UBA), anomaly detection, privileged tilgang overvåking, psychological safety/reporting culture",
              "en": "User behavior analytics (UBA), anomaly detection, privileged access monitoring, psychological safety/reporting culture"
            }
          },
          {
            "id": "insider-002",
            "risikoelement": {
              "no": "Data exfiltration av ansatt som skal slutte",
              "en": "Data exfiltration by an employee who is leaving"
            },
            "saarbarhet": {
              "no": "Ansatt kopierer data før avgang",
              "en": "An employee copies data before departure"
            },
            "eksisterendeBeskyttelse": {
              "no": "DLP policyer",
              "en": "DLP policies"
            },
            "eksisterendeKontroll": {
              "no": "Exit tilgang revocation",
              "en": "Exit access revocation"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Pre-termination overvåking, DLP alerts, USB blocking, sky upload overvåking, graduated tilgang removal",
              "en": "Pre-termination monitoring, DLP alerts, USB blocking, cloud upload monitoring, graduated access removal"
            }
          },
          {
            "id": "insider-003",
            "risikoelement": {
              "no": "Interessekonflikter ikke håndtert",
              "en": "Conflicts of interest are not handled"
            },
            "saarbarhet": {
              "no": "Ansatt jobber for konkurrent eller har andre conflicts of interest",
              "en": "An employee works for a competitor or has other conflicts of interest"
            },
            "eksisterendeBeskyttelse": {
              "no": "Arbeidskontrakts eksklusivitet",
              "en": "Arbeidskontrakts eksklusivitet"
            },
            "eksisterendeKontroll": {
              "no": "None",
              "en": "None"
            },
            "K": 4,
            "I": 5,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Conflict of interest disclosure, periodic attestation, overvåking av sensitive roller, ethics opplæring",
              "en": "Conflict of interest disclosure, periodic attestation, monitoring of sensitive roles, ethics training"
            }
          },
          {
            "id": "insider-004",
            "risikoelement": {
              "no": "Privileged users ikke ekstra overvåket",
              "en": "Privileged users are not subject to enhanced monitoring"
            },
            "saarbarhet": {
              "no": "Admins kan gjøre hva som helst uten deteksjon",
              "en": "Admins can do almost anything without detection"
            },
            "eksisterendeBeskyttelse": {
              "no": "Admin activity loggføring",
              "en": "Admin activity logging"
            },
            "eksisterendeKontroll": {
              "no": "Logggjennomganger",
              "en": "Log reviews"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Privileged tilgang Management (PAM), session recording, dual control for sensitive ops, continuous overvåking",
              "en": "Privileged Access Management (PAM), session recording, dual control for sensitive ops, continuous monitoring"
            }
          },
          {
            "id": "insider-005",
            "risikoelement": {
              "no": "Ukultur eller mistrivsel øker risikoen for innsiderhandlinger",
              "en": "Poor culture or dissatisfaction increases the risk of insider actions"
            },
            "saarbarhet": {
              "no": "Dårlig arbeidsmiljø øker motivasjon for sabotasje",
              "en": "A poor working environment increases motivation for sabotage"
            },
            "eksisterendeBeskyttelse": {
              "no": "HR policyer",
              "en": "HR policies"
            },
            "eksisterendeKontroll": {
              "no": "Medarbeiderundersøkelse",
              "en": "Employee survey"
            },
            "K": 3,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Positiv sikkerhetskultur, varslingsmekanismer, HR-risikoindikatorer, psykologisk trygghet og analyse av exitsamtaler",
              "en": "Positive security culture, whistleblower mechanisms, HR risk indicators, psychological safety, exit interview analysis"
            }
          }
        ]
      },
      {
        "id": "awareness-trening",
        "navn": {
          "no": "sikkerhetsbevissthet og trening",
          "en": "Awareness Training"
        },
        "risikoer": [
          {
            "id": "aware-001",
            "risikoelement": {
              "no": "Ansatte mangler grunnleggende sikkerhetsbevissthet",
              "en": "Employees lack fundamental security awareness"
            },
            "saarbarhet": {
              "no": "Ansatte kjenner ikke grunnleggende sikkerhetsprinsipper",
              "en": "Employees know not grunnleggende sikkerhetsprinsipper"
            },
            "eksisterendeBeskyttelse": {
              "no": "Årlig e-learning",
              "en": "Annual e-learning"
            },
            "eksisterendeKontroll": {
              "no": "Completion sporing",
              "en": "Completion tracking"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Kontinuerlig bevisstgjøringsprogram, mikrolæring, gamification, rollebasert opplæring og security champions",
              "en": "Continuous awareness program, micro-learning, gamification, role-based training, security champions"
            }
          },
          {
            "id": "aware-002",
            "risikoelement": {
              "no": "Ansatte faller for phishing-angrep",
              "en": "Employees faller for phishing-angrep"
            },
            "saarbarhet": {
              "no": "Klikker på phishing-linker, oppgir credentials",
              "en": "Klikker on phishing-linker, oppgir credentials"
            },
            "eksisterendeBeskyttelse": {
              "no": "Email filtering",
              "en": "Email filtering"
            },
            "eksisterendeKontroll": {
              "no": "Phishing simulations årlig",
              "en": "Phishing simulations annual"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Frequent phishing simulations, immediate feedback, targeted opplæring for clickers, reporting mechanisms, MFA",
              "en": "Frequent phishing simulations, immediate feedback, targeted training for clickers, reporting mechanisms, MFA"
            }
          },
          {
            "id": "aware-003",
            "risikoelement": {
              "no": "Social engineering og pretexting",
              "en": "Social engineering and pretexting"
            },
            "saarbarhet": {
              "no": "Ansatte manipuleres til å utlevere informasjon eller utføre handlinger",
              "en": "Employees are manipulated into disclosing information or performing actions"
            },
            "eksisterendeBeskyttelse": {
              "no": "General awareness",
              "en": "General awareness"
            },
            "eksisterendeKontroll": {
              "no": "None",
              "en": "None"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Social engineering awareness, verification procedures, challenge culture, callback verification for sensitive requests",
              "en": "Social engineering awareness, verification procedures, challenge culture, callback verification for sensitive requests"
            }
          },
          {
            "id": "aware-004",
            "risikoelement": {
              "no": "Passordpraksis gjør kontoer lette å kompromittere",
              "en": "Password practices make accounts easy to compromise"
            },
            "saarbarhet": {
              "no": "Ansatte bruker svake eller gjenbrukte passord",
              "en": "Employees use weak or reused passwords"
            },
            "eksisterendeBeskyttelse": {
              "no": "Password policy, complexity krav",
              "en": "Password policy, complexity requirements"
            },
            "eksisterendeKontroll": {
              "no": "Password strength meter",
              "en": "Password strength meter"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Passordmanager, passkeys/FIDO2, MFA enforcement, compromised password detection, passwordless authentication",
              "en": "Passordmanager, passkeys/FIDO2, MFA enforcement, compromised password detection, passwordless authentication"
            }
          },
          {
            "id": "aware-005",
            "risikoelement": {
              "no": "Ansatte rapporterer ikke sikkerhetshendelser",
              "en": "Employees do not report security incidents"
            },
            "saarbarhet": {
              "no": "Fear of blame culture, ikke tydelige rapporteringskanaler",
              "en": "Fear of blame culture, not tydelige rapporteringskanaler"
            },
            "eksisterendeBeskyttelse": {
              "no": "Helpdesk support",
              "en": "Helpdesk support"
            },
            "eksisterendeKontroll": {
              "no": "hendelse sporing",
              "en": "Incident tracking"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "No-blame reporting culture, easy reporting mechanisms, phish report button, recognition for reporting, transparency",
              "en": "No-blame reporting culture, easy reporting mechanisms, phish report button, recognition for reporting, transparency"
            }
          }
        ]
      },
      {
        "id": "fjernarbeid-byod",
        "navn": {
          "no": "Fjernarbeid og BYOD",
          "en": "Remote Work and BYOD"
        },
        "risikoer": [
          {
            "id": "remote-001",
            "risikoelement": {
              "no": "Usikrede hjemmekontor / remote work",
              "en": "Insecure home offices and remote work"
            },
            "saarbarhet": {
              "no": "Svak hjemme-wifi, familie bruker jobbmaskin, manglende fysisk sikkerhet",
              "en": "Weak hjemme-wifi, family members user jobbmaskin, missing Physical security"
            },
            "eksisterendeBeskyttelse": {
              "no": "VPN required",
              "en": "VPN required"
            },
            "eksisterendeKontroll": {
              "no": "Remote work policy",
              "en": "Remote work policy"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Retningslinjer for sikkerhet på hjemmekontor, VPN, zero trust, enhetsstyring og sikkerhetsvurderinger av hjemmekontor",
              "en": "Home office security guidelines, VPN, zero trust, device management, security assessments for home office"
            }
          },
          {
            "id": "remote-002",
            "risikoelement": {
              "no": "BYOD (Bring Your Own enhet) ikke styrt",
              "en": "BYOD (Bring Your Own Device) not styrt"
            },
            "saarbarhet": {
              "no": "Private enheter brukes til jobbdata uten kontroll",
              "en": "Private devices are used for work data without sufficient control"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot BYOD",
              "en": "Policy mot BYOD"
            },
            "eksisterendeKontroll": {
              "no": "None",
              "en": "None"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "MDM/MAM for BYOD, containerization, conditional tilgang, app-based tilgang (not enhet), data separation",
              "en": "MDM/MAM for BYOD, containerization, conditional access, app-based access (not device), data separation"
            }
          },
          {
            "id": "remote-003",
            "risikoelement": {
              "no": "Offentlige wifi-nettverk kompromitterer data",
              "en": "Offentlige wifi-network kompromitterer data"
            },
            "saarbarhet": {
              "no": "Ansatte jobber fra kafé, fly, hotell uten VPN",
              "en": "Employees work from cafes, airports, and hotels without VPN"
            },
            "eksisterendeBeskyttelse": {
              "no": "VPN anbefalt",
              "en": "VPN is recommended"
            },
            "eksisterendeKontroll": {
              "no": "opplæring",
              "en": "Training"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Always-on VPN, zero trust nettverk tilgang (ZTNA), HTTPS everywhere, public wifi awareness",
              "en": "Always-on VPN, zero trust network access (ZTNA), HTTPS everywhere, public wifi awareness"
            }
          },
          {
            "id": "remote-004",
            "risikoelement": {
              "no": "Arbeidsenheter deles med familie eller andre i hjemmet",
              "en": "Work devices are shared with family members"
            },
            "saarbarhet": {
              "no": "Familie bruker jobbmaskin, barn installerer spill, etc.",
              "en": "Family members use work devices and children install games or other software"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot deling",
              "en": "Policy against account sharing"
            },
            "eksisterendeKontroll": {
              "no": "Trust-based",
              "en": "Trust-based"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "enhet assignment policy, separate user accounts, awareness, technical controls (no admin rights), MDM enforcement",
              "en": "Device assignment policy, separate user accounts, awareness, technical controls (no admin rights), MDM enforcement"
            }
          },
          {
            "id": "remote-005",
            "risikoelement": {
              "no": "Manglende fysisk sikring ved fjernarbeid",
              "en": "Insufficient physical security during remote work"
            },
            "saarbarhet": {
              "no": "Skjerm synlig for andre, dokumenter liggende ute, enhet theft",
              "en": "Screens are visible to others, documents are left exposed, and devices can be stolen"
            },
            "eksisterendeBeskyttelse": {
              "no": "personvern screen anbefalt",
              "en": "Privacy screen anbefalt"
            },
            "eksisterendeKontroll": {
              "no": "General guidance",
              "en": "General guidance"
            },
            "K": 4,
            "I": 2,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "personvern screens, screen timeout, encryption, cable locks, clear desk for home office, camera covers",
              "en": "Privacy screens, screen timeout, encryption, cable locks, clear desk for home office, camera covers"
            }
          },
          {
            "id": "remote-006",
            "risikoelement": {
              "no": "Hybridkontor skaper sikkerhetsgap",
              "en": "Hybridkontor create sikkerhetsgap"
            },
            "saarbarhet": {
              "no": "Rotasjonsordninger gjør sikkerhetstiltak inkonsistente",
              "en": "Rotasjonsordninger makes security measures inkonsistente"
            },
            "eksisterendeBeskyttelse": {
              "no": "Same policyer for all",
              "en": "Same policies for all"
            },
            "eksisterendeKontroll": {
              "no": "Location-agnostic security",
              "en": "Location-agnostic security"
            },
            "K": 3,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Zero trust-arkitektur, enhetsbasert sikkerhet fremfor lokasjonsbasert sikkerhet, konsistente policyer og retningslinjer for fleksible arbeidsplasser",
              "en": "Zero trust architecture, device-based security (not location), consistent policies, hot-desking guidelines"
            }
          }
        ]
      },
      {
        "id": "fysisk-personell",
        "navn": {
          "no": "Fysisk sikkerhet - kontormiljø",
          "en": "Physical Personnel Security"
        },
        "risikoer": [
          {
            "id": "fysisk-001",
            "risikoelement": {
              "no": "Clean desk / clear screen ikke praktisert",
              "en": "Clean desk / clear screen not praktisert"
            },
            "saarbarhet": {
              "no": "Sensitive dokumenter/skjermer synlige for besøkende/renhold",
              "en": "Sensitive documents or screens are visible to visitors or cleaning staff"
            },
            "eksisterendeBeskyttelse": {
              "no": "Clean desk policy",
              "en": "Clean desk policy"
            },
            "eksisterendeKontroll": {
              "no": "Random spot checks",
              "en": "Random spot checks"
            },
            "K": 4,
            "I": 2,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Håndheving, tilgjengelige makuleringsmaskiner, automatisk skjermlås etter tre minutter, låste skuffer og sikkerhetspåminnelser",
              "en": "Enforcement, shredders tilgjengelig, auto screen lock (3 min), locked drawers, security reminders"
            }
          },
          {
            "id": "fysisk-002",
            "risikoelement": {
              "no": "Besøkende ikke eskorter eller overvåket",
              "en": "Visitors are not escorted or monitored adequately"
            },
            "saarbarhet": {
              "no": "Eksterne personer kan bevege seg fritt og få tilgang til sensitive områder",
              "en": "External persons can move freely and gain access to sensitive areas"
            },
            "eksisterendeBeskyttelse": {
              "no": "Visitor badges",
              "en": "Visitor badges"
            },
            "eksisterendeKontroll": {
              "no": "Reception check-in",
              "en": "Reception check-in"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Mandatory escort policy, visible visitor badges, tilgang restrictions for visitors, photo ID requirement, logbook",
              "en": "Mandatory escort policy, visible visitor badges, access restrictions for visitors, photo ID requirement, logbook"
            }
          },
          {
            "id": "fysisk-003",
            "risikoelement": {
              "no": "Tailgating / piggy-backing inn i sikrede områder",
              "en": "Tailgating or piggybacking into secured areas"
            },
            "saarbarhet": {
              "no": "Ansatte holder døren for andre uten ID-sjekk",
              "en": "Employees hold the door open for others without checking identification"
            },
            "eksisterendeBeskyttelse": {
              "no": "tilgang card system",
              "en": "Access card system"
            },
            "eksisterendeKontroll": {
              "no": "sikkerhetsbevissthet",
              "en": "Security awareness"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Bevisstgjøring mot tailgating, mantraps i områder med høyt sikkerhetsnivå, kultur for å be om badge og sikkerhetsskilting",
              "en": "Anti-tailgating awareness, mantraps for high-security areas, badge challenge culture, security signage"
            }
          },
          {
            "id": "fysisk-004",
            "risikoelement": {
              "no": "Møteromssikkerhet - sensitive diskusjoner overhøres",
              "en": "Meeting room security is insufficient and sensitive discussions can be overheard"
            },
            "saarbarhet": {
              "no": "Strategiske møter i usikrede rom, whiteboards ikke slettet",
              "en": "Strategic meetings are held in unsecured rooms, and whiteboards are not erased afterwards"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dedicated meeting rooms",
              "en": "Dedicated meeting rooms"
            },
            "eksisterendeKontroll": {
              "no": "Booking system",
              "en": "Booking system"
            },
            "K": 5,
            "I": 2,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Classified meeting room ratings, soundproofing, whiteboard protocols, confidential waste bins, room sweeps",
              "en": "Classified meeting room ratings, soundproofing, whiteboard protocols, confidential waste bins, room sweeps"
            }
          },
          {
            "id": "fysisk-005",
            "risikoelement": {
              "no": "USB drops / baiting attacks",
              "en": "USB drops / baiting attacks"
            },
            "saarbarhet": {
              "no": "Ansatte plugger inn funnet USB uten sjekk",
              "en": "Employees plugger inn funnet USB without check"
            },
            "eksisterendeBeskyttelse": {
              "no": "USB policy",
              "en": "USB policy"
            },
            "eksisterendeKontroll": {
              "no": "Endpoint protection",
              "en": "Endpoint protection"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "USB blocking (technical), awareness opplæring, safe USB check procedures, alternative sharing methods",
              "en": "USB blocking (technical), awareness training, safe USB check procedures, alternative sharing methods"
            }
          },
          {
            "id": "fysisk-006",
            "risikoelement": {
              "no": "Dumpster diving - sensitive dokumenter ikke destruert",
              "en": "Dumpster diving exposes sensitive documents that were not securely destroyed"
            },
            "saarbarhet": {
              "no": "Papir kastes i vanlig søppel uten makulering",
              "en": "Papir kastes in vanlig waste without makulering"
            },
            "eksisterendeBeskyttelse": {
              "no": "Shredders available",
              "en": "Shredders available"
            },
            "eksisterendeKontroll": {
              "no": "policy on document disposal",
              "en": "Policy on document disposal"
            },
            "K": 4,
            "I": 2,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Mandatory shredding for confidential, secure disposal bins, certified destruction service, digital-first policyer",
              "en": "Mandatory shredding for confidential, secure disposal bins, certified destruction service, digital-first policies"
            }
          }
        ]
      },
      {
        "id": "menneskelig-faktor",
        "navn": {
          "no": "Menneskelig faktor og feil",
          "en": "Human Factors"
        },
        "risikoer": [
          {
            "id": "human-001",
            "risikoelement": {
              "no": "Utilsiktet datalekkasje (human error)",
              "en": "Accidental datalekkasje (human error)"
            },
            "saarbarhet": {
              "no": "Email til feil mottaker, feil vedlegg, public sharing ved uhell",
              "en": "Email is sent to the wrong recipient, the wrong attachment is included, or content is shared publicly by mistake"
            },
            "eksisterendeBeskyttelse": {
              "no": "'Undo send' i email",
              "en": "'Undo send' in email"
            },
            "eksisterendeKontroll": {
              "no": "User awareness",
              "en": "User awareness"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "DLP warnings, external email banners, sharing confirmations, classification labels, double-check culture",
              "en": "DLP warnings, external email banners, sharing confirmations, classification labels, double-check culture"
            }
          },
          {
            "id": "human-002",
            "risikoelement": {
              "no": "Feilkonfigurasjoner av sikkerhetskontroller",
              "en": "Misconfigurations of security controls"
            },
            "saarbarhet": {
              "no": "Ansatte konfigurerer systemer feil, skaper sårbarheter",
              "en": "Employees misconfigure systems and thereby create vulnerabilities"
            },
            "eksisterendeBeskyttelse": {
              "no": "Change approval",
              "en": "Change approval"
            },
            "eksisterendeKontroll": {
              "no": "Peer gjennomgang",
              "en": "Peer review"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Infrastructure as code, konfigurasjonsvalidering, sikkerhetslinting, endringstesting, rollback-prosedyrer og konfigurasjonsgrunnlinjer",
              "en": "Infrastructure-as-code, config validation, security linting, change testing, rollback procedures, config baselines"
            }
          },
          {
            "id": "human-003",
            "risikoelement": {
              "no": "Stress og tidspress gir snarveier",
              "en": "Stress and tidspress gives snarveier"
            },
            "saarbarhet": {
              "no": "Under press hoppes sikkerhetsprosedyrer over",
              "en": "Under pressure, established security procedures are skipped"
            },
            "eksisterendeBeskyttelse": {
              "no": "prosess dokumentasjon",
              "en": "Process documentation"
            },
            "eksisterendeKontroll": {
              "no": "Management oversight",
              "en": "Management oversight"
            },
            "K": 3,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Automated controls (not manuell), realistic deadlines, psychological safety to raise concerns, technical debt sporing",
              "en": "Automated controls (not manual), realistic deadlines, psychological safety to raise concerns, technical debt tracking"
            }
          },
          {
            "id": "human-004",
            "risikoelement": {
              "no": "Manglende sikkerhetskompetanse i utviklingsteam",
              "en": "Missing sikkerhetskompetanse in utviklingsteam"
            },
            "saarbarhet": {
              "no": "Utviklere kjenner ikke secure coding practices",
              "en": "Utviklere know not secure coding practices"
            },
            "eksisterendeBeskyttelse": {
              "no": "Gjennomgang av sikkerhetsteamet",
              "en": "Security team review"
            },
            "eksisterendeKontroll": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Opplæring i sikker koding, OWASP Top 10-bevissthet, security champions, SAST-verktøy og opplæring i threat modeling",
              "en": "Secure coding training, OWASP Top 10 awareness, security champions, SAST tools, threat modeling training"
            }
          },
          {
            "id": "human-005",
            "risikoelement": {
              "no": "Alert fatigue - sikkerhetsvarsler ignoreres",
              "en": "Alert fatigue - sikkerhetsvarsler ignoreres"
            },
            "saarbarhet": {
              "no": "For mange false positives gjør at folk ignorerer varsler",
              "en": "too many false positives makes at folk ignorerer alerts"
            },
            "eksisterendeBeskyttelse": {
              "no": "SIEM alerts",
              "en": "SIEM alerts"
            },
            "eksisterendeKontroll": {
              "no": "SOC overvåking",
              "en": "SOC monitoring"
            },
            "K": 4,
            "I": 4,
            "T": 4,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Alert tuning, reducing false positives, risk-based prioritization, automation, meaningful alert context",
              "en": "Alert tuning, reducing false positives, risk-based prioritization, automation, meaningful alert context"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "saas",
    "navn": {
      "no": "SaaS-tjenester",
      "en": "SaaS Services"
    },
    "beskrivelse": {
      "no": "Risikoer for SaaS-leverandører og organisasjoner som bruker SaaS-tjenester",
      "en": "Risks for SaaS vendors and organizations that use SaaS services"
    },
    "kategorier": [
      {
        "id": "saas-multi-tenancy",
        "navn": {
          "no": "Multi-tenancy og isolasjon",
          "en": "SaaS Multi-tenancy"
        },
        "risikoer": [
          {
            "id": "tenant-001",
            "risikoelement": {
              "no": "Data leakage mellom tenants (kundeorganisasjoner)",
              "en": "Data leakage between tenants (customer organizations)"
            },
            "saarbarhet": {
              "no": "Utilstrekkelig tenant isolasjon i database eller applikasjon",
              "en": "Insufficient tenant isolation in the database or application"
            },
            "eksisterendeBeskyttelse": {
              "no": "Tenant ID i alle queries, row-level security",
              "en": "Tenant ID in all queries, row-level security"
            },
            "eksisterendeKontroll": {
              "no": "Penetrasjonstesting av tenant isolasjon",
              "en": "Penetration testing of tenant isolation"
            },
            "K": 5,
            "I": 5,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Database per tenant, schema isolation, policy-based tilgang control, automated testing av isolasjon",
              "en": "A database per tenant, schema isolation, policy-based access control, and automated testing of isolation"
            }
          },
          {
            "id": "tenant-002",
            "risikoelement": {
              "no": "Privilege escalation på tvers av tenants",
              "en": "Privilege escalation across tenants"
            },
            "saarbarhet": {
              "no": "Bruker kan få tilgang til andre organisasjoners data/funksjoner",
              "en": "A user can gain access to another organization's data or functions"
            },
            "eksisterendeBeskyttelse": {
              "no": "RBAC med tenant scoping",
              "en": "RBAC with tenant scoping"
            },
            "eksisterendeKontroll": {
              "no": "tilgang control testing",
              "en": "Access control testing"
            },
            "K": 5,
            "I": 5,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Enforced tenant context, JWT claims validation, API gateway tenant filtering",
              "en": "Enforced tenant context, JWT claims validation, API gateway tenant filtering"
            }
          },
          {
            "id": "tenant-003",
            "risikoelement": {
              "no": "Resource exhaustion av én tenant påvirker andre",
              "en": "Resource exhaustion by one tenant affects others"
            },
            "saarbarhet": {
              "no": "Noisy neighbor problem - én kunde bruker for mye ressurser",
              "en": "Noisy-neighbor problems where one customer consumes too many resources"
            },
            "eksisterendeBeskyttelse": {
              "no": "Basic resource limits",
              "en": "Basic resource limits"
            },
            "eksisterendeKontroll": {
              "no": "Resource usage overvåking",
              "en": "Resource usage monitoring"
            },
            "K": 1,
            "I": 1,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Per-tenant quotas, rate limiting, auto-scaling, circuit breakers, isolated compute pools for enterprise",
              "en": "Per-tenant quotas, rate limiting, auto-scaling, circuit breakers, isolated compute pools for enterprise"
            }
          },
          {
            "id": "tenant-004",
            "risikoelement": {
              "no": "loggføring/metrics eksponerer data fra andre tenants",
              "en": "Logging or metrics expose data from other tenants"
            },
            "saarbarhet": {
              "no": "Aggregerte logger eller metrics avslører tenant-spesifikk informasjon",
              "en": "Aggregated logs or metrics reveal tenant-specific information"
            },
            "eksisterendeBeskyttelse": {
              "no": "Tenant ID filtering i loggføring",
              "en": "Tenant ID filtering in logging"
            },
            "eksisterendeKontroll": {
              "no": "Log tilgang audit",
              "en": "Log access audit"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Tenant-scoped loggføring, anonymization i shared metrics, separate log streams per tier",
              "en": "Tenant-scoped logging, anonymization in shared metrics, separate log streams per tier"
            }
          },
          {
            "id": "tenant-005",
            "risikoelement": {
              "no": "Shared cache leakage mellom tenants",
              "en": "Shared cache leakage between tenants"
            },
            "saarbarhet": {
              "no": "Cache keys ikke tenant-aware, data bleed",
              "en": "Cache keys not tenant-aware, data bleed"
            },
            "eksisterendeBeskyttelse": {
              "no": "Tenant ID i cache keys",
              "en": "Tenant ID in cache keys"
            },
            "eksisterendeKontroll": {
              "no": "Cache configuration gjennomgang",
              "en": "Cache configuration review"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Namespaced caching, tenant-specific cache instances, cache validation testing",
              "en": "Namespaced caching, tenant-specific cache instances, cache validation testing"
            }
          }
        ]
      },
      {
        "id": "saas-provider",
        "navn": {
          "no": "SaaS-leverandør risiko",
          "en": "SaaS Provider Risk"
        },
        "risikoer": [
          {
            "id": "provider-001",
            "risikoelement": {
              "no": "Manglende compliance per kunde-jurisdiksjon",
              "en": "Missing compliance controls per customer jurisdiction"
            },
            "saarbarhet": {
              "no": "Globale kunder med ulike compliance-krav (GDPR, HIPAA, etc.)",
              "en": "Global customers with different compliance requirements such as GDPR and HIPAA"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard GDPR compliance",
              "en": "Standard GDPR compliance"
            },
            "eksisterendeKontroll": {
              "no": "årlig compliance audit",
              "en": "Annual compliance audit"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Multi-region utrulling, compliance-as-code, per-tenant compliance settings, certifications (SOC2, ISO27001)",
              "en": "Multi-region deployment, compliance-as-code, per-tenant compliance settings, certifications (SOC2, ISO27001)"
            }
          },
          {
            "id": "provider-002",
            "risikoelement": {
              "no": "Data residency krav ikke oppfylt",
              "en": "Data residency requirements not fulfilled"
            },
            "saarbarhet": {
              "no": "Customer data lagres i feil region/land",
              "en": "Customer data is stored in the wrong region or country"
            },
            "eksisterendeBeskyttelse": {
              "no": "EU-region standard",
              "en": "EU-region standard"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis data location audit",
              "en": "Quarterly data location audit"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Per-tenant region selection, geo-fencing, data residency guarantees, multi-region architecture",
              "en": "Per-tenant region selection, geo-fencing, data residency guarantees, multi-region architecture"
            }
          },
          {
            "id": "provider-003",
            "risikoelement": {
              "no": "Subscription/billing fraud eller feil",
              "en": "Subscription or billing fraud and billing errors"
            },
            "saarbarhet": {
              "no": "Utilstrekkelig validering av subscription changes, usage sporing",
              "en": "Insufficient validation of subscription changes, usage tracking"
            },
            "eksisterendeBeskyttelse": {
              "no": "Payment provider validation",
              "en": "Payment provider validation"
            },
            "eksisterendeKontroll": {
              "no": "månedlig billing reconciliation",
              "en": "Monthly billing reconciliation"
            },
            "K": 2,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Usage metering validation, billing anomaly detection, subscription change audit trail, fraud detection",
              "en": "Usage metering validation, billing anomaly detection, subscription change audit trail, fraud detection"
            }
          },
          {
            "id": "provider-004",
            "risikoelement": {
              "no": "onboarding/offboarding av kunder ikke sikker",
              "en": "Onboarding/offboarding of kunder not sikker"
            },
            "saarbarhet": {
              "no": "Data ikke slettet ved churn, eller provisjonering har sikkerhetshull",
              "en": "Data not erased during churn, or provisjonering har sikkerhetshull"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell offboarding procedures",
              "en": "Manual offboarding procedures"
            },
            "eksisterendeKontroll": {
              "no": "offboarding sjekkliste",
              "en": "Offboarding checklist"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automated provisioning/deprovisioning, data deletion verification, account lifecycle management, retention policyer",
              "en": "Automated provisioning/deprovisioning, data deletion verification, account lifecycle management, retention policies"
            }
          },
          {
            "id": "provider-005",
            "risikoelement": {
              "no": "API rate limiting ikke granulær nok per tenant",
              "en": "API rate limiting is not granular enough per tenant"
            },
            "saarbarhet": {
              "no": "En kunde kan DDoS API for alle",
              "en": "A kunde can DDoS API for all"
            },
            "eksisterendeBeskyttelse": {
              "no": "Global rate limiting",
              "en": "Global rate limiting"
            },
            "eksisterendeKontroll": {
              "no": "API usage overvåking",
              "en": "API usage monitoring"
            },
            "K": 1,
            "I": 1,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Per-tenant rate limits, tiered limits per plan, auto-throttling, API gateway enforcement",
              "en": "Per-tenant rate limits, tiered limits per plan, auto-throttling, API gateway enforcement"
            }
          },
          {
            "id": "provider-006",
            "risikoelement": {
              "no": "Manglende SLA overvåking og enforcement",
              "en": "Missing SLA monitoring and enforcement"
            },
            "saarbarhet": {
              "no": "Kan ikke bevise oppetid eller ytelse per kunde",
              "en": "Cannot bevise oppetid or ytelse per kunde"
            },
            "eksisterendeBeskyttelse": {
              "no": "Global uptime overvåking",
              "en": "Global uptime monitoring"
            },
            "eksisterendeKontroll": {
              "no": "månedlig SLA reports",
              "en": "Monthly SLA reports"
            },
            "K": 1,
            "I": 3,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Per-tenant SLA sporing, synthetic overvåking, auto-credits for SLA breaches, status page per kunde",
              "en": "Per-tenant SLA tracking, synthetic monitoring, auto-credits for SLA breaches, status page per kunde"
            }
          },
          {
            "id": "provider-007",
            "risikoelement": {
              "no": "Custom code/config per kunde skaper sikkerhetshull",
              "en": "Custom code/config per kunde create sikkerhetshull"
            },
            "saarbarhet": {
              "no": "Customizations ikke testet like grundig som core product",
              "en": "Customizations not tested like grundig that core product"
            },
            "eksisterendeBeskyttelse": {
              "no": "Code gjennomgang av customizations",
              "en": "Code review of customizations"
            },
            "eksisterendeKontroll": {
              "no": "Sikkerhetstesting",
              "en": "Security testing"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Konfigurasjon fremfor kode, sandkassede tilpasninger, sikkerhetsgjennomgang for alle tilpasninger og plugin-arkitektur",
              "en": "Configuration-over-code, sandboxed customizations, security review for all customs, plugin architecture"
            }
          }
        ]
      },
      {
        "id": "saas-consumer",
        "navn": {
          "no": "SaaS-forbruker risiko",
          "en": "SaaS Consumer Risk"
        },
        "risikoer": [
          {
            "id": "consumer-001",
            "risikoelement": {
              "no": "Shadow IT - uautoriserte SaaS-tjenester i bruk",
              "en": "Shadow IT - uautoriserte SaaS-services in bruk"
            },
            "saarbarhet": {
              "no": "Ansatte abonnerer på SaaS uten godkjenning fra IT eller sikkerhet",
              "en": "Employees abonnerer on SaaS without IT/security approval"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot uautorisert SaaS",
              "en": "Policy mot unauthorized SaaS"
            },
            "eksisterendeKontroll": {
              "no": "Nettverksovervåking og utgiftsgjennomganger",
              "en": "Network monitoring, expense reviews"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "CASB (Cloud Access Security Broker), verktøy for oppdagelse av SaaS, godkjent leverandørkatalog og håndheving av SSO",
              "en": "CASB (Cloud Access Security Broker), SaaS discovery tools, approved vendor catalog, SSO enforcement"
            }
          },
          {
            "id": "consumer-002",
            "risikoelement": {
              "no": "leverandør lock-in og data portability",
              "en": "Vendor lock-in and data portability"
            },
            "saarbarhet": {
              "no": "Data og arbeidsflyter er ikke portable til alternative leverandører",
              "en": "Data/workflows not portable to alternative vendors"
            },
            "eksisterendeBeskyttelse": {
              "no": "kontrakt gjennomgang",
              "en": "Contract review"
            },
            "eksisterendeKontroll": {
              "no": "Yearly leverandør vurdering",
              "en": "Yearly vendor assessment"
            },
            "K": 2,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Data export testing, multi-leverandør strategy, API-first architecture, standard data formats, exit clauses",
              "en": "Data export testing, multi-vendor strategy, API-first architecture, standard data formats, exit clauses"
            }
          },
          {
            "id": "consumer-003",
            "risikoelement": {
              "no": "Et sikkerhetsbrudd hos SaaS-leverandøren eksponerer våre data",
              "en": "SaaS vendor security breach eksponerer our data"
            },
            "saarbarhet": {
              "no": "Avhengig av leverandørens sikkerhetsnivå",
              "en": "Avhengig of vendor sin security posture"
            },
            "eksisterendeBeskyttelse": {
              "no": "Sikkerhetsspørreskjemaer for leverandør",
              "en": "Vendor security questionnaires"
            },
            "eksisterendeKontroll": {
              "no": "årlig leverandør audits",
              "en": "Annual vendor audits"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "leverandør risk vurdering, SOC2/ISO certifications requirement, breach notification clauses, data encryption",
              "en": "Vendor risk assessment, SOC2/ISO certifications requirement, breach notification clauses, data encryption"
            }
          },
          {
            "id": "consumer-004",
            "risikoelement": {
              "no": "Manglende SSO/centralized identity management",
              "en": "Missing SSO/centralized identity management"
            },
            "saarbarhet": {
              "no": "Separate credentials per SaaS, manglende MFA",
              "en": "Separate credentials per SaaS, missing MFA"
            },
            "eksisterendeBeskyttelse": {
              "no": "SSO for noen tjenester",
              "en": "SSO for anyone services"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis tilgang gjennomgang",
              "en": "Quarterly access review"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "SSO enforcement (SAML/OIDC), IdP integration, MFA requirement, centralized provisioning (SCIM)",
              "en": "SSO enforcement (SAML/OIDC), IdP integration, MFA requirement, centralized provisioning (SCIM)"
            }
          },
          {
            "id": "consumer-005",
            "risikoelement": {
              "no": "SaaS integrasjoner skaper nye angrepsflater",
              "en": "There is no backup of SaaS configurations"
            },
            "saarbarhet": {
              "no": "OAuth tokens, webhooks, API keys ikke sikret",
              "en": "OAuth tokens, webhooks, API keys not sikret"
            },
            "eksisterendeBeskyttelse": {
              "no": "gjennomgang av integrasjoner",
              "en": "Review of integrations"
            },
            "eksisterendeKontroll": {
              "no": "Integration inventory",
              "en": "Integration inventory"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Sikkerhetsstandarder for integrasjoner, least privilege for OAuth-scopes, validering av webhook-signaturer og rotasjon av API-nøkler",
              "en": "Integration security standards, least privilege OAuth scopes, webhook signature validation, API key rotation"
            }
          },
          {
            "id": "consumer-006",
            "risikoelement": {
              "no": "Tap av data ved SaaS-leverandør konkurs/nedleggelse",
              "en": "Tap of data during SaaS-vendor bankrupt/nedleggelse"
            },
            "saarbarhet": {
              "no": "Ingen backup av SaaS data",
              "en": "No backup of SaaS data"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noe manuell eksport",
              "en": "some manual eksport"
            },
            "eksisterendeKontroll": {
              "no": "Årlig leverandør health check",
              "en": "Annual vendor health check"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automatisert SaaS-backup (CloudAlly, Spanning), eksporttesting, escrow-avtaler og strategi med flere leverandører",
              "en": "Automated SaaS backup (CloudAlly, Spanning), export testing, escrow agreements, multi-vendor strategy"
            }
          },
          {
            "id": "consumer-007",
            "risikoelement": {
              "no": "Overprivilegerte SaaS admin-kontoer",
              "en": "Overprivilegerte SaaS admin accounts"
            },
            "saarbarhet": {
              "no": "For mange admin users, manglende privileged tilgang management",
              "en": "too many admin users, missing privileged access management"
            },
            "eksisterendeBeskyttelse": {
              "no": "RBAC i SaaS apps",
              "en": "RBAC in SaaS apps"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis admin gjennomgang",
              "en": "Quarterly admin review"
            },
            "K": 4,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Just-in-time admin tilgang, PAM for SaaS, admin activity loggføring, periodic tilgang certification",
              "en": "Just-in-time admin access, PAM for SaaS, admin activity logging, periodic access certification"
            }
          },
          {
            "id": "consumer-008",
            "risikoelement": {
              "no": "Manglende SaaS sprawl governance",
              "en": "Missing SaaS sprawl governance"
            },
            "saarbarhet": {
              "no": "Ukontrollert vekst i antall SaaS-tjenester, overlapp, waste",
              "en": "Ukontrollert vekst in antall SaaS-services, overlapp, waste"
            },
            "eksisterendeBeskyttelse": {
              "no": "Procurement approval",
              "en": "Procurement approval"
            },
            "eksisterendeKontroll": {
              "no": "manuell SaaS inventory",
              "en": "Manual SaaS inventory"
            },
            "K": 2,
            "I": 2,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "SaaS Management Platform (SMP), bruksanalyse, lisensoptimalisering og gjennomganger for sanering",
              "en": "SaaS Management Platform (SMP), usage analytics, license optimization, rationalization reviews"
            }
          }
        ]
      },
      {
        "id": "saas-integration",
        "navn": {
          "no": "SaaS-integrasjoner og API",
          "en": "SaaS Integration"
        },
        "risikoer": [
          {
            "id": "integration-001",
            "risikoelement": {
              "no": "API keys eksponert i kode eller logs",
              "en": "API keys eksponert in code or logs"
            },
            "saarbarhet": {
              "no": "Credentials hardkodet eller logget i klartekst",
              "en": "Credentials hardkodet or logget in plaintext"
            },
            "eksisterendeBeskyttelse": {
              "no": ".gitignore for secrets",
              "en": ".gitignore for secrets"
            },
            "eksisterendeKontroll": {
              "no": "Code gjennomgang",
              "en": "Code review"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Secrets management (Vault, AWS Secrets Manager), secret scanning, environment variables, key rotation",
              "en": "Secrets management (Vault, AWS Secrets Manager), secret scanning, environment variables, key rotation"
            }
          },
          {
            "id": "integration-002",
            "risikoelement": {
              "no": "Webhook endpoints ikke sikret",
              "en": "Webhook endpoints not sikret"
            },
            "saarbarhet": {
              "no": "Webhooks mottar data uten signature verification",
              "en": "Webhooks mottar data without signature verification"
            },
            "eksisterendeBeskyttelse": {
              "no": "HTTPS endpoints",
              "en": "HTTPS endpoints"
            },
            "eksisterendeKontroll": {
              "no": "Integration testing",
              "en": "Integration testing"
            },
            "K": 3,
            "I": 5,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Webhook signature validation (HMAC), IP whitelisting, replay attack protection, idempotency",
              "en": "Webhook signature validation (HMAC), IP whitelisting, replay attack protection, idempotency"
            }
          },
          {
            "id": "integration-003",
            "risikoelement": {
              "no": "Overprivilegerte OAuth scopes",
              "en": "Overprivilegerte OAuth scopes"
            },
            "saarbarhet": {
              "no": "Integrasjoner ber om mer tilgang enn nødvendig",
              "en": "Integrations ber about mer access than necessary"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell OAuth approval",
              "en": "Manual OAuth approval"
            },
            "eksisterendeKontroll": {
              "no": "Scope gjennomgang ved setup",
              "en": "Scope review during setup"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Least privilege scopes, periodic scope audit, OAuth consent management, scope justification requirement",
              "en": "Least privilege scopes, periodic scope audit, OAuth consent management, scope justification requirement"
            }
          },
          {
            "id": "integration-004",
            "risikoelement": {
              "no": "SaaS-to-SaaS data sync skaper compliance issues",
              "en": "SaaS-to-SaaS data sync create compliance issues"
            },
            "saarbarhet": {
              "no": "Sensitive data synkroniseres til tjenester uten adekvat sikkerhet",
              "en": "Sensitive data synkroniseres to services without adekvat security"
            },
            "eksisterendeBeskyttelse": {
              "no": "Approved integration list",
              "en": "Approved integration list"
            },
            "eksisterendeKontroll": {
              "no": "Data flow mapping",
              "en": "Data flow mapping"
            },
            "K": 5,
            "I": 4,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "DLP policyer, data classification, sync overvåking, field-level sync control, data residency validation",
              "en": "DLP policies, data classification, sync monitoring, field-level sync control, data residency validation"
            }
          },
          {
            "id": "integration-005",
            "risikoelement": {
              "no": "Legacy/deprecated API versions i bruk",
              "en": "Legacy/deprecated API versions in bruk"
            },
            "saarbarhet": {
              "no": "Gamle API-versjoner med kjente sårbarheter",
              "en": "Gamle API-versjoner with known vulnerabilities"
            },
            "eksisterendeBeskyttelse": {
              "no": "Noen API versjonering",
              "en": "Anyone API versjonering"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av avhengigheter",
              "en": "Quarterly dependency review"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "API version inventory, deprecation notices overvåking, automated migration testing, API gateway version enforcement",
              "en": "API version inventory, deprecation notices monitoring, automated migration testing, API gateway version enforcement"
            }
          }
        ]
      },
      {
        "id": "saas-data-governance",
        "navn": {
          "no": "Data governance i SaaS",
          "en": "SaaS Data Governance"
        },
        "risikoer": [
          {
            "id": "data-gov-001",
            "risikoelement": {
              "no": "Data i SaaS-applikasjoner er ikke tilstrekkelig kartlagt",
              "en": "Data in SaaS applications is not mapped sufficiently"
            },
            "saarbarhet": {
              "no": "Vet ikke hvilke data som er lagret hvor",
              "en": "Vet not hvilke data that is lagret hvor"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell data inventory",
              "en": "Manual data inventory"
            },
            "eksisterendeKontroll": {
              "no": "Årlig gjennomgang",
              "en": "Annual review"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "CASB data discovery, data classification in SaaS, DLP policyer, automated data mapping",
              "en": "CASB data discovery, data classification in SaaS, DLP policies, automated data mapping"
            }
          },
          {
            "id": "data-gov-002",
            "risikoelement": {
              "no": "Feil data retention i SaaS-tjenester",
              "en": "Errors data retention in SaaS-services"
            },
            "saarbarhet": {
              "no": "Data beholdes lengre eller kortere enn policy",
              "en": "Data beholdes lengre or kortere than policy"
            },
            "eksisterendeBeskyttelse": {
              "no": "leverandør standard retention",
              "en": "Vendor standard retention"
            },
            "eksisterendeKontroll": {
              "no": "kontrakt gjennomgang",
              "en": "Contract review"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Custom retention policyer, automated deletion, retention compliance overvåking, legal hold procedures",
              "en": "Custom retention policies, automated deletion, retention compliance monitoring, legal hold procedures"
            }
          },
          {
            "id": "data-gov-003",
            "risikoelement": {
              "no": "Sensitive data delt eksternt via SaaS-sharing features",
              "en": "Sensitive data delt eksternt via SaaS-sharing features"
            },
            "saarbarhet": {
              "no": "Brukere deler konfidensielle docs via link-sharing",
              "en": "Users deler konfidensielle docs via link-sharing"
            },
            "eksisterendeBeskyttelse": {
              "no": "Brukeropplæring",
              "en": "User training"
            },
            "eksisterendeKontroll": {
              "no": "manuell audits",
              "en": "Manual audits"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "DLP for SaaS, external sharing policyer, link expiry enforcement, sharing audit logs, CASB controls",
              "en": "DLP for SaaS, external sharing policies, link expiry enforcement, sharing audit logs, CASB controls"
            }
          },
          {
            "id": "data-gov-004",
            "risikoelement": {
              "no": "GDPR/CCPA subject tilgang requests ikke håndterbar",
              "en": "GDPR or CCPA subject access requests are not handled effectively"
            },
            "saarbarhet": {
              "no": "Kan ikke finne eller eksportere persondata på tvers av SaaS",
              "en": "Cannot finne or eksportere personal data on across of SaaS"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell search i SaaS apps",
              "en": "Manual search in SaaS apps"
            },
            "eksisterendeKontroll": {
              "no": "årlig DPIA",
              "en": "Annual DPIA"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Sentralisert identitetskobling, automatiserte SAR-arbeidsflyter, verktøy for håndtering av registrerte og SaaS API-integrasjoner",
              "en": "Centralized identity mapping, automated SAR workflows, data subject management tool, SaaS API integrations"
            }
          },
          {
            "id": "data-gov-005",
            "risikoelement": {
              "no": "Lack of encryption for data-at-rest i SaaS",
              "en": "Lack of encryption for data-at-rest in SaaS"
            },
            "saarbarhet": {
              "no": "leverandør krypterer ikke customer data at-rest",
              "en": "Vendor krypterer not customer data at-rest"
            },
            "eksisterendeBeskyttelse": {
              "no": "kontrakt encryption requirements",
              "en": "Contract encryption requirements"
            },
            "eksisterendeKontroll": {
              "no": "leverandør questionnaires",
              "en": "Vendor questionnaires"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Encryption requirement in kontrakter, customer-managed keys (BYOK), field-level encryption, leverandør validation",
              "en": "Encryption requirement in contracts, customer-managed keys (BYOK), field-level encryption, vendor validation"
            }
          }
        ]
      },
      {
        "id": "saas-availability",
        "navn": {
          "no": "Tilgjengelighet og kontinuitet",
          "en": "SaaS Availability and Continuity"
        },
        "risikoer": [
          {
            "id": "avail-001",
            "risikoelement": {
              "no": "SaaS outage blokkerer kritiske forretningsprosesser",
              "en": "SaaS outage blokkerer critical forretningsprosesser"
            },
            "saarbarhet": {
              "no": "Avhengighet av single SaaS provider uten fallback",
              "en": "dependency of single SaaS provider without fallback"
            },
            "eksisterendeBeskyttelse": {
              "no": "SLA med leverandør",
              "en": "SLA with vendor"
            },
            "eksisterendeKontroll": {
              "no": "Uptime overvåking",
              "en": "Uptime monitoring"
            },
            "K": 1,
            "I": 2,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Multi-leverandør redundancy for kritiske tjenester, offline mode, business continuity plan, status page overvåking",
              "en": "Multi-vendor redundancy for critical services, offline mode, business continuity plan, status page monitoring"
            }
          },
          {
            "id": "avail-002",
            "risikoelement": {
              "no": "Performance degradering ikke oppdaget",
              "en": "Performance degradering not oppdaget"
            },
            "saarbarhet": {
              "no": "Manglende overvåking av SaaS respons times",
              "en": "Missing monitoring of SaaS response times"
            },
            "eksisterendeBeskyttelse": {
              "no": "User complaints",
              "en": "User complaints"
            },
            "eksisterendeKontroll": {
              "no": "manuell testing",
              "en": "Manual testing"
            },
            "K": 1,
            "I": 1,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Synthetic overvåking, APM for SaaS integrations, SLA overvåking, alerting på latency spikes",
              "en": "Synthetic monitoring, APM for SaaS integrations, SLA monitoring, alerting on latency spikes"
            }
          },
          {
            "id": "avail-003",
            "risikoelement": {
              "no": "Ingen backup av SaaS-konfigurasjoner",
              "en": "There is no backup of SaaS configurations"
            },
            "saarbarhet": {
              "no": "Tap av tilpassede arbeidsflyter og rettigheter ved kontoproblemer",
              "en": "Tap of custom workflows, permissions during account issues"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell dokumentasjon",
              "en": "Manual documentation"
            },
            "eksisterendeKontroll": {
              "no": "None",
              "en": "None"
            },
            "K": 2,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Infrastructure-as-code for SaaS config, config backup tools, version control for configs, disaster gjenoppretting testing",
              "en": "Infrastructure-as-code for SaaS config, config backup tools, version control for configs, disaster recovery testing"
            }
          },
          {
            "id": "avail-004",
            "risikoelement": {
              "no": "Kritisk SaaS-tjeneste discontinued av leverandør",
              "en": "Critical SaaS-service discontinued of vendor"
            },
            "saarbarhet": {
              "no": "leverandør legger ned produkt eller blir kjøpt opp",
              "en": "The vendor shuts down the product or is acquired"
            },
            "eksisterendeBeskyttelse": {
              "no": "Diverse leverandør portfolio",
              "en": "Diverse vendor portfolio"
            },
            "eksisterendeKontroll": {
              "no": "leverandør health overvåking",
              "en": "Vendor health monitoring"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Alternative leverandør evaluation, migration playbooks, data portability testing, early warning systems",
              "en": "Alternative vendor evaluation, migration playbooks, data portability testing, early warning systems"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "skytjeneste",
    "navn": {
      "no": "Skytjeneste (AWS/Azure/GCP)",
      "en": "Cloud Service (AWS/Azure/GCP)"
    },
    "beskrivelse": {
      "no": "Spesifikke risikoer for skytjenester",
      "en": "Specific risks for cloud services"
    },
    "kategorier": [
      {
        "id": "sky-tilgang",
        "navn": {
          "no": "Sky-tilgangsstyring",
          "en": "Cloud Access Management"
        },
        "risikoer": [
          {
            "id": "sky-001",
            "risikoelement": {
              "no": "Feilkonfigurerte IAM-roller gir for omfattende tilgang",
              "en": "Misconfigured IAM roles grant excessive access"
            },
            "saarbarhet": {
              "no": "Kompleks IAM-policy struktur, manglende oversikt",
              "en": "A complex IAM policy structure and limited overview"
            },
            "eksisterendeBeskyttelse": {
              "no": "IAM-policyer etter beste praksis",
              "en": "IAM policies based on best practice"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av IAM-roller",
              "en": "Quarterly review of IAM roles"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "policy-as-code, automated compliance scanning, minste privilegium",
              "en": "Policy-as-code, automated compliance scanning, least privilege"
            }
          },
          {
            "id": "sky-002",
            "risikoelement": {
              "no": "Rot-kontoer/admin-tilgang kompromittert",
              "en": "Root or admin access is compromised"
            },
            "saarbarhet": {
              "no": "Manglende MFA på rot-konto, delte admin-tilganger",
              "en": "Missing MFA on the root account and shared admin access"
            },
            "eksisterendeBeskyttelse": {
              "no": "MFA aktivert",
              "en": "MFA enabled"
            },
            "eksisterendeKontroll": {
              "no": "loggføring av rot-konto aktivitet",
              "en": "Logging of root account activity"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Hardware MFA for rot-konto, begrenset bruk, break-glass prosedyrer",
              "en": "Hardware MFA for the root account, restricted use, and break-glass procedures"
            }
          },
          {
            "id": "sky-003",
            "risikoelement": {
              "no": "Utilsiktet offentlig eksponering av ressurser (S3, storage)",
              "en": "Accidental public exposure of resources such as S3 buckets or storage accounts"
            },
            "saarbarhet": {
              "no": "Default public settings, manglende block public tilgang",
              "en": "Default public settings, missing block public access"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot public buckets",
              "en": "Policy against public buckets"
            },
            "eksisterendeKontroll": {
              "no": "Automatisk skanning for public resources",
              "en": "Automatic scanning for public resources"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Block public tilgang som standard, automated remediation",
              "en": "Block public access by default, automated remediation"
            }
          },
          {
            "id": "sky-004",
            "risikoelement": {
              "no": "Credential stuffing på sky admin accounts",
              "en": "Credential stuffing on cloud admin accounts"
            },
            "saarbarhet": {
              "no": "Gjenbrukte passord, svak MFA",
              "en": "Reused passwords, weak MFA"
            },
            "eksisterendeBeskyttelse": {
              "no": "Password policy",
              "en": "Password policy"
            },
            "eksisterendeKontroll": {
              "no": "Failed login overvåking",
              "en": "Failed login monitoring"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Hardware MFA, conditional tilgang, passwordless authentication",
              "en": "Hardware MFA, conditional access, passwordless authentication"
            }
          }
        ]
      },
      {
        "id": "sky-nettverk",
        "navn": {
          "no": "Sky-nettverk",
          "en": "Cloud Networking"
        },
        "risikoer": [
          {
            "id": "sky-net-001",
            "risikoelement": {
              "no": "Feilkonfigurerte security groups eller brannmurer",
              "en": "Misconfigured security groups/firewalls"
            },
            "saarbarhet": {
              "no": "For åpne regler (0.0.0.0/0), manglende segmentering",
              "en": "Overly open rules (0.0.0.0/0) and missing segmentation"
            },
            "eksisterendeBeskyttelse": {
              "no": "Security groups per tjeneste",
              "en": "Security groups per service"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig gjennomgang av security groups",
              "en": "Monthly review of security groups"
            },
            "K": 4,
            "I": 3,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Automatisk deteksjon av for åpne regler, mikrosegmentering",
              "en": "Automatic detection of overly open rules and micro-segmentation"
            }
          },
          {
            "id": "sky-net-002",
            "risikoelement": {
              "no": "Manglende kryptering av data i transit mellom tjenester",
              "en": "Missing encryption of data in transit between services"
            },
            "saarbarhet": {
              "no": "Ukryptert intern kommunikasjon, manglende TLS",
              "en": "Unencrypted internal communication and missing TLS"
            },
            "eksisterendeBeskyttelse": {
              "no": "HTTPS for eksterne endepunkter",
              "en": "HTTPS for external endpoints"
            },
            "eksisterendeKontroll": {
              "no": "Årlig sikkerhetsaudit",
              "en": "Annual security audit"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "MTLS for all intern kommunikasjon, service mesh",
              "en": "mTLS for all internal communication and a service mesh"
            }
          },
          {
            "id": "sky-net-003",
            "risikoelement": {
              "no": "Ukryptert inter-service kommunikasjon",
              "en": "Unencrypted inter-service communication"
            },
            "saarbarhet": {
              "no": "Manglende mTLS mellom mikrotjenester",
              "en": "Missing mTLS between microservices"
            },
            "eksisterendeBeskyttelse": {
              "no": "Private VPC",
              "en": "Private VPC"
            },
            "eksisterendeKontroll": {
              "no": "Nettverksovervåking",
              "en": "Network monitoring"
            },
            "K": 4,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Service mesh (Istio), mTLS enforcement, zero trust",
              "en": "Service mesh (Istio), mTLS enforcement, zero trust"
            }
          }
        ]
      },
      {
        "id": "sky-data",
        "navn": {
          "no": "Sky-datalagring",
          "en": "Cloud Data Security"
        },
        "risikoer": [
          {
            "id": "sky-data-001",
            "risikoelement": {
              "no": "Ukrypterte databaser/lagringstjenester",
              "en": "Ukrypterte databaser/lagringstjenester"
            },
            "saarbarhet": {
              "no": "Kryptering ikke aktivert som standard",
              "en": "encryption not aktivert by default"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kryptering på kritiske databaser",
              "en": "encryption on critical databaser"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis audit av krypteringsstatus",
              "en": "Quarterly audit of krypteringsstatus"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Encryption-at-rest som standard, KMS key management",
              "en": "Encryption-at-rest by default, KMS key management"
            }
          },
          {
            "id": "sky-data-002",
            "risikoelement": {
              "no": "Manglende backup eller gjenoppretting i sky",
              "en": "Missing backup or recovery capability in the cloud"
            },
            "saarbarhet": {
              "no": "Avhengighet av single region, ingen backup-strategi",
              "en": "dependency of single region, no backup-strategy"
            },
            "eksisterendeBeskyttelse": {
              "no": "Snapshot av kritiske ressurser",
              "en": "Snapshot of critical resources"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig backup-test",
              "en": "Monthly backup test"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Multi-region backup, automated disaster gjenoppretting testing",
              "en": "Multi-region backup, automated disaster recovery testing"
            }
          },
          {
            "id": "sky-data-003",
            "risikoelement": {
              "no": "Data residency krav ikke oppfylt",
              "en": "Data residency requirements not fulfilled"
            },
            "saarbarhet": {
              "no": "Data lagres i feil region/jurisdiksjon",
              "en": "Data is stored in the wrong region or jurisdiction"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dokumentert data lokasjon",
              "en": "Documented data lokasjon"
            },
            "eksisterendeKontroll": {
              "no": "Årlig audit",
              "en": "Annual audit"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Region locks, data residency policyer, GDPR compliance",
              "en": "Region locks, data residency policies, GDPR compliance"
            }
          }
        ]
      },
      {
        "id": "sky-kostnad",
        "navn": {
          "no": "Sky-kostnader og ressursstyring",
          "en": "Cloud Cost Management"
        },
        "risikoer": [
          {
            "id": "sky-cost-001",
            "risikoelement": {
              "no": "Ukontrollert ressurs-forbruk fører til høye kostnader",
              "en": "Uncontrolled resource consumption leads to high costs"
            },
            "saarbarhet": {
              "no": "Manglende budsjett-alarmer, auto-scaling uten grenser",
              "en": "Missing budget-alarmer, auto-scaling without grenser"
            },
            "eksisterendeBeskyttelse": {
              "no": "Månedlig kostnadsrapportering",
              "en": "Monthly kostnadsrapportering"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis kostnadsgjennomgang",
              "en": "Quarterly cost review"
            },
            "K": 1,
            "I": 1,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Budget alerts, resource quotas, auto-shutdown av dev/test",
              "en": "Budget alerts, resource quotas, auto-shutdown of dev/test"
            }
          }
        ]
      },
      {
        "id": "sky-compliance",
        "navn": {
          "no": "Sky-compliance og governance",
          "en": "Cloud Compliance"
        },
        "risikoer": [
          {
            "id": "sky-comp-001",
            "risikoelement": {
              "no": "sky-ressurser er ikke fullstendig kartlagt",
              "en": "Cloud resources are not mapped completely"
            },
            "saarbarhet": {
              "no": "Sprawl, zombie resources, manglende tagging",
              "en": "Sprawl, zombie resources, missing tagging"
            },
            "eksisterendeBeskyttelse": {
              "no": "månedlig inventory",
              "en": "Monthly inventory"
            },
            "eksisterendeKontroll": {
              "no": "Cost reports",
              "en": "Cost reports"
            },
            "K": 3,
            "I": 2,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Resource tagging policy, automated discovery, CMDB",
              "en": "Resource tagging policy, automated discovery, CMDB"
            }
          },
          {
            "id": "sky-comp-002",
            "risikoelement": {
              "no": "Compliance violations ikke oppdaget",
              "en": "Compliance violations not oppdaget"
            },
            "saarbarhet": {
              "no": "Manglende continuous compliance overvåking",
              "en": "Missing continuous compliance monitoring"
            },
            "eksisterendeBeskyttelse": {
              "no": "årlig audit",
              "en": "Annual audit"
            },
            "eksisterendeKontroll": {
              "no": "manuell checks",
              "en": "Manual checks"
            },
            "K": 4,
            "I": 4,
            "T": 2,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Cloud Security Posture Management (CSPM) og automatisert utbedring",
              "en": "Cloud Security Posture Management (CSPM), automated remediation"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "supply-chain",
    "navn": {
      "no": "Leverandørkjede og tredjeparter",
      "en": "Supply Chain and Third Parties"
    },
    "beskrivelse": {
      "no": "Risikoer knyttet til leverandører, underleverandører og supply chain-sikkerhet",
      "en": "Risks related to vendors, subcontractors and supply chain-security"
    },
    "kategorier": [
      {
        "id": "leverandorstyring",
        "navn": {
          "no": "Leverandørstyring",
          "en": "Vendor Management"
        },
        "risikoer": [
          {
            "id": "vendor-001",
            "risikoelement": {
              "no": "Kritisk avhengighet av én leverandør (single point of failure)",
              "en": "Critical dependency of én vendor (single point of failure)"
            },
            "saarbarhet": {
              "no": "leverandør lock-in, ingen alternative leverandører kartlagt",
              "en": "Vendor lock-in, no alternative vendors mapped"
            },
            "eksisterendeBeskyttelse": {
              "no": "SLA med leverandør",
              "en": "SLA with vendor"
            },
            "eksisterendeKontroll": {
              "no": "Årlig leverandørgjennomgang",
              "en": "Annual vendor review"
            },
            "K": 3,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Multi-leverandør strategi, exit plan, alternative leverandører identifisert",
              "en": "Multi-vendor strategy, exit plan, alternative vendors identified"
            }
          },
          {
            "id": "vendor-002",
            "risikoelement": {
              "no": "Leverandøren beskytter ikke tjenesten godt nok",
              "en": "The vendor does not protect the service well enough"
            },
            "saarbarhet": {
              "no": "Manglende sikkerhetsvurdering av leverandører og ingen revisjonsrettigheter",
              "en": "Missing security assessment of vendors, no audit rights"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generelle sikkerhetskrav i avtale",
              "en": "Generelle sikkerhetskrav in avtale"
            },
            "eksisterendeKontroll": {
              "no": "Selvdeklarasjon fra leverandør",
              "en": "Selvdeklarasjon from vendor"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Sikkerhetsvurderinger av leverandør, krav om SOC 2/ISO 27001 og revisjonsrettigheter i kontrakten",
              "en": "Vendor security assessments, SOC 2/ISO 27001 requirements, audit rights in kontrakt"
            }
          },
          {
            "id": "vendor-003",
            "risikoelement": {
              "no": "Avtaleverket gir for liten motstandskraft ved avbrudd",
              "en": "The contractual setup provides too little resilience during service disruption"
            },
            "saarbarhet": {
              "no": "Vage SLA-er, ingen bøter ved brudd, manglende eskalering",
              "en": "Vague SLAs, no penalties for breaches, and missing escalation paths"
            },
            "eksisterendeBeskyttelse": {
              "no": "SLA definert i avtale",
              "en": "SLA defined in avtale"
            },
            "eksisterendeKontroll": {
              "no": "Månedlig SLA-rapportering",
              "en": "Monthly SLA-rapportering"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Tydelige SLA-er med penalties, eskaleringsmatrise, backup-løsning",
              "en": "Define clear SLAs with penalties, an escalation matrix, and backup solutions"
            }
          },
          {
            "id": "vendor-004",
            "risikoelement": {
              "no": "Leverandør går konkurs eller avslutter tjeneste",
              "en": "Vendor goes bankrupt or avslutter service"
            },
            "saarbarhet": {
              "no": "Ingen escrow agreement, avhengighet av proprietær teknologi",
              "en": "There is no escrow agreement and there is dependency on proprietary technology"
            },
            "eksisterendeBeskyttelse": {
              "no": "backup av data",
              "en": "Backup of data"
            },
            "eksisterendeKontroll": {
              "no": "Finansiell due diligence",
              "en": "Finansiell due diligence"
            },
            "K": 3,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Source code escrow, data portability, migrasjonsplan",
              "en": "Source code escrow, data portability, migrasjonsplan"
            }
          },
          {
            "id": "vendor-005",
            "risikoelement": {
              "no": "Underleverandør (subprocessor) uten avtale",
              "en": "Subcontractor (subprocessor) without avtale"
            },
            "saarbarhet": {
              "no": "Leverandør bruker underleverandører vi ikke kjenner til",
              "en": "Vendor user subcontractors vi not know to"
            },
            "eksisterendeBeskyttelse": {
              "no": "Generell tillatt bruk av subprocessors",
              "en": "Generell tillatt bruk of subprocessors"
            },
            "eksisterendeKontroll": {
              "no": "GDPR DPA med notifikasjon",
              "en": "GDPR DPA with notifikasjon"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Preapproval av subprocessors, GDPR Article 28 compliance, subprocessor list",
              "en": "Preapproval of subprocessors, GDPR Article 28 compliance, subprocessor list"
            }
          },
          {
            "id": "vendor-006",
            "risikoelement": {
              "no": "Virksomheten mangler oversikt over alle leverandører (shadow IT)",
              "en": "The organization lacks an overview of all vendors (shadow IT)"
            },
            "saarbarhet": {
              "no": "Ansatte bruker SaaS-tjenester uten IT-godkjenning",
              "en": "Employees user SaaS-services without IT-approval"
            },
            "eksisterendeBeskyttelse": {
              "no": "policy mot unauthorized IT",
              "en": "Policy mot unauthorized IT"
            },
            "eksisterendeKontroll": {
              "no": "Expense report gjennomgang",
              "en": "Expense report review"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 5,
            "foreslaatteTiltak": {
              "no": "CASB, SaaS discovery tools, SSO enforcement, leverandør management system",
              "en": "CASB, SaaS discovery tools, SSO enforcement, vendor management system"
            }
          }
        ]
      },
      {
        "id": "data-deling",
        "navn": {
          "no": "Datadeling med tredjeparter",
          "en": "Data Sharing"
        },
        "risikoer": [
          {
            "id": "data-001",
            "risikoelement": {
              "no": "Overdeling av data til leverandør (over-privileging)",
              "en": "Overdeling of data to vendor (over-privileging)"
            },
            "saarbarhet": {
              "no": "Leverandør får tilgang til mer data enn nødvendig",
              "en": "Vendor gain access to mer data than necessary"
            },
            "eksisterendeBeskyttelse": {
              "no": "Data classification",
              "en": "Data classification"
            },
            "eksisterendeKontroll": {
              "no": "Periodisk tilgang gjennomgang",
              "en": "Periodic access review"
            },
            "K": 5,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Data minimization, need-to-know basis, API-scoped tilgang",
              "en": "Data minimization, need-to-know basis, API-scoped access"
            }
          },
          {
            "id": "data-002",
            "risikoelement": {
              "no": "Ukryptert datatransfer til leverandør",
              "en": "unencrypted datatransfer to vendor"
            },
            "saarbarhet": {
              "no": "Data sendes i klartekst, svake krypteringsmetoder",
              "en": "Data sendes in plaintext, weak krypteringsmetoder"
            },
            "eksisterendeBeskyttelse": {
              "no": "HTTPS for API calls",
              "en": "HTTPS for API calls"
            },
            "eksisterendeKontroll": {
              "no": "TLS version check",
              "en": "TLS version check"
            },
            "K": 5,
            "I": 3,
            "T": 1,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "End-to-end encryption, TLS 1.3+, encrypted file transfers (SFTP/GPG)",
              "en": "End-to-end encryption, TLS 1.3+, encrypted file transfers (SFTP/GPG)"
            }
          },
          {
            "id": "data-003",
            "risikoelement": {
              "no": "Leverandør bruker data til uautoriserte formål",
              "en": "Vendor user data to uautoriserte purpose"
            },
            "saarbarhet": {
              "no": "Vag data processing agreement, manglende kontroll",
              "en": "Vag data processing agreement, missing control"
            },
            "eksisterendeBeskyttelse": {
              "no": "DPA med purpose limitation",
              "en": "DPA with purpose limitation"
            },
            "eksisterendeKontroll": {
              "no": "Årlig audit",
              "en": "Annual audit"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Clear DPA terms, audit rights, data usage overvåking, GDPR Article 28",
              "en": "Clear DPA terms, audit rights, data usage monitoring, GDPR Article 28"
            }
          },
          {
            "id": "data-004",
            "risikoelement": {
              "no": "Data lagres hos leverandør etter kontraktsavslutning",
              "en": "Data is stored hos vendor after kontraktsavslutning"
            },
            "saarbarhet": {
              "no": "Manglende data return/deletion prosedyre",
              "en": "Missing data return/deletion procedure"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kontraktsfestet sletteklausul",
              "en": "Contractual deletion clause"
            },
            "eksisterendeKontroll": {
              "no": "manuell request ved offboarding",
              "en": "Manual request during offboarding"
            },
            "K": 4,
            "I": 3,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Automated data deletion, verified deletion certificate, escrow for transition",
              "en": "Automated data deletion, verified deletion certificate, escrow for transition"
            }
          }
        ]
      },
      {
        "id": "integrasjoner-api",
        "navn": {
          "no": "Tredjepartsintegrasjoner",
          "en": "Integrations and APIs"
        },
        "risikoer": [
          {
            "id": "api-vendor-001",
            "risikoelement": {
              "no": "Ukontrollert tilgang via API-nøkler til tredjeparter",
              "en": "Uncontrolled access through API keys to third parties"
            },
            "saarbarhet": {
              "no": "Statiske API keys, over-privilegerte tokens",
              "en": "Statiske API keys, over-privilegerte tokens"
            },
            "eksisterendeBeskyttelse": {
              "no": "API key rotation policy",
              "en": "API key rotation policy"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis key gjennomgang",
              "en": "Quarterly key review"
            },
            "K": 5,
            "I": 4,
            "T": 3,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "OAuth 2.0 med scopes, short-lived tokens, automated rotation",
              "en": "OAuth 2.0 with scopes, short-lived tokens, automated rotation"
            }
          },
          {
            "id": "api-vendor-002",
            "risikoelement": {
              "no": "Leverandørens API kompromittert eller nedlagt",
              "en": "The vendor's API is compromised or shut down"
            },
            "saarbarhet": {
              "no": "Hard dependency på external API, ingen fallback",
              "en": "Hard dependency on external API, no fallback"
            },
            "eksisterendeBeskyttelse": {
              "no": "Error handling",
              "en": "Error handling"
            },
            "eksisterendeKontroll": {
              "no": "Uptime overvåking",
              "en": "Uptime monitoring"
            },
            "K": 3,
            "I": 3,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Circuit breakers, graceful degradation, local caching, API versioning",
              "en": "Circuit breakers, graceful degradation, local caching, API versioning"
            }
          },
          {
            "id": "api-vendor-003",
            "risikoelement": {
              "no": "Manglende rate limiting på integrasjoner",
              "en": "Missing rate limiting on integrations"
            },
            "saarbarhet": {
              "no": "Leverandør eller oss kan bli DDoS-et via integrasjon",
              "en": "Vendor or oss can bli DDoS-a via integrasjon"
            },
            "eksisterendeBeskyttelse": {
              "no": "Basic rate limiting",
              "en": "Basic rate limiting"
            },
            "eksisterendeKontroll": {
              "no": "API usage metrics",
              "en": "API usage metrics"
            },
            "K": 2,
            "I": 2,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Bidirectional rate limiting, backpressure, queue-based integration",
              "en": "Bidirectional rate limiting, backpressure, queue-based integration"
            }
          }
        ]
      },
      {
        "id": "open-source",
        "navn": {
          "no": "Open source avhengigheter",
          "en": "Open Source"
        },
        "risikoer": [
          {
            "id": "oss-001",
            "risikoelement": {
              "no": "Kritisk OSS-prosjekt ikke lenger vedlikeholdt",
              "en": "Critical OSS-project not lenger vedlikeholdt"
            },
            "saarbarhet": {
              "no": "Avhengighet av unmaintained libraries, single maintainer risk",
              "en": "dependency of unmaintained libraries, single maintainer risk"
            },
            "eksisterendeBeskyttelse": {
              "no": "Dependency scanning",
              "en": "Dependency scanning"
            },
            "eksisterendeKontroll": {
              "no": "Kvartalsvis gjennomgang av avhengigheter",
              "en": "Quarterly dependency review"
            },
            "K": 3,
            "I": 4,
            "T": 4,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Monitor project health, consider forking, commercial support, alternative libraries",
              "en": "Monitor project health, consider forking, commercial support, alternative libraries"
            }
          },
          {
            "id": "oss-002",
            "risikoelement": {
              "no": "Ondsinnet takeover av OSS-prosjekt",
              "en": "Ondsinnet takeover of OSS-project"
            },
            "saarbarhet": {
              "no": "Maintainer account kompromittert, hostile takeover",
              "en": "Maintainer account kompromittert, hostile takeover"
            },
            "eksisterendeBeskyttelse": {
              "no": "Locked versions",
              "en": "Locked versions"
            },
            "eksisterendeKontroll": {
              "no": "Gjennomgang av endringslogger",
              "en": "Changelogs reviewed"
            },
            "K": 5,
            "I": 5,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Lås eksakte versjoner, verifiser signaturer, SBOM-sporing og overvåking av security.txt",
              "en": "Pin exact versions, verify signatures, SBOM tracking, security.txt monitoring"
            }
          },
          {
            "id": "oss-003",
            "risikoelement": {
              "no": "Lisensendringer i OSS-dependencies",
              "en": "Lisensendringer in OSS-dependencies"
            },
            "saarbarhet": {
              "no": "License changes fra permissive til copyleft",
              "en": "License changes from permissive to copyleft"
            },
            "eksisterendeBeskyttelse": {
              "no": "License compliance scanning",
              "en": "License compliance scanning"
            },
            "eksisterendeKontroll": {
              "no": "årlig license audit",
              "en": "Annual license audit"
            },
            "K": 3,
            "I": 2,
            "T": 3,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Automated license sporing, legal gjennomgang of critical deps, pin versions",
              "en": "Automated license tracking, legal review of critical deps, pin versions"
            }
          },
          {
            "id": "oss-004",
            "risikoelement": {
              "no": "Zero-day i critical OSS dependency",
              "en": "Zero-day in critical OSS dependency"
            },
            "saarbarhet": {
              "no": "Log4Shell-type vulnerability, widespread impact",
              "en": "Log4Shell-type vulnerability, widespread impact"
            },
            "eksisterendeBeskyttelse": {
              "no": "Vulnerability scanning",
              "en": "Vulnerability scanning"
            },
            "eksisterendeKontroll": {
              "no": "CVE overvåking",
              "en": "CVE monitoring"
            },
            "K": 5,
            "I": 4,
            "T": 5,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Runtime protection (RASP), virtual patching, fast patch cycle, SBOM for hendelse respons",
              "en": "Runtime protection (RASP), virtual patching, fast patch cycle, SBOM for incident response"
            }
          }
        ]
      },
      {
        "id": "vendor-offboarding",
        "navn": {
          "no": "Leverandør-offboarding",
          "en": "Vendor Offboarding"
        },
        "risikoer": [
          {
            "id": "offboard-001",
            "risikoelement": {
              "no": "Leverandør beholder tilgang etter kontraktsavslutning",
              "en": "Vendor retains access after kontraktsavslutning"
            },
            "saarbarhet": {
              "no": "Manglende offboarding prosedyre, glemte tilganger",
              "en": "Missing offboarding procedure, glemte access"
            },
            "eksisterendeBeskyttelse": {
              "no": "manuell tilgang revocation",
              "en": "Manual access revocation"
            },
            "eksisterendeKontroll": {
              "no": "kvartalsvis tilgang gjennomgang",
              "en": "Quarterly access review"
            },
            "K": 5,
            "I": 4,
            "T": 2,
            "sannsynlighet": 4,
            "foreslaatteTiltak": {
              "no": "Automated offboarding arbeidsflyt, tilgang expiration dates, full audit trail",
              "en": "Automated offboarding workflow, access expiration dates, full audit trail"
            }
          },
          {
            "id": "offboard-002",
            "risikoelement": {
              "no": "Kunnskapsoverføring til ny leverandør mislykkes",
              "en": "Knowledge transfer to a new vendor fails"
            },
            "saarbarhet": {
              "no": "Dårlig dokumentasjon, leverandør lock-in på kunnskap",
              "en": "Poor documentation, vendor lock-in on knowledge"
            },
            "eksisterendeBeskyttelse": {
              "no": "Kontraktsfestet periode for kunnskapsoverføring",
              "en": "Contractual knowledge transfer period"
            },
            "eksisterendeKontroll": {
              "no": "Handover dokumentasjon",
              "en": "Handover documentation"
            },
            "K": 2,
            "I": 3,
            "T": 5,
            "sannsynlighet": 3,
            "foreslaatteTiltak": {
              "no": "Mandatory dokumentasjon, knowledge base, transition plan, shadowing period",
              "en": "Mandatory documentation, knowledge base, transition plan, shadowing period"
            }
          },
          {
            "id": "offboard-003",
            "risikoelement": {
              "no": "IP-rettigheter skaper konflikt ved leverandørskifte",
              "en": "IP rights create conflict during a vendor transition"
            },
            "saarbarhet": {
              "no": "Uklare IP clauses i kontrakt, custom development eierskap",
              "en": "Uklare IP clauses in kontrakt, custom development ownership"
            },
            "eksisterendeBeskyttelse": {
              "no": "Standard IP terms",
              "en": "Standard IP terms"
            },
            "eksisterendeKontroll": {
              "no": "Legal gjennomgang at termination",
              "en": "Legal review at termination"
            },
            "K": 3,
            "I": 4,
            "T": 4,
            "sannsynlighet": 2,
            "foreslaatteTiltak": {
              "no": "Clear IP eierskap clauses, work-for-hire agreements, source code escrow",
              "en": "Clear IP ownership clauses, work-for-hire agreements, source code escrow"
            }
          }
        ]
      }
    ]
  }
];
