const keysEn = [
  {value: '`', isSpecial: false, isSpace: false},
  {value: '2', isSpecial: false, isSpace: false},
  {value: '1', isSpecial: false, isSpace: false},
  {value: '3', isSpecial: false, isSpace: false},
  {value: '4', isSpecial: false, isSpace: false},
  {value: '5', isSpecial: false, isSpace: false},
  {value: '6', isSpecial: false, isSpace: false},
  {value: '7', isSpecial: false, isSpace: false},
  {value: '8', isSpecial: false, isSpace: false},
  {value: '9', isSpecial: false, isSpace: false},
  {value: '0', isSpecial: false, isSpace: false},
  {value: '-', isSpecial: false, isSpace: false},
  {value: '=', isSpecial: false, isSpace: false},
  {value: 'Backspace', isSpecial: true, isSpace: false},
  {value: 'Tab', isSpecial: false, isSpace: false},
  {value: 'q', isSpecial: false, isSpace: false},
  {value: 'w', isSpecial: false, isSpace: false},
  {value: 'e', isSpecial: false, isSpace: false},
  {value: 'r', isSpecial: false, isSpace: false},
  {value: 't', isSpecial: false, isSpace: false},
  {value: 'y', isSpecial: false, isSpace: false},
  {value: 'u', isSpecial: false, isSpace: false},
  {value: 'i', isSpecial: false, isSpace: false},
  {value: 'o', isSpecial: false, isSpace: false},
  {value: 'p', isSpecial: false, isSpace: false},
  {value: '[', isSpecial: false, isSpace: false},
  {value: ']', isSpecial: false, isSpace: false},
  {value: '\\', isSpecial: false, isSpace: false},
  {value: 'del', isSpecial: false, isSpace: false},
  {value: 'CapsLock', isSpecial: true, isSpace: false},
  {value: 'a', isSpecial: false, isSpace: false},
  {value: 's', isSpecial: false, isSpace: false},
  {value: 'd', isSpecial: false, isSpace: false},
  {value: 'f', isSpecial: false, isSpace: false},
  {value: 'g', isSpecial: false, isSpace: false},
  {value: 'h', isSpecial: false, isSpace: false},
  {value: 'j', isSpecial: false, isSpace: false},
  {value: 'k', isSpecial: false, isSpace: false},
  {value: 'l', isSpecial: false, isSpace: false},
  {value: ';', isSpecial: false, isSpace: false},
  {value: `'`, isSpecial: false, isSpace: false},
  {value: 'Enter', isSpecial: true, isSpace: false},
  {value: 'Shift', isSpecial: true, isSpace: false},
  {value: '\\', isSpecial: false, isSpace: false},
  {value: 'z', isSpecial: false, isSpace: false},
  {value: 'x', isSpecial: false, isSpace: false},
  {value: 'c', isSpecial: false, isSpace: false},
  {value: 'v', isSpecial: false, isSpace: false},
  {value: 'b', isSpecial: false, isSpace: false},
  {value: 'n', isSpecial: false, isSpace: false},
  {value: 'm', isSpecial: false, isSpace: false},
  {value: ',', isSpecial: false, isSpace: false},
  {value: '.', isSpecial: false, isSpace: false},
  {value: '/', isSpecial: false, isSpace: false},
  {value: 'ArrUp', isSpecial: false, isSpace: false},
  {value: 'Shift', isSpecial: false, isSpace: false},
  {value: 'Ctrl', isSpecial: false, isSpace: false},
  {value: 'Win', isSpecial: false, isSpace: false},
  {value: 'Alt', isSpecial: false, isSpace: false},
  {value: ' ', isSpecial: false, isSpace: true},
  {value: 'Alt', isSpecial: false, isSpace: false},
  {value: 'Ctrl', isSpecial: false, isSpace: false},
  {value: 'ArrLeft', isSpecial: false, isSpace: false},
  {value: 'ArrDown', isSpecial: false, isSpace: false},
  {value: 'ArrRight', isSpecial: false, isSpace: false},
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
    key.innerText = element.value
    keyboard.appendChild(key)
  })
}



addEventListener('keyup', (e) => {
  let btns = keyboard.childNodes
  btns.forEach(element => {
    if (element.innerText === e.key 
      || element.innerText === e.key.toLowerCase()
      || element.innerText === e.key.toUpperCase()) {
      element.classList.add('pressed')

      setTimeout(() => {
        element.classList.remove('pressed')
      }, 100);
  }}); 
})



setTimeout(() => {
  let btns = keyboard.childNodes

  function clickHandler({ currentTarget: target }) {
    target.classList.add('pressed')
    setTimeout(() => {
      target.classList.remove('pressed')
    }, 150);
  }

  btns.forEach(btn => btn.addEventListener('click', clickHandler))
}, 1)