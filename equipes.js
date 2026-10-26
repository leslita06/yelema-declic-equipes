// Le Déclic version équipes (25/10/26, Leslie msg 59640 et 59643) : une fonction, son équipe de quatre Experts,
// les tâches pénibles rattachées à chaque Expert, et les questions de maturité rangées par section.
// Équipes et rôles : projects/yelema-site-v2/sections_abc.py (EQUIPES), portraits : site-proche/images/experts/.
(function(){
const D = window.DECLIC;

// Libellés courts des heures, pour tenir sur une ligne au téléphone.
const COURT = { t1: '< 1 h', t2: '1-3 h', t3: '3-5 h', t4: '5-10 h', t5: '10 h +' };
D.temps.forEach(x => x.court = COURT[x.id] || x.label);

D.fonctions = [
  {
    id: "commercial", icone: "trending-up", nom: "Commercial et ventes", titre: "De la cible à la vente signée",
    outils: ["WhatsApp", "Excel", "Gmail", "Outlook", "HubSpot", "Sage", "Odoo", "LinkedIn", "Google Sheets", "Salesforce", "Pipedrive", "Zoho"],
    metier: [
      { id: "q1", icone: "file-text", question: "Combien de devis envoyez-vous par mois ?", options: ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"] },
      { id: "q2", icone: "users", question: "Combien de commerciaux dans l'équipe ?", options: ["Aucun", "1 à 3", "4 à 10", "Plus de 10"] },
      { id: "q3", icone: "user-search", question: "Combien de nouveaux prospects par mois ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] }
    ],
    equipe: [
      { id: "seydou", icone: "radar", prenom: "Seydou", role: "Veille commerciale", photo: "av-seydou-sq.jpg" },
      { id: "kouassi", icone: "send", prenom: "Kouassi", role: "Prospection et relances", photo: "av-kouassi-sq.jpg" },
      { id: "sena", icone: "file-pen-line", prenom: "Sèna", role: "Qualification et propositions", photo: "av-sena-sq.jpg" },
      { id: "aminata", icone: "chart-line", prenom: "Aminata", role: "Suivi du pipeline", photo: "av-aminata-sq.jpg" }
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
      { id: "c11", par: "aminata", label: "Suivre les commerciaux terrain", fait: "Aminata recueille les comptes rendus de visite, par écrit ou par vocal, et met le suivi à jour." },
      { id: "c12", par: "seydou", label: "Construire et nettoyer le fichier de prospects", fait: "Seydou complète le fichier : bons contacts, bons numéros, doublons retirés." },
      { id: "c13", par: "seydou", label: "Suivre les prix et les offres des concurrents", fait: "Seydou relève les prix et les offres de vos concurrents et vous signale ce qui bouge." },
      { id: "c14", par: "seydou", label: "Préparer une fiche sur le client avant chaque rendez-vous", fait: "Seydou résume le prospect sur une page : activité, chiffres, actualité et interlocuteurs." },
      { id: "c15", par: "kouassi", label: "Écrire aux contacts rencontrés en salon ou en événement", fait: "Kouassi écrit à chaque contact dans les 48 heures, avec un message personnalisé." },
      { id: "c16", par: "kouassi", label: "Programmer les rendez-vous commerciaux", fait: "Kouassi propose les créneaux, confirme le rendez-vous et envoie le rappel la veille." },
      { id: "c17", par: "sena", label: "Adapter la présentation commerciale à chaque client", fait: "Sèna adapte votre présentation au secteur du client, à ses enjeux et à vos références proches." },
      { id: "c18", par: "sena", label: "Rédiger les bons de commande et les contrats", fait: "Sèna prépare le bon de commande ou le contrat depuis vos modèles, prêt à signer après votre relecture." },
      { id: "c19", par: "aminata", label: "Préparer les prévisions de ventes du mois", fait: "Aminata calcule les ventes probables du mois à partir du pipeline et vous signale l'écart avec l'objectif." },
      { id: "c20", par: "aminata", label: "Suivre les objectifs et les commissions des commerciaux", fait: "Aminata suit chaque commercial face à son objectif et prépare le calcul des commissions." }
    ]
  },
  {
    id: "marketing", icone: "megaphone", nom: "Marketing et communication", titre: "De la stratégie à la campagne mesurée",
    outils: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Canva", "WhatsApp", "Google Drive", "YouTube", "Mailchimp", "Meta Business"],
    metier: [
      { id: "q1", icone: "megaphone", question: "Combien de publications par semaine ?", options: ["0 à 2", "3 à 7", "8 à 20", "Plus de 20"] },
      { id: "q2", icone: "target", question: "Combien de campagnes sponsorisées par mois ?", options: ["Aucune", "1 ou 2", "3 à 5", "Plus de 5"] },
      { id: "q3", icone: "globe", question: "Sur combien de réseaux êtes-vous actifs ?", options: ["Un seul", "2 ou 3", "4 ou 5", "Plus de 5"] }
    ],
    equipe: [
      { id: "aya", icone: "lightbulb", prenom: "Aya", role: "Stratégie de contenu", photo: "av-aya-sq.jpg" },
      { id: "fatima", icone: "pen-tool", prenom: "Fatima", role: "Contenus et réseaux", photo: "av-fatima-sq.jpg" },
      { id: "koffi", icone: "palette", prenom: "Koffi", role: "Design", photo: "av-koffi-sq.jpg" },
      { id: "yao", icone: "chart-column", prenom: "Yao", role: "Campagnes et résultats", photo: "av-yao-sq.jpg" }
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
      { id: "m11", par: "yao", label: "Suivre les influenceurs et partenaires", fait: "Yao prépare les briefs, suit les publications et mesure les retombées." },
      { id: "m12", par: "aya", label: "Définir les messages et les cibles", fait: "Aya formule vos messages cible par cible et vous propose les angles qui parlent à chacune." },
      { id: "m13", par: "aya", label: "Rédiger les briefs pour l'agence et les prestataires", fait: "Aya rédige le brief complet : objectif, cible, message, livrables et délais." },
      { id: "m14", par: "fatima", label: "Écrire les scripts des vidéos courtes", fait: "Fatima écrit les scripts de vos vidéos TikTok et Reels, avec une accroche dans les trois premières secondes." },
      { id: "m15", par: "fatima", label: "Rédiger les communiqués et les articles", fait: "Fatima rédige communiqués et articles de blog, prêts à relire." },
      { id: "m16", par: "koffi", label: "Décliner les visuels dans tous les formats", fait: "Koffi adapte chaque visuel au format de chaque réseau, de la story à la bannière." },
      { id: "m17", par: "koffi", label: "Préparer affiches, flyers et kakémonos", fait: "Koffi prépare les fichiers d'impression aux bonnes dimensions, prêts pour l'imprimeur." },
      { id: "m18", par: "koffi", label: "Tenir la charte graphique et la banque d'images", fait: "Koffi range logos, photos et modèles, et vérifie que tout respecte votre charte." },
      { id: "m19", par: "yao", label: "Faire le bilan mensuel du marketing", fait: "Yao prépare le bilan du mois : portée, contacts, coûts, et ce qui a rapporté." },
      { id: "m20", par: "yao", label: "Relier les contacts générés aux ventes", fait: "Yao relie chaque contact à sa campagne et vous dit lesquelles amènent des clients." }
    ]
  },
  {
    id: "rh", icone: "users", nom: "RH et talents", titre: "Du recrutement à l'équipe qui reste",
    outils: ["Excel", "Google Sheets", "Gmail", "Outlook", "WhatsApp", "LinkedIn", "Sage", "Sage Paie", "Teams", "SAP"],
    metier: [
      { id: "q1", icone: "users", question: "Combien de salariés gérez-vous ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] },
      { id: "q2", icone: "user-search", question: "Combien de recrutements par an ?", options: ["Moins de 5", "5 à 20", "20 à 100", "Plus de 100"] },
      { id: "q3", icone: "files", question: "Combien de CV reçus par offre ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] }
    ],
    equipe: [
      { id: "adjoua", icone: "user-search", prenom: "Adjoua", role: "Recrutement", photo: "av-adjoua-sq.jpg" },
      { id: "fatou", icone: "receipt", prenom: "Fatou", role: "RH et paie", photo: "av-fatou-sq.jpg" },
      { id: "lamine", icone: "graduation-cap", prenom: "Lamine", role: "Onboarding et formation", photo: "av-lamine-sq.jpg" },
      { id: "cheikh", icone: "heart-handshake", prenom: "Cheikh", role: "Climat social", photo: "av-cheikh-sq.jpg" }
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
      { id: "r11", par: "cheikh", label: "Repérer les tensions et les départs qui se préparent", fait: "Cheikh écoute les équipes et vous signale ce qui fait partir les gens, avant qu'ils partent." },
      { id: "r12", par: "adjoua", label: "Préparer les tests et les grilles d'entretien", fait: "Adjoua prépare les questions et la grille de notation de chaque poste." },
      { id: "r13", par: "adjoua", label: "Répondre aux candidats non retenus", fait: "Adjoua répond à chaque candidat avec courtoisie, pour garder une bonne image employeur." },
      { id: "r14", par: "fatou", label: "Suivre les congés et les absences", fait: "Fatou tient les soldes de congés, enregistre les absences et prévient quand un planning coince." },
      { id: "r15", par: "lamine", label: "Tenir le livret d'accueil et les procédures", fait: "Lamine tient à jour le livret d'accueil et les procédures de chaque poste." },
      { id: "r16", par: "lamine", label: "Suivre les périodes d'essai", fait: "Lamine programme les points d'étape et vous rappelle chaque fin d'essai à temps." },
      { id: "r17", par: "lamine", label: "Évaluer les formations suivies", fait: "Lamine recueille l'avis des participants et mesure ce qui a changé après la formation." },
      { id: "r18", par: "cheikh", label: "Mener les enquêtes auprès des salariés", fait: "Cheikh prépare l'enquête, recueille les réponses anonymes et vous résume ce qui ressort." },
      { id: "r19", par: "cheikh", label: "Préparer les réunions avec les délégués du personnel", fait: "Cheikh prépare l'ordre du jour, les réponses aux questions et le compte rendu." },
      { id: "r20", par: "cheikh", label: "Préparer les courriers RH sensibles", fait: "Cheikh prépare avertissements et courriers de rupture selon le Code du travail, et vous relisez avant tout envoi." }
    ]
  },
  {
    id: "finance", icone: "wallet", nom: "Finance et comptabilité", titre: "De la facture au chiffre fiable",
    outils: ["Sage", "Excel", "Perfecto", "Odoo", "SAP", "QuickBooks", "Google Sheets", "Power BI", "Gmail", "Wave", "Orange Money", "MTN MoMo"],
    metier: [
      { id: "q1", icone: "receipt-text", question: "Combien de factures traitez-vous par mois ?", options: ["Moins de 50", "50 à 200", "200 à 1 000", "Plus de 1 000"] },
      { id: "q2", icone: "banknote", question: "Combien de comptes bancaires et mobile money ?", options: ["1 ou 2", "3 à 5", "6 à 10", "Plus de 10"] },
      { id: "q3", icone: "shopping-cart", question: "Combien de fournisseurs actifs ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] }
    ],
    equipe: [
      { id: "kadiatou", icone: "receipt-text", prenom: "Kadiatou", role: "Factures", photo: "av-kadiatou-sq.jpg" },
      { id: "daouda", icone: "banknote", prenom: "Daouda", role: "Trésorerie et recouvrement", photo: "av-daouda-sq.jpg" },
      { id: "rokia", icone: "shopping-cart", prenom: "Rokia", role: "Dépenses", photo: "av-rokia-sq.jpg" },
      { id: "mamadou", icone: "calculator", prenom: "Mamadou", role: "Comptabilité et contrôle de gestion", photo: "av-mamadou-sq.jpg" }
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
      { id: "f11", par: "mamadou", label: "Préparer les déclarations fiscales", fait: "Mamadou prépare les éléments des déclarations et vérifie les montants." },
      { id: "f12", par: "kadiatou", label: "Émettre les factures clients", fait: "Kadiatou prépare les factures depuis les bons de livraison et les envoie après votre accord." },
      { id: "f13", par: "kadiatou", label: "Classer et archiver les pièces", fait: "Kadiatou range chaque pièce au bon endroit et la retrouve en quelques secondes." },
      { id: "f14", par: "kadiatou", label: "Réclamer les factures fournisseurs manquantes", fait: "Kadiatou réclame les factures et les pièces manquantes avant la clôture." },
      { id: "f15", par: "daouda", label: "Pointer les encaissements banque et mobile money", fait: "Daouda pointe chaque encaissement et l'associe à la bonne facture." },
      { id: "f16", par: "daouda", label: "Préparer les dossiers de crédit et de découvert", fait: "Daouda prépare les tableaux et les pièces que demande votre banque." },
      { id: "f17", par: "rokia", label: "Comparer les devis fournisseurs", fait: "Rokia compare les devis à qualité égale et vous propose le meilleur choix." },
      { id: "f18", par: "rokia", label: "Suivre les budgets par service", fait: "Rokia compare chaque mois les dépenses au budget et vous signale les dépassements." },
      { id: "f19", par: "rokia", label: "Tenir la caisse et les petites dépenses", fait: "Rokia tient le brouillard de caisse et vérifie chaque justificatif." },
      { id: "f20", par: "mamadou", label: "Préparer le tableau de bord de la direction", fait: "Mamadou prépare chaque mois vos indicateurs clés et explique ce qui a bougé." }
    ]
  },
  {
    id: "support", icone: "headset", nom: "Service client et fidélisation", titre: "De la demande au client satisfait",
    outils: ["WhatsApp", "Telegram", "Gmail", "Outlook", "Facebook", "Instagram", "Excel", "HubSpot", "Zendesk", "Freshdesk", "Shopify"],
    metier: [
      { id: "q1", icone: "message-circle", question: "Combien de demandes clients par jour ?", options: ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"] },
      { id: "q2", icone: "headset", question: "Combien de personnes répondent aux clients ?", options: ["Aucune dédiée", "1 à 3", "4 à 10", "Plus de 10"] },
      { id: "q3", icone: "layers", question: "Sur combien de canaux vos clients écrivent-ils ?", options: ["Un seul", "2 ou 3", "4 ou 5", "Plus de 5"] }
    ],
    equipe: [
      { id: "awa", icone: "message-circle", prenom: "Awa", role: "Réponse aux clients", photo: "av-awa-sq.jpg" },
      { id: "salif", icone: "truck", prenom: "Salif", role: "Réclamations et livraisons", photo: "av-salif-sq.jpg" },
      { id: "akissi", icone: "smile", prenom: "Akissi", role: "Satisfaction et fidélisation", photo: "av-akissi-sq.jpg" },
      { id: "ousmane", icone: "book-open", prenom: "Ousmane", role: "Qualité et base de réponses", photo: "av-ousmane-sq.jpg" }
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
      { id: "s10", par: "ousmane", label: "Faire le point des demandes non résolues", fait: "Chaque soir, Ousmane liste les demandes en attente et qui doit répondre." },
      { id: "s11", par: "awa", label: "Orienter les demandes vers le bon service", fait: "Awa comprend la demande et la transmet à la bonne personne, avec tout le contexte." },
      { id: "s12", par: "awa", label: "Répondre sur tous les canaux à la fois", fait: "Awa répond là où le client écrit, WhatsApp, Facebook ou email, avec la même qualité partout." },
      { id: "s13", par: "salif", label: "Organiser les retours et les échanges", fait: "Salif vérifie la demande selon vos règles, organise le retour et informe le client." },
      { id: "s14", par: "salif", label: "Suivre les livreurs et les retards", fait: "Salif suit les livraisons en cours et prévient le client avant qu'il s'inquiète." },
      { id: "s15", par: "akissi", label: "Relancer les commandes abandonnées", fait: "Akissi relance les clients qui n'ont pas finalisé, avec un message simple." },
      { id: "s16", par: "akissi", label: "Animer le programme de fidélité", fait: "Akissi suit les points, rappelle aux clients leurs avantages et propose les offres." },
      { id: "s17", par: "akissi", label: "Souhaiter anniversaires et fêtes aux clients", fait: "Akissi envoie le bon message au bon moment : anniversaire, Tabaski, Noël, fin d'année." },
      { id: "s18", par: "ousmane", label: "Contrôler la qualité des réponses de l'équipe", fait: "Ousmane relit un échantillon de réponses et signale ce qui doit être corrigé." },
      { id: "s19", par: "ousmane", label: "Analyser les motifs de plainte", fait: "Ousmane classe les plaintes par motif et vous montre ce qui revient le plus." },
      { id: "s20", par: "ousmane", label: "Former les nouveaux conseillers aux réponses types", fait: "Ousmane prépare les fiches de réponse et les cas pratiques des nouveaux conseillers." }
    ]
  },
  {
    id: "investissement", icone: "hand-coins", nom: "Investissement et portefeuille", titre: "Du dossier reçu au portefeuille suivi",
    outils: ["Excel", "Gmail", "Outlook", "Notion", "Google Drive", "DocuSign", "LinkedIn", "Power BI"],
    metier: [
      { id: "q1", icone: "files", question: "Combien de dossiers recevez-vous par mois ?", options: ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"] },
      { id: "q2", icone: "chart-pie", question: "Combien de participations suivez-vous ?", options: ["Moins de 5", "5 à 15", "15 à 40", "Plus de 40"] },
      { id: "q3", icone: "calendar-check", question: "Combien de comités d'investissement par an ?", options: ["Moins de 4", "4 à 12", "12 à 24", "Plus de 24"] }
    ],
    equipe: [
      { id: "fifame", icone: "search", prenom: "Fifamè", role: "Sourcing des dossiers", photo: "av-fifame-sq.jpg" },
      { id: "alioune", icone: "microscope", prenom: "Alioune", role: "Analyse et due diligence", photo: "av-alioune-sq.jpg" },
      { id: "ibrahim", icone: "scale", prenom: "Ibrahim", role: "Pactes et juridique", photo: "av-ibrahim-sq.jpg" },
      { id: "nadia", icone: "chart-pie", prenom: "Nadia", role: "Suivi du portefeuille", photo: "av-nadia-sq.jpg" }
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
      { id: "i10", par: "nadia", label: "Préparer les rapports aux investisseurs", fait: "Nadia prépare le rapport trimestriel à vos investisseurs." },
      { id: "i11", par: "fifame", label: "Préparer le premier appel avec les fondateurs", fait: "Fifamè prépare la fiche du dossier et les questions du premier appel." },
      { id: "i12", par: "fifame", label: "Tenir la base des dossiers et des contacts", fait: "Fifamè tient la base à jour : statut, prochaine étape, dernier échange." },
      { id: "i13", par: "alioune", label: "Faire les études de marché et de concurrence", fait: "Alioune dimensionne le marché et compare l'entreprise à ses concurrents de la zone." },
      { id: "i14", par: "alioune", label: "Comparer les valorisations aux opérations récentes", fait: "Alioune rassemble les opérations comparables et en tire une fourchette de valorisation." },
      { id: "i15", par: "ibrahim", label: "Suivre les conditions avant décaissement", fait: "Ibrahim tient la liste des conditions et vous dit ce qui manque avant de décaisser." },
      { id: "i16", par: "ibrahim", label: "Vérifier la conformité KYC et anti-blanchiment", fait: "Ibrahim vérifie les pièces, les bénéficiaires effectifs et les listes de sanctions." },
      { id: "i17", par: "ibrahim", label: "Tenir le registre des documents juridiques", fait: "Ibrahim range statuts, pactes et procès-verbaux, et suit leurs échéances." },
      { id: "i18", par: "nadia", label: "Collecter les reportings des participations", fait: "Nadia réclame les chiffres chaque mois, les vérifie et relance les retardataires." },
      { id: "i19", par: "nadia", label: "Préparer les conseils d'administration", fait: "Nadia prépare le dossier du conseil : chiffres, points d'alerte, questions à poser." },
      { id: "i20", par: "nadia", label: "Calculer la performance du portefeuille", fait: "Nadia calcule la performance de chaque participation et du fonds, prête pour vos rapports." }
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

// Retours de Kirane sur le Déclic (26/10/26, 8 vocaux, Leslie « A » msg 60910) : chaque tâche se mesure
// par sa fréquence, le temps qu'elle prend à chaque fois et le nombre de personnes qui s'en chargent.
// Heures par semaine = fois par semaine x heures à chaque fois x personnes.
(function(){
const D = window.DECLIC;
D.frequences = [
  { id: "jour", label: "Tous les jours", parSemaine: 5 },
  { id: "semaine", label: "Chaque semaine", parSemaine: 1 },
  { id: "mois", label: "Chaque mois", parSemaine: 12 / 52 }
];
D.durees = [
  { id: "d1", label: "Moins de 30 min", heures: 0.25 },
  { id: "d2", label: "30 min à 1 h", heures: 0.75 },
  { id: "d3", label: "1 à 2 h", heures: 1.5 },
  { id: "d4", label: "2 à 4 h", heures: 3 },
  { id: "d5", label: "Plus de 4 h", heures: 6 }
];
D.personnes = [
  { id: "p1", label: "1 personne", n: 1 },
  { id: "p2", label: "2 à 3 personnes", n: 2.5 },
  { id: "p3", label: "4 à 5 personnes", n: 4.5 },
  { id: "p4", label: "6 à 10 personnes", n: 8 },
  { id: "p5", label: "Plus de 10 personnes", n: 12 }
];
// Une fourchette, jamais le salaire réel : une entreprise ne le donne pas au premier contact (vocal 3 de Kirane).
// Sans réponse, le calcul prend 350 000 F, et le rapport le dit.
D.salaires = [
  { id: "s1", label: "Moins de 200 000 F", v: 150000 },
  { id: "s2", label: "200 000 à 400 000 F", v: 300000 },
  { id: "s3", label: "400 000 à 700 000 F", v: 550000 },
  { id: "s4", label: "700 000 F à 1,2 M F", v: 950000 },
  { id: "s5", label: "Plus de 1,2 M F", v: 1500000 },
  { id: "s0", label: "Je préfère ne pas répondre", v: null }
];
D.salaireDefaut = 350000;
D.heuresMois = 173;
D.ias = [
  { label: "ChatGPT", logo: "ia-chatgpt.png" }, { label: "Gemini", logo: "ia-gemini.png" },
  { label: "Copilot", logo: "ia-copilot.png" }, { label: "Claude", logo: "ia-claude.png" },
  { label: "Meta AI", logo: "ia-metaai.png" }, { label: "Le Chat (Mistral)", logo: "ia-mistral.png" },
  { label: "DeepSeek", logo: "ia-deepseek.png" }, { label: "Perplexity", logo: "ia-perplexity.png" }
];
// « Où en est l'IA dans vos priorités » et « Vos équipes et l'IA » ne font plus qu'une rubrique, en chiffres.
// Données et accès, Organisation et confiance : retirées, trop tôt dans la vente (vocaux 6 et 7).
D.sections = [
  { id: "ia", icone: "brain-circuit", nom: "L'IA chez vous", lede: "À quel point vos équipes utilisent l'IA aujourd'hui, et laquelle.",
    questions: [
      { id: "u1", icone: "calendar", question: "À quelle fréquence vos équipes utilisent-elles l'IA ?",
        reponses: ["Jamais", "Quelques fois par mois", "Chaque semaine", "Chaque jour"] },
      { id: "u2", icone: "users", question: "Quelle part de l'équipe s'en sert ?",
        reponses: ["Personne", "Moins d'un quart", "Environ la moitié", "Presque tout le monde"] }
    ],
    etapes: [
      "Organisez une heure de démonstration sur vos propres tâches pour montrer ce que l'IA fait bien, et ce qu'elle fait mal.",
      "Rassemblez les bonnes pratiques de ceux qui utilisent déjà l'IA et partagez-les chaque mois.",
      "Passez des outils grand public à une équipe d'Experts branchée sur vos outils et vos règles.",
      "Mesurez le temps rendu tâche par tâche et mettez vos moyens sur ce qui rapporte."
    ],
    piege: "Laisser chacun utiliser une IA différente, sans règle sur les informations qu'on lui confie." }
];
})();
