window.onload = function(){
    alert("Welcome to Smart Greenhouse Management System 🌱");
};

setTimeout(function(){
    document.getElementById("promoBox").style.display = "block";
}, 3000);

function closePromo(){
    document.getElementById("promoBox").style.display = "none";
}
document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you! Your details have been submitted successfully.");
});
