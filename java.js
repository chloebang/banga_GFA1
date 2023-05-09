function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Put your first name here.");
    return false;
  }

  let x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Put your surname here.");
    return false;
  }
}