(() => {
  const data = window.siteData;
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  document.querySelectorAll('.primary-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });

  const businessGrid = document.querySelector('[data-business-grid]');
  if (businessGrid && data) {
    businessGrid.innerHTML = data.subsidiaries.map((business, index) => `
      <article class="business-card business-card-${index + 1}">
        <a href="${business.href}" class="card-image-link" aria-label="Explore ${business.name}">
          <img src="${business.image}" alt="${business.name}" loading="lazy">
          <span class="card-number">0${index + 1}</span><span class="card-arrow" aria-hidden="true">↗</span>
        </a>
        <div class="card-copy"><p class="card-type">${business.type}</p><h3>${business.name}</h3><p>${business.description}</p><a class="text-link" href="${business.href}">Explore <span aria-hidden="true">→</span></a></div>
      </article>`).join('');
  }

  const productGrid = document.querySelector('[data-product-grid]');
  if (productGrid && data) {
    const products = productGrid.dataset.productGrid === 'all' || productGrid.classList.contains('product-strip-full') ? data.products : data.featuredProducts;
    productGrid.innerHTML = products.map((product) => `
      <a class="product-tile" href="products.html"><img src="${product.image}" alt="${product.name}" loading="lazy"><span>${product.category}</span><strong>${product.name}</strong><i aria-hidden="true">↗</i></a>`).join('');
    if (productGrid.classList.contains('product-strip-full')) {
      const intro = document.querySelector('.page-hero .hero-lede');
      if (intro) intro.textContent = 'Explore food, poultry and home-care products prepared for household, hospitality and trade inquiries.';
    }
  }

  const productionGrid = document.querySelector('[data-production-grid]');
  if (productionGrid && data) {
    productionGrid.innerHTML = data.products.map((product) => `
      <article class="production-card"><img src="${product.image}" alt="${product.name}" loading="lazy"><div><p class="card-type">${product.category}</p><h3>${product.name}</h3><p>${product.description}</p><span>${product.format}</span></div></article>`).join('');
  }

  const farmGrid = document.querySelector('[data-farm-grid]');
  if (farmGrid && data) {
    farmGrid.innerHTML = data.farmCatalog.map((farm) => `
      <article class="farm-card"><a href="${farm.href}"><img src="${farm.image}" alt="${farm.name}" loading="lazy"><span class="card-arrow" aria-hidden="true">↗</span></a><div><p class="card-type">${farm.type}</p><h3>${farm.name}</h3><p>${farm.description}</p><a class="text-link" href="${farm.href}">Explore area <span aria-hidden="true">→</span></a></div></article>`).join('');
  }

  const revealTargets = document.querySelectorAll('main section:not(.hero):not(.page-hero), .business-card, .product-tile, .production-card, .farm-card, .detail-card, .process-grid > div, .glass-aside, .quality-note, .error-page > *');
  revealTargets.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
  }
})();
