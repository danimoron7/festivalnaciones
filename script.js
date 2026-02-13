document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    const text = title.textContent;
    title.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();
});


function showToast(message, duration = 3000) {
    // Crear el contenedor del toast
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    // Estilos del toast
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.padding = "15px 20px";
    toast.style.background = "rgba(0,0,0,0.85)";
    toast.style.color = "white";
    toast.style.fontSize = "16px";
    toast.style.borderRadius = "10px";
    toast.style.boxShadow = "0 0 12px rgba(0,0,0,0.4)";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.5s ease";

    document.body.appendChild(toast);

    // Animación de entrada
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 100);

    // Animación de salida
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 500);
    }, duration);
}

// Mostrar toast al cargar la página
window.addEventListener("load", () => {
    showToast("🎉 Bienvenido al Festival de las Naciones 2026");
});