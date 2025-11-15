function openSection(id) {
  document.getElementById('home').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

function goHome() {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById('home').classList.remove('hidden');
}

function saveWeek() {
  const data = {
    energy: document.getElementById('energy').value,
    stress: document.getElementById('stress').value,
    pressure: document.getElementById('pressure').value,
    notes: document.getElementById('notes').value,
    timestamp: new Date().toISOString()
  };

  localStorage.setItem('weekCheckIn', JSON.stringify(data));
  alert("Week-check-in opgeslagen (lokaal op je toestel).");
}
