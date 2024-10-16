const editProfileBtn = document.getElementById('editProfileBtn');
const editForm = document.getElementById('editForm');
const submitBtn = document.querySelector('#btn-form .btn-outline-success');

const displayNama = document.getElementById('nama');
const displayRole = document.getElementById('role');
const displayAvailability = document.querySelector('.info-profile li:nth-child(1)');
const displayUmur = document.querySelector('.info-profile li:nth-child(2)');
const displayLokasi = document.querySelector('.info-profile li:nth-child(3)');
const displayPengalaman = document.querySelector('.info-profile li:nth-child(4)');
const displayEmail = document.querySelector('.info-profile li:nth-child(5)');

const inputNama = document.getElementById('floatingInput');
const inputRole = document.getElementById('btn-role').querySelector('input');
const inputAvailability = document.getElementById('btn-availability').querySelector('input');
const inputUmur = document.getElementById('btn-umur').querySelector('input');
const inputLokasi = document.getElementById('btn-lokasi').querySelector('input');
const inputPengalaman = document.getElementById('btn-pengalaman').querySelector('input');
const inputEmail = document.getElementById('btn-email').querySelector('input');

window.onload = function () {
  editForm.style.display = 'none';
  loadProfileData();
};

editProfileBtn.addEventListener('click', function () {
  editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
});

submitBtn.addEventListener('click', function () {
  const namaValue = inputNama.value;
  const roleValue = inputRole.value;
  const availabilityValue = inputAvailability.value;
  const umurValue = inputUmur.value;
  const lokasiValue = inputLokasi.value;
  const pengalamanValue = inputPengalaman.value;
  const emailValue = inputEmail.value;

  localStorage.setItem(
    'profileData',
    JSON.stringify({
      nama: namaValue,
      role: roleValue,
      availability: availabilityValue,
      umur: umurValue,
      lokasi: lokasiValue,
      pengalaman: pengalamanValue,
      email: emailValue,
    })
  );

  displayNama.textContent = namaValue || 'Nama Anda';
  displayRole.textContent = roleValue || 'Front End Designer';
  displayAvailability.innerHTML = `<strong>Availability</strong> ${availabilityValue || 'Test'}`;
  displayUmur.innerHTML = `<strong>Umur</strong> ${umurValue || 'Test'}`;
  displayLokasi.innerHTML = `<strong>Lokasi</strong> ${lokasiValue || 'Test'}`;
  displayPengalaman.innerHTML = `<strong>Pengalaman</strong> ${pengalamanValue || 'Test'}`;
  displayEmail.innerHTML = `<strong>Email</strong> ${emailValue || 'Test'}`;

  editForm.style.display = 'none';
});

function loadProfileData() {
  const savedProfile = localStorage.getItem('profileData');

  if (savedProfile) {
    const profileData = JSON.parse(savedProfile);

    displayNama.textContent = profileData.nama || 'Your Name';
    displayRole.textContent = profileData.role || 'Your Role';
    displayAvailability.innerHTML = `<strong>Availability</strong> ${profileData.availability || 'Empty'}`;
    displayUmur.innerHTML = `<strong>Umur</strong> ${profileData.umur || 'Empty'}`;
    displayLokasi.innerHTML = `<strong>Lokasi</strong> ${profileData.lokasi || 'Empty'}`;
    displayPengalaman.innerHTML = `<strong>Pengalaman</strong> ${profileData.pengalaman || 'Empty'}`;
    displayEmail.innerHTML = `<strong>Email</strong> ${profileData.email || 'Empty'}`;

    inputNama.value = profileData.nama;
    inputRole.value = profileData.role;
    inputAvailability.value = profileData.availability;
    inputUmur.value = profileData.umur;
    inputLokasi.value = profileData.lokasi;
    inputPengalaman.value = profileData.pengalaman;
    inputEmail.value = profileData.email;
  }
}
