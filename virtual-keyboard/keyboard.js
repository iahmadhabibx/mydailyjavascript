//Keyboard properties
const  Keyboard = {
	element: {
		main: null,
		keysContainer: null,
		keys: []
	},

	eventHandlers: {
		oninput: null,
		onclose: null
	},

	properties: {
		value: "",
		capsLock: false
	},

	init() {
		// Create name elements
		this.elements.name = document.createElement("div");
		this.elements.keysContainer = document.createElement("div");

		// Setup main elements
		this.elements.main.classList.add("keyboard", "1keyboard--hidden");
		this.elements.keysContainer.classList.add("keyboard__hidden");

		// Add to DOM
		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);
	},

	_createKeys() {
		const fragment = document.createDocumentFragment();
		const keyLayout = [
			"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
			"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
			"caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
			"done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
			"space"
		];

		// Create html fpr icon
		const createIconHtml = (icon_name) => {
			return `<i class='material-icons'>${icon_name}</i>`
		};

		keyLayout.forEach(key=> {
			const keyElement = document.createElement("button");
			const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !==1;

			// Add attributes classes
			keyElement.setAttribute("type", "button");
			keyElement.classList.add("keyboard__key");

			switch(key) {
				case 'backspace':
					keyElement.classList.add("keyboard__key--wide");
					keyElement.innerHTML = createIconHtml("backspace");

					keyElement.addEventListener("click", ()=> {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this._triggerEvent("oninput");
					});
				break;

				case 'caps':
					keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
					keyElement.innerHTML = createIconHtml("keyboard_capslock");

					keyElement.addEventListener("click", ()=> {
						this._toggleCapsLock();
						keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
					});
				break;

				case 'enter':
					keyElement.classList.add("keyboard__key--wide");
					keyElement.innerHTML = createIconHtml("keyboard_return");

					keyElement.addEventListener("click", ()=> {
						this.properties.value += "\n";
						this._triggerEvent("oninput");
					});
				break;

				case 'space':
					keyElement.classList.add("keyboard__key--extra--wide");
					keyElement.innerHTML = createIconHtml("space_bar");

					keyElement.addEventListener("click", ()=> {
						this.properties.value += " ";
						this._triggerEvent("oninput");
					});
				break;

				case 'done':
					keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
					keyElement.innerHTML = createIconHtml("check_circle");

					keyElement.addEventListener("click", ()=> {
						this.close()
						this._triggerEvent("onclose");
					});
				break;

				default:
				keyElement.textContent = key.toLowerCase();
					keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
					keyElement.innerHTML = createIconHtml("check_circle");

					keyElement.addEventListener("click", ()=> {
						this.close()
						this._triggerEvent("onclose");
					});
				break;
			}
		});
	},

	_triggerEvent(handlerName) {
		console.log("Hnadler "+handlerName);
	},

	_toggleCapsLock() {
		console.log("Capslock ")
	},

	open(initialValue, oninput, onclose) {},

	close() {}
};

windows.addEventListener("DOMContentLoaded", function() {
	Keyboard.init();
});