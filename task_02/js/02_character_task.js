$(document).ready(function() {

    let urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('id');

    $.get(`https://www.breakingbadapi.com/api/characters/${param}`, function(data) {

        let actorName = `${data[0].name}`;
        let splitActorName = actorName.split(" ")

        $.get(`https://www.breakingbadapi.com/api/quote?author=${splitActorName[0]}+${splitActorName[1]}`, function(data) {
            console.log(data)

            let quotes = $('<div class="card mb-3" style="max-width: 40rem; margin: auto">\n' +
                '  <div class="card-body">\n' +
                '    <h5 class="card-title">Quotes</h5>\n' +
                '    <p class="card-text" id="quotes"></p>\n' +
                '  </div>\n' +
                '</div>')

            $('#container-card').append(quotes);
            for(let i = 0; i < data.length; i++) {
                $('#quotes').append(data[i].quote + '<br>')
            }
        })

        let cardProfile = $('<div class="card" style="width: 40rem; ' +
            'margin: auto; margin-top: 50px; margin-bottom: 100px">\n' +
            '  <img src="..." id="img" class="card-img-top" alt="...">\n' +
            '  <div class="card-body">\n' +
             '    <h5 class="card-title">Actor detail</h5>\n' +
            '  <h2 class="card-text" id="keys" style="color: grey; font-size: 15px"></h2>\n' +
            '  </div>\n' +
            '</div>');


        $('#container-card').append(cardProfile);
        for (const [key, value] of Object.entries(data[0])) {
            if(key != 'birthday'){
                $('#keys').append(`${key}: ${value}<br>`);
            }
            else
                if(key == 'birthday'){
                    if(data[0]['birthday'] == "Unknown") {
                        $('#keys').append(`age: unknown age<br>`);
                    }
                    else {
                         let today = new Date();
                    let date = data[0]['birthday'];
                    let birthYear = date.substring(6, );
                    let value = today.getFullYear() - birthYear;
                    $('#keys').append(`Age: ${value}<br>`);
                    };
                };
        };
        $("#img").attr("src", `${data[0].img}`);
    });
});
