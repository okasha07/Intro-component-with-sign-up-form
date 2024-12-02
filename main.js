document.forms[0].onsubmit = (e) => {
  function errorMsg(msg, index) {
    let error = document.createElement("p");
    error.className = "error";
    error.textContent = msg;

    let errorIcon = document.createElement("img");
    errorIcon.setAttribute("src", "./images/icon-error.svg");
    errorIcon.className = "icon";

    document.querySelectorAll("form > div")[index].append(error, errorIcon);
    document.forms[0].style.cssText = "gap:30px;";

    e.preventDefault();
  }

  document.querySelectorAll("form > div > p").forEach((p) => p.remove());
  document.querySelectorAll("form > div > img").forEach((img) => img.remove());

  if (!document.getElementById("fname").value.length) {
    errorMsg("First Name Cannot Be Empty", 0);
  }
  if (!document.getElementById("lname").value.length) {
    errorMsg("Last Name Cannot Be Empty", 1);
  }
  if (!document.getElementById("email").value.length) {
    errorMsg("email@example.com", 2);
  }
  if (!document.getElementById("passwd").value.length) {
    errorMsg("Password Cannot be empty", 3);
  }
};
