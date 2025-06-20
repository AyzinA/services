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


const GITHUB_SERVICES_URL = "https://raw.githubusercontent.com/AyzinA/services/refs/heads/master/services/";
const GITHUB_PUBLIC_URL = "https://raw.githubusercontent.com/AyzinA/services/refs/heads/master/public/"
async function loadServices() {
  const container = document.getElementById("services-container");

  const files = await fetch(`${GITHUB_SERVICES_URL}index.json`).then(res => res.json());

  for (const file of files) {
    const data = await fetch(`${GITHUB_SERVICES_URL}${file}.json`).then(res => res.json());

    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <img src="${GITHUB_PUBLIC_URL}${data.logo}" alt="${data.name} Logo" />
      <h3>${data.name}</h3>
      <div class="service-info">
        <h4>${data.name}</h4>
        <p>${data.description}</p>
      </div>
    `;
    card.onclick = () => window.open(data.url, "_blank");
    container.appendChild(card);
  }
}


loadServices();
