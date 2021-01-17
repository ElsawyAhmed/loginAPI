function validate() {
    console.log("validation");
    var currm = document.getElementById("email").value;
    var currp = document.getElementById("pass").value;
    console.log(currm);
    console.log(currp);
    if (currp.match(/[a-z]/g) && currp.match(/[A-Z]/g) && currp.match(/[0-9]/g) && currp.length < 8) {
        alert("Succesful Login !");
    }
    
}