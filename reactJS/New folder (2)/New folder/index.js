import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//First of all go to terminal and go into the folder you want to create app in(cd reactJS)
//2)Run this command to create the app directory "npx create-react-app react1"
//to run app on your browser command "npm start"
//deleted all unnecessary files in src folder 
//html code can work in javascript with jsx format as used below (<App/>)
ReactDOM.render(<App />,document.getElementById('root') //it means to render by react Dom whatever is written is App.js and render it in div whose id is root (present in public > index.html) 
);

cd 