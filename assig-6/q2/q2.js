// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  let ageInput = document.getElementById("q_age");
  let ownsPhoneCheckbox = document.getElementById("q_owns_phone");
  let age = ageInput.value;
  let errorsHolder = document.getElementById("errors-holder");
  let resultHolder = document.getElementById("result-holder");

  if (age === "" || age === "0") {
    errorsHolder.textContent = "Please choose age";
    return;
  }

  // Clear any previous errors
  errorsHolder.textContent = "";

  // Logic for displaying result based on age and phone ownership
  if (ownsPhoneCheckbox.checked) {
    if (age < 13) {
      resultHolder.textContent = "You are too young to have a phone";
    } else {
      resultHolder.textContent = "Use your phone in moderation";
    }
  } else {
    if (age < 13) {
      resultHolder.textContent = "You will get a phone soon";
    } else {
      resultHolder.textContent = "You should get a phone";
    }
  }
}

// Function to handle changes in the age input
function ageChange(e) {
  let age = e.target.value;

  let errorsHolder = document.getElementById("errors-holder");
  let submitButton = document.getElementById("submitbutton");

  if (age === "") {
    errorsHolder.textContent = "Please choose age";
    submitButton.disabled = true;
  } else if (age < 5) {
    errorsHolder.textContent =
      "You need to be at least 5 years old to participate";
    submitButton.disabled = true;
  } else {
    errorsHolder.textContent = "";
    submitButton.disabled = false;
  }
}

document.getElementById("q_age").addEventListener("input", ageChange);
document.querySelector("form").addEventListener("submit", handleSubmit);
