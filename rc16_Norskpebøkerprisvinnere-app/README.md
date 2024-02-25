<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# Project-007 : Clarus Library

## Description

Project aims to create a Clarus Library.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
007 - Clarus Library (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── App.js
│    ├── assets
│    │   ├── about.png
│    │   ├── book.jpg
│    │   ├── books.jpg
│    │   └── const.png
│    │   │
│    ├── components
│    │   ├── card
│    │   │   ├── Card.jsx
│    │   │   └── Card.style.jsx
│    │   ├── footer
│    │   │   ├── Footer.jsx
│    │   │   └── Footer.style.jsx
│    │   ├── header
│    │   │   ├── Header.jsx
│    │   │   └── Header.style.jsx
│    │   └── navbar
│    │   │   ├── Navbar.jsx
│    │   │   └── Navbar.style.jsx
│    │   │
│    ├── context
│    │   ├── AuthContext.jsx
│    │   └── ThemeContext.jsx
│    │   │
│    ├── index.css
│    ├── index.js
│    │   │
│    ├── pages
│    │   ├── about
│    │   │   ├── About.jsx
│    │   │   └── About.style.jsx
│    │   ├── detail
│    │   │   ├── Detail.jsx
│    │   │   └── Detail.style.jsx
│    │   ├── home
│    │   │   ├── Home.jsx
│    │   │   └── Home.style.jsx
│    │   ├── login
│    │   │   ├── Login.jsx
│    │   │   └── Login.style.jsx
│    │   └── register
│    │   │   ├── Register.jsx
│    │   │   └── Register.style.jsx
│    │   │
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    │   │
│    └── styles
│        ├── Flex.jsx
│        ├── Global.styles.jsx
│        └── theme.js
├── package.json
└── yarn.lock
```

## Expected Outcome

![Clarus Library](clarus-library.gif)

## Objective

Build a Clarus Library using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `yarn create react-app clarus-library`or `npx create-react-app clarus-library`

- Step 2: Go to `https://developers.google.com/books/docs/v1/using?hl=tr` and get api key.

- Step 3 : Using api key and `axios` for getting data from `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}&key=${APP_KEY}`.

- Step 4: You are expected to code your project with **styled component**

- Step 5 : You can get random login background image from `https://picsum.photos/1600/900`

- Step 6: Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

## Demo
  <a href="https://clarus-library.vercel.app/" target="_blank">Clarus Library</a>

## Google Books API

<a href="https://developers.google.com/books/docs/v1/using" target="_blank">Google Books API</a>


## How can we create an apikey for the Google Books API ? Watch the video!
<a href="https://www.youtube.com/watch?v=lg6yA8oSW3s" target="_blank">
Watch the video
</a>


**<p align="center">&#9786; Happy Coding &#9997;</p>**


{
  "awards": [
    {
      "year": 2023,
      "winner": "Oliver Lovrenski",
      "title": "Da vi var yngre",
      "publisher": "Aschehoug"
    },
    {
      "year": 2022,
      "winner": "Zeshan Shakar",
      "title": "De kaller meg ulven"
    },
    {
      "year": 2021,
      "winner": "Abid Raja",
      "title": "Min skyld – En historie om frigjøring"
    },
    {
      "year": 2020,
      "winner": "Tore Renberg",
      "title": "Tollak til Ingeborg"
    },
    {
      "year": 2019,
      "winner": "Lisa Aisato",
      "title": "Livet – illustrert"
    },
    {
      "year": 2018,
      "winner": "Simon Stranger",
      "title": "Leksikon om lys og mørke"
    },
    {
      "year": 2017,
      "winner": "Helga Flatland",
      "title": "En moderne familie"
    },
    {
      "year": 2016,
      "winner": "Vigdis Hjorth",
      "title": "Arv og miljø"
    },
    {
      "year": 2015,
      "winner": "Maja Lunde",
      "title": "Bienes historie"
    },
    {
      "year": 2014,
      "winner": "Lars Mytting",
      "title": "Svøm med dem som drukner"
    },
    {
      "year": 2013,
      "winner": "Cecilie Enger",
      "title": "Mors gaver"
    },
    {
      "year": 2012,
      "winner": "Per Petterson",
      "title": "Jeg nekter"
    },
    {
      "year": 2011,
      "winner": "Jørn Lier Horst",
      "title": "Vinterstengt"
    },
    {
      "year": 2010,
      "winner": "Jan-Erik Fjell",
      "title": "Tysteren"
    },
    {
      "year": 2009,
      "winner": "Roy Jacobsen",
      "title": "Vidunderbarn"
    },
    {
      "year": 2008,
      "winner": "Tore Renberg",
      "title": "Charlotte Isabel Hansen"
    },
    {
      "year": 2007,
      "winner": "Jo Nesbø",
      "title": "Snømannen"
    },
    {
      "year": 2006,
      "winner": "Erik Fosnes Hansen",
      "title": "Løvekvinnen"
    },
    {
      "year": 2005,
      "winner": "Anne Birkefeldt Ragde",
      "title": "Eremittkrepsene"
    },
    {
      "year": 2004,
      "winner": "Levi Henriksen",
      "title": "Snø vil falle over snø som har falt"
    },
    {
      "year": 2003,
      "winner": "Per Petterson",
      "title": "Ut og stjæle hester"
    },
    {
      "year": 2002,
      "winner": "Åsne Seierstad",
      "title": "Bokhandleren i Kabul"
    },
    {
      "year": 2001,
      "winner": "Lars Saabye Christensen",
      "title": "Halvbroren"
    },
    {
      "year": 2000,
      "winner": "Jo Nesbø",
      "title": "Rødstrupe"
    }
  ]
}
