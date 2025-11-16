function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('visible'));

    const page = document.getElementById(id);
    page.classList.add('visible');
}

// Voorbeeld dynamische tekst
document.addEventListener("DOMContentLoaded", () => {
    const todayBox = document.getElementById("today-content");
    todayBox.innerHTML = `
        <p><strong>Welkom Frederik.</strong></p>
        <p>Dit is jouw dagoverzicht.</p>
        <p>De Agent wordt binnenkort gekoppeld aan je agenda.</p>
    `;
});
