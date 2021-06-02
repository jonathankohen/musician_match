#!/bin/bash

# Variables
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# TODO: make name dynamic
BOTS="
$(echo "${YELLOW}")			   /~\ $(echo "${NC}")  I am C-3PO, human/cyborg relations. And you are?
$(echo "${YELLOW}")                          ($(echo "${NC}")O O$(echo "${YELLOW}"))$(echo "${NC}") _/                 
$(echo "${YELLOW}")                          _\\$(echo "${NC}")=$(echo "${YELLOW}")/_$(echo "${NC}")                         
$(echo "${BLUE}")          ___$(echo "${NC}")            $(echo "${YELLOW}")//_ _\\$(echo "${YELLOW}")\\$(echo "${NC}")                         
$(echo "${BLUE}")         / $(echo "${NC}")()$(echo "${BLUE}")\\$(echo "${NC}")          $(echo "${YELLOW}")//|$(echo "${NC}")/.\\$(echo "${YELLOW}")|\\$(echo "${YELLOW}")\\$(echo "${NC}")                        
$(echo "${BLUE}")       _$(echo "${NC}")|$(echo "${BLUE}")_____$(echo "${NC}")|$(echo "${BLUE}")_$(echo "${NC}")       $(echo "${YELLOW}")||  $(echo "${NC}")\_/ $(echo "${YELLOW}") ||$(echo "${NC}")                       
$(echo "${BLUE}")      | $(echo "${NC}")| $(echo "${BLUE}")=== $(echo "${NC}")| $(echo "${BLUE}")|$(echo "${NC}")      $(echo "${YELLOW}")|| |$(echo "${NC}")\ /$(echo "${YELLOW}")| ||$(echo "${NC}")                       
$(echo "${BLUE}")      |$(echo "${NC}")_|  $(echo "${BLUE}")O  $(echo "${NC}")|_$(echo "${BLUE}")|$(echo "${NC}")       $(echo "${YELLOW}")# \_ _/ #$(echo "${NC}")                        
$(echo "${BLUE}")       |$(echo "${NC}")|  O  |$(echo "${BLUE}")|$(echo "${NC}")          $(echo "${YELLOW}")| | |$(echo "${NC}")                          
$(echo "${BLUE}")       |$(echo "${NC}")|$(echo "${BLUE}")_$(echo "${NC}")_$(echo "${BLUE}")*$(echo "${NC}")_$(echo "${BLUE}")_$(echo "${NC}")|$(echo "${BLUE}")|$(echo "${NC}")          $(echo "${YELLOW}")| | |$(echo "${NC}")                          
      |$(echo "${BLUE}")~ $(echo "${NC}")\\$(echo "${BLUE}")___$(echo "${NC}")/ $(echo "${BLUE}")~$(echo "${NC}")|         []|[]                        
      $(echo "${BLUE}")/=\\$(echo "${NC}") /=\ $(echo "${BLUE}")/=\\$(echo "${NC}")         $(echo "${YELLOW}")| | |$(echo "${NC}")                           
______$(echo "${BLUE}")[_]$(echo "${NC}")_[_]_$(echo "${BLUE}")[_]$(echo "${NC}")________$(echo "${YELLOW}")/_]_[_\\$(echo "${NC}")_____"

YODA="$(echo "${BLUE}")\nTake care!\n$(echo "${NC}")  
$(echo "${GREEN}")             Miss you, we will!$(echo "${NC}")
            _/
$(echo "${GREEN}")    __.-._
    '-._\"7'$(echo "${NC}")
     /'.-c
     \|  /T
    $(echo "${GREEN}")_)_/LI$(echo "${NC}")"

# Intro
cat <<EOM
        $(echo "${BOTS}") 
EOM
echo "\n${GREEN}Let's start by gathering some variable data.${NC}\n\nType ${YELLOW}'exit'${NC} at any time to exit.\n"

# Defining name
read -r -p "`echo ${BLUE}`Enter your name:`echo ${NC}` `echo $'\n> '`" NAME
if [[ $NAME == [eE][xX][iI][tT] ]]; then
	clear
    cat <<EOM
        $(echo "${YODA}") 
EOM
	exit
fi

# Vars that use $NAME
LEAH="\n$(echo "${GREEN}")Your data is safe with us, $(echo "${NAME}"). $(echo "${NC}")\n
                .==.
               ()''()-.
    .---.       ;--; /
  .'_:___\". _..'.  __'.
  |__ --==|'-''' \'...;
  [  ]  :[|       |---\\
  |__| I=[|     .'    '.
  / / ____|     :       '._
 |-/.____.'      | :       :
/___\ /___\      '-'._----'"

BOTS_WITH_NAME="
$(echo "${YELLOW}")			   /~\ $(echo "${NC}")  $(echo "${BLUE}")Bye,$(echo "${NC}") $(echo "${YELLOW}")$(echo "${NAME}")$(echo "${NC}")!
$(echo "${YELLOW}")                          ($(echo "${NC}")O O$(echo "${YELLOW}"))$(echo "${NC}") _/                 
$(echo "${YELLOW}")                          _\\$(echo "${NC}")=$(echo "${YELLOW}")/_$(echo "${NC}")                         
$(echo "${BLUE}")          ___$(echo "${NC}")            $(echo "${YELLOW}")//_ _\\$(echo "${YELLOW}")\\$(echo "${NC}")                         
$(echo "${BLUE}")         / $(echo "${NC}")()$(echo "${BLUE}")\\$(echo "${NC}")          $(echo "${YELLOW}")//|$(echo "${NC}")/.\\$(echo "${YELLOW}")|\\$(echo "${YELLOW}")\\$(echo "${NC}")                        
$(echo "${BLUE}")       _$(echo "${NC}")|$(echo "${BLUE}")_____$(echo "${NC}")|$(echo "${BLUE}")_$(echo "${NC}")       $(echo "${YELLOW}")||  $(echo "${NC}")\_/ $(echo "${YELLOW}") ||$(echo "${NC}")                       
$(echo "${BLUE}")      | $(echo "${NC}")| $(echo "${BLUE}")=== $(echo "${NC}")| $(echo "${BLUE}")|$(echo "${NC}")      $(echo "${YELLOW}")|| |$(echo "${NC}")\ /$(echo "${YELLOW}")| ||$(echo "${NC}")                       
$(echo "${BLUE}")      |$(echo "${NC}")_|  $(echo "${BLUE}")O  $(echo "${NC}")|_$(echo "${BLUE}")|$(echo "${NC}")       $(echo "${YELLOW}")# \_ _/ #$(echo "${NC}")                        
$(echo "${BLUE}")       |$(echo "${NC}")|  O  |$(echo "${BLUE}")|$(echo "${NC}")          $(echo "${YELLOW}")| | |$(echo "${NC}")                          
$(echo "${BLUE}")       |$(echo "${NC}")|$(echo "${BLUE}")_$(echo "${NC}")_$(echo "${BLUE}")*$(echo "${NC}")_$(echo "${BLUE}")_$(echo "${NC}")|$(echo "${BLUE}")|$(echo "${NC}")          $(echo "${YELLOW}")| | |$(echo "${NC}")                          
      |$(echo "${BLUE}")~ $(echo "${NC}")\\$(echo "${BLUE}")___$(echo "${NC}")/ $(echo "${BLUE}")~$(echo "${NC}")|         []|[]                        
      $(echo "${BLUE}")/=\\$(echo "${NC}") /=\ $(echo "${BLUE}")/=\\$(echo "${NC}")         $(echo "${YELLOW}")| | |$(echo "${NC}")                           
______$(echo "${BLUE}")[_]$(echo "${NC}")_[_]_$(echo "${BLUE}")[_]$(echo "${NC}")________$(echo "${YELLOW}")/_]_[_\\$(echo "${NC}")_____"

# Defining environment variables
while [[ ! $PORT =~ ^[0-9]{4} ]]; do
    if [[ "$PORT" == [eE][xX][iI][tT] ]]; then
        clear
        cat <<EOM
            $(echo "${YODA}") 
EOM
        exit
    fi
    read -p "`echo ${BLUE}`Enter port number:`echo ${NC}` `echo $'\n> '`" PORT
done

read -r -p "`echo ${BLUE}`Enter secret:`echo ${NC}` `echo $'\n> '`" SECRET
if [[ $SECRET == [eE][xX][iI][tT] ]]; then
	clear
    cat <<EOM
        $(echo "${YODA}") 
EOM
	exit
fi

read -r -p "`echo ${BLUE}`Enter database name:`echo ${NC}` `echo $'\n> '`" DB_NAME
if [[ $DB_NAME == [eE][xX][iI][tT] ]]; then
	clear
    cat <<EOM
        $(echo "${YODA}") 
EOM
	exit
fi

# Displaying/confirming env variables
clear
echo "\n${BLUE}Name:${NC} $NAME
${BLUE}Port:${NC} $PORT
${BLUE}Secret:${NC} $SECRET
${BLUE}Database name:${NC} $DB_NAME\n"

read -r -p "`echo ${BLUE}``echo $'\n'`Look correct?`echo ${NC}` [Y/n]`echo $'\n> '`" INPUT

case $INPUT in
	# If yes, run script
	[yY][eE][sS]|[yY])

        cat <<EOM
            $(echo "${LEAH}") 
EOM

        # Installing dependencies ${GREEN}\xE2\x9C\x94${NC}
        echo "\n${YELLOW}Installing server dependencies...${NC}"
        npm install
        echo "\nServer dependencies installed! ${GREEN}\xE2\x9C\x94${NC}"
        cd client
        echo "\n${YELLOW}Installing client dependencies...${NC}"
        npm install
        echo "\n${BLUE}Client dependencies installed!${NC} ${GREEN}\xE2\x9C\x94${NC}"
        cd ..

        # Creating files ignored by GitHub and adding private data
        echo "\n${YELLOW}Inserting environment variables...${NC}"
        touch .gitignore
        touch .env
        echo "# dependencies\nnode_modules/\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# production\n/build\n\n# misc\n.DS_Store\n.env\n.env.local\n.env.production.local\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*" >> .gitignore
        echo "PORT=${PORT}\nDB_NAME=${DB_NAME}\nSECRET_KEY=${SECRET}" >> .env
        echo "\n${BLUE}Environment variables in place!${NC} ${GREEN}\xE2\x9C\x94${NC}\n"

        # Starting dev server
        read -r -p "`echo ${BLUE}`Would you like to start the development server?`echo ${NC}` [Y/n]`echo $'\n> '`" SERVER_START

        if [[ "$SERVER_START" == [yY][eE][sS] || "$SERVER_START" == [yY] ]]; then
            npm run dev
            cat <<EOM
        $(echo "${BOTS_WITH_NAME}") 
EOM
            echo "\n${GREEN}You're all set, happy coding!${NC}\n"
            exit;
        else
            clear
            cat <<EOM
        $(echo "${YODA}") 
EOM
	        
            exit;
	    fi
    ;;
    
	[nN][oO]|[nN])
		echo "\n${YELLOW}Please re-enter your data.${NC}"
		sh $(basename $0) && exit
	;;

	[eE][xX][iI][tT])
		clear
        cat <<EOM
        $(echo "${YODA}") 
EOM
	    
		exit
	;;

	*)
		echo "\n${YELLOW}Invalid input. Please re-enter your data.${NC}"
		sh $(basename $0) && exit
	;;
esac
