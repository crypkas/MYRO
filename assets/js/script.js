// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// FAQ toggles
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Copy token address
function copyAddress() {
  const tokenAddr = document.getElementById('myroAddress').textContent.trim();
  navigator.clipboard.writeText(tokenAddr)
    .then(() => {
      alert('Token address copied to clipboard!');
    })
    .catch(err => {
      console.log('Failed to copy text: ', err);
    });
}
