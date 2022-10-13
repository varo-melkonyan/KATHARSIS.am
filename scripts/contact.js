function sendEMAIL() {
    Email.send({
        name:document.getElementById('input_name').value,
        Port: "465",
        SMTP: "true",
        Host : "smtp.mailtrap.io",
        Username : "cb37344df6f2a3",
        Password : "7671111c32b93e",
        To : "pacij43063@haboty.com",
        From : document.getElementById('input_email').value,
        Subject : document.getElementById('input_phone').value,
        Body : document.getElementById('text_area').value
        }).then(msg => alert("The email successfully sent"))
}