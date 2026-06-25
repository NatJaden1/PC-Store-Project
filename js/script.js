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

const recommendBtn = document.getElementById("recommendBtn");

if (recommendBtn) {

    recommendBtn.addEventListener("click", function () {

    const name =
        document.getElementById("customerName")
        .value.trim();

    const budget =
        parseInt(
            document.getElementById("budget").value
        );

    const result =
        document.getElementById("result");

    if (name === "" || isNaN(budget)) {
        result.innerHTML =
            `<div class="alert alert-danger">
                Please enter your name and budget.
            </div>`;
        return;
    }

    let recommendation = "";

    if (budget < 150000) {

        recommendation =
        `
        <div class="alert alert-success">
            <h4>Hello ${name}!</h4>
            <strong>Recommended Build:</strong>
            Budget Gamer<br>
            Ryzen 5 5600<br>
            RTX 4060<br>
            16GB RAM<br>
            Price: KES 120,000
        </div>
        `;

    } else if (budget < 300000) {

        recommendation =
        `
        <div class="alert alert-success">
            <h4>Hello ${name}!</h4>
            <strong>Recommended Build:</strong>
            Performance Pro<br>
            Ryzen 7 9800X3D<br>
            RTX 5070<br>
            32GB RAM<br>
            Price: KES 245,000
        </div>
        `;

    } else {

        recommendation =
        `
        <div class="alert alert-success">
            <h4>Hello ${name}!</h4>
            <strong>Recommended Build:</strong>
            Ultimate Beast<br>
            Ryzen 9 9950X3D<br>
            RTX 5080<br>
            64GB RAM<br>
            Price: KES 420,000
        </div>
        `;
    }

    result.innerHTML = recommendation;

});
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();

        let products =
            document.querySelectorAll(".product-card");

        products.forEach(function(product) {

            let text =
                product.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

}

const cartCount = document.getElementById("cartCount");

// Load existing cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update navbar count on page load
if (cartCount) {
    cartCount.textContent = cart.length;
}

document.querySelectorAll(".add-to-cart")
.forEach(button => {

    button.addEventListener("click", function() {

        let stock = parseInt(this.dataset.stock);

        if (stock <= 0) {
            alert("Out of stock!");
            return;
        }

        // Decrease stock
        stock--;
        this.dataset.stock = stock;

        const stockText =
            this.parentElement.querySelector(".stock span");

        if (stockText) {
            stockText.textContent = stock;
        }

        // Create product object
        const product = {
            name: this.dataset.product,
            price: parseInt(this.dataset.price)
        };

        // Add to cart array
        cart.push(product);

        // Save cart
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        // Update navbar count
        if (cartCount) {
            cartCount.textContent = cart.length;
        }

        alert(product.name + " added to cart!");
    });

});

const cartItems = document.getElementById("cartItems");

if (cartItems) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="card mb-3 p-3">
                <h5>${item.name}</h5>
                <p>KES ${item.price.toLocaleString()}</p>
            </div>
        `;
    });

    const totalPrice =
        document.getElementById("totalPrice");

    if (totalPrice) {
        totalPrice.textContent =
            total.toLocaleString();
    }
}
const clearCart =
    document.getElementById("clearCart");

if (clearCart) {

    clearCart.addEventListener("click", () => {

        localStorage.removeItem("cart");

        if (cartCount) {
            cartCount.textContent = 0;
        }

        location.reload();
    });

}