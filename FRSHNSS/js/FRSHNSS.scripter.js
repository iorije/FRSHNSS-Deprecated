$(function () {
    //sets div containing img to height of img
    function SetDivHeight(div, i) {
        var imgHeight = div.find('img').height();
        div.css('height', imgHeight - i);
    };

    //set margin-top of training
    function SetMarginTop() {
        var width = $('.training').width();
        var newValue = 99 + ((width - 53) * (-54 / 114));
        $('.training p').css('margin-top', newValue);
    };
    
    //conditionaly loading
    function LoadImages() {
        if ($(this).width() <= 768) {
            //load image for small only
        } else {
            $('.large-image').each(function() {
                this.src = $(this).data('src');
            });
        }
    }

    $(document).ready(function () {
        //browser specifics
        var FF = !(window.mozInnerScreenX == null);
        var IE = /*@cc_on!@*/false;

        if (FF || IE) {
            //Firefox specific code
            if (FF) {
                $('.training p').css('font-size', '36px');
                $('a.button.fb-button').css('width', '155px');
                $('.trainingInfo p').css('height', $('.trainingInfo p').height() - 1);
                if ($(this).width() <= 768) {
                    $('.trainingInfo p').css('font-size', '22.8px');
                } else {
                    $('.trainingInfo p').css('padding-top', '5px');
                }


                $("#logo").parent().css("height", $("#logo").height() - 1);
            }

            //IE specific code
            if (IE) {
                if ($(this).width() <= 768) {
                    $('.trainingInfo p').css('font-size', '22.8px');
                }
                $('a.button.fb-button').css('width', '156px');
            }

            $(".rslides").css("right", "0px");

            //SetDivHeight
            $('.dynamic-div').each(function () {
                SetDivHeight($(this), 1);
            });
        } else {
            //SetDivHeight
            $('.dynamic-div').each(function () {
                SetDivHeight($(this), 0);
            });
        }

        LoadImages();
    });

    $(window).resize(function () {

        var FF = !(window.mozInnerScreenX == null);
        var IE = /*@cc_on!@*/false;

        if (FF || IE) {
            //Firefox specific code
            if (FF) {
                if ($(this).width() <= 768) {
                    $('.trainingInfo p').css('font-size', '22.8px');
                } else {
                    $('.trainingInfo p').css('font-size', '30.5px');
                }

                $("#logo").parent().css("height", $("#logo").height() - 1);
            }

            //IE specific code
            if (IE) {
                if ($(this).width() <= 768) {
                    $('.trainingInfo p').css('font-size', '22.8px');
                } else {
                    $('.trainingInfo p').css('font-size', '30.5px');
                }
            }
            //SetDivHeight
            $('.dynamic-div').each(function () {
                SetDivHeight($(this), 1);
            });
        } else {
            //SetDivHeight
            $('.dynamic-div').each(function () {
                SetDivHeight($(this), 0);
            });
        }
        LoadImages();
    });

    //carousel
    $(window).load(function () {
        $(".rslides").responsiveSlides({
            auto: true,             // Boolean: Animate automatically, true or false
            speed: 1000,            // Integer: Speed of the transition, in milliseconds
            timeout: 7000,          // Integer: Time between slide transitions, in milliseconds
            pager: false,           // Boolean: Show pager, true or false
            nav: false,             // Boolean: Show navigation, true or false
            random: true,          // Boolean: Randomize the order of the slides, true or false
        });
    });
});