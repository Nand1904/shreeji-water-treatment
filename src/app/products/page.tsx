import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products",
  description: "Explore Shreeji Electronic Water Softener models and specifications.",
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-full rounded-3xl border border-white/40 bg-white/60 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Products
          </h1>
          <p className="mt-2 max-w-2xl text-slate-700">
            Electronic Water Softeners (Descalers) for domestic, commercial and industrial use.
            Choose a model based on your pipe diameter and flow requirements.
          </p>
        </div>

        <Link
          href="/contact"
          className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
        >
          Get Quote
        </Link>
      </div>

      {/* auto-rows-fr + h-full cards keeps grid consistent */}
      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group h-full">
            <Card>
              <div className="flex h-full flex-col p-5">
                {/* Image area: fixed aspect for all */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={p.image}
                    alt={`${p.name} Electronic Water Softener`}
                    fill
                    className="object-contain p-6 transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={p.slug === "es800"}
                  />
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-semibold text-slate-900">
                        {p.name}
                      </h2>
                      <p className="mt-1 truncate text-sm text-slate-700">
                        Pipe: {p.pipeDiameter} • Flow: {p.maxCapacity}
                      </p>
                    </div>

                    <p className="mt-2 text-lg font-semibold text-teal-700">
                      ₹ {p.priceINR.toLocaleString("en-IN")}
                      <span className="ml-1 text-sm font-medium text-slate-500">
                        (GST included)
                      </span>
                    </p>
                    
                    <span className="shrink-0 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                      View →
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-white/50 bg-white/60 p-3">
                      <div className="text-xs text-slate-500">Impulse Bands</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {p.impulseBands}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/50 bg-white/60 p-3">
                      <div className="text-xs text-slate-500">Required Space</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {p.requiredSpace}
                      </div>
                    </div>
                  </div>

                  {/* Reserve space so cards stay same height even if tags vary */}
                  <div className="mt-4 flex min-h-[34px] flex-wrap gap-2">
                    {p.bestFor.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 text-center shadow-sm backdrop-blur-xl">
        <h3 className="text-lg font-semibold text-slate-900">
          Need help choosing a model?
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          Share pipe diameter and usage type — we’ll recommend the right unit.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Speak to an Expert
        </Link>
      </div>
    </div>
  );
}
