// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.rev').forEach(r => obs.observe(r));

// Mobile nav
function toggleNav() {
  const n = document.getElementById('mobNav');
  n.style.display = n.style.display === 'flex' ? 'none' : 'flex';
  n.style.flexDirection = 'column';
  n.style.width = 200 + 'px';
}



// Nav active highlight
const secs = [document.querySelectorAll('section[id]')];
const navLinks = [document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (scrollY >= s.offsetTop - 200) cur = s.id; });
  navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--violet)' : ''; });
});

// Contact form
function handleSend(btn) {
  btn.textContent = '✓ Sent!';
  btn.style.background = 'var(--mint)';
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = 'var(--violet)'; }, 3000);
}

// Hero photo upload
// function uploadHeroPhoto(input) {
//   if (!input.files || !input.files[0]) return;
//   const reader = new FileReader();
//   reader.onload = function(e) {
//     const img = document.getElementById('heroPhotoImg');
//     const placeholder = document.getElementById('heroPlaceholder');
//     const hint = document.getElementById('photoHint');
//     img.src = e.target.result;
//     img.style.display = 'block';
//     placeholder.style.display = 'none';
//     if (hint) hint.style.display = 'none';
//   };
//   reader.readAsDataURL(input.files[0]);
// }

// STP photo slots
function triggerUpload(slot) {
  slot.querySelector('input[type=file]').click();
}
function loadSlotPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const slot = input.closest('.stp-photo-slot');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = slot.querySelector('img');
    img.src = e.target.result;
    img.style.display = 'block';
    slot.querySelector('.slot-icon').style.display = 'none';
    slot.querySelector('.slot-text').style.display = 'none';
    slot.style.borderStyle = 'solid';
    slot.style.borderColor = 'var(--sky)';
  };
  reader.readAsDataURL(input.files[0]);
}