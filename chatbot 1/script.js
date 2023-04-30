
let sendBtn = document.getElementById("sendBtn");
let textbox = document.getElementById("textbox");
let chatContainer = document.getElementById("chatContainer");

function sendMessage(messageText){

    var messageElement = document.createElement('div')
    messageElement.classList.add('w-50')
    messageElement.classList.add('shadow-sm')
    messageElement.style.margin = ('10px');
    messageElement.style.padding = ('5px');

    messageElement.innerHTML = "<span style="+"margin-left: 15px">"+user:</span>"+
    '<a id="hello"'+ 'style="margin-left: 15px"'+'>'+messageText+'</a>';

    chatContainer.appendChild(messageElement);

}

sendBtn.addEventListener('click',function(){

    let messageText = textbox.value;
    sendMessage(messageText);

})