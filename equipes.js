// Le Déclic version équipes (25/10/26, Leslie msg 59640 et 59643) : une fonction, son équipe de quatre Experts,
// les tâches pénibles rattachées à chaque Expert, et les questions de maturité rangées par section.
// Équipes et rôles : projects/yelema-site-v2/sections_abc.py (EQUIPES), portraits : site-proche/images/experts/.
(function(){
const D = window.DECLIC;

D.fonctions = [
  {
    id: "commercial", icone: "trending-up", nom: "Commercial et ventes", titre: "De la cible à la vente signée",
    outils: ["WhatsApp", "Excel", "Gmail", "Outlook", "HubSpot", "Sage", "Odoo", "LinkedIn", "Google Sheets", "Salesforce", "Pipedrive", "Zoho"],
    volume: { question: "Combien de devis envoyez-vous par mois ?", options: ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"] },
    equipe: [
      { id: "seydou", prenom: "Seydou", role: "Veille commerciale", photo: "av-seydou-sq.jpg" },
      { id: "kouassi", prenom: "Kouassi", role: "Prospection et relances", photo: "av-kouassi-sq.jpg" },
      { id: "sena", prenom: "Sèna", role: "Qualification et propositions", photo: "av-sena-sq.jpg" },
      { id: "aminata", prenom: "Aminata", role: "Suivi du pipeline", photo: "av-aminata-sq.jpg" }
    ],
    taches: [
      { id: "c1", par: "kouassi", label: "Relancer les devis restés sans réponse", fait: "Kouassi relance chaque devis avec le ton juste, sans harceler, et vous prévient quand un prospect se réveille." },
      { id: "c2", par: "sena", label: "Répondre aux demandes entrantes (WhatsApp, email)", fait: "Sèna qualifie chaque demande, pose les bonnes questions et vous passe les affaires sérieuses." },
      { id: "c3", par: "sena", label: "Préparer les devis et les propositions", fait: "Sèna prépare le devis depuis votre catalogue et vos remises autorisées. Rien ne part sans votre accord." },
      { id: "c4", par: "aminata", label: "Tenir le suivi des clients et des prospects", fait: "Aminata tient le pipeline à jour : qui a écrit, qui a répondu, où en est chaque affaire." },
      { id: "c5", par: "aminata", label: "Faire le reporting commercial de la semaine", fait: "Aminata vous envoie chaque vendredi les affaires chaudes, celles qui coincent et le chiffre de la semaine." },
      { id: "c6", par: "seydou", label: "Trouver les entreprises à viser", fait: "Seydou dresse la liste des comptes de votre cible, notés et justifiés." },
      { id: "c7", par: "seydou", label: "Repérer les appels d'offres et les signaux d'achat", fait: "Seydou surveille les appels d'offres, les nominations et les levées, et vous signale les bons moments." },
      { id: "c8", par: "kouassi", label: "Prospecter et écrire aux nouveaux clients", fait: "Kouassi écrit le premier message et relance au bon moment, sur le bon canal." },
      { id: "c9", par: "kouassi", label: "Relancer les clients qui n'ont pas racheté", fait: "Kouassi repère les clients inactifs depuis 60 jours et leur propose une offre adaptée." },
      { id: "c10", par: "sena", label: "Répondre aux appels d'offres", fait: "Sèna prépare le dossier de réponse : pièces, références, mémoire technique et prix à valider." },
      { id: "c11", par: "aminata", label: "Suivre les commerciaux terrain", fait: "Aminata recueille les comptes rendus de visite, par écrit ou par vocal, et met le suivi à jour." }
    ]
  },
  {
    id: "marketing", icone: "megaphone", nom: "Marketing et communication", titre: "De la stratégie à la campagne mesurée",
    outils: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Canva", "WhatsApp", "Google Drive", "YouTube", "Mailchimp", "Meta Business"],
    volume: { question: "Combien de publications par semaine ?", options: ["0 à 2", "3 à 7", "8 à 20", "Plus de 20"] },
    equipe: [
      { id: "aya", prenom: "Aya", role: "Stratégie de contenu", photo: "av-aya-sq.jpg" },
      { id: "fatima", prenom: "Fatima", role: "Contenus et réseaux", photo: "av-fatima-sq.jpg" },
      { id: "koffi", prenom: "Koffi", role: "Design", photo: "av-koffi-sq.jpg" },
      { id: "yao", prenom: "Yao", role: "Campagnes et résultats", photo: "av-yao-sq.jpg" }
    ],
    taches: [
      { id: "m1", par: "fatima", label: "Écrire les posts et les newsletters", fait: "Fatima rédige posts et newsletters dans le ton de votre marque, prêts à valider." },
      { id: "m2", par: "aya", label: "Tenir le calendrier de publication", fait: "Aya tient le calendrier du mois, canal par canal, et l'ajuste selon ce qui marche." },
      { id: "m3", par: "fatima", label: "Répondre aux commentaires et messages privés", fait: "Fatima trie les commentaires et les messages privés, et répond à ce qui peut l'être." },
      { id: "m4", par: "aya", label: "Préparer un lancement ou une campagne", fait: "Aya transforme votre objectif en brief, en plan de publications et en calendrier." },
      { id: "m5", par: "yao", label: "Mesurer ce qui marche sur les réseaux", fait: "Yao suit les résultats et vous dit quoi refaire et quoi arrêter." },
      { id: "m6", par: "aya", label: "Surveiller ce que font les concurrents", fait: "Aya suit ce que publient vos concurrents et vous en fait le résumé chaque semaine." },
      { id: "m7", par: "koffi", label: "Préparer les visuels des réseaux sociaux", fait: "Koffi produit les visuels de la semaine, aux bons formats, dans votre charte." },
      { id: "m8", par: "koffi", label: "Créer plaquettes, présentations et supports", fait: "Koffi met en forme plaquettes, catalogues et présentations aux couleurs de la maison." },
      { id: "m9", par: "fatima", label: "Rédiger les fiches produits et les pages du site", fait: "Fatima rédige fiches et pages, optimisées pour Google, dans votre ton." },
      { id: "m10", par: "yao", label: "Préparer les campagnes sponsorisées", fait: "Yao propose cibles, budget et annonces, puis suit le coût de chaque contact." },
      { id: "m11", par: "yao", label: "Suivre les influenceurs et partenaires", fait: "Yao prépare les briefs, suit les publications et mesure les retombées." }
    ]
  },
  {
    id: "rh", icone: "users", nom: "RH et talents", titre: "Du recrutement à l'équipe qui reste",
    outils: ["Excel", "Google Sheets", "Gmail", "Outlook", "WhatsApp", "LinkedIn", "Sage", "Sage Paie", "Teams", "SAP"],
    volume: { question: "Combien de salariés gérez-vous ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] },
    equipe: [
      { id: "adjoua", prenom: "Adjoua", role: "Recrutement", photo: "av-adjoua-sq.jpg" },
      { id: "fatou", prenom: "Fatou", role: "RH et paie", photo: "av-fatou-sq.jpg" },
      { id: "lamine", prenom: "Lamine", role: "Onboarding et formation", photo: "av-lamine-sq.jpg" },
      { id: "cheikh", prenom: "Cheikh", role: "Climat social", photo: "av-cheikh-sq.jpg" }
    ],
    taches: [
      { id: "r1", par: "adjoua", label: "Rédiger et diffuser les offres d'emploi", fait: "Adjoua rédige la fiche de poste et diffuse l'offre sur vos canaux." },
      { id: "r2", par: "adjoua", label: "Trier les CV", fait: "Adjoua trie les candidatures, en présélectionne cinq notées et vous dit pourquoi." },
      { id: "r3", par: "adjoua", label: "Planifier les entretiens et relancer les candidats", fait: "Adjoua programme les entretiens et suit chaque candidat, relances comprises." },
      { id: "r4", par: "fatou", label: "Préparer la paie et vérifier les calculs CNPS et ITS", fait: "Fatou prépare les éléments de paie et vérifie les calculs selon les règles ivoiriennes." },
      { id: "r5", par: "fatou", label: "Répondre aux questions des salariés (congés, paie)", fait: "Fatou répond aux salariés avec le solde exact et les bons documents, en minutes au lieu de jours." },
      { id: "r6", par: "fatou", label: "Produire attestations et documents RH", fait: "Fatou génère attestations et certificats, les fait valider et les envoie." },
      { id: "r7", par: "fatou", label: "Suivre fins de contrat et renouvellements", fait: "Fatou suit chaque échéance et vous prévient à temps." },
      { id: "r8", par: "lamine", label: "Accueillir les nouveaux arrivants", fait: "Lamine prépare l'arrivée, les documents et le parcours des premières semaines." },
      { id: "r9", par: "lamine", label: "Organiser les formations", fait: "Lamine recense les besoins, planifie les sessions et suit les présences." },
      { id: "r10", par: "cheikh", label: "Préparer les entretiens annuels", fait: "Cheikh prépare les supports et relance managers et salariés." },
      { id: "r11", par: "cheikh", label: "Repérer les tensions et les départs qui se préparent", fait: "Cheikh écoute les équipes et vous signale ce qui fait partir les gens, avant qu'ils partent." }
    ]
  },
  {
    id: "finance", icone: "wallet", nom: "Finance et comptabilité", titre: "De la facture au chiffre fiable",
    outils: ["Sage", "Excel", "Perfecto", "Odoo", "SAP", "QuickBooks", "Google Sheets", "Power BI", "Gmail", "Wave", "Orange Money", "MTN MoMo"],
    volume: { question: "Combien de factures traitez-vous par mois ?", options: ["Moins de 50", "50 à 200", "200 à 1 000", "Plus de 1 000"] },
    equipe: [
      { id: "kadiatou", prenom: "Kadiatou", role: "Factures", photo: "av-kadiatou-sq.jpg" },
      { id: "daouda", prenom: "Daouda", role: "Trésorerie et recouvrement", photo: "av-daouda-sq.jpg" },
      { id: "rokia", prenom: "Rokia", role: "Dépenses", photo: "av-rokia-sq.jpg" },
      { id: "mamadou", prenom: "Mamadou", role: "Comptabilité et contrôle de gestion", photo: "av-mamadou-sq.jpg" }
    ],
    taches: [
      { id: "f1", par: "daouda", label: "Relancer les factures impayées", fait: "Daouda relance les impayés par email et WhatsApp, au bon ton, et vous montre l'état des créances." },
      { id: "f2", par: "kadiatou", label: "Saisir les factures et les pièces comptables", fait: "Kadiatou lit vos factures et pièces, propose l'imputation SYSCOHADA, et vous validez." },
      { id: "f3", par: "daouda", label: "Préparer la trésorerie de la semaine", fait: "Daouda tient le plan de trésorerie et vous alerte avant le creux." },
      { id: "f4", par: "mamadou", label: "Rapprocher la banque et le mobile money", fait: "Mamadou rapproche les relevés bancaires et mobile money avec vos écritures." },
      { id: "f5", par: "kadiatou", label: "Émettre et vérifier les factures normalisées (FNE)", fait: "Kadiatou vérifie chaque facture normalisée et signale les pièces qui manquent." },
      { id: "f6", par: "rokia", label: "Contrôler les dépenses et les notes de frais", fait: "Rokia contrôle les notes de frais et les justificatifs, et signale ce qui manque." },
      { id: "f7", par: "rokia", label: "Rapprocher commandes, réceptions et factures fournisseurs", fait: "Rokia vérifie que chaque facture fournisseur correspond à une commande et à une réception." },
      { id: "f8", par: "daouda", label: "Suivre les échéances fournisseurs", fait: "Daouda tient l'échéancier et vous propose le plan de paiement de la semaine." },
      { id: "f9", par: "mamadou", label: "Préparer la clôture du mois", fait: "Mamadou prépare la clôture : écritures manquantes, rapprochements et commentaires." },
      { id: "f10", par: "mamadou", label: "Préparer les états pour la banque ou les actionnaires", fait: "Mamadou prépare les états et leurs commentaires, prêts à partir après votre accord." },
      { id: "f11", par: "mamadou", label: "Préparer les déclarations fiscales", fait: "Mamadou prépare les éléments des déclarations et vérifie les montants." }
    ]
  },
  {
    id: "support", icone: "headset", nom: "Service client et fidélisation", titre: "De la demande au client satisfait",
    outils: ["WhatsApp", "Telegram", "Gmail", "Outlook", "Facebook", "Instagram", "Excel", "HubSpot", "Zendesk", "Freshdesk", "Shopify"],
    volume: { question: "Combien de demandes clients recevez-vous par jour ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] },
    equipe: [
      { id: "awa", prenom: "Awa", role: "Réponse aux clients", photo: "av-awa-sq.jpg" },
      { id: "salif", prenom: "Salif", role: "Réclamations et livraisons", photo: "av-salif-sq.jpg" },
      { id: "akissi", prenom: "Akissi", role: "Satisfaction et fidélisation", photo: "av-akissi-sq.jpg" },
      { id: "ousmane", prenom: "Ousmane", role: "Qualité et base de réponses", photo: "av-ousmane-sq.jpg" }
    ],
    taches: [
      { id: "s1", par: "awa", label: "Répondre aux mêmes questions tous les jours", fait: "Awa répond en quelques secondes, jour et nuit, aux questions récurrentes de vos clients." },
      { id: "s2", par: "salif", label: "Retrouver une commande, une facture ou un historique", fait: "Salif retrouve la commande ou la facture sans faire attendre le client." },
      { id: "s3", par: "awa", label: "Répondre le soir et le week-end", fait: "Awa répond hors horaires et laisse une note claire à l'équipe du matin." },
      { id: "s4", par: "salif", label: "Traiter les réclamations et les escalader", fait: "Salif suit chaque réclamation jusqu'à sa solution et escalade selon vos règles." },
      { id: "s5", par: "akissi", label: "Rappeler les clients mécontents ou silencieux", fait: "Akissi repère les clients qui s'éloignent et prévient un responsable avant qu'ils partent." },
      { id: "s6", par: "salif", label: "Informer les clients sur leurs livraisons", fait: "Salif donne au client l'état de sa commande sans mobiliser l'équipe." },
      { id: "s7", par: "akissi", label: "Recueillir les avis et la satisfaction", fait: "Akissi sollicite les avis après l'achat et vous résume ce qui revient." },
      { id: "s8", par: "ousmane", label: "Mettre à jour la FAQ et les réponses types", fait: "Ousmane repère les nouvelles questions et propose les réponses à ajouter." },
      { id: "s9", par: "awa", label: "Prendre les commandes par message", fait: "Awa prend la commande, vérifie le stock et l'adresse, puis la transmet à l'équipe." },
      { id: "s10", par: "ousmane", label: "Faire le point des demandes non résolues", fait: "Chaque soir, Ousmane liste les demandes en attente et qui doit répondre." }
    ]
  },
  {
    id: "investissement", icone: "hand-coins", nom: "Investissement et portefeuille", titre: "Du dossier reçu au portefeuille suivi",
    outils: ["Excel", "Gmail", "Outlook", "Notion", "Google Drive", "DocuSign", "LinkedIn", "Power BI"],
    volume: { question: "Combien de dossiers recevez-vous par mois ?", options: ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"] },
    equipe: [
      { id: "fifame", prenom: "Fifamè", role: "Sourcing des dossiers", photo: "av-fifame-sq.jpg" },
      { id: "alioune", prenom: "Alioune", role: "Analyse et due diligence", photo: "av-alioune-sq.jpg" },
      { id: "ibrahim", prenom: "Ibrahim", role: "Pactes et juridique", photo: "av-ibrahim-sq.jpg" },
      { id: "nadia", prenom: "Nadia", role: "Suivi du portefeuille", photo: "av-nadia-sq.jpg" }
    ],
    taches: [
      { id: "i1", par: "fifame", label: "Trier les dossiers entrants", fait: "Fifamè note chaque dossier contre votre thèse d'investissement." },
      { id: "i2", par: "fifame", label: "Suivre les levées et les deals du marché", fait: "Fifamè suit les levées et les opérations de votre secteur." },
      { id: "i3", par: "fifame", label: "Répondre aux fondateurs non retenus", fait: "Fifamè répond aux fondateurs dont le dossier ne passe pas, avec la raison." },
      { id: "i4", par: "alioune", label: "Vérifier une data room et ses manques", fait: "Alioune inventorie les pièces et signale les manques et les incohérences." },
      { id: "i5", par: "alioune", label: "Auditer un modèle financier", fait: "Alioune audite le modèle et prépare les questions à poser à la direction." },
      { id: "i6", par: "alioune", label: "Rédiger les notes de comité", fait: "Alioune livre la note de comité avec les scénarios de valorisation." },
      { id: "i7", par: "ibrahim", label: "Relire les statuts et le pacte", fait: "Ibrahim relit statuts et pacte, et signale les clauses à négocier." },
      { id: "i8", par: "ibrahim", label: "Préparer term sheets et documentation", fait: "Ibrahim prépare la term sheet et la liste des pièces à partir de vos modèles." },
      { id: "i9", par: "nadia", label: "Suivre les participations", fait: "Nadia suit les participations, la trésorerie et les alertes convenues." },
      { id: "i10", par: "nadia", label: "Préparer les rapports aux investisseurs", fait: "Nadia prépare le rapport trimestriel à vos investisseurs." }
    ]
  }
];

// Questions de maturité, par section (sections 3 à 6 du Déclic). Échelle 0 à 3.
// Les ⭐ de la liste du 25/10 viennent du diagnostic The French Bot.
D.sections = [
  { id: "vision", icone: "compass", nom: "Vision et priorités", lede: "Où l'IA se place dans vos priorités.",
    questions: [
      { id: "v1", icone: "target", question: "Quelle place l'IA occupe-t-elle dans vos priorités ?",
        reponses: ["Le sujet n'est pas encore abordé", "On en parle, sans objectif", "Des objectifs sont identifiés", "Une ambition écrite, avec un responsable"] }
    ],
    etapes: [
      "Choisissez une seule tâche qui coûte cher et fixez ce qui prouvera que ça marche.",
      "Transformez vos discussions en un objectif chiffré pour les trois prochains mois.",
      "Nommez un responsable et faites un bilan à 30 jours de votre premier usage.",
      "Comparez vos usages entre eux et mettez vos moyens sur ceux qui rapportent."
    ],
    piege: "Multiplier les outils sans objectif commun." },
  { id: "equipes", icone: "graduation-cap", nom: "Vos équipes et l'IA", lede: "Ce que vos équipes savent déjà faire avec l'IA.",
    questions: [
      { id: "e1", icone: "brain-circuit", question: "Vos équipes utilisent-elles déjà l'IA au travail ?",
        reponses: ["Pas du tout", "Quelques-uns, chacun de son côté", "Régulièrement, sans cadre", "Avec des outils fournis par l'entreprise"] },
      { id: "e2", icone: "sparkles", question: "Quel est le niveau de compréhension de l'IA dans vos équipes ?",
        reponses: ["Le sujet reste flou", "Quelques personnes connaissent les bases", "La majorité connaît les bases", "Chacun sait ce que l'IA fait bien et mal"] },
      { id: "e3", icone: "graduation-cap", question: "Comment formez-vous vos équipes à l'IA ?",
        reponses: ["Aucune formation", "Chacun apprend seul", "Des ateliers ponctuels", "Un parcours suivi"] }
    ],
    etapes: [
      "Organisez une heure de démonstration pour montrer ce que l'IA fait bien, et ce qu'elle fait mal.",
      "Rassemblez les bonnes pratiques de ceux qui utilisent déjà l'IA et partagez-les chaque mois.",
      "Formez chaque équipe sur ses propres tâches, avec ses propres exemples.",
      "Mesurez les compétences par poste et ajustez la formation à ce qui coince."
    ],
    piege: "Laisser chacun apprendre seul et refaire les mêmes erreurs." },
  { id: "donnees", icone: "database", nom: "Vos données et vos accès", lede: "Où vivent vos informations, et qui y a accès.",
    lieux: true,
    questions: [
      { id: "d1", icone: "folder-search", question: "Dans quel état sont vos informations ?",
        reponses: ["On ne sait pas toujours où les trouver", "Accessibles, mais éparpillées", "Les principales sont rangées", "Fiables et tenues à jour"] },
      { id: "wa", icone: "message-circle", question: "Quelle place prend WhatsApp dans le travail ?", horsNote: true,
        reponses: ["Pas du tout", "Un peu", "Beaucoup", "Tout passe par WhatsApp"] },
      { id: "d2", icone: "key-round", question: "Comment gérez-vous les accès aux outils et aux informations ?",
        reponses: ["Sans règle", "Chacun fait attention de son côté", "Un compte et des droits par personne", "Des accès revus régulièrement"] }
    ],
    etapes: [
      "Listez où vivent vos informations clés et ce qui ne doit jamais sortir de l'entreprise.",
      "Donnez un responsable à chaque source importante (clients, ventes, factures).",
      "Vérifiez la qualité de vos sources et revoyez les droits d'accès chaque trimestre.",
      "Auditez vos sources, vos accès et vos coûts, et gardez la main sur vos données."
    ],
    piege: "Automatiser à partir d'informations incomplètes." },
  { id: "organisation", icone: "shield-check", nom: "Organisation et confiance", lede: "Qui porte le projet, et qui garde la main.",
    questions: [
      { id: "o1", icone: "workflow", question: "Vos façons de faire sont-elles écrites quelque part ?",
        reponses: ["Dans la tête des gens", "En partie, souvent périmées", "Les étapes principales", "Oui, et tout le monde les applique"] },
      { id: "o2", icone: "flag", question: "Qui porterait le projet chez vous ?",
        reponses: ["Personne pour l'instant", "Quelques volontaires", "Un responsable désigné", "La direction, avec un budget"] },
      { id: "o3", icone: "user-check", question: "Qui valide un document avant qu'il parte chez un client ?",
        reponses: ["Personne de précis", "Chacun relit à sa façon", "Un responsable par type de document", "Un circuit de validation écrit"] }
    ],
    etapes: [
      "Nommez une personne qui porte le projet et répond aux questions des équipes.",
      "Écrivez les étapes de votre tâche prioritaire : c'est le mode d'emploi de votre équipe d'Experts.",
      "Fixez ce qui doit être validé par un humain avant de partir, document par document.",
      "Mesurez l'adoption, écoutez les équipes et ajustez les rôles à partir de leurs retours."
    ],
    piege: "Dépendre de deux ou trois volontaires impossibles à remplacer." }
];
})();
