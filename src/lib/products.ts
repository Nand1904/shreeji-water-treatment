export type Product = {
  slug: string;
  name: string;
  image: string;
  pipeDiameter: string;
  maxCapacity: string;
  inputVoltage: string;
  operatingVoltage: string;
  frequencyRange: string;
  impulseBands: string;
  measurements: string;
  requiredSpace: string;
  bestFor: string[];
  priceINR: number;
};

export const products: Product[] = [
  {
    slug: "es100",
    name: "ES100",
    image: "/products/es100.jpg",
    pipeDiameter: "25 – 50 mm",
    maxCapacity: "10 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "2 × 2.5 m",
    measurements: "120 × 95 × 30 mm",
    requiredSpace: "600 mm",
    bestFor: ["Apartments", "Small homes"],
    priceINR: 35000,
  },
  {
    slug: "es200",
    name: "ES200",
    image: "/products/es200.jpg",
    pipeDiameter: "50 – 75 mm",
    maxCapacity: "25 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "3 × 3 m",
    measurements: "130 × 110 × 30 mm",
    requiredSpace: "750 mm",
    bestFor: ["Villas", "Small commercial"],
    priceINR: 71000,
  },
  {
    slug: "es300",
    name: "ES300",
    image: "/products/es300.jpg",
    pipeDiameter: "75 – 125 mm",
    maxCapacity: "50 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "4 × 4 m",
    measurements: "150 × 135 × 35 mm",
    requiredSpace: "900 mm",
    bestFor: ["Hotels", "Hospitals", "Commercial buildings"],
    priceINR: 121000,
  },
  {
    slug: "es400",
    name: "ES400",
    image: "/products/es400.jpg",
    pipeDiameter: "100 – 150 mm",
    maxCapacity: "80 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "5 × 4.5 m",
    measurements: "185 × 130 × 35 mm",
    requiredSpace: "1200 mm",
    bestFor: ["Malls", "Banquet halls", "Large commercial"],
    priceINR: 181000,
  },
  {
    slug: "es600",
    name: "ES600",
    image: "/products/es600.jpg",
    pipeDiameter: "150 – 200 mm",
    maxCapacity: "120 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "7 × 8 m",
    measurements: "150 × 135 × 40 mm",
    requiredSpace: "1500 mm",
    bestFor: ["Factories", "Cooling towers", "Industrial pipelines"],
    priceINR: 251000,
  },
  {
    slug: "es800",
    name: "ES800",
    image: "/products/es800.jpg",
    pipeDiameter: "200 – 300 mm",
    maxCapacity: "180 m³/hr",
    inputVoltage: "190 – 240 VAC",
    operatingVoltage: "12 VDC",
    frequencyRange: "3 – 50 kHz",
    impulseBands: "9 × 10 m",
    measurements: "185 × 135 × 40 mm",
    requiredSpace: "1800 mm",
    bestFor: ["Refineries", "Large plants", "Boiler / HVAC systems"],
    priceINR: 380000,
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);