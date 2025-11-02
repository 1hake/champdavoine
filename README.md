# champdavoine

Portfolio personnel - React / Next.js

## Installation

```bash
npm install
npm run dev
```

## Déploiement

Docker Swarm:
```bash
docker build -t thegobc/champdavoine:latest .
docker stack deploy -c docker-compose.swarm.yml champdavoine
```

Local:
```bash
docker-compose up --build
```
