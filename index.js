// Function to update placeholder
const onUpdatePlaceholder = () => {
  var convertType = document.getElementById("drop-down").value; // Getting element to check what value is selected

  //  Condition to populate the placeholder
  if (convertType === "b") {
    document.getElementById("miles").placeholder = "Enter Miles";
    document.getElementById("milesLabel").innerHTML = "Enter Miles";
  } else if (convertType === "a") {
    document.getElementById("miles").placeholder = "Enter KM";
    document.getElementById("milesLabel").innerHTML = "Enter KM";
  }
};

// Conversion function
const onSubmit = () => {
  var convertType = document.getElementById("drop-down").value; // Get value

  if (convertType === "b") {
    var miles = document.getElementById("miles").value;
    console.log(convertType);

    var km = miles * 1.6;
    document.getElementById(
      "awnswer"
    ).innerHTML = `<p class="resultDiv"> <strong>${km.toFixed(
      2
    )}</strong> km</p>`;
  } else if (convertType === "a") {
    var km = document.getElementById("miles").value;
    console.log(convertType);

    var miles = km * 0.621371;
    document.getElementById(
      "awnswer"
    ).innerHTML = `<p class="resultDiv"> <strong>${miles.toFixed(
      2
    )}</strong> miles</p>`;
  }
};

// calls function to populate placeholder
onUpdatePlaceholder();
