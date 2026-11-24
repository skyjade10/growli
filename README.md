# GROWLI
New repository for GROWLI
"scripts": {
  "start": "node --watch ./backend/server/server.js",
  "devStart": "node --watch ./backend/server/server.js",
  "prisma:build": "prisma generate && tsc -p tsconfig.json",
  "build": "npm run prisma:build",
  "postinstall": "npm run prisma:build"
}

//For testing data
// admin@growli.test
// john@growli.test
// mary@growli.test
// peter@growli.test
// superuser@growli.test
// sky@gmail.com
// zambwe361@gmail.com
// zambwe@gmail.com