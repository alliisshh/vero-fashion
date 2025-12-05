const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


const buttons = document.querySelectorAll(".btn-more");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        if (btn.classList.contains("active")) {
            btn.textContent = "Приховати";
        } else {
            btn.textContent = "Детальніше";
        }
    });
});

const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const msg = document.getElementById('form-msg');
        msg.textContent = "Дякуємо! Ваше повідомлення відправлено.";
        form.reset();
    });
}