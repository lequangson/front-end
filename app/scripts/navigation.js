(function() {
  const trigger = document.querySelector('#trigger');
  const target = document.querySelector('#nav');
  const closeButton = document.querySelector('#closeBtn');
  const overlay = document.querySelector('#overlay');

  function hideNav() {
    target.classList.remove('is-show');
  }

  trigger.addEventListener('click', function() {
    target.classList.toggle('is-show');
  });

  closeButton.addEventListener('click', hideNav);
  overlay.addEventListener('click', hideNav);

}());
