const onSubmit = () => {
  var name = document.getElementById("FriendName").value;

  switch (name) {
    case "Umair":
    case "Saim":
    case "Ramzan":
    case "Amman":
    case "Faizan":
      document.getElementById(
        "awnswer"
      ).innerHTML = `<p class="resultDiv">I have a friend named ${name}</p>`;
      break;

    default:
      document.getElementById(
        "awnswer"
      ).innerHTML = `<p class="resultDiv">Sorry I have no friends named: ${name}</p>`;
  }
};
