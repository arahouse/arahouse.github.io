$(document).ready(function () {
    var Events = {},
        App = {};
    Events = {
        formSend: function () {
            $('form').on('submit', function (e) {
                e.preventDefault();
                var form = $(this);
                form.find('.row').fadeOut();
                form.find('.callback_loading').fadeIn();

                $.ajax({
                    url: '/send_message.php',
                    type: 'post',
                    data: form.serialize(),
                    success: function (data) {
                        form.find('.callback_loading').fadeOut();
                        form.find('.success-message').fadeIn();
                        console.log(data);
                    },
                    error: function () {
                        console.log(data);
                        form.find('.callback_loading').fadeOut();
                        form.find('.error-message').fadeIn();
                    }
                });
                return false;
            });
            var width = $('.g-recaptcha').parent().width();
            if (width < 302) {
                var scale = width / 302;
                $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
                $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
                $('.g-recaptcha').css('transform-origin', '0 0');
                $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
            }


        }
    };

    App = {
        init: function () {
            Events.formSend();
        }
    };


    App.init();

});