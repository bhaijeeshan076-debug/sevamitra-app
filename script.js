const services = [
  {
    name: "Ramesh Kumar",
    category: "Plumber",
    location: "Sector 4, Main Market",
    phone: "9876543210"
  },
  {
    name: "Suresh Sharma",
    category: "Electrician",
    location: "Gandhi Nagar",
    phone: "9876543211"
  },
  {
    name: "Amit Verma",
    category: "Carpenter",
    location: "Civil Lines",
    phone: "9876543212"
  },
  {
    name: "Vijay Gupta",
    category: "AC Repair & Service",
    location: "Station Road",
    phone: "9876543213"
  }
];

function displayServices(data) {
  const container = document.getElementById('servicesContainer');
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color:#888;">Koi service nahi mili.</p>';
    return;
  }

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <span class="category">${item.category}</span>
        <p class="location">📍 ${item.location}</p>
      </div>
      <div class="actions">
        <a href="tel:${item.phone}" class="btn btn-call">📞 Call</a>
        <a href="https://wa.me/91${item.phone}?text=Hello%20${encodeURIComponent(item.name)},%20mujhe%20${encodeURIComponent(item.category)}%20ki%20service%20chahiye." class="btn btn-wa">💬 WhatsApp</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function searchServices() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = services.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query) ||
    item.location.toLowerCase().includes(query)
  );
  displayServices(filtered);
}

// Initial load
displayServices(services);
