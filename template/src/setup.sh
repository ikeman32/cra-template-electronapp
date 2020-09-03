#! /bin/bash

clear

echo "Configuring project to run electronjs!"

npm i && npm i concurrently electron electron-builder wait-on -D && npm audit fix && rm setup.sh

clear

echo "Project configured!"
echo
echo "You may now begin developing your desktop app using react."
echo 
echo "Develop normally as you would with a react app."