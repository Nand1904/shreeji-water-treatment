import Link from "next/link";

export const metadata = {
  title: "How It Works",
  description:
    "Learn how electronic water softeners reduce scale buildup without salt or chemicals.",
};

const manuals = [
  { model: "ES100", href: "/pdfs/ES100_Manual.pdf" },
  { model: "ES200", href: "/pdfs/ES200_Manual.pdf" },
  { model: "ES300", href: "/pdfs/ES300_Manual.pdf" },
  { model: "ES400", href: "/pdfs/ES400_Manual.pdf" },
  { model: "ES600", href: "/pdfs/ES600_Manual.pdf" },
  { model: "ES800", href: "/pdfs/ES800_Manual.pdf" },
];

export default function HowItWorks() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          How It Works
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Hard water contains calcium and magnesium. When water is heated or pressure changes, these
          minerals can form scale deposits inside pipes, heaters, and fixtures. Electronic water softeners
          apply electromagnetic impulses around the supply line to help reduce the tendency of these minerals
          to form hard deposits.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["No Salt", "No brine tank, no regeneration, no salt handling."],
          ["No Chemicals", "Chemical-free treatment for many common applications."],
          ["Maintenance-Free", "Designed to run continuously with minimal upkeep."],
        ].map(([t, d]) => (
          <div
            key={t}
            className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="font-semibold text-slate-900">{t}</h3>
            <p className="mt-2 text-sm text-slate-700">{d}</p>
          </div>
        ))}
      </div>

      {/* Manuals */}
      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Product Manuals (PDF)
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Download installation and operation manuals for each model.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-medium text-teal-700 hover:underline"
          >
            View products →
          </Link>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {manuals.map((m) => (
            <a
              key={m.href}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
            >
              <span>{m.model} Manual</span>
              <span className="text-teal-700">Open →</span>
            </a>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/50 bg-white/50 p-4 text-sm text-slate-700">
          Tip: On mobile, PDFs open in your browser/PDF viewer. On desktop, they open in a new tab.
        </div>
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
        <h2 className="text-xl font-semibold text-slate-900">Good Fit For</h2>
        <p className="mt-2 text-slate-700">
          Residential buildings, hotels, hospitals, cooling towers, heat exchangers, and industrial piping
          systems where scale buildup increases maintenance and reduces efficiency.
        </p>
      </div>
    </div>
  );
}
