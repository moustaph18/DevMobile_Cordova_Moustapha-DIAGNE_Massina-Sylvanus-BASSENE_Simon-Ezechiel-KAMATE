# DevMobile Cordova — Projet M2GLSI

Ce dépôt regroupe **trois applications mobiles** développées avec **Apache Cordova** dans le cadre du module de Développement Mobile du Master 2 GLSI (ESP / DGI).

| Application | Description | Technologie clé |
|-------------|-------------|-----------------|
| **MyApp** | Calculateur d'IMC (Indice de Masse Corporelle) | HTML / CSS / JavaScript |
| **Contactel** | Gestionnaire de contacts du téléphone | `cordova-plugin-contacts` + jQuery Mobile |
| **SenTasks** | Liste de tâches avec gestes tactiles | jQuery Mobile (swipe, onglets) |

---

## 👥 Auteurs

- **Moustapha DIAGNE**
- **Massina Sylvanus BASSENE**
- **Simon Ezechiele KAMATE**

> M2GLSI

---

## 🧰 Prérequis

Avant de lancer les applications, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (LTS recommandé)
- Apache Cordova : `npm install -g cordova`
- Le SDK Android et un émulateur (ou un appareil physique en mode développeur)
- La virtualisation activée dans le BIOS (pour l'émulateur)

Vérifiez votre environnement avec :

```bash
cordova requirements
```

---

## 🚀 Installation et lancement

Les étapes sont identiques pour les trois projets. Placez-vous dans le dossier de l'application souhaitée (`MyApp`, `contactel` ou `sentaks`) :

```bash
# 1. Se déplacer dans le projet
cd contactel

# 2. Ajouter la plateforme Android
cordova platform add android

# 3. Installer les dépendances / plugins
cordova prepare

# 4. Lancer sur l'émulateur ou l'appareil
cordova run android
```

> 💡 Pour tester rapidement dans un navigateur (sans plugins natifs) :
> `cordova platform add browser && cordova run browser`

---

## 📱 Présentation des applications

### 1. MyApp — Calculateur d'IMC

Application simple qui calcule l'Indice de Masse Corporelle à partir du poids (kg) et de la taille (m), puis affiche une interprétation avec un code couleur.

**Fonctionnalités :**
- Saisie du poids et de la taille
- Calcul automatique de l'IMC
- Interprétation : dénutrition, maigreur, corpulence normale, surpoids, obésité (modérée, sévère, massive)
- Indicateur visuel coloré selon la catégorie

**Structure :**
```
MyApp/www/
├── index.html   # Formulaire de saisie
├── css/index.css
└── js/index.js  # Fonction CalculerIMC()
```

---

### 2. Contactel — Gestionnaire de contacts

Application qui lit les contacts du téléphone via le plugin `cordova-plugin-contacts` et les affiche dans une interface jQuery Mobile.

**Fonctionnalités :**
- Liste des contacts (nom + numéro de téléphone)
- Page de détails d'un contact (numéro, email, adresse)
- Barre de recherche
- Navigation entre la page d'accueil et la page de détails

**Plugin requis :**
```bash
cordova plugin add cordova-plugin-contacts
```

> ⚠️ Sur Android, l'application demande la **permission d'accès aux contacts** au premier lancement.

**Structure :**
```
contactel/www/
├── index.html   # Liste + page détails
├── css/index.css
└── js/index.js  # loadContacts(), showContacts(), showDetails()
```

---

### 3. SenTasks — Liste de tâches

Gestionnaire de tâches avec interactions tactiles, organisé en deux onglets.

**Fonctionnalités :**
- Ajout d'une tâche
- **Swipe** (glisser) pour déplacer une tâche entre « En cours » et « Terminées »
- Onglets de navigation (⏳ En cours / ✅ Terminées)
- Réinitialisation de la liste

**Structure :**
```
sentaks/www/
├── index.html   # Formulaire + onglets + listes
├── css/index.css
└── js/index.js  # AjouterTache(), SupprimerTache()
```

---

## 🛠️ Technologies utilisées

- **Apache Cordova** — framework de développement mobile hybride
- **JavaScript** — logique applicative
- **jQuery Mobile 1.4.5** — interface utilisateur mobile
- **HTML5 / CSS3** — structure et style
- **Android** — plateforme cible

---

## 📂 Structure du dépôt

```
.
├── contactel/   # Gestionnaire de contacts
├── MyApp/       # Calculateur d'IMC
└── sentaks/     # Liste de tâches
```

---

## 📄 Licence

Projet réalisé à des fins pédagogiques — M2GLSI, Mai 2026.
