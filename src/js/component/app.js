const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


(function () {
  const burgerBtn = document.querySelector('.header__burger-btn');
  burgerBtn.addEventListener ('click', () => {
    burgerBtn.classList.toggle('header__burger-btn-active');
  });
}());  


const myButton = document.getElementById('header__burger-btn');
const myElement = document.getElementById('burger');

myButton.addEventListener('click', function() {
  if (myElement.style.display === 'flex') {
    myElement.style.display = 'none';
  } else {
    myElement.style.display = 'flex';
  }
});