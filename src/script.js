// Iniciar o modo escuro
const body = document.querySelector('body');

// Executar ação de ativar o modo escuro
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');

// Modo escuro ativado
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

// Botão para o desktop
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
// Fim do script Modo Escuro



// Iniciar o menu lateral(submenu)
// Se atentar para a hierarquia sempre nessas partes
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
// Fim do menulateral(submenu)

