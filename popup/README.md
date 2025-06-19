# ✅ Pop-Up Confirmation UI

A simple and elegant confirmation pop-up UI that thanks users after they submit a form or click a button. Built using **HTML**, **CSS**, and **JavaScript**, this project is a great example of DOM manipulation and animation via class toggling.

## 🔍 Features

- Clean and responsive design  
- Interactive pop-up that appears on button click  
- Simple DOM manipulation using JavaScript  
- Lightweight and beginner-friendly codebase

## 📸 Preview

![Popup Preview](./imgP/Screenshot%202025-06-19%20013231.png)

> **Note:** Replace this with an actual screenshot/gif if available for better visual representation.

## 🧩 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)

## 🚀 How It Works

1. A `Submit` button is displayed on the page.
2. When clicked, a popup appears with a message and an SVG checkmark icon.
3. The popup can be dismissed using the `OK` button.

JavaScript toggles the `open-popup` class on the popup container to show/hide it.

```javascript
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}
```

## 🛠️ Setup Instructions

1. Clone or download this repository.
2. Make sure the following files are present in the root directory:
   - `index.html`
   - `style.css`
   - `index.js`
   - `./imgP/checkmark-round-svgrepo-com.svg`
3. Open `index.html` in your browser.

## 📦 Folder Structure

```
/project-root
├── index.html
├── style.css
├── index.js
└── imgP/
    └── checkmark-round-svgrepo-com.svg
```

## 🌱 Future Enhancements

- ✅ Add form input validation
- ✅ Auto-close the popup after a few seconds
- ✅ Use `localStorage` to remember form status
- ✅ Add animations for a smoother appearance
- ✅ Add accessibility features (keyboard navigation, ARIA roles)

## 📁 Live Demo & Source Code

- 🔗 [**Live Demo**](https://simple-popup1001.netlify.app/)
- 💻 **Author:** Fahim Morshed Nion
