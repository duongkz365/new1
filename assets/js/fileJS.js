//cate header
var cate = document.querySelector('.category')
var cateInside = document.querySelector('.category__inside') 
var overlay = document.querySelector('.overlay-cate');
$('.category').on('click',function(){
  $('.overlay-cate').show();
})   
// cate.addEventListener('click', function () {
//     overlay.style.display = 'block';
// })
$('.overlay-cate').on('click',function(){
  $('.overlay-cate').hide();
});
// overlay.addEventListener('click', function () {
//     overlay.style.display = 'none'
// })

//cate show list
var arrowIcons = document.querySelectorAll('.category__inside-list i')
var cateListHeading = document.querySelectorAll('.category__inside-heading')
for (icon of arrowIcons) {
    icon.onclick = function () {
        this.classList.toggle('cate-list-open')
        var nextSibling = this.nextElementSibling;
        while (nextSibling) {
            nextSibling.classList.toggle('cate-item-open')
            nextSibling = nextSibling.nextElementSibling;
        }
        var prevSibling = this.previousElementSibling;
        while (prevSibling) {
            prevSibling.classList.toggle('change-to-primary-color')
            prevSibling = prevSibling.nextElementSibling;
        }
    }
}


//flash sale timer
var countDownDate = new Date("Jan 1, 2022 0:0:0").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
    document.querySelector('.timer').innerHTML =
        `
        <ul class="timer__block">
            <li class="timer__item">
                <div class="timer__item-heading">Ngày</div>
                <div class="timer__item-numbers">${days}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Giờ</div>
                <div class="timer__item-numbers">${hours}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Phút</div>
                <div class="timer__item-numbers">${minutes}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Giây</div>
                <div class="timer__item-numbers">${seconds}</div>
            </li>
        </ul>
        `
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.timer').innerHTML = "EXPIRED";
  }
}, 1000);

// footer
var footerLists = document.querySelectorAll('.footer__content-heading');
var footerArrows = document.querySelectorAll('.footer__content-heading i')
    for (list of footerLists)
    {
        list.onclick = function () {
            this.nextElementSibling.classList.toggle('js-footer-list')
            this.childNodes[0].classList.toggle('footer__arrow-change')
        }    
    }


    // like
// var productLikeLinks = document.querySelectorAll(".product-action__link")
// var quantityOfLike = document.querySelector('.header__user-count');
// var likeNumber = parseInt(quantityOfLike.innerText);
// for (var link of productLikeLinks) {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         var icon = this.querySelector('.product-action__icon')
//         if (icon.classList.contains('ti-heart')) {
//             icon.classList.remove('ti-heart')
//             icon.classList.add('fas', 'fa-heart')
//             likeNumber += 1
//             quantityOfLike.innerText = likeNumber
//         }
//         else {
//             icon.classList.add('ti-heart')
//             icon.classList.remove('fas', 'fa-heart')
//             likeNumber -= 1
//             quantityOfLike.innerText = likeNumber
//         }
//     })
// }

//section 2
$('.section-2__category').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
    responsive: [
    {
        breakpoint: 9999,
        settings: 'unslick'    
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ],
    prevArrow: '.section-2__arrow-prev',
    nextArrow: '.section-2__arrow-next'
});

/* section 3 */
$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }
  ],
    prevArrow: '.carousel-control-prev',
    nextArrow: '.carousel-control-next'
});

/* section-5 */
$('.carousel-3').slick({
  rows: 2,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false
      }
    }
  ]
});
$('.carousel-4').slick({
  rows: 2,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false
      }
    }
  ]
});

/* section 4 */
$('.carousel-2').slick({
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: false,
  arrows: false,
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
  ]
});


//product
// var courseApi = 'http://localhost:3000/courses'
// fetch(courseApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (course) {
//         console.log(course)
//     })

        

