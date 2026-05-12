// Complete product catalogue data — single source of truth
export const CATALOGUE = [
  {
    id: "adhesive-tapes",
    name: "Adhesive Tapes",
    subcategories: [
      {
        id: "double-sided", name: "Double-Sided Tapes",
        products: [
          { id: "dst-pro-5000", name: "ProMount DS-5000", sku: "SBL-DS-5000", brand: "Super Bright Labs", tagline: "Heavy-duty double-sided mounting tape for industrial bonding", badge: "Best Seller", description: "The ProMount DS-5000 is engineered for permanent high-strength bonding across smooth, rough, and textured surfaces. Its dual-acrylic adhesive system delivers exceptional holding power even under vibration, moisture, and temperature swings from −30°C to 120°C.", specs: { "Width": "25 mm", "Length": "33 m", "Thickness": "1.2 mm", "Peel Strength": "180 N/cm²", "Temp Range": "−30°C to 120°C", "Liner": "Silicone Release" }, imageUrl: "/images/double_sided_tape.png", consumables: [ { name: "Tape Dispenser Handle", sku: "SBL-TDH-01", price: "₹ 649", icon: "dispenser" }, { name: "Surface Primer Spray", sku: "SBL-SPS-02", price: "₹ 420", icon: "spray" }, { name: "Applicator Roller", sku: "SBL-AR-03", price: "₹ 280", icon: "roller" }, { name: "Residue Remover 250ml", sku: "SBL-RR-04", price: "₹ 350", icon: "bottle" } ], similar: ["foam-mounting", "specialty-alu"], dateAdded: "2026-01-10", isBestSeller: true },
          { id: "foam-mounting", name: "FoamBond FM-800", sku: "SBL-FM-800", brand: "Super Bright Labs", tagline: "Acrylic foam double-sided tape for structural joining", badge: "Professional", description: "FoamBond FM-800 features a conformable closed-cell acrylic foam core that compensates for surface irregularities. Ideal for bonding nameplates, emblems, glass, and panels.", specs: { "Width": "19 mm", "Length": "22 m", "Core": "Closed-cell Foam", "Tack": "Very High", "UV Resistance": "Excellent", "Liner Colour": "Red" }, imageUrl: "/images/foam_tape.png", consumables: [ { name: "Foam Cutter Guide", sku: "SBL-FCG-01", price: "₹ 220", icon: "cutter" }, { name: "Bond Primer Wipe Pack (50)", sku: "SBL-BWP-10", price: "₹ 310", icon: "wipe" }, { name: "Hand Roller Press", sku: "SBL-HRP-02", price: "₹ 490", icon: "roller" } ], similar: ["dst-pro-5000", "transfer-tape"], dateAdded: "2026-01-10", isBestSeller: false },
        ],
      },
      {
        id: "masking-tapes", name: "Masking & Painters Tapes",
        products: [
          { id: "mask-clean-100", name: "CleanEdge MT-100", sku: "SBL-MT-100", brand: "Super Bright Labs", tagline: "Zero-bleed masking tape for precision painting", badge: "Precision Grade", description: "CleanEdge MT-100 uses a specially treated crepe paper backing and a rubber-based adhesive calibrated for 14-day clean removal.", specs: { "Width": "48 mm", "Length": "55 m", "Backing": "Crepe Paper", "Adhesion": "Medium", "Max Temp": "80°C", "Removal": "Up to 14 days" }, imageUrl: "/images/masking_tape.png", consumables: [ { name: "Tape Dispenser (Wide)", sku: "SBL-TDW-05", price: "₹ 580", icon: "dispenser" }, { name: "Scraper Tool Set (3pc)", sku: "SBL-STS-03", price: "₹ 310", icon: "scraper" } ], similar: ["high-temp-masking", "specialty-alu"], dateAdded: "2026-01-15", isBestSeller: false },
          { id: "high-temp-masking", name: "ThermoMask HT-260", sku: "SBL-HT-260", brand: "Super Bright Labs", tagline: "High-temperature masking tape for powder coat & oven use", badge: "High Temp", description: "ThermoMask HT-260 is manufactured from a glass-cloth base with silicone adhesive capable of withstanding continuous heat up to 260°C.", specs: { "Width": "25 mm", "Length": "33 m", "Backing": "Glass Cloth", "Adhesive": "Silicone", "Max Temp": "260°C", "Colour": "Tan" }, imageUrl: "/images/high_temp_tape.png", consumables: [ { name: "Heat-Resistant Gloves", sku: "SBL-HRG-01", price: "₹ 720", icon: "glove" }, { name: "Tape Punch Tool", sku: "SBL-TPT-02", price: "₹ 350", icon: "cutter" } ], similar: ["mask-clean-100", "specialty-alu"], dateAdded: "2026-05-01", isBestSeller: false },
        ],
      },
      {
        id: "industrial-strength", name: "Industrial Strength Tapes",
        products: [
          { id: "gaffer-ultra", name: "GripForce Gaffer G-700", sku: "SBL-GF-700", brand: "Super Bright Labs", tagline: "Professional cloth gaffer tape, residue-free removal", badge: "Pro AV Grade", description: "GripForce G-700 uses a woven polyethylene-coated cotton cloth reinforced with a natural rubber adhesive.", specs: { "Width": "50 mm", "Length": "50 m", "Backing": "Woven Cloth", "Adhesive": "Natural Rubber", "Finish": "Matte Black", "Tearable": "By Hand" }, imageUrl: "/images/gaffer_tape.png", consumables: [ { name: "Cable Tie Set 200pk", sku: "SBL-CTS-200", price: "₹ 180", icon: "tie" } ], similar: ["transfer-tape", "dst-pro-5000"], dateAdded: "2026-02-01", isBestSeller: true },
          { id: "transfer-tape", name: "TransferPro TP-400", sku: "SBL-TP-400", brand: "Super Bright Labs", tagline: "Repositionable transfer tape for graphic mounting", badge: "Graphics Grade", description: "TransferPro TP-400 is a premium, clear, pressure-sensitive transfer tape engineered for sign, graphics, and vinyl application.", specs: { "Width": "305 mm", "Length": "91 m", "Adhesive": "Acrylic PSA", "Liner": "Gridded Kraft", "Clarity": "Optically Clear", "Reposition Window": "60 sec" }, imageUrl: "/images/transfer_tape.png", consumables: [ { name: "Squeegee Applicator", sku: "SBL-SQA-01", price: "₹ 160", icon: "squeegee" }, { name: "Cutting Mat A2", sku: "SBL-CMA-02", price: "₹ 780", icon: "cutter" } ], similar: ["dst-pro-5000", "foam-mounting"], dateAdded: "2026-02-01", isBestSeller: false },
        ],
      },
      {
        id: "specialty-foil", name: "Specialty & Foil Tapes",
        products: [
          { id: "specialty-alu", name: "AlumiFoil AF-200", sku: "SBL-AF-200", brand: "Super Bright Labs", tagline: "Aluminium foil tape for HVAC and thermal sealing", badge: "HVAC Grade", description: "AlumiFoil AF-200 features a dead-soft aluminium foil conformable around ducts, pipes, and irregular joints.", specs: { "Width": "72 mm", "Length": "55 m", "Foil Gauge": "0.05 mm", "Adhesive": "Acrylic", "UL Rating": "UL 181A-P", "EMI Shielding": "Yes" }, imageUrl: "/images/aluminium_foil_tape.png", consumables: [ { name: "Duct Tape Dispenser", sku: "SBL-DTD-01", price: "₹ 610", icon: "dispenser" } ], similar: ["gaffer-ultra", "transfer-tape"], dateAdded: "2026-05-01", isBestSeller: false },
        ],
      },
    ],
  },
  {
    id: "power-tools",
    name: "Power Tools",
    subcategories: [
      {
        id: "drills-drivers", name: "Drills & Drivers",
        products: [
          { id: "bosch-gsb-18v", name: "Bosch GSB 18V-85 C", sku: "BSH-GSB18V85", brand: "Bosch Professional", tagline: "Connected brushless combi drill with 85 Nm torque", badge: "Top Pick", description: "The Bosch GSB 18V-85 C Professional is a high-performance brushless combi drill with Connectivity Module.", specs: { "Max Torque": "85 Nm", "Chuck": "13 mm All-Metal", "Speeds": "0–550 / 0–2,100 rpm", "Impact Rate": "0–33,600 bpm", "Battery": "18 V (Li-Ion)", "Weight": "2.0 kg (with 4 Ah)" }, imageUrl: "/images/cordless_drill.png", consumables: [ { name: "Bosch 4 Ah ProCORE18V Battery", sku: "BSH-PC18V4", price: "₹ 5,200", icon: "battery" }, { name: "X-Line Drill & Bit Set (93 pc)", sku: "BSH-XLN93", price: "₹ 1,450", icon: "bit-set" } ], similar: ["dewalt-dcd996", "bosch-go-2"], dateAdded: "2026-03-01", isBestSeller: true },
          { id: "dewalt-dcd996", name: "DeWalt DCD996P2", sku: "DWL-DCD996P2", brand: "DeWalt", tagline: "3-speed brushless hammer drill/driver, 95 Nm", badge: "XR Series", description: "The DeWalt DCD996P2 features a 3-speed all-metal transmission delivering up to 95 Nm torque.", specs: { "Max Torque": "95 Nm", "Chuck": "13 mm Ratcheting", "Speeds": "3-Speed", "Impact Rate": "38,250 bpm", "Battery": "20V MAX XR 5 Ah", "Weight": "2.1 kg" }, imageUrl: "/images/dewalt_drill.png", consumables: [ { name: "DeWalt 5Ah XR Battery (2-Pack)", sku: "DWL-DCB205-2", price: "₹ 8,400", icon: "battery" } ], similar: ["bosch-gsb-18v", "bosch-go-2"], dateAdded: "2026-03-01", isBestSeller: true },
          { id: "bosch-go-2", name: "Bosch GO 2 Screwdriver", sku: "BSH-GO2", brand: "Bosch", tagline: "Smart compact electric screwdriver, pocket-sized", badge: "Compact", description: "The Bosch GO 2 is a smart 3.6V screwdriver featuring Bosch SmartSense auto-start technology.", specs: { "Voltage": "3.6 V", "Max Torque": "5 Nm", "No-Load Speed": "200 rpm", "Bits Included": "5 pc", "Battery": "Li-Ion (built-in)", "Charge": "USB-C 2 hr" }, imageUrl: "/images/compact_screwdriver.png", consumables: [ { name: "Flex Shaft Extension", sku: "BSH-FSE-01", price: "₹ 480", icon: "bit-set" } ], similar: ["bosch-gsb-18v", "dewalt-dcd996"], dateAdded: "2026-03-15", isBestSeller: false },
        ],
      },
      {
        id: "grinders-sanders", name: "Grinders & Sanders",
        products: [
          { id: "bosch-gws18v", name: "Bosch GWS 18V-10 SC", sku: "BSH-GWS18V10", brand: "Bosch Professional", tagline: "Brushless cordless angle grinder with KickBack Control", badge: "Safety Rated", description: "The GWS 18V-10 SC features Bosch's KickBack Control and Restart Protection for maximum operator safety.", specs: { "Disc Dia.": "125 mm", "No-load Speed": "8,500 rpm", "Spindle Thread": "M14", "Safety": "KickBack Control", "Battery": "18 V Li-Ion", "Weight": "1.8 kg" }, imageUrl: "/images/angle_grinder.png", consumables: [ { name: "Expert Metal Grinding Disc (5pk)", sku: "BSH-GMD-5PK", price: "₹ 760", icon: "disc" } ], similar: ["camo-marking-tool", "bosch-gsb-18v"], dateAdded: "2026-03-15", isBestSeller: false },
        ],
      },
      {
        id: "saws-cutters", name: "Saws & Cutters",
        products: [
          { id: "bosch-gst-18v", name: "Bosch GST 18V-Li B", sku: "BSH-GST18VLI", brand: "Bosch Professional", tagline: "Cordless jigsaw with Constant Electronic speed control", badge: "Precision Cut", description: "The Bosch GST 18V-Li B jigsaw delivers clean, precise cuts in wood, metal, ceramics, and plastics up to 120 mm.", specs: { "Stroke Rate": "0–3,100 spm", "Cutting (Wood)": "120 mm", "Cutting (Metal)": "10 mm", "Blade System": "T-Shank SDS", "Orbit Settings": "4-stage", "Battery": "18 V Li-Ion" }, imageUrl: "/images/cordless_jigsaw.png", consumables: [ { name: "T-Shank Wood Blade Set (5pk)", sku: "BSH-TWB-5", price: "₹ 580", icon: "blade" } ], similar: ["bosch-gsb-18v", "bosch-gws18v"], dateAdded: "2026-04-01", isBestSeller: false },
        ],
      },
      {
        id: "measuring-detection", name: "Measuring & Detection",
        products: [
          { id: "bosch-plr-30c", name: "Bosch PLR 30 C Laser", sku: "BSH-PLR30C", brand: "Bosch", tagline: "30m Bluetooth laser measure with free app", badge: "Smart Tool", description: "The Bosch PLR 30 C laser distance measurer delivers ±1.5 mm accuracy up to 30 m.", specs: { "Range": "0.05–30 m", "Accuracy": "±1.5 mm", "Display": "Backlit LCD", "Bluetooth": "4.0", "Battery": "2 × AAA", "IP Rating": "IP 54" }, imageUrl: "/images/laser_measure.png", consumables: [ { name: "Measuring Tape 5m", sku: "BSH-MT-5M", price: "₹ 380", icon: "tape-measure" } ], similar: ["bosch-go-2", "camo-marking-tool"], dateAdded: "2026-04-01", isBestSeller: false },
          { id: "camo-marking-tool", name: "Camo Marksman Pro-NB", sku: "CMO-MPN-1", brand: "Camo", tagline: "Deck board spacing and fastening guide tool", badge: "Deck Pro", description: "The Camo Marksman Pro-NB drives Camo fasteners at the perfect angle for hidden deck fastening.", specs: { "Board Width": "up to 145 mm", "Drive Angle": "15°", "Fastener Type": "Camo Edge", "Material": "Aluminium Body", "Compatible": "Composite / Wood", "Boards/Bucket": "Up to 1,750 sqft" }, imageUrl: "/images/deck_fastening_tool.png", consumables: [ { name: "Camo Edge Fasteners 350pk", sku: "CMO-CEF-350", price: "₹ 1,240", icon: "screw" } ], similar: ["bosch-plr-30c", "bosch-gsb-18v"], dateAdded: "2026-04-15", isBestSeller: false },
        ],
      },
    ],
  },
  {
    id: "protective-packaging",
    name: "Protective Packaging",
    subcategories: [
      {
        id: "bubble-wrap", name: "Bubble Wrap",
        products: [
          { id: "bw-small-500", name: "ShieldAir BW-10 (Small Bubble)", sku: "SBL-BW-10", brand: "Super Bright Labs", tagline: "Small 10mm bubble wrap for fragile electronics & glassware", badge: "Electronics Safe", description: "ShieldAir BW-10 features uniform 10 mm air bubbles for cushioning delicate items.", specs: { "Bubble Diameter": "10 mm", "Bubble Height": "8 mm", "Width": "500 mm", "Roll Length": "100 m", "Material": "Virgin LDPE", "Anti-Static": "Optional" }, imageUrl: "/images/bubble_wrap_small.png", consumables: [ { name: "Stretch Film Clear 500m Roll", sku: "SBL-SF-500", price: "₹ 680", icon: "roll" } ], similar: ["bw-large-1000", "foam-sheet"], dateAdded: "2026-01-20", isBestSeller: true },
          { id: "bw-large-1000", name: "ShieldAir BW-30 (Large Bubble)", sku: "SBL-BW-30", brand: "Super Bright Labs", tagline: "30mm large-bubble wrap for heavy & bulky goods", badge: "Heavy Duty", description: "ShieldAir BW-30 uses large 30 mm diameter bubbles to provide superior cushioning.", specs: { "Bubble Diameter": "30 mm", "Bubble Height": "22 mm", "Width": "750 mm", "Roll Length": "50 m", "Film Gauge": "100 micron", "Colour": "Clear" }, imageUrl: "/images/bubble_wrap_large.png", consumables: [ { name: "Heavy Duty Packing Tape", sku: "SBL-HDT-01", price: "₹ 160", icon: "tape-floor" } ], similar: ["bw-small-500", "stretch-film"], dateAdded: "2026-01-20", isBestSeller: false },
        ],
      },
      {
        id: "foam-packaging", name: "Foam Packaging",
        products: [
          { id: "foam-sheet", name: "ProFoam PF-200 Sheet", sku: "SBL-PF-200", brand: "Super Bright Labs", tagline: "Polyethylene foam sheet for interleaving & wrapping", badge: "Chemical Resistant", description: "ProFoam PF-200 is a cross-linked polyethylene foam sheet offering excellent cushioning.", specs: { "Density": "30 kg/m³", "Thickness": "5 mm", "Sheet Size": "1000×2000 mm", "Colour": "White", "Temp Range": "−50°C to 100°C", "Recyclable": "Yes" }, imageUrl: "/images/foam_sheet.png", consumables: [ { name: "Foam Cutting Knife Set", sku: "SBL-FCK-03", price: "₹ 340", icon: "cutter" } ], similar: ["foam-inserts", "bw-small-500"], dateAdded: "2026-02-10", isBestSeller: false },
          { id: "foam-inserts", name: "CubeForm CF-100 Custom Insert", sku: "SBL-CF-100", brand: "Super Bright Labs", tagline: "Pre-scored foam bun for custom pick-and-pluck inserts", badge: "Custom Fit", description: "CubeForm CF-100 is a high-density pre-scored foam bun for creating precision pick-and-pluck foam inserts.", specs: { "Density": "55 kg/m³", "Block Size": "455×330×50 mm", "Cube Size": "12×12×12 mm", "Colour": "Black", "Material": "Polyurethane", "Layers": "Stackable" }, imageUrl: "/images/foam_insert.png", consumables: [ { name: "Foam Rail Case 550×400", sku: "SBL-FRC-01", price: "₹ 1,900", icon: "case" } ], similar: ["foam-sheet", "edge-protectors"], dateAdded: "2026-02-10", isBestSeller: false },
        ],
      },
      {
        id: "stretch-films", name: "Stretch Films",
        products: [
          { id: "stretch-film", name: "PalletPro SF-23 Stretch Film", sku: "SBL-SF-23", brand: "Super Bright Labs", tagline: "Machine stretch film 23 micron for pallet unitisation", badge: "Machine Grade", description: "PalletPro SF-23 is a high-performance machine stretch film offering outstanding load containment.", specs: { "Gauge": "23 micron", "Width": "500 mm", "Length": "2,500 m", "Elongation": "Up to 250%", "Cast/Blown": "Cast", "Core": "76 mm" }, imageUrl: "/images/stretch_film.png", consumables: [ { name: "Film Cutter Safety Tool", sku: "SBL-FCT-01", price: "₹ 220", icon: "cutter" } ], similar: ["bw-large-1000", "edge-protectors"], dateAdded: "2026-04-20", isBestSeller: false },
        ],
      },
      {
        id: "edge-protectors-cat", name: "Edge Protectors",
        products: [
          { id: "edge-protectors", name: "CornerShield CE-75 Angle Board", sku: "SBL-CE-75", brand: "Super Bright Labs", tagline: "Solid paperboard edge protector for pallet & panel protection", badge: "Load Bearing", description: "CornerShield CE-75 is a heavy-duty solid fibreboard angle board that protects pallet edges and corners.", specs: { "Angle": "90°", "Wing Width": "75×75 mm", "Thickness": "4 mm", "Length": "1000 mm", "Load Rating": "450 kg/lm", "Recycled Content": "100%" }, imageUrl: "/images/edge_protectors.png", consumables: [ { name: "Polyester Strapping 16mm (800m)", sku: "SBL-PES-800", price: "₹ 2,200", icon: "strap" } ], similar: ["stretch-film", "foam-inserts"], dateAdded: "2026-04-20", isBestSeller: false },
        ],
      },
    ],
  },
];

// Build flat product index
export const productIndex = {};
export const allProducts = [];
CATALOGUE.forEach(cat => {
  cat.subcategories.forEach(sub => {
    sub.products.forEach(p => {
      const enriched = { ...p, catId: cat.id, catName: cat.name, subName: sub.name };
      productIndex[p.id] = enriched;
      allProducts.push({ id: p.id, name: p.name, sku: p.sku, brand: p.brand, tagline: p.tagline, badge: p.badge, cat: cat.name, sub: sub.name, img: p.imageUrl, dateAdded: p.dateAdded, isBestSeller: p.isBestSeller });
    });
  });
});
