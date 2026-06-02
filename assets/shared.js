// Shared cookie consent banner — GDPR-friendly. No tracking until user accepts.
(function() {
  if (window.localStorage.getItem('atestia-cookies') === 'accepted' ||
      window.localStorage.getItem('atestia-cookies') === 'rejected') return;
  var bar = document.createElement('div');
  bar.id = 'cookie-bar';
  bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#1c1917;color:#fafaf9;padding:16px 20px;z-index:100;font-size:13px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;border-top:1px solid #44403c;box-shadow:0 -4px 12px rgba(0,0,0,0.15)';
  bar.innerHTML = '<div style="max-width:60%;line-height:1.5">We use cookies to improve your experience and analyze site usage. No tracking until you choose. See our <a href="/legal/privacy.html" style="color:#67e8f9;text-decoration:underline">privacy policy</a>.</div>' +
    '<div style="display:flex;gap:8px"><button id="ck-reject" style="background:transparent;color:#fafaf9;border:1px solid #57534e;padding:8px 16px;border-radius:4px;cursor:pointer;font-size:13px">Reject</button>' +
    '<button id="ck-accept" style="background:#0e7490;color:#fff;border:0;padding:8px 16px;border-radius:4px;cursor:pointer;font-size:13px;font-weight:600">Accept</button></div>';
  document.body.appendChild(bar);
  document.getElementById('ck-accept').onclick = function() {
    window.localStorage.setItem('atestia-cookies', 'accepted');
    bar.remove();
  };
  document.getElementById('ck-reject').onclick = function() {
    window.localStorage.setItem('atestia-cookies', 'rejected');
    bar.remove();
  };
})();
