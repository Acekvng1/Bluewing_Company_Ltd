# BlueWing Company Limited website

Phase 1 static website foundation for BlueWing Company Limited. Built with HTML5, CSS3 and vanilla JavaScript for GitHub Pages.

## Run locally
Open `index.html` in a browser, or serve the folder with any static file server. No PHP, MySQL, Node backend or environment variables are required.

## Deploy
Push the repository to GitHub, then enable GitHub Pages from the repository's Pages settings using the branch and root folder containing `index.html`.

## Where to edit content
- Company contact details, social links, subsidiaries and products: `data/site-data.js`
- Global design and responsive rules: `css/style.css`
- Homepage rendering and mobile navigation: `js/main.js`
- Replace representative image URLs in `data/site-data.js` and the homepage hero when approved BlueWing photography is available.

## Structure
Top-level HTML files are crawlable public pages. `farms/`, `restaurant/`, `production/` and `ship-chandler/` contain nested division pages with relative asset paths. `404.html`, `robots.txt` and `sitemap.xml` are included for GitHub Pages deployment.

All unknown company information is intentionally marked as a placeholder. The contact form opens the user's email client and does not claim to store or submit data to a backend.
