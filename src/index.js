import "./styles.css";

const table = document.getElementById("my-table");
const username = document.getElementById("input-username");
const email = document.getElementById("input-email");
const address = document.getElementById("input-address");
const admin = document.getElementById("input-admin");
const submit = document.getElementById("submit-data");
const empty_table = document.getElementById("empty-table");

document.body.addEventListener("click", function (event) {
  if (event.target === empty_table) {
    const tbody = table.getElementsByTagName("tbody")[0];
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    console.log("Table emptied");
  }

  if (event.target === submit) {
    var newRow = table.insertRow();
    newRow.insertCell().innerHTML = username.value;
    newRow.insertCell().innerHTML = email.value;
    newRow.insertCell().innerHTML = address.value;
    admin.checked
      ? (newRow.insertCell().innerHTML = "X")
      : (newRow.insertCell().innerHTML = "-");
    console.log(
      username.value +
        ":" +
        email.value +
        ":" +
        address.value +
        ":" +
        (admin.checked ? "X" : "-")
    );
  }
});
