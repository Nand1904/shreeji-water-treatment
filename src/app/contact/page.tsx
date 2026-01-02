import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Shreeji Water Treatment for quotes and product recommendations.",
};

const phone = "6359666653";
const email = "shreejiwatertreatment@gmail.com";
const address =
  "3rd floor Shop no. 303, Samanvay Symphony, opp. Ambe vidyalaya, Nr. Vaikunth Char Rasta, Waghodia road, Vadodara, Gujarat";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Get a Quote
        </h1>
        <p className="mt-2 text-slate-700">
          Share your pipe diameter, usage type, and location. Our team will recommend the right
          electronic water softener.
        </p>
      </div>

      {/* Contact Card */}
      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl space-y-4">
        <p className="text-slate-700">
          📞 <strong className="text-slate-900">Mobile / WhatsApp:</strong>{" "}
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 font-medium hover:underline"
          >
            +91 {phone}
          </a>
        </p>

        <p className="text-slate-700">
          📧 <strong className="text-slate-900">Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            className="text-teal-700 font-medium hover:underline"
          >
            {email}
          </a>
        </p>

        <p className="text-slate-700">
          📍 <strong className="text-slate-900">Office:</strong> {address}
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href={`https://wa.me/91${phone}`}
            target="_blank"
            className="inline-block rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow"
          >
            Chat on WhatsApp
          </Link>

          <Link
            href={mapsLink}
            target="_blank"
            className="inline-block rounded-xl border border-white/60 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
        <h2 className="text-xl font-semibold text-slate-900">Find Us</h2>
        <p className="mt-2 text-sm text-slate-700">
          Our office location in Vadodara, Gujarat.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/40 bg-white">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shreeji Water Treatment Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
