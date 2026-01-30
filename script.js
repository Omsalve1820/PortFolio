// Small UI helpers for the static portfolio
document.addEventListener('DOMContentLoaded',()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
