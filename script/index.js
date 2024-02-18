const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const pNumber = document.querySelector("#pNumber");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nat = document.querySelector("#nat");
const description = document.querySelector("#desc");
const saveB = document.querySelector("#saveButton");
const deleteB = document.querySelector("#deleteButton");
const form = document.querySelector("#form");
const card = document.querySelector("#wrapper");

function validate(name, surname, age, pNumber, email, password) {
  // name is required
  if (!name.value) {
    alert("Name is required!");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // the name must contain at least 3 characters
  if (name.value.trim().length < 3) {
    alert("the name must contain at least 3 characters!");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // The name must not start with a number
  if (Number(name.value[0])) {
    alert("The name must not start with a number");
    name.focus();
    name.style.outlineColor = "red";
  } else {
    name.style.outlineColor = "hsl(183, 100%, 50%)";
  }
  // surnama required
  if (!surname.value) {
    alert("Surnam is required!");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // the name must contain at least 3 characters
  if (name.value.trim().length < 3) {
    alert("the surname must contain at least 3 characters!");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // The name must not start with a number
  if (Number(surname.value[0])) {
    alert("The surname must not start with a number");
    surname.focus();
    surname.style.outlineColor = "red";
  } else {
    surname.style.outlineColor = "hsl(183, 100%, 50%)";
  }
  // age required
  if (!age.value) {
    alert("Age must be entered");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "hsl(183, 100%, 50%)";
  }
  // age range
  if (age.value <= 0 || age.value > 200) {
    alert("Age is not like that");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // phone number required
  if (pNumber.value.trim().length != 13) {
    alert("The number of characters is wrong example:+998911234567");
    pNumber.focus();
    pNumber.style.outlineColor = "red";
    return false;
  } else {
    pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  if (pNumber.value.substring(0, 4) != "+998") {
    alert("Telefon raqam formati notogri");
    pNumber.focus();
    pNumber.style.outlineColor = "red";
    return false;
  } else {
    pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  if (!Number(pNumber.value.substring(1))) {
    alert("Telefon raqam notogri kiritildi");
    pNumber.focus();
    pNumber.style.outlineColor = "red";
    return false;
  } else {
    pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  // email required

  if (password.length < 12) {
    alert("Password needs more characters");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  } else {
    pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
  }

  return true;
}

function getDate() {
  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}

saveB &&
  saveB.addEventListener("click", function (e) {
    e.preventDefault();

    if (validate(name, surname, age, pNumber, email, password)) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        number: pNumber.value,
        email: email.value,
        password: password.value,
      };

      let u = getDate();
      u.push(user);
      localStorage.setItem("users", JSON.stringify(u));

      localStorage.setItem("users", JSON.stringify(users));

      form.reset();
    } else {
      console.log("otmadi");
    }
  });

function createCard(user) {
  return ` <td>${user.name}</td>
  <td>${user.surname}</td>
  <td>${user.age}</td>
  <td>${user.pNumber}</td>
  <td>${user.email}</td>
  <td>${user.password}</td>
  <br>`;
}

document.addEventListener("DOMContentLoaded", function () {
  let users = getDate();
  users.forEach((user) => {
    let card = createCard(user);
    wrapper.innerHTML += card;
  });
});
