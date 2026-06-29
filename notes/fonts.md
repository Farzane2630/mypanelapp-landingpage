Next.js has a built-in package:

`import { Geist } from "next/font/google";`

Then:

```
const geist = Geist({
    subsets: ["latin"],
});
```

Then:

```
<body className={geist.className}>
```

Done.

No <link>.

No CSS import.

Why did Next.js invent this?

This is the important part.

Instead of simply loading fonts...

Next.js optimizes them at build time.

Benefits include:

✅ Self-hosted fonts (no request to Google on every page load)
✅ Better privacy
✅ Better performance
✅ Reduced layout shift (CLS)
✅ Automatic preload
✅ Better Lighthouse scores

It's one of those features that makes production apps faster with almost no extra work.

### 1. Why not use <link>?

Next.js self-hosts the font.

That means instead of asking Google every time:

Browser

↓

Google Fonts

↓

Download

the font becomes part of your application.

Advantages:

faster
privacy-friendly
fewer external dependencies
automatic optimization

### 2. Why apply the font to <body>?

Because layout.tsx wraps every page:

RootLayout
│
├── Navbar
├── Main
└── Footer

Everything inherits the font.

One line.

Entire application.

### 3. Geist vs localFont

Geist is native...

localFont is our own font.

Example:

Google:

```
import { Geist } from "next/font/google";
```

Local:

```
import localFont from "next/font/local";

const myFont = localFont({
src: "./fonts/MyFont.woff2",
});
```

Perfect.
