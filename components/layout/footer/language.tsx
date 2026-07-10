"use client";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function Language() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex gap-x-2 w-full">
      <button
        type="button"
        className="rounded-md w-full border border-slate-700 text-slate-800 font-medium py-1"
        onClick={() => router.replace(pathname, { locale: "fa" })}
      >
        فارسی{" "}
      </button>
      <button
        type="button"
        className="rounded-md w-full border border-slate-700 text-slate-800 font-medium py-1"
        onClick={() => router.replace(pathname, { locale: "en" })}
      >
        English{" "}
      </button>
    </div>
  );
}
