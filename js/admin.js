const passwordScreen = document.getElementById("passwordScreen");
const adminPanel = document.getElementById("adminPanel");
const logIn = document.getElementById("logIn");

logIn.addEventListener('click',() => {
    const password = document.getElementById("password").value;
    const adminPassword = "1234";
    if(password === adminPassword){
        passwordScreen.style.display = "none";
        adminPanel.style.display = "block";
        console.log("Password Correct");
        
    }else{
        console.log("wrong password");
        
    }
})




















function renderPerson(){
    let storedPerson = JSON.parse(localStorage.getItem("personManager")) || [];
    const adminContainer = document.getElementById("admin-container");
    storedPerson.forEach((person,index) => {

        adminContainer.innerHTML +=
        `
        <div class="person">
        <img src="${person.photo}" width="100" height="100"/>
        <div class="texts">
        <h3>Name:${person.name}</h3>
        <p>Phone:${person.phone}</p>
        <p>e-mail:${person.email}</p>
        <button class="deletePerson" data-id ="${index}">Delete Person</button>
        </div>
        </div>
        `
    });

    
    document.querySelectorAll(".deletePerson").forEach((btn) =>{
        btn.addEventListener('click' ,(e) => {
            
            const index = parseInt(e.target.dataset.index);
            storedPerson.splice(index,1);
            localStorage.setItem("personManager",JSON.stringify(storedPerson));
            renderPerson();
        }) 
    })
}



window.onload = () => {
    renderPerson()
}