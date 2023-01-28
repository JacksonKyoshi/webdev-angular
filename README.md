# webdev-angular

PROJET ANGULAR TO-DO-LIST ===============================================

Le but de ce projet est de réaliser une to-do-list à l'aide de NodeJS et Angular, et d'une base de données MongoDB.

FONCTIONNEMENT DU SITE : 

Tout d'abord, pour lancer le site, il faut utiliser la commande "ng serve" dans le répertoire frontend, ainsi que la commande "node app.js" dans la partie backend.

Il sufira ensuite d'aller à l'adresse: "http://localhost:4200"


1) Login/Register :
L'utilisateur doit tout d'abord créer un profil (nom et mot de passe) sur la page Register puis s'identifier sur la page Login.
Il aura, grâce à ce système d'authentification, accès à ses tâches uniquement.
Si l'utilisateur essaie de se connecter à un compte qui n'existe pas sur la page Login, un message d'erreur apparait.
Si l'utilisateur essaie de créer un compte avec un nom d'utilisateur déjà pris sur la page Register, là aussi, un message d'erreur apparait.

2) Ajouter une liste de tâche :
Lorsque l'utilisateur accède à sa to-do-list pour la première fois, elle est vide.
Il doit donc, dans un premier temps, créer une liste de tâche.
Il peut également supprimer ses listes de tâches, ce qui aura pour effet de supprimer les tâches contenues dans ces listes.

3) Ajouter une tâche :
Ce faisant, l'utilisateur peut maintenant ajouter des tâches dans ses listes de tâches. Il peut egalement les supprimer, ainsi que les déplacer de listes en listes grâces au boutons UP et DOWN représentés par des flèches.

4) Logout :
L'utilisateur peut se logout de la to-do-list à l'aide du bouton éponyme, il sera donc renvoyé sur la page logout.

5) mot de passe oublié : (ajouté après présentation)
L'utilisateur peut cliquer sur mot de passe oublé dans la page login, où il sera invité à rentrer son nom d'utilisateur afin de lui envoyer son mot de passe.
