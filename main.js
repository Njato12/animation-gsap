import gsap from "gsap"
const text = document.querySelector('p')
const split = (el) => {
    const text = el.textContent;
    const txtSplit = text.split('');
    el.textContent = '';
    for (let i = 0; i < txtSplit.length; i++) {
        const span = document.createElement('span');
        span.textContent = txtSplit[i];
        el.appendChild(span)
    }
}
split(text)
gsap.from("p span", {
    duration: 2, repeat: -1, stagger: 0.3, opacity: 0
})
