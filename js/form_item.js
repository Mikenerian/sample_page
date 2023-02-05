function buttonClick() {
  msg.innerText = nameText.value;
}

let nameText = document.getElementById('nameText');
nameText.value = 'example';
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);