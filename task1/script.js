const btn = document.getElementById('btn');

btn.style.left = "50%";
btn.style.top = "50%";
btn.style.transform = "translate(-50%, -50%)";

function moveButton(chance) {
    if (Math.random() < chance) {
        const x = Math.random() * (window.innerWidth - btn.offsetWidth);
        const y = Math.random() * (window.innerHeight - btn.offsetHeight);

        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    }
}

btn.addEventListener('mouseover', () => moveButton(0.5));
btn.addEventListener('click', () => moveButton(1));