import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const featuredSlugs = ["es100", "es300", "es600"]; // change anytime

export default function Home() {
  const featured = products.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-8 sm:p-12 shadow-sm backdrop-blur-xl">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
            No Salt • No Chemicals • Maintenance-Free
          </p>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Reduce scale buildup. Protect pipes & equipment.
          </h1>

          <p className="mt-4 text-base text-slate-700 sm:text-lg">
            Shreeji Electronic Water Softeners help reduce limescale deposits
            without salt, chemicals, or wastewater — suitable for residential,
            commercial, and industrial use.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 hover:shadow"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/60 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [
            "Prevents Scale Buildup",
            "Helps reduce limescale deposits in pipelines, heaters and fixtures.",
          ],
          [
            "Low Maintenance",
            "No salt refilling, no resin cleaning, no regeneration cycle.",
          ],
          [
            "Eco-Friendly",
            "No chemicals and no wastewater discharge; minerals remain in water.",
          ],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
          </div>
        ))}
      </section>

      {/* FEATURED MODELS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Featured Models
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700">
              A quick look at our most commonly used electronic water softeners.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden text-sm font-medium text-teal-700 hover:underline sm:block"
          >
            View all models →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-6 transition group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

<div className="p-5">
  <div className="flex items-start justify-between gap-3">
    <div className="min-w-0">
      <h3 className="truncate font-semibold text-slate-900">{p.name}</h3>
      <p className="mt-1 truncate text-sm text-slate-700">
        Pipe: {p.pipeDiameter} • Flow: {p.maxCapacity}
      </p>
    </div>

    <div className="flex flex-col items-end gap-2">
      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
        Details →
      </span>

      <div className="whitespace-nowrap text-sm font-semibold text-teal-700">
        ₹ {p.priceINR.toLocaleString("en-IN")}
        <span className="ml-1 text-xs font-medium text-slate-500">
          (GST included)
        </span>
      </div>
    </div>
  </div>
</div>

            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/products"
          className="block text-center text-sm font-medium text-teal-700 hover:underline sm:hidden"
        >
          View all models →
        </Link>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/40 bg-white/60 p-8 text-center shadow-sm backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          Not sure which model you need?
        </h2>
        <p className="mt-2 text-slate-700">
          Share pipe diameter and usage type — we’ll recommend the right unit.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Speak to an Expert
        </Link>
      </section>
    </div>
  );
}
