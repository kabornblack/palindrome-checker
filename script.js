const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;

    if (word === word.split("").reverse().join("")) {
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`;
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a Palindrome`;
    }
}
