// Complete product catalogue data — single source of truth
export const CATALOGUE = [
  {
    id: "pp-strapping-tools",
    name: "PP Strapping Tools",
    subcategories: [
      {
        id: "strapping-machines", name: "Strapping Machines",
        products: [
          {
            id: "semi-auto-strapping",
            name: "Semi Automatic Strapping Machine",
            sku: "SBL-SASM-01",
            brand: "SEPACK",
            tagline: "Reliable semi-automatic strapping for 6mm–12mm PP straps with 250W power",
            badge: "Best Seller",
            description: "The SBECO Semi Automatic Strapping Machine by SEPACK is a high-performance tabletop unit designed for medium to high-volume strapping operations. Featuring a robust 250W motor and an average cycle speed of just 2.5 seconds, it handles PP straps from 6mm to 12mm width with precision and consistency. Its user-friendly digital control panel allows quick adjustments to tension and sealing parameters, making it ideal for packaging lines in manufacturing, logistics, and warehousing environments.",
            specs: {
              "Brand": "SEPACK",
              "Type": "Strapping Machine",
              "Suitable For": "6mm – 12mm PP Strap",
              "Power Consumption": "250W",
              "Cycle Speed (Avg)": "2.5 Sec (depending on package size)",
              "Operation": "Semi-Automatic"
            },
            imageUrl: "/images/semi_auto_strapping.png",
            consumables: [
              { name: "SBECO PP Strap (Semi-Auto Grade)", sku: "SBL-PPS-2", icon: "strap" },
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
            ],
            similar: ["fully-auto-strapping", "pp-strap-semi-auto"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "fully-auto-strapping",
            name: "Fully Automatic Strapping Machine",
            sku: "SBL-FASM-01",
            brand: "SEPACK DBA 200",
            tagline: "High-speed fully automatic strapping machine with 400W power for 12mm PP straps",
            badge: "Industrial",
            description: "The SBECO Fully Automatic Strapping Machine powered by SEPACK DBA 200 is engineered for high-throughput production lines. With a powerful 400W motor dedicated to 12mm PP straps, it delivers continuous, hands-free strapping with an average cycle speed of 2.5 seconds. The machine features automatic strap feeding, tensioning, sealing, and cutting — eliminating manual intervention and maximizing productivity for heavy-duty industrial packaging operations.",
            specs: {
              "Brand": "SEPACK DBA 200",
              "Type": "Strapping Machine",
              "Suitable For": "12 mm PP Strap",
              "Power Consumption": "400W",
              "Cycle Speed (Avg)": "2.5 Sec (depending on package size)",
              "Operation": "Fully Automatic"
            },
            imageUrl: "/images/fully_auto_strapping.png",
            consumables: [
              { name: "SBECO PP Strap (Machine Grade)", sku: "SBL-PPS-3", icon: "strap" },
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
            ],
            similar: ["semi-auto-strapping", "pp-strap-machine"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
        ],
      },
      {
        id: "tensioners", name: "Strap Tensioners",
        products: [
          {
            id: "pp-tensioner-eco",
            name: "SBECO PP Strap Tensioner ECO",
            sku: "SBL-TEN-ECO",
            brand: "Falcon",
            tagline: "Durable metal tensioner with rubberized grip for 12–19mm PP straps",
            badge: "Value Pick",
            description: "The SBECO PP Strap Tensioner ECO by Falcon is a rugged, ergonomic hand tool designed for manual PP strapping operations. Built with a solid metal body and a comfortable rubberized grip, it provides consistent strap tensioning for 12mm to 19mm polypropylene straps. The gear-driven mechanism ensures reliable, repeatable tension with minimal operator fatigue, making it a cost-effective choice for warehouses and shipping departments.",
            specs: {
              "Brand": "Falcon",
              "Type": "Tensioner",
              "Suitable For": "12–19mm PP Strap",
              "Body Material": "Metal",
              "Grip": "Rubberized Grip",
              "Grade": "ECO / Economy"
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
            description: "The SBECO PP Strap Tensioner PRO by Eagle is a professional-grade hand tool built for demanding, high-volume strapping environments. Its heavy-duty metal construction and precision-engineered tensioning mechanism deliver superior grip strength and consistent tension across 12mm to 19mm PP straps. Ideal for industrial packaging, export shipments, and pallet securing where maximum strap tension is critical.",
            specs: {
              "Brand": "Eagle",
              "Type": "Tensioner",
              "Suitable For": "12–19mm PP Strap",
              "Body Material": "Metal",
              "Grade": "PRO / Professional"
            },
            imageUrl: "/images/pp_tensioner_pro.png",
            consumables: [
              { name: "SBECO PP Strap (Manual Grade)", sku: "SBL-PPS-1", icon: "strap" },
              { name: "PP Strap Seals 15mm", sku: "SBL-SEAL-15", icon: "seal" }
            ],
            similar: ["pp-tensioner-eco", "pp-sealer-pro"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "sealers", name: "Strap Sealers",
        products: [
          {
            id: "pp-sealer-eco",
            name: "SBECO PP Strap Sealer ECO",
            sku: "SBL-SEL-ECO",
            brand: "Falcon",
            tagline: "Metal sealer with rubberized grip for secure 12–19mm PP strap crimping",
            badge: "Value Pick",
            description: "The SBECO PP Strap Sealer ECO by Falcon is a dependable crimping tool for securing PP strap seals onto tensioned polypropylene strapping. Its sturdy metal body and rubberized grip provide comfortable, fatigue-free operation even during extended use. Compatible with 12mm to 19mm PP straps and matching galvanized steel seals, it's an essential tool for any manual strapping station.",
            specs: {
              "Brand": "Falcon",
              "Type": "Sealer",
              "Suitable For": "12–19mm PP Strap",
              "Body Material": "Metal",
              "Grip": "Rubberized Grip",
              "Grade": "ECO / Economy"
            },
            imageUrl: "/images/pp_sealer_eco.png",
            consumables: [
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" },
              { name: "PP Strap Seals 15mm", sku: "SBL-SEAL-15", icon: "seal" }
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
            tagline: "Stainless steel professional sealer with rubberized grip for 12–19mm PP straps",
            badge: "Professional",
            description: "The SBECO PP Strap Sealer PRO by Eagle is a premium-grade crimping tool constructed from stainless steel for long-lasting durability and corrosion resistance. The rubberized grip ensures comfortable handling, while the precision jaw mechanism delivers secure, consistent crimps on 12mm to 19mm PP strap seals. Designed for professional packaging environments where reliability and seal integrity are paramount.",
            specs: {
              "Brand": "Eagle",
              "Type": "Sealer",
              "Suitable For": "12–19mm PP Strap",
              "Body Material": "Stainless Steel",
              "Grip": "Rubberized Grip",
              "Grade": "PRO / Professional"
            },
            imageUrl: "/images/pp_sealer_pro.png",
            consumables: [
              { name: "PP Strap Seals 19mm", sku: "SBL-SEAL-19", icon: "seal" },
              { name: "PP Strap Seals 15mm", sku: "SBL-SEAL-15", icon: "seal" }
            ],
            similar: ["pp-sealer-eco", "pp-tensioner-pro"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },
  {
    id: "pp-straps-seals",
    name: "PP Straps & Seals",
    subcategories: [
      {
        id: "pp-straps", name: "PP Straps",
        products: [
          {
            id: "pp-strap-manual",
            name: "SBECO Manual PP Strap",
            sku: "SBL-PPS-1",
            brand: "SBECO",
            tagline: "Manual grade PP strap in 12mm & 19mm widths, available in 7 vibrant colours",
            badge: "Popular",
            description: "The SBECO Manual PP Strap (PP Strap 1) is designed for hand strapping applications using manual tensioners and sealers. Available in 12mm and 19mm widths with a consistent 0.5mm thickness, it provides reliable holding force for general-purpose bundling and packaging. Offered in 7 colour options — White, Yellow, Black, Grey, Blue, Red, and Green — and supplied in convenient 3Kg and 5Kg rolls for heat sealing applications.",
            specs: {
              "Grade": "Manual",
              "Strap Width": "12mm, 19mm",
              "Thickness": "0.5mm",
              "Color Options": "White, Yellow, Black, Grey, Blue, Red, Green",
              "Weight": "3Kg & 5Kg",
              "Usage": "Heat Sealing"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "PP Strap Tensioner ECO", sku: "SBL-TEN-ECO", icon: "tool" },
              { name: "PP Strap Sealer ECO", sku: "SBL-SEL-ECO", icon: "tool" },
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
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
            description: "The SBECO Semi-Automatic PP Strap (PP Strap 2) is optimized for use with semi-automatic strapping machines. Available in 9mm, 12mm, and 15mm widths with a uniform 0.5mm thickness, it feeds smoothly through machine guides and tensioning mechanisms. Supplied in 3Kg and 5Kg rolls across 7 colour options, this strap is ideal for medium-volume production lines requiring consistent, reliable heat-sealed closures.",
            specs: {
              "Grade": "Semi-Automatic",
              "Strap Width": "9mm, 12mm, 15mm",
              "Thickness": "0.5mm",
              "Color Options": "White, Yellow, Black, Grey, Blue, Red, Green",
              "Weight": "3Kg & 5Kg",
              "Usage": "Heat Sealing"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "Semi Automatic Strapping Machine", sku: "SBL-SASM-01", icon: "machine" },
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
            ],
            similar: ["pp-strap-manual", "pp-strap-machine", "semi-auto-strapping"],
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
            description: "The SBECO Machine Grade PP Strap (PP Strap 3) is engineered for fully automatic strapping machines. Available in 12mm and 19mm widths with 0.5mm thickness, it is designed for continuous high-speed feeding without jams or misfeeds. Supplied in 3Kg and 5Kg rolls across 7 colour options, this strap delivers consistent heat-sealed closures at high throughput — perfect for production lines, distribution centres, and export packaging.",
            specs: {
              "Grade": "Machine Grade / Automatic",
              "Strap Width": "12mm, 19mm",
              "Thickness": "0.5mm",
              "Color Options": "White, Yellow, Black, Grey, Blue, Red, Green",
              "Weight": "3Kg & 5Kg",
              "Usage": "Heat Sealing"
            },
            imageUrl: "/images/pp_strap_rolls.png",
            consumables: [
              { name: "Fully Automatic Strapping Machine", sku: "SBL-FASM-01", icon: "machine" },
              { name: "PP Strap Seals 12mm", sku: "SBL-SEAL-12", icon: "seal" }
            ],
            similar: ["pp-strap-manual", "pp-strap-semi-auto", "fully-auto-strapping"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "pp-seals", name: "PP Strap Seals",
        products: [
          {
            id: "pp-seal-12mm",
            name: "SBECO PP Strap Seals 12MM",
            sku: "SBL-SEAL-12",
            brand: "SBECO",
            tagline: "Galvanized steel seals for 12mm polypropylene strapping",
            badge: "Essential",
            description: "SBECO PP Strap Seals 12MM are precision-stamped galvanized steel clips designed for securing 12mm polypropylene straps. Available in silver and golden finishes, these seals provide a strong, tamper-evident closure when crimped with a compatible sealer tool. Their galvanized coating ensures corrosion resistance for both indoor and outdoor applications.",
            specs: {
              "Suitable For": "12mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Colors": "Silver / Golden",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer ECO", sku: "SBL-SEL-ECO", icon: "tool" },
              { name: "SBECO Manual PP Strap", sku: "SBL-PPS-1", icon: "strap" }
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
            description: "SBECO PP Strap Seals 15MM are robust galvanized steel clips engineered for 15mm polypropylene straps. Available in silver and golden finishes, they deliver reliable, tamper-evident closures for medium-duty strapping applications. Ideal for carton sealing, bundling, and pallet securing.",
            specs: {
              "Suitable For": "15mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Colors": "Silver / Golden",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" },
              { name: "SBECO Semi-Automatic PP Strap", sku: "SBL-PPS-2", icon: "strap" }
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
            description: "SBECO PP Strap Seals 19MM are heavy-duty galvanized steel clips for the widest polypropylene straps in the SBECO range. Available in silver and golden finishes, they provide maximum holding strength for heavy loads, pallets, and export shipments. Compatible with both ECO and PRO series sealers.",
            specs: {
              "Suitable For": "19mm Polypropylene Strap",
              "Material": "Galvanized Steel",
              "Colors": "Silver / Golden",
              "Type": "Crimp Seal"
            },
            imageUrl: "/images/pp_strap_seals.png",
            consumables: [
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" },
              { name: "PP Strap Tensioner PRO", sku: "SBL-TEN-PRO", icon: "tool" }
            ],
            similar: ["pp-seal-12mm", "pp-seal-15mm"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
    ],
  },
  {
    id: "pet-straps-seals",
    name: "PET Straps & Seals",
    subcategories: [
      {
        id: "pet-straps-12mm", name: "PET Straps 12mm",
        products: [
          {
            id: "pet-strap-1260",
            name: "SBECO PET Strap 1260",
            sku: "SBL-PET-1260",
            brand: "SBECO",
            tagline: "12mm recycled PET embossed strap — 2000m per roll for heavy-duty applications",
            badge: "Eco Friendly",
            description: "The SBECO PET Strap 1260 is a high-strength embossed polyester strap manufactured from recycled PET material. At 12mm width and available in 0.6mm or 0.8mm thickness, it offers an eco-friendly alternative to steel strapping while maintaining exceptional tensile strength and elongation recovery. Each roll provides 2000 metres of continuous strapping, making it ideal for securing heavy pallets, timber, bricks, and export cargo.",
            specs: {
              "Material Type": "Recycled PET",
              "Width": "12mm",
              "Thickness": "0.6 mm / 0.8 mm",
              "Length": "2000 m",
              "Type": "Embossed",
              "Colour": "Green"
            },
            imageUrl: "/images/pet_strap_green.png",
            consumables: [
              { name: "PP Strap Tensioner PRO", sku: "SBL-TEN-PRO", icon: "tool" },
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pet-strap-b1260", "pet-strap-1580", "pet-strap-19127"],
            dateAdded: "2026-06-01",
            isBestSeller: true
          },
          {
            id: "pet-strap-b1260",
            name: "SBECO PET Strap Black 1270",
            sku: "SBL-PET-B1260",
            brand: "SBECO",
            tagline: "12mm black recycled PET embossed strap — 2000m per roll",
            badge: "Heavy Duty",
            description: "The SBECO PET Strap Black 1270 (B1260) is a premium black-coloured embossed polyester strap made from recycled PET. With 12mm width and 0.6mm or 0.8mm thickness options, it delivers the same high performance as its green counterpart while offering a distinctive black finish preferred for certain industries and export requirements. Each roll provides 2000 metres of continuous strapping.",
            specs: {
              "Material Type": "Recycled PET",
              "Width": "12mm",
              "Thickness": "0.6 mm / 0.8 mm",
              "Length": "2000 m",
              "Type": "Embossed",
              "Colour": "Black"
            },
            imageUrl: "/images/pet_strap_black.png",
            consumables: [
              { name: "PP Strap Tensioner PRO", sku: "SBL-TEN-PRO", icon: "tool" },
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pet-strap-1260", "pet-strap-1580", "pet-strap-19127"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
        ],
      },
      {
        id: "pet-straps-wide", name: "PET Straps 15mm & 19mm",
        products: [
          {
            id: "pet-strap-1580",
            name: "SBECO PET Strap 1580",
            sku: "SBL-PET-1580",
            brand: "SBECO",
            tagline: "15mm embossed PET strap at 0.8mm thickness — 1350m per roll",
            badge: "Mid Range",
            description: "The SBECO PET Strap 1580 is a 15mm wide embossed polyester strap offering the perfect balance between flexibility and tensile strength. At 0.8mm thickness and 1350 metres per roll, it's designed for medium to heavy-duty strapping applications where a wider strap profile provides better load distribution. Ideal for securing pallets, crates, and heavy cartons in manufacturing and logistics.",
            specs: {
              "Width": "15 mm",
              "Thickness": "0.8 mm",
              "Length": "1350 m",
              "Type": "Embossed",
              "Colour": "Green"
            },
            imageUrl: "/images/pet_strap_green.png",
            consumables: [
              { name: "PP Strap Tensioner PRO", sku: "SBL-TEN-PRO", icon: "tool" },
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pet-strap-1260", "pet-strap-19127", "pet-strap-b1260"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
          {
            id: "pet-strap-19127",
            name: "SBECO PET Strap 19127",
            sku: "SBL-PET-19127",
            brand: "SBECO",
            tagline: "19mm heavy-duty embossed PET strap at 1.27mm — maximum strength",
            badge: "Max Strength",
            description: "The SBECO PET Strap 19127 is the heaviest-duty strap in the SBECO PET range. At 19mm width and a robust 1.27mm thickness, it delivers maximum tensile strength for the most demanding strapping applications — from heavy machinery and steel coils to construction materials and oversized export cargo. Each roll provides 650 metres of premium embossed strapping.",
            specs: {
              "Width": "19 mm",
              "Thickness": "1.27 mm",
              "Length": "650 m",
              "Type": "Embossed",
              "Colour": "Green"
            },
            imageUrl: "/images/pet_strap_green.png",
            consumables: [
              { name: "PP Strap Tensioner PRO", sku: "SBL-TEN-PRO", icon: "tool" },
              { name: "PP Strap Sealer PRO", sku: "SBL-SEL-PRO", icon: "tool" }
            ],
            similar: ["pet-strap-1580", "pet-strap-1260", "pet-strap-b1260"],
            dateAdded: "2026-06-01",
            isBestSeller: false
          },
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
