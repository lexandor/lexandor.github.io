
$(document).ready(function() {

    // РАБОТА С ТАЙМЕРОМ
    let timer = $('#timer');
    let date = new Date;
    date.setMinutes(date.getMinutes()+10);

    let timer_date = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    $(function(){
        timer.attr( "data-datetime", timer_date ) 
        timer.flipper('init');
    });    

    // РАБОТА С POPUP

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
    
        console.log('-----');
        console.log(pop_input.val());
        console.log(!(/@/.test(pop_input.val())));

        if (pop_input.val() == ''){
            pop_alert.text("укажите e-mail для отправки");
            pop_input.css( "border", "2px solid red" );
        } else if( !(/@/.test(pop_input.val())) ){
            pop_alert.text("введен несуществующий e-mail");
            pop_input.css( "border", "2px solid red" );
        } else {
            pop_inner.css( "display", "none" );
            pop_complite.css( "display", "block" );
        }
    });

    pop_close.on('click', function(event) {
		event.preventDefault();
        popup.css( "display", "none" );
    });

}); 

  