document.addEventListener("DOMContentLoaded", function () {
  const state = {
    username: "",
    password: "",
    type: "",
    errors: {
      username: "",
      password: "",
      type: "",
    },
    isSubmitting: false,
  };

  // DOM Elements
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const typeInput = document.getElementById("type");
  const submitButton = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");
  const loadingText = document.getElementById("loadingText");
  const errorContainer = document.getElementById("errorContainer");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const typeError = document.getElementById("type-error");

  // Input event listeners
  usernameInput.addEventListener("input", function (event) {
    state.username = event.target.value;
    updateUI();
  });

  passwordInput.addEventListener("input", function (event) {
    state.password = event.target.value;
    updateUI();
  });

  typeInput.addEventListener("input", function (event) {
    state.type = event.target.value;
    updateUI();
  });

  // Form submission
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    state.isSubmitting = true;
    updateUI();

    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted", {
        username: state.username,
        password: state.password,
        type: state.type,
      });

      // Reset form after successful submission
      state.username = "";
      state.password = "";
      state.type = "";
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      state.isSubmitting = false;
      updateUI();
    }
  });

  // Form validation
  function validateForm() {
    let isValid = true;
    const newErrors = {
      username: "",
      password: "",
      type: "",
    };

    if (!state.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!state.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!state.type) {
      newErrors.type = "Type is required";
      isValid = false;
    }

    state.errors = newErrors;
    updateUI();
    return isValid;
  }

  // Update UI based on state
  function updateUI() {
    // Update input values
    usernameInput.value = state.username;
    passwordInput.value = state.password;
    typeInput.value = state.type;

    // Set aria-invalid attributes
    usernameInput.setAttribute(
      "aria-invalid",
      Boolean(state.errors.username),
    );
    passwordInput.setAttribute(
      "aria-invalid",
      Boolean(state.errors.password),
    );
    typeInput.setAttribute("aria-invalid", Boolean(state.errors.type));

    // Update button state
    submitButton.disabled = state.isSubmitting;

    // Toggle loading text
    if (state.isSubmitting) {
      buttonText.classList.add("hidden");
      loadingText.classList.remove("hidden");
    } else {
      buttonText.classList.remove("hidden");
      loadingText.classList.add("hidden");
    }

    // Handle error messages
    const hasErrors = Object.values(state.errors).some((error) => error);

    if (hasErrors) {
      errorContainer.classList.remove("hidden");
    } else {
      errorContainer.classList.add("hidden");
    }

    // Update individual error messages
    if (state.errors.username) {
      usernameError.textContent = state.errors.username;
      usernameError.classList.remove("hidden");
    } else {
      usernameError.classList.add("hidden");
    }

    if (state.errors.password) {
      passwordError.textContent = state.errors.password;
      passwordError.classList.remove("hidden");
    } else {
      passwordError.classList.add("hidden");
    }

    if (state.errors.type) {
      typeError.textContent = state.errors.type;
      typeError.classList.remove("hidden");
    } else {
      typeError.classList.add("hidden");
    }
  }
});