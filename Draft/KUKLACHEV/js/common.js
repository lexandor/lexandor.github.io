
$(document).ready(function() {

    // РАБОТА С ТАЙМЕРОМ
    let timer = $('#timer');
    let date = new Date;
    date.setMinutes(date.getMinutes()+10);

    let timer_date = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    setTimeout(() => {
        timer.flipper('stop');
    }, 1000*60*10)

    $(function(){
        timer.attr( "data-datetime", timer_date ) 
        timer.flipper('init');
    });    

    // РАБОТА С POPUP

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    let popup        = $('.popup');
    let pop_input    = $('.popup_form_input');
    let pop_btn      = $('.popup_btn');
    let btn_sale     = $('.btn_sale');
    let btn_green    = $('.btn_analog');
    let pop_close    = $('.popup_close');
    let pop_alert    = $('.popup_alert');
    let pop_inner    = $('.popup_inner');
    let pop_complite = $('.popup_complite');

    btn_sale.on('click', function(event) {
		event.preventDefault();
        popup.css( "display", "block" );
    });

    btn_green.on('click', function(event) {
		event.preventDefault();
        popup.css( "display", "block" );
    });


    pop_btn.on('click', function(event) {
		event.preventDefault();

        if (pop_input.val() == ''){
            pop_alert.text("укажите e-mail для отправки");
            pop_input.css( "border", "2px solid red" );
        } else if( !(/@/.test(pop_input.val())) ){
            pop_alert.text("введен несуществующий e-mail");
            pop_input.css( "border", "2px solid red" );
        } else if(!(validateEmail(pop_input.val()))){
            pop_alert.text("введен некорректный e-mail");
            pop_input.css( "border", "2px solid red" );
        } else {
            pop_inner.css( "display", "none" );
            pop_complite.css( "display", "block" );
        }
    });

    pop_close.on('click', function(event) {
		event.preventDefault();
        pop_inner.css( "display", "block" );
        pop_complite.css( "display", "none" );
        pop_input.val('');
        popup.css( "display", "none" );
    });

}); 

  