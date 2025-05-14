const personPanel = document.getElementById("personPanel");
const loginBlog = document.getElementById("loginBlog");
const personItems = document.getElementById("personItems");

loginBlog.addEventListener("click", () => {
  const blogEmail = document.getElementById("blogEmail").value;
  const blogPassword = document.getElementById("blogPassword").value;

  let storedPerson = JSON.parse(localStorage.getItem("personManager")) || [];

  if (!storedPerson) {
    alert("Kayıtlı kullanıcı yok");
  }

  const matchedPerson = storedPerson.find(
    (person) => person.email === blogEmail && person.password === blogPassword
  );

  if (matchedPerson) {
    localStorage.setItem("isLoggedBlog", "true");
    personPanel.style.display = "none";
    personItems.style.display = "block";
    personItems.innerHTML = `
    <div class="personBlogItem">
    <img src="${matchedPerson.photo}" alt="${matchedPerson.name}" width="100" height="100"/>
    <div class="texts">
    <p>${matchedPerson.name}</p>
    <p>${matchedPerson.email}</p>
    <button id="changePassword">Change Password</button>
    </div>
    </div>
    `;
  } else {
    alert("Lütfen şifre veya email'i doğru giriniz.");
    return;
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("isLoggedBlog") === "true") {
    personPanel.style.display = "none";
    personItems.style.display = "block";
  }
});

document.getElementById("logOut").addEventListener("click", () => {
  localStorage.removeItem("isLoggedBlog");
  location.reload();
});
