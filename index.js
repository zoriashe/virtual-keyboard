const keysEn = [
  {value: '`', code: 'Backquote'},
  {value: '1',},
  {value: '2',},
  {value: '3',},
  {value: '4',},
  {value: '5',},
  {value: '6',},
  {value: '7',},
  {value: '8',},
  {value: '9',},
  {value: '0',},
  {value: '-',},
  {value: '=',},
  {value: 'Backspace', isSpecial: true, code: 'Backspace'},
  {value: 'Tab', code: 'Tab'},
  {value: 'q',},
  {value: 'w',},
  {value: 'e',},
  {value: 'r',},
  {value: 't',},
  {value: 'y',},
  {value: 'u',},
  {value: 'i',},
  {value: 'o',},
  {value: 'p',},
  {value: '[',},
  {value: ']',},
  {value: '\\',},
  {value: 'del',},
  {value: 'CapsLock', isSpecial: true, code: 'CapsLock'},
  {value: 'a',},
  {value: 's',},
  {value: 'd',},
  {value: 'f',},
  {value: 'g',},
  {value: 'h',},
  {value: 'j',},
  {value: 'k',},
  {value: 'l',},
  {value: ';',},
  {value: `'`,},
  {value: 'Enter', isSpecial: true, code: 'Enter'},
  {value: 'Shift', isSpecial: true, code: "ShiftLeft"},
  {value: '\\',},
  {value: 'z',},
  {value: 'x',},
  {value: 'c',},
  {value: 'v',},
  {value: 'b',},
  {value: 'n',},
  {value: 'm',},
  {value: ',',},
  {value: '.',},
  {value: '/',},
  {value: 'ArrUp', code: 'ArrowUp'},
  {value: 'Shift', code: "ShiftRight"},
  {value: 'Ctrl', code: 'ControlLeft'},
  {value: 'Win',},
  {value: 'Alt', code: 'AltLeft'},
  {value: ' ', isSpace: true, code: 'Space'},
  {value: 'Alt', code: 'AltRight'},
  {value: 'Ctrl', code: 'ControlRight'},
  {value: 'ArrLeft', code: 'ArrowLeft'},
  {value: 'ArrDown', code: 'ArrowDown'},
  {value: 'ArrRight', code: 'ArrowRight'},
]

const bodyInner = `
  <textarea name="sample" id="text-input" cols="115" rows="5"></textarea>
  <div class="keyboard" id="keyboard">
  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = bodyInner
})

let keyboard;


setTimeout(() => {
  keyboard = document.querySelector('#keyboard')
  appendKeyboard()
}, 1);

function appendKeyboard() {
  keysEn.forEach(element => {
    const key = document.createElement('div')
    if (element.isSpecial) {
      key.classList.add('special-key')
    } else if (element.isSpace) {
      key.classList.add('space-key')
    } else {
      key.classList.add('key')
    }
    if (element.code) {
      key.dataset.code = element.code
    }
    key.innerText = element.value
    keyboard.appendChild(key)
  })
}

function getCaps(e, element) {
  if (e.getModifierState("CapsLock")) {
    if (e.getModifierState("Shift")) {
      notCaps(element)
    } else {
      Caps(element)
    }
  } else {
    if (e.getModifierState("Shift")) {
      Caps(element)
    } else {
      notCaps(element)
    }
  }
}

function Caps(element) {
  const temp = element.innerText.toUpperCase()
  element.innerText = temp
}

function notCaps(element) {
  const temp = element.innerText.toLowerCase()
  element.innerText = temp
}

addEventListener('keydown', (e) => {
  let btns = keyboard.childNodes
  const textarea = document.querySelector('#text-input')

  btns.forEach(element => {
    e.preventDefault()
    if (element.dataset) {
      if (element.dataset.code === e.code) {
        element.classList.add('pressed')
        if (e.code === 'Enter') 
          textarea.textContent += '\n';
        if (e.code === 'Tab')
          textarea.textContent += '    ';
        if (e.code === 'Backspace')
          textarea.textContent = textarea.textContent.slice(0, (textarea.textContent.length - 1))
      }
      
      if (e.code === 'CapsLock' || e.code === "ShiftLeft" || e.code === "ShiftRight") {
        getCaps(e, element)
      }
    } 
    if (element.innerText === e.key) {
      element.classList.add('pressed')
      textarea.textContent += e.key
    }
      
    
  }); 
})

addEventListener('keyup', (e) => {
  let btns = keyboard.childNodes
  btns.forEach(element => {
    if (element.dataset) {
      if (element.dataset.code === e.code) {
        element.classList.remove('pressed')
      }
      getCaps(e, element)
    } 
    if (element.innerText === e.key) {
      element.classList.remove('pressed')
    }
  })
})



setTimeout(() => {
  let btns = keyboard.childNodes
  const textarea = document.querySelector('#text-input')

  function clickHandler({ currentTarget: target }) {
    target.classList.add('pressed')
    textarea.textContent += target.textContent
    setTimeout(() => {
      target.classList.remove('pressed')
    }, 150);
  }
  btns.forEach(btn => btn.addEventListener('click', clickHandler))
}, 1)