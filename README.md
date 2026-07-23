# momenta-generateur-lettre

**Prototype de démo** — générateur de lettre personnalisée pour faire financer le parcours Momenta par son employeur. À montrer à MC pour arbitrer entre cette approche et la [page simple](https://davidgbass.github.io/momenta-lettre-employeur/).

## Ce que ça fait

Huit questions à un tap, puis un écran de trois champs, puis une lettre assemblée à partir des réponses. Copier, imprimer en PDF, ou copier un bloc de contexte à coller dans ChatGPT ou Claude pour la réécrire dans ses mots.

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

## Ce qui n'y est pas

**Aucune collecte de données.** Rien ne quitte le navigateur, aucun appel réseau sauf la police Montserrat. C'est une démo : la capture de courriel (vers GoHighLevel, avec double consentement Loi 25 / anti-pourriel, après la génération de la lettre et jamais avant) reste à décider.

**Les secteurs sans données réelles.** Le wiki n'a de munitions solides que pour le juridique. La finance reçoit un argument fondé mais général ; les quatre autres secteurs reçoivent la donnée canadienne. Rien n'est inventé, mais la promesse de spécificité sectorielle n'est tenue que pour un secteur sur sept.

## À trancher avant tout usage réel

1. **CRHA** — présent dans chaque lettre générée. La contradiction du site (header vs FAQ) n'est pas réglée. Sur un générateur, c'est une erreur répliquée à l'échelle plutôt qu'une ligne à corriger.
2. **Typographie** — Baga Bold absente, tout est en Montserrat.
3. **Prix** — 1 495 $ retenu ; le wiki en porte encore quatre.
4. **Volume de contenu à maintenir** — chaque cohorte change les dates, les formatrices et possiblement le prix. Environ 25 blocs de texte à réviser à chaque fois.

## Source

Wiki Momenta, `Ce-que-je-vends/Marketing/Trousse-financement-employeur.md`. Charte : `Boite-a-outils/Identite-visuelle.md`. Angle leadership : recadrage MC du 2026-07-23, convergent avec une répondante du sondage post-cohorte printemps 2026.
