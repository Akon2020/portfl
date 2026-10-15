import {
  Project,
  SkillCategory,
  Certification,
  TimelineItem,
  BlogPost,
  GalleryItem,
  ProfileConfig,
  AnalyticsStats,
} from '../types';

export const initialProfile: ProfileConfig = {
  name: 'Isaac Akonkwa',
  titleFr: 'Ingénieur Logiciel | Fullstack, Mobile, IA & Cybersécurité',
  titleEn: 'Software Engineer | Fullstack, Mobile, AI & Cybersecurity',
  bioFr:
    "Ingénieur logiciel diplômé avec Très Grande Distinction de l'Université Catholique de Bukavu (UCB). Passionné par la conception d'architectures résilientes, le développement d'applications mobiles performantes (React Native), l'intégration de modèles d'intelligence artificielle et l'audit de sécurité offensif (Bug Bounty / Pentesting). Fondateur d'Akon Tech et ancien Co-Organizer GDG on Campus, je transforme des problématiques complexes en solutions numériques pérennes.",
  bioEn:
    'Software engineer graduated with Highest Honors from the Catholic University of Bukavu (UCB). Passionate about resilient software architectures, high-performance mobile applications (React Native), AI integration, and offensive cybersecurity (Bug Bounty / Pentesting). Founder of Akon Tech and former GDG on Campus Co-Organizer, I translate complex challenges into scalable, human-centered digital products.',
  location: 'Bukavu, République Démocratique du Congo',
  email: 'akonkwaushindi@gmail.com',
  phone: '+243 970 137 369',
  availabilityFr: 'Disponible pour contrats, missions d’ingénierie & opportunités à impact',
  availabilityEn: 'Available for engineering contracts, full-time roles & high-impact products',
  isAvailable: true,
  githubUrl: 'https://github.com/Akon2020',
  linkedinUrl: 'https://linkedin.com/in/akonizk',
  twitterUrl: 'https://twitter.com/akon1703',
  instagramUrl: 'https://instagram.com/akonizk',
  facebookUrl: 'https://facebook.com/Akonkwa.Ushindi',
  heroImage: '', // Will default to custom generated avatar or uploaded photo
  aboutImage: '',
};

export const initialProjects: Project[] = [
  {
    id: 'diasmart',
    title: 'DiaSmart — Mobile & IA Diabète T2',
    subtitleFr: 'Application mobile intelligente pour le suivi et l’automatisation des patients diabétiques de type 2',
    subtitleEn: 'Intelligent mobile app for monitoring and automation of Type 2 diabetes patients',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'Python', 'FastAPI', 'Machine Learning', 'Firestore', 'TailwindCSS'],
    descriptionFr:
      'Projet de fin de cycle primé avec Très Grande Distinction (82,5%) à l’UCB. DiaSmart permet le suivi glycémique continu, l’évaluation prédictive des risques par machine learning et l’automatisation du protocole de soins pour les patients à Bukavu.',
    descriptionEn:
      'Awarded with Highest Honors (82.5%) at UCB. DiaSmart provides continuous blood glucose tracking, ML predictive risk assessment, and automated care workflows tailored to patients in Bukavu.',
    problemFr:
      'Suivi discontinu des patients diabétiques dans les zones urbaines et périurbaines, retards d’intervention en cas de pic glycémique et faible adhérence aux prescriptions thérapeutiques.',
    problemEn:
      'Discontinuous monitoring of diabetic patients, delayed intervention during acute glycemic spikes, and low adherence to long-term care plans in urban/peri-urban clinics.',
    solutionFr:
      'Application mobile intuitive couplée à un backend prédictif : saisie vocale/manuelle simplifiée, alertes automatisées aux soignants, modèles ML d’anticipation des crises et mode hors-ligne résilient.',
    solutionEn:
      'Intuitive mobile application coupled with a predictive backend: simplified logging, automated caregiver alerts, crisis anticipation ML models, and resilient offline-first mode.',
    myRoleFr: 'Architecte logiciel, développement React Native & modélisation des algorithmes prédictifs.',
    myRoleEn: 'Lead Software Architect, React Native frontend & predictive ML model engineering.',
    highlightsFr: [
      'Mention Très Grande Distinction (82,5%) accordée par le jury de la faculté de Génie Logiciel UCB.',
      'Architecture résiliente offline-first pour supporter les coupures de réseau fréquentes.',
      'Modèle prédictif d’analyse de tendances glycémiques avec alertes médicales proactives.',
    ],
    highlightsEn: [
      'Graduation thesis defended with Highest Distinction (82.5%) at UCB Software Engineering Department.',
      'Resilient offline-first synchronization architecture designed for intermittent network connectivity.',
      'Predictive trend analysis model providing proactive caregiver notifications.',
    ],
    liveUrl: 'https://isaacakonkwa.vercel.app',
    githubUrl: 'https://github.com/Akon2020',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    date: '2024 - 2025',
  },
  {
    id: 'medicure',
    title: 'Medicure — Système Hospitalier Global',
    subtitleFr: 'Système complet de gestion hospitalière, consultations, hospitalisations & RBAC',
    subtitleEn: 'Comprehensive hospital management system, consultations, admissions & RBAC',
    category: 'fullstack',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT & RBAC', 'REST API', 'Swagger / OpenAPI'],
    descriptionFr:
      'Plateforme de santé d’entreprise gérant l’intégralité du cycle hospitalier : dossiers patients informatisés, flux des consultations, gestion des lits/hospitalisations et contrôle d’accès granulaire basé sur les rôles (RBAC).',
    descriptionEn:
      'Enterprise healthcare platform orchestrating the entire clinical lifecycle: electronic health records, consultation workflows, bed management, and fine-grained role-based access control.',
    problemFr:
      'Gestion manuelle sur papier ou tableurs désynchronisés provoquant des pertes de dossiers, des goulets d’étranglement à l’admission et des failles d’accès aux données médicales sensibles.',
    problemEn:
      'Paper-based and fragmented spreadsheet records causing data loss, admission bottlenecks, and sensitive medical data confidentiality breaches.',
    solutionFr:
      'API REST modulaire et sécurisée avec documentation OpenAPI interactive, schéma relationnel PostgreSQL normalisé et système d’authentification JWT multi-niveaux (médecins, infirmiers, caissiers, administrateurs).',
    solutionEn:
      'Modular secure REST API with interactive OpenAPI documentation, normalized PostgreSQL relational schema, and multi-tier JWT authentication system (doctors, nurses, billing, administrators).',
    myRoleFr: 'Lead Backend Developer & Architecte API REST.',
    myRoleEn: 'Lead Backend Developer & REST API Architect.',
    highlightsFr: [
      'Documentation OpenAPI exhaustive accessible publiquement sur medicure.alpho-exchange.com.',
      'Chiffrement des données sensibles et conformité stricte aux permissions médicales RBAC.',
      'Optimisation des requêtes complexes PostgreSQL réduisant le temps de chargement de 65%.',
    ],
    highlightsEn: [
      'Full interactive OpenAPI documentation deployed live on medicure.alpho-exchange.com.',
      'Sensitive data encryption and strict adherence to hospital role-based access control rules.',
      'Complex PostgreSQL query optimization yielding a 65% reduction in latency under load.',
    ],
    liveUrl: 'https://medicure.alpho-exchange.com/api-docs/',
    githubUrl: 'https://github.com/Akon2020',
    featured: true,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    date: '2023 - 2024',
  },
  {
    id: 'chat-with-pdf',
    title: 'Chat With PDF — SaaS IA Documentaire',
    subtitleFr: 'Transformation de documents PDF en agents interactifs intelligents',
    subtitleEn: 'Transform complex PDF documents into interactive intelligent conversational agents',
    category: 'ai',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenAI / Gemini', 'Vector Embeddings', 'Vercel'],
    descriptionFr:
      'Plateforme SaaS permettant aux chercheurs, juristes et étudiants d’interroger instantanément de volumineux documents PDF grâce à la recherche sémantique vectorielle et l’IA générative.',
    descriptionEn:
      'SaaS platform enabling researchers, lawyers, and students to query massive PDF documents instantly using semantic vector embeddings and generative AI agents.',
    problemFr:
      'Lecture chronophage de rapports techniques de centaines de pages, recherche par mots-clés inefficace et difficulté à synthétiser des informations croisées.',
    problemEn:
      'Time-consuming manual review of multi-hundred-page technical reports, ineffective keyword searches, and difficulty cross-referencing information.',
    solutionFr:
      'Pipeline de découpage (chunking) intelligent, indexation vectorielle haute vitesse et interface conversationnelle fluide citant avec exactitude les pages sources des réponses fournies.',
    solutionEn:
      'Smart chunking pipeline, high-speed vector indexing, and fluid conversational interface strictly referencing page citations for verifiable factuality.',
    myRoleFr: 'Concepteur & Développeur Fullstack Next.js / IA.',
    myRoleEn: 'Creator & Fullstack Next.js / AI Engineer.',
    highlightsFr: [
      'Déployé en production avec expérience utilisateur ultra-rapide en streaming de réponses.',
      'Extraction et parsing précis des tableaux complexes et citations de bas de page.',
      'Interface responsive avec prévisualisation PDF synchronisée à l’affichage des réponses.',
    ],
    highlightsEn: [
      'Deployed live in production with low-latency streaming response generation.',
      'Accurate parsing of complex multi-column tables and contextual citations.',
      'Responsive split-view interface synchronizing PDF preview with chat answers.',
    ],
    liveUrl: 'https://chat-with-pdf-challenge.vercel.app/',
    githubUrl: 'https://github.com/Akon2020',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
  },
  {
    id: 'burning-heart',
    title: 'Burning Heart — Plateforme Institutionnelle & API',
    subtitleFr: 'Site institutionnel haute performance et infrastructure backend d’engagement',
    subtitleEn: 'High-performance institutional platform and backend engagement infrastructure',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'REST API', 'Cloud Deployment'],
    descriptionFr:
      'Conception et développement complet du site institutionnel et de son API dédiée pour l’organisation Burning Heart, avec gestion d’événements, publications et formulaires sécurisés.',
    descriptionEn:
      'Full architecture and development of the institutional portal and REST API for the Burning Heart organization, featuring event publishing and secure donor outreach.',
    problemFr:
      'Présence en ligne obsolète avec temps de chargement élevés, aucun canal d’interaction direct et absence de gestion de contenu éditorial autonome.',
    problemEn:
      'Outdated web presence with high bounce rates, lack of direct engagement channels, and no autonomous content publishing capability.',
    solutionFr:
      'Refonte moderne en Next.js App Router, optimisation SEO poussée (Core Web Vitals à 98/100) et API Node.js pour la gestion des événements et des souscriptions.',
    solutionEn:
      'Modern Next.js App Router rebuild, high-performance SEO optimization (Core Web Vitals 98/100), and custom Node.js API handling events and membership.',
    myRoleFr: 'Architecte Fullstack & Responsable Déploiement.',
    myRoleEn: 'Lead Fullstack Architect & Deployment Manager.',
    highlightsFr: [
      'Temps de chargement divisé par 4 et score d’accessibilité Lighthouse supérieur à 95.',
      'Système CMS léger permettant aux équipes de publier des actualités sans intervention technique.',
      'Architecture résiliente hébergée sur cloud sécurisé avec monitoring de trafic.',
    ],
    highlightsEn: [
      'Page load times reduced by 4x, achieving Lighthouse accessibility and SEO scores over 95.',
      'Lightweight headless management enabling non-technical staff to publish updates autonomously.',
      'Resilient architecture hosted on secure cloud infrastructure with traffic telemetry.',
    ],
    liveUrl: 'https://burninghearihs.org/',
    githubUrl: 'https://github.com/Akon2020',
    featured: true,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    date: '2023 - 2024',
  },
  {
    id: 'securite-publique',
    title: 'Plateforme Citoyenne de Sécurité Publique',
    subtitleFr: 'Signalement géolocalisé en temps réel, alertes et analyse d’images par IA',
    subtitleEn: 'Real-time geolocated citizen reporting, incident alerts & AI image verification',
    category: 'ai',
    technologies: ['React Native', 'Node.js', 'FastAPI', 'Computer Vision (CNN)', 'Geolocation', 'WebSockets'],
    descriptionFr:
      'Système intégré Web + Mobile + IA permettant le signalement instantané d’incidents urbains, la diffusion d’alertes d’urgence et la catégorisation automatique d’images d’incidents par vision par ordinateur.',
    descriptionEn:
      'Integrated Web + Mobile + AI platform enabling real-time urban incident reporting, emergency alert dispatch, and automated computer vision image verification.',
    problemFr:
      'Canaux d’urgence saturés ou inaccessibles lors d’incidents majeurs, manque de coordonnées GPS précises et propagation de fausses alertes non vérifiées.',
    problemEn:
      'Overwhelmed emergency hotlines during crises, lack of precise GPS coordinate data, and unverified rumor dissemination.',
    solutionFr:
      'Application mobile ergonomique avec bouton d’alerte rapide géolocalisé, transmission de photos vérifiées par modèle CNN et console de supervision cartographique pour les équipes d’intervention.',
    solutionEn:
      'Ergonomic mobile app with 1-tap geolocated SOS alerts, CNN-powered photo integrity validation, and real-time mapping supervision dashboard for response teams.',
    myRoleFr: 'Conception globale, intégration du pipeline de Computer Vision et géolocalisation mobile.',
    myRoleEn: 'Lead System Designer, Computer Vision pipeline integration & mobile GPS telemetry.',
    highlightsFr: [
      'Détection automatique d’anomalies et filtrage d’images non pertinentes par réseau de neurones convolutifs.',
      'Transmission d’alertes en moins de 800ms grâce à une couche de streaming WebSockets.',
      'Stockage sécurisé et chiffré des métadonnées d’incidents pour préserver l’anonymat des déclarants.',
    ],
    highlightsEn: [
      'Automated hazard classification and irrelevant image filtering via CNN vision models.',
      'Sub-800ms dispatch latency powered by WebSocket streaming layers.',
      'Encrypted metadata storage preserving reporting citizen privacy and data integrity.',
    ],
    featured: false,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
  },
  {
    id: 'agribot',
    title: 'AgriBot — Diagnostic Phyto par IA',
    subtitleFr: 'Diagnostic instantané des maladies foliaires des cultures via vision artificielle mobile',
    subtitleEn: 'Instant plant leaf disease diagnosis via mobile artificial vision on the field',
    category: 'ai',
    technologies: ['React Native', 'Python', 'TensorFlow / PyTorch', 'OpenCV', 'FastAPI'],
    descriptionFr:
      'Outil d’aide à la décision pour petits exploitants agricoles permettant de photographier une feuille malade et d’obtenir instantanément le diagnostic de pathologie et les recommandations phytosanitaires adaptées.',
    descriptionEn:
      'Decision-support tool for smallholder farmers enabling camera-based leaf disease diagnosis with localized eco-friendly treatment recommendations.',
    problemFr:
      'Pertes de récoltes massives dues à l’identification tardive des champignons et parasites, combinées à l’absence d’agronomes dans les zones rurales reculées.',
    problemEn:
      'Massive harvest yields lost to late blight, fungal infestations, and lack of accessible agronomists in rural farming communities.',
    solutionFr:
      'Réseau neuronal convolutif compacté pour l’inférence mobile, fonctionnant même en basse connectivité avec un guide pratique en langues locales.',
    solutionEn:
      'Quantized CNN model optimized for on-device/low-bandwidth inference, coupled with plain-language vernacular treatment instructions.',
    myRoleFr: 'Entraînement des modèles de classification d’images et développement de l’application React Native.',
    myRoleEn: 'Image classification model training & React Native mobile client development.',
    highlightsFr: [
      'Précision de diagnostic supérieure à 91% sur les pathologies courantes du manioc et du maïs.',
      'Interface intuitive adaptée aux utilisateurs en milieu rural avec explications audio/visuelles.',
    ],
    highlightsEn: [
      '91%+ classification accuracy across common cassava and maize fungal infections.',
      'Accessible UI built for low-literacy rural contexts with visual guide indicators.',
    ],
    featured: false,
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80',
    date: '2023',
  },
  {
    id: 'urlshort',
    title: 'UrlShort — Raccourcisseur d’URL Sécurisé',
    subtitleFr: 'Service d’URLs courtes avec analyse analytique et protection contre le phishing',
    subtitleEn: 'Secure URL shortening service with analytics and proactive anti-phishing protection',
    category: 'tools',
    technologies: ['Python', 'Flask', 'SQLite / PostgreSQL', 'TailwindCSS', 'Netlify / Cloud'],
    descriptionFr:
      'Application web complète permettant de générer des liens courts personnalisés, d’analyser les statistiques de clics par région et de vérifier la sûreté des URLs de destination.',
    descriptionEn:
      'Full web application generating custom short links, tracking geographical click metrics, and screening target URLs for malware and phishing.',
    problemFr:
      'Les liens bruts longs sont difficiles à partager et masquent parfois des vecteurs d’attaques malveillantes.',
    problemEn:
      'Cumbersome raw URLs degrade social sharing and frequently mask unverified destination exploits.',
    solutionFr:
      'Générateur avec hachage cryptographique court, vérification des certificats TLS des cibles et tableau de bord de statistiques en direct.',
    solutionEn:
      'Short hashing generator with SSL verification and real-time click volume analytics.',
    myRoleFr: 'Développeur unique Backend & Frontend Python / Flask.',
    myRoleEn: 'Sole Developer: Python/Flask API & responsive interface.',
    highlightsFr: [
      'En production sur Netlify avec des milliers de redirections fiables.',
      'Protection proactive contre les redirections vers des domaines suspects.',
    ],
    highlightsEn: [
      'Live in production on Netlify with sub-50ms redirect speed.',
      'Proactive filtering against flagged phishing domains.',
    ],
    liveUrl: 'https://akurlshort.netlify.app/',
    githubUrl: 'https://github.com/Akon2020',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    date: '2023',
  },
  {
    id: 'passgen',
    title: 'PassGen — Générateur de Clés Sécurisées',
    subtitleFr: 'Générateur de mots de passe cryptographiques avec test d’entropie',
    subtitleEn: 'Cryptographic password generator with real-time entropy calculation',
    category: 'cybersecurity',
    technologies: ['JavaScript', 'Web Crypto API', 'TailwindCSS', 'Netlify'],
    descriptionFr:
      'Outil de cybersécurité côté client tirant parti de la Web Crypto API pour générer des mots de passe robustes et évaluer leur résistance face aux attaques par dictionnaire ou force brute.',
    descriptionEn:
      'Client-side cybersecurity utility leveraging the Web Crypto API to generate high-entropy passwords with mathematical brute-force resilience checks.',
    problemFr:
      'Réutilisation courante de mots de passe faibles menant à des compromissions de comptes en chaîne.',
    problemEn:
      'Prevalent password reuse leading to cascading credential stuffing vulnerabilities.',
    solutionFr:
      'Génération 100% locale (zéro donnée transmise au serveur), calcul d’entropie en bits et presets adaptés aux contraintes des systèmes d’entreprise.',
    solutionEn:
      'Strictly local cryptographic execution (zero server transmission), bit entropy score gauge, and corporate compliance presets.',
    myRoleFr: 'Concepteur & Développeur Cybersécurité.',
    myRoleEn: 'Lead Cybersecurity Engineer & UI Developer.',
    highlightsFr: [
      'Audit de robustesse basé sur l’estimation du temps de cassage par GPU moderne.',
      'Architecture hermétique garantissant une confidentialité totale.',
    ],
    highlightsEn: [
      'Robustness estimation based on state-of-the-art GPU cluster cracking time.',
      'Zero-telemetry client-only execution guaranteeing total privacy.',
    ],
    liveUrl: 'https://akpassgen.netlify.app/',
    githubUrl: 'https://github.com/Akon2020',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80',
    date: '2023',
  },
  {
    id: 'music-player',
    title: 'Music Player Web — Lecteur & Visualiseur Audio',
    subtitleFr: 'Lecteur audio web moderne avec gestion de bibliothèque et visualiseur interactif',
    subtitleEn: 'Modern audio player with client-side library management & visualizer',
    category: 'tools',
    technologies: ['HTML5 Web Audio API', 'JavaScript', 'CSS3 Animations', 'Netlify'],
    descriptionFr:
      'Interface multimédia fluide permettant l’upload de pistes audio locales, l’organisation de listes de lecture et le rendu d’un égaliseur animé en temps réel.',
    descriptionEn:
      'Fluid multimedia application enabling local audio file ingestion, playlist curation, and real-time audio frequency canvas visualization.',
    problemFr:
      'Lecteurs audio natifs lourds ou encombrés de publicités indésirables pour l’écoute de fichiers personnels.',
    problemEn:
      'Bloated audio software loaded with intrusive tracking for simple local track playback.',
    solutionFr:
      'Lecteur léger zéro-latence exploitant la Web Audio API avec contrôles clavier et playlists dynamiques.',
    solutionEn:
      'Zero-latency browser audio client utilizing Web Audio API with shortcut keys and dynamic queues.',
    myRoleFr: 'Développeur Frontend.',
    myRoleEn: 'Frontend Developer.',
    highlightsFr: [
      'Visualiseur d’ondes audio réactif à 60 FPS.',
      'Prise en charge du glisser-déposer de dossiers audio entiers.',
    ],
    highlightsEn: [
      'Smooth 60 FPS frequency visualizer animation.',
      'Drag-and-drop ingestion of entire audio directories.',
    ],
    liveUrl: 'https://akmusicplayer.netlify.app/',
    githubUrl: 'https://github.com/Akon2020',
    featured: false,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    date: '2023',
  },
  {
    id: 'coaching-app',
    title: 'Coaching App — Générateur de Parcours par IA',
    subtitleFr: 'Génération mobile de contenus d’apprentissage structurés par intelligence artificielle',
    subtitleEn: 'AI-driven generation of personalized, structured mobile learning curricula',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'Generative AI', 'TypeScript', 'Node.js'],
    descriptionFr:
      'Application mobile révolutionnant l’apprentissage autonome : l’utilisateur saisit une compétence ciblée, et l’IA génère un programme progressif avec chapitres, quiz et exercices pratiques.',
    descriptionEn:
      'Mobile app transforming self-paced education: the learner specifies any target skill, and the AI agent structures a progressive syllabus with quizzes and real-world exercises.',
    problemFr:
      'Dispersion des ressources pédagogiques en ligne et manque de parcours structurés adaptés au niveau de chaque apprenant.',
    problemEn:
      'Fragmented educational tutorials and absence of structured roadmaps adapted to individual baseline proficiencies.',
    solutionFr:
      'Synthèse de cursus sur-mesure par prompts structurés avec validation des paliers d’acquisition.',
    solutionEn:
      'Structured curriculum generation with automated progression checkpoints and interactive micro-quizzes.',
    myRoleFr: 'Développement de l’application mobile React Native et ingénierie des invites IA.',
    myRoleEn: 'React Native mobile engineering and structured AI prompt orchestration.',
    highlightsFr: [
      'Génération de cours interactifs en moins de 5 secondes.',
      'Système de mémorisation espacée et suivi de la rétention des connaissances.',
    ],
    highlightsEn: [
      'Sub-5s structured course generation with modular chapters.',
      'Spaced repetition algorithm tracking knowledge retention over time.',
    ],
    featured: false,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
  },
];

export const initialSkills: SkillCategory[] = [
  {
    id: 'fullstack',
    titleFr: 'Développement FullStack & APIs',
    titleEn: 'FullStack Engineering & APIs',
    iconName: 'Layers',
    skills: [
      { name: 'React / Next.js', level: 'Expert', detailFr: 'App Router, SSR/SSG, Server Actions, Composants modulaires', detailEn: 'App Router, SSR/SSG, Server Actions, Modular components' },
      { name: 'TypeScript & JavaScript (ESNext)', level: 'Expert', detailFr: 'Typage strict, interfaces complexes, asynchronisme avancé', detailEn: 'Strict typing, complex interfaces, advanced async patterns' },
      { name: 'Node.js & Express.js', level: 'Expert', detailFr: 'APIs RESTful sécurisées, middlewares, validation des schémas', detailEn: 'Secure RESTful APIs, custom middlewares, schema validation' },
      { name: 'Authentification JWT & RBAC', level: 'Expert', detailFr: 'Gestion des rôles, permissions granulaires, sessions sécurisées', detailEn: 'Role-based access control, granular scopes, secure tokens' },
      { name: 'Clean Architecture & MVC', level: 'Avancé', detailFr: 'Séparation stricte des couches, couplage faible, testabilité', detailEn: 'Strict domain separation, low coupling, maintainable codebases' },
    ],
  },
  {
    id: 'mobile',
    titleFr: 'Développement Mobile Multiplateforme',
    titleEn: 'Cross-Platform Mobile Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'React Native & Expo', level: 'Expert', detailFr: 'Applications iOS/Android fluides, architectures modulaires', detailEn: 'Fluid iOS/Android applications, modular component structure' },
      { name: 'Capteurs & Matériel (Caméra, GPS)', level: 'Avancé', detailFr: 'Intégration géolocalisation haute précision, capture photo', detailEn: 'High-precision GPS telemetry, on-device camera integration' },
      { name: 'Notifications Push & Background Tasks', level: 'Avancé', detailFr: 'Gestion des flux d’alertes en tâche de fond', detailEn: 'Background workers, asynchronous push alert dispatch' },
      { name: 'Firebase Mobile Stack', level: 'Avancé', detailFr: 'Auth, Firestore temps réel, Cloud Storage & Sync', detailEn: 'Auth, real-time Firestore database, Cloud Storage & Sync' },
    ],
  },
  {
    id: 'database',
    titleFr: 'Bases de Données & ORMs',
    titleEn: 'Databases & ORM Architectures',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Expert', detailFr: 'Modélisation relationnelle, indexation, transactions ACID', detailEn: 'Relational data modeling, index tuning, ACID transactions' },
      { name: 'MongoDB & Cloud Firestore', level: 'Avancé', detailFr: 'Schémas NoSQL flexibles, requêtes distribuées temps réel', detailEn: 'Flexible NoSQL schemas, real-time distributed document stores' },
      { name: 'Prisma, Sequelize & Mongoose', level: 'Expert', detailFr: 'Migrations automatisées, typage de bout en bout', detailEn: 'Automated type-safe migrations, end-to-end data integrity' },
      { name: 'SQLite & Cache Local', level: 'Expert', detailFr: 'Stockage embarqué pour applications mobiles et desktop', detailEn: 'Embedded zero-latency storage for mobile and local clients' },
    ],
  },
  {
    id: 'ai-python',
    titleFr: 'Python & Intelligence Artificielle',
    titleEn: 'Python & Artificial Intelligence',
    iconName: 'Cpu',
    skills: [
      { name: 'Python (FastAPI & Flask)', level: 'Expert', detailFr: 'Microservices IA ultra-rapides, validation Pydantic, OpenAPI', detailEn: 'Ultra-fast AI microservices, Pydantic validation, OpenAPI' },
      { name: 'Machine Learning & Scikit-Learn', level: 'Avancé', detailFr: 'Modèles prédictifs, régression, classification médicale', detailEn: 'Predictive modeling, regression, medical risk classifiers' },
      { name: 'Computer Vision (CNN & OpenCV)', level: 'Avancé', detailFr: 'Classification d’images, détection d’anomalies et pathologie', detailEn: 'Image classification, visual anomaly and plant pathology detection' },
      { name: 'Agents LLM & Vector Search', level: 'Avancé', detailFr: 'Intégration RAG, embeddings vectoriels, traitement documentaire', detailEn: 'RAG pipelines, vector embeddings, autonomous document agents' },
    ],
  },
  {
    id: 'cybersecurity',
    titleFr: 'Cybersécurité & Pentesting',
    titleEn: 'Cybersecurity & Offensive Security',
    iconName: 'Shield',
    skills: [
      { name: 'Bug Bounty — Hack The Box', level: 'Avancé', detailFr: 'Certified Bug Bounty Hunter, reconnaissance et exploitation', detailEn: 'Certified Bug Bounty Hunter, recon methodologies & exploitation' },
      { name: 'Pentesting Web & CTFs', level: 'Avancé', detailFr: 'Audit de sécurité des applications web selon l’OWASP Top 10', detailEn: 'Web vulnerability assessments following OWASP Top 10 vectors' },
      { name: 'Attaques & Défenses (SQLi, XSS, CSRF)', level: 'Avancé', detailFr: 'Détection des failles d’injection et sécurisation des inputs', detailEn: 'Injection detection, sanitized pipelines & boundary validation' },
      { name: 'Sécurité Réseau & Wireless', level: 'Intermédiaire', detailFr: 'Analyse de paquets, détection d’attaques Evil Twin & MitM', detailEn: 'Packet analysis, Evil Twin & MitM wireless attack detection' },
    ],
  },
  {
    id: 'devops-tools',
    titleFr: 'DevOps, CI/CD & Outils',
    titleEn: 'DevOps, CI/CD & Tooling',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Expert', detailFr: 'Gestion de versions, Git Flow, revues de code rigoureuses', detailEn: 'Version control, Git Flow branching, rigorous pull request reviews' },
      { name: 'Docker & Conteneurisation', level: 'Avancé', detailFr: 'Isolation d’environnements, multi-stage builds légers', detailEn: 'Environment isolation, lightweight multi-stage image builds' },
      { name: 'Tailwind CSS & Styling Moderne', level: 'Expert', detailFr: 'Design systems sur-mesure, thèmes dynamiques sombre/clair', detailEn: 'Custom design systems, fluid dark/light dynamic theming' },
      { name: 'Cisco Packet Tracer & Réseaux', level: 'Intermédiaire', detailFr: 'Topologies réseau, routage, sous-réseaux et pare-feu', detailEn: 'Network topologies, routing protocols, subnetting & firewalls' },
    ],
  },
];

export const initialCertifications: Certification[] = [
  { id: 'cert-1', title: 'Réussir dans le DevOps', issuer: 'LinkedIn Learning', year: '2025', category: 'devops' },
  { id: 'cert-2', title: 'L’IA dans le contexte de la cybersécurité', issuer: 'LinkedIn Learning', year: '2025', category: 'ai' },
  { id: 'cert-3', title: 'Rédiger un plan marketing technologique', issuer: 'LinkedIn Learning', year: '2025', category: 'agile' },
  { id: 'cert-4', title: 'Fondamentaux de la cybersécurité', issuer: 'Google', year: '2025', category: 'cyber' },
  { id: 'cert-5', title: 'Google Agile Essentials', issuer: 'Google', year: '2025', category: 'agile' },
  { id: 'cert-6', title: 'Certified Bug Bounty Hunter', issuer: 'Hack The Box', year: '2024', category: 'cyber' },
  { id: 'cert-7', title: 'Web Fundamentals & Web Attacks', issuer: 'TryHackMe', year: '2024', category: 'cyber' },
  { id: 'cert-8', title: 'Fundamentals of Cybersecurity', issuer: 'Coursera', year: '2024', category: 'cyber' },
  { id: 'cert-9', title: 'Meta Front-End Developer', issuer: 'Meta / Coursera', year: '2024', category: 'frontend' },
  { id: 'cert-10', title: 'Advanced CSS Master', issuer: 'Frontend Mentor', year: '2023', category: 'frontend' },
  { id: 'cert-11', title: 'ALX Software Engineering Program', issuer: 'ALX Africa', year: '2023', category: 'devops' },
  { id: 'cert-12', title: 'HTML Certified Developer', issuer: 'SoloLearn', year: '2023', category: 'frontend' },
  { id: 'cert-13', title: 'Python Introduction & Intermediate', issuer: 'SoloLearn', year: '2022', category: 'python' },
];

export const initialTimeline: TimelineItem[] = [
  {
    id: 'cga',
    period: 'Septembre 2023 — Présent',
    roleFr: 'Web Developer & Chargé de Marketing',
    roleEn: 'Web Developer & Marketing Strategist',
    organization: 'Code, Growth Alive (CGA)',
    location: 'Bukavu, RDC',
    type: 'experience',
    descriptionFr:
      'Startup technologique spécialisée dans la création et l’accélération de solutions numériques à fort impact.',
    descriptionEn:
      'High-growth tech startup designing and accelerating digital products for enterprise clients and institutions.',
    achievementsFr: [
      'Développement d’applications web et mobiles d’envergure professionnelle en React, Node.js et TypeScript.',
      'Conception, intégration et durcissement d’APIs REST sécurisées avec validation stricte.',
      'Optimisation des performances frontend et réduction du temps de chargement de 40%.',
      'Travail collaboratif en environnement agile (sprints, stand-ups, déploiements continus).',
    ],
    achievementsEn: [
      'Engineered production-grade web and mobile applications using React, Node.js, and TypeScript.',
      'Architected and hardened REST APIs with strict validation and sanitization policies.',
      'Optimized frontend performance pipelines, cutting average page load latency by 40%.',
      'Collaborated in rapid Agile sprint cycles, conducting code reviews and CI/CD releases.',
    ],
  },
  {
    id: 'gdg-ucb',
    period: 'Septembre 2024 — Juillet 2025',
    roleFr: 'Co-Organizer',
    roleEn: 'Co-Organizer',
    organization: 'Google Developer Group (GDG) On Campus UCB',
    location: 'Bukavu, RDC',
    type: 'leadership',
    descriptionFr:
      'Animation et pilotage de la communauté officielle des développeurs Google au sein de l’Université Catholique de Bukavu.',
    descriptionEn:
      'Community leadership and technical steering for the official Google Developer Group chapter at UCB.',
    achievementsFr: [
      'Organisation d’ateliers pratiques et de conférences sur les technologies Google (Cloud, Firebase, Android).',
      'Mentorat technique auprès de plus de 150 étudiants et supervision de projets informatiques.',
      'Promotion de l’innovation logicielle et animation de sessions de programmation collaborative.',
    ],
    achievementsEn: [
      'Organized technical workshops and conferences on Google Cloud, Firebase, and mobile ecosystems.',
      'Mentored 150+ student developers across software engineering projects and hackathons.',
      'Advocated open-source collaboration and facilitated hands-on coding bootcamps.',
    ],
  },
  {
    id: 'gdsc-ucb',
    period: 'Septembre 2022 — Septembre 2024',
    roleFr: 'Lead Web & Mentor Backend',
    roleEn: 'Web Lead & Backend Mentor',
    organization: 'Google Developer Student Club (GDSC UCB)',
    location: 'Bukavu, RDC',
    type: 'community',
    descriptionFr:
      'Responsable des parcours de formation au développement web et backend pour les développeurs universitaires.',
    descriptionEn:
      'Head of training curricula for web and backend development for university engineers.',
    achievementsFr: [
      'Formation aux standards du web moderne (HTML5, CSS3, JavaScript ESNext) et architecture client/serveur.',
      'Enseignement du backend Python (Flask, API design) et des bonnes pratiques de bases de données.',
      'Accompagnement d’équipes dans la résolution de problématiques logicielles complexes.',
    ],
    achievementsEn: [
      'Taught modern web standards (HTML5, CSS3, JavaScript ESNext) and client/server paradigms.',
      'Conducted Python backend masterclasses (Flask, REST design, database modeling).',
      'Guided student engineering squads toward building scalable community projects.',
    ],
  },
  {
    id: 'akon-tech',
    period: 'Août 2020 — Présent',
    roleFr: 'CEO & Fondateur',
    roleEn: 'CEO & Founder',
    organization: 'Akon Tech',
    location: 'Bukavu, RDC',
    type: 'leadership',
    descriptionFr:
      'Communauté et laboratoire d’innovation réunissant développeurs, designers et créateurs de solutions numériques.',
    descriptionEn:
      'Tech community and digital innovation studio convening software developers, designers, and creators.',
    achievementsFr: [
      'Leadership technique et direction stratégique des projets open-source et clients.',
      'Formation continue de jeunes développeurs et mentorat en ingénierie logicielle.',
      'Gestion de cycles complets de produits digitaux, du cadrage UX au déploiement en production.',
    ],
    achievementsEn: [
      'Provided technical vision and architectural guidance for community and client initiatives.',
      'Mentored emerging regional software talent through structured skill workshops.',
      'Managed end-to-end digital product lifecycles from wireframing to production cloud hosting.',
    ],
  },
  {
    id: 'ucb-degree',
    period: 'Janvier 2021 — Novembre 2025',
    roleFr: 'Baccalauréat en Génie Logiciel (Bac +4)',
    roleEn: 'Bachelor of Science in Software Engineering (4-Year)',
    organization: 'Université Catholique de Bukavu (UCB)',
    location: 'Bukavu, RDC',
    type: 'education',
    descriptionFr:
      'Formation universitaire approfondie en génie logiciel, algorithmique, bases de données, sécurité et architecture.',
    descriptionEn:
      'Rigorous academic degree covering software architecture, algorithm design, relational/distributed databases, and security.',
    achievementsFr: [
      'Mention Très Grande Distinction (82,5%) couronnant l’ensemble du cursus universitaire.',
      'Projet de fin de cycle : Conception et développement de l’application mobile intelligente DiaSmart.',
      'Étude approfondie de l’ingénierie des exigences, de la Clean Architecture et des systèmes distribués.',
    ],
    achievementsEn: [
      'Graduated with Highest Distinction (82.5% cumulative average).',
      'Graduation thesis project: Engineered the DiaSmart mobile health and ML ecosystem.',
      'Advanced coursework in distributed systems, software quality assurance, and formal modeling.',
    ],
  },
  {
    id: 'young-tech',
    period: 'Juin 2020 — Mars 2021',
    roleFr: 'Développeur Frontend',
    roleEn: 'Frontend Developer',
    organization: 'Young Technology',
    location: 'Bukavu, RDC',
    type: 'experience',
    descriptionFr:
      'Premières expériences de conception d’interfaces graphiques web et de projets collaboratifs communautaires.',
    descriptionEn:
      'Early frontend engineering experience building user interfaces and collaborative community portals.',
    achievementsFr: [
      'Développement d’interfaces utilisateurs interactives et réactives en JavaScript.',
      'Intégration de maquettes graphiques et initiation aux architectures web professionnelles.',
    ],
    achievementsEn: [
      'Built responsive and dynamic user interfaces with clean JavaScript and CSS.',
      'Translated visual wireframes into accessible web components.',
    ],
  },
  {
    id: 'edap-isp',
    period: 'Septembre 2013 — Juillet 2020',
    roleFr: 'Diplôme d’État (Secondaire)',
    roleEn: 'State High School Diploma',
    organization: 'École d’Application (EDAP / ISP)',
    location: 'Bukavu, RDC',
    type: 'education',
    descriptionFr:
      'Cursus d’excellence scientifique et littéraire posant les fondations des sciences exactes et de la logique informatique.',
    descriptionEn:
      'Strong secondary curriculum in mathematics, physics, and logic paving the foundation for software engineering.',
    achievementsFr: [
      'Obtention du Diplôme d’État avec mention honorifique.',
      'Développement de compétences précoces en algorithmique et raisonnement logique.',
    ],
    achievementsEn: [
      'Graduated with official national honors.',
      'Early exploration of algorithmic principles, logic gates, and science foundations.',
    ],
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'article-diasmart-architecture',
    slug: 'architecture-diasmart-react-native-machine-learning',
    titleFr: 'Architecture d’une App Santé Mobile Résiliente avec React Native & ML : Retour d’Expérience sur DiaSmart',
    titleEn: 'Engineering a Resilient Mobile Health System with React Native & ML: The DiaSmart Case Study',
    excerptFr:
      'Comment concevoir une application de santé fiable en milieu à connectivité intermittente, combinant modèles de machine learning prédictifs et synchronisation de données hors-ligne.',
    excerptEn:
      'How to architect a fault-tolerant medical mobile application under intermittent network conditions, marrying predictive machine learning models with resilient offline-first data sync.',
    contentFr: `### 1. Le Défi de l'Intermittence Réseau en Santé Numérique

Développer une application mobile médicale comme **DiaSmart** impose un impératif fondamental : la vie et le bien-être du patient ne peuvent dépendre de la qualité d'une connexion 4G. À Bukavu comme dans de nombreuses régions émergentes, les zones d'ombre réseau sont fréquentes.

Pour répondre à cette contrainte, nous avons bâti DiaSmart selon un triptyque strict :
1. **Offline-First Storage** : Enregistrement local instantané de chaque mesure glycémique dans une base embarquée SQLite chiffrée.
2. **Replication Event-Driven** : Un worker d'arrière-plan surveille la connectivité et propage les snapshots dès qu'une route réseau stable est établie.
3. **Inférence Hybride** : Les alertes critiques immédiates sont calculées localement sur le smartphone, tandis que les analyses prédictives approfondies de tendances s'exécutent sur notre backend FastAPI.

### 2. Le Choix de React Native & TypeScript

La réactivité de l'interface utilisateur est primordiale pour les personnes âgées ou fragiles. L'utilisation de React Native avec Expo et TypeScript a permis d'assurer un typage rigoureux des constantes médicales, prévenant toute erreur d'arrondi ou de conversion d'unités (mg/dL vs mmol/L).

### 3. Conclusion & Perspectives

Ce travail, défendu avec la mention *Très Grande Distinction (82,5%)* à l'Université Catholique de Bukavu, démontre que l'ingénierie logicielle appliquée peut apporter des réponses concrètes et mesurables à des défis de santé publique majeurs.`,
    contentEn: `### 1. The Challenge of Network Intermittency in Digital Health

Engineering a mobile medical application like **DiaSmart** entails an uncompromising design rule: patient care and alert systems cannot falter when 4G connectivity drops. In regions like Bukavu, connectivity blackouts are common.

To solve this, DiaSmart was engineered upon three core pillars:
1. **Offline-First Local Storage**: Instantaneous persistence of every glucose log in an on-device encrypted SQLite database.
2. **Event-Driven Synchronization**: A background worker monitors network health and reconciles state as soon as a verified socket connection opens.
3. **Hybrid Inference**: Immediate safety thresholds are computed on-device, while longitudinal predictive analytics execute asynchronously on our FastAPI cloud service.

### 2. Selecting React Native & Strict TypeScript

For vulnerable patients, interface clarity and zero latency are vital. Pairing React Native with TypeScript ensured strict validation over medical measurements, completely preventing unit conversion bugs (mg/dL vs mmol/L).

### 3. Takeaways

Defended with *Highest Honors (82.5%)* at the Catholic University of Bukavu, this project demonstrates how deliberate software engineering delivers tangible, lifesaving impacts.`,
    category: 'Mobile & HealthTech',
    tags: ['React Native', 'Machine Learning', 'Healthcare', 'Architecture'],
    publishedAt: '2025-02-10',
    readTime: '6 min',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
  },
  {
    id: 'article-securite-apis',
    slug: 'securiser-apis-rest-jwt-rbac-production',
    titleFr: 'Sécuriser les APIs REST en Production : Du JWT Stateless aux Politiques RBAC Strictes',
    titleEn: 'Hardening Production REST APIs: From Stateless JWTs to Strict RBAC Enforcement',
    excerptFr:
      'Guide pratique pour éviter les failles courantes de contrôle d’accès (BOLA/IDOR) et architecturer une authentification robuste en Node.js et Express.',
    excerptEn:
      'A hands-on engineering guide to preventing Broken Object Level Authorization (BOLA/IDOR) and building tamper-proof role-based access control in Node.js and Express.',
    contentFr: `### 1. Au-delà du Simple Token JWT

Dans de nombreuses architectures backend, les développeurs commettent l'erreur de considérer qu'un token JWT valide suffit à autoriser une requête. Pourtant, l'OWASP classe l'autorisation au niveau de l'objet (*Broken Object Level Authorization - BOLA*) comme la vulnérabilité API n°1.

### 2. Implémentation d'une Matrice RBAC Granulaire

Lors de la conception du système hospitalier **Medicure**, nous avons segmenté les droits selon une matrice stricte :
* **Permissions déclaratives** : Chaque endpoint vérifie non seulement le rôle de l'utilisateur (Médecin, Infirmier, Administrateur), mais également son attribution légitime au service concerné.
* **Validation contextuelle de propriété** : Un soignant ne peut lire que les dossiers rattachés à son unité active.

\`\`\`typescript
export const authorizeResource = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Accès refusé : privilèges insuffisants.' });
    }
    next();
  };
};
\`\`\`

### 3. Conclusion

La sécurité n'est pas une couche qu'on ajoute à la fin : c'est un invariant architectural présent dès la première ligne de code.`,
    contentEn: `### 1. Beyond the Naive JWT Token

In many backend implementations, developers mistakenly assume a valid JWT signature equals authorized access. However, OWASP ranks Broken Object Level Authorization (BOLA/IDOR) as the #1 API vulnerability.

### 2. Implementing Granular RBAC in Production

While architecting the **Medicure** clinical platform, access control was modeled with strict guarantees:
* **Declarative Scopes**: Endpoints enforce role verification alongside departmental assignment.
* **Contextual Ownership Validation**: Caregivers are scoped strictly to their admitted patients.

\`\`\`typescript
export const authorizeResource = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient privileges.' });
    }
    next();
  };
};
\`\`\`

### 3. Conclusion

Security is never a patch you apply at release; it is an architectural invariant baked into line one.`,
    category: 'Cybersécurité & Backend',
    tags: ['Node.js', 'Cybersecurity', 'API Design', 'JWT'],
    publishedAt: '2025-01-18',
    readTime: '5 min',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
  },
  {
    id: 'article-pentesting-methodologie',
    slug: 'pentesting-web-bug-bounty-methodologie-terrain',
    titleFr: 'Pentesting Web & Bug Bounty : Méthodologie d’Audit Offensif et Remédiation',
    titleEn: 'Web Pentesting & Bug Bounty: Offensive Audit Methodologies and Remediation',
    excerptFr:
      'Retour d’expérience sur les challenges Hack The Box et TryHackMe : comment cartographier la surface d’attaque et corriger les vulnérabilités avant les attaquants.',
    excerptEn:
      'Insights from Hack The Box and TryHackMe challenges: mapping attack surfaces and hardening web infrastructure before adversaries strike.',
    contentFr: `### 1. La Pensée Offensive au Service de la Qualité Logicielle

Pour construire des logiciels véritablement sécurisés, il faut savoir comment ils se brisent. Ma certification *Certified Bug Bounty Hunter* sur Hack The Box a renforcé cette approche : le code n'est robuste que s'il résiste à des tests d'intrusion méthodiques.

### 2. Les 3 Piliers de l'Audit

1. **Reconnaissance active et passive** : Cartographie des sous-domaines, analyse des en-têtes de sécurité (CSP, HSTS, CORS).
2. **Test des injections et de la logique métier** : SQLi, SSRF et contournements de flux.
3. **Remédiation immédiate** : Fournir aux équipes de développement des correctifs précis et vérifiés.`,
    contentEn: `### 1. Thinking Offensively to Build Resilient Software

To engineer truly secure systems, you must understand how they fail under attack. Earning the *Certified Bug Bounty Hunter* credential on Hack The Box crystallized this conviction: software is only as strong as its resistance to systematic penetration testing.

### 2. The 3 Pillars of Web Auditing

1. **Active and Passive Reconnaissance**: Subdomain enumeration, header compliance (CSP, HSTS, CORS).
2. **Injection and Business Logic Probing**: SQLi, SSRF, and workflow bypass vectors.
3. **Actionable Remediation**: Supplying development squads with unambiguous, tested patches.`,
    category: 'Cybersécurité',
    tags: ['Pentesting', 'Bug Bounty', 'HackTheBox', 'OWASP'],
    publishedAt: '2024-11-25',
    readTime: '4 min',
    coverImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
  },
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    titleFr: 'Soutenance de Mémoire — Mention Très Grande Distinction',
    titleEn: 'Thesis Defense — Highest Honors (82.5%)',
    category: 'speaking',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    date: '2025',
    descriptionFr: 'Présentation de l’application DiaSmart devant le jury académique de l’Université Catholique de Bukavu.',
    descriptionEn: 'Defending the DiaSmart mobile healthcare solution before the UCB engineering academic jury.',
  },
  {
    id: 'gal-2',
    titleFr: 'Conférence Google Developer Group on Campus',
    titleEn: 'Google Developer Group Campus Conference',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
    descriptionFr: 'Animation d’une session technique dédiée aux technologies Cloud et Firebase pour les étudiants.',
    descriptionEn: 'Leading an interactive technical masterclass on Google Cloud and Firebase for student engineers.',
  },
  {
    id: 'gal-3',
    titleFr: 'Bootcamp & Hackathon Akon Tech',
    titleEn: 'Akon Tech Hackathon & Mentoring Session',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
    descriptionFr: 'Supervision des équipes de jeunes développeurs lors du sprint de programmation communautaire.',
    descriptionEn: 'Mentoring young engineering squads through a high-intensity weekend programming sprint.',
  },
  {
    id: 'gal-4',
    titleFr: 'Session d’Audit et Pentesting Web',
    titleEn: 'Offensive Web Security & Pentesting Lab',
    category: 'dev',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    date: '2024',
    descriptionFr: 'Résolution de machines complexes et simulation d’attaques sur les plateformes Hack The Box & TryHackMe.',
    descriptionEn: 'Hands-on lab solving complex vulnerable machines and penetration challenges on Hack The Box.',
  },
];

export const initialStats: AnalyticsStats = {
  totalVisits: 1420,
  projectViews: 3840,
  blogViews: 2190,
  resumeDownloads: 485,
};
