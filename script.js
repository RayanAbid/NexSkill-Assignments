const onSubmit = () => {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var result = weight / height ** 2;
  document.getElementById(
    "awnswer"
  ).innerHTML = `<p class="resultDiv">${result.toFixed(2)}</strong> </p>`;
};
