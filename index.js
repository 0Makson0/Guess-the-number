const button_Im = document.getElementById("button_Im");
const button_Ai = document.getElementById("button_Ai");
const creat_p = document.getElementById("creat_p")
const inputContainer = document.getElementById("inputContainer")

let inputIm = null;
let resultIm = null;

let i = 1;

const removeButtonImAi = () => {
	button_Im.style.display = "none";
	button_Ai.style.display = "none";
}

const buttons = [button_Im, button_Ai];

buttons.forEach(button => {
    button.addEventListener("click", removeButtonImAi);
});

button_Im.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Ти обераєш число, а потім Комп буде його вгадувати!";
    creat_p.appendChild(paragraph);

    inputIm = document.createElement("input");
    inputIm.type = "number";
    inputIm.min = "1";
    inputIm.max = "100";
    inputIm.placeholder = "Число від 1 до 100";
	inputIm.id = "inputIm";
    inputContainer.appendChild(inputIm);

	const paragraphCounter = document.createElement("p");
	inputContainer.appendChild(paragraphCounter);

	const secretNumber = randomAi();
    inputIm.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const value = parseInt(inputIm.value);
			paragraphCounter.textContent = "Кількість спроб: " + i++ + ". Останнє що ти ввіл: " + value + "." ;
            if (isNaN(value) || value < 1 || value > 100) {
                paragraph.textContent = "Введите число от 1 до 100";
				inputIm.value = "";
            } else if (value < secretNumber) {
                paragraph.textContent = "Мало";
				inputIm.value = "";
            } else if (value > secretNumber) {
                paragraph.textContent = "Много";
				inputIm.value = "";	
            } else {
				paragraph.textContent = "Ти вгадав!";
                paragraphCounter.textContent = "Кількість спроб: " + i++ + ". Останнє що ти ввіл: " + value + "." ;
            }
        }
	
    });
	
});

button_Ai.addEventListener("click", () => {
	const message = document.createElement("p")
	message.textContent = "Я загадав число. Вгадуй";
	inputContainer.appendChild(message)

	const inputAi = document.createElement("input");
	inputAi.type = "number";
    inputAi.min = "1";
    inputAi.max = "100";
    inputAi.placeholder = "Число від 1 до 100";
	inputAi.id = "inputAi";
    inputContainer.appendChild(inputAi);

	const paragraphCounter = document.createElement("p");
	inputContainer.appendChild(paragraphCounter);

	const secretNumber = randomAi();
    if(){
		const value = parseInt(inputIm.value);
	}
})

const randomAi = function() {
	return Math.floor(Math.random() * 100) + 1;
}
