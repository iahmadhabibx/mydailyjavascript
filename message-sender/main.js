var send_button = document.getElementById("send");
var message_box = document.getElementById("message-container");

send_button.addEventListener("click", sendMessage); //Add event listener on clicking button

function sendMessage() {
	//Getting textare value;
	var text_to_send = document.getElementById("text-input");
	// console.log(text_to_send.value);

	// If nothing entered and send is clicked
	if(text_to_send.value === "" || !text_to_send.value) {
		alert("Sajna khali khali message? Khair ey?");
	}

	else {
		// Creating span of message
		var span = document.createElement("SPAN");
		var br = document.createElement("br");
		var text = document.createTextNode(text_to_send.value);
		span.appendChild(text);
		message_box.appendChild(span);
		message_box.appendChild(br);
		// document.body.appendChild(x);
		text_to_send.value = "";
	}
}