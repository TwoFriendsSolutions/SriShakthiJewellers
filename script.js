$(document).ready(function () {
    
    (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
    
    $('.gold__right-fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gold__right-nav'
    });

    $('.gold__right-nav').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.gold__right-fade'
    });
    
     $('.gold__right-fade2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gold__right-nav2'
    });

    $('.gold__right-nav2').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.gold__right-fade2'
    });
    
    $('.gold__right-fade3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gold__right-nav3'
    });

    $('.gold__right-nav3').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.gold__right-fade3'
    });
    
$('.gold__right-fade4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gold__right-nav4'
    });

    $('.gold__right-nav4').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.gold__right-fade4'
    });
    
    $('.gold__right-fade5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gold__right-nav5'
    });

    $('.gold__right-nav5').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.gold__right-fade5'
    });
    

     $('.silver__right-fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.silver__right-nav'
    });

    $('.silver__right-nav').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.silver__right-fade'
    });
    
     $('.silver__right-fade2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.silver__right-nav2'
    });

    $('.silver__right-nav2').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.silver__right-fade2'
    });
    
    $('.silver__right-fade3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.silver__right-nav3'
    });

    $('.silver__right-nav3').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.silver__right-fade3'
    });
    
$('.silver__right-fade4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.silver__right-nav4'
    });

    $('.silver__right-nav4').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.silver__right-fade4'
    });
    
    $('.silver__right-fade5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.silver__right-nav5'
    });

    $('.silver__right-nav5').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        asNavFor: '.silver__right-fade5'
    });
    
var input = document.querySelector('.input__text'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

    var input1 = document.querySelector('.input__email'); // get the input element
input1.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input1); // immediately call the function
function resizeInput() {
  this.style.width = ((this.value.length)+2) + "ch";
    console.log(this.value.length);
}

});
