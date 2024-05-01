function hamburger(){
    var logo = document.querySelector(".navbar a");
    var resbtn = document.querySelector(".navbtn button");
    var hamburger = document.getElementById("hamburger");
    var hamelems = document.querySelector(".hamelems");

    let clicked = false;
    
    hamburger.addEventListener("click",()=>{
        if (!clicked) {
            hamelems.style.top = "0"
            logo.style.color = "#fff"
            resbtn.style.display = "none"
            clicked = true;
        } else{
            hamelems.style.top = "-60vh"
            logo.style.color = "#313e4a"
            resbtn.style.display = "block"
            clicked = false;
        }
    })
}
hamburger()

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_jinc4ct", "template_mmpgapg",params).then(function(res){
        alert("Thanks For Submitting The Form " + res.status);
    })
}