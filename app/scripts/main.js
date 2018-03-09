  // hamburger button
;(function() {
  const ham = document.querySelector('.js-hamburger');
  const nav = document.querySelector('.js-nav');
  if (ham) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('is-active');
      nav.classList.toggle('is-show');
    });
  }
}())

// nav tab
;(function() {
  const tabLinks = document.querySelectorAll('.nav-1__link')
  const tabContent = document.querySelectorAll('.nav-1__content')

  function showTab(el) {
    for (let i = 0; i < tabLinks.length; i++) {
      tabContent[i].classList.add('hide')
    }  
    el.classList.remove('hide')
  }

  function showLink(el) {
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active')
    }  
    el.classList.add('active')
  }
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', showLink.bind(undefined, tabLinks[i]))
    tabLinks[i].addEventListener('click', showTab.bind(undefined, tabContent[i]))
  }

}())
