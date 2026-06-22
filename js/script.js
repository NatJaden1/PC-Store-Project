console.log("script loaded");

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        let valid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("messageError").textContent = "";

        if(name === ""){
            document.getElementById("nameError").textContent = "Please enter your name";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            document.getElementById("emailError").textContent = "Please enter a valid email";
            valid = false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if(!phonePattern.test(phone)){
            document.getElementById("phoneError").textContent = "Phone number must be 10 digits";
            valid = false;
        }

        if(message.length < 10){
            document.getElementById("messageError").textContent = "Message must be at least 10 characters";
            valid = false;
        }

        if(valid){
            alert("Message sent successfully!");
            contactForm.reset();
        }
    });
}


const buildForm = document.getElementById("buildForm");
if (buildForm) {
    buildForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        const name = document.getElementById("name").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const purpose = document.getElementById("purpose").value;
        const requirements = document.getElementById("requirements").value.trim();

        document.getElementById("nameError").textContent = "";
        document.getElementById("budgetError").textContent = "";
        document.getElementById("purposeError").textContent = "";
        document.getElementById("requirementsError").textContent = "";

        if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your name";
            valid = false;
        }

        if (budget === "" || isNaN(budget) || budget <= 0) {
            document.getElementById("budgetError").textContent = "Please enter a valid budget";
            valid = false;
        }

        if (purpose === "") {
            document.getElementById("purposeError").textContent = "Please select a purpose";
            valid = false;
        }

        if (requirements.length > 300) {
            document.getElementById("requirementsError").textContent = "Must be under 300 characters";
            valid = false;
        }

        if (valid) {
            alert("Build request submitted successfully!");
            buildForm.reset();
        }
    });
}