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