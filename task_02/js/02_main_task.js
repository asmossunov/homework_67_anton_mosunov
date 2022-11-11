
$(document).ready(function() {

    $.get('https://www.breakingbadapi.com/api/characters', function(dataByEnd) {
        const data = dataByEnd.reverse();

        let rows = $('<div class="row" id="rows"></div>');
        $('#container').append('<h1 style="text-align: center; padding: 100px;">The Breaking Bad API Tread Lightly</h1>');
        $('#container').append(rows);

        for (let i = 0; i < data.length; i++) {

             let cardActor = $('<div class="col-3" id="cols"><div class="card" style="width: 18rem; margin-bottom: 30px">\n' +
                 '  <img src="..." id="img" style="height: 400px;" class="card-img-top" alt="...">\n' +
                 '  <div class="card-body">\n' +
                 '    <h5 class="card-title" id="names" style="text-align: center"></h5>\n' +
                 '    <a href="#" class="btn btn-secondary" id="btn" style="margin-left: 90px;">Detail</a>\n' +
                 '  </div>\n' +
                 '</div></div>');

             let name = `${data[i].name}`;

             $('#rows').prepend(cardActor);
             $('#names').append(name);
             $("#img").attr("src", `${data[i].img}`);
             $("#btn").attr('href','character.html?id=' + `${data[i].char_id}`);
        }
    })
})
