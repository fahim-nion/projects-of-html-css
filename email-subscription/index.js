const scriptURL = 'https://script.google.com/macros/s/AKfycbzaWDV7yVEXOSl3UtMUzZZ3AZLY7PNMhcKKQokwmHtXN7_Hzbe_bDnAHyR76i41aVJSow/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")
msg.style.animation = "none"; // reset animation
msg.offsetHeight; // trigger reflow
msg.style.animation = "appear 5s linear"; 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Thank you for being the part of this great experience!"
        msg.style.animation = "none";
        msg.offsetHeight;
        msg.style.animation = "appear 6s linear"; 
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
    })
    .catch((error) => console.error('Error!', error.message));
});


