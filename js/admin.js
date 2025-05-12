function renderPerson(){
    const storedPerson = JSON.parse(localStorage.getItem("personManager")) || [];
    // storedPerson = stored ? stored : [] ;
    const adminContainer = document.getElementById("admin-container");
    // adminContainer.innerHTML = ""; 
    storedPerson.forEach(person => {

        adminContainer.innerHTML +=
        `
        <img src="${person.photo}" width="100" height="100"/>
        <h2>${person.name}</h2>
        <p>${person.phone}</p>
        <p>${person.email}</p>
        `
    });

}
window.onload = () => {
    renderPerson()
}