# GROWLI
New repository for GROWLI
"scripts": {
  "start": "node --watch ./backend/server/server.js",
  "devStart": "node --watch ./backend/server/server.js",
  "prisma:build": "prisma generate && tsc -p tsconfig.json",
  "build": "npm run prisma:build",
  "postinstall": "npm run prisma:build"
}