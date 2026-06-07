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
      {
        id: "adhesive-tapes",
        name: "Adhesive Tapes",
        products: [
          {
            id: "carton-sealing-tape",
            name: "SBECO Carton Sealing Tape 50mm",
            sku: "SBL-TAPE-CST-50",
            brand: "SBECO",
            tagline: "Premium-grade carton sealing tape, 50mm width, 50m per roll",
            badge: "Popular",
            description: "SBECO Carton Sealing Tape is a high-strength acrylic-based adhesive tape designed for sealing corrugated cartons, boxes, and packages. With a 50mm width and 50-meter roll length, it provides excellent adhesion on cardboard surfaces and maintains strength under various temperature and humidity conditions. Suitable for both manual and automated sealing applications.",
            specs: {
              "Width": "50mm",
              "Length": "50m",
              "Adhesive": "Acrylic-based",
              "Thickness": "0.05mm",
              "Breaking Strength": "22 N/25mm"
            },
            imageUrl: "/images/carton_tape.png",
            consumables: [
              { name: "Tape Dispenser Gun", sku: "SBL-DISP-GUN", icon: "tool" }
            ],
            similar: ["clear-packaging-tape", "kraft-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "clear-packaging-tape",
            name: "SBECO Clear Packaging Tape 48mm",
            sku: "SBL-TAPE-CLR-48",
            brand: "SBECO",
            tagline: "Transparent packaging tape for professional and light-duty sealing",
            badge: "Essential",
            description: "Versatile clear packaging tape ideal for light to medium-duty sealing applications. The transparent design allows contents visibility while providing reliable adhesion. Available in 48mm width with extended length rolls.",
            specs: {
              "Width": "48mm",
              "Length": "66m",
              "Adhesive": "Acrylic-based",
              "Type": "Clear",
              "Temperature Range": "-10°C to 60°C"
            },
            imageUrl: "/images/clear_tape.png",
            consumables: [
              { name: "Tape Dispenser Gun", sku: "SBL-DISP-GUN", icon: "tool" }
            ],
            similar: ["carton-sealing-tape", "kraft-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "kraft-tape",
            name: "SBECO Kraft Paper Tape 50mm",
            sku: "SBL-TAPE-KFT-50",
            brand: "SBECO",
            tagline: "Eco-friendly kraft paper tape for sustainable packaging solutions",
            badge: "Eco Friendly",
            description: "Environment-friendly kraft paper tape with water-activated adhesive. Ideal for eco-conscious packaging, the tape activates on contact with moisture for strong, permanent bonding.",
            specs: {
              "Width": "50mm",
              "Length": "50m",
              "Material": "Kraft Paper",
              "Adhesive": "Water-activated",
              "Recyclable": "Yes"
            },
            imageUrl: "/images/kraft_tape.png",
            consumables: [
              { name: "Water Spray Bottle", sku: "SBL-SPRAY-BTL", icon: "tool" }
            ],
            similar: ["carton-sealing-tape", "clear-packaging-tape"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "tape-dispensers-cat",
        name: "Tape Dispensers",
        products: [
          {
            id: "tape-dispenser-gun",
            name: "SBECO Tape Dispenser Gun",
            sku: "SBL-DISP-GUN",
            brand: "SEPACK",
            tagline: "Ergonomic manual tape dispenser for 48-50mm tape rolls",
            badge: "Professional",
            description: "Heavy-duty tape dispenser gun with comfortable grip and easy one-hand operation. Cuts tape at 45-degree angle for clean, professional seals. Suitable for all standard carton and packaging tapes.",
            specs: {
              "Tape Width": "48-50mm",
              "Material": "Metal + Plastic",
              "Grip": "Ergonomic",
              "Cutting Angle": "45°",
              "Weight": "350g"
            },
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
            description: "Professional table-mounted tape dispenser with built-in brake system for precise tape control. Ideal for high-volume packaging lines and shipping departments.",
            specs: {
              "Tape Width": "50mm",
              "Mount Type": "Table-top",
              "Brake System": "Yes",
              "Material": "Steel",
              "Production Speed": "Up to 30 boxes/min"
            },
            imageUrl: "/images/tape_dispenser.png",
            consumables: [
              { name: "SBECO Carton Sealing Tape 50mm", sku: "SBL-TAPE-CST-50", icon: "tape" }
            ],
            similar: ["tape-dispenser-gun"],
            dateAdded: "2026-06-01",
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
    id: "strapping-solutions",
    name: "Strapping Solutions",
    description: "Complete strapping solutions including PP and PET straps, manual and automatic tools with tensioning, sealing, and cutting capabilities.",
    imageUrl: "/images/strapping_solutions.png",
    subcategories: [
      {
        id: "straps",
        name: "Straps",
        products: [
          {
            id: "pp-strap-manual",
            name: "SBECO Manual PP Strap",
            sku: "SBL-PPS-1",
            brand: "SBECO",
            tagline: "Manual grade PP strap in 12mm & 19mm widths, available in 7 vibrant colours",
            badge: "Popular",
            description: "The SBECO Manual PP Strap is designed for hand strapping applications using manual tensioners and sealers. Available in 12mm and 19mm widths with a consistent 0.5mm thickness, it provides reliable holding force for general-purpose bundling and packaging. Offered in 7 colour options — White, Yellow, Black, Grey, Blue, Red, and Green.",
            specs: {
              "Grade": "Manual",
              "Strap Width": "12mm, 19mm",
              "Thickness": "0.5mm",
              "Color Options": "7 colors",
              "Weight": "3Kg & 5Kg",
              "Usage": "Heat Sealing"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "PP Strap Tensioner ECO", sku: "SBL-TEN-ECO", icon: "tool" },
              { name: "PP Strap Sealer ECO", sku: "SBL-SEL-ECO", icon: "tool" }
            ],
            similar: ["pp-strap-semi-auto", "pp-strap-machine"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "pp-strap-semi-auto",
            name: "SBECO Semi-Automatic PP Strap",
            sku: "SBL-PPS-2",
            brand: "SBECO",
            tagline: "Semi-automatic grade PP strap in 9mm, 12mm & 15mm for machine use",
            badge: "Machine Grade",
            description: "Optimized for use with semi-automatic strapping machines. Available in 9mm, 12mm, and 15mm widths with a uniform 0.5mm thickness, it feeds smoothly through machine guides.",
            specs: {
              "Grade": "Semi-Automatic",
              "Strap Width": "9mm, 12mm, 15mm",
              "Thickness": "0.5mm",
              "Color Options": "7 colors",
              "Weight": "3Kg & 5Kg"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "Semi Automatic Strapping Machine", sku: "SBL-SASM-01", icon: "machine" }
            ],
            similar: ["pp-strap-manual", "pp-strap-machine"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "pp-strap-machine",
            name: "SBECO Machine Grade PP Strap",
            sku: "SBL-PPS-3",
            brand: "SBECO",
            tagline: "Machine grade PP strap for fully automatic strapping systems",
            badge: "Automatic",
            description: "Engineered for fully automatic strapping machines. Available in 12mm and 19mm widths with 0.5mm thickness, designed for continuous high-speed feeding.",
            specs: {
              "Grade": "Machine Grade",
              "Strap Width": "12mm, 19mm",
              "Thickness": "0.5mm",
              "Color Options": "7 colors",
              "Speed": "High-throughput"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "Fully Automatic Strapping Machine", sku: "SBL-FASM-01", icon: "machine" }
            ],
            similar: ["pp-strap-manual", "pp-strap-semi-auto"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "tools",
        name: "Tools",
        nestedSubcategories: [
          {
            id: "tensioners",
            name: "Tensioners",
            products: [
              {
                id: "pp-tensioner-eco",
                name: "SBECO PP Strap Tensioner ECO",
                sku: "SBL-TEN-ECO",
                brand: "Falcon",
                tagline: "Durable metal tensioner with rubberized grip for 12–19mm PP straps",
                badge: "Value Pick",
                description: "Rugged, ergonomic hand tool designed for manual PP strapping operations. Built with solid metal body and comfortable rubberized grip.",
                specs: {
                  "Brand": "Falcon",
                  "Type": "Tensioner",
                  "Suitable For": "12–19mm PP Strap",
                  "Body Material": "Metal",
                  "Grip": "Rubberized"
                },
                imageUrl: "/images/pp_tensioner_eco.png",
                consumables: [
                  { name: "SBECO PP Strap (Manual Grade)", sku: "SBL-PPS-1", icon: "strap" },
                  { name: "PP Strap Seals 19mm", sku: "SBL-SEAL-19", icon: "seal" }
                ],
                similar: ["pp-tensioner-pro", "pp-sealer-eco"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
              {
                id: "pp-tensioner-pro",
                name: "SBECO PP Strap Tensioner PRO",
                sku: "SBL-TEN-PRO",
                brand: "Eagle",
                tagline: "Professional-grade metal tensioner for heavy-duty 12–19mm PP strapping",
                badge: "Professional",
                description: "Professional-grade hand tool built for demanding, high-volume strapping environments. Heavy-duty metal construction.",
                specs: {
                  "Brand": "Eagle",
                  "Type": "Tensioner",
                  "Suitable For": "12–19mm PP Strap",
                  "Grade": "Professional"
                },
                imageUrl: "/images/pp_tensioner_pro.png",
                consumables: [
                  { name: "SBECO PP Strap (Manual Grade)", sku: "SBL-PPS-1", icon: "strap" }
                ],
                similar: ["pp-tensioner-eco", "pp-sealer-pro"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
            ],
          },
          {
            id: "sealers",
            name: "Sealers",
            products: [
              {
                id: "pp-sealer-eco",
                name: "SBECO PP Strap Sealer ECO",
                sku: "SBL-SEL-ECO",
                brand: "Falcon",
                tagline: "Metal sealer with rubberized grip for secure 12–19mm PP strap crimping",
                badge: "Value Pick",
                description: "Dependable crimping tool for securing PP strap seals onto tensioned polypropylene strapping.",
                specs: {
                  "Brand": "Falcon",
                  "Type": "Sealer",
                  "Suitable For": "12–19mm PP Strap",
                  "Grade": "Economy"
                },
                imageUrl: "/images/pp_sealer_eco.png",
                consumables: [
                  { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
                ],
                similar: ["pp-sealer-pro", "pp-tensioner-eco"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
              {
                id: "pp-sealer-pro",
                name: "SBECO PP Strap Sealer PRO",
                sku: "SBL-SEL-PRO",
                brand: "Eagle",
                tagline: "Stainless steel professional sealer with rubberized grip",
                badge: "Professional",
                description: "Premium-grade crimping tool constructed from stainless steel for long-lasting durability.",
                specs: {
                  "Brand": "Eagle",
                  "Type": "Sealer",
                  "Material": "Stainless Steel",
                  "Grade": "Professional"
                },
                imageUrl: "/images/pp_sealer_pro.png",
                consumables: [
                  { name: "PP Strap Seals 19mm", sku: "SBL-SEAL-19", icon: "seal" }
                ],
                similar: ["pp-sealer-eco", "pp-tensioner-pro"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
            ],
          },
          {
            id: "cutters",
            name: "Cutters",
            products: [
              {
                id: "pp-strap-cutter-eco",
                name: "SBECO PP Strap Cutter ECO",
                sku: "SBL-CUT-ECO",
                brand: "Falcon",
                tagline: "Hand-operated cutter for clean 12-19mm PP strap cutting",
                badge: "Value Pick",
                description: "Efficient manual cutter designed for precise, clean cutting of polypropylene straps without fraying.",
                specs: {
                  "Suitable For": "12-19mm PP Strap",
                  "Blade Type": "Stainless Steel",
                  "Grip": "Rubberized",
                  "Cut Quality": "Clean edge"
                },
                imageUrl: "/images/pp_cutter.png",
                consumables: [
                  { name: "SBECO PP Strap (Manual Grade)", sku: "SBL-PPS-1", icon: "strap" }
                ],
                similar: ["pp-strap-cutter-pro"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
              {
                id: "pp-strap-cutter-pro",
                name: "SBECO PP Strap Cutter PRO",
                sku: "SBL-CUT-PRO",
                brand: "Eagle",
                tagline: "Professional-grade cutter with precision blade for high-volume use",
                badge: "Professional",
                description: "Heavy-duty professional cutter for demanding industrial applications.",
                specs: {
                  "Suitable For": "12-19mm PP Strap",
                  "Blade": "Hardened Steel",
                  "Lifespan": "Extended",
                  "Precision": "High"
                },
                imageUrl: "/images/pp_cutter_pro.png",
                consumables: [
                  { name: "SBECO PP Strap (Manual Grade)", sku: "SBL-PPS-1", icon: "strap" }
                ],
                similar: ["pp-strap-cutter-eco"],
                dateAdded: "2026-06-01",
                isBestSeller: false
              },
            ],
          },
        ],
      },
      {
        id: "seals",
        name: "Seals",
        products: [
          {
            id: "pp-seal-12mm",
            name: "SBECO PP Strap Seals 12MM",
            sku: "SBL-SEAL-12",
            brand: "SBECO",
            tagline: "Galvanized steel seals for 12mm polypropylene strapping",
            badge: "Essential",
            description: "Precision-stamped galvanized steel clips designed for securing 12mm polypropylene straps.",
            specs: {
              "Suitable For": "12mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Colors": "Silver / Golden",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer ECO", sku: "SBL-SEL-ECO", icon: "tool" }
            ],
            similar: ["pp-seal-15mm", "pp-seal-19mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "pp-seal-15mm",
            name: "SBECO PP Strap Seals 15MM",
            sku: "SBL-SEAL-15",
            brand: "SBECO",
            tagline: "Galvanized steel seals for 15mm polypropylene strapping",
            badge: "Essential",
            description: "Robust galvanized steel clips engineered for 15mm polypropylene straps.",
            specs: {
              "Suitable For": "15mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pp-seal-12mm", "pp-seal-19mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "pp-seal-19mm",
            name: "SBECO PP Strap Seals 19MM",
            sku: "SBL-SEAL-19",
            brand: "SBECO",
            tagline: "Heavy-duty galvanized steel seals for 19mm polypropylene strapping",
            badge: "Heavy Duty",
            description: "Heavy-duty galvanized steel clips for the widest polypropylene straps.",
            specs: {
              "Suitable For": "19mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pp-seal-12mm", "pp-seal-15mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. POWER TOOLS
  // ═══════════════════════════════════════════════════════════════
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
