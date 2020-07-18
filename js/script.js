// let btn = document.querySelectorAll(".button-value");
// const display = document.querySelector("#screen");

// btn.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     // console.log(event.target.value);
//     var input = event.target.value;
//     // if (input === "+" || input === "-") {
//     //   display.value += input;
//     //   return console.log(typeof input);
//     // } else if (input === "=") {
//     //   return;
//     // } else if (input === "X") {
//     //   display.value += "*";
//     // } else if (input === "÷") {
//     //   display.value += "/";
//     // } else if (input === "C") {
//     //   display.value = "";
//     // } else {
//     //   display.value += input;
//     //   let answer = parseInt(input);
//     //   console.log(typeof answer);
//     // }

//     switch (input) {
//       case "+":
//       case "-":
//         display.value += input;
//         break;
//       case "=":
//         return;
//         break;
//       case "X":
//         display.value += "*";
//         break;
//       case "÷":
//         display.value += "/";
//         break;
//       case "C":
//         display.value = "";
//         break;
//       default:
//         display.value += input;
//         let answer = parseInt(input);
//         console.log(typeof answer);
//     }
//   });
// });

// console.log(btn);

function equal() {
  let answer = display.value;
  display.value = eval(answer);
}
