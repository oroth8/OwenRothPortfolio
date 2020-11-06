/* =======================================================================================
    Template : Agroly
    Create :   Sept. 5th 2020
   ========================================================================================== */


/* ===============================================
    Function Call - Call Function Ones
   =============================================== */

   jQuery(document).ready(function () {
    "use strict";

    // here all ready functions

    loader();
    scroll_top();
    magnific_popup();
    accordion();
});

/* ===============================================
    1. PRELOADER
=============================================== */
function loader() {
 "use strict";
 setTimeout(function () {
     $('#loader-wrapper').fadeOut();
 }, 1500);
};

/* ===============================================
    2. SCROLL TOP
=============================================== */
function scroll_top() {
 "use strict";
 var offset = 300,
     offset_opacity = 1200,
     scroll_top_duration = 700,
     $back_to_top = $('.cd-top');

 $(window).scroll(function () {
     ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
     if ($(this).scrollTop() > offset_opacity) {
         $back_to_top.addClass('cd-fade-out');
     }
 });

 $back_to_top.on('click', function (event) {
     event.preventDefault();
     $('body,html').animate({
         scrollTop: 0,
     }, scroll_top_duration);
 });

};

/* ===============================================
    3. COUNTER
=============================================== */
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
            countNum: countTo
        },

        {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });
});

/* ===============================================
    4. MAGNIFIC POPUP GALLERY
=============================================== */
 function magnific_popup() {
     $('.image-popup-vertical-fit').magnificPopup({
         type: 'image',
         mainClass: 'mfp-with-zoom',
         gallery: {
             enabled: true
         },
         zoom: {
             enabled: true,

             duration: 300, // duration of the effect, in milliseconds
             easing: 'ease-in-out', // CSS transition easing function

             opener: function (openerElement) {

                 return openerElement.is('img') ? openerElement : openerElement.find('img');
             }
         }
     });
 };

/* ===============================================
    5. YOUTUBE POPUP
=============================================== */
function video_popup() {
    var $btnLoadMore = $(
        '<div class="btn-wrapper text-center"><a href="#" class="btn load-more">Load More</a></div>'
    );
    var items = $(".youtube-popup[data-listnum]");
    var count = items.length;
    var slice = 2;
    var current = 0;

    if (items.length > slice) {
        //bind load more event
        $btnLoadMore.on("click", function (e) {
            e.preventDefault();
            loadMoreNews();
        });
        //append load more button
        items.closest(".salvattore-grid").after($btnLoadMore);
    }

    function getItem(listnum) {
        return items
            .filter(function (index) {
                if ($(this).attr("data-listnum") == listnum) {
                    return true;
                }
            });
    }

    function loadMoreNews() {
        var end = current + slice;
        if (end >= count) {
            end = count;
            $btnLoadMore.hide();
        }
        while (current < end) {
            var listnum = current + 1; //data-listnum : 1-based
            var item = getItem(listnum);
            if (item) {
                item.fadeIn();
            }
            current++;
        }
    }

    //youtube popup
    $(".popup-youtube").magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                "</div>",
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"
                }
            },
            srcAction: "iframe_src"
        }
    });

    //init load
    loadMoreNews();
};

/* ===============================================
    6. FILTER GALLERY
=============================================== */
$(function () {
    var $margin = $("#kehl-grid").isotope({
        itemSelector: ".grid-box",
        // Different transition duration
        transitionDuration: "0.5s"
    });

    // on filter button click
    $(".filter-container li").click(function (e) {
        var $this = $(this);

        // Prevent default behaviour
        e.preventDefault();
        $('.filter li').removeClass('active');
        $this.addClass('active');

        // Get the filter data attribute from the button
        var $filter = $this.attr("data-filter");

        // filter
        $margin.isotope({
            filter: $filter
        });
    });
});

/* ===============================================
    7. MASONRY GALLERY
=============================================== */
 var $grid = $('.grid').imagesLoaded( function() {
 $grid.masonry({
     itemSelector: '.grid-box',
     percentPosition: true,
     columnWidth: '.grid-sizer'
 }); 
 });

/* ===============================================
    8. FAQ ACCORDION
=============================================== */
function accordion() {};
$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

$('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    $(this).closest('.accordion').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
});
(jQuery)

/* ===============================================
    9. ANIMATION
=============================================== */
 AOS.init({
     duration: 1200,
 })

/* ===============================================
    10. VIDEO POPUP
=============================================== */
 $('.popup-youtube, .popup-vimeo').magnificPopup({
     type: 'iframe',
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,
     fixedContentPos: false,
     markup: '<div class="mfp-iframe-scaler">' +
         '<div class="mfp-close"></div>' +
         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
         '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
     iframe: {
         patterns: {
             youtube: {
                 index: 'youtube.com/',
                 id: 'v=',
                 src: 'https://www.youtube.com/embed/%id%?autoplay=1'
             }
         }
     }
 });

 /* ===============================================
    11. Imager hover Movement   
=============================================== */
$(document).on('mousemove', function (e) {
    $('.light').css({
      left: e.pageX - 300,
      top: e.pageY - 300 });

  });

  var el = $('.js-tilt-container');

  el.on('mousemove', function (e) {var _$$offset =
    $(this).offset(),left = _$$offset.left,top = _$$offset.top;
    var cursPosX = e.pageX - left;
    var cursPosY = e.pageY - top;
    var cursFromCenterX = $(this).width() / 2 - cursPosX;
    var cursFromCenterY = $(this).height() / 2 - cursPosY;


    $(this).css('transform', 'perspective(500px) rotateX(' + cursFromCenterY / 40 + 'deg) rotateY(' + -(cursFromCenterX / 40) + 'deg) translateZ(10px)');

    var invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs(cursFromCenterX) : Math.abs(cursFromCenterX);

    //Parallax transform on image
    $(this).find('.js-perspective-neg').css('transform', 'translateY(' + cursFromCenterY / 10 + 'px) translateX(' + -(invertedX / 10) + 'px) scale(1.15)');

    $(this).removeClass('leave');
  });

  el.on('mouseleave', function () {
    $(this).addClass('leave');
});

/* ===============================================
    12. NEWS CAROUSEL
=============================================== */
   $('.news-carousel .owl-carousel').owlCarousel({
    stagePadding: 0,
    autoplay:true,
    autoplayTimeout: 2500,
    loop: true,
    dots: false,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.news-carousel .custom-nav',
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1050: {
            items: 3
        }
    }
});

/* ===============================================
    13. NAVBAR
=============================================== */

$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.navbar').addClass('navShadow') : $('.navbar').removeClass(
            'navShadow');
        windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '160px');
    });

    //Click Logo To Scroll To Top
    $('#logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
        e.preventDefault();
    });

    //Toggle Menu
    $('#menu-toggle').on('click', () => {
        $('#menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('#menu-toggle').removeClass('closeMenu');
        });
    });

});

/* ===============================================
    14. TYPING
=============================================== */
let wrapper;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll(stringTarget, container) {
    wrapper = document.querySelector('[' + container + ']');
    const stringsContainer = document.getElementsByClassName(stringTarget);

    while (wrapper) {
        for (i = 0; i < stringsContainer.length; i++) {
            const string = stringsContainer[i].textContent;
            await write(string);
            await sleep(1000);
            await erase();
            await sleep(1000);
        };
    }
};

async function write(text) {
    let index = 0;
    while (index < text.length) {
        const timeout = 100;
        await sleep(timeout);
        index++;
        wrapper.innerHTML = text.substring(0, index);
    }
};


async function erase() {
    while (wrapper.textContent.length) {
        const timeout = 100;
        await sleep(timeout);
        wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
    }
};

writingAll('text-layer', 'data-text');

/* ===============================================
    15. SKILLS
=============================================== */
"use strict"; // Start of use strict
$('.circular-progress').each(function () {

    var Self = $(this);
    var getID = Self.attr('id');

    const QUARTER_R = Math.PI / 2;
    const otherBall = document.getElementById(getID + '-other-ball');

    const containerWidth = document.getElementById(getID).offsetWidth;
    const strokeWidth = 3;
    const strokeColor = '#e6a100';
    const lineWidthInPixels = strokeWidth / 100 * containerWidth;
    // Radius is from circle's exact center to the middle of the line
    const radius = (containerWidth - lineWidthInPixels) / 2
    const center = (containerWidth / 2);

    var progressCount = Self.data('progress-count');
    const circle = new ProgressBar.Circle('#' + getID, {
        color: strokeColor,
        easing: 'easeInOut',
        duration: 1200,
        strokeWidth: strokeWidth,
        text: {
            style: null, // manually style text
        },
        step: function (state, bar) {
            const angleR = bar.value() * 2 * Math.PI - QUARTER_R;
            const x = radius * Math.cos(angleR) + center;
            const y = radius * Math.sin(angleR) + center;
            otherBall.style.left = x + 'px';
            otherBall.style.top = y + 'px';
        }
    });

    circle.animate(progressCount); // Number from 0.0 to 1.0	
});
