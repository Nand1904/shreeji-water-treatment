import Image from "next/image";
import Link from "next/link";
import { getProduct, products } from "@/lib/products";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product" };

  return {
    title: `${p.name} | Shreeji Water Treatment`,
    description: `${p.name} electronic water softener specifications and applications.`,
  };
}

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-3xl border border-white/40 bg-white/60 shadow-sm backdrop-blur-xl">
    {children}
  </div>
);

export default async function ProductDetail({ params }: PageProps) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return notFound();

  const specs: Array<{ label: string; value: string }> = [
    { label: "Pipe Diameter", value: p.pipeDiameter },
    { label: "Max Capacity", value: p.maxCapacity },
    { label: "Input Voltage", value: p.inputVoltage },
    { label: "Operating Voltage", value: p.operatingVoltage },
    { label: "Frequency Range", value: p.frequencyRange },
    { label: "Impulse Bands", value: p.impulseBands },
    { label: "Measurements", value: p.measurements },
    { label: "Required Space", value: p.requiredSpace },
  ];

  return (
    <div className="space-y-10">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/products"
          className="text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          ← Back to Products
        </Link>

        <div className="flex gap-2">
          <Link
            href="/contact"
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 hover:shadow"
          >
            Get Quote
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-xl border border-slate-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            How it Works
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Product Image Card */}
        <Card>
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-teal-700">
                  Electronic Water Softener
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {p.name}
                </h1>

                <div className="mt-2 inline-flex items-baseline gap-2 whitespace-nowrap text-teal-700">
                  <span className="text-sm font-semibold">₹</span>
                  <span className="text-xl font-semibold">
                    {p.priceINR.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    (GST included)
                  </span>
                </div>
              </div>

              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                Model
              </span>
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-white">
              <Image
                src={p.image}
                alt={`${p.name} Electronic Water Softener`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={p.slug === "es800"}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.bestFor.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Summary + Note */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Quick Summary</h2>
              <p className="mt-2 text-sm text-slate-700">
                Designed to help reduce scale deposits by influencing mineral
                crystallization behavior. Works without salt, chemicals, or
                regeneration cycles.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4">
                  <div className="text-xs text-slate-500">Pipe Range</div>
                  <div className="mt-1 font-semibold">{p.pipeDiameter}</div>
                </div>
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4">
                  <div className="text-xs text-slate-500">Flow</div>
                  <div className="mt-1 font-semibold">{p.maxCapacity}</div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6 sm:p-8">
              <h3 className="font-semibold">Important Note</h3>
              <p className="mt-2 text-sm text-slate-700">
                Electronic water softeners are designed to help reduce scale
                deposits by influencing mineral crystallization behavior. They
                do not physically remove calcium/magnesium like salt-based ion
                exchange systems.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Specifications</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s) => (
            <Card key={s.label}>
              <div className="p-5">
                <div className="text-xs font-medium text-slate-500">
                  {s.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  {s.value}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Installation */}
      <Card>
        <div className="p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Installation (Overview)</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Install on the main supply line (no cutting required).</li>
            <li>Wrap impulse bands around the pipe and secure firmly.</li>
            <li>Connect the power supply; indicator confirms operation.</li>
            <li>Works continuously with minimal maintenance.</li>
          </ul>
        </div>
      </Card>

      {/* Bottom CTA */}
      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 text-center shadow-sm backdrop-blur-xl">
        <h3 className="text-lg font-semibold">Need help choosing a model?</h3>
        <p className="mt-2 text-sm text-slate-700">
          Share your pipe diameter and flow requirement — we’ll recommend the
          right unit.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
