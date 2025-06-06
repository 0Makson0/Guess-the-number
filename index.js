const button_Im = document.getElementById("button_Im");
const button_Ai = document.getElementById("button_Ai");
const creat_p = document.getElementById("creat_p");
const input_container = document.getElementById("input_container");
const button_users = document.getElementById("button_users");
const input_container_users = document.getElementById("input_container_users");

let inputIm = null;
let attemptCountIm = 1;
let attemptCountAi = 1;
let min = 1;
let max = 100;
let guess;

const removeButtonImAi = () => {
    button_Im.style.display = "none";
    button_Ai.style.display = "none";
};

const buttons = [button_Im, button_Ai];

buttons.forEach(button => {
    if (button) {
        button.addEventListener("click", removeButtonImAi);
    } else {
        console.error("Кнопка не найдена");
    }
});

button_Im.addEventListener("click", () => {
    input_container.innerHTML = "";
    creat_p.innerHTML = "";
    button_users.innerHTML = "";
    input_container_users.innerHTML = "";
    attemptCountIm = 1;

    const paragraph = document.createElement("p");
    paragraph.textContent = "Введи число від 1 до 100";
    creat_p.appendChild(paragraph);

    inputIm = document.createElement("input");
    inputIm.type = "number";
    inputIm.min = "1";
    inputIm.max = "100";
    inputIm.id = "inputIm";
    inputIm.placeholder = "Число від 1 до 100";
    input_container.appendChild(inputIm);

    const paragraphCounter = document.createElement("p");
    input_container.appendChild(paragraphCounter);

    const secretNumber = randomAi();
    inputIm.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const value = parseInt(inputIm.value);
            paragraphCounter.textContent = "Кількість спроб: " + attemptCountIm++ + ". Останнє що ти ввів: " + value + ".";
            if (isNaN(value) || value < 1 || value > 100) {
                paragraph.textContent = "Введи число від 1 до 100";
                inputIm.value = "";
            } else if (value < secretNumber) {
                paragraph.textContent = "Мало";
                inputIm.value = "";
            } else if (value > secretNumber) {
                paragraph.textContent = "Багато";
                inputIm.value = "";
            } else {
                paragraph.textContent = "Ти вгадав!";
            }
        }
    });
});

button_Ai.addEventListener("click", () => {
    input_container.innerHTML = "";
    creat_p.innerHTML = "";
    button_users.innerHTML = "";
    input_container_users.innerHTML = "";
    attemptCountAi = 1;
    min = 1;
    max = 100;

    const message = document.createElement("p");
    message.textContent = "Юзер загадує число. Введи число:";
    creat_p.appendChild(message);

    const inputAi = document.createElement("input");
    inputAi.type = "number";
    inputAi.min = "1";
    inputAi.max = "100";
    inputAi.id = "inputAi";
    inputAi.placeholder = "Число від 1 до 100";
    input_container.appendChild(inputAi);

    inputAi.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const userNumber = parseInt(inputAi.value);
            if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
                message.textContent = "Введи число від 1 до 100";
                inputAi.value = "";
                return;
            }
            inputAi.style.display = "none";
            message.textContent = "";

            const paragraphCounter = document.createElement("p");
            input_container_users.appendChild(paragraphCounter);

            guess = randomAi();
            paragraphCounter.textContent = `Кількість спроб: ${attemptCountAi++}. Комп’ютер пропонує: ${guess}`;

            const buttonFew = document.createElement("button");
            buttonFew.textContent = "Мало";
            button_users.appendChild(buttonFew);

            const buttonMore = document.createElement("button");
            buttonMore.textContent = "Багато";
            button_users.appendChild(buttonMore);

            const buttonRight = document.createElement("button");
            buttonRight.textContent = "Ти вгадав";
            button_users.appendChild(buttonRight);

            buttonFew.addEventListener("click", () => {
                min = guess + 1;
                guess = Math.floor((min + max) / 2);
                paragraphCounter.textContent = `Кількість спроб: ${attemptCountAi++}. Комп’ютер пропонує: ${guess}`;
            });

            buttonMore.addEventListener("click", () => {
                max = guess - 1;
                guess = Math.floor((min + max) / 2);
                paragraphCounter.textContent = `Кількість спроб: ${attemptCountAi++}. Комп’ютер пропонує: ${guess}`;
            });

            buttonRight.addEventListener("click", () => {
                paragraphCounter.textContent = `Комп’ютер вгадав число ${guess} за ${attemptCountAi - 1} спроб!`;
                buttonFew.style.display = "none";
                buttonMore.style.display = "none";
                buttonRight.style.display = "none";
            });
        }
    });
});

const randomAi = function() {
    return Math.floor(Math.random() * 100) + 1;
};