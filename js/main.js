//komentarz obejmuje tylko linie
/* to też jest komentarz*/

$(document).ready(function () {
    console.log('Geek Factory');
    listener_contact();
});

function listener_contact() {
    $('.contact_btn').on('click', function () {

        $('.error').css('display', 'none');
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "send.php",
            data: {
                name: $('#c_name').val(),
                email: $('#c_email').val(),
                text: $('#c_text').val()
            }
        }).done(function (data) {
            if (data.type == 'error') {
                $.each(data.code, function (k, v) {
                    $('.err_c_' + k).html(v).css('display', 'block');
                });
            } else {
                $('.kontakt_box_all1').css('display', 'none');
                $('.kontakt_box_all2').css('display', 'block').html(data.code);
            }
        });

    });
}