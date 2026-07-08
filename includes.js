(function () {

  /* ============================================================
     SHARED NAV + FOOTER — edit here, reflects on all pages
     ============================================================ */

  /* ---------- NAV CSS ---------- */
  var navCSS = [
    '.ann{background:#420001;color:#e7d1a6;text-align:center;padding:9px 16px;font-size:11px;font-weight:500;letter-spacing:.08em;}',
    '.nav-wrapper{position:sticky;top:0;z-index:1000;}',
    '.nav-outer{padding:10px 48px;background:transparent;pointer-events:none;}',
    '.nav{background:#fff;border-radius:100px;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 22px;box-shadow:0 4px 28px rgba(0,0,0,.10),0 1px 6px rgba(0,0,0,.06);pointer-events:all;max-width:1200px;margin:0 auto;}',
    '.nav-logo{display:flex;align-items:center;gap:10px;}',
    '.nav-logo-img{height:42px;width:auto;object-fit:contain;display:block;}',
    '.nav-links{display:flex;gap:24px;}',
    '.nav-links a{color:rgba(66,0,1,.65);font-size:10px;font-weight:600;letter-spacing:1.2px;padding:4px 0;transition:color .2s;text-decoration:none;}',
    '.nav-links a:hover{color:#420001;}',
    '.nav-icons{display:flex;align-items:center;gap:14px;}',
    '.nav-icons>a{color:rgba(66,0,1,.6);position:relative;transition:color .2s;display:flex;align-items:center;}',
    '.nav-icons>a:hover{color:#420001;}',
    '.nav-contact{background:#420001;color:#e7d1a6 !important;padding:9px 20px;border-radius:100px;font-size:10px;font-weight:700;letter-spacing:1.5px;white-space:nowrap;transition:background .2s;margin-left:4px;text-decoration:none;}',
    '.nav-contact:hover{background:#6a0002 !important;}',
    '.cart-badge{position:absolute;top:-7px;right:-7px;background:#420001;color:#e7d1a6;width:16px;height:16px;border-radius:50%;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;}',
    '.nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:none;margin-left:8px;}',
    '.nav-hamburger span{display:block;width:22px;height:2px;background:#420001;border-radius:2px;transition:all .3s;}',
    '.nav-mobile-menu{display:none;flex-direction:column;background:#fff;border-top:1px solid rgba(66,0,1,.08);padding:10px 20px 14px;gap:0;box-shadow:0 8px 24px rgba(0,0,0,.08);}',
    '.nav-mobile-menu a{padding:13px 0;border-bottom:1px solid rgba(66,0,1,.06);font-size:13px;font-weight:600;letter-spacing:1.5px;color:#420001;text-decoration:none;display:block;}',
    '.nav-mobile-menu a:last-child{border-bottom:none;}',
    '.nav-mobile-open .nav-mobile-menu{display:flex;}',
    '@media(max-width:768px){',
    '.nav-outer{padding:6px 12px;}',
    '.nav{padding:6px 14px;border-radius:50px;}',
    '.nav-logo-img{height:34px;}',
    '.nav-links{display:none!important;}',
    '.nav-contact{display:none!important;}',
    '.nav-hamburger{display:flex;}',
    '}',
    '@media(min-width:769px)and(max-width:1024px){',
    '.nav-outer{padding:10px 24px;}',
    '.nav-links a{font-size:9px;}',
    '.nav-links{gap:16px;}',
    '}'
  ].join('');

  /* ---------- FOOTER CSS ---------- */
  var footerCSS = [
    '.dark-bottom{background:#2a0001;position:relative;overflow:hidden;}',
    '.dark-nl{padding:80px 80px 64px;position:relative;z-index:2;text-align:center;border-bottom:1px solid rgba(231,209,166,.08);}',
    '.dark-nl-eye{font-size:10px;font-weight:700;letter-spacing:3.5px;color:rgba(231,209,166,.4);margin-bottom:18px;}',
    '.dark-nl-h3{font-family:"Playfair Display",Georgia,serif;font-size:44px;font-weight:700;color:#e7d1a6;line-height:1.2;margin-bottom:10px;}',
    '.dark-nl-h3 em{font-style:italic;}',
    '.dark-nl-sub{font-size:13px;color:rgba(231,209,166,.45);margin-bottom:34px;}',
    '.dark-nl-form{display:flex;max-width:460px;margin:0 auto;background:rgba(255,255,255,.05);border:1px solid rgba(231,209,166,.18);border-radius:100px;padding:6px 6px 6px 22px;gap:8px;}',
    '.dark-nl-input{flex:1;background:none;border:none;outline:none;font-size:13px;color:#e7d1a6;font-family:"Poppins",sans-serif;}',
    '.dark-nl-btn{background:#e7d1a6;color:#420001;border:none;padding:10px 22px;border-radius:100px;font-size:10px;font-weight:800;letter-spacing:2px;cursor:pointer;font-family:"Poppins",sans-serif;white-space:nowrap;}',
    '.dark-footer{padding:52px 80px 32px;position:relative;z-index:2;}',
    '.dark-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}',
    '.dark-footer-logo{display:flex;align-items:center;gap:11px;margin-bottom:14px;}',
    '.dark-footer-logo-img{height:44px;width:auto;object-fit:contain;display:block;filter:brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(.9);opacity:.9;}',
    '.dark-footer-desc{font-size:11px;color:rgba(231,209,166,.42);line-height:1.85;margin-bottom:20px;}',
    '.dark-footer-socials{display:flex;gap:8px;}',
    '.dark-soc{width:32px;height:32px;border-radius:50%;border:1px solid rgba(231,209,166,.18);display:flex;align-items:center;justify-content:center;color:rgba(231,209,166,.5);cursor:pointer;}',
    '.dark-foot-head{font-size:10px;font-weight:800;color:#e7d1a6;letter-spacing:2.5px;margin-bottom:16px;}',
    '.dark-foot-links{display:flex;flex-direction:column;gap:10px;}',
    '.dark-foot-links a{font-size:11px;color:rgba(231,209,166,.45);text-decoration:none;transition:color .2s;}',
    '.dark-foot-links a:hover{color:#e7d1a6;}',
    '.dark-footer-bot{border-top:1px solid rgba(231,209,166,.06);padding-top:22px;display:flex;justify-content:space-between;align-items:center;}',
    '.dark-foot-copy,.dark-foot-pay{font-size:10px;color:rgba(231,209,166,.26);}',
    '@media(max-width:768px){',
    '.dark-nl{padding:40px 20px 32px;}',
    '.dark-nl-h3{font-size:28px;}',
    '.dark-nl-form{flex-direction:column;border-radius:12px;padding:12px;gap:10px;}',
    '.dark-nl-btn{border-radius:8px;padding:13px;}',
    '.dark-footer{padding:28px 16px 20px;}',
    '.dark-footer-grid{grid-template-columns:1fr 1fr;gap:20px;}',
    '.dark-footer-bot{flex-direction:column;gap:8px;text-align:center;}',
    '}',
    '@media(min-width:769px)and(max-width:1024px){',
    '.dark-footer-grid{grid-template-columns:2fr 1fr 1fr;}',
    '.dark-footer{padding:40px 40px 28px;}',
    '.dark-nl{padding:56px 40px 48px;}',
    '}'
  ].join('');

  /* ---------- NAV HTML ---------- */
  var NAV_HTML = ''
    + '<div class="ann">* FREE SHIPPING ABOVE Rs.999 &nbsp;&nbsp;|&nbsp;&nbsp; USE CODE FIRST10 FOR 10% OFF &nbsp;&nbsp;|&nbsp;&nbsp; NEW BRIDAL COLLECTION NOW LIVE *</div>'
    + '<div class="nav-wrapper" id="nav-wrapper">'
    + '<nav class="nav-outer"><div class="nav">'
    + '<div class="nav-logo"><a href="index.html"><img src="assets/vamas-logo.avif" alt="Vamas" class="nav-logo-img" onerror="this.style.display=\'none\'"></a></div>'
    + '<div class="nav-links">'
    + '<a href="index.html">HOME</a>'
    + '<a href="collection.html">COLLECTIONS</a>'
    + '<a href="about.html">ABOUT</a>'
    + '<a href="contact.html">CONTACT</a>'
    + '</div>'
    + '<div class="nav-icons">'
    + '<a href="#" title="Search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></a>'
    + '<a href="#" title="Wishlist"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></a>'
    + '<a href="#" title="Cart" style="position:relative;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span class="cart-badge">2</span></a>'
    + '<a href="contact.html" class="nav-contact">Contact Us</a>'
    + '<button class="nav-hamburger" id="nav-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>'
    + '</div></div></nav>'
    + '<div class="nav-mobile-menu" id="nav-mobile-menu">'
    + '<a href="index.html">HOME</a>'
    + '<a href="collection.html">COLLECTIONS</a>'
    + '<a href="about.html">ABOUT</a>'
    + '<a href="contact.html">CONTACT</a>'
    + '</div></div>';

  /* ---------- FOOTER HTML ---------- */
  var FOOTER_HTML = ''
    + '<div class="dark-bottom">'
    + '<div class="dark-nl"><div class="dark-nl-eye">EXCLUSIVE UPDATES</div>'
    + '<div class="dark-nl-h3">Stay in <em>style.</em></div>'
    + '<div class="dark-nl-sub">Subscribe for new arrivals, exclusive offers &amp; style inspiration</div>'
    + '<div class="dark-nl-form"><input class="dark-nl-input" type="email" placeholder="Enter your email address"><button class="dark-nl-btn">SUBSCRIBE</button></div>'
    + '</div>'
    + '<footer class="dark-footer"><div class="dark-footer-grid">'
    + '<div><div class="dark-footer-logo"><img src="assets/vamas-logo.avif" alt="Vamas" class="dark-footer-logo-img" onerror="this.style.display=\'none\'"></div>'
    + '<p class="dark-footer-desc">Premium handcrafted blouses celebrating Indian artistry. Every piece tells a story woven with love and skill.</p>'
    + '<div class="dark-footer-socials">'
    + '<div class="dark-soc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></div>'
    + '<div class="dark-soc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>'
    + '<div class="dark-soc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>'
    + '<div class="dark-soc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></div>'
    + '</div></div>'
    + '<div><div class="dark-foot-head">QUICK LINKS</div><div class="dark-foot-links">'
    + '<a href="collection.html">New Arrivals</a><a href="collection.html">Collections</a>'
    + '<a href="about.html">About Us</a><a href="contact.html">Contact</a>'
    + '</div></div>'
    + '<div><div class="dark-foot-head">CUSTOMER CARE</div><div class="dark-foot-links">'
    + '<a href="#">Size Guide</a><a href="#">Track Order</a>'
    + '<a href="#">Returns &amp; Exchange</a><a href="#">FAQ</a><a href="#">Shipping Policy</a>'
    + '</div></div>'
    + '<div><div class="dark-foot-head">CONTACT US</div><div class="dark-foot-links">'
    + '<a href="mailto:support@vamas.in">support@vamas.in</a>'
    + '<a href="tel:+919876543210">+91 98765 43210</a>'
    + '<span style="color:rgba(231,209,166,.3);font-size:10px;">Mon-Sat: 10am - 6pm</span>'
    + '</div></div>'
    + '</div>'
    + '<div class="dark-footer-bot">'
    + '<div class="dark-foot-copy">&copy; 2026 Vamas. All rights reserved.</div>'
    + '<div class="dark-foot-pay">UPI &nbsp;&middot;&nbsp; Visa &nbsp;&middot;&nbsp; Mastercard &nbsp;&middot;&nbsp; Net Banking &nbsp;&middot;&nbsp; COD</div>'
    + '</div></footer></div>';

  /* ---------- INJECT CSS ---------- */
  var style = document.createElement('style');
  style.textContent = navCSS + footerCSS;
  document.head.appendChild(style);

  /* ---------- INJECT NAV ---------- */
  var navPlaceholder = document.getElementById('site-nav');
  if (navPlaceholder) {
    var navWrap = document.createElement('div');
    navWrap.innerHTML = NAV_HTML;
    var frag = document.createDocumentFragment();
    while (navWrap.firstChild) frag.appendChild(navWrap.firstChild);
    navPlaceholder.parentNode.replaceChild(frag, navPlaceholder);
  }

  /* ---------- INJECT FOOTER ---------- */
  var footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    var footWrap = document.createElement('div');
    footWrap.innerHTML = FOOTER_HTML;
    footerPlaceholder.parentNode.replaceChild(footWrap.firstElementChild, footerPlaceholder);
  }

  /* ---------- HAMBURGER ---------- */
  function initHamburger() {
    var btn = document.getElementById('nav-hamburger');
    var wrapper = document.getElementById('nav-wrapper');
    if (btn && wrapper) {
      btn.addEventListener('click', function () {
        wrapper.classList.toggle('nav-mobile-open');
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburger);
  } else {
    initHamburger();
  }

})();
