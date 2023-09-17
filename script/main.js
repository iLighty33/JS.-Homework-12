const myNewMessageForm = document.forms['myForm'];
console.log(myNewMessageForm);
const myName = document.querySelector('#myMessageText-Name');

const myRegex = /^[A-Za-z]+[A-Za-z ]*$|^[А-Яа-я]+[А-Яа-я ]*$/;

// создаём форму
function getElements(form) {
    const myElements = Array.from(form.elements).filter(el => {
        return el.name != "";
    });
    console.log(myElements);
    let result = new FormData();
    for (let el of myElements) {
        result[el.name] = el.value;
    }
    return result;
}

// проверка имени
myName.addEventListener('input', () => {
    if (myRegex.test(myName.value)) {
        myName.style.borderColor = 'green';
        document.querySelector('#myMessageSender').disabled = false;
    }
    else {
        myName.style.borderColor = 'red';
        document.querySelector('#myMessageSender').disabled = true;
    }
})

// добавляем стандартное сообщение
document.querySelector('.myWindowView').innerHTML += (
    `<div class = "newMessage">
        <div class = "newMessageTitle">
            <div class = "newMessageText">
               Name
            </div>
            <div class = "myNewTitleDate">
                10:05:00 22.03.2018 
            </div>
        </div>
        <div class ="newMessageText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a vel molestiae 
            culpa fuga atque optio saepe exercitationem repellat odio libero commodi officia iste accusantium 
            quo beatae veniam consequatur animi, aliquid sit aperiam itaque nulla quos. Quia quaerat nostrum quae 
            cupiditate harum expedita quibusdam, iure, nisi ut laboriosam molestias corporis.
        </div>
    </div>`
)

// добавляем сообщение пользователя
document.getElementById('myMessageSender').addEventListener('click', () => {
    var myDate = new Date();
    document.querySelector('.myWindowView').innerHTML += (
        `<div class = "newMessage">
            <div class = "newMessageTitle">
                <div class = "newMessageText">
                    ${getElements(myNewMessageForm).name}
                </div>
                <div class = "myNewTitleDate">
                    ${myDate.toLocaleTimeString() + " " + myDate.toLocaleDateString()} 
                </div>
            </div>
            <div class ="newMessageText">
                ${getElements(myNewMessageForm).message}
            </div>
        </div>`
    )
});