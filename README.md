# Noosh Landing Page

Landing page for [Noosh](https://noosh.app) — the all-in-one recipe manager, digital cookbook, and pantry tracker.

## Local Development

Open `index.html` in your browser. No build step required.

For live reload during development, use any static file server:

```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this code:
   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Select `main` branch and `/ (root)` folder
6. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Custom Domain

1. Add your domain to the `CNAME` file (e.g., `noosh.app`)
2. In your domain registrar, add DNS records:
   - **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME record**: `YOUR_USERNAME.github.io`
3. In GitHub repo **Settings → Pages → Custom domain**, enter your domain
4. Check **Enforce HTTPS**

## Customization

### Brand Colors

Edit CSS custom properties in `css/styles.css`:

```css
:root {
  --color-primary: #1a1a2e;
  --color-accent: #c9b8ff;
  --color-accent-light: #e8e0ff;
  --color-bg: #f5f6f8;
  /* ... */
}
```

### App Screenshots

Replace the placeholder phone mockup content in `index.html`. Each mockup uses this structure:

```html
<div class="phone-mockup">
  <div class="phone-mockup__screen">
    <!-- Replace placeholder with an <img> tag -->
    <img src="images/your-screenshot.png" alt="Description">
  </div>
</div>
```

### App Store Link

Search for `href="#download"` and `href="#"` in `index.html` and replace with your actual App Store URL.

### Logo

Replace the text logo in the nav with your logo image:

```html
<a href="/" class="nav__logo">
  <img src="images/logo.svg" alt="Noosh" height="32">
</a>
```
