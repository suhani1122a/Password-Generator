const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbol = "!@#$%^&*()_+";

const pass = document.getElementById("pass");
const lengthinput = document.getElementById("lengthinput");
const upperinput = document.getElementById("upperinput");
const lowerinput = document.getElementById("lowerinput");
const numberinput = document.getElementById("numberinput");
const symbolinput = document.getElementById("symbolinput");

const getRandomdata = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};
const generatePass = (password = "") => {
  if (upperinput.checked) {
    password += getRandomdata(upperSet);
  }
  if (lowerinput.checked) {
    password += getRandomdata(lowerSet);
  }
  if (numberinput.checked) {
    password += getRandomdata(numberSet);
  }
  if (symbolinput.checked) {
    password += getRandomdata(symbol);
  }

  if (password.length < lengthinput.value) {
    return generatePass(password);
  }
  let ans = truncateString(password, lengthinput.value);
  pass.innerText=ans;
};
generatePass();
document.getElementById("btn").addEventListener("click", function () {
  generatePass();
});

function truncateString(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);

    return substr;
  } else {
    
      return str;
  }
}
