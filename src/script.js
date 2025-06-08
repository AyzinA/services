window.VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x21222
});


async function loadServices() {
    const container = document.getElementById("services-container");

    const files = await fetch('/services/index.json').then(res => res.json());

    for (const file of files) {
        const data = await fetch(`/services/${file}`).then(res => res.json());

        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
        <img src="${data.logo}" alt="${data.name} Logo" />
        <h2>${data.name}</h2>
        <div class="service-info">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        </div>
        `;
        card.onclick = () => window.location.href = data.url;
        container.appendChild(card);
    }
}

loadServices();
