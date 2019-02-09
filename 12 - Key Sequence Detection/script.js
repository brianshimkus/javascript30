const pressed = [];
const secretCode = 'brian'; 

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)) {
    console.log('There it is.');
    cornify_add();
  }
  console.log(pressed);
})