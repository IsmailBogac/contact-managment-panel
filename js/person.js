class Person{
    constructor(name,phone,email,photo){
        this.id = Date.now();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.photo = photo;
    }

}   

class personManager{
    constructor(){
        this.personArr = JSON.parse(localStorage.getItem("personManager")) || [];
        
    }   
    addPerson(person){
        this.personArr.push(person);
        localStorage.setItem("personManager",JSON.stringify(this.personArr));   
        console.log(this.personArr);
    }
}

const manager =  new personManager();

document.getElementById("person-form").addEventListener("submit",(e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const photo = document.getElementById("photo").files[0];

    if(!name || !phone || !email || !photo){
        alert("Eksik bilgi");
        return
    }
    const reader = new FileReader(); 
    reader.onload = function(){
        const photoBase64 = reader.result;
        const newUser = new Person(name,phone,email,photoBase64);
        
        manager.addPerson(newUser);
    } 
        
    reader.readAsDataURL(photo)
})