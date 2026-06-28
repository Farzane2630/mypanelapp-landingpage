⭐ Here's the pattern I need to remember

Instead of memorizing APIs, ask these questions in order:

Question 1

Can this component render HTML without the browser?

If yes...

→ Server Component.

Question 2

Does it need:

useState
useEffect
useRef
window
document
navigator
localStorage
event handlers (onClick, onChange, etc.)

If yes...

→ Client Component.

Question 3

Can I isolate the interactive part?

Instead of this:

Navbar (Client)

Can I do:

Navbar (Server)
├── Logo (Server)
├── Links (Server)
└── ThemeToggle (Client)

If the answer is yes...

You've probably found a better design.

Here's a senior-level thought

Something that isn't obvious from the docs:

When I review Next.js code, I almost never ask:

"Why isn't this a Client Component?"

Instead, I ask:

"Does this really need to be a Client Component?"

It's a subtle but important difference.

The default assumption is that components are server-rendered. Client Components are the exception, added only when the requirements justify them.
