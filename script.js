/* ═══════════════════════════════════════════
   Smart Greenhouse Management System — script.js
   • Welcome popup on load, promo popup after 3s
   • Registration form built & validated by JavaScript
     (Full Name, Email, Phone, Gender)
═══════════════════════════════════════════ */

/* ── Popups ── */
window.addEventListener("load", function () {
    var welcome = document.getElementById("welcomePopup");
    if (welcome) welcome.style.display = "flex";

    setTimeout(function () {
        var promo = document.getElementById("promoBox");
        if (promo) promo.style.display = "flex";
    }, 3000);
});

function closeWelcome() {
    document.getElementById("welcomePopup").style.display = "none";
}
function closePromo() {
    document.getElementById("promoBox").style.display = "none";
}
function closeFormPopup() {
    document.getElementById("formPopup").style.display = "none";
}

/* Close any popup by clicking its dark overlay */
document.addEventListener("click", function (e) {
    if (["welcomePopup", "promoBox", "formPopup"].indexOf(e.target.id) !== -1) {
        e.target.style.display = "none";
    }
});

/* ── Registration form (built by JavaScript) ── */
document.addEventListener("DOMContentLoaded", function () {
    var mount = document.getElementById("register-form");
    if (!mount) return;

    mount.innerHTML =
        '<form id="userForm" novalidate>' +
            '<label for="reg-name">Full Name *</label>' +
            '<input type="text" id="reg-name" placeholder="e.g. Lemmone Lemuta">' +
            '<span class="error" id="err-name"></span>' +

            '<label for="reg-email">Email *</label>' +
            '<input type="email" id="reg-email" placeholder="e.g. lemuta@gmail.com">' +
            '<span class="error" id="err-email"></span>' +

            '<label for="reg-phone">Phone Number *</label>' +
            '<input type="tel" id="reg-phone" placeholder="e.g. 0712 345 678">' +
            '<span class="error" id="err-phone"></span>' +

            '<label for="reg-gender">Gender *</label>' +
            '<select id="reg-gender">' +
                '<option value="">Select…</option>' +
                '<option value="female">Female</option>' +
                '<option value="male">Male</option>' +
                '<option value="other">Other</option>' +
            '</select>' +
            '<span class="error" id="err-gender"></span>' +

            '<button type="submit">Register</button>' +
        '</form>';

    document.getElementById("userForm").addEventListener("submit", handleRegister);
});

function setErr(id, msg, input) {
    document.getElementById(id).textContent = msg;
    if (input) {
        input.classList.toggle("invalid", !!msg);
        input.classList.toggle("valid", !msg);
    }
}

function handleRegister(e) {
    e.preventDefault();

    var name   = document.getElementById("reg-name");
    var email  = document.getElementById("reg-email");
    var phone  = document.getElementById("reg-phone");
    var gender = document.getElementById("reg-gender");
    var ok = true;

    if (name.value.trim().length < 2) {
        setErr("err-name", "Please enter your full name.", name); ok = false;
    } else { setErr("err-name", "", name); }

    if (email.value.trim() === "") {
        setErr("err-email", "Email is required.", email); ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
        setErr("err-email", "Enter a valid email, e.g. lemuta@gmail.com", email); ok = false;
    } else { setErr("err-email", "", email); }

    if (phone.value.trim() === "") {
        setErr("err-phone", "Phone number is required.", phone); ok = false;
    } else if (!/^[0-9\s\-\+]{7,15}$/.test(phone.value.trim())) {
        setErr("err-phone", "Enter a valid phone number (7–15 digits).", phone); ok = false;
    } else { setErr("err-phone", "", phone); }

    if (gender.value === "") {
        setErr("err-gender", "Please select your gender.", gender); ok = false;
    } else { setErr("err-gender", "", gender); }

    if (!ok) return;

    // Success → show popup and reset
    document.getElementById("formPopup").style.display = "flex";
    document.getElementById("userForm").reset();
    [name, email, phone, gender].forEach(function (el) { el.classList.remove("valid", "invalid"); });
}
