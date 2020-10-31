# rnday-besancon.fr

Site web pour la promotion de l'évènement organisé par les CMI Informatique de Besançon en 2020
Disponible sur https://rnday-besancon.fr

## Organisation
- Le contenu final du site se trouve dans `docs/`.
- Les **fichiers html à modifier** se trouvent dans `files_to_modify/`.
- Les images sont dans `/docs/images`.

## Dépendances
- [Mustache pour générer le site web](https://mustache.github.io/)
- Minify.js pour réduire la taille des fichiers générés. À installer avec npm.

```
npm i minify -g
```

## Générer le site
- Les informations communes (contenu partagé, balises meta, crédits etc...) se trouvent dans `common.json`
- Les autres pages (sous format `.mustache`) sont à remplir manuellement.
- On peut rajouter dans les fichiers `.mustache` des appels à des variables stockées dans `common.json` avec la syntaxe `{{{object.dans.json}}}`.
- Pour générer toutes les pages dans `docs/`, lancer le `Makefile` depuis la racine.
