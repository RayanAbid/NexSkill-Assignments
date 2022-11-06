const onSubmit = () => {
  var number = document.getElementById("numberval").value;
  console.log("numbervalnumberval", number);
  if (parseInt(number) >= 100) {
    document.getElementById(
      "awnswer"
    ).innerHTML = `<p class="resultDiv">Number is greater than 100</strong> </p>`;
  } else if (parseInt(number) <= 100) {
    document.getElementById(
      "awnswer"
    ).innerHTML = `<p class="resultDiv">Number is less than 100</strong> </p>`;
  } else {
    document.getElementById(
      "awnswer"
    ).innerHTML = `<p class="resultDiv">Invalid number</strong> </p>`;
  }
};
