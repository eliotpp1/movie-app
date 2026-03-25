# 🎬 Movie App

Une application web pour gérer et consulter des films, avec affichage des posters, notes, résumés et possibilité d’ajouter, modifier ou supprimer des films. (Projet docker)

---

## 🔧 Stack Technique

- **Frontend** : Next.js + React + Tailwind CSS
- **Backend** : Node.js + Express.js
- **Base de données** : MySQL (Docker)
- **Containerisation** : Docker & Docker Compose

---

## 🏗️ Architecture

├─ backend/ # API Node.js + MySQL
│ └─ index.js # Routes CRUD pour les films
├─ frontend/ # Frontend React + Next.js
│ ├─ app/ # Pages et composants
│ └─ public/ # Assets (images, logos)
├─ database/ # Scripts d'initialisation MySQL
├─ docker-compose.yml # Lancement des containers (frontend, backend, db)
├─ .env # Variables d'environnement
└─ README.md

---

## ⚡ Fonctionnalités

- Ajouter un film avec titre, note, résumé, review et poster
- Modifier ou supprimer un film
- Affichage des films avec posters en **UI moderne Tailwind**
- Note limitée à 10, paliers de 0,5
- Possibilité de filtrer les films par titre, note ou autre critère

---

## 🚀 Installation & Lancement

1. Cloner le projet :

```bash
git clone https://github.com/eliotpp1/movie-app.git
cd movie-app
```

2. Copier le fichier .env.example en .env et renseigner vos variables :

```bash
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=movies_db

DB_HOST=database
DB_USER=root
DB_PASSWORD=root
DB_NAME=movies_db
```

3. Lancer Docker Compose :

```bash
docker-compose up --build
```

Frontend : http://localhost:3000
Backend API : http://localhost:3001
MySQL : port 3306

4. Installer les dépendances frontend si nécessaire :

```bash
cd frontend
npm install
```
