// Iniciar Modo Escuro
const body = document.querySelector('body');

// Modo Escuro Ação
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');

// Ativar Modo Escuro
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Desativar modo escuro
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Botão
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
// Encerrar Modo Escuro



// Iniciar Menu Lateral(submenu)
const parentMenuItems = document.querySelectorAll('.top-nav .parent-item');
const submenusList = document.querySelectorAll('.parent-item .submenu');

parentMenuItems.forEach(parentMenu => {
	parentMenu.addEventListener("click", toggleSubmenu);
})

function toggleSubmenu() {
	let submenu = this.getElementsByClassName('submenu')[0];
	this.classList.toggle('active');
	submenu.classList.toggle('active');
}
// Encerrar Menu Lateral(submenu)