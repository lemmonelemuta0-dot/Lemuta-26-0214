// WELCOME POPUP
window.onload = function(){
    document.getElementById("welcomePopup").style.display = "flex";

    setTimeout(function(){
        document.getElementById("promoBox").style.display = "flex";
    }, 3000);
};

// FORM POPUP
document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formPopup").style.display = "flex";
    this.reset();
});

// CLOSE FUNCTIONS
function closePromo(){
    document.getElementById("promoBox").style.display = "none";
}

function closeFormPopup(){
    document.getElementById("formPopup").style.display = "none";
}
