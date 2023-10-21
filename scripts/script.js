
document.addEventListener("DOMContentLoaded", function () {

  });



// övning 1 och 2 vecka 2
// Gör om denna som en array och få den att skriva ut det beroende på vilken användare man väljer


const fullName = "Björn Andersson"
const age = 39
let isStudent = true




function greet(x, y) {
    if (isStudent){
        console.log('Hello '+ x + ', you are ' + y + ' years old.')

    }
    else
        console.log('You are not a Student')    
}

greet(fullName, age)


// övning 3 vecka 2

for (let i = 1; i <=10; i++) {
    console.log(i)
}

// övning 1 grunder i javascript - funktioner

// funktion som adderar tal
let sum = (a, b) => {
    console.log(a + b)
}

sum(55, 45)

// funktion som subtraherar tal
let subtract = (x, y) => {
    console.log(x - y)
}

subtract(9,11)
subtract(10, 4)

// START funktion som ändrar lower case till upper case
let text2 = document.getElementById("test").innerText

let changeUpperCase = (string) => {
        letterChangesVowels(string)
        let result = letterChangesVowels(string)
        console.log(result) 
}


changeUpperCase(text2)


//funktion som inuti "changeUpperCase" ändrar allt till lower case och
//sedan ändrar vokaler till uppercase

// funktion som endast ändrar vokaler till upper case men lämnar konsonanter som de var. 
function letterChangesVowels (string) {
    let vowels = 'aeiouyåäö';
    let result = '';
    for (let i=0; i<string.length; i++) {
        if (vowels.indexOf (string [i]) >= 0) { //if String [i] is a vowel
        result += string [i].toUpperCase ();
      } else {
        result += string [i];
      }
    }
    return result;
  
  }

function letterChanges (string) {
    let vowels = 'aeiouyåäö';
    let lowerString = string.toLowerCase();
    let result = '';
    for (let i=0; i<lowerString.length; i++) {
        if (vowels.indexOf (lowerString [i]) >= 0) { //if lowerString [i] is a vowel
        result += lowerString [i].toUpperCase ();
      } else {
        result += lowerString [i];
      }
    }
    return result;
}  
  
// SLUT funktion som ändrar lower case till upper case


// En funtion som returnerar det minsta av 3 tal

let smallestNumber = (x,y,z) => {
    if (x < y && x < z) {
        return x
    }
    else if (y < x && y < z) {
        return y
    }
    else
        return z
}

console.log(smallestNumber(21, 1111, 11))



// fick hjälp

const element = document.getElementById('myBtn');
element.addEventListener('click', button);

let text1 = document.getElementById('textDiv')


function button() {
    if (text1.innerText == 'Bla') {
        document.getElementById('textDiv').innerText = 'annat'
    } else {
        document.getElementById('textDiv').innerText = 'Bla'
    }
}


// annat försök

let paragraph = document.getElementById('myP');
// console.log(paragraph.innerText)

let txtChange = () => {
    if (paragraph.innerText == '') {
        paragraph.innerText = 'Hello Win23';
    }
    else {
        paragraph.innerText = '';
    }
}

let pText = document.getElementById('changeP')
let pButton = document.getElementById('pButton')

let clickP = () => {
    if (pText.innerText === 'I am text about to change- CLICK ME') {
        pText.innerText = 'You clicked me!';
        pButton.textContent = 'Nice!';
    }
    else if (pText.innerText === 'You clicked me!') {
        pText.innerText = 'I am text about to change- CLICK ME';
        pButton.textContent = 'pButton';
    }
}





// for loop -> ("initital expression" i = 0; "condition" i < 5; "increment expression" i++)
for (let i = 0; i < 5; i++) {
    console.log ('Hello World', i+1)
        for (let i = 0; i < 5; i++) {
    console.log ('Goodbye cruel world', i+1)
        // for (let i = 0; i < 5; i++) {
        //     console.log ('I am an unnecessarily long loop', i+1)}
    }
}


// negative for loop showing negative numbers between 15 and 1

for (let i = 15; i >= 1; i--)
    if (i % 2 !== 0) console.log(i);

    console.log('breakrow')
// for loop showing positive numbers bewettn 1 and 15

for (let i = 1; i < 16; i++)
if (i % 2 !== 1) console.log(i)



let changeColor = () => {
    if (document.querySelector('#changeMyColor').style.color === "black")
    document.querySelector('#changeMyColor').style.color = "red"
    else
    document.querySelector('#changeMyColor').style.color = "black"
}


let functionX = (value) => {
    for ( i = 0; i < 999; i++) {
        value
    }
}

//Kan Fredrik hjälpa?
// let addListItem = () => {
//     for ( i=0; i < 1; i++) {
//         document.querySelector('#myList').innerHTML += `<li class="item">${[i+4]}</li>`
//     }
// }




// let addListItem = () => {
//     document.querySelector('#myList').innerHTML += `<li class="item">${'New list item'}</li>`
// }


let addListItem = () => {
    let li = document.createElement("li");
    li.innerText = document.getElementById('myList').children.length+1;
    let list = document.getElementById('myList');
    list.appendChild(li);
}





let validateForm = (event) => {
    event.preventDefault()
    validateEmail()
    validatePassword()
}

let validateEmail = (event) => {
    // event.preventDefault()
  
    let emailValue = document.getElementById('email').value
   
    if (emailValue.includes("@") && emailValue.includes(".")) {
        console.log('true so far')
        if (emailValue.length >= 6){
            console.log('definitely true')
            return result = true
        }
        else {
            console.log('but not anymore')
        }
    }
    else{
        console.log(false)
        return result = false
    }
}

let validatePassword = (event) => {
    // event.preventDefault()
  
    let passwordValue = document.getElementById('password').value
   
    if (!passwordValue.includes(" ") && (passwordValue.length >= 8) ) {
        console.log('true')
            if (passwordValue.includes('!') || (passwordValue.includes('-') )) {
                console.log('good to go')
                return result = true
            }
            else {
                console.log('missed me by that much')
            }
    }
    else{
        console.log(false)
        return result = false
    }
}



// validation of mail with RegExp

// Javascript

let fOne = (event) => {
    event.preventDefault()

    let name = event.target[0].value
    let email = event.target[1].value
    let password = event.target[2].value
    let confirmPassword = event.target[3].value

    nameVal(name)
    emailVal(email)
    passwordVal(password)
    confirmVal(confirmPassword)

    function nameVal(name) {
        if (/^[a-öA-Ö-'\s].{1,}$/.test(name)) {
            event.target[0].classList.remove('error');
            document.getElementById('nameText').innerText = 'Name valid'
            return true
        }
        else {
            event.target[0].classList.add('error')
            document.getElementById('nameText').innerText = 'Name invalid'
            return false
        }
    }    
    function emailVal(email) {
        if (/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
            document.getElementById('emailText').innerText = 'E-mail valid'
            event.target[1].classList.remove('error');
            return true
        }
        else {
            event.target[1].classList.add('error');
            document.getElementById('emailText').innerText = 'E-mail invalid'
            return true        
        }
    }
    function passwordVal(password) {   
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,}$/.test(password)) {
            event.target[2].classList.remove('error');
            document.getElementById('passwordText').innerText = 'Password valid'
            return true
        }
        else {
            event.target[2].classList.add('error');
            document.getElementById('passwordText').innerText = 'Password invalid'
            return false
        }
    }    
    function confirmVal(confirmPassword) {
        if (!passwordVal(password)) {
            event.target[3].classList.add('error')
            document.getElementById('confirmText').innerText = 'Fill in password'
            return false
        }
        else if ( password === confirmPassword) {
            event.target[3].classList.remove('error')
            document.getElementById('confirmText').innerText = 'Passwords match'
            return true
        }
        else {
            event.target[3].classList.add('error')
            document.getElementById('confirmText').innerText = 'Passwords do not match'
            return false
        }
    }
}
