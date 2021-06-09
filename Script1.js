// JavaScript source code
$('#register').on('submit', function (e) {
    e.preventDefault();
    var details = $('#register').serialize();
    $.post('register.html', details, function (data) {
        $('#register').html(data);
    });
});