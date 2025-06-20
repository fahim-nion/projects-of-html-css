# 🌗 Dark Mode Toggle Portfolio | #30Days30JsProject

This is a responsive personal portfolio homepage built using **HTML**, **CSS**, and **JavaScript**, featuring a **dark/light mode toggle** and a **responsive hamburger navigation menu** for smaller screens. It's part of my #30Days30JsProject challenge.

---

## 🖼️ Preview

![Portfolio Preview](./imgD/Screenshot%202025-06-21%20033921.png)
![Portfolio Preview](./imgD/Screenshot%202025-06-21%20033936.png)


---

## 🚀 Features

- 🌙 Light/Dark theme toggle with smooth transitions
- 📱 Fully responsive design using media queries
- 🍔 Hamburger menu for mobile navigation
- 🧠 Layered image design (Blob + Profile Picture)
- 🎨 Clean and modern UI with CSS animations
- ⚡ Accessible and semantic HTML structure

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Media Queries, Transitions)
- JavaScript (DOM Manipulation)

---

## 💡 How Dark Mode Works
The script toggles a dark-theme class on the <body> or root element, and CSS variables (--primary-color, --secondary-color) are switched to apply dark mode colors.

```javascript
const icon = document.getElementById("icon");
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
```
## 🔮 Future Enhancements
- ✅ Save theme preference in localStorage

- ✅ Animate hamburger to X transition

- 🔲 Add smooth scrolling for nav links

- 🔲 Add accessibility attributes (e.g., aria-labels)

## 🔗 Live Demo
>[Portfolio]( https://portfolio-js1001.netlify.app)
---
