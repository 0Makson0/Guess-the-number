const button_Im = document.getElementById("button_Im");
const button_Ai = document.getElementById("button_Ai");
const inputContainer = document.getElementById("inputContainer")

const removeButtonImAi = () => {
	button_Im.style.display = "none";
	button_Ai.style.display = "none";
}

const buttons = [button_Im, button_Ai];

buttons.forEach(button => {
    button.addEventListener("click", removeButtonImAi);
});

button_Im.addEventListener("click", () => {
	const inputIm = document.createElement("input")
	inputIm.type = "number";
	inputIm.min = "1"
	inputIm.mix = "100"
	inputIm.placeholder = "Число від 1 до 100"
	inputContainer.appendChild(inputIm)
})

button_Ai.addEventListener("click", () => {
	const message = document.createElement("p")
	message.textContent = "Я загадав число. Вгадуй";
	inputContainer.appendChild(message)
})

const randomAi = function() {
	return Math.floor(Math.random() * 100) + 1;
}
