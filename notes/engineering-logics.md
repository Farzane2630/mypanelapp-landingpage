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

## External Links: `rel="noopener noreferrer"`

When opening an external link in a new tab using `target="_blank"`, always include:

```tsx
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit
</Link>
```

### Why?

Without `rel="noopener"`, the newly opened page can access the original page through `window.opener`, which could be exploited to redirect the original page to a malicious website (known as **reverse tabnabbing**).

`rel="noopener"` prevents the new page from accessing `window.opener`.

`rel="noreferrer"`:

- Prevents the browser from sending the `Referer` header to the destination site.
- Also provides the same protection as `noopener` in modern browsers.

**Best practice:** Always use `rel="noopener noreferrer"` with `target="_blank"` for external links.

---

## Prefer Nullish Coalescing (`??`) for Default Values

Use the nullish coalescing operator (`??`) when providing default values for optional props or variables.

Instead of:

```tsx
href={href ? href : DEFAULT_URL}
title={title ? title : t("demo")}
```

Prefer:

```tsx
href={href ?? DEFAULT_URL}
title={title ?? t("demo")}
```

### Why?

The `??` operator only falls back to the default value when the left-hand side is `null` or `undefined`.

Unlike `||` or a truthy check, it preserves valid falsy values such as:

- `""` (empty string)
- `0`
- `false`

### Comparison

| Value | `value || "default"` | `value ?? "default"` |
|-------|----------------------|----------------------|
| `undefined` | `"default"` | `"default"` |
| `null` | `"default"` | `"default"` |
| `""` | `"default"` | `""` |
| `0` | `"default"` | `0` |
| `false` | `"default"` | `false` |

### Rule of Thumb

- Use `??` when you want a default value only if the value is **missing** (`null` or `undefined`).
- Use `||` when **any falsy value** (`"", 0, false, null, undefined`) should trigger the default.
