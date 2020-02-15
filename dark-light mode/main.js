const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function() {
    // Change theme occuring here

    document.body.classList.toggle('dark');
})