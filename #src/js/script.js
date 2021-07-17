@@include('../../node_modules/jquery/dist/jquery.min.js');


@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js');
@@include('../../node_modules/swiper/swiper-bundle.min.js');

const swiperReview = new Swiper('.review__slider', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  slidesPerColumn: 1,
  spaceBetween: 30,
  pagination: {
    el: '.review__swiper-pagination',
    type: 'bullets',
  },
});

const swiperContact = new Swiper('.contact__slider', {
  loop: true,
  direction: "vertical",
  grabCursor: true,
  slidesPerColumn: 1,
  autoHeight: true,
  freeMode: true,
  pagination: {
    el: '.contact__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


const swiperPartner = new Swiper('.partners__slider', {
  loop: true,
  slidesPerView: 5,
  slidesPerColumn: 1,
  // autoHeight: true,
  navigation: {
    nextEl: '.partners-next',
    prevEl: '.partners-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    },
    769: {
      slidesPerView: 4
    },
    // when window width is >= 640px
    993: {
      slidesPerView: 5
    }
  }
});

const swiperCard = new Swiper('.classes__slider', {
  loop: true,
  slidesPerView: 4,
  slidesPerColumn: 1,
  spaceBetween: 30,
  // autoHeight: true,
  navigation: {
    nextEl: '.classes-next',
    prevEl: '.classes-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 15
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    993: {
      slidesPerView: 4
    }
  }
});

$(function () {

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 0
    }
  });
})

'use strict'

  document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
    let burger = document.querySelector(".burger");
    let menuBody = document.querySelector(".menu__body");
		if (targetElement.classList.contains('burger')) {
			burger.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		} else {
      burger.classList.remove("_active");
			menuBody.classList.remove("_active");
    }
  }

  const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
 

  


// function testWebP(callback) {
// 	var webP = new Image();
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};
// 	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
// 	if (support == true) {
// 		document.querySelector('html').classList.add('_webp');
// 	} else {
// 		document.querySelector('html').classList.add('_no-webp');
// 	}
// });
