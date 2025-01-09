let buttons = document.querySelectorAll("button");
let input = document.getElementById("input");

let string = ''; // Corrected variable name to 'string'
let arr = Array.from(buttons); // Fixed plural naming for 'buttons'

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string); // Evaluate the expression
        input.value = string;
      } catch (error) {
        input.value = "Error"; // Handle invalid expressions
        string = ''; // Reset string in case of error
      }
    } else if (e.target.innerHTML === "AC") {
      string = ''; // Clear the input
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1); // Remove last character
      input.value = string;
    } else {
      string += e.target.innerHTML; // Append the button value
      input.value = string;
    }
  });
});
