$(document).ready(function() {
    $('#email_template').summernote({
        height: 350
    });
});



function sendmail() {
    var UName = $('#UName').val();
    var Pass = $('#Pass').val();
    var name = $('#Name').val();
    var email = $('#Receiver').val();
    var subject = $('#Subject').val();
    var message = $('#email_template').summernote('code');
    var htmlMessage = $('#email_template').summernote('code');


    // var body = $('#body').val();

    //var Body = message;
    //console.log(name, phone, email, message);

    Email.send({
        Host: "smtp.gmail.com",
        Username: UName,
        Password: Pass,
        To: email,
        From: UName,
        Subject: subject,
        Body: message,
        html: htmlMessage,




    }).then(
        message => {

            if (message == 'OK') {
                location.reload();
                alert('Your mail has been send. Thank you for connecting.');
            } else {
                console.error(message);
                location.reload()
                alert('There is error at sending message.');
            }

        }
    );
}