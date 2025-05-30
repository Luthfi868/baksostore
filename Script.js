const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const pesanBtn = document.getElementById('pesan-btn');
const totalHarga = document.getElementById('total-harga');
const levelPedasContainer = document.getElementById('level-pedas-container');
const levelPedasSelect = document.getElementById('level-pedas');
let total = 0;
let selectedMenu = [];
let levelPedasBiaya = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const harga = getHarga(e.target.value);
    if (e.target.checked) {
      total += harga;
      selectedMenu.push(e.target.value);
      levelPedasContainer.style.display = 'block';
    } else {
      total -= harga;
      selectedMenu = selectedMenu.filter((menu) => menu !== e.target.value);
      if (selectedMenu.length === 0) {
        levelPedasContainer.style.display = 'none';
      }
    }
    totalHarga.textContent = `Total: Rp ${total + levelPedasBiaya}`;
  });
});

levelPedasSelect.addEventListener('change', (e) => {
  const levelPedas = parseInt(e.target.value);
  levelPedasBiaya = (levelPedas - 1) * 1500;
  totalHarga.textContent = `Total: Rp ${total + levelPedasBiaya}`;
});

pesanBtn.addEventListener('click', () => {
  const levelPedas = levelPedasSelect.value;
  alert(`Anda telah memesan: ${selectedMenu.join(', ')} dengan level kepedasan ${levelPedas} dan total harga Rp ${total + levelPedasBiaya}`);
});

function getHarga(menu) {
  switch (menu) {
    case 'Bakso Urat':
      return 10000;
    case 'Bakso Mercon':
      return 12000;
    case 'Bakso Beranak':
      return 15000;
    case 'Bakso Jumbo':
      return 20000;
    default:
      return 0;
  }
}
