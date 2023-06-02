import "./styles.css";

const table = document.getElementById("my-table");
const username = document.getElementById("input-username");
const email = document.getElementById("input-email");
const address = document.getElementById("input-address");
const admin = document.getElementById("input-admin");
const submit = document.getElementById("submit-data");
const empty_table = document.getElementById("empty-table");

function retrieve(table,column) {
  const columnValues = [];
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const value = row.cells[column-1].innerHTML;
    columnValues.push(value);
  }
  console.log(columnValues);
  return columnValues;
}


document.body.addEventListener("click", function (event) {
  if (event.target === empty_table) {
    const tbody = table.getElementsByTagName("tbody")[0];
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    console.log("Table emptied");
  }

  if (event.target === submit) {
    const usernames = retrieve(table,1);
    if (usernames.indexOf(username.value) != -1) {
      console.log('User found from the database.')
      const rowNumber = usernames.indexOf(username.value);
      const row = table.rows[rowNumber+1];
      row.cells[1].innerHTML = email.value;
      row.cells[2].innerHTML = address.value;
      row.cells[3].innerHTML = admin.checked
      ? ("X")
      : ("-");
      console.log('User: ' + username.value + " data updated: " + email.value +
      ":" +
      address.value +
      ":" +
      (admin.checked ? "X" : "-"))
      
    } else {
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
    
  }
});
