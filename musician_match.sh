#!/bin/bash

# Variables
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Intro
echo "
			   /~\   Hey friend!
                          (O O) _/                 
                          _\=/_                         
          ___            /  _  \                         
         / ()\          //|/.\|\\                        
       _|_____|_       ||  \_/  ||                       
      | | === | |      || |\ /| ||                       
      |_|  O  |_|       # \_ _/ #                        
       ||  O  ||          | | |                          
       ||__*__||          | | |                          
      |~ \___/ ~|         []|[]                          
      /=\ /=\ /=\         | | |                          
______[_]_[_]_[_]________/_]_[_\_____
"

echo "\n${GREEN}Let's start by gathering some variable data.${NC}\n\n${BLUE}Type 'exit' at any time to exit.${NC}\n"

# Getting environment variables
# TODO: only accept numbers for port
while [[ ! $PORT =~ ^[0-9]{4} ]]; do
    if [[ "$PORT" == [eE][xX][iI][tT] ]]; then
        clear
        echo "
                Miss you, we will!
        __.-._  _/
        '-._\"7'
        /'.-c
        |  /T
        _)_/LI"

        echo "\n${GREEN}Take care!${NC}\n"
        exit
    fi
    read -p "Enter port number: " PORT
done

read -r -p "Enter secret: `echo $'\n> '`" SECRET
if [[ "$SECRET" == [eE][xX][iI][tT] ]]; then
	clear
	echo "
            Miss you, we will!
    __.-._  _/
    '-._\"7'
     /'.-c
     |  /T
    _)_/LI"

	echo "\n${GREEN}Take care!${NC}\n"
	exit
fi

read -r -p "Enter database name: `echo $'\n> '`" DB_NAME
if [[ "$DB_NAME" == [eE][xX][iI][tT] ]]; then
	clear
	echo "
            Miss you, we will!
    __.-._  _/
    '-._\"7'
     /'.-c
     |  /T
    _)_/LI"

	echo "\n${GREEN}Take care!${NC}\n"
	exit
fi

echo "\nPort #: $PORT
Secret: $SECRET
Database name: $DB_NAME
"

read -r -p "Look correct? [Y/n] " INPUT


case $INPUT in
	# If yes, run script
	[yY][eE][sS]|[yY])
	echo "${GREEN}Your data is safe with us.${NC}\n
                    .==.
                   ()''()-.
        .---.       ;--; /
      .'_:___\". _..'.  __'.
      |__ --==|'-''' \'...;
      [  ]  :[|       |---\\
      |__| I=[|     .'    '.
      / / ____|     :       '._
     |-/.____.'      | :       :
    /___\ /___\      '-'._----'
"
		# installing dependencies
		echo "\nInstalling dependencies..."
		npm install
		cd ../client
		npm install
		cd ..

        # creating files ignored by GitHub using private data
        touch .gitignore
        touch .env

        echo "node_modules/\n.env" >> .gitignore
        echo "PORT=${PORT}\nDB_NAME=${DB_NAME}\nSECRET_KEY=${SECRET}" >> .env

        cd client
        touch .gitignore
        echo "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n# testing\n/coverage\n# production\n/build\n# misc\n.DS_Store\n.env.local\n.env.production.local\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*
" >> .gitignore
        cd ..
	;;
	
	[nN][oO]|[nN])
		echo "\n${YELLOW}Please re-enter your data.${NC}"
		sh $(basename $0) && exit
	;;

	[eE][xX][iI][tT])
		clear
		echo "
			 Miss you, we will!
		__.-._  _/
		'-._\"7'
		/'.-c
		|  /T
		_)_/LI"

		echo "\n${GREEN}Take care!${NC}\n"
		exit
	;;

	*)
		echo "\n${YELLOW}Invalid input. Please re-enter your data.${NC}"
		sh $(basename $0) && exit
	;;
esac
