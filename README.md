<div align="center" margin-bottom="20px">
    <img src="client/src/assets/images/mm_logo.png" alt="Logo" width="200" />
</div>

# Musician Match

Musician Match is a one-stop-shop for musicians to find their ideal collaborator. Built using React, Express.js, Node.js, MongoDB, Bootstrap, Sass, Bourbon, and Animate.css.

## Description

Whether you're looking for a new bandmate, lesson teacher, professional for hire, or just someone to jam with, Musician Match is here to help. Simply input your location, what type of musician you're seeking, what instruments you play, and a short bio. You may optionally enter links to your website or music as well.

You may then search our directory for your nearest match! Once you're ready, just shoot them an email. It's that simple! In the future I plan on adding more features such as direct messaging, automatic display of top matches, and a swiping feature similar to Tinder.

## Demo Animation

### Landing Page

![Demo Animation Part One](https://github.com/jonathankohen/musician_match/blob/assets/gifs/mm_about.gif)

<!-- ![Demo Animation Part One](../assets/images/mm_loginReg.gif?raw=true) -->

<!-- https://github.com/jonathankohen/musician_match/blob/assets/gifs/mm_about.gif -->

### About Page

![Demo Animation Part Two](../assets/images/mm_about.gif?raw=true)

### Like or Dislike Potential Matches

![Demo Animation Part Three](../assets/images/mm_matchCard.gif?raw=true)

## Installation and Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Automation Script:

Simply run the script located at the root of the project and answer a few questions to automatically install dependencies, create environment variables, and start the development server for the first time. I tried to automate the process as much as possble! I also made it Star Wars themed for fun.

#### Change current directory

`cd <path/to/cloned/project>`

#### Run the script

`sh musician_match.sh`

Answer a few questions, and watch the project boot up in front of you! The script will install all dependencies for the front and back end, create a dotenv file, and write it with the data you provide. Once everything is in place, the script will then prompt you to optionally have it run the client and server simultaneously to make sure everything is running smoothly right off the bat.

![Automation Script Screenshot](../assets/images/script_1.png?raw=true)

#### Other Important Scripts

`npm start`
Runs the server once

`npm run server`
Implements Nodemon on the server for continous feedback

`npm run client`
Runs only the client development server

`npm run dev`
Runs the server and client at once

![Yoda](../assets/images/yoda.png?raw=true)
