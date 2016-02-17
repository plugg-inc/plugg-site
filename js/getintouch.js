/**
 * Created by Sean Yu on 15 Feb 2016.
 */

    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': '',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': 'Get in Touch Submission - Plugg',
                        'text': msg,
                        'to': [
                            {
                                'email': 'seanyu4296@gmail.com',
                                'name': 'Sean Yu',
                                'type': 'to'
                            },
                            {
                                'email': 'johnwesleychan@gmail.com',
                                'name': 'John Wesley Chan',
                                'type': 'to'
                            },
                            {
                                'email': 'vinch.cuevas@gmail.com',
                                'name': 'Vinch Cuevas',
                                'type': 'to'
                            }
                        ]
                    }
                }
            })
            .done(function(response) {
                alert('Your message has been sent. Thank you!'); // show success message
                $("#name").val(''); // reset field after successful submission
                $("#email").val(''); // reset field after successful submission
                $("#msg").val(''); // reset field after successful submission
            })
            .fail(function(response) {
                alert('Error sending message.');
            });
        return false; // prevent page refresh
    });
