
let typed = new Typed(".typing-2", {
    strings:["I love gaming.","I'm passionate about technology.", "I practice football.","I'm passionate to code." ],
    typeSpeed: 100,
    backSpeed: 50,
    loop:  true,
});



//contact form


const btn = document.querySelector ("button")
const field= document.querySelector("field")




btn.addEventListener ("click", () => {
    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const subject = (inputs.elements["subject"].value.trim())
    const message = (inputs.elements["message"].value).trim()

    if (!name.length > 0 || !email.length > 0 || !subject.length > 0 || !message.length > 0) {
        alert("All fields are mandatory")
        return false;
        
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "b455381eea6e61",
        Password: "87df5c5e5646ba",
        To: "...........",
        From: email,
        Subject: "Contact Me",
       Body: message + "<br>" + name + "<br>" + subject
}).then(message => alert("The email successfully sent"))
});














