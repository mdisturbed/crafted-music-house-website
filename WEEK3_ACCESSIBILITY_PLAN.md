# Week 3: Accessibility Improvements
**Target:** 77 → 90+ score
**Time Estimate:** 2-3 hours

## Current Status
- ✅ Performance: 99/100
- 🟡 Accessibility: 77/100 (needs improvement)
- 🟡 Best Practices: 81/100
- ✅ SEO: 100/100

## Common Accessibility Issues to Check

### 1. Color Contrast (High Impact)
**WCAG AA Standard:** 4.5:1 for normal text, 3:1 for large text

Areas to audit:
- [ ] Body text on cmh-cream background
- [ ] Gold text on dark backgrounds
- [ ] Button text colors
- [ ] Link colors (especially on hover)
- [ ] Form placeholder text
- [ ] Music player text

**Tool:** Use Chrome DevTools > Lighthouse > View Trace to see specific contrast failures

### 2. ARIA Labels & Semantic HTML
- [ ] Icon-only buttons (Play, Share, Edit, Delete, etc.)
- [ ] Social media links (Spotify, Apple Music, etc.)
- [ ] Logo/home link
- [ ] Music player controls
- [ ] Admin edit controls
- [ ] Navigation menu items

### 3. Form Accessibility
**Inquiry Form & Newsletter:**
- [ ] All inputs have associated `<label>` tags
- [ ] Labels use `htmlFor` attribute
- [ ] Required fields marked with `aria-required`
- [ ] Error messages use `aria-describedby`
- [ ] Autocomplete attributes on email/name fields

### 4. Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators visible (outline or custom style)
- [ ] Tab order is logical
- [ ] Skip to main content link
- [ ] Modal/menu traps focus when open
- [ ] Escape key closes modals

### 5. Heading Hierarchy
- [ ] No skipped levels (h1 → h2 → h3, not h1 → h3)
- [ ] Only one h1 per page
- [ ] Headings describe content structure

### 6. Images & Media
- [ ] All decorative images have `alt=""`
- [ ] Content images have descriptive alt text
- [ ] Background images used for decoration only
- [ ] No text in images (or redundant text in alt)

### 7. Touch/Click Targets
**WCAG Guideline:** Minimum 44x44px tap target

- [ ] Mobile navigation items
- [ ] Social media icons
- [ ] Music player buttons
- [ ] Card hover areas
- [ ] Admin controls

### 8. Links
- [ ] Link text is descriptive (no "click here")
- [ ] Links have `:focus` styles
- [ ] External links have indication
- [ ] Links have sufficient contrast

## Implementation Plan

### Session 1: Color Contrast (30 min)
1. Run Chrome DevTools Lighthouse audit
2. Identify failing contrast ratios
3. Adjust colors to meet WCAG AA
4. Test with contrast checker

### Session 2: ARIA Labels (30 min)
1. Add `aria-label` to all icon-only buttons
2. Add `aria-current` to active nav items
3. Add `role` attributes where needed
4. Add `aria-hidden` to decorative icons

### Session 3: Forms (20 min)
1. Wrap inputs in proper `<label>` tags
2. Add `aria-required` to required fields
3. Add autocomplete attributes
4. Add error handling with `aria-describedby`

### Session 4: Keyboard Navigation (30 min)
1. Add visible focus styles to all interactive elements
2. Implement focus trap for modals
3. Add skip navigation link
4. Test full keyboard navigation flow

### Session 5: Heading Hierarchy (15 min)
1. Audit all heading levels
2. Fix any skipped levels
3. Ensure semantic structure

### Session 6: Testing (30 min)
1. Run PageSpeed Insights
2. Run axe DevTools
3. Manual keyboard testing
4. Screen reader testing (VoiceOver)
5. Deploy fixes

## Quick Wins (Can do all at once)

These fixes take ~1 hour total and should get us close to 90:

1. **Add ARIA labels to icon buttons**
   ```tsx
   <button aria-label="Play track">
     <Play />
   </button>
   ```

2. **Fix color contrast**
   - Lighten dark text on light backgrounds
   - Darken light text on dark backgrounds

3. **Add form labels**
   ```tsx
   <label htmlFor="email">Email</label>
   <input id="email" type="email" />
   ```

4. **Add focus styles**
   ```css
   button:focus-visible {
     outline: 2px solid #C9A227;
     outline-offset: 2px;
   }
   ```

## Expected Results

**Before:** 77/100
**After:** 90-95/100

Main improvements:
- Color contrast failures: 0
- Missing labels: 0
- Keyboard navigation: Full support
- WCAG AA compliance: 100%

## Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [Chrome Lighthouse](chrome://flags/#enable-lighthouse)
