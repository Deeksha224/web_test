# Meme Template Viewer (React + Vite)

This project was built as part of my React frontend examination.  
The goal was to fetch meme templates from a public API and display them in a clean, responsive grid with a working search bar.

---

## Summary
In this exam, I built a small React project that loads memes from an API and shows them neatly on the page.
I added a search bar so that users can filter memes by their name.
The layout is responsive, so the memes adjust nicely depending on screen size.
I used multiple components to keep the code clean, and TailwindCSS to style everything in a simple and modern way.

---
## ✅ What I Have Done:
1) Fetches Meme Data From API. 
For this I use the public API https://api.imgflip.com/get_memes. The API returns a list of meme templates.
From each meme, I used:
    url → meme image
    name → meme title

2) Search Feature
There is a search input at the top. As the user types, memes are filtered on the basis of there title.

3) Component-Based Structure
src/components/
    Header.jsx
    SearchBar.jsx
    MemeCard.jsx
    MemeList.jsx

4) Styling with TailwindCSS
    I used TailwindCSS for:
        Layout and spacing
        Responsive grid system
        Consistent card sizes
        Shadow, border-radius, margins
        Clean modern UI


## Tech Used

React (Vite)
TailwindCSS
JavaScript ES6
Imgflip Meme API

## How to Run the Project
npm install
npm run dev