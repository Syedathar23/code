# Code Editor: Realtime Collaborative Code Editor

## Introduction

A real-time collaborative code editor allows multiple developers to write, edit and debug code simultaneously in the same workspace. It provides live synchronization, instant updates, and features like chat, version control, and conflict resolution.This powerful and intuitive collaborative code editor is designed to empower developers and teams to work seamlessly in real-time, regardless of their location. With **Code Editor**, you can code together, debug together, and ship faster, together.

## Features

- Multiple users can join a room and edit code together
- Changes are reflected in real time
- Copy button to copy the room id to clipboard
- Leave button to leave the room
- Supports syntax highlighting for different programming languages
- Users can choose theme based on their preferences
- Users can leave the room and rejoin later to continue editing
- Joining & leaving of users is also reflected in real time

## Tech Stack

- React.js
- Node.js
- Express.js
- Socket.io
- CodeMirror
- React-Toastify

## Installation

1. Clone this repository and cd into it
2. Run `npm install` to install the dependencies
3. Create .env file in the root folder and copy paste the content of example.env, and add necessary credentials.
4. To start the react app client run `npm start` in one terminal
5. To start the server run `npm run server:dev` or `pm2 start server.js` in another terminal
6. Go to `http://localhost:3000` to view the app
7. Create a room by clicking on the create new room button and put a username of your choice.
8. Copy the room id by clicking on the Copy ROOM ID button
9. To join as an another user open another browser/browser-window or an incognito tab and go to http://localhost:3000
10. Enter the same room id to join the same room

**Note:** To stop your server, press `Ctrl+c` or if you used "pm2", then use `pm2 stop server.js` in the terminal.

## Connect with me

- [LinkedIn](https://www.linkedin.com/in/nasreenshaik21/)
- [GitHub](https://github.com/ShaikScripts/)

