// Shared nav helpers for In-Mar site (dropdown stability + mobile menu)

// Stabilize Products dropdown hover so it doesn't disappear immediately when mouse leaves the trigger
(function stabilizeProductDropdown() {
  document.querySelectorAll('nav .group').forEach(function(group) {
    var menu = group.querySelector('div.absolute');
    if (!menu) return;
    var timer;
    group.addEventListener('mouseenter', function() {
      clearTimeout(timer);
      menu.style.display = 'block';
    });
    group.addEventListener('mouseleave', function() {
      timer = setTimeout(function() {
        menu.style.display = 'none';
      }, 280);
    });
    menu.addEventListener('mouseenter', function() {
      clearTimeout(timer);
    });
    menu.addEventListener('mouseleave', function() {
      timer = setTimeout(function() {
        menu.style.display = 'none';
      }, 200);
    });
  });
})();

// Mobile menu toggle (hamburger)
function toggleMobileMenu(btn) {
  var menu = document.getElementById('mobile-menu');
  if (!menu) return;
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    btn.innerHTML = '✕';
  } else {
    menu.classList.add('hidden');
    btn.innerHTML = '☰';
  }
}

// Shared Quote modal helpers (used by Request Quote buttons across pages)
function openQuoteModal() {
  const m = document.getElementById('quote-modal');
  if (!m) return;
  m.classList.remove('hidden');
  m.classList.add('flex');
}
function closeQuoteModal() {
  const m = document.getElementById('quote-modal');
  if (!m) return;
  m.classList.remove('flex');
  m.classList.add('hidden');
}
function handleQuoteSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `<div class="py-6 text-center"><i class="fa-solid fa-check-circle text-emerald-500 text-4xl"></i><div class="mt-2 font-semibold">Submitted (demo mode).</div><p class="text-xs text-slate-500 mt-1">In production this would email your team.</p></div>`;
}