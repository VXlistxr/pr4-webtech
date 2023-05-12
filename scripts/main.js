let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/chrome-icon.png");
    let myHeading = document.querySelector("h1");
    myHeading.textContent = "Chrome is cool!";
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    let myHeading = document.querySelector("h1");
    myHeading.textContent = "Mozilla is cool!";
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}