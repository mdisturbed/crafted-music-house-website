# Week 2: Performance Optimization Plan

**Goal:** Improve Performance from 77/100 to 90/100
**Timeline:** 2-3 hours of focused work
**Expected Impact:** Page load 3.5s → 1.5-2.0s

---

## Current Performance Metrics (Baseline)

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Performance Score | 77/100 | 90/100 | 🟡 Good |
| First Contentful Paint | 3.5s | <1.8s | 🔴 Poor |
| Largest Contentful Paint | 4.4s | <2.5s | 🔴 Poor |
| Speed Index | 3.5s | <3.4s | 🟡 OK |
| Total Blocking Time | 10ms | <200ms | ✅ Excellent |
| Cumulative Layout Shift | 0.017 | <0.1 | ✅ Excellent |

**Main Bottlenecks:**
1. ❌ Font loading from Google Fonts CDN (blocking render)
2. ❌ Tailwind CSS loaded from CDN (large file, no tree-shaking)
3. ❌ Images not lazy loaded (all load on page load)
4. ❌ No code splitting (entire React app loads at once)

---

## Week 2 Tasks (Priority Order)

### 🔥 Priority 1: Font Optimization (+5 points)
**Impact:** Largest improvement, reduces FCP by ~1.5s

**Tasks:**
1. ✅ Download font files locally (Inter, Playfair Display)
2. ✅ Convert to WOFF2 format (best compression)
3. ✅ Create font-face CSS with font-display: swap
4. ✅ Preload critical fonts in HTML
5. ✅ Remove Google Fonts CDN link
6. ✅ Subset fonts (Latin characters only)

**Files to modify:**
- `index.html` - Add font preload, remove Google Fonts
- Create `public/fonts/` directory
- Create `src/styles/fonts.css`

**Expected result:**
- FCP: 3.5s → 2.0s (-1.5s)
- No more render-blocking font requests

---

### 🔥 Priority 2: Tailwind CDN Removal (+4 points)
**Impact:** Remove 350KB+ blocking script

**Tasks:**
1. ✅ Install Tailwind CSS locally via npm
2. ✅ Configure tailwind.config.js with CMH colors
3. ✅ Create src/index.css with Tailwind directives
4. ✅ Remove CDN script from index.html
5. ✅ Enable PurgeCSS (tree-shaking) for production

**Files to modify:**
- Remove `<script src="https://cdn.tailwindcss.com"></script>`
- Create `tailwind.config.js`
- Create `src/index.css`
- Update `main.tsx` to import CSS

**Expected result:**
- Remove ~350KB blocking JavaScript
- Final CSS bundle: ~15-20KB (purged)
- FCP: 2.0s → 1.5s (-0.5s)

---

### 🔥 Priority 3: Image Lazy Loading (+3 points)
**Impact:** Only load visible images first

**Tasks:**
1. ✅ Add loading="lazy" to all images below fold
2. ✅ Keep hero images as loading="eager"
3. ✅ Update OptimizedImage component
4. ✅ Add native lazy loading to all cover art
5. ✅ Add lazy loading to artist avatars

**Files to modify:**
- `src/components/OptimizedImage.tsx`
- `src/components/ArtistRoster.tsx`
- `src/components/Catalog.tsx`
- `src/components/Reviews.tsx`

**Expected result:**
- Faster initial page load
- Reduced bandwidth for users who don't scroll
- LCP: 4.4s → 3.0s (-1.4s)

---

### Priority 4: Code Splitting (+3 points)
**Impact:** Load only what's needed per page

**Tasks:**
1. ✅ Implement React.lazy() for route components
2. ✅ Split heavy components (Catalog, Artist profiles)
3. ✅ Add Suspense boundaries with loading states
4. ✅ Configure Vite code splitting

**Files to modify:**
- `src/App.tsx` - Lazy load page components
- Create loading fallback components

**Expected result:**
- Initial bundle: 200KB → 80KB (-60%)
- Faster initial load
- Speed Index: 3.5s → 2.5s (-1.0s)

---

### Priority 5: Resource Hints (+2 points)
**Impact:** Browser can prefetch critical resources

**Tasks:**
1. ✅ Add dns-prefetch for external domains
2. ✅ Add preconnect for font origins
3. ✅ Add preload for critical images (hero)
4. ✅ Add prefetch for likely next pages

**Files to modify:**
- `index.html` - Add resource hints

**Expected result:**
- Faster resource loading
- Better perceived performance

---

## Implementation Order (Session Plan)

### Session 1: Font Optimization (45 min)
1. Download Inter & Playfair Display fonts
2. Convert to WOFF2 using online tool
3. Create fonts.css with @font-face
4. Update index.html with preload
5. Test: fonts load instantly

### Session 2: Tailwind Local Setup (30 min)
1. `npm install -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. Copy CMH colors to tailwind.config.js
4. Create src/index.css
5. Remove CDN script
6. Build and test

### Session 3: Image Lazy Loading (20 min)
1. Update OptimizedImage component
2. Add loading="lazy" to catalog images
3. Add loading="lazy" to artist roster
4. Keep hero images eager
5. Test scroll performance

### Session 4: Code Splitting (30 min)
1. Wrap route components with React.lazy()
2. Add Suspense with spinner
3. Test navigation
4. Check bundle sizes

### Session 5: Test & Deploy (15 min)
1. Run production build
2. Test locally with `npm run preview`
3. Run PageSpeed Insights
4. Commit and deploy
5. Verify live performance

---

## Expected Final Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Performance Score | 77 | **90+** | +13 points |
| FCP | 3.5s | **1.5s** | -2.0s (57%) |
| LCP | 4.4s | **2.5s** | -1.9s (43%) |
| Speed Index | 3.5s | **2.5s** | -1.0s (29%) |
| Total Blocking Time | 10ms | **8ms** | ✅ Excellent |
| CLS | 0.017 | **0.015** | ✅ Excellent |

**Bundle Sizes:**
- Before: ~350KB+ (Tailwind CDN) + 200KB (React)
- After: ~80KB (initial) + ~100KB (lazy loaded)
- **Total reduction: 70%**

---

## Week 2 Success Criteria

✅ **Performance score: 90+/100**
✅ **FCP under 1.8 seconds**
✅ **LCP under 2.5 seconds**
✅ **All Core Web Vitals: Green**
✅ **Bundle size reduced by 60%+**

---

## Tools & Resources

**Font Tools:**
- Google Webfonts Helper: https://gwfh.mranftl.com/fonts
- WOFF2 Converter: https://cloudconvert.com/woff-to-woff2

**Testing:**
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools → Lighthouse
- Chrome DevTools → Network (throttling)

**Documentation:**
- Tailwind Local Install: https://tailwindcss.com/docs/installation
- React Lazy Loading: https://react.dev/reference/react/lazy
- Vite Optimization: https://vitejs.dev/guide/performance.html

---

*Week 2 Plan | Performance Optimization | Target: 90/100*
