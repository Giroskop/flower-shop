
$(document).ready(function () {
  const flowerSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    hashNavigation: {
      watchState: true,
    },
  
    keyboard: {
      enabled: true,
      onlyViewport: true,
    },
  
    // adaptive v
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6,
      }
    }
  
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    keyboard: {
      enabled: true,
      onlyViewport: true,
      pageUpDown: true,
    }
  });
  
  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
})

// COUNTER V1
const btns = document.querySelectorAll('.counter-button')

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.counter-input')
    const currentValue = +inp.value
    let newValue;

    if (direction === 'plus') {
      newValue = currentValue + 1
    } else {
      newValue = currentValue - 1 > 0 ? currentValue -1 : 0;
    }
    inp.value = newValue
  })
})

// MORE FLOWERS
const moreFlowers = document.querySelector('.more-flowers') // кнопка
const hiddenCardsPrimaryLength = document.querySelectorAll('.card-hidden').length // изначальное количество скрытых элементов

moreFlowers.addEventListener('click', function () {
  const hiddenCards = document.querySelectorAll('.card-hidden') // массив с скрытыми элементами
  let howManyLeft = hiddenCards.length < 4 ? hiddenCards.length : 4 // оставшееся количество срытых элементов
  console.log(hiddenCards)

  for (let i = 0; i < howManyLeft; i++) {
    hiddenCards[i].classList.remove('card-hidden')
  }

  if (hiddenCards.length < 5) {
    moreFlowers.innerHTML = 'СВЕРНУТЬ ОБРАТНО)))'

    moreFlowers.addEventListener('click', function () {
      const card = document.querySelectorAll('.card') // массив с показанными элементами
    })
  }
})
console.log(document.querySelectorAll('.card-hidden'))


/*       for (let i = hiddenCardsPrimaryLength - 1; i > 0; i--) {
        card[i].classList.add('card-hidden')
      } */


/* for (let i = 0; i < hiddenCards.length; i++) {
  if (hiddenCards[i].contains('card-hidden')) {
    continue
  } else {
    moreFlowers.innerHTML = 'СВЕРНУТЬ ОБРАТНО)))'
  }
}
const ert = document.querySelectorAll('.card')
ert.forEach(function(item) {
  console.log(item.classList.contains('card-hidden'))
}) */