# Van Valen Music · vanvalenmusic.com

Personal website for Alex VanValen — Santa Barbara guitarist available for performances, lessons, and sound equipment rentals.

## 🚀 Quick setup

### 1. Add your hero photo
Put your background photo in the `images/` folder named **`hero-bg.jpg`**  
(or any image — just update the `src` in `index.html` line ~32)

Portrait or landscape both work. The site overlays a dark gradient so any photo will look great.

### 2. Add YouTube video IDs
In `index.html`, find the three occurrences of `VIDEO_ID_1`, `VIDEO_ID_2`, `VIDEO_ID_3`  
Replace each with your actual YouTube video ID.

Example: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

Also update the three `video-caption` paragraphs with real titles.

### 3. Add your phone number
Find `(805) XXX-XXXX` and `8055550000` in `index.html` — replace with your real number (appears in 3 places).

### 4. Set up the contact form (optional)
The form uses [Formspree](https://formspree.io) (free plan available):
1. Sign up at formspree.io
2. Create a new form
3. Copy your Form ID (looks like `xbljqzrk`)
4. In `js/main.js`, replace `YOUR_FORM_ID` with it

If you skip this, the form falls back to opening a pre-filled email — still works fine.

### 5. Deploy to GitHub Pages
1. Push this whole folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set Source to **main branch / root**
4. Your site goes live at `https://yourusername.github.io/repo-name`

Or connect a custom domain (`vanvalenmusic.com`) under Settings → Pages → Custom domain.

---

## 📁 File structure

```
vanvalen-site/
├── index.html          ← Main site (all sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav, YouTube, form, scroll reveal
├── images/
│   ├── hero-bg.jpg     ← ADD THIS: your background photo
│   └── about-photo.png ← About section photo (included)
└── README.md
```

---

## ✏️ Common edits

| What to change | Where to find it |
|---|---|
| Hero background photo | `images/hero-bg.jpg` (replace the file) |
| Name / headline text | `index.html` → `.hero__name` |
| Genres listed | `index.html` → `.hero__genres` |
| Stats (20+, 100%, etc.) | `index.html` → `.hero__stats` |
| Prices | `index.html` → `.price-card__amount` |
| Bullet points in pricing | `index.html` → `.price-card__features` |
| About text | `index.html` → `.about__body` |
| YouTube video IDs | `index.html` → `data-video-id="..."` |
| Accent color (copper) | `css/style.css` → `:root { --copper: #B05E2A; }` |
| Instagram handle | `index.html` → search `guru_rilla` |
| PDF links | `index.html` → `.download-link` hrefs |
| Phone number | `index.html` → search `XXX-XXXX` |

---

## 🎨 Design tokens (easy to customize)

All colors and fonts are in `css/style.css` at the top in `:root {}`:

```css
--copper:     #B05E2A;   /* main accent — change this to repaint everything */
--cedar-dark: #2C1A08;   /* dark backgrounds and text */
--parchment:  #F5F0E6;   /* warm off-white backgrounds */
```

---

Built for vanvalenmusic.com · Santa Barbara, CA
