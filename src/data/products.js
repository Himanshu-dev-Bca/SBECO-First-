// Complete product catalogue data — single source of truth
export const CATALOGUE = [
  // ═══════════════════════════════════════════════════════════════
  // 1. TAPE AND TAPE DISPENSERS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "tape-dispensers",
    name: "Tape and Tape Dispensers",
    description: "Premium adhesive tapes and professional tape dispensers for packaging, labeling, and sealing applications.",
    imageUrl: "/images/tape_dispensers.png",
    subcategories: [
      // ─── SUBCATEGORY 1: Carton Sealing Tapes (12 products) ───
      {
        id: "carton-sealing-tapes",
        name: "Carton Sealing Tapes",
        products: [
          {
            id: "carton-sealing-tape",
            name: "SBECO Carton Sealing Tape 50mm",
            sku: "SBL-TAPE-CST-50",
            brand: "SBECO",
            tagline: "Premium-grade carton sealing tape, 50mm width, 50m per roll",
            badge: "Popular",
            description: "SBECO Carton Sealing Tape is a high-strength acrylic-based adhesive tape designed for sealing corrugated cartons, boxes, and packages. With a 50mm width and 50-meter roll length, it provides excellent adhesion on cardboard surfaces and maintains strength under various temperature and humidity conditions. Suitable for both manual and automated sealing applications.",
            specs: { "Width": "50mm", "Length": "50m", "Adhesive": "Acrylic-based", "Thickness": "0.05mm", "Breaking Strength": "22 N/25mm" },
            imageUrl: "/images/carton_tape.png",
            consumables: [{ name: "Tape Dispenser Gun", sku: "SBL-DISP-GUN", icon: "tool" }],
            similar: ["clear-packaging-tape", "kraft-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "carton-sealing-tape-75",
            name: "SBECO Carton Sealing Tape 75mm",
            sku: "SBL-TAPE-CST-75",
            brand: "SBECO",
            tagline: "Wide carton sealing tape for heavy-duty box sealing",
            badge: "Heavy Duty",
            description: "Extra-wide 75mm carton sealing tape for sealing large corrugated boxes and heavy shipments. Superior bonding strength on rough cardboard surfaces.",
            specs: { "Width": "75mm", "Length": "66m", "Adhesive": "Acrylic-based", "Thickness": "0.05mm", "Breaking Strength": "28 N/25mm" },
            imageUrl: "/images/carton_tape.png",
            consumables: [{ name: "Wide Tape Dispenser", sku: "SBL-DISP-WIDE", icon: "tool" }],
            similar: ["carton-sealing-tape", "carton-sealing-tape-100"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-100",
            name: "SBECO Carton Sealing Tape 100mm",
            sku: "SBL-TAPE-CST-100",
            brand: "SBECO",
            tagline: "Extra-wide sealing tape for oversized cartons and pallets",
            badge: "Industrial",
            description: "100mm ultra-wide carton sealing tape for oversized packaging, pallet bundling, and reinforced box sealing.",
            specs: { "Width": "100mm", "Length": "50m", "Adhesive": "Hot-melt", "Thickness": "0.06mm", "Breaking Strength": "35 N/25mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-75"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-brown",
            name: "SBECO Brown Carton Tape 48mm",
            sku: "SBL-TAPE-CST-BRN-48",
            brand: "SBECO",
            tagline: "Buff/brown carton sealing tape for discreet packaging",
            badge: "Essential",
            description: "Brown/buff colored carton sealing tape that blends with corrugated packaging for a clean, professional appearance.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Brown/Buff", "Adhesive": "Acrylic-based", "Temperature Range": "-10°C to 60°C" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape", "clear-packaging-tape"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-hotmelt",
            name: "SBECO Hot-Melt Carton Tape 50mm",
            sku: "SBL-TAPE-CST-HM-50",
            brand: "SBECO",
            tagline: "Hot-melt adhesive tape for instant bonding on cold surfaces",
            badge: "Professional",
            description: "Hot-melt adhesive carton tape that bonds instantly even in cold or dusty environments. Perfect for refrigerated warehouses and winter shipping.",
            specs: { "Width": "50mm", "Length": "50m", "Adhesive": "Hot-melt synthetic rubber", "Thickness": "0.05mm", "Temperature Range": "-30°C to 70°C" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-silent",
            name: "SBECO Silent Unwind Carton Tape 48mm",
            sku: "SBL-TAPE-CST-SIL-48",
            brand: "SBECO",
            tagline: "Low-noise packing tape for quiet work environments",
            badge: "New",
            description: "Specially engineered carton sealing tape with noise-reducing unwind technology. Ideal for office, retail, and noise-sensitive environments.",
            specs: { "Width": "48mm", "Length": "66m", "Noise Level": "< 50 dB unwind", "Adhesive": "Acrylic-based", "Color": "Clear" },
            imageUrl: "/images/carton_tape.png",
            similar: ["clear-packaging-tape"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-machine",
            name: "SBECO Machine-Grade Carton Tape 48mm",
            sku: "SBL-TAPE-CST-MCH-48",
            brand: "SBECO",
            tagline: "High-speed machine-grade tape for automated case sealers",
            badge: "Industrial",
            description: "Machine-grade carton sealing tape engineered for high-speed automated case sealing equipment. Consistent unwind tension and reliable adhesion at production speeds.",
            specs: { "Width": "48mm", "Length": "914m", "Adhesive": "Hot-melt", "Thickness": "0.043mm", "Machine Speed": "Up to 40 cases/min" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape"],
            dateAdded: "2026-06-15",
            isBestSeller: true
          },
          {
            id: "carton-sealing-tape-machine-75",
            name: "SBECO Machine-Grade Carton Tape 75mm",
            sku: "SBL-TAPE-CST-MCH-75",
            brand: "SBECO",
            tagline: "Wide machine-grade tape for high-volume case sealing lines",
            badge: "Industrial",
            description: "75mm wide machine-grade carton tape for automated sealing of large cartons on high-speed packaging lines.",
            specs: { "Width": "75mm", "Length": "914m", "Adhesive": "Hot-melt", "Thickness": "0.043mm", "Machine Speed": "Up to 35 cases/min" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-machine"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-reinforced",
            name: "SBECO Reinforced Carton Tape 50mm",
            sku: "SBL-TAPE-CST-REINF-50",
            brand: "SBECO",
            tagline: "Fiberglass-reinforced tape for maximum box strength",
            badge: "Heavy Duty",
            description: "Fiberglass-reinforced sealing tape for extra-heavy packages. Cross-weave fiber pattern prevents tearing and provides exceptional holding power.",
            specs: { "Width": "50mm", "Length": "50m", "Reinforcement": "Fiberglass cross-weave", "Adhesive": "Acrylic-based", "Breaking Strength": "120 N/25mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-colored-red",
            name: "SBECO Colored Carton Tape Red 48mm",
            sku: "SBL-TAPE-CST-RED-48",
            brand: "SBECO",
            tagline: "Red carton tape for color-coded packaging and identification",
            badge: "Color-Coded",
            description: "Bright red carton sealing tape for color-coded sorting, priority shipments, or hazard marking on boxes.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Red", "Adhesive": "Acrylic-based", "Visibility": "High contrast" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-colored-blue", "carton-sealing-tape-colored-yellow"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-colored-blue",
            name: "SBECO Colored Carton Tape Blue 48mm",
            sku: "SBL-TAPE-CST-BLU-48",
            brand: "SBECO",
            tagline: "Blue carton tape for department-coded packaging",
            badge: "Color-Coded",
            description: "Blue carton sealing tape ideal for department coding, batch identification, and organized warehouse operations.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Blue", "Adhesive": "Acrylic-based", "Visibility": "High contrast" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-colored-red", "carton-sealing-tape-colored-yellow"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "carton-sealing-tape-colored-yellow",
            name: "SBECO Colored Carton Tape Yellow 48mm",
            sku: "SBL-TAPE-CST-YLW-48",
            brand: "SBECO",
            tagline: "Yellow carton tape for caution marking and identification",
            badge: "Color-Coded",
            description: "Yellow carton sealing tape for caution labeling, quality control marking, and visible parcel identification.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Yellow", "Adhesive": "Acrylic-based", "Visibility": "High contrast" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-colored-red", "carton-sealing-tape-colored-blue"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 2: BOPP Packaging Tapes (10 products) ───
      {
        id: "bopp-packaging-tapes",
        name: "BOPP Packaging Tapes",
        products: [
          {
            id: "clear-packaging-tape",
            name: "SBECO Clear Packaging Tape 48mm",
            sku: "SBL-TAPE-CLR-48",
            brand: "SBECO",
            tagline: "Transparent packaging tape for professional and light-duty sealing",
            badge: "Essential",
            description: "Versatile clear packaging tape ideal for light to medium-duty sealing applications. The transparent design allows contents visibility while providing reliable adhesion.",
            specs: { "Width": "48mm", "Length": "66m", "Adhesive": "Acrylic-based", "Type": "Clear", "Temperature Range": "-10°C to 60°C" },
            imageUrl: "/images/clear_tape.png",
            consumables: [{ name: "Tape Dispenser Gun", sku: "SBL-DISP-GUN", icon: "tool" }],
            similar: ["carton-sealing-tape", "kraft-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "bopp-tape-clear-100m",
            name: "SBECO BOPP Clear Tape 48mm × 100m",
            sku: "SBL-TAPE-BOPP-CLR-100",
            brand: "SBECO",
            tagline: "Extended-length BOPP clear tape for high-volume packaging",
            badge: "Value Pack",
            description: "Extended 100-meter BOPP clear packaging tape for cost-effective high-volume sealing. Crystal-clear finish with excellent adhesion.",
            specs: { "Width": "48mm", "Length": "100m", "Material": "BOPP", "Adhesive": "Acrylic", "Thickness": "0.045mm" },
            imageUrl: "/images/clear_tape.png",
            similar: ["clear-packaging-tape"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "bopp-tape-transparent-24mm",
            name: "SBECO BOPP Transparent Tape 24mm",
            sku: "SBL-TAPE-BOPP-T24",
            brand: "SBECO",
            tagline: "Narrow transparent BOPP tape for office and retail",
            badge: "Essential",
            description: "Narrow 24mm transparent BOPP tape ideal for small box sealing, gift wrapping, and office use.",
            specs: { "Width": "24mm", "Length": "66m", "Material": "BOPP", "Adhesive": "Acrylic", "Type": "Transparent" },
            imageUrl: "/images/clear_tape.png",
            similar: ["clear-packaging-tape"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "bopp-tape-super-clear",
            name: "SBECO Super Clear BOPP Tape 48mm",
            sku: "SBL-TAPE-BOPP-SC-48",
            brand: "SBECO",
            tagline: "Ultra-transparent tape for premium presentation packaging",
            badge: "Premium",
            description: "Ultra-clear BOPP tape with optical clarity for premium retail packaging where appearance matters most.",
            specs: { "Width": "48mm", "Length": "66m", "Clarity": "Ultra-clear (>95% transparency)", "Adhesive": "Synthetic rubber", "Material": "BOPP" },
            imageUrl: "/images/clear_tape.png",
            similar: ["clear-packaging-tape"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "bopp-tape-heavy-duty",
            name: "SBECO Heavy Duty BOPP Tape 50mm",
            sku: "SBL-TAPE-BOPP-HD-50",
            brand: "SBECO",
            tagline: "Thick BOPP tape for demanding packaging environments",
            badge: "Heavy Duty",
            description: "Extra-thick BOPP packaging tape designed for heavy packages, rough handling, and extreme warehouse conditions.",
            specs: { "Width": "50mm", "Length": "50m", "Thickness": "0.065mm", "Adhesive": "Hot-melt", "Breaking Strength": "35 N/25mm" },
            imageUrl: "/images/clear_tape.png",
            similar: ["carton-sealing-tape"],
            dateAdded: "2026-06-12",
            isBestSeller: true
          },
          {
            id: "bopp-tape-tan",
            name: "SBECO BOPP Tan Tape 48mm",
            sku: "SBL-TAPE-BOPP-TAN-48",
            brand: "SBECO",
            tagline: "Tan/buff BOPP tape for standard carton sealing",
            badge: "Essential",
            description: "Standard tan-colored BOPP tape for everyday packaging operations. Blends naturally with corrugated boxes.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Tan/Buff", "Material": "BOPP", "Adhesive": "Acrylic" },
            imageUrl: "/images/clear_tape.png",
            similar: ["carton-sealing-tape-brown"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "bopp-tape-white",
            name: "SBECO BOPP White Tape 48mm",
            sku: "SBL-TAPE-BOPP-WHT-48",
            brand: "SBECO",
            tagline: "White BOPP tape for clean-room and pharma packaging",
            badge: "Specialty",
            description: "White-coated BOPP tape for pharmaceutical, food, and clean-room packaging where a clean appearance is required.",
            specs: { "Width": "48mm", "Length": "50m", "Color": "White", "Material": "BOPP", "Adhesive": "Acrylic" },
            imageUrl: "/images/clear_tape.png",
            similar: ["bopp-tape-tan"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "bopp-tape-green",
            name: "SBECO BOPP Green Tape 48mm",
            sku: "SBL-TAPE-BOPP-GRN-48",
            brand: "SBECO",
            tagline: "Green BOPP tape for eco-batch and green initiative labeling",
            badge: "Eco Friendly",
            description: "Green-colored BOPP tape for eco-friendly batch identification and environmental sustainability programs.",
            specs: { "Width": "48mm", "Length": "66m", "Color": "Green", "Material": "BOPP", "Adhesive": "Acrylic" },
            imageUrl: "/images/clear_tape.png",
            similar: ["bopp-tape-white"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "bopp-tape-freezer-grade",
            name: "SBECO Freezer-Grade BOPP Tape 48mm",
            sku: "SBL-TAPE-BOPP-FRZ-48",
            brand: "SBECO",
            tagline: "Cold-storage BOPP tape rated for freezer environments",
            badge: "Specialty",
            description: "Freezer-grade BOPP tape engineered for cold storage and frozen food packaging. Maintains adhesion down to -40°C.",
            specs: { "Width": "48mm", "Length": "50m", "Temperature Range": "-40°C to 60°C", "Adhesive": "Synthetic rubber", "Material": "BOPP" },
            imageUrl: "/images/clear_tape.png",
            similar: ["carton-sealing-tape-hotmelt"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
          {
            id: "bopp-tape-economy",
            name: "SBECO Economy BOPP Tape 48mm (6-Pack)",
            sku: "SBL-TAPE-BOPP-ECO-6",
            brand: "SBECO",
            tagline: "Budget-friendly 6-pack of BOPP tape for everyday sealing",
            badge: "Value Pack",
            description: "Economical 6-roll pack of BOPP packaging tape for small businesses and home use. Reliable adhesion at an affordable price.",
            specs: { "Width": "48mm", "Length": "50m per roll", "Qty": "6 rolls/pack", "Material": "BOPP", "Adhesive": "Acrylic" },
            imageUrl: "/images/clear_tape.png",
            similar: ["clear-packaging-tape"],
            dateAdded: "2026-06-25",
            isBestSeller: true
          },
        ],
      },

      // ─── SUBCATEGORY 3: Kraft & Paper Tapes (10 products) ───
      {
        id: "kraft-paper-tapes",
        name: "Kraft & Paper Tapes",
        products: [
          {
            id: "kraft-tape",
            name: "SBECO Kraft Paper Tape 50mm",
            sku: "SBL-TAPE-KFT-50",
            brand: "SBECO",
            tagline: "Eco-friendly kraft paper tape for sustainable packaging solutions",
            badge: "Eco Friendly",
            description: "Environment-friendly kraft paper tape with water-activated adhesive. Ideal for eco-conscious packaging, the tape activates on contact with moisture for strong, permanent bonding.",
            specs: { "Width": "50mm", "Length": "50m", "Material": "Kraft Paper", "Adhesive": "Water-activated", "Recyclable": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            consumables: [{ name: "Water Spray Bottle", sku: "SBL-SPRAY-BTL", icon: "tool" }],
            similar: ["carton-sealing-tape", "clear-packaging-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "kraft-tape-75mm",
            name: "SBECO Kraft Paper Tape 75mm",
            sku: "SBL-TAPE-KFT-75",
            brand: "SBECO",
            tagline: "Wide kraft paper tape for large carton sealing",
            badge: "Eco Friendly",
            description: "Wide 75mm kraft paper tape for sealing large boxes. Fully recyclable with cardboard packaging.",
            specs: { "Width": "75mm", "Length": "50m", "Material": "Kraft Paper", "Adhesive": "Water-activated", "Recyclable": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "kraft-tape-self-adhesive",
            name: "SBECO Self-Adhesive Kraft Tape 50mm",
            sku: "SBL-TAPE-KFT-SA-50",
            brand: "SBECO",
            tagline: "Peel-and-stick kraft tape — no water needed",
            badge: "New",
            description: "Self-adhesive kraft paper tape that requires no water activation. Peel-and-stick convenience with the eco-friendly look of kraft paper.",
            specs: { "Width": "50mm", "Length": "50m", "Material": "Kraft Paper", "Adhesive": "Rubber-based (self-adhesive)", "Recyclable": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "kraft-tape-reinforced",
            name: "SBECO Reinforced Kraft Tape 50mm",
            sku: "SBL-TAPE-KFT-RF-50",
            brand: "SBECO",
            tagline: "Fiber-reinforced kraft tape for heavy parcel sealing",
            badge: "Heavy Duty",
            description: "Fiber-reinforced water-activated kraft tape for maximum sealing strength. Cross-laminated fibers prevent tearing.",
            specs: { "Width": "50mm", "Length": "50m", "Reinforcement": "Cross-laminated fiber", "Adhesive": "Water-activated", "Breaking Strength": "100 N/25mm" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-10",
            isBestSeller: true
          },
          {
            id: "kraft-tape-printed-fragile",
            name: "SBECO Printed Kraft Tape — FRAGILE",
            sku: "SBL-TAPE-KFT-FRAG",
            brand: "SBECO",
            tagline: "Pre-printed FRAGILE kraft tape for delicate shipments",
            badge: "Specialty",
            description: "Kraft paper tape pre-printed with FRAGILE warning. Eco-friendly and highly visible for careful handling.",
            specs: { "Width": "50mm", "Length": "50m", "Print": "FRAGILE (red text)", "Material": "Kraft Paper", "Recyclable": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "gummed-paper-tape-60mm",
            name: "SBECO Gummed Paper Tape 60mm",
            sku: "SBL-TAPE-GPT-60",
            brand: "SBECO",
            tagline: "Traditional gummed tape for secure carton closure",
            badge: "Classic",
            description: "Traditional gummed paper tape that bonds permanently when moistened. Creates a tamper-evident seal on corrugated cartons.",
            specs: { "Width": "60mm", "Length": "200m", "Material": "Paper", "Adhesive": "Gummed (starch-based)", "Tamper Evident": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "gummed-paper-tape-reinforced",
            name: "SBECO Reinforced Gummed Tape 70mm",
            sku: "SBL-TAPE-GPT-RF-70",
            brand: "SBECO",
            tagline: "Fiber-reinforced gummed tape for maximum holding power",
            badge: "Heavy Duty",
            description: "Reinforced gummed paper tape with embedded fibers for maximum strength on heavy cartons.",
            specs: { "Width": "70mm", "Length": "150m", "Reinforcement": "Fiberglass threads", "Adhesive": "Gummed (starch-based)", "Breaking Strength": "180 N/25mm" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["gummed-paper-tape-60mm"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "flatback-paper-tape",
            name: "SBECO Flatback Paper Tape 50mm",
            sku: "SBL-TAPE-FB-50",
            brand: "SBECO",
            tagline: "Smooth flatback tape for labeling, tabbing, and splicing",
            badge: "Versatile",
            description: "Smooth, flat kraft paper tape ideal for labeling surfaces, splicing rolls, and tabbing applications. Writes on easily with pen or marker.",
            specs: { "Width": "50mm", "Length": "55m", "Material": "Flatback paper", "Adhesive": "Rubber-based", "Writable": "Yes" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape-self-adhesive"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "paper-tape-biodegradable",
            name: "SBECO Biodegradable Paper Tape 48mm",
            sku: "SBL-TAPE-BIO-48",
            brand: "SBECO",
            tagline: "100% biodegradable tape for zero-waste packaging",
            badge: "Eco Friendly",
            description: "Fully biodegradable and compostable paper tape for businesses committed to zero-waste packaging solutions.",
            specs: { "Width": "48mm", "Length": "50m", "Material": "FSC-certified paper", "Adhesive": "Natural rubber", "Compostable": "Yes (EN 13432)" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
          {
            id: "kraft-tape-custom-print",
            name: "SBECO Custom Printed Kraft Tape 50mm",
            sku: "SBL-TAPE-KFT-CUST",
            brand: "SBECO",
            tagline: "Custom-printed kraft tape with your brand logo",
            badge: "Custom",
            description: "Personalizable kraft tape with up to 3-color logo printing. Minimum order 72 rolls. Elevate your brand while staying eco-friendly.",
            specs: { "Width": "50mm", "Length": "50m", "Print Colors": "Up to 3", "MOQ": "72 rolls", "Lead Time": "10-15 business days" },
            imageUrl: "/images/kraft_tape.png",
            similar: ["kraft-tape"],
            dateAdded: "2026-06-25",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 4: Masking Tapes (10 products) ───
      {
        id: "masking-tapes",
        name: "Masking Tapes",
        products: [
          {
            id: "masking-tape-24mm",
            name: "SBECO General Purpose Masking Tape 24mm",
            sku: "SBL-TAPE-MSK-24",
            brand: "SBECO",
            tagline: "All-purpose masking tape for painting and surface protection",
            badge: "Popular",
            description: "Crepe paper masking tape for general-purpose masking during painting, bundling, and labeling. Clean removal within 24 hours.",
            specs: { "Width": "24mm", "Length": "50m", "Material": "Crepe paper", "Adhesive": "Rubber-based", "Clean Removal": "Up to 24 hours" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-48mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "masking-tape-48mm",
            name: "SBECO General Purpose Masking Tape 48mm",
            sku: "SBL-TAPE-MSK-48",
            brand: "SBECO",
            tagline: "Wide masking tape for broad surface masking",
            badge: "Essential",
            description: "Wide 48mm masking tape for covering larger areas during painting, spraying, and finishing work.",
            specs: { "Width": "48mm", "Length": "50m", "Material": "Crepe paper", "Adhesive": "Rubber-based", "Clean Removal": "Up to 24 hours" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-24mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "masking-tape-high-temp",
            name: "SBECO High Temperature Masking Tape 25mm",
            sku: "SBL-TAPE-MSK-HT-25",
            brand: "SBECO",
            tagline: "Heat-resistant masking tape for automotive and industrial painting",
            badge: "Professional",
            description: "High-temperature masking tape that withstands up to 150°C for 1 hour. Perfect for automotive bake-oven paint finishing.",
            specs: { "Width": "25mm", "Length": "55m", "Temperature Rating": "Up to 150°C / 1 hour", "Material": "Heat-stable crepe", "Adhesive": "Silicone-based" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-24mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "masking-tape-fine-line",
            name: "SBECO Fine Line Masking Tape 6mm",
            sku: "SBL-TAPE-MSK-FL-6",
            brand: "SBECO",
            tagline: "Ultra-thin masking tape for precision paint lines and detailing",
            badge: "Precision",
            description: "6mm fine line masking tape for pin-striping, custom paint jobs, and precision detailing work on curved surfaces.",
            specs: { "Width": "6mm", "Length": "55m", "Material": "PVC", "Adhesive": "Acrylic", "Conformability": "Excellent (follows curves)" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-24mm"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "masking-tape-uv-resistant",
            name: "SBECO UV-Resistant Masking Tape 36mm",
            sku: "SBL-TAPE-MSK-UV-36",
            brand: "SBECO",
            tagline: "Outdoor masking tape with 14-day UV resistance",
            badge: "Outdoor",
            description: "UV-resistant masking tape for outdoor painting projects. Clean removal up to 14 days even in direct sunlight.",
            specs: { "Width": "36mm", "Length": "55m", "UV Resistance": "14 days", "Material": "Washi paper", "Adhesive": "Acrylic" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-24mm"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "masking-tape-painters-blue",
            name: "SBECO Blue Painter's Tape 36mm",
            sku: "SBL-TAPE-MSK-BLU-36",
            brand: "SBECO",
            tagline: "Premium blue painter's tape for sharp paint lines",
            badge: "Professional",
            description: "Blue painter's masking tape with Edge-Lock paint technology for razor-sharp paint lines. Removes cleanly for up to 14 days.",
            specs: { "Width": "36mm", "Length": "55m", "Color": "Blue", "Clean Removal": "Up to 14 days", "Edge Technology": "Edge-Lock™" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-uv-resistant"],
            dateAdded: "2026-06-12",
            isBestSeller: true
          },
          {
            id: "masking-tape-green-body-shop",
            name: "SBECO Green Body-Shop Masking Tape 48mm",
            sku: "SBL-TAPE-MSK-GRN-48",
            brand: "SBECO",
            tagline: "Automotive-grade green masking tape for body shop painting",
            badge: "Automotive",
            description: "Premium green automotive masking tape for body shop spray painting. High-temperature resistant with no adhesive transfer.",
            specs: { "Width": "48mm", "Length": "55m", "Temperature Rating": "Up to 110°C / 30 min", "Color": "Green", "Adhesive Transfer": "None" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-high-temp"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "masking-tape-delicate-surface",
            name: "SBECO Delicate Surface Masking Tape 24mm",
            sku: "SBL-TAPE-MSK-DEL-24",
            brand: "SBECO",
            tagline: "Low-tack tape for freshly painted walls and delicate surfaces",
            badge: "Gentle",
            description: "Ultra-low-tack masking tape for freshly painted walls, wallpaper, and other delicate surfaces. Removes without damage.",
            specs: { "Width": "24mm", "Length": "50m", "Adhesion Level": "Ultra-low tack", "Material": "Washi paper", "Surface Safe": "Wallpaper, fresh paint, lacquer" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-painters-blue"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "masking-tape-industrial-72mm",
            name: "SBECO Industrial Masking Tape 72mm",
            sku: "SBL-TAPE-MSK-IND-72",
            brand: "SBECO",
            tagline: "Extra-wide masking tape for large-scale industrial masking",
            badge: "Industrial",
            description: "72mm wide industrial masking tape for masking large areas on machinery, vehicles, and structural components.",
            specs: { "Width": "72mm", "Length": "55m", "Material": "Crepe paper", "Adhesive": "Rubber-based", "Conformability": "Good" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-48mm"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "masking-tape-washi",
            name: "SBECO Washi Masking Tape 30mm",
            sku: "SBL-TAPE-MSK-WASHI-30",
            brand: "SBECO",
            tagline: "Premium Japanese washi tape for flawless paint edges",
            badge: "Premium",
            description: "Thin, conformable washi masking tape for the smoothest paint lines. Highly flexible and tears easily by hand.",
            specs: { "Width": "30mm", "Length": "50m", "Material": "Japanese washi paper", "Adhesive": "Acrylic", "Hand Tearable": "Yes" },
            imageUrl: "/images/carton_tape.png",
            similar: ["masking-tape-painters-blue"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 5: Duct & Cloth Tapes (10 products) ───
      {
        id: "duct-cloth-tapes",
        name: "Duct & Cloth Tapes",
        products: [
          {
            id: "duct-tape-silver-50mm",
            name: "SBECO Silver Duct Tape 50mm",
            sku: "SBL-TAPE-DCT-SLV-50",
            brand: "SBECO",
            tagline: "All-purpose silver duct tape for repairs, sealing, and bundling",
            badge: "Popular",
            description: "Classic silver duct tape with polyethylene-coated cloth backing and aggressive rubber adhesive. Ideal for HVAC sealing, general repairs, and bundling.",
            specs: { "Width": "50mm", "Length": "50m", "Material": "PE-coated cloth", "Adhesive": "Rubber-based", "Tensile Strength": "35 N/25mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-black-50mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "duct-tape-black-50mm",
            name: "SBECO Black Duct Tape 50mm",
            sku: "SBL-TAPE-DCT-BLK-50",
            brand: "SBECO",
            tagline: "Professional black duct tape for discreet repairs and stage use",
            badge: "Professional",
            description: "Black duct tape for stage production, audio/visual cable management, and discreet repairs. Matte finish reduces glare.",
            specs: { "Width": "50mm", "Length": "50m", "Color": "Black (matte)", "Material": "PE-coated cloth", "Adhesive": "Rubber-based" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "duct-tape-white-50mm",
            name: "SBECO White Duct Tape 50mm",
            sku: "SBL-TAPE-DCT-WHT-50",
            brand: "SBECO",
            tagline: "White duct tape for clean environments and color coding",
            badge: "Specialty",
            description: "White duct tape for clean-room labeling, color-coded duct marking, and visible repairs on light surfaces.",
            specs: { "Width": "50mm", "Length": "50m", "Color": "White", "Material": "PE-coated cloth", "Adhesive": "Rubber-based" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "duct-tape-red-50mm",
            name: "SBECO Red Duct Tape 50mm",
            sku: "SBL-TAPE-DCT-RED-50",
            brand: "SBECO",
            tagline: "Red duct tape for hazard marking and color-coded identification",
            badge: "Color-Coded",
            description: "Bright red duct tape for danger zone marking, color-coded piping identification, and theatrical use.",
            specs: { "Width": "50mm", "Length": "25m", "Color": "Red", "Material": "PE-coated cloth", "Adhesive": "Rubber-based" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "cloth-tape-premium-48mm",
            name: "SBECO Premium Cloth Tape 48mm",
            sku: "SBL-TAPE-CLT-PRM-48",
            brand: "SBECO",
            tagline: "High-adhesion cloth tape for heavy-duty bundling and repair",
            badge: "Heavy Duty",
            description: "Premium cotton/polyester cloth tape with superior holding power. Conforms to irregular surfaces and resists moisture.",
            specs: { "Width": "48mm", "Length": "25m", "Material": "Cotton-polyester mesh", "Adhesive": "Hot-melt rubber", "Water Resistant": "Yes" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "gaffer-tape-50mm",
            name: "SBECO Gaffer Tape 50mm",
            sku: "SBL-TAPE-GAF-50",
            brand: "SBECO",
            tagline: "Professional gaffer tape for stage, film, and event production",
            badge: "Professional",
            description: "Matte-finish gaffer tape that leaves no residue. Essential for cable management on stage, film sets, and events.",
            specs: { "Width": "50mm", "Length": "50m", "Finish": "Matte (non-reflective)", "Residue-Free": "Yes", "Hand Tearable": "Yes" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-black-50mm"],
            dateAdded: "2026-06-12",
            isBestSeller: true
          },
          {
            id: "nuclear-grade-duct-tape",
            name: "SBECO Nuclear-Grade Duct Tape 50mm",
            sku: "SBL-TAPE-DCT-NUC-50",
            brand: "SBECO",
            tagline: "Military-spec duct tape for extreme environments",
            badge: "Extreme",
            description: "Mil-spec nuclear-grade duct tape tested to withstand extreme temperature, radiation, and chemical exposure.",
            specs: { "Width": "50mm", "Length": "55m", "Temperature Range": "-34°C to 149°C", "Standard": "MIL-DTL-5486", "Adhesive": "Synthetic rubber" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "cloth-tape-tearable-25mm",
            name: "SBECO Tearable Cloth Tape 25mm",
            sku: "SBL-TAPE-CLT-TR-25",
            brand: "SBECO",
            tagline: "Easy-tear cloth tape for quick wrapping and repair",
            badge: "Essential",
            description: "Easy hand-tearable cloth tape for quick wrapping, binding, and temporary repairs. No scissors needed.",
            specs: { "Width": "25mm", "Length": "25m", "Material": "Cotton cloth", "Hand Tearable": "Yes", "Adhesive": "Rubber-based" },
            imageUrl: "/images/carton_tape.png",
            similar: ["cloth-tape-premium-48mm"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "hvac-duct-tape-aluminum",
            name: "SBECO Aluminum HVAC Duct Tape 50mm",
            sku: "SBL-TAPE-HVAC-AL-50",
            brand: "SBECO",
            tagline: "Aluminum foil HVAC tape for ductwork sealing",
            badge: "HVAC",
            description: "Aluminum foil duct tape for sealing HVAC ductwork joints and seams. Heat-resistant and airtight.",
            specs: { "Width": "50mm", "Length": "45m", "Material": "Aluminum foil", "Temperature Rating": "Up to 150°C", "Adhesive": "Acrylic" },
            imageUrl: "/images/carton_tape.png",
            similar: ["duct-tape-silver-50mm"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "cloth-tape-carpet-binding",
            name: "SBECO Carpet Binding Cloth Tape 50mm",
            sku: "SBL-TAPE-CLT-CPT-50",
            brand: "SBECO",
            tagline: "Double-sided cloth tape for carpet laying and binding",
            badge: "Specialty",
            description: "Heavy-duty double-sided cloth tape for carpet binding, mat laying, and temporary floor covering installation.",
            specs: { "Width": "50mm", "Length": "25m", "Sides": "Double-sided", "Material": "Cloth mesh", "Adhesive": "Aggressive rubber" },
            imageUrl: "/images/carton_tape.png",
            similar: ["cloth-tape-premium-48mm"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 6: Double-Sided Tapes (10 products) ───
      {
        id: "double-sided-tapes",
        name: "Double-Sided Tapes",
        products: [
          {
            id: "ds-tape-tissue-24mm",
            name: "SBECO Double-Sided Tissue Tape 24mm",
            sku: "SBL-TAPE-DS-TIS-24",
            brand: "SBECO",
            tagline: "Thin tissue-backed double-sided tape for mounting and bonding",
            badge: "Popular",
            description: "Thin tissue carrier double-sided tape for lightweight mounting, laminating, and bonding applications.",
            specs: { "Width": "24mm", "Length": "50m", "Carrier": "Tissue", "Adhesive": "Acrylic (both sides)", "Thickness": "0.1mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-tissue-48mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "ds-tape-tissue-48mm",
            name: "SBECO Double-Sided Tissue Tape 48mm",
            sku: "SBL-TAPE-DS-TIS-48",
            brand: "SBECO",
            tagline: "Wide double-sided tissue tape for large bonding areas",
            badge: "Essential",
            description: "Wide double-sided tissue tape for bonding large surface areas. Used in printing, display assembly, and lamination.",
            specs: { "Width": "48mm", "Length": "50m", "Carrier": "Tissue", "Adhesive": "Acrylic", "Thickness": "0.1mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-tissue-24mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "ds-tape-foam-12mm",
            name: "SBECO Double-Sided Foam Tape 12mm",
            sku: "SBL-TAPE-DS-FM-12",
            brand: "SBECO",
            tagline: "Foam-backed mounting tape for signage and panels",
            badge: "Versatile",
            description: "PE foam carrier double-sided tape for mounting signs, nameplates, mirrors, and lightweight panels.",
            specs: { "Width": "12mm", "Length": "10m", "Carrier": "PE Foam (1mm)", "Adhesive": "Acrylic", "Holding Power": "Up to 1 kg/m" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-foam-24mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "ds-tape-foam-24mm",
            name: "SBECO Double-Sided Foam Tape 24mm",
            sku: "SBL-TAPE-DS-FM-24",
            brand: "SBECO",
            tagline: "Wide foam mounting tape for heavier mounting applications",
            badge: "Heavy Duty",
            description: "24mm wide PE foam double-sided tape for heavy mounting applications. Fills gaps and conforms to uneven surfaces.",
            specs: { "Width": "24mm", "Length": "10m", "Carrier": "PE Foam (1.5mm)", "Adhesive": "Acrylic", "Holding Power": "Up to 2 kg/m" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-foam-12mm"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "ds-tape-vhb",
            name: "SBECO VHB Structural Bonding Tape 19mm",
            sku: "SBL-TAPE-DS-VHB-19",
            brand: "SBECO",
            tagline: "Very High Bond tape — replaces screws, rivets, and welding",
            badge: "Premium",
            description: "Very High Bond (VHB) acrylic foam tape for permanent structural bonding. Replaces mechanical fasteners on metal, glass, and composite surfaces.",
            specs: { "Width": "19mm", "Length": "5m", "Carrier": "Acrylic foam (1.1mm)", "Bond Strength": "Structural (replaces fasteners)", "Temperature Range": "-40°C to 90°C" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-foam-24mm"],
            dateAdded: "2026-06-10",
            isBestSeller: true
          },
          {
            id: "ds-tape-clear-gel",
            name: "SBECO Clear Gel Double-Sided Tape 25mm",
            sku: "SBL-TAPE-DS-GEL-25",
            brand: "SBECO",
            tagline: "Transparent gel tape for invisible bonding on glass and acrylic",
            badge: "New",
            description: "Ultra-clear gel-based double-sided tape for invisible bonding on glass, acrylic, and transparent materials.",
            specs: { "Width": "25mm", "Length": "5m", "Material": "Clear gel", "Adhesive": "Modified acrylic", "Transparency": ">99%" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-vhb"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "ds-tape-removable",
            name: "SBECO Removable Double-Sided Tape 19mm",
            sku: "SBL-TAPE-DS-RMV-19",
            brand: "SBECO",
            tagline: "Repositionable double-sided tape for temporary mounting",
            badge: "Gentle",
            description: "Low-tack removable double-sided tape for temporary mounting, posters, and repositionable displays. No residue on removal.",
            specs: { "Width": "19mm", "Length": "25m", "Type": "Removable/Repositionable", "Residue-Free": "Yes", "Adhesive": "Modified acrylic" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-tissue-24mm"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "ds-tape-carpet",
            name: "SBECO Double-Sided Carpet Tape 50mm",
            sku: "SBL-TAPE-DS-CPT-50",
            brand: "SBECO",
            tagline: "Heavy-duty carpet tape for permanent mat and rug installation",
            badge: "Heavy Duty",
            description: "Industrial-strength double-sided tape designed specifically for carpet and rug installation on hard floors.",
            specs: { "Width": "50mm", "Length": "25m", "Carrier": "Cloth mesh", "Adhesive": "Aggressive rubber", "Surface": "Hard floors & carpet" },
            imageUrl: "/images/carton_tape.png",
            similar: ["cloth-tape-carpet-binding"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "ds-tape-transfer",
            name: "SBECO Transfer Tape 12mm",
            sku: "SBL-TAPE-DS-TRF-12",
            brand: "SBECO",
            tagline: "Carrier-less adhesive transfer tape for thin bonding",
            badge: "Precision",
            description: "Pure adhesive transfer tape with no carrier. Ultra-thin bonding layer for splicing, envelope sealing, and nameplate attachment.",
            specs: { "Width": "12mm", "Length": "55m", "Type": "Transfer (no carrier)", "Adhesive": "Acrylic", "Thickness": "0.05mm" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-tissue-24mm"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "ds-tape-high-temp",
            name: "SBECO High-Temp Double-Sided Tape 25mm",
            sku: "SBL-TAPE-DS-HT-25",
            brand: "SBECO",
            tagline: "Heat-resistant double-sided tape for automotive and electronics",
            badge: "Specialty",
            description: "High-temperature double-sided tape rated for use near engines, electronics, and heat-emitting components.",
            specs: { "Width": "25mm", "Length": "10m", "Temperature Rating": "Up to 200°C", "Carrier": "Polyimide", "Adhesive": "Silicone" },
            imageUrl: "/images/carton_tape.png",
            similar: ["ds-tape-vhb"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 7: Electrical & Insulation Tapes (10 products) ───
      {
        id: "electrical-insulation-tapes",
        name: "Electrical & Insulation Tapes",
        products: [
          {
            id: "electrical-tape-black-19mm",
            name: "SBECO Electrical Tape Black 19mm",
            sku: "SBL-TAPE-ELC-BLK-19",
            brand: "SBECO",
            tagline: "Professional PVC electrical insulation tape",
            badge: "Popular",
            description: "Standard PVC electrical insulation tape for wire splicing, harness wrapping, and cable repair. UL-listed and CSA-approved.",
            specs: { "Width": "19mm", "Length": "20m", "Material": "PVC", "Voltage Rating": "600V", "Temperature Range": "-18°C to 80°C" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-color-pack"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "electrical-tape-color-pack",
            name: "SBECO Electrical Tape Color Pack (10 colors)",
            sku: "SBL-TAPE-ELC-CLR-10",
            brand: "SBECO",
            tagline: "10-color pack for phase identification and circuit marking",
            badge: "Value Pack",
            description: "Pack of 10 colors of PVC electrical tape for phase identification, circuit labeling, and color-coded wiring per NEC standards.",
            specs: { "Width": "19mm", "Length": "10m per roll", "Qty": "10 rolls/pack", "Colors": "Black, White, Red, Blue, Green, Yellow, Orange, Brown, Gray, Violet", "Voltage Rating": "600V" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-black-19mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "electrical-tape-rubber-splicing",
            name: "SBECO Rubber Splicing Tape 19mm",
            sku: "SBL-TAPE-ELC-RSP-19",
            brand: "SBECO",
            tagline: "Self-fusing rubber tape for watertight cable splices",
            badge: "Professional",
            description: "Self-amalgamating rubber splicing tape that fuses to itself for moisture-proof, dielectric cable splices and repairs.",
            specs: { "Width": "19mm", "Length": "10m", "Material": "EPR (ethylene propylene rubber)", "Type": "Self-fusing", "Voltage Rating": "35kV" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-black-19mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "electrical-tape-high-voltage",
            name: "SBECO High Voltage Insulation Tape 25mm",
            sku: "SBL-TAPE-ELC-HV-25",
            brand: "SBECO",
            tagline: "69kV-rated tape for high-voltage cable insulation",
            badge: "Heavy Duty",
            description: "High-voltage mastic insulation tape rated for cable terminations and splices up to 69kV.",
            specs: { "Width": "25mm", "Length": "3m", "Voltage Rating": "69kV", "Material": "EPR with mastic", "Conformability": "Excellent" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-rubber-splicing"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "electrical-tape-kapton",
            name: "SBECO Kapton Polyimide Tape 12mm",
            sku: "SBL-TAPE-ELC-KPT-12",
            brand: "SBECO",
            tagline: "Kapton tape for electronics soldering and PCB masking",
            badge: "Precision",
            description: "High-temperature polyimide (Kapton) tape for electronics rework, PCB masking, and 3D printer bed adhesion.",
            specs: { "Width": "12mm", "Length": "30m", "Material": "Polyimide film", "Temperature Rating": "Up to 260°C", "Adhesive": "Silicone" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-black-19mm"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "electrical-tape-glass-cloth",
            name: "SBECO Glass Cloth Electrical Tape 19mm",
            sku: "SBL-TAPE-ELC-GLS-19",
            brand: "SBECO",
            tagline: "High-temp glass cloth tape for motors and transformers",
            badge: "Industrial",
            description: "Woven glass cloth tape with silicone adhesive for wrapping motor coils, transformer windings, and high-temperature electrical insulation.",
            specs: { "Width": "19mm", "Length": "20m", "Material": "Glass cloth", "Temperature Rating": "Up to 200°C", "Adhesive": "Silicone" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-kapton"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "cable-wrap-tape-19mm",
            name: "SBECO Cable Wrap Tape 19mm",
            sku: "SBL-TAPE-CBL-WRP-19",
            brand: "SBECO",
            tagline: "Flexible harness wrap tape for automotive wiring",
            badge: "Automotive",
            description: "Non-adhesive or lightly adhesive PET fleece tape for wrapping automotive wire harnesses. Reduces rattle and abrasion.",
            specs: { "Width": "19mm", "Length": "25m", "Material": "PET fleece", "Adhesion": "Light tack", "Noise Reduction": "Excellent" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-black-19mm"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "insulation-foam-tape-50mm",
            name: "SBECO Insulation Foam Tape 50mm",
            sku: "SBL-TAPE-INS-FM-50",
            brand: "SBECO",
            tagline: "Closed-cell foam tape for weather sealing and insulation",
            badge: "Essential",
            description: "Closed-cell foam tape for sealing gaps around doors, windows, HVAC ducts, and pipes. Provides thermal and acoustic insulation.",
            specs: { "Width": "50mm", "Length": "10m", "Material": "Closed-cell PVC/NBR foam", "Thickness": "6mm", "R-Value": "R-2" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hvac-duct-tape-aluminum"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "friction-tape-19mm",
            name: "SBECO Friction Tape 19mm",
            sku: "SBL-TAPE-FRIC-19",
            brand: "SBECO",
            tagline: "Classic friction tape for tool handles and electrical work",
            badge: "Classic",
            description: "Traditional cotton friction tape for wrapping tool handles, splicing, and providing an anti-slip grip. No adhesive residue.",
            specs: { "Width": "19mm", "Length": "20m", "Material": "Cotton fabric", "Type": "Friction (non-sticky)", "Use": "Grip/Insulation" },
            imageUrl: "/images/carton_tape.png",
            similar: ["electrical-tape-black-19mm"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "pvc-pipe-wrap-tape",
            name: "SBECO PVC Pipe Wrap Tape 50mm",
            sku: "SBL-TAPE-PVC-PIPE-50",
            brand: "SBECO",
            tagline: "Self-adhesive PVC tape for pipe corrosion protection",
            badge: "Industrial",
            description: "PVC pipe wrapping tape for corrosion protection on underground and exposed metal pipes.",
            specs: { "Width": "50mm", "Length": "30m", "Material": "PVC", "Thickness": "0.25mm", "Application": "Pipe corrosion protection" },
            imageUrl: "/images/carton_tape.png",
            similar: ["insulation-foam-tape-50mm"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 8: Specialty Tapes (12 products) ───
      {
        id: "specialty-tapes",
        name: "Specialty Tapes",
        products: [
          {
            id: "hazard-warning-tape-48mm",
            name: "SBECO Hazard Warning Tape 48mm (Yellow/Black)",
            sku: "SBL-TAPE-HAZ-YB-48",
            brand: "SBECO",
            tagline: "Barricade tape for marking hazardous areas",
            badge: "Safety",
            description: "Highly visible yellow and black striped hazard warning tape for marking dangerous zones, trip hazards, and restricted areas.",
            specs: { "Width": "48mm", "Length": "33m", "Pattern": "Yellow/Black diagonal stripes", "Material": "PVC", "Self-Adhesive": "Yes" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hazard-warning-tape-red-white"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "hazard-warning-tape-red-white",
            name: "SBECO Hazard Warning Tape 48mm (Red/White)",
            sku: "SBL-TAPE-HAZ-RW-48",
            brand: "SBECO",
            tagline: "Red/white barricade tape for access restriction zones",
            badge: "Safety",
            description: "Red and white striped warning tape for fire lanes, restricted areas, and emergency access zones.",
            specs: { "Width": "48mm", "Length": "33m", "Pattern": "Red/White diagonal stripes", "Material": "PVC", "Self-Adhesive": "Yes" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hazard-warning-tape-48mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "anti-slip-tape-50mm",
            name: "SBECO Anti-Slip Safety Tape 50mm",
            sku: "SBL-TAPE-ASLP-50",
            brand: "SBECO",
            tagline: "Abrasive anti-slip tape for stairs and walkways",
            badge: "Safety",
            description: "Grit-coated anti-slip tape for stairs, ramps, and wet areas. Meets OSHA slip-resistance requirements.",
            specs: { "Width": "50mm", "Length": "18m", "Material": "Aluminum oxide grit on PET", "Adhesive": "Pressure-sensitive acrylic", "Standard": "OSHA compliant" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hazard-warning-tape-48mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "floor-marking-tape-50mm",
            name: "SBECO Floor Marking Tape 50mm (6 Colors)",
            sku: "SBL-TAPE-FLR-50",
            brand: "SBECO",
            tagline: "Durable vinyl floor marking tape for 5S and lean manufacturing",
            badge: "Industrial",
            description: "Heavy-duty vinyl floor marking tape for warehouse lanes, 5S zones, and lean manufacturing layouts. Available in 6 colors.",
            specs: { "Width": "50mm", "Length": "33m", "Material": "PVC vinyl", "Thickness": "0.25mm", "Colors Available": "Yellow, White, Red, Blue, Green, Black" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hazard-warning-tape-48mm"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "filament-tape-25mm",
            name: "SBECO Filament Tape 25mm",
            sku: "SBL-TAPE-FIL-25",
            brand: "SBECO",
            tagline: "Fiberglass-reinforced filament tape for bundling and palletizing",
            badge: "Heavy Duty",
            description: "Mono-directional fiberglass-reinforced tape for heavy bundling, unitizing, and pallet reinforcement.",
            specs: { "Width": "25mm", "Length": "55m", "Reinforcement": "Fiberglass filaments", "Tensile Strength": "300 N/25mm", "Adhesive": "Synthetic rubber" },
            imageUrl: "/images/carton_tape.png",
            similar: ["carton-sealing-tape-reinforced"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "ptfe-thread-seal-tape",
            name: "SBECO PTFE Thread Seal Tape 12mm",
            sku: "SBL-TAPE-PTFE-12",
            brand: "SBECO",
            tagline: "Plumber's PTFE tape for leak-free pipe thread sealing",
            badge: "Essential",
            description: "Standard PTFE (Teflon) thread seal tape for sealing pipe thread connections in plumbing and gas applications.",
            specs: { "Width": "12mm", "Length": "12m", "Material": "PTFE (Teflon)", "Density": "0.35 g/cm³", "Color": "White" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-12",
            isBestSeller: true
          },
          {
            id: "tamper-evident-tape",
            name: "SBECO Tamper-Evident Security Tape 50mm",
            sku: "SBL-TAPE-TAMP-50",
            brand: "SBECO",
            tagline: "Security tape that reveals VOID message on removal",
            badge: "Security",
            description: "Tamper-evident security tape that leaves a permanent VOID pattern on the surface when removed. For securing high-value shipments.",
            specs: { "Width": "50mm", "Length": "50m", "Security Feature": "VOID pattern on removal", "Material": "PET", "Color": "Red" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "reflective-tape-50mm",
            name: "SBECO Reflective Tape 50mm",
            sku: "SBL-TAPE-REF-50",
            brand: "SBECO",
            tagline: "High-visibility reflective tape for vehicles and safety marking",
            badge: "Safety",
            description: "Micro-prismatic reflective tape for vehicle conspicuity markings, safety barriers, and nighttime visibility.",
            specs: { "Width": "50mm", "Length": "45m", "Reflectivity": "Micro-prismatic (Type V)", "Color": "Yellow-Green", "Standard": "DOT-C2 compliant" },
            imageUrl: "/images/carton_tape.png",
            similar: ["hazard-warning-tape-48mm"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "stencil-tape-50mm",
            name: "SBECO Stencil/Sandblast Tape 50mm",
            sku: "SBL-TAPE-STEN-50",
            brand: "SBECO",
            tagline: "Thick vinyl tape for sandblasting and stencil masking",
            badge: "Specialty",
            description: "Extra-thick PVC tape for sandblast masking, stencil cutting, and surface etching applications.",
            specs: { "Width": "50mm", "Length": "10m", "Thickness": "0.5mm", "Material": "PVC vinyl", "Application": "Sandblast/Stencil masking" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "surface-protection-film-tape",
            name: "SBECO Surface Protection Film Tape 100mm",
            sku: "SBL-TAPE-SPF-100",
            brand: "SBECO",
            tagline: "Protective film tape for finished surfaces during transit",
            badge: "Protective",
            description: "Self-adhesive protective film tape for protecting polished metals, glass, and painted surfaces during transport and installation.",
            specs: { "Width": "100mm", "Length": "200m", "Material": "Polyethylene film", "Adhesion": "Low tack", "Application": "Surface protection" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
          {
            id: "lead-foil-tape",
            name: "SBECO Lead Foil Tape 50mm",
            sku: "SBL-TAPE-LEAD-50",
            brand: "SBECO",
            tagline: "Dense lead foil tape for radiation shielding and vibration damping",
            badge: "Specialty",
            description: "Soft lead foil tape for radiation shielding, vibration damping, and X-ray equipment masking in medical and industrial environments.",
            specs: { "Width": "50mm", "Length": "10m", "Material": "Lead foil", "Thickness": "0.3mm", "Adhesive": "Rubber-based" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-25",
            isBestSeller: false
          },
          {
            id: "magnetic-tape-25mm",
            name: "SBECO Magnetic Tape 25mm",
            sku: "SBL-TAPE-MAG-25",
            brand: "SBECO",
            tagline: "Flexible magnetic tape for displays and signage mounting",
            badge: "Versatile",
            description: "Flexible magnetic tape with self-adhesive backing for creating removable signs, displays, and closures on metallic surfaces.",
            specs: { "Width": "25mm", "Length": "10m", "Material": "Ferrite rubber", "Adhesive": "Acrylic (one side)", "Pull Force": "80 g/cm²" },
            imageUrl: "/images/carton_tape.png",
            similar: [],
            dateAdded: "2026-06-28",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 9: Printed & Custom Tapes (10 products) ───
      {
        id: "printed-custom-tapes",
        name: "Printed & Custom Tapes",
        products: [
          {
            id: "printed-tape-fragile-48mm",
            name: "SBECO Printed Tape — FRAGILE 48mm",
            sku: "SBL-TAPE-PRT-FRAG-48",
            brand: "SBECO",
            tagline: "Pre-printed FRAGILE tape for delicate shipments",
            badge: "Popular",
            description: "Pre-printed 'FRAGILE — Handle With Care' tape in red text on white background. Highly visible for delivery drivers and warehouse staff.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "FRAGILE – HANDLE WITH CARE", "Colors": "Red on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-do-not-stack"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "printed-tape-do-not-stack",
            name: "SBECO Printed Tape — DO NOT STACK 48mm",
            sku: "SBL-TAPE-PRT-DNS-48",
            brand: "SBECO",
            tagline: "Pre-printed DO NOT STACK warning tape",
            badge: "Essential",
            description: "Pre-printed 'DO NOT STACK' tape to prevent crushing damage during storage and transport.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "DO NOT STACK", "Colors": "Red on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-fragile-48mm"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "printed-tape-this-side-up",
            name: "SBECO Printed Tape — THIS SIDE UP 48mm",
            sku: "SBL-TAPE-PRT-TSU-48",
            brand: "SBECO",
            tagline: "Orientation marking tape with arrow indicators",
            badge: "Essential",
            description: "Pre-printed 'THIS SIDE UP' tape with directional arrows for proper package orientation during transit.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "THIS SIDE UP ↑", "Colors": "Blue on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-fragile-48mm"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "printed-tape-keep-dry",
            name: "SBECO Printed Tape — KEEP DRY 48mm",
            sku: "SBL-TAPE-PRT-KD-48",
            brand: "SBECO",
            tagline: "KEEP DRY warning tape for moisture-sensitive shipments",
            badge: "Essential",
            description: "Pre-printed 'KEEP DRY' tape with umbrella symbol for moisture-sensitive packages.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "KEEP DRY ☂", "Colors": "Blue on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-fragile-48mm"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "printed-tape-heavy",
            name: "SBECO Printed Tape — HEAVY 48mm",
            sku: "SBL-TAPE-PRT-HVY-48",
            brand: "SBECO",
            tagline: "HEAVY warning tape for overweight packages",
            badge: "Safety",
            description: "Pre-printed 'HEAVY' warning tape to alert handlers about package weight and require team lifting.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "HEAVY – TEAM LIFT REQUIRED", "Colors": "Black on orange", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-fragile-48mm"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "printed-tape-qc-passed",
            name: "SBECO Printed Tape — QC PASSED 48mm",
            sku: "SBL-TAPE-PRT-QC-48",
            brand: "SBECO",
            tagline: "Quality control PASSED tape for approved shipments",
            badge: "QC",
            description: "Pre-printed 'QC PASSED' tape in green for marking quality-approved cartons before dispatch.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "QC PASSED ✓", "Colors": "Green on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-qc-rejected"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "printed-tape-qc-rejected",
            name: "SBECO Printed Tape — QC REJECTED 48mm",
            sku: "SBL-TAPE-PRT-QCR-48",
            brand: "SBECO",
            tagline: "Quality control REJECTED tape for defective items",
            badge: "QC",
            description: "Pre-printed 'QC REJECTED' tape in red for marking defective or non-conforming cartons.",
            specs: { "Width": "48mm", "Length": "66m", "Print": "QC REJECTED ✗", "Colors": "Red on white", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["printed-tape-qc-passed"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "custom-printed-tape-1color",
            name: "SBECO Custom Printed Tape — 1 Color",
            sku: "SBL-TAPE-CUST-1C",
            brand: "SBECO",
            tagline: "Custom 1-color branded tape with your company logo",
            badge: "Custom",
            description: "Custom-printed BOPP tape with your logo or messaging in a single color. Strengthen brand identity on every package shipped.",
            specs: { "Width": "48mm", "Length": "66m", "Print Colors": "1 (custom)", "MOQ": "144 rolls", "Lead Time": "7-10 business days" },
            imageUrl: "/images/carton_tape.png",
            similar: ["custom-printed-tape-3color"],
            dateAdded: "2026-06-15",
            isBestSeller: true
          },
          {
            id: "custom-printed-tape-3color",
            name: "SBECO Custom Printed Tape — 3 Color",
            sku: "SBL-TAPE-CUST-3C",
            brand: "SBECO",
            tagline: "Full-color branded tape for premium brand presentation",
            badge: "Premium",
            description: "Custom-printed BOPP tape with up to 3-color logo printing for maximum brand impact on shipped parcels.",
            specs: { "Width": "48mm", "Length": "66m", "Print Colors": "Up to 3 (custom)", "MOQ": "288 rolls", "Lead Time": "10-15 business days" },
            imageUrl: "/images/carton_tape.png",
            similar: ["custom-printed-tape-1color"],
            dateAdded: "2026-06-15",
            isBestSeller: false
          },
          {
            id: "printed-tape-batch-numbered",
            name: "SBECO Batch-Numbered Tape 48mm",
            sku: "SBL-TAPE-PRT-BATCH",
            brand: "SBECO",
            tagline: "Sequential numbering tape for traceability and lot tracking",
            badge: "Specialty",
            description: "Tape with sequentially printed batch numbers for complete lot traceability in pharmaceutical, food, and high-value shipments.",
            specs: { "Width": "48mm", "Length": "50m", "Print": "Sequential numbering", "Numbering": "Customizable start/end", "Material": "BOPP" },
            imageUrl: "/images/carton_tape.png",
            similar: ["tamper-evident-tape"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
        ],
      },

      // ─── SUBCATEGORY 10: Tape Dispensers & Equipment (12 products) ───
      {
        id: "tape-dispensers-cat",
        name: "Tape Dispensers & Equipment",
        products: [
          {
            id: "tape-dispenser-gun",
            name: "SBECO Tape Dispenser Gun",
            sku: "SBL-DISP-GUN",
            brand: "SEPACK",
            tagline: "Ergonomic manual tape dispenser for 48-50mm tape rolls",
            badge: "Professional",
            description: "Heavy-duty tape dispenser gun with comfortable grip and easy one-hand operation. Cuts tape at 45-degree angle for clean, professional seals.",
            specs: { "Tape Width": "48-50mm", "Material": "Metal + Plastic", "Grip": "Ergonomic", "Cutting Angle": "45°", "Weight": "350g" },
            imageUrl: "/images/tape_gun.png",
            consumables: [
              { name: "SBECO Carton Sealing Tape 50mm", sku: "SBL-TAPE-CST-50", icon: "tape" },
              { name: "SBECO Clear Packaging Tape 48mm", sku: "SBL-TAPE-CLR-48", icon: "tape" }
            ],
            similar: ["tape-dispenser-table"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "tape-dispenser-table",
            name: "SBECO Table-Top Tape Dispenser",
            sku: "SBL-DISP-TBL",
            brand: "SEPACK",
            tagline: "Stationary tape dispenser with brake system for controlled dispensing",
            badge: "Industrial",
            description: "Professional table-mounted tape dispenser with built-in brake system for precise tape control. Ideal for high-volume packaging lines.",
            specs: { "Tape Width": "50mm", "Mount Type": "Table-top", "Brake System": "Yes", "Material": "Steel", "Production Speed": "Up to 30 boxes/min" },
            imageUrl: "/images/tape_dispenser.png",
            consumables: [
              { name: "SBECO Carton Sealing Tape 50mm", sku: "SBL-TAPE-CST-50", icon: "tape" }
            ],
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-lightweight",
            name: "SBECO Lightweight Tape Gun",
            sku: "SBL-DISP-LW",
            brand: "SEPACK",
            tagline: "Compact and lightweight dispenser for 48mm tapes",
            badge: "Essential",
            description: "Lightweight plastic tape dispenser for occasional use in small businesses and home offices. Easy to load.",
            specs: { "Tape Width": "48mm", "Material": "ABS Plastic", "Weight": "180g", "Type": "Handheld", "Blade": "Replaceable steel" },
            imageUrl: "/images/tape_gun.png",
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-03",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-side-loader",
            name: "SBECO Side-Loading Tape Dispenser",
            sku: "SBL-DISP-SL",
            brand: "SEPACK",
            tagline: "Quick-load side-entry tape gun for fast roll changes",
            badge: "Professional",
            description: "Side-loading tape dispenser allows quick tape roll changes without removing the core. Saves time in busy warehouses.",
            specs: { "Tape Width": "48-50mm", "Loading": "Side-entry quick load", "Material": "Metal frame", "Weight": "400g", "Blade": "Steel serrated" },
            imageUrl: "/images/tape_gun.png",
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-05",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-multi-roll",
            name: "SBECO Multi-Roll Tape Dispenser",
            sku: "SBL-DISP-MR",
            brand: "SEPACK",
            tagline: "Dual-roll dispenser for two tapes simultaneously",
            badge: "Specialty",
            description: "Multi-roll tape dispenser that holds two tape rolls simultaneously. Switch between clear and brown tape without reloading.",
            specs: { "Tape Width": "48-50mm each", "Rolls": "2 simultaneous", "Material": "Steel + ABS", "Weight": "600g", "Type": "Handheld" },
            imageUrl: "/images/tape_gun.png",
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-08",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-desktop-small",
            name: "SBECO Desktop Tape Dispenser (Small Rolls)",
            sku: "SBL-DISP-DESK-S",
            brand: "SEPACK",
            tagline: "Weighted desktop dispenser for 19-25mm tape rolls",
            badge: "Office",
            description: "Weighted desktop tape dispenser for office tapes. Non-slip base and clean cut blade for one-hand operation.",
            specs: { "Tape Width": "19-25mm", "Core Size": "25mm (1-inch)", "Material": "Metal + Rubber base", "Weight": "950g (weighted)", "Type": "Desktop" },
            imageUrl: "/images/tape_dispenser.png",
            similar: ["tape-dispenser-table"],
            dateAdded: "2026-06-10",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-gummed",
            name: "SBECO Gummed Tape Dispenser (WAT)",
            sku: "SBL-DISP-WAT",
            brand: "SEPACK",
            tagline: "Electric water-activated tape dispenser for kraft and gummed tapes",
            badge: "Industrial",
            description: "Electric gummed tape (WAT) dispenser that wets, measures, and cuts water-activated tape automatically. Programmable length settings.",
            specs: { "Tape Width": "Up to 75mm", "Type": "Electric WAT dispenser", "Power": "220V AC", "Programmable Lengths": "Yes (4 presets)", "Speed": "Up to 20 strips/min" },
            imageUrl: "/images/tape_dispenser.png",
            consumables: [{ name: "SBECO Gummed Paper Tape 60mm", sku: "SBL-TAPE-GPT-60", icon: "tape" }],
            similar: ["tape-dispenser-table"],
            dateAdded: "2026-06-12",
            isBestSeller: false
          },
          {
            id: "case-sealer-semi-auto",
            name: "SBECO Semi-Auto Case Sealer",
            sku: "SBL-CS-SEMI",
            brand: "SEPACK",
            tagline: "Semi-automatic case sealing machine for top and bottom sealing",
            badge: "Industrial",
            description: "Semi-automatic case sealing machine that applies tape to both top and bottom flaps simultaneously. Adjustable for various box sizes.",
            specs: { "Tape Width": "48-75mm", "Sealing": "Top + Bottom", "Speed": "Up to 20 cases/min", "Box Range": "150-500mm (W), 120-500mm (H)", "Power": "220V AC" },
            imageUrl: "/images/tape_dispenser.png",
            similar: ["case-sealer-full-auto"],
            dateAdded: "2026-06-15",
            isBestSeller: true
          },
          {
            id: "case-sealer-full-auto",
            name: "SBECO Fully Automatic Case Sealer",
            sku: "SBL-CS-AUTO",
            brand: "SEPACK",
            tagline: "Fully automatic random case sealer for production lines",
            badge: "Premium",
            description: "Fully automatic random case sealer with auto-fold and auto-size adjustment. Handles random box sizes without manual setup changes.",
            specs: { "Tape Width": "48-75mm", "Sealing": "Top + Bottom auto-fold", "Speed": "Up to 30 cases/min", "Box Range": "Random sizing", "Power": "380V 3-phase" },
            imageUrl: "/images/tape_dispenser.png",
            similar: ["case-sealer-semi-auto"],
            dateAdded: "2026-06-18",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-75mm-wide",
            name: "SBECO Wide-Format Tape Dispenser 75mm",
            sku: "SBL-DISP-WIDE",
            brand: "SEPACK",
            tagline: "Heavy-duty dispenser gun for 75mm and 100mm wide tapes",
            badge: "Heavy Duty",
            description: "Extra-wide tape dispenser designed for 75mm and 100mm wide sealing tapes. Reinforced metal frame for industrial use.",
            specs: { "Tape Width": "75-100mm", "Material": "Reinforced metal", "Weight": "550g", "Grip": "Cushioned handle", "Blade": "Heavy-duty steel" },
            imageUrl: "/images/tape_gun.png",
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-20",
            isBestSeller: false
          },
          {
            id: "tape-cutter-manual",
            name: "SBECO Manual Tape Cutter",
            sku: "SBL-TAPE-CUT-M",
            brand: "SEPACK",
            tagline: "Bench-mounted tape cutter for pre-cutting strips",
            badge: "Versatile",
            description: "Bench-mounted manual tape cutter for pre-cutting strips of packaging and masking tape. Adjustable length stop.",
            specs: { "Tape Width": "Up to 50mm", "Type": "Bench-mount", "Length Stop": "Adjustable", "Material": "Steel", "Blade": "Serrated steel" },
            imageUrl: "/images/tape_dispenser.png",
            similar: ["tape-dispenser-table"],
            dateAdded: "2026-06-22",
            isBestSeller: false
          },
          {
            id: "tape-dispenser-ergonomic-pistol",
            name: "SBECO Ergonomic Pistol-Grip Dispenser",
            sku: "SBL-DISP-PSTL",
            brand: "SEPACK",
            tagline: "Pistol-grip tape gun with comfort spring for high-volume sealing",
            badge: "Professional",
            description: "Ergonomic pistol-grip tape dispenser with tension-release spring that reduces hand fatigue during extended sealing sessions.",
            specs: { "Tape Width": "48-50mm", "Grip": "Pistol-style with spring release", "Material": "Metal + Rubber overmold", "Weight": "380g", "Fatigue Reduction": "Yes (spring-loaded)" },
            imageUrl: "/images/tape_gun.png",
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-25",
            isBestSeller: false
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. STRAPPING SOLUTIONS (with nested subcategories under Tools)
  // ═══════════════════════════════════════════════════════════════
  {
    "id": "strapping-solutions",
    "name": "Strapping Solutions",
    "description": "Complete strapping solutions including PP, PET, and steel straps, manual and automatic tools, sealers, and accessories.",
    "imageUrl": "/images/strapping_solutions.png",
    "subcategories": [
      {
        "id": "straps",
        "name": "Straps",
        "products": [
          {
            "id": "pp-strap",
            "name": "PP Strap",
            "sku": "SBL-STRAP-PP",
            "brand": "SBECO",
            "tagline": "Manual and machine grade PP strap",
            "badge": "Popular",
            "description": "High quality Polypropylene strap suitable for manual tools and semi-automatic machines.",
            "specs": {
              "Material": "Polypropylene",
              "Grade": "Manual/Machine"
            },
            "imageUrl": "/images/PP-strap.png",
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "pet-strap",
            "name": "PET Strap",
            "sku": "SBL-STRAP-PET",
            "brand": "SBECO",
            "tagline": "Heavy-duty PET strap for secure packaging",
            "description": "High-tensile PET strapping designed as a safe and efficient alternative to steel strapping.",
            "specs": {
              "Material": "Polyester (PET)",
              "Tensile Strength": "High"
            },
            "imageUrl": "/images/Pet-strap.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "steel-strap",
            "name": "Steel Strap",
            "sku": "SBL-STRAP-STL",
            "brand": "SBECO",
            "tagline": "Maximum strength steel strap",
            "badge": "Heavy Duty",
            "description": "Premium steel strapping for ultra heavy-duty applications and extreme conditions.",
            "specs": {
              "Material": "Steel",
              "Strength": "Maximum"
            },
            "imageUrl": "/images/steel-strap.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "cord-strap",
            "name": "Cord Strap",
            "sku": "SBL-STRAP-CRD",
            "brand": "SBECO",
            "tagline": "Woven and composite cord strap",
            "description": "Strong and safe cord strapping for securing irregular or heavy loads.",
            "specs": {
              "Material": "Polyester Cord",
              "Type": "Woven/Composite"
            },
            "imageUrl": "/images/cord-strap.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "pallet-belts",
            "name": "Pallet Belts",
            "sku": "SBL-PLT-BLT",
            "brand": "SBECO",
            "tagline": "Reusable pallet strapping belts",
            "description": "Eco-friendly, reusable belts for securing pallet loads quickly.",
            "specs": {
              "Type": "Reusable",
              "Application": "Palletizing"
            },
            "imageUrl": "/images/pallet-belts.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "pallet-covers",
            "name": "Pallet Covers",
            "sku": "SBL-PLT-COV",
            "brand": "SBECO",
            "tagline": "Protective covers for pallets",
            "description": "Durable covers to protect palletized goods from dust, moisture, and transit damage.",
            "specs": {
              "Material": "PE",
              "Protection": "Dust & Moisture"
            },
            "imageUrl": "/images/pallet-covers.png",
            "dateAdded": "2026-06-01"
          }
        ]
      },
      {
        "id": "tools",
        "name": "Tools",
        "nestedSubcategories": [
          {
            "id": "tensioners",
            "name": "Tensioners",
            "products": [
              {
                "id": "eagle-tensioner",
                "name": "Eagle Strap Tensioner",
                "sku": "EGL-TEN",
                "brand": "Eagle",
                "tagline": "Professional tensioner",
                "description": "change",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/Eagle-Strap-Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "falcon-tensioner",
                "name": "Falcon Strap Tensioner",
                "sku": "FLC-TEN",
                "brand": "Falcon",
                "tagline": "Ergonomic tensioner",
                "description": "Durable and ergonomic hand tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/Falcon-Strap-Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-370-tensioner",
                "name": "MIP 370 Tensioner",
                "sku": "MIP-370",
                "brand": "MIP",
                "tagline": "MIP 370 series tensioner",
                "description": "Reliable MIP 370 series tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/mip 370 tensioners.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-380-tensioner",
                "name": "MIP 380 Tensioner",
                "sku": "MIP-380",
                "brand": "MIP",
                "tagline": "MIP 380 series tensioner",
                "description": "Reliable MIP 380 series tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/MIP 380 tensioners.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-1200-tensioner",
                "name": "MIP 1200 Tensioner",
                "sku": "MIP-1200",
                "brand": "MIP",
                "tagline": "MIP 1200 heavy duty tensioner",
                "description": "Heavy duty MIP 1200 tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/MIP 1200 Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-1610-tensioner",
                "name": "MIP 1610 Tensioner",
                "sku": "MIP-1610",
                "brand": "MIP",
                "tagline": "MIP 1610 standard tensioner",
                "description": "Standard MIP 1610 tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/MIP 1610 tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-1860-tensioner",
                "name": "MIP 1860 Tensioner",
                "sku": "MIP-1860",
                "brand": "MIP",
                "tagline": "MIP 1860 series tensioner",
                "description": "Advanced MIP 1860 tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/MIP 1860 Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-p330",
                "name": "YBICO P330 Tensioner",
                "sku": "YBC-P330",
                "brand": "YBICO",
                "tagline": "YBICO P330 tool",
                "description": "Premium YBICO P330 tensioner.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/YBICO-P330-Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-p472-p482",
                "name": "YBICO P472/P482 Tensioner",
                "sku": "YBC-P472",
                "brand": "YBICO",
                "tagline": "YBICO P472 & P482",
                "description": "YBICO series tensioners.",
                "specs": {
                  "Type": "Tensioner"
                },
                "imageUrl": "/images/YBICO-P472-P482-Tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-s249",
                "name": "YBICO S249/S259 Steel Tensioner",
                "sku": "YBC-S249",
                "brand": "YBICO",
                "tagline": "Steel strap tensioner",
                "description": "Tensioner for steel strapping.",
                "specs": {
                  "Type": "Steel Tensioner"
                },
                "imageUrl": "/images/YBICO-S249-S259-steel-strap-tensioner.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-s290",
                "name": "YBICO S290 Steel Tensioner",
                "sku": "YBC-S290",
                "brand": "YBICO",
                "tagline": "Steel strap tensioner",
                "description": "Heavy duty steel tensioner.",
                "specs": {
                  "Type": "Steel Tensioner"
                },
                "imageUrl": "/images/YBICO-S290-Steel-strap-tensioner.png",
                "dateAdded": "2026-06-01"
              }
            ]
          },
          {
            "id": "sealers",
            "name": "Sealers",
            "products": [
              {
                "id": "eagle-sealer",
                "name": "Eagle Strap Sealer",
                "sku": "EGL-SEL",
                "brand": "Eagle",
                "tagline": "Professional sealer",
                "description": "Secure sealer for plastic straps.",
                "specs": {
                  "Type": "Sealer"
                },
                "imageUrl": "/images/Eagle-Strap-Sealer.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "falcon-sealer",
                "name": "Falcon Strap Sealer",
                "sku": "FLC-SEL",
                "brand": "Falcon",
                "tagline": "Ergonomic sealer",
                "description": "Durable sealer tool.",
                "specs": {
                  "Type": "Sealer"
                },
                "imageUrl": "/images/Falcon-strap-sealer.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-420-sealer",
                "name": "MIP 420 1/2\" Sealer",
                "sku": "MIP-420",
                "brand": "MIP",
                "tagline": "1/2 inch sealer",
                "description": "MIP 420 series half inch sealer.",
                "specs": {
                  "Type": "Sealer",
                  "Size": "1/2\""
                },
                "imageUrl": "/images/MIP 420 12 sealer.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-430-sealer",
                "name": "MIP 430 1/2\" Sealer",
                "sku": "MIP-430",
                "brand": "MIP",
                "tagline": "1/2 inch sealer",
                "description": "MIP 430 series half inch sealer.",
                "specs": {
                  "Type": "Sealer",
                  "Size": "1/2\""
                },
                "imageUrl": "/images/MIP 430 12 sealers.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-1100-sealer",
                "name": "MIP 1100 3/4\" Sealer",
                "sku": "MIP-1100",
                "brand": "MIP",
                "tagline": "3/4 inch sealer",
                "description": "MIP 1100 series 3/4 inch sealer.",
                "specs": {
                  "Type": "Sealer",
                  "Size": "3/4\""
                },
                "imageUrl": "/images/MIP 1100 34 inch Sealer.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "mip-3100-sealer",
                "name": "MIP 3100 3/4\" Sealer",
                "sku": "MIP-3100",
                "brand": "MIP",
                "tagline": "3/4 inch sealer",
                "description": "MIP 3100 series 3/4 inch sealer.",
                "specs": {
                  "Type": "Sealer",
                  "Size": "3/4\""
                },
                "imageUrl": "/images/MIP 3100 34 sealer.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-c3160",
                "name": "YBICO C3160/C3166/C3180",
                "sku": "YBC-C3160",
                "brand": "YBICO",
                "tagline": "YBICO series sealers",
                "description": "YBICO sealing tools.",
                "specs": {
                  "Type": "Sealer"
                },
                "imageUrl": "/images/YBICO-C3160-C3166-C3180.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-c5004",
                "name": "YBICO C5004/C5005/C5015",
                "sku": "YBC-C5004",
                "brand": "YBICO",
                "tagline": "YBICO series sealers",
                "description": "YBICO sealing tools.",
                "specs": {
                  "Type": "Sealer"
                },
                "imageUrl": "/images/YBICO-C5004-C5005-C5015-C5006.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-s3104",
                "name": "YBICO S3104 Steel Sealer",
                "sku": "YBC-S3104",
                "brand": "YBICO",
                "tagline": "Steel strap sealer",
                "description": "Sealer for steel straps.",
                "specs": {
                  "Type": "Steel Sealer"
                },
                "imageUrl": "/images/YBICO-S3104-Steel-Strap-Sealer.png",
                "dateAdded": "2026-06-01"
              }
            ]
          },
          {
            "id": "cutters",
            "name": "Cutters",
            "products": [
              {
                "id": "ybico-300-cutter",
                "name": "YBICO 300 Cutter",
                "sku": "YBC-300",
                "brand": "YBICO",
                "tagline": "Strap cutter",
                "description": "Heavy duty strap cutter.",
                "specs": {
                  "Type": "Cutter"
                },
                "imageUrl": "/images/YBCIO-300-cutter.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-410-cutter",
                "name": "YBICO 410 Cutter",
                "sku": "YBC-410",
                "brand": "YBICO",
                "tagline": "Strap cutter",
                "description": "Precision strap cutter.",
                "specs": {
                  "Type": "Cutter"
                },
                "imageUrl": "/images/YBICO-410-cutter.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "ybico-h200-cutter",
                "name": "YBICO H200 Cutter",
                "sku": "YBC-H200",
                "brand": "YBICO",
                "tagline": "Strap cutter",
                "description": "YBICO H200 series cutter.",
                "specs": {
                  "Type": "Cutter"
                },
                "imageUrl": "/images/YBICO-H200-cutter.png",
                "dateAdded": "2026-06-01"
              }
            ]
          },
          {
            "id": "dispensers",
            "name": "Dispensers",
            "products": [
              {
                "id": "dispenser-1",
                "name": "Strap Dispenser 1",
                "sku": "DISP-1",
                "brand": "SBECO",
                "tagline": "Standard Dispenser",
                "description": "Mobile cart for strap dispensing.",
                "specs": {
                  "Type": "Dispenser"
                },
                "imageUrl": "/images/Strap-Dispenser-1.png",
                "dateAdded": "2026-06-01"
              },
              {
                "id": "dispenser-2",
                "name": "Strap Dispenser 2",
                "sku": "DISP-2",
                "brand": "SBECO",
                "tagline": "Heavy Duty Dispenser",
                "description": "Heavy duty mobile cart with tool tray.",
                "specs": {
                  "Type": "Dispenser"
                },
                "imageUrl": "/images/Strap-Dispenser-2.png",
                "dateAdded": "2026-06-01"
              }
            ]
          }
        ]
      },
      {
        "id": "seals-buckles",
        "name": "Seals & Buckles",
        "products": [
          {
            "id": "pp-seals",
            "name": "PP Strap Seals",
            "sku": "SBL-SEAL-PP",
            "brand": "SBECO",
            "tagline": "Secure PP seals",
            "description": "Metal seals for PP strapping.",
            "specs": {
              "Material": "Metal",
              "For": "PP Strap"
            },
            "imageUrl": "/images/PP-strap-seals.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "steel-seals",
            "name": "Steel Strap Seals",
            "sku": "SBL-SEAL-STL",
            "brand": "SBECO",
            "tagline": "Secure Steel seals",
            "description": "High strength seals for steel straps.",
            "specs": {
              "Material": "Steel",
              "For": "Steel Strap"
            },
            "imageUrl": "/images/Steel-strap=seals.png",
            "dateAdded": "2026-06-01"
          },
          {
            "id": "buckles",
            "name": "Buckles",
            "sku": "SBL-BUCKLE",
            "brand": "SBECO",
            "tagline": "Wire buckles",
            "description": "Wire and plastic buckles for tensioning.",
            "specs": {
              "Type": "Wire/Plastic"
            },
            "imageUrl": "/images/Buckles.png",
            "dateAdded": "2026-06-01"
          }
        ]
      }
    ]
  },
  {
    id: "power-tools",
    name: "Power Tools",
    description: "Industrial-grade cordless and corded power tools for construction, assembly, and packaging operations.",
    imageUrl: "/images/power_tools.png",
    subcategories: [
      {
        id: "cordless-tools",
        name: "Cordless Tools",
        products: [
          {
            id: "cordless-drill-18v",
            name: "SBECO Cordless Drill 18V",
            sku: "SBL-DRL-18V",
            brand: "ProPower",
            tagline: "Versatile 18V lithium-ion cordless drill for assembly and construction",
            badge: "Popular",
            description: "Compact yet powerful cordless drill with 18V lithium-ion battery. Two-speed transmission for drilling and fastening applications. Includes two batteries and fast charger.",
            specs: {
              "Voltage": "18V",
              "Battery": "Lithium-ion, 1.5Ah",
              "Speeds": "0-400, 0-1500 rpm",
              "Chuck": "13mm",
              "Weight": "1.2 kg"
            },
            imageUrl: "/images/cordless_drill.png",
            consumables: [
              { name: "Drill Bit Set", sku: "SBL-BITS-DRL", icon: "tool" },
              { name: "Lithium-ion Battery 18V", sku: "SBL-BATT-18V", icon: "tool" }
            ],
            similar: ["cordless-impact-driver"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "cordless-impact-driver",
            name: "SBECO Cordless Impact Driver 20V",
            sku: "SBL-IMP-20V",
            brand: "ProPower",
            tagline: "High-torque impact driver for fastening and nut removal",
            badge: "Professional",
            description: "Compact impact driver with 20V battery delivers 1500 in-lbs of torque. Perfect for driving large fasteners and removing stubborn bolts.",
            specs: {
              "Voltage": "20V",
              "Torque": "1500 in-lbs",
              "Speed": "0-2000 rpm",
              "Type": "Impact Driver",
              "Weight": "1.3 kg"
            },
            imageUrl: "/images/impact_driver.png",
            consumables: [
              { name: "Fastener Bit Set", sku: "SBL-BITS-FST", icon: "tool" },
              { name: "20V Lithium Battery", sku: "SBL-BATT-20V", icon: "tool" }
            ],
            similar: ["cordless-drill-18v"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "power-saws",
        name: "Power Saws",
        products: [
          {
            id: "circular-saw-1200w",
            name: "SBECO Circular Saw 1200W",
            sku: "SBL-SAW-CIR-1200",
            brand: "ProPower",
            tagline: "Powerful 1200W circular saw for lumber and composite cutting",
            badge: "Industrial",
            description: "Heavy-duty circular saw with 7-inch blade. Variable speed control and laser guide for precise cuts.",
            specs: {
              "Power": "1200W",
              "Blade Size": "185mm (7-inch)",
              "Max Depth": "65mm",
              "Speed": "5000 rpm",
              "Weight": "2.8 kg"
            },
            imageUrl: "/images/circular_saw.png",
            consumables: [
              { name: "Circular Saw Blade", sku: "SBL-BLADE-CIR", icon: "blade" }
            ],
            similar: ["jigsaw-600w"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "jigsaw-600w",
            name: "SBECO Jigsaw 600W",
            sku: "SBL-SAW-JIG-600",
            brand: "ProPower",
            tagline: "Versatile jigsaw for intricate cuts in wood, plastic, and metal",
            badge: "Versatile",
            description: "Compact jigsaw with orbital cutting action for smooth, precise curves.",
            specs: {
              "Power": "600W",
              "Stroke Length": "20mm",
              "Speed": "500-3000 spm",
              "Weight": "2.2 kg",
              "Tilt": "±45°"
            },
            imageUrl: "/images/jigsaw.png",
            consumables: [
              { name: "Jigsaw Blade Set", sku: "SBL-BLADE-JIG", icon: "blade" }
            ],
            similar: ["circular-saw-1200w"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. NAILING AND STAPLING SOLUTIONS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nailing-stapling",
    name: "Nailing and Stapling Solutions",
    description: "Complete fastening solutions including nails, staples, and professional-grade nailing and stapling guns.",
    imageUrl: "/images/nailing_stapling.png",
    subcategories: [
      {
        id: "nails",
        name: "Nails",
        products: [
          {
            id: "finishing-nails-50mm",
            name: "SBECO Finishing Nails 50mm",
            sku: "SBL-NAIL-FIN-50",
            brand: "SBECO",
            tagline: "High-quality finishing nails for woodworking and trim applications",
            badge: "Popular",
            description: "Precision-made finishing nails with smooth shaft and minimal head for clean, professional results.",
            specs: {
              "Length": "50mm (2-inch)",
              "Gauge": "16",
              "Material": "Steel",
              "Finish": "Bright / Galvanized",
              "Qty": "500 nails/box"
            },
            imageUrl: "/images/finishing_nails.png",
            consumables: [
              { name: "Nail Gun Pneumatic", sku: "SBL-GUN-NAIL-PNM", icon: "tool" }
            ],
            similar: ["common-nails-75mm", "brad-nails-25mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "common-nails-75mm",
            name: "SBECO Common Nails 75mm",
            sku: "SBL-NAIL-COM-75",
            brand: "SBECO",
            tagline: "Heavy-duty common nails for general construction and framing",
            badge: "Heavy Duty",
            description: "Robust common nails with larger head for maximum holding power.",
            specs: {
              "Length": "75mm (3-inch)",
              "Gauge": "12",
              "Material": "Steel",
              "Finish": "Hot-dipped Galvanized",
              "Qty": "350 nails/box"
            },
            imageUrl: "/images/common_nails.png",
            consumables: [
              { name: "Framing Nailer", sku: "SBL-GUN-NAIL-FRM", icon: "tool" }
            ],
            similar: ["finishing-nails-50mm", "brad-nails-25mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "brad-nails-25mm",
            name: "SBECO Brad Nails 25mm",
            sku: "SBL-NAIL-BRD-25",
            brand: "SBECO",
            tagline: "Thin brad nails for delicate woodwork and furniture assembly",
            badge: "Precision",
            description: "Fine brad nails with minimal visibility for premium finish work.",
            specs: {
              "Length": "25mm (1-inch)",
              "Gauge": "18",
              "Material": "Steel",
              "Head Size": "Minimal",
              "Qty": "1000 nails/box"
            },
            imageUrl: "/images/brad_nails.png",
            consumables: [
              { name: "Brad Nailer Gun", sku: "SBL-GUN-BRAD", icon: "tool" }
            ],
            similar: ["finishing-nails-50mm", "common-nails-75mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "staples",
        name: "Staples",
        products: [
          {
            id: "industrial-staples-10mm",
            name: "SBECO Industrial Staples 10mm",
            sku: "SBL-STAPLE-10",
            brand: "SBECO",
            tagline: "Heavy-duty staples for box sealing and packaging",
            badge: "Industrial",
            description: "Galvanized staples designed for high-powered stapling guns and fastening applications.",
            specs: {
              "Length": "10mm",
              "Crown Width": "10.6mm",
              "Material": "Galvanized Steel",
              "Qty": "1000 staples/box",
              "Hardness": "High"
            },
            imageUrl: "/images/industrial_staples.png",
            consumables: [
              { name: "Heavy Duty Stapler Gun", sku: "SBL-GUN-STAPLE-HD", icon: "tool" }
            ],
            similar: ["staples-12mm", "staples-8mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "staples-12mm",
            name: "SBECO Staples 12mm",
            sku: "SBL-STAPLE-12",
            brand: "SBECO",
            tagline: "Standard staples for general-purpose stapling and fastening",
            badge: "Essential",
            description: "Versatile staples for office and industrial stapling applications.",
            specs: {
              "Length": "12mm",
              "Crown Width": "10.6mm",
              "Material": "Steel",
              "Qty": "5000 staples/box",
              "Compatibility": "Standard staplers"
            },
            imageUrl: "/images/staples.png",
            consumables: [
              { name: "Professional Stapler Gun", sku: "SBL-GUN-STAPLE-PRO", icon: "tool" }
            ],
            similar: ["industrial-staples-10mm", "staples-8mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "staples-8mm",
            name: "SBECO Staples 8mm",
            sku: "SBL-STAPLE-8",
            brand: "SBECO",
            tagline: "Compact staples for light-duty applications and bookbinding",
            badge: "Light Duty",
            description: "Shorter staples ideal for thin materials and booklet assembly.",
            specs: {
              "Length": "8mm",
              "Crown Width": "10.6mm",
              "Material": "Steel",
              "Qty": "5000 staples/box"
            },
            imageUrl: "/images/staples_8mm.png",
            consumables: [
              { name: "Desktop Stapler", sku: "SBL-STAPLER-DESK", icon: "tool" }
            ],
            similar: ["industrial-staples-10mm", "staples-12mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "stapling-guns",
        name: "Stapling Guns",
        products: [
          {
            id: "pneumatic-stapler-gun",
            name: "SBECO Pneumatic Stapler Gun",
            sku: "SBL-GUN-STAPLE-PNM",
            brand: "ProPower",
            tagline: "Air-powered stapler for high-volume industrial applications",
            badge: "Industrial",
            description: "Heavy-duty pneumatic stapler requiring 90 PSI air supply. Ideal for production lines.",
            specs: {
              "Type": "Pneumatic",
              "Air Pressure": "90 PSI",
              "Staple Size": "10-12mm",
              "Speed": "Up to 6 shots/sec",
              "Weight": "1.8 kg"
            },
            imageUrl: "/images/pneumatic_stapler.png",
            consumables: [
              { name: "SBECO Industrial Staples 10mm", sku: "SBL-STAPLE-10", icon: "staple" }
            ],
            similar: ["electric-stapler-gun"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "electric-stapler-gun",
            name: "SBECO Electric Stapler Gun 220V",
            sku: "SBL-GUN-STAPLE-ELC",
            brand: "ProPower",
            tagline: "Portable electric stapler for cordless convenience",
            badge: "Professional",
            description: "Battery-powered stapler with ergonomic design for extended use.",
            specs: {
              "Power": "220V AC or Battery",
              "Staple Capacity": "200 staples",
              "Firing Rate": "3 shots/sec",
              "Weight": "1.5 kg",
              "Portability": "Cordless ready"
            },
            imageUrl: "/images/electric_stapler.png",
            consumables: [
              { name: "SBECO Staples 12mm", sku: "SBL-STAPLE-12", icon: "staple" }
            ],
            similar: ["pneumatic-stapler-gun"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. PACKAGING CONSUMABLES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "packaging-consumables",
    name: "Packaging Consumables",
    description: "Essential packaging materials including stretch film, foam, bubble wrap, and protective cushioning.",
    imageUrl: "/images/packaging_consumables.png",
    subcategories: [
      {
        id: "stretch-film",
        name: "Stretch Film",
        products: [
          {
            id: "stretch-film-500mm",
            name: "SBECO Stretch Film 500mm",
            sku: "SBL-STRETCH-500",
            brand: "SBECO",
            tagline: "High-grade stretch film for pallet wrapping and bundle protection",
            badge: "Popular",
            description: "Durable plastic stretch film with excellent cling and puncture resistance. Available in 500mm width rolls.",
            specs: {
              "Width": "500mm",
              "Length": "1500m per roll",
              "Thickness": "20 microns",
              "Material": "LLDPE",
              "Cling": "Enhanced"
            },
            imageUrl: "/images/stretch_film.png",
            consumables: [
              { name: "Stretch Film Dispenser", sku: "SBL-DISP-STRETCH", icon: "tool" }
            ],
            similar: ["stretch-film-250mm"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "stretch-film-250mm",
            name: "SBECO Stretch Film 250mm",
            sku: "SBL-STRETCH-250",
            brand: "SBECO",
            tagline: "Compact stretch film for small bundles and light-duty wrapping",
            badge: "Value Pick",
            description: "Economical stretch film suitable for lighter wrapping applications.",
            specs: {
              "Width": "250mm",
              "Length": "2000m per roll",
              "Thickness": "15 microns",
              "Material": "LLDPE"
            },
            imageUrl: "/images/stretch_film_250.png",
            consumables: [
              { name: "Stretch Film Dispenser", sku: "SBL-DISP-STRETCH", icon: "tool" }
            ],
            similar: ["stretch-film-500mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "foam-products",
        name: "Foam Products",
        products: [
          {
            id: "bubble-wrap-10mm",
            name: "SBECO Bubble Wrap 10mm",
            sku: "SBL-BUBBLE-10",
            brand: "SBECO",
            tagline: "Standard bubble wrap for lightweight item protection",
            badge: "Essential",
            description: "Protective bubble wrap with 10mm bubbles for cushioning fragile items.",
            specs: {
              "Bubble Size": "10mm",
              "Width": "1200mm",
              "Length": "100m per roll",
              "Material": "Polyethylene"
            },
            imageUrl: "/images/bubble_wrap.png",
            consumables: [
              { name: "Packing Tape 50mm", sku: "SBL-TAPE-PKG", icon: "tape" }
            ],
            similar: ["bubble-wrap-20mm", "foam-sheets"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "bubble-wrap-20mm",
            name: "SBECO Bubble Wrap 20mm",
            sku: "SBL-BUBBLE-20",
            brand: "SBECO",
            tagline: "Heavy-duty bubble wrap with larger bubbles for superior protection",
            badge: "Heavy Duty",
            description: "Premium bubble wrap with 20mm bubbles for maximum cushioning.",
            specs: {
              "Bubble Size": "20mm",
              "Width": "1200mm",
              "Length": "50m per roll",
              "Material": "Polyethylene",
              "Protection": "Maximum"
            },
            imageUrl: "/images/bubble_wrap_20.png",
            consumables: [
              { name: "Packing Tape 50mm", sku: "SBL-TAPE-PKG", icon: "tape" }
            ],
            similar: ["bubble-wrap-10mm", "foam-sheets"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "foam-sheets",
            name: "SBECO Foam Sheets 50mm",
            sku: "SBL-FOAM-50",
            brand: "SBECO",
            tagline: "Closed-cell foam sheets for rigid cushioning and insulation",
            badge: "Premium",
            description: "High-quality closed-cell foam sheets for protecting fragile and sensitive items.",
            specs: {
              "Thickness": "50mm",
              "Density": "25kg/m³",
              "Size": "1m x 0.5m per sheet",
              "Material": "EPE Foam",
              "Reusable": "Yes"
            },
            imageUrl: "/images/foam_sheets.png",
            consumables: [
              { name: "Packing Tape 50mm", sku: "SBL-TAPE-PKG", icon: "tape" }
            ],
            similar: ["bubble-wrap-20mm", "bubble-wrap-10mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. FACILITY MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: "facility-management",
    name: "Facility Management",
    description: "Comprehensive facility solutions including cleaning supplies, safety equipment, and maintenance products.",
    imageUrl: "/images/facility_management.png",
    subcategories: [
      {
        id: "cleaning-supplies",
        name: "Cleaning Supplies",
        products: [
          {
            id: "industrial-cleaner-5l",
            name: "SBECO Industrial Cleaner 5L",
            sku: "SBL-CLEAN-IND-5",
            brand: "SBECO",
            tagline: "Heavy-duty degreaser for industrial surfaces and equipment",
            badge: "Essential",
            description: "Powerful industrial cleaner suitable for removing grease, oil, and stubborn stains from machinery and work surfaces.",
            specs: {
              "Volume": "5 Liters",
              "Type": "Degreaser",
              "pH": "8-9",
              "Dilution": "1:5 to 1:10",
              "Effectiveness": "Heavy-duty"
            },
            imageUrl: "/images/industrial_cleaner.png",
            consumables: [
              { name: "Spray Bottle 1L", sku: "SBL-SPRAY-1L", icon: "container" }
            ],
            similar: ["floor-cleaner-5l"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "floor-cleaner-5l",
            name: "SBECO Floor Cleaner 5L",
            sku: "SBL-CLEAN-FLR-5",
            brand: "SBECO",
            tagline: "Non-slip floor cleaner for warehouses and facility floors",
            badge: "Popular",
            description: "Safe floor cleaner that leaves non-slip coating for enhanced safety.",
            specs: {
              "Volume": "5 Liters",
              "Coverage": "500-1000 sqm per liter",
              "Type": "Floor Cleaner",
              "Slip Rating": "Non-slip finish"
            },
            imageUrl: "/images/floor_cleaner.png",
            consumables: [
              { name: "Mop Bucket 20L", sku: "SBL-MOP-BUCKET", icon: "container" }
            ],
            similar: ["industrial-cleaner-5l"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
        ],
      },
      {
        id: "safety-equipment",
        name: "Safety Equipment",
        products: [
          {
            id: "safety-gloves-nitrile",
            name: "SBECO Nitrile Safety Gloves (Pair)",
            sku: "SBL-GLOVE-NTR",
            brand: "SBECO",
            tagline: "Protective nitrile gloves for handling sharp materials and chemicals",
            badge: "Essential",
            description: "Durable nitrile gloves providing chemical and puncture resistance.",
            specs: {
              "Material": "Nitrile",
              "Thickness": "0.11mm",
              "Size": "S, M, L, XL",
              "Qty": "100 pairs/box",
              "Latex-free": "Yes"
            },
            imageUrl: "/images/nitrile_gloves.png",
            consumables: [
              { name: "Glove Dispenser Box", sku: "SBL-GLOVE-DISP", icon: "container" }
            ],
            similar: ["safety-glasses"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "safety-glasses",
            name: "SBECO Safety Glasses (10-pack)",
            sku: "SBL-GLASS-SAFE",
            brand: "SBECO",
            tagline: "Impact-resistant safety glasses for eye protection",
            badge: "Essential",
            description: "ANSI-certified safety glasses with polycarbonate lenses.",
            specs: {
              "Material": "Polycarbonate",
              "Impact Resistance": "ANSI Z87.1 certified",
              "UV Protection": "100%",
              "Qty": "10 units/pack",
              "Styles": "Multiple frame options"
            },
            imageUrl: "/images/safety_glasses.png",
            consumables: [
              { name: "Lens Cleaning Cloth", sku: "SBL-CLOTH-LENS", icon: "cloth" }
            ],
            similar: ["safety-gloves-nitrile"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "first-aid-kit",
            name: "SBECO Industrial First Aid Kit",
            sku: "SBL-KIT-AID",
            brand: "SBECO",
            tagline: "Comprehensive first aid kit for workplace safety",
            badge: "Safety",
            description: "Complete first aid kit containing essential medical supplies for workplace injuries.",
            specs: {
              "Contents": "50+ items",
              "Wall-mount": "Yes",
              "OSHA Compliant": "Yes",
              "Refillable": "Yes",
              "Size": "Large"
            },
            imageUrl: "/images/first_aid_kit.png",
            consumables: [
              { name: "Refill Pack - Bandages", sku: "SBL-REFIL-BAND", icon: "medical" },
              { name: "Refill Pack - Gauze", sku: "SBL-REFIL-GAUZ", icon: "medical" }
            ],
            similar: ["safety-gloves-nitrile"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },
];

// Build flat product index (supports nested subcategories)
export const productIndex = {};
export const allProducts = [];

CATALOGUE.forEach(cat => {
  cat.subcategories.forEach(sub => {
    // Handle regular products
    if (sub.products && sub.products.length > 0) {
      sub.products.forEach(p => {
        const enriched = { ...p, catId: cat.id, catName: cat.name, subName: sub.name };
        productIndex[p.id] = enriched;
        allProducts.push({ id: p.id, name: p.name, sku: p.sku, brand: p.brand, tagline: p.tagline, badge: p.badge, cat: cat.name, sub: sub.name, img: p.imageUrl, dateAdded: p.dateAdded, isBestSeller: p.isBestSeller });
      });
    }

    // Handle nested subcategories
    if (sub.nestedSubcategories && sub.nestedSubcategories.length > 0) {
      sub.nestedSubcategories.forEach(nested => {
        if (nested.products && nested.products.length > 0) {
          nested.products.forEach(p => {
            const enriched = { ...p, catId: cat.id, catName: cat.name, subName: sub.name, nestedSubName: nested.name };
            productIndex[p.id] = enriched;
            allProducts.push({ id: p.id, name: p.name, sku: p.sku, brand: p.brand, tagline: p.tagline, badge: p.badge, cat: cat.name, sub: sub.name, img: p.imageUrl, dateAdded: p.dateAdded, isBestSeller: p.isBestSeller });
          });
        }
      });
    }
  });
});
