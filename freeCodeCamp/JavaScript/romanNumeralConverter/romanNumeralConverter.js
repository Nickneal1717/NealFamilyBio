const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.getElementById('form');

//Conversion
//Copied in, need to learn about what this is doing
const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

//Checks validity of user input
const checkUserInput = (str, int) => {
  let errText = "";
 
  if (!str || str.match(/[e.]/g)) {
    errText = "Please enter a valid number";
  }
    else if (int < 1) {
    errText = "Please enter a number greater than or equal to 1"
  } 
    else if (int > 3999) {
    errText = "Please enter a number less than or equal to 3999";
  } else {
    //No errors detected
    return true;
  }

//Handles error text and output
output.innerText = errText;
output.classList.add('alert');

return false;
}

const clearOutput = () => {
  output.innerText = '';
  
  output.classList.remove('alert');
};

//Handles user input event
form.addEventListener("submit", e => {
  e.preventDefault();
    updateUI();
});

convertBtn.addEventListener("click", () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();
  number.value = "";

  if(checkUserInput(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
}