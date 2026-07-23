/* Contrôle de clarté référentielle.
   Un libellé doit tenir debout tout seul : pas de pronom ni de démonstratif
   qui renvoie à quelque chose qui n'est écrit nulle part. « Ce n'est
   toujours pas réglé » — réglé quoi ? */
const M = require('./logique.js');

const FLOUS = [
  {rx:/\bl[àa]-dedans\b/i,                       quoi:"« là-dedans » — dans quoi ?"},
  {rx:/\bla m[êe]me chose\b/i,                   quoi:"« la même chose » — quelle chose ?"},
  {rx:/\btout [çc]a\b/i,                         quoi:"« tout ça » — tout quoi ?"},
  {rx:/\bce n'est (toujours )?pas r[ée]gl[ée]\b/i, quoi:"« ce n'est pas réglé » — quoi n'est pas réglé ?"},
  {rx:/\bce n'est pas pass[ée]\b/i,              quoi:"« ce n'est pas passé » — quoi ?"},
  {rx:/^[ÇC]a ne va (toujours )?pas/i,           quoi:"« ça ne va pas » en ouverture — quoi ne va pas ?"},
  {rx:/\bet je ne sais pas comment\.?$/i,        quoi:"« je ne sais pas comment » en fin — comment quoi ?"},
  {rx:/\bc'est [çc]a\b/i,                        quoi:"« c'est ça » — quoi ?"},
  {rx:/\bde [çc]a\b/i,                           quoi:"« de ça » — de quoi ?"}
];

let problemes = [];

function verifier(ou, texte){
  if (!texte) return;
  FLOUS.forEach(f => { if (f.rx.test(texte)) problemes.push(ou + " → " + f.quoi + "\n     « " + texte + " »"); });
}

Object.keys(M.LIBELLES).forEach(k => {
  verifier("LIBELLES." + k + ".t",    M.LIBELLES[k].t);
  verifier("LIBELLES." + k + ".sous", M.LIBELLES[k].sous);
});
Object.keys(M.ENJEU).forEach(k => {
  verifier("ENJEU." + k + ".veut",      M.ENJEU[k].veut);
  verifier("ENJEU." + k + ".employeur", M.ENJEU[k].employeur);
});
M.QUESTIONS.forEach(q => {
  verifier("QUESTION." + q.cle + ".q",    q.q);
  verifier("QUESTION." + q.cle + ".aide", q.aide);
  const liste = (typeof q.options === 'function') ? [] : q.options;
  liste.forEach(o => {
    verifier("QUESTION." + q.cle + "." + o.v + ".t",    o.t);
    verifier("QUESTION." + q.cle + "." + o.v + ".sous", o.sous);
  });
});

/* Chaque libellé doit aussi contenir un nom ou un verbe porteur — pas
   seulement des pronoms. Contrôle grossier : au moins 4 mots. */
Object.keys(M.LIBELLES).forEach(k => {
  ['t','sous'].forEach(champ => {
    const v = M.LIBELLES[k][champ];
    if (v && v.split(/\s+/).length < 4)
      problemes.push("LIBELLES." + k + "." + champ + " → trop court pour être clair\n     « " + v + " »");
  });
});

if (problemes.length){
  console.log("FORMULATIONS FLOUES : " + problemes.length + "\n");
  problemes.forEach(p => console.log("  • " + p + "\n"));
  process.exit(1);
}
console.log("Clarté référentielle : aucun renvoi sans antécédent.");
