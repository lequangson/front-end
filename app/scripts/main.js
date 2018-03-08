;(function() {

  // Show send button and hide like button when input has value
  const msgInput = document.querySelector('.test-form__input');
  const sendBtn = document.querySelector('.test-form__send-btn');
  const ctaBtn = document.querySelector('.test-form__cta-btn');

  function sendShowLikeHide() {
    sendBtn.classList.remove('is-hide');
    ctaBtn.classList.add('is-hide');
  }

  function sendHideLikeShow() {
    sendBtn.classList.add('is-hide');
    ctaBtn.classList.remove('is-hide');
  }

  function clearMessage() {
    msgInput.value = '';
  }

  function enableKeyboad() {
    msgInput.focus();
  }

  function isInputEmpty() {
    return !msgInput.value.trim();
  }

  if (document.querySelector('.test-form')) {
    const form = document.querySelector('.test-form');
    form.onsubmit = function(e) {
      e.preventDefault();
      sendHideLikeShow();
    }
  }

  // Use case
  // user typing
  // send hidden - like show
  if (msgInput) {
    msgInput.addEventListener('keyup', () => {
      if (isInputEmpty()) {
        sendHideLikeShow();
      } else {
        sendShowLikeHide();
      }
    });

    // input blur
    msgInput.addEventListener('blur', () => {
      if (isInputEmpty()) {
        sendHideLikeShow();
      } else {
        sendShowLikeHide();
      }
    });
  }

  // send message action
  // when input blur
  function sendMessageWhenInputBlur() {
    clearMessage();
    sendHideLikeShow();
  }

  // when input focus
  function sendMessageWhenInputFocus() {
    clearMessage();
    sendShowLikeHide();

    // action only for mobile device
    enableKeyboad();
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      sendMessageWhenInputFocus();
    });
  }

}())

if (document.getElementById('emojiText')) {
  ;(function() {
    // emoji
    const emojiText = document.getElementById('emojiText');
    const output = emojione.shortnameToImage(emojiText.textContent);
    emojiText.innerHTML = output;

    const msgInput = document.querySelector('.test-form__input');
    msgInput.addEventListener('change', () => {
      console.log('input change');
    });

    const emojiBtn = document.getElementById('emojiBtn');
    const emoji = document.getElementById('emoji');
    const emojiGhost = document.getElementById('emojiGhost');

    // Toogle emoji selection
    let emojiIsShow = false;
    function toggleEmoji() {
      if (!emojiIsShow) {
        emojiIsShow = true;
        emoji.classList.remove('is-hide');
        emojiGhost.classList.remove('is-hide');
      } else {
        emojiIsShow = false;
        emoji.classList.add('is-hide');
        emojiGhost.classList.add('is-hide');
      }
    }

    emojiBtn.addEventListener('click', toggleEmoji);

    // get caret position
    let oldMsgValue = msgInput.value;
    let caretPosition = 0;

    function getCarretPosition() {
      caretPosition = msgInput.selectionStart;
    }

    msgInput.addEventListener('keyup', getCarretPosition);

    const emojiIcons = document.querySelectorAll('.test-emoji__item');

    // attach event for all emojis item
    for (let i = 0; i < emojiIcons.length; i += 1) {
      emojiIcons[i].addEventListener('click', function() {
        const emojiShortnameLength = emojiIcons[i].getAttribute('data-emoji').length;
        const a = msgInput.value.substr(0, caretPosition);
        const b = msgInput.value.substr(caretPosition, msgInput.value.length);
        const c = `${a}${emojiIcons[i].getAttribute('data-emoji')}${b}`;

        msgInput.value = c;

        msgInput.selectionEnd = caretPosition + emojiShortnameLength;
        getCarretPosition();
        msgInput.focus();
      });
    }

  }())
}


if (document.querySelector('.btn-ground__btn')) {
  ;(function() {
    const btnGround = document.querySelectorAll('.btn-ground__btn');

    function removeActive() {
      [].map.call(btnGround, (btn) => (btn.classList.remove('active')))
    }

    function addActive(event) {
      removeActive();
      event.target.classList.add('active')
    }

    [].map.call(btnGround, (btn) => (btn.addEventListener('click', addActive)
      )
      )
  }())
}
