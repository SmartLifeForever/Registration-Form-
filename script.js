// Toggle theme (Mode Jour/Nuit)
document.getElementById("theme-toggle").addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});

// Add dark mode styles

document.head.insertAdjacentHTML(

    "beforeend",

    `<style>

        .dark-mode {

            background-color: #121212;

            color: #ffffff;

        }

        .dark-mode .navbar, .dark-mode footer {

            background-color: #333;

        }

    </style>`

);

