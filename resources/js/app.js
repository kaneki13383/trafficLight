// import './bootstrap';
// Глобальные массивы
let history = []
let message = []
let new_html = []
// Функция работы самого светофора
$(document).ready(function () {
    let flag = true;
    let next;

    function change() {        
        if (history.length == 4) {
            history = []
            history.push($('.active').attr('data-color'));
        }
        else {
            history.push($('.active').attr('data-color'));
        }
        let container = $(".main_block .active");

        let duration = {
            red: 5000,
            yellow: 2000,
            green: 5000,
        };

        setTimeout(function () {
            container.removeClass('active');
            next = flag ? container.next() : container.prev();
            next.addClass('active');
            flag = next.hasClass('green') ? false : next.hasClass('red') ? true : flag;
            change();
        }, duration[container.data('color')]);
    }
    change();
    all();
})
// Вывод с сервера
function all() {
    $.ajax({
        type: "GET",
        url: "/api/all",
        success: function (response) {
            message.push(response)
            let new_html = []
            for (let i = 0; i < message[0].length; i++) {
                new_html.push('<tr>' + '<td>' + message[0][i].text + '</td>' +'</tr>');
            }
            $(".log").html(new_html.join(""));
        }
    });
  }


// Логика проездов на цвета светофора
$('button').click(function(){
    let last = history.length - 1
    if (history[last] == 'red') {
        message.push('Проезд на красный. Штраф!')
    }
    if (history[last] == 'yellow') {
        if (history[last - 1] == 'red') {
            message.push('Слишком рано начали движение!')
        }
        else {
            message.push('Успели на желтый!')
        }
    }
    if (history[last] == 'green') {
        message.push('Проезд на зеленый!')
    }

    // Отрпавка на сервер
    $.ajax({
        type: "POST",
        url: "/api/store",
        data: {
            message: message[message.length - 1],
        },
        success: function (response) {
            new_html.push('<tr>' + '<td>' + response.text + '</td>' +'</tr>')
            $(".log").html(new_html.join(""));
        }
    });

    all();
})
