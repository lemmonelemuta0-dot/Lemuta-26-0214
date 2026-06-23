document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    // show popup instead of alert
    document.getElementById("formPopup").style.display = "block";

    // optional: clear form after submit
    this.reset();
});

function closeFormPopup(){
    document.getElementById("formPopup").style.display = "none";
}
