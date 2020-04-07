const engKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲',
    'Ctrl', 'Win', '', 'Ctrl', '◀', '▼', '▶'];

const engKeysShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 
    'Ctrl', 'Win', '', 'Ctrl', '◀', '▼', '▶'];

const rusKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 
    'Ctrl', 'Win', '', 'Ctrl', '◀', '▼', '▶'];

const rusKeysShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
    'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 
    'Ctrl', 'Win', '', 'Ctrl', '◀', '▼', '▶'];

const specialKeys = ['CapsLock', 'Backspace', 'Tab', 'Enter', 'ShiftLeft', 
    'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',
    'MetaRight', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];

const changingKeys = ['BracketLeft','BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'IntlBackslash'];
const firstRow = ['Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0', 'Minus', 'Equal'];
const alphabet = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"];

const input = document.createElement('textarea');
const divKeyboard = document.createElement('div');
const infoText = document.createElement('div');

divKeyboard.id = 'keyboard';
infoText.id = 'infoText';
input.id = 'input';
input.setAttribute('readonly', 'readonly');
document.body.appendChild(infoText);
document.body.appendChild(input);
document.body.appendChild(divKeyboard);
document.querySelector('#infoText').innerHTML = 'Change language: LShift + LAlt';

window.onload = function() {
    document.body.setAttribute('onkeydown', 'if(event.keyCode==9) return false;');

    let leftAlt;
    let leftShift;
    let capsLock = false;
    let isEng = Number(localStorage.getItem('isEng'));
    const currentKeys = isEng === 1 ? engKeys : rusKeys;

    function init(keyboardKeys){
        let out = '';
        out += `<div class="key" id="IntlBackslash">${keyboardKeys[0]}</div>`;
        for(let i = 1; i < 13; i++){
            out += `<div class="key" id="${firstRow[i - 1]}">${keyboardKeys[i]}</div>`;
        }
        out += `<div class="key" id="Backspace">${keyboardKeys[13]}</div>`;
        out += `<div class="key" id="Tab">${keyboardKeys[14]}</div>`;
        for(let i = 0; i < 10; i++){
            out += `<div class="key" id="${alphabet[i]}">${keyboardKeys[i+15]}</div>`;
        }
        out += `<div class="key" id="BracketLeft">${keyboardKeys[25]}</div>`;
        out += `<div class="key" id="BracketRight">${keyboardKeys[26]}</div>`;
        out += '<div class="key" id="Backslash">\\</div>';
        out += `<div class="key" id="CapsLock">${keyboardKeys[28]}</div>`;
        for(let i = 0; i < 9; i++){
            out += `<div class="key" id="${alphabet[i + 10]}">${keyboardKeys[i + 29]}</div>`;
        }
        out += `<div class="key" id="Semicolon">${keyboardKeys[38]}</div>`;
        out += `<div class="key" id="Quote">${keyboardKeys[39]}</div>`;
        out += `<div class="key" id="Enter">${keyboardKeys[40]}</div>`;
        out += '<div class="key" id="ShiftLeft">Shift</div>';
        for(let i = 0; i < 7; i++){
            out += '<div class="key" id="' + alphabet[i + 19] + '">' + keyboardKeys[i + 41] + '</div>';
        }
        out += `<div class="key" id="Comma">${keyboardKeys[48]}</div>`;
        out += `<div class="key" id="Period">${keyboardKeys[49]}</div>`;
        out += `<div class="key" id="Slash">${keyboardKeys[50]}</div>`;
        out += '<div class="key" id="ShiftRight">Shift</div>';
        out += `<div class="key" id="ControlLeft">${keyboardKeys[52]}</div>`;
        out += `<div class="key" id="MetaLeft">${keyboardKeys[53]}</div>`;
        out += '<div class="key" id="AltLeft">Alt</div>';
        out += `<div class="key" id="Space">${keyboardKeys[54]}</div>`;
        out += '<div class="key" id="MetaRight">Win</div>';
        out += '<div class="key" id="AltRight">Alt</div>';
        out += `<div class="key" id="ArrowLeft">${keyboardKeys[56]}</div>`;       
        out += `<div class="key" id="ArrowUp">${keyboardKeys[51]}</div>`;
        out += `<div class="key" id="ArrowDown">${keyboardKeys[57]}</div>`;
        out += `<div class="key" id="ArrowRight">${keyboardKeys[58]}</div>`;
        document.querySelector('#keyboard').innerHTML = out;
        }

    init(currentKeys);

    let outStr = '';
    function keydown(event){
        if (event.code === 'ShiftLeft') {
            leftShift = true;
        } else if (event.code === 'AltLeft') {
            leftAlt = true;
        }
        if (event.code === 'ShiftLeft') {
            const currentKeys = isEng === 1 ? engKeysShift : rusKeysShift;
            init(currentKeys);
            document.getElementById('ShiftLeft').classList.add('pressed');
        }
        if (event.code === 'ShiftRight') {
            const currentKeys = isEng === 1 ? engKeysShift : rusKeysShift;
            init(currentKeys);
            document.getElementById('ShiftRight').classList.add('pressed');
        }
        for(let i = 0; i < currentKeys.length; i++){
            if(event.code === alphabet[i]){
                document.getElementById(alphabet[i]).classList.add('pressed');
                if(!capsLock) outStr += document.getElementById(alphabet[i]).innerHTML;
                    else outStr += document.getElementById(alphabet[i]).innerHTML.toUpperCase();
                
            }
            if(event.code === specialKeys[i]){
                document.getElementById(specialKeys[i]).classList.add('pressed');
                if(event.code === 'ArrowLeft') outStr += '◀';
                if(event.code === 'ArrowUp') outStr += '▲';
                if(event.code === 'ArrowDown') outStr += '▼';
                if(event.code === 'ArrowRight') outStr += '▶';
                switch (document.getElementById(specialKeys[i]).innerText) {
                    case 'Backspace':
                        outStr = outStr.substr(0, outStr.length-1);
                        break;
                    case 'Enter':
                        outStr += '\n';
                        break;
                    case '':
                        outStr += ' ';
                        break;
                    case 'Tab':
                        outStr += '\t';
                        break;
                    case 'CapsLock':
                        if(!capsLock){
                            capsLock = true;
                        } else capsLock = false;
                        outStr += '';
                        break;
                  }
            }
            if(event.code === changingKeys[i]){
                document.getElementById(changingKeys[i]).classList.add('pressed');
                if(!capsLock) {
                    if(event.key === '<' && isEng) outStr += '<';
                    else if(event.key === '>' && isEng) outStr += '>';
                    else outStr += document.getElementById(changingKeys[i]).innerHTML;
                }
                    else outStr += document.getElementById(changingKeys[i]).innerHTML.toUpperCase();
            }
            if(event.code === firstRow[i]){
                document.getElementById(firstRow[i]).classList.add('pressed');
                if(event.key === '&' && isEng){
                    outStr += document.getElementById(firstRow[i]).innerHTML;
                    outStr = outStr.substr(0, outStr.length-4);
                } else outStr += document.getElementById(firstRow[i]).innerHTML.toLowerCase();
            }
            if(event.key === currentKeys[i]){
                if(event.code === changingKeys[i]) {
                    document.getElementById(currentKeys[i]).classList.add('pressed');
                    outStr += document.getElementById(currentKeys[i]).innerHTML;
                }
            }
        }
        document.getElementById('input').value = outStr;
    }
    function keyup(event){
        for(let i = 0; i < currentKeys.length; i++){
            if(event.code === alphabet[i]){
                document.getElementById(alphabet[i]).classList.remove('pressed');
            }
            if(event.code === specialKeys[i]){
                document.getElementById(specialKeys[i]).classList.remove('pressed');
                if(event.code === 'CapsLock'){
                    if(!capsLock){
                        capsLock = true;
                    } else capsLock = false;
                }
            }
            if(event.key === currentKeys[i]){
                if(event.code === changingKeys[i]) {
                    document.getElementById(currentKeys[i]).classList.remove('pressed');
                }
            }
            if(event.code === firstRow[i]){
                document.getElementById(firstRow[i]).classList.remove('pressed');
            }
            if(event.code === changingKeys[i]){
                document.getElementById(changingKeys[i]).classList.remove('pressed');
            }
        }
        if (event.code === 'ShiftLeft') {
            leftShift = false;
            if (leftAlt) {
              isEng = Number(!isEng);
              const currentKeys = isEng === 1 ? engKeys : rusKeys;
              init(currentKeys);
            }
        } else if (event.code === 'AltLeft') {
            leftAlt = false;
            if (leftShift) {
              isEng = Number(!isEng);
              const currentKeys = isEng === 1 ? engKeys : rusKeys;
              init(currentKeys);
            }
        }
        if (event.code === 'ShiftLeft') { 
            const currentKeys = isEng === 1 ? engKeys : rusKeys;
            init(currentKeys);
        }
        if (event.code === 'ShiftRight') { 
            const currentKeys = isEng === 1 ? engKeys : rusKeys;
            init(currentKeys);
        }
    }
    document.addEventListener('keydown', (event) =>{
        keydown(event);
    });
    document.addEventListener('keyup', (event) =>{
        keyup(event);
    });
    document.addEventListener('mousedown', (e)=>{
        if(e.target.classList.contains('key')){
            e.target.classList.add('pressed');
            if(event.code === 'ArrowLeft') outStr += '◀';
            if(event.code === 'ArrowUp') outStr += '▲';
            if(event.code === 'ArrowDown') outStr += '▼';
            if(event.code === 'ArrowRight') outStr += '▶';
            switch (e.target.innerText) {
                case 'Backspace':
                    outStr = outStr.substr(0, outStr.length-1);
                    break;
                case 'Enter':
                    outStr += '\n';
                    break;
                case '':
                    outStr += ' ';
                    break;
                case 'Shift':
                    outStr += '';
                    break;
                case 'Ctrl':
                    outStr += '';
                    break;
                case 'Alt':
                    outStr += '';
                    break;
                case 'Win':
                    outStr += '';
                    break;
                case 'Tab':
                    outStr += '\t';
                    break;
                case 'CapsLock':
                    if(!capsLock){
                        capsLock = true;
                    } else capsLock = false;
                    outStr += '';
                    break;
                default:
                    if(e.target.innerHTML === '&lt;') outStr += '<';
                    else if(e.target.innerHTML === '&gt;') outStr += '>';
                    else if(e.target.innerHTML === '&amp;') outStr += '&';
                    else if(capsLock){
                        outStr += e.target.innerHTML.toUpperCase();
                    } else outStr += e.target.innerHTML;
                    break;
              }
        }
        document.getElementById('input').value = outStr;
    });
    document.addEventListener('mouseup', (e)=>{
        e.target.classList.remove('pressed');
    });
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('isEng', isEng);
      });
};