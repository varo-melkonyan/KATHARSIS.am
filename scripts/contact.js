function sendEMAIL() {
        Email.send({
            Host : "smtp.mailtrap.io",
            Username : "melkonyan.varo@gmail.com",
            Password : "6jq.n6nkEaU6TDU",
            To : 'melkonyan.varo@gmail.com',
            From : $('#input_email').val(),
            Subject : $('#input_name').val(),
            Body : $('#text_area').val()
        }).then(
          message => alert(message)
        );
}