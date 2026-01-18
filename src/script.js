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


const GITHUB_BASE =
  "https://raw.githubusercontent.com/AyzinA/services/master/";
const SERVICES_JSON = `${GITHUB_BASE}services/services.json`;
const PUBLIC_ASSETS = `${GITHUB_BASE}public/`;

async function loadServices() {
  const container = document.getElementById("services-container");

  const services = await fetch(SERVICES_JSON).then(res => res.json());

  services
    .filter(svc => !svc.hide)              // ignore hidden ones
    .forEach(svc => {
      const card = document.createElement("div");
      card.className = "service-card";

      // only show version if it exists
      const versionHTML = svc.version ? `<br><p>Version: ${svc.version}</p>` : "";

      card.innerHTML = `
        <img src="${PUBLIC_ASSETS}${svc.logo}" alt="${svc.name} Logo" />
        <h3>${svc.name}</h3>
        <div class="service-info">
          <h4>${svc.name}</h4>
          <p>${svc.description}</p>
          ${versionHTML}
        </div>
      `;

      card.onclick = () => window.open(svc.url, "_blank");
      container.appendChild(card);
    });
}

loadServices();

