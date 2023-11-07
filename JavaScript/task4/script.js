function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var dobInput = document.getElementById("dob");
    var addressInput = document.getElementById("address");
    var phoneInput = document.getElementById("phone");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var dobError = document.getElementById("dobError");
    var addressError = document.getElementById("addressError");
    var phoneError = document.getElementById("phoneError");

    var valid = true;
    if (nameInput.value === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }
    if (emailInput.value === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email format";
            valid = false;
        } else {
            emailError.textContent = "";
        }
    }
    if (dobInput.value === "") {
        dobError.textContent = "Date of Birth is required";
        valid = false;
    } else {
        dobError.textContent = "";
    }
    if (addressInput.value === "") {
        addressError.textContent = "Address is required";
        valid = false;
    } else {
        addressError.textContent = "";
    }
    if (phoneInput.value === "") {
        phoneError.textContent = "Phone Number is required";
        valid = false;
    } else {
        var phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = "Invalid phone number format";
            valid = false;
        } else {
            phoneError.textContent = "";
        }
    }

    return valid;
}