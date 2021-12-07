
$(document).ready(function() {

    // РАБОТА С ТАЙМЕРОМ ТРАНСЛЯЦИИ
    let t_timer = $('#translation_timer');
    let t_date = new Date;
    t_date.setMinutes(t_date.getMinutes()+1);

    let t_timer_date = `${t_date.getFullYear()}-${t_date.getMonth()+1}-${t_date.getDate()} ${t_date.getHours()}:${t_date.getMinutes()}:${t_date.getSeconds()}`
    
    let translation_menu = $('.translation_menu');

    setTimeout(() => {
        t_timer.flipper('stop');
        translation_menu.css( "display", "none" )
    }, 1000*60) // остановка таймера

    $(function(){
        t_timer.attr( "data-datetime", t_timer_date ) 
        t_timer.flipper('init');
    });

    // РАБОТА С popup_code

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateCode(code) {
        const re = /^\d+$/;
        return re.test(String(code));
    }

    let btn_perf     = $('#see_performance');
    let btn_notTiket = $('#notLetter');

    let popup_code   = $('.popup_code');
    let pop_input_code    = $('#code');
    let pop_btn_code      = $('#btn_code');
    let pop_alert_code    = $('.popup_alert_code');

    let pop_remail   = $('.popup_remail');
    let pop_input_mail    = $('#remail');
    let pop_btn_mail      = $('#btn_remail');
    let pop_alert_mail    = $('.popup_alert_remail');
    
    let pop_close    = $('.popup_code .popup_close');
    let pop_inner    = $('.popup_code .popup_inner');
    
    let trans_info   = $('.translation_info');
    let overlay      = $('.overlay');

    btn_perf.on('click', function(event) {
		event.preventDefault();
        popup_code.css( "display", "block" );
        overlay.css( "display", "block" );
    });


    pop_btn_code.on('click', function(event) {
		event.preventDefault();

        if (pop_input_code.val() == ''){

            pop_alert_code.text("укажите код");
            pop_input_code.css( "border", "2px solid red" );
            
        } else if(!(validateCode(pop_input_code.val()))){

            pop_alert_code.text("введен некорректный код");
            pop_input_code.css( "border", "2px solid red" );

        } else if (pop_input_code.val() == '000000'){
             // Вариант с успешным кодом
            popup_code.css( "display", "none" );
            overlay.css( "display", "none" );

            let now_time = new Date;
            now_time = `${now_time.getFullYear()}-${now_time.getDate()}-${now_time.getMonth()+1} ${now_time.getHours()}:${now_time.getMinutes()}:${now_time.getSeconds()}`

            if (now_time.toString() !== t_timer.attr( "data-datetime").toString()){

                btn_perf.css( "display", "none" );
                trans_info.html(`Трансляция еще не началась
                <br><br>
                В ожидании начала спектакля 
                предлагаем Вам посмотреть лучшие моменты 
                предыдущих трансляций
                `)

            }
            // =====================================
            // СЮДА ЖЕ МОЖНО ПРОИХНУТЬ УСЛОВИЕ ДЛЯ УВЕДОМЛЕНИЯ О ТОМ ЧТО ТРАНСЛЯЦИЯ ЗАКОНЧИЛАСЬ
            // =====================================
        }
    });

    // ======================
    // Восстановление кода по Email

    btn_notTiket.on('click', function(event) {
		event.preventDefault();
        pop_inner.css( "display", "none" );
        //
        pop_remail.css( "display", "block" );
    });

    pop_btn_mail.on('click', function(event) {
        event.preventDefault();

        console.log(!(validateEmail(pop_input_mail.val())));

        if (pop_input_mail.val() == ''){

            pop_alert_mail.text("укажите e-mail для отправки");
            pop_input_mail.css( "border", "2px solid red" )
            ;
        } else if ( !(/@/.test(pop_input_mail.val())) ){

            pop_alert_mail.text("введен несуществующий e-mail");
            pop_input_mail.css( "border", "2px solid red" );

        } else if (!(validateEmail(pop_input_mail.val()))){

            pop_alert_mail.text("введен некорректный e-mail");
            pop_input_mail.css( "border", "2px solid red" );

        } else {

            pop_input_mail.css( "border", "2px solid #ff9900" );
            pop_alert_mail.text("Мы отправили Ваш билет на указанную почту");
            pop_alert_mail.css( "color", "green" );
        }
    });

    pop_close.on('click', function(event) {
		event.preventDefault();
        pop_inner.css( "display", "block" );
        pop_alert_code.text("");
        pop_alert_mail.text("");
        pop_input_code.css( "border", "2px solid #ff9900" );
        pop_input_mail.css( "border", "2px solid #ff9900" );
        pop_alert_mail.css( "color", "red" );
        popup_code.css( "display", "none" );
        pop_remail.css( "display", "none" );
        overlay.css( "display", "none" );
    });

    // работа с оверлейем
    overlay.on('click', function(event) {
		event.preventDefault();
        pop_inner.css( "display", "block" );
        pop_alert_code.text("");
        pop_alert_mail.text("");
        pop_input_code.css( "border", "2px solid #ff9900" );
        pop_input_mail.css( "border", "2px solid #ff9900" );
        pop_alert_mail.css( "color", "red" );
        popup_code.css( "display", "none" );
        pop_remail.css( "display", "none" );
        overlay.css( "display", "none" );
    });

}); 

  