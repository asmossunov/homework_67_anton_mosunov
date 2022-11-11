
window.addEventListener('load', function() {

    let button = $('#add-item-btn');
    let container = $('#container');
    button.on('click', function(evt) {
        evt.preventDefault();

        let notification = $('<div class="notification" id="notification" style="background-color: grey; width: 600px; height: 40px; border-radius: 6px; text-align: center">' +
        '<span style="font-size: 20px; font-family: Montserrat, sans-serif; color: white">Нажмите на кнопку или подождите </span>' +
        '<input class="button-close" id="button-close" type="button" value="Закрыть"></div>')
         container.prepend(notification);

        setTimeout(() => notification.hide(), 5000);

        $('.button-close').on('click', function(evt) {
            console.log($('.button-close'));
            evt.preventDefault();
            console.log($('.notification'));
            $('.notification').hide();
        })
    })
})
