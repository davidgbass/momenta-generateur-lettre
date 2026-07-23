# momenta-generateur-lettre

**Prototype de démo** — générateur de lettre personnalisée pour faire financer le parcours Momenta par son employeur. À montrer à MC pour arbitrer entre cette approche et la [page simple](https://davidgbass.github.io/momenta-lettre-employeur/).

## Ce que ça fait

Huit questions, un écran final, puis la lettre assemblée à partir des réponses. Copier, imprimer en PDF, ou copier un bloc de contexte à coller dans l'assistant IA de son choix pour la réécrire dans ses mots.

**« Autre » s'écrit sur place.** Sur six des huit questions, un choix « Autre » se transforme en champ de saisie au clic, curseur dedans. Ce qu'elle écrit entre tel quel dans la lettre, à l'endroit qui correspond à la question. Entrée valide.

**Sélection multiple sur les enjeux seulement.** C'est la seule question où une femme en vit plusieurs à la fois — le wiki documente le trio conciliation × culpabilité × charge mentale. Ailleurs, plusieurs réponses casseraient l'assemblage.

**Un seul écran de formulaire.** Les détails de la lettre et les coordonnées étaient deux formulaires consécutifs ; ils sont fusionnés, calqués sur `momentareseau.com/outils`. La signature se déduit du prénom et du nom.

## Contrôle de clarté

`lint-clarte.js` refuse tout libellé qui renvoie à un antécédent absent — « ce n'est toujours pas réglé » (réglé quoi ?), « là-dedans » (dans quoi ?), « la même chose » (quelle chose ?). Il exige aussi qu'un libellé fasse au moins quatre mots.

Pour l'exécuter, extraire la logique du `<script>` de `index.html` vers `logique.js`, puis `node lint-clarte.js`.

## Ce qui varie dans la lettre

| Question | Effet |
|---|---|
| Où tu en es | L'ouverture — cinq variantes |
| À qui tu écris | Ajoute le paragraphe Loi 27 + loi du 1 % si RH · change la clôture |
| Taille de l'organisation | Active ou retire le levier de la loi du 1 % (seuil : 50 employés) |
| Secteur | Juridique → données ABA · finance → charge de travail et post-partum · autres → donnée canadienne générale |
| Responsabilités de gestion | Trois formulations du 78 % |
| Priorité | Choisit la dimension mesurée mise en avant (cinq possibilités) |
| Soutien ressenti | **Règle le ton** — chaleureux, neutre, ou factuel et non accusatoire |
| Ce que tu demandes | Financement complet · partage du coût · accord pour le temps seulement |
| Format | Courriel avec objet, ou lettre formelle |

Environ 2 000 combinaisons. Tout se génère dans le navigateur.

## La capture de coordonnées

Écran 10, entre les champs et la lettre — au moment où la femme est le plus motivée, jamais avant.

- **Champs** : courriel (requis), organisation (facultatif — c'est la donnée la plus précieuse pour le pipeline B2B).
- **Deux consentements distincts, aucun pré-coché.** Le premier pour recevoir la lettre, le second pour les communications de Momenta. Les fusionner serait attaquable sous la loi anti-pourriel.
- **Le bouton reste inactif** tant que le courriel n'est pas valide et le premier consentement non donné.
- **Un lien « Voir ma lettre sans donner mes coordonnées »**, visible, qui mène directement au résultat. Sous la Loi 25, un consentement obtenu en échange du service est un consentement fragile — et un mur devant le livrable ferait décrocher la moitié des femmes.
- **Avis de collecte en français clair**, à côté des cases : qui recueille, quoi (y compris les réponses au questionnaire), pourquoi, et comment retirer son consentement.

**Rien n'est transmis en démo.** La constante `ENDPOINT` est à `null` et un bandeau discret le dit à l'écran. Pour activer : y mettre l'URL du webhook GoHighLevel, la charge utile est déjà formée (courriel, organisation, les deux consentements, toutes les réponses, la source).

**Les secteurs sans données réelles.** Le wiki n'a de munitions solides que pour le juridique. La finance reçoit un argument fondé mais général ; les quatre autres secteurs reçoivent la donnée canadienne. Rien n'est inventé, mais la promesse de spécificité sectorielle n'est tenue que pour un secteur sur sept.

## À trancher avant tout usage réel

1. **CRHA** — présent dans chaque lettre générée. La contradiction du site (header vs FAQ) n'est pas réglée. Sur un générateur, c'est une erreur répliquée à l'échelle plutôt qu'une ligne à corriger.
2. **Typographie** — Baga Bold absente, tout est en Montserrat.
3. **Prix** — 1 495 $ retenu ; le wiki en porte encore quatre.
4. **Volume de contenu à maintenir** — chaque cohorte change les dates, les formatrices et possiblement le prix. Environ 25 blocs de texte à réviser à chaque fois.

## Source

Wiki Momenta, `Ce-que-je-vends/Marketing/Trousse-financement-employeur.md`. Charte : `Boite-a-outils/Identite-visuelle.md`. Angle leadership : recadrage MC du 2026-07-23, convergent avec une répondante du sondage post-cohorte printemps 2026.
