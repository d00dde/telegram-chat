(function () {
  //###### КОНСТАНТЫ КОНФИГУРАЦИИ ##########
const iconSrc = 'data:image/png;base64,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';
const soundMsgCollapsedPath = 'sounds/viber.mp3';
const soundMsgOpenedPath = 'sounds/vk.mp3';
const webSocketPath = location.origin.startsWith("http") ? location.origin.replace(/^http/, 'ws') : 'ws://still-wildwood-56365.herokuapp.com';
const prefix = 'chat' + Math.floor(Math.random()*10000).toString(16);
const animateInterval = 10000;
//###### УСТАНОВКА СТИЛЕЙ ##########
const css = `
.${prefix}-chat-wrapper {
	position: fixed;
	right: 10px;
	bottom: 15px;
	width: 400px;
	max-width: 40%;
	height: 80%;
	border: 2px solid #0088cc;
	border-radius: 5px;
	border-top-left-radius: 25px;
	display: flex;
	flex-direction: column;
	background-color: #eee;
	transition: ease-in-out .5s;
	overflow: hidden;
}
.${prefix}-collapsed {
	width: 48px;
	height: 48px;
	border-radius: 50%;
}
.${prefix}-title {
	display: flex;
	justify-content: space-between;
}
.${prefix}-icon {
	width: 64px;
	height: 64px;
	margin-top: -8px;
	margin-left: -8px;
	cursor: pointer;
}
.${prefix}-status {
	display: flex;
	align-items: center;
}
.${prefix}-indicator {
	background-color: yellow;
	border-radius: 50%;
	width: 15px;
	height: 15px;
	border: 1px solid #666;
	margin-right: 5px;
	cursor: pointer;
}
.${prefix}-caption {
	margin-right: 10px;
	min-width: 100px;
	font-size: 1.1rem;
}
.${prefix}-name-input {
	margin: 10px;
	margin-top: 0;
	padding: 3px;
	font-size: 1rem;
}
.${prefix}-message-input {
	margin: 10px;
	font-size: 1.1rem;
	min-height: 45px;
	box-sizing: border-box;
	resize: none;
}
.${prefix}-scroll-wrapper {
	padding: 10px;
	max-height: 85%;
	margin-top: 10px;
	overflow-y: auto;
}
.${prefix}-output {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
}
.${prefix}-outgoing, .${prefix}-incoming {
	padding: 10px;
	margin: 5px;
	word-wrap: break-word;
	max-width: 50%;
	border: 1px solid #666;
	border-radius: 10px;
}
.${prefix}-outgoing {
	align-self: flex-start;
	background-color: #eeff41;
}
.${prefix}-incoming {
	align-self: flex-end;
	background-color: #40c4ff;
}
.${prefix}-missed-messages {
	display: none;
	position: fixed;
	bottom: 55px;
	right: 10px;
	width: 20px;
	height: 20px;
	font-size: .8rem;
	border-radius: 50%;
	background-color: red;
	color: white;
	text-align: center;
	line-height: 20px;
}
@keyframes shakeX {
  from,
  to {transform: translate3d(0, 0, 0);}
  10%,
  30%,
  50%,
  70%,
  90% {transform: translate3d(-10px, 0, 0);}
  20%,
  40%,
  60%,
  80% {transform: translate3d(10px, 0, 0);}
}
@keyframes tada {
  from {transform: scale3d(1, 1, 1);}
  10%,
  20% {transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);}
  30%,
  50%,
  70%,
  90% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);}
  40%,
  60%,
  80% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);}
  to {transform: scale3d(1, 1, 1);}
}
`;
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);

//###### СОЗДАНИЕ РАЗМЕТКИ ЧАТА ##########
function createElement (type, classes, parent = null) {
  const item = document.createElement(type);
  if(Array.isArray(classes)){
    classes.forEach((className) => {
      item.classList.add(className);
    });
  }
  else {
    item.classList.add(classes);
  }
  parent && parent.appendChild(item);
  return item;
}

const $wrapper = createElement('div', [`${prefix}-chat-wrapper`, `${prefix}-collapsed`]);
const $title = createElement('div', `${prefix}-title`, $wrapper);
const $icon = createElement('img', `${prefix}-icon`, $title);
$icon.setAttribute('src', iconSrc);
const $status = createElement('div', `${prefix}-status`, $title);
const $indicator = createElement('div', `${prefix}-indicator`, $status);
const $caption = createElement('div', `${prefix}-caption`, $status);
$caption.innerText = 'Wait...';
const $name = createElement('input', `${prefix}-name-input`, $wrapper);
$name.setAttribute('type', 'text');
$name.setAttribute('placeholder', 'Введите ваше имя...');
const $message = createElement('textarea', `${prefix}-message-input`, $wrapper);
$message.setAttribute('type', 'text');
$message.setAttribute('placeholder', 'Введите сообщение...');
const $scrollWrapper = createElement('div', `${prefix}-scroll-wrapper`, $wrapper);
const $output = createElement('ul', `${prefix}-output`, $scrollWrapper);
document.body.appendChild($wrapper);
const $missedMessages = createElement('div', `${prefix}-missed-messages`, document.body);

//###### ЛОГИКА РАБОТЫ ЧАТА ##########
const soundMsgCollapsed = new Audio(soundMsgCollapsedPath);
const soundMsgOpened = new Audio(soundMsgOpenedPath);

let ws = null;
let collapsed = true;
let missedMessages = 0;

let animateTimer = setInterval(() => {
  $wrapper.style.animation= 'tada 1s';
  setTimeout(() => {
    $wrapper.style.animation= '';
  }, 1000);
}, animateInterval);

$message.onkeypress = (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    if(validate()){
      if(!ws){
        printMessage (`${prefix}-outgoing`, 'Ошибка сетевого соединения');
        return;
      }
      sendMessage();
      printMessage (`${prefix}-outgoing`, $message.value);
      soundMsgOpened.play();
      $message.value = '';
    }
  }
}
$icon.onclick = () => {
  if(animateTimer){
    clearInterval(animateTimer);
    animateTimer = 0;
  }
  $wrapper.classList.toggle(`${prefix}-collapsed`);
  collapsed = !collapsed;
  missedMessages = 0;
  printMissedMessages();
  if(ws || collapsed)
    return;
  connect();
}
$indicator.onclick = () => {
  if(ws)
    disconnect();
  else
    connect();
}

//###### ФУНКЦИИ ##########
function connect (){
  ws = new WebSocket (webSocketPath);
  ws.onopen = () => {
    $indicator.style.backgroundColor = '#00e676';
    $caption.innerText = 'Connected'
  };
  ws.onclose = () => {
    $indicator.style.backgroundColor = 'red';
    $caption.innerText = 'Disconnected'
  };
  ws.onmessage = (resp) => {
    collapsed ? soundMsgCollapsed.play() : soundMsgOpened.play();
    printMessage(`${prefix}-incoming`, resp.data);
    if(collapsed) {
      missedMessages++;
      printMissedMessages();
    }
  }
}
function disconnect (){
  ws.close();
  ws = null
}
function validate () {
  if(!$name.value.trim()){
    shakeInput($name);
    return false;
  }
  if(!$message.value.trim()){
    shakeInput($message);
    return false;
  }
  return true;
}
function sendMessage () {
  if(!ws)
    return;
  console.log(ws)
  ws.send(JSON.stringify({
    name: $name.value,
    msg: $message.value
  }));
}
function printMessage (type, message) {
	const item = document.createElement('li');
  item.innerText = message;
  item.classList.add(type)
	$output.appendChild(item);
}
function printMissedMessages () {
  if(missedMessages === 0) {
    $missedMessages.style.display = 'none';
    return;
  }
  $missedMessages.style.display = 'block';
  if(missedMessages > 9)
    $missedMessages.innerText = '9+';
  else
    $missedMessages.innerText = missedMessages;
}
function shakeInput (input) {
  input.style.animation= 'shakeX 1s';
  setTimeout(() => {
    input.style.animation= '';
  }, 1000);
}
})();
