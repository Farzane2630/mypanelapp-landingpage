Duplicate component usage if it simplifies the architecture. Avoid duplicating component logic.

---

When deciding between Image and CSS backgrounds, I ask:

If I removed this image, would the page lose information?

Yes → use <Image />.
No → use background-image.

It's a simple rule, but it works surprisingly well.

## Image Formats Cheat Sheet

| Format         | Quality              |       File Size | Transparency | Best Use Case                                                       |
| -------------- | -------------------- | --------------: | ------------ | ------------------------------------------------------------------- |
| **SVG**        | Infinite (Vector)    |         ⭐ Tiny | ✅ Yes       | Logos, icons, simple illustrations                                  |
| **PNG**        | Excellent (Lossless) |        ❌ Large | ✅ Yes       | UI screenshots (only when necessary), images requiring transparency |
| **JPEG / JPG** | Good                 |        ⭐ Small | ❌ No        | Photographs and realistic images                                    |
| **WebP**       | Excellent            | ⭐⭐ Very Small | ✅ Yes       | Recommended default for most website images                         |
| **AVIF**       | Excellent            | ⭐⭐⭐ Smallest | ✅ Yes       | Modern websites where maximum compression is desired                |

### Quick Rules

- ✅ **SVG** → Logos, icons, vector graphics
- ✅ **WebP** → Hero images, screenshots, illustrations, product images (recommended default)
- ✅ **JPEG** → Photos when WebP/AVIF are unavailable
- ✅ **PNG** → Only when transparency or lossless quality is required
- ✅ **AVIF** → Best compression, but slightly slower to encode; excellent for production websites

### SEO & Performance Notes

> Google does **not** rank images based on their file format.

Instead, image formats affect **performance**, which influences **Core Web Vitals** and can indirectly impact SEO.

Example:

```text
Large PNG
    ↓
Slower page load
    ↓
Poor Largest Contentful Paint (LCP)
    ↓
Poor Core Web Vitals
    ↓
Potential SEO impact
```

### For MyPanelApp

| Asset                  | Recommended Format |
| ---------------------- | ------------------ |
| Logo                   | SVG                |
| Icons                  | SVG                |
| Dashboard Screenshot   | WebP               |
| Product Images         | WebP               |
| Team Photos            | WebP               |
| Decorative Backgrounds | CSS or WebP        |

### Before Committing an Image

- Export at the correct dimensions (don't upload a 4K image if it displays at 600px wide).
- Prefer **WebP** for raster images.
- Keep file sizes as small as possible without noticeable quality loss.
- Use descriptive filenames (e.g., `dashboard-bookings.webp` instead of `image1.png`).
- Always provide meaningful `alt` text when using `<Image />`.
