var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById("contact-name").value //contant that has been written on the input box.
    if (name.length == 0){
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Name is required`
        return false
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)){
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Write Full Name`
        return false
    }
    nameError.innerHTML = `<i class="fa-solid fa-check" style="color:rgb(8, 237, 118);"></i>`
    return true
}


function validatePhone(){
    var phone = document.getElementById("contact-phone").value
    if (phone.length == 0){
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Phone is required`
        return false
    }
    if(!/^\d+$/.test(phone)){
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Phone numbers should be in digits`
        return false
    }
    if (phone.length !== 11){
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Phone should be 11 digits`
        return false
    }
    phoneError.innerHTML = `<i class="fa-solid fa-check" style="color: #33e689;"></i>`
    return true
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if (email.length == 0){
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> email is required`
    }
    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)){
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> email invalid`
        return false
    }
    emailError.inn
}