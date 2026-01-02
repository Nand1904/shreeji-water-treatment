import Link from "next/link";

export default function Footer() {
  const phone = "+91 6359666653";
  const email = "shreejiwatertreatment@gmail.com";
  const address =
    "3rd floor Shop no. 303, Samanvay Symphony, opp. Ambe vidyalaya, Nr. Vaikunth Char Rasta, Waghodia road, Vadodara, Gujarat";

  return (
    <footer className="mt-16 border-t border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-slate-900">Shreeji Water Treatment</h4>
          <p className="mt-2 text-sm text-slate-700">
            Electronic Water Softeners (Descalers) for domestic, commercial, and industrial use.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link className="text-slate-700 hover:text-teal-700" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-teal-700" href="/how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-teal-700" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <p className="mt-2 text-sm text-slate-700">
            {address}
            <br />
            Phone: {phone}
            <br />
            Email:{" "}
            <a className="text-slate-700 hover:text-teal-700" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/40 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Shreeji Water Treatment. All rights reserved.
      </div>
    </footer>
  );
}
