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
              "description": "Heavy-duty tensioner for secure strapping.",
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
