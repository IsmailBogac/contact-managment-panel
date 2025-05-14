const passwordScreen = document.getElementById("passwordScreen");
const adminPanel = document.getElementById("adminPanel");
const logIn = document.getElementById("logIn");

// Admin login 
logIn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const adminEmail = "ismail@gmail.com";
  const adminPassword = "1234";
  if (password === adminPassword && email === adminEmail) {
    passwordScreen.style.display = "none";
    adminPanel.style.display = "block";
    localStorage.setItem("isLoggedIn", "true");
    console.log("Password Correct");
  } else {
    alert("wrong email or password please try again.");
    return;
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    passwordScreen.style.display = "none";
    adminPanel.style.display = "block";
  }
});

document.getElementById("logOut").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  location.reload();
});

// render persons
function renderPerson() {
  let storedPerson = JSON.parse(localStorage.getItem("personManager")) || [];
  const adminContainer = document.getElementById("admin-container");
  storedPerson.forEach((person, index) => {
    adminContainer.innerHTML += `
        <div class="person">
        <img src="${person.photo}" width="100" height="100"/>
        <div class="texts">
        <h3>Name:${person.name}</h3>
        <p>Phone:${person.phone}</p>
        <p>e-mail:${person.email}</p>
        <button class="deletePerson" data-id ="${index}">Delete Person</button>
        </div>
        </div>
        `;
  });

  document.querySelectorAll(".deletePerson").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      storedPerson.splice(index, 1);
      localStorage.setItem("personManager", JSON.stringify(storedPerson));
      renderPerson();
    });
  });
}

window.onload = () => {
  const isLogged = localStorage.getItem("isLoggedIn");
  if (isLogged === "true") {
    renderPerson();
  }
};
