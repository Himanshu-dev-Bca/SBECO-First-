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
        "id": "masking-tapes-films",
        "name": "Masking Tapes & Films",
        "products": [
          {
            "id": "masking-tapes-films-1",
            "name": "SBECO GP Masking Tape",
            "sku": "SBL-TAPE-MSK-01",
            "brand": "SBECO",
            "tagline": "Professional-grade masking tape designed for general purpose crepe applications.",
            "badge": "Popular",
            "description": "Premium general purpose crepe masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "12mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "60°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/tapes/GP-Masking-Tape.png",
            "similar": [
              "masking-tapes-films-2",
              "masking-tapes-films-3",
              "masking-tapes-films-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "masking-tapes-films-2",
            "name": "Tesa 53123 Masking Tape",
            "sku": "SBL-TAPE-MSK-02",
            "brand": "Tesa",
            "tagline": "Premium-grade masking tape designed for general purpose applications.",
            "badge": "Essential",
            "description": "Premium general purpose masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "18mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "80°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-3",
              "masking-tapes-films-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "masking-tapes-films-3",
            "name": "SBECO Masking Film 208",
            "sku": "SBL-TAPE-MSK-03",
            "brand": "SBECO",
            "tagline": "Premium-grade masking film designed for outdoor applications.",
            "badge": "Premium",
            "description": "Premium masking film featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "110°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "masking-tapes-films-4",
            "name": "SBECO Masking Film 158",
            "sku": "SBL-TAPE-MSK-04",
            "brand": "SBECO",
            "tagline": "Premium-grade masking film designed for uv-resistant outdoor washi applications.",
            "badge": "Premium",
            "description": "Premium uv-resistant outdoor washi masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "36mm",
              "Length": "50m",
              "Backing Material": "Washi Paper",
              "Temperature Resistance": "120°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "masking-tapes-films-5",
            "name": "Tesa 04341 Masking Tape",
            "sku": "SBL-TAPE-MSK-05",
            "brand": "SBECO",
            "tagline": "Premium-grade masking tape designed for general-purpose applications.",
            "badge": "Popular",
            "description": "Premium general-purpose masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "150°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "masking-tapes-films-6",
            "name": "SBECO Masking Tape ABRO",
            "sku": "SBL-TAPE-MSK-06",
            "brand": "SBECO",
            "tagline": "Premium-grade masking tape designed for high-temperature applications.",
            "badge": "Essential",
            "description": "Premium masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "72mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "180°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "masking-tapes-films-7",
            "name": "Tesa 4304 Masking Tape",
            "sku": "SBL-TAPE-MSK-07",
            "brand": "Tesa",
            "tagline": "Premium-grade masking tape designed for automotive body shop applications.",
            "badge": "Heavy Duty",
            "description": "Premium automotive body shop masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "12mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "60°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "masking-tapes-films-8",
            "name": "Tesa 4309 Masking Tape",
            "sku": "SBL-TAPE-MSK-08",
            "brand": "Tesa",
            "tagline": "Premium-grade masking tape designed for polyester powder coating shield applications.",
            "badge": "Premium",
            "description": "Premium polyester powder coating shield masking tape featuring a high-quality adhesive system. Provides clean removal without leaving residue or damaging surfaces. Specially conformable backing ensures sharp paint lines and ease of application on flat and contoured surfaces.",
            "specs": {
              "Width": "18mm",
              "Length": "50m",
              "Backing Material": "Crepe Paper",
              "Temperature Resistance": "80°C",
              "Adhesive Type": "Natural Rubber"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "masking-tapes-films-1",
              "masking-tapes-films-2",
              "masking-tapes-films-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "double-sided-tapes",
        "name": "Double Sided Tapes",
        "products": [
          {
            "id": "double-sided-tapes-1",
            "name": "SBECO Double Side Polyester Tape",
            "sku": "SBL-TAPE-DST-01",
            "brand": "SBECO",
            "tagline": "High-strength double-coated tape with tissue carrier for nameplate mounting.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a tissue carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "12mm",
              "Length": "10m",
              "Carrier Material": "Tissue",
              "Thickness": "0.1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-2",
              "double-sided-tapes-3",
              "double-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "double-sided-tapes-2",
            "name": "SBECO Double Side Tissue Tape",
            "sku": "SBL-TAPE-DST-02",
            "brand": "SBECO",
            "tagline": "High-strength double-coated tape with tissue carrier for general purpose applications.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a tissue carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "19mm",
              "Length": "50m",
              "Carrier Material": "PE Foam",
              "Thickness": "0.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-3",
              "double-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-3",
            "name": "SBECO Double Side Foam Tape",
            "sku": "SBL-TAPE-DST-03",
            "brand": "SBECO",
            "tagline": "High-strength double-coated tape with foam carrier for general purpose applications.",
            "badge": "Heavy Duty",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a foam carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Carrier Material": "PE Foam",
              "Thickness": "1mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-4",
            "name": "SBECO Double Side Cloth Tape",
            "sku": "SBL-TAPE-DST-04",
            "brand": "SBECO",
            "tagline": "High-strength double-coated tape with cloth carrier for carpet laying.",
            "badge": "Premium",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a cloth carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "30mm",
              "Length": "10m",
              "Carrier Material": "Acrylic Foam (VHB)",
              "Thickness": "0.8mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-5",
            "name": "SBECO Double Side Tissue Solvent Tape",
            "sku": "SBL-TAPE-DST-05",
            "brand": "Tesa",
            "tagline": "High-strength double-coated tape with pvc carrier for splicing applications.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a pvc carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Carrier Material": "Tissue",
              "Thickness": "1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-6",
            "name": "SBECO Aluminium Foil Tape",
            "sku": "SBL-TAPE-DST-06",
            "brand": "3M",
            "tagline": "High-strength double-sided tape with aluminium foil carrier for general crafts.",
            "badge": "Essential",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a aluminium foil carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "50mm",
              "Length": "50m",
              "Carrier Material": "Aluminium Foil",
              "Thickness": "1.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "double-sided-tapes-7",
            "name": "SBECO Nano Tape",
            "sku": "SBL-TAPE-DST-07",
            "brand": "SBECO",
            "tagline": "High-strength double-sided tape with nano tape carrier for general purpose.",
            "badge": "Heavy Duty",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a nano tape carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "50mm",
              "Length": "3m",
              "Carrier Material": "Nano Tape",
              "Thickness": "1.5mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-8",
            "name": "SBECO VBH Tape",
            "sku": "SBL-TAPE-DST-08",
            "brand": "SBECO",
            "tagline": "High-strength double-sided tape with VBH carrier for bonding applications.",
            "badge": "Premium",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a VBH carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "19mm",
              "Length": "50m",
              "Carrier Material": "VBH",
              "Thickness": "2mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-9",
            "name": "Tesa 50565 Aluminum Tape",
            "sku": "TESA-50565-001",
            "brand": "Tesa",
            "tagline": "High-strength double-coated tape with aluminum carrier for general crafts.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a aluminium carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Carrier Material": "Non-Woven",
              "Thickness": "0.1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-10",
            "name": "Tesa 60999 Bundling Tape",
            "sku": "TESA-60999-001",
            "brand": "Tesa",
            "tagline": "High-strength bundling tape for various applications.",
            "badge": "Essential",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a tissue carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "30mm",
              "Length": "10m",
              "Carrier Material": "Tissue",
              "Thickness": "0.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-11",
            "name": "Tesa 8401 Reactive Structural Bonding Film",
            "sku": "TESA-8401-001",
            "brand": "Tesa",
            "tagline": "High-strength reactive structural bonding film for various bonding applications.",
            "badge": "Heavy Duty",
            "description": "Industrial-grade reactive structural bonding film featuring a high-performance epoxy-based adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Carrier Material": "PE Foam",
              "Thickness": "0.5mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "double-sided-tapes-12",
            "name": "Tesa 7065 Acrylic Foam Tape",
            "sku": "TESA-7065-001",
            "brand": "Tesa",
            "tagline": "High-strength acrylic foam tape for bonding applications.",
            "badge": "Premium",
            "description": "Industrial-grade acrylic foam tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "50mm",
              "Length": "50m",
              "Carrier Material": "PET Film",
              "Thickness": "0.8mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-13",
            "name": "Tesa 51207 Abrasion Protection Tape",
            "sku": "TESA-51207-001",
            "brand": "Tesa",
            "tagline": "High-strength abrasion protection tape for various abrasion protection applications.",
            "badge": "Popular",
            "description": "Industrial-grade abrasion protection tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal abrasion protection applications, providing excellent adhesion, abrasion resistance, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "12mm",
              "Length": "10m",
              "Carrier Material": "Acrylic Foam (VHB)",
              "Thickness": "1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-14",
            "name": "Tesa 4934 Double Sided Cloth Tape",
            "sku": "TESA-4934-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided cloth tape for various bonding applications.",
            "badge": "Essential",
            "description": "Industrial-grade double-sided cloth tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "19mm",
              "Length": "50m",
              "Carrier Material": "PVC",
              "Thickness": "1.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-15",
            "name": "Tesa 4952 Double Sided Foam Tape",
            "sku": "TESA-4952-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided foam tape for various bonding applications.",
            "badge": "Heavy Duty",
            "description": "Industrial-grade double-sided foam tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Carrier Material": "Transfer (No Carrier)",
              "Thickness": "1.5mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-16",
            "name": "Tesa 4964 Double Side Cloth Tape",
            "sku": "TESA-4964-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided cloth tape for various bonding applications.",
            "badge": "Premium",
            "description": "Industrial-grade double-sided cloth tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "30mm",
              "Length": "10m",
              "Carrier Material": "Cloth",
              "Thickness": "2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "double-sided-tapes-17",
            "name": "Tesa 4965 Double Side Polyester Tape",
            "sku": "TESA-4965-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided polyester tape for various bonding applications.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided polyester tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Carrier Material": "PP Film",
              "Thickness": "0.1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-18",
            "name": "Tesa 4970 Double Side Acrylic Tape",
            "sku": "TESA-4970-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided acrylic tape for various bonding applications.",
            "badge": "Essential",
            "description": "Industrial-grade double-sided acrylic tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "50mm",
              "Length": "50m",
              "Carrier Material": "Non-Woven",
              "Thickness": "0.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-19",
            "name": "Tesa 4985 Double Side Transfer Tape",
            "sku": "TESA-4985-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided transfer tape for various bonding applications.",
            "badge": "Premium",
            "description": "Industrial-grade double-sided transfer tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "12mm",
              "Length": "10m",
              "Carrier Material": "Tissue",
              "Thickness": "0.5mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-20",
            "name": "Tesa 50658 Double Side Slicing Tape",
            "sku": "TESA-50658-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided slicing tape for various bonding applications.",
            "badge": "Premium",
            "description": "Industrial-grade double-sided tape utilizing an advanced adhesive formula coated on both sides of a pe foam carrier. Engineered to deliver immediate adhesion and high shear resistance on a wide range of substrates including plastics, metals, glass, and wood. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "19mm",
              "Length": "50m",
              "Carrier Material": "PE Foam",
              "Thickness": "0.8mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-21",
            "name": "Tesa 55576 Double Side Foam Tape",
            "sku": "TESA-55576-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided foam tape for various bonding applications.",
            "badge": "Popular",
            "description": "Industrial-grade double-sided foam tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Carrier Material": "PET Film",
              "Thickness": "1mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "double-sided-tapes-22",
            "name": "Tesa 88641 Tissue Tape",
            "sku": "TESA-88641-001",
            "brand": "Tesa",
            "tagline": "High-strength double-sided tape with tissue carrier for various bonding applications.",
            "badge": "Essential",
            "description": "Industrial-grade double-sided tape featuring a high-performance acrylic adhesive formulation. Engineered for metal-to-metal and plastic-to-metal bonding applications, providing excellent adhesion, shear strength, and impact resistance. Comes with a release liner for easy handling and application.",
            "specs": {
              "Width": "30mm",
              "Length": "10m",
              "Carrier Material": "Cloth",
              "Thickness": "1.2mm",
              "Adhesive Type": "Hot-melt Rubber"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "double-sided-tapes-23",
            "name": "SBECO Copper Foil Tape",
            "sku": "SBL-TAPE-CFT-23",
            "brand": "Tesa",
            "tagline": "High-strength copper foil tape for EMI shielding and conductivity applications.",
            "badge": "Heavy Duty",
            "description": "Industrial-grade copper foil tape with an acrylic adhesive formulation. Engineered for EMI shielding, grounding, and conductivity applications requiring excellent adhesion and shielding performance. Comes with an easy-to-peel release liner.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Carrier Material": "Copper Foil",
              "Thickness": "0.05mm",
              "Adhesive Type": "Acrylic"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "double-sided-tapes-1",
              "double-sided-tapes-2",
              "double-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "sustainability-tapes",
        "name": "Sustainability Tapes",
        "products": [
          {
            "id": "sustainability-tapes-1",
            "name": "SBECO Paper Tape",
            "sku": "SBL-TAPE-PT-01",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious gummed kraft paper tape for green packaging.",
            "badge": "Popular",
            "description": "Part of our commitment to green logistics, this gummed kraft paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-2",
              "sustainability-tapes-3",
              "sustainability-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "sustainability-tapes-2",
            "name": "SBECO Gum Tape",
            "sku": "SBL-TAPE-GT-02",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious self-adhesive kraft paper tape for green packaging.",
            "badge": "Essential",
            "description": "Part of our commitment to green logistics, this self-adhesive kraft paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "36mm",
              "Length": "150m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-3",
              "sustainability-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-3",
            "name": "SBECO Printed Gum Tape",
            "sku": "SBL-TAPE-PGT-03",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious reinforced paper tape for green packaging.",
            "badge": "Heavy Duty",
            "description": "Part of our commitment to green logistics, this reinforced paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-4",
            "name": "SBECO Reinforcement Tape",
            "sku": "SBL-TAPE-RT-04",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious biodegradable cellulose tape for green packaging.",
            "badge": "Premium",
            "description": "Part of our commitment to green logistics, this biodegradable cellulose tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "50mm",
              "Length": "150m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-5",
            "name": "SBECO Printed Reinforcement Tape",
            "sku": "SBL-TAPE-PRT-05",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious compostable pla film tape for green packaging.",
            "badge": "Popular",
            "description": "Part of our commitment to green logistics, this compostable pla film tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "60mm",
              "Length": "50m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-6",
            "name": "SBECO Warning Printed Reinforcement Tape",
            "sku": "SBL-TAPE-WPR-06",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious recycled pet packaging tape for green packaging.",
            "badge": "Essential",
            "description": "Part of our commitment to green logistics, this recycled pet packaging tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "75mm",
              "Length": "150m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "sustainability-tapes-7",
            "name": "SBECO Kraft Paper Tape",
            "sku": "SBL-TAPE-KPT-07",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious grass paper tape for green packaging.",
            "badge": "Heavy Duty",
            "description": "Part of our commitment to green logistics, this grass paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-8",
            "name": "SBECO Taco Tape",
            "sku": "SBL-TAPE-TT-08",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious water-activated starch-bonded tape for green packaging.",
            "badge": "Premium",
            "description": "Part of our commitment to green logistics, this water-activated starch-bonded tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "36mm",
              "Length": "150m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-9",
            "name": "SBECO Cello Tape",
            "sku": "SBL-TAPE-CT-09",
            "brand": "SBECO",
            "tagline": "100% sustainable and eco-conscious gummed kraft paper tape for green packaging.",
            "badge": "Popular",
            "description": "Part of our commitment to green logistics, this gummed kraft paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-10",
            "name": "Tesa 4513",
            "sku": "SBL-TAPE-T4513-10",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious self-adhesive kraft paper tape for green packaging.",
            "badge": "Essential",
            "description": "Part of our commitment to green logistics, this self-adhesive kraft paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "50mm",
              "Length": "150m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-11",
            "name": "Tesa 60400",
            "sku": "SBL-TAPE-T60400-11",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious reinforced paper tape for green packaging.",
            "badge": "Heavy Duty",
            "description": "Part of our commitment to green logistics, this reinforced paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "60mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "sustainability-tapes-12",
            "name": "Tesa 58156",
            "sku": "SBL-TAPE-T58156-12",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious biodegradable cellulose tape for green packaging.",
            "badge": "Premium",
            "description": "Part of our commitment to green logistics, this biodegradable cellulose tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "75mm",
              "Length": "150m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-13",
            "name": "Tesa 60412",
            "sku": "SBL-TAPE-T60412-13",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious compostable pla film tape for green packaging.",
            "badge": "Popular",
            "description": "Part of our commitment to green logistics, this compostable pla film tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "24mm",
              "Length": "50m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-14",
            "name": "Tesa 4713 Reinforced Paper Packaging Tape",
            "sku": "SBL-TAPE-T4713-14",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious recycled pet packaging tape for green packaging.",
            "badge": "Essential",
            "description": "Part of our commitment to green logistics, this recycled pet packaging tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "36mm",
              "Length": "150m",
              "Base Material": "Bio-based Film",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "sustainability-tapes-15",
            "name": "Tesa 60013",
            "sku": "SBL-TAPE-T60013-15",
            "brand": "Tesa",
            "tagline": "100% sustainable and eco-conscious grass paper tape for green packaging.",
            "badge": "Heavy Duty",
            "description": "Part of our commitment to green logistics, this grass paper tape is made from renewable, biodegradable, or recycled materials. Designed to offer robust box closure while matching or exceeding the performance of traditional plastic tapes. Fully compatible with standard recycling streams.",
            "specs": {
              "Width": "48mm",
              "Length": "50m",
              "Base Material": "Kraft Paper",
              "Eco Certification": "FSC & EN 13432 Certified",
              "Recyclability": "100% Recyclable with Box"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "sustainability-tapes-1",
              "sustainability-tapes-2",
              "sustainability-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "single-sided-tapes",
        "name": "Single Sided Tapes",
        "products": [
          {
            "id": "single-sided-tapes-1",
            "name": "SBECO Premium Single-Sided Cellulose Film Tape 12mm",
            "sku": "SBL-TAPE-SST-01",
            "brand": "SBECO",
            "tagline": "High-tack single-sided tape with heavy-duty cellulose film backing.",
            "badge": "Popular",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough cellulose film backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "12mm",
              "Length": "66m",
              "Backing Type": "Cellulose Film",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-2",
              "single-sided-tapes-3",
              "single-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "single-sided-tapes-2",
            "name": "SBECO Premium Single-Sided UPVC Film Tape 18mm",
            "sku": "SBL-TAPE-SST-02",
            "brand": "Tesa",
            "tagline": "High-tack single-sided tape with heavy-duty upvc film backing.",
            "badge": "Essential",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough upvc film backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "18mm",
              "Length": "66m",
              "Backing Type": "UPVC Film",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-3",
              "single-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "single-sided-tapes-3",
            "name": "SBECO Premium Single-Sided MOPP Tensilized Tape 24mm",
            "sku": "SBL-TAPE-SST-03",
            "brand": "SBECO",
            "tagline": "High-tack single-sided tape with heavy-duty mopp tensilized backing.",
            "badge": "Heavy Duty",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough mopp tensilized backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "24mm",
              "Length": "66m",
              "Backing Type": "MOPP Tensilized",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "single-sided-tapes-4",
            "name": "SBECO Premium Single-Sided Crepe Paper Tape 36mm",
            "sku": "SBL-TAPE-SST-04",
            "brand": "Tesa",
            "tagline": "High-tack single-sided tape with heavy-duty crepe paper backing.",
            "badge": "Premium",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough crepe paper backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "36mm",
              "Length": "66m",
              "Backing Type": "Crepe Paper",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "single-sided-tapes-5",
            "name": "SBECO Premium Single-Sided Colored Vinyl Tape 48mm",
            "sku": "SBL-TAPE-SST-05",
            "brand": "SBECO",
            "tagline": "High-tack single-sided tape with heavy-duty colored vinyl backing.",
            "badge": "Popular",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough colored vinyl backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "48mm",
              "Length": "66m",
              "Backing Type": "Colored Vinyl",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "single-sided-tapes-6",
            "name": "SBECO Premium Single-Sided Reinforced Paper Tape 12mm",
            "sku": "SBL-TAPE-SST-06",
            "brand": "Tesa",
            "tagline": "High-tack single-sided tape with heavy-duty reinforced paper backing.",
            "badge": "Essential",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough reinforced paper backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "12mm",
              "Length": "66m",
              "Backing Type": "Reinforced Paper",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "single-sided-tapes-7",
            "name": "SBECO Premium Single-Sided Plain Kraft Tape 18mm",
            "sku": "SBL-TAPE-SST-07",
            "brand": "SBECO",
            "tagline": "High-tack single-sided tape with heavy-duty plain kraft backing.",
            "badge": "Heavy Duty",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough plain kraft backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "18mm",
              "Length": "66m",
              "Backing Type": "Plain Kraft",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "single-sided-tapes-8",
            "name": "SBECO Premium Single-Sided PET Film Tape 24mm",
            "sku": "SBL-TAPE-SST-08",
            "brand": "Tesa",
            "tagline": "High-tack single-sided tape with heavy-duty pet film backing.",
            "badge": "Premium",
            "description": "Multi-purpose single-sided adhesive tape featuring a tough pet film backing. Coated with a pressure-sensitive adhesive that offers excellent initial grab, clean release, and resistance to shearing forces. Perfect for general packaging, bundling, coding, and sealing.",
            "specs": {
              "Width": "24mm",
              "Length": "66m",
              "Backing Type": "PET Film",
              "Adhesive Base": "Natural Rubber",
              "Tensile Strength": "45 N/25mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "single-sided-tapes-1",
              "single-sided-tapes-2",
              "single-sided-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "anti-slip-tapes",
        "name": "Anti-Skid/Anti-Slip Tapes",
        "products": [
          {
            "id": "anti-slip-tapes-1",
            "name": "SBECO Anti-Slip Standard 60-Grit Tape 25mm - Black",
            "sku": "SBL-TAPE-AST-01",
            "brand": "SBECO",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Popular",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "25mm",
              "Length": "18m",
              "Grit Level": "Standard 60-Grit",
              "Carrier Material": "PVC",
              "Color": "Black",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-2",
              "anti-slip-tapes-3",
              "anti-slip-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "anti-slip-tapes-2",
            "name": "SBECO Anti-Slip Coarse 36-Grit Tape 50mm - Yellow",
            "sku": "SBL-TAPE-AST-02",
            "brand": "3M",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Essential",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "50mm",
              "Length": "18m",
              "Grit Level": "Coarse 36-Grit",
              "Carrier Material": "PVC",
              "Color": "Yellow",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-3",
              "anti-slip-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-3",
            "name": "SBECO Anti-Slip Extra Coarse Tape 100mm - Yellow/Black Stripes",
            "sku": "SBL-TAPE-AST-03",
            "brand": "SBECO",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Heavy Duty",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "100mm",
              "Length": "18m",
              "Grit Level": "Extra Coarse",
              "Carrier Material": "PVC",
              "Color": "Yellow/Black Stripes",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-4",
            "name": "SBECO Anti-Slip Resilient Rubberized Tape 150mm - Clear",
            "sku": "SBL-TAPE-AST-04",
            "brand": "3M",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Premium",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "150mm",
              "Length": "18m",
              "Grit Level": "Resilient Rubberized",
              "Carrier Material": "PVC",
              "Color": "Clear",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-5",
            "name": "SBECO Anti-Slip Glow-in-the-Dark Safewalk Tape 25mm - Red",
            "sku": "SBL-TAPE-AST-05",
            "brand": "SBECO",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Popular",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "25mm",
              "Length": "18m",
              "Grit Level": "Glow-in-the-Dark Safewalk",
              "Carrier Material": "PVC",
              "Color": "Red",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-6",
            "name": "SBECO Anti-Slip Standard 60-Grit Tape 50mm - Glow-in-the-Dark",
            "sku": "SBL-TAPE-AST-06",
            "brand": "3M",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Essential",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "50mm",
              "Length": "18m",
              "Grit Level": "Standard 60-Grit",
              "Carrier Material": "PVC",
              "Color": "Glow-in-the-Dark",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "anti-slip-tapes-7",
            "name": "SBECO Anti-Slip Coarse 36-Grit Tape 100mm - Black",
            "sku": "SBL-TAPE-AST-07",
            "brand": "SBECO",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Heavy Duty",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "100mm",
              "Length": "18m",
              "Grit Level": "Coarse 36-Grit",
              "Carrier Material": "PVC",
              "Color": "Black",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-8",
            "name": "SBECO Anti-Slip Extra Coarse Tape 150mm - Yellow",
            "sku": "SBL-TAPE-AST-08",
            "brand": "3M",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Premium",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "150mm",
              "Length": "18m",
              "Grit Level": "Extra Coarse",
              "Carrier Material": "PVC",
              "Color": "Yellow",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-9",
            "name": "SBECO Anti-Slip Resilient Rubberized Tape 25mm - Yellow/Black Stripes",
            "sku": "SBL-TAPE-AST-09",
            "brand": "SBECO",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Popular",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "25mm",
              "Length": "18m",
              "Grit Level": "Resilient Rubberized",
              "Carrier Material": "PVC",
              "Color": "Yellow/Black Stripes",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "anti-slip-tapes-10",
            "name": "SBECO Anti-Slip Glow-in-the-Dark Safewalk Tape 50mm - Clear",
            "sku": "SBL-TAPE-AST-10",
            "brand": "3M",
            "tagline": "Industrial safety anti-skid tape with heavy-duty abrasive grit for stairs, ramps, and floors.",
            "badge": "Essential",
            "description": "Highly durable slip-resistant tape designed to prevent accidents in high-traffic work environments. Made with premium silicon carbide grit bonded to a tough PVC carrier. Resistant to water, oil, chemicals, and UV exposure. Suitable for indoor and outdoor applications on concrete, metal, wood, and tile surfaces.",
            "specs": {
              "Width": "50mm",
              "Length": "18m",
              "Grit Level": "Glow-in-the-Dark Safewalk",
              "Carrier Material": "PVC",
              "Color": "Clear",
              "OSHA Compliant": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "anti-slip-tapes-1",
              "anti-slip-tapes-2",
              "anti-slip-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "pvc-repair-structural",
        "name": "PVC/Repair/Structural",
        "products": [
          {
            "id": "pvc-repair-structural-1",
            "name": "SBECO All-Weather Heavy PVC Repair Tape 48mm",
            "sku": "SBL-TAPE-PRS-01",
            "brand": "SBECO",
            "tagline": "Tough all-weather heavy pvc repair tape for demanding industrial repair and structural applications.",
            "badge": "Popular",
            "description": "Specially formulated repair and structural tape designed for extreme durability. Features an extra-thick, weather-resistant carrier combined with a high-performance adhesive that bonds instantly to dry and damp surfaces. UV and chemical resistant, ensuring long-lasting outdoor performance.",
            "specs": {
              "Width": "48mm",
              "Length": "10m",
              "Material": "PVC",
              "Tensile Strength": "90 N/25mm",
              "Waterproof": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "pvc-repair-structural-2",
              "pvc-repair-structural-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "pvc-repair-structural-2",
            "name": "SBECO Heavy Duty Structural Bond Tape 50mm",
            "sku": "SBL-TAPE-PRS-02",
            "brand": "Tesa",
            "tagline": "Tough heavy duty structural bond tape for demanding industrial repair and structural applications.",
            "badge": "Essential",
            "description": "Specially formulated repair and structural tape designed for extreme durability. Features an extra-thick, weather-resistant carrier combined with a high-performance adhesive that bonds instantly to dry and damp surfaces. UV and chemical resistant, ensuring long-lasting outdoor performance.",
            "specs": {
              "Width": "50mm",
              "Length": "10m",
              "Material": "Modified Acrylic",
              "Tensile Strength": "90 N/25mm",
              "Waterproof": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "pvc-repair-structural-1",
              "pvc-repair-structural-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "pvc-repair-structural-3",
            "name": "SBECO Fibre-Reinforced Leak Patch Tape 100mm",
            "sku": "SBL-TAPE-PRS-03",
            "brand": "SBECO",
            "tagline": "Tough fibre-reinforced leak patch tape for demanding industrial repair and structural applications.",
            "badge": "Heavy Duty",
            "description": "Specially formulated repair and structural tape designed for extreme durability. Features an extra-thick, weather-resistant carrier combined with a high-performance adhesive that bonds instantly to dry and damp surfaces. UV and chemical resistant, ensuring long-lasting outdoor performance.",
            "specs": {
              "Width": "100mm",
              "Length": "10m",
              "Material": "Modified Acrylic",
              "Tensile Strength": "90 N/25mm",
              "Waterproof": "Yes"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "pvc-repair-structural-1",
              "pvc-repair-structural-2"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "reflective-filament",
        "name": "Reflective & Filament",
        "products": [
          {
            "id": "reflective-filament-1",
            "name": "SBECO Mono-Directional Filament Tape 25mm",
            "sku": "SBL-TAPE-RFT-01",
            "brand": "SBECO",
            "tagline": "High-tensile reinforcement and safety signaling with premium mono-directional filament tape.",
            "badge": "Popular",
            "description": "Engineered for high performance, our filament tapes feature fiberglass strands embedded in the backing to provide extreme tensile strength for heavy-duty bundling and palletizing. Our reflective tapes use micro-prismatic technology to deliver maximum nighttime reflectivity, complying with global transport safety standards.",
            "specs": {
              "Width": "25mm",
              "Length": "55m",
              "Type": "Mono-Directional Filament",
              "Tensile Strength": "350 N/25mm",
              "Reflective Standard": "N/A"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "reflective-filament-2",
              "reflective-filament-3",
              "reflective-filament-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "reflective-filament-2",
            "name": "SBECO Bi-Directional Cross-Weave Filament Tape 50mm",
            "sku": "SBL-TAPE-RFT-02",
            "brand": "3M",
            "tagline": "High-tensile reinforcement and safety signaling with premium bi-directional cross-weave filament tape.",
            "badge": "Essential",
            "description": "Engineered for high performance, our filament tapes feature fiberglass strands embedded in the backing to provide extreme tensile strength for heavy-duty bundling and palletizing. Our reflective tapes use micro-prismatic technology to deliver maximum nighttime reflectivity, complying with global transport safety standards.",
            "specs": {
              "Width": "50mm",
              "Length": "55m",
              "Type": "Bi-Directional Cross-Weave Filament",
              "Tensile Strength": "350 N/25mm",
              "Reflective Standard": "N/A"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "reflective-filament-1",
              "reflective-filament-3",
              "reflective-filament-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "reflective-filament-3",
            "name": "SBECO High-Visibility Prismatic Reflective Tape 25mm",
            "sku": "SBL-TAPE-RFT-03",
            "brand": "SBECO",
            "tagline": "High-tensile reinforcement and safety signaling with premium high-visibility prismatic reflective tape.",
            "badge": "Heavy Duty",
            "description": "Engineered for high performance, our filament tapes feature fiberglass strands embedded in the backing to provide extreme tensile strength for heavy-duty bundling and palletizing. Our reflective tapes use micro-prismatic technology to deliver maximum nighttime reflectivity, complying with global transport safety standards.",
            "specs": {
              "Width": "25mm",
              "Length": "45m",
              "Type": "High-Visibility Prismatic Reflective",
              "Tensile Strength": "N/A",
              "Reflective Standard": "DOT-C2 Certified"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "reflective-filament-1",
              "reflective-filament-2",
              "reflective-filament-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "reflective-filament-4",
            "name": "SBECO DOT-C2 Conspicuity Reflective Tape 50mm",
            "sku": "SBL-TAPE-RFT-04",
            "brand": "3M",
            "tagline": "High-tensile reinforcement and safety signaling with premium dot-c2 conspicuity reflective tape.",
            "badge": "Premium",
            "description": "Engineered for high performance, our filament tapes feature fiberglass strands embedded in the backing to provide extreme tensile strength for heavy-duty bundling and palletizing. Our reflective tapes use micro-prismatic technology to deliver maximum nighttime reflectivity, complying with global transport safety standards.",
            "specs": {
              "Width": "50mm",
              "Length": "45m",
              "Type": "DOT-C2 Conspicuity Reflective",
              "Tensile Strength": "N/A",
              "Reflective Standard": "DOT-C2 Certified"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "reflective-filament-1",
              "reflective-filament-2",
              "reflective-filament-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "strapping-surface-protection",
        "name": "Strapping & Surface Protection",
        "products": [
          {
            "id": "strapping-surface-protection-1",
            "name": "SBECO Tensilized MOPP Strapping Tape 19mm",
            "sku": "SBL-TAPE-SSP-01",
            "brand": "SBECO",
            "tagline": "Securing loads and protecting delicate surfaces from scratches, dust, and transit damage.",
            "badge": "Popular",
            "description": "This product line serves two critical logistics needs. Our tensilized strapping tapes offer high tensile strength and stretch resistance for holding heavy appliance parts and pallets secure. Our surface protection films feature a low-tack, residue-free adhesive designed to shield polished surfaces from scratches and scuffs during manufacturing, transport, and installation.",
            "specs": {
              "Width": "19mm",
              "Length": "100m",
              "Material": "MOPP",
              "Adhesive Type": "Low-Tack Acrylic",
              "Clean Removal": "Yes, guaranteed"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "strapping-surface-protection-2",
              "strapping-surface-protection-3",
              "strapping-surface-protection-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "strapping-surface-protection-2",
            "name": "SBECO Low-Tack Glass Protection Film Tape 50mm",
            "sku": "SBL-TAPE-SSP-02",
            "brand": "Tesa",
            "tagline": "Securing loads and protecting delicate surfaces from scratches, dust, and transit damage.",
            "badge": "Essential",
            "description": "This product line serves two critical logistics needs. Our tensilized strapping tapes offer high tensile strength and stretch resistance for holding heavy appliance parts and pallets secure. Our surface protection films feature a low-tack, residue-free adhesive designed to shield polished surfaces from scratches and scuffs during manufacturing, transport, and installation.",
            "specs": {
              "Width": "50mm",
              "Length": "100m",
              "Material": "LDPE",
              "Adhesive Type": "Low-Tack Acrylic",
              "Clean Removal": "Yes, guaranteed"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "strapping-surface-protection-1",
              "strapping-surface-protection-3",
              "strapping-surface-protection-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "strapping-surface-protection-3",
            "name": "SBECO Stainless Steel Surface Shield Tape 100mm",
            "sku": "SBL-TAPE-SSP-03",
            "brand": "SBECO",
            "tagline": "Securing loads and protecting delicate surfaces from scratches, dust, and transit damage.",
            "badge": "Heavy Duty",
            "description": "This product line serves two critical logistics needs. Our tensilized strapping tapes offer high tensile strength and stretch resistance for holding heavy appliance parts and pallets secure. Our surface protection films feature a low-tack, residue-free adhesive designed to shield polished surfaces from scratches and scuffs during manufacturing, transport, and installation.",
            "specs": {
              "Width": "100mm",
              "Length": "100m",
              "Material": "MOPP",
              "Adhesive Type": "Low-Tack Acrylic",
              "Clean Removal": "Yes, guaranteed"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "strapping-surface-protection-1",
              "strapping-surface-protection-2",
              "strapping-surface-protection-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "strapping-surface-protection-4",
            "name": "SBECO Heavy-Duty Metal Panel Protector Tape 19mm",
            "sku": "SBL-TAPE-SSP-04",
            "brand": "Tesa",
            "tagline": "Securing loads and protecting delicate surfaces from scratches, dust, and transit damage.",
            "badge": "Premium",
            "description": "This product line serves two critical logistics needs. Our tensilized strapping tapes offer high tensile strength and stretch resistance for holding heavy appliance parts and pallets secure. Our surface protection films feature a low-tack, residue-free adhesive designed to shield polished surfaces from scratches and scuffs during manufacturing, transport, and installation.",
            "specs": {
              "Width": "19mm",
              "Length": "100m",
              "Material": "MOPP",
              "Adhesive Type": "Low-Tack Acrylic",
              "Clean Removal": "Yes, guaranteed"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "strapping-surface-protection-1",
              "strapping-surface-protection-2",
              "strapping-surface-protection-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "fabric-duct-floor-marking",
        "name": "Fabric/Duct/Floor Marking (Tesa)",
        "products": [
          {
            "id": "fabric-duct-floor-marking-1",
            "name": "Tesa Premium PE-Coated Duct Tape 48mm",
            "sku": "SBL-TAPE-FDF-01",
            "brand": "Tesa",
            "tagline": "High-durability premium pe-coated duct tape for harsh industrial environments, labeling, and repairs.",
            "badge": "Popular",
            "description": "Manufactured in partnership with Tesa, this category offers exceptional wear resistance and adhesion. The duct and fabric tapes utilize a high-mesh woven fabric carrier coated with polyethylene for waterproofing, making them perfect for sealing pipes, bundling heavy rods, and managing A/V cables. The floor marking tapes feature a tough vinyl base with vibrant colors for setting boundaries and traffic lanes in warehouses.",
            "specs": {
              "Width": "48mm",
              "Length": "33m",
              "Backing Material": "PE-Coated Fabric",
              "Adhesive Base": "Natural Rubber",
              "Thickness": "0.27mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "fabric-duct-floor-marking-2",
              "fabric-duct-floor-marking-3",
              "fabric-duct-floor-marking-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "fabric-duct-floor-marking-2",
            "name": "Tesa Heavy-Duty Floor Lane Marking Tape 50mm",
            "sku": "SBL-TAPE-FDF-02",
            "brand": "SBECO",
            "tagline": "High-durability heavy-duty floor lane marking tape for harsh industrial environments, labeling, and repairs.",
            "badge": "Essential",
            "description": "Manufactured in partnership with Tesa, this category offers exceptional wear resistance and adhesion. The duct and fabric tapes utilize a high-mesh woven fabric carrier coated with polyethylene for waterproofing, making them perfect for sealing pipes, bundling heavy rods, and managing A/V cables. The floor marking tapes feature a tough vinyl base with vibrant colors for setting boundaries and traffic lanes in warehouses.",
            "specs": {
              "Width": "50mm",
              "Length": "33m",
              "Backing Material": "PVC Vinyl",
              "Adhesive Base": "Natural Rubber",
              "Thickness": "0.27mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "fabric-duct-floor-marking-1",
              "fabric-duct-floor-marking-3",
              "fabric-duct-floor-marking-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "fabric-duct-floor-marking-3",
            "name": "Tesa Professional Grade Fabric Gaffer Tape 48mm",
            "sku": "SBL-TAPE-FDF-03",
            "brand": "Tesa",
            "tagline": "High-durability professional grade fabric gaffer tape for harsh industrial environments, labeling, and repairs.",
            "badge": "Heavy Duty",
            "description": "Manufactured in partnership with Tesa, this category offers exceptional wear resistance and adhesion. The duct and fabric tapes utilize a high-mesh woven fabric carrier coated with polyethylene for waterproofing, making them perfect for sealing pipes, bundling heavy rods, and managing A/V cables. The floor marking tapes feature a tough vinyl base with vibrant colors for setting boundaries and traffic lanes in warehouses.",
            "specs": {
              "Width": "48mm",
              "Length": "33m",
              "Backing Material": "PE-Coated Fabric",
              "Adhesive Base": "Natural Rubber",
              "Thickness": "0.27mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "fabric-duct-floor-marking-1",
              "fabric-duct-floor-marking-2",
              "fabric-duct-floor-marking-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "fabric-duct-floor-marking-4",
            "name": "Tesa Hazard Diagonal Warning Tape 50mm",
            "sku": "SBL-TAPE-FDF-04",
            "brand": "SBECO",
            "tagline": "High-durability hazard diagonal warning tape for harsh industrial environments, labeling, and repairs.",
            "badge": "Premium",
            "description": "Manufactured in partnership with Tesa, this category offers exceptional wear resistance and adhesion. The duct and fabric tapes utilize a high-mesh woven fabric carrier coated with polyethylene for waterproofing, making them perfect for sealing pipes, bundling heavy rods, and managing A/V cables. The floor marking tapes feature a tough vinyl base with vibrant colors for setting boundaries and traffic lanes in warehouses.",
            "specs": {
              "Width": "50mm",
              "Length": "33m",
              "Backing Material": "PVC Vinyl",
              "Adhesive Base": "Natural Rubber",
              "Thickness": "0.27mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "fabric-duct-floor-marking-1",
              "fabric-duct-floor-marking-2",
              "fabric-duct-floor-marking-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "insulation-cloth-wire",
        "name": "Insulation/Cloth/Wire (Tesa)",
        "products": [
          {
            "id": "insulation-cloth-wire-1",
            "name": "Tesa PVC Electrical Insulation Tape 19mm",
            "sku": "SBL-TAPE-ICW-01",
            "brand": "Tesa",
            "tagline": "Advanced insulation and wire harness wrapping tape for automotive and electrical applications.",
            "badge": "Popular",
            "description": "Professional-grade electrical and wire management tapes by Tesa. Includes premium PVC tape providing reliable electrical insulation up to 600V, PET fleece tape engineered for wrapping automotive wire harnesses to damp noise and resist abrasion, and self-fusing rubber tape for watertight electrical splices. Designed to perform under high temperatures and harsh mechanical conditions.",
            "specs": {
              "Width": "19mm",
              "Length": "20m",
              "Dielectric Strength": "600V",
              "Temperature Range": "-40°C to 125°C",
              "Abrasion Resistance": "Class B (LV 312)"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "insulation-cloth-wire-2",
              "insulation-cloth-wire-3",
              "insulation-cloth-wire-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "insulation-cloth-wire-2",
            "name": "Tesa Fleece Wire Harness Wrap Tape 25mm",
            "sku": "SBL-TAPE-ICW-02",
            "brand": "SBECO",
            "tagline": "Advanced insulation and wire harness wrapping tape for automotive and electrical applications.",
            "badge": "Essential",
            "description": "Professional-grade electrical and wire management tapes by Tesa. Includes premium PVC tape providing reliable electrical insulation up to 600V, PET fleece tape engineered for wrapping automotive wire harnesses to damp noise and resist abrasion, and self-fusing rubber tape for watertight electrical splices. Designed to perform under high temperatures and harsh mechanical conditions.",
            "specs": {
              "Width": "25mm",
              "Length": "20m",
              "Dielectric Strength": "N/A",
              "Temperature Range": "-40°C to 125°C",
              "Abrasion Resistance": "Class B (LV 312)"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "insulation-cloth-wire-1",
              "insulation-cloth-wire-3",
              "insulation-cloth-wire-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "insulation-cloth-wire-3",
            "name": "Tesa Self-Fusing Rubber Splicing Tape 19mm",
            "sku": "SBL-TAPE-ICW-03",
            "brand": "Tesa",
            "tagline": "Advanced insulation and wire harness wrapping tape for automotive and electrical applications.",
            "badge": "Heavy Duty",
            "description": "Professional-grade electrical and wire management tapes by Tesa. Includes premium PVC tape providing reliable electrical insulation up to 600V, PET fleece tape engineered for wrapping automotive wire harnesses to damp noise and resist abrasion, and self-fusing rubber tape for watertight electrical splices. Designed to perform under high temperatures and harsh mechanical conditions.",
            "specs": {
              "Width": "19mm",
              "Length": "20m",
              "Dielectric Strength": "N/A",
              "Temperature Range": "-40°C to 125°C",
              "Abrasion Resistance": "Class B (LV 312)"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "insulation-cloth-wire-1",
              "insulation-cloth-wire-2",
              "insulation-cloth-wire-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "insulation-cloth-wire-4",
            "name": "Tesa High-Temp Glass Cloth Insulation Tape 25mm",
            "sku": "SBL-TAPE-ICW-04",
            "brand": "SBECO",
            "tagline": "Advanced insulation and wire harness wrapping tape for automotive and electrical applications.",
            "badge": "Premium",
            "description": "Professional-grade electrical and wire management tapes by Tesa. Includes premium PVC tape providing reliable electrical insulation up to 600V, PET fleece tape engineered for wrapping automotive wire harnesses to damp noise and resist abrasion, and self-fusing rubber tape for watertight electrical splices. Designed to perform under high temperatures and harsh mechanical conditions.",
            "specs": {
              "Width": "25mm",
              "Length": "20m",
              "Dielectric Strength": "N/A",
              "Temperature Range": "-40°C to 125°C",
              "Abrasion Resistance": "Class B (LV 312)"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "insulation-cloth-wire-1",
              "insulation-cloth-wire-2",
              "insulation-cloth-wire-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "veneer-tapes",
        "name": "Veneer Tapes",
        "products": [
          {
            "id": "veneer-tapes-1",
            "name": "SBECO Veneer Perforated Gummed Paper Tape 12mm",
            "sku": "SBL-TAPE-VNR-01",
            "brand": "SBECO",
            "tagline": "High-quality water-activated paper tape for wood veneer splicing and furniture manufacturing.",
            "badge": "Popular",
            "description": "Designed specifically for the woodworking industry, our veneer splicing tapes are made from thin, high-tensile kraft paper coated with water-activated starch adhesive. Once dried, it holds veneer sheets tightly edge-to-edge during the pressing process. Perforations allow moisture to escape, preventing veneer blistering. Sanded off easily after pressing.",
            "specs": {
              "Width": "12mm",
              "Length": "200m",
              "Paper Type": "Perforated Kraft",
              "Adhesive Type": "Water-Activated Starch",
              "Thickness": "0.07mm"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "veneer-tapes-2",
              "veneer-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "veneer-tapes-2",
            "name": "SBECO Veneer Solid Kraft Veneer Splicing Tape 16mm",
            "sku": "SBL-TAPE-VNR-02",
            "brand": "SBECO",
            "tagline": "High-quality water-activated paper tape for wood veneer splicing and furniture manufacturing.",
            "badge": "Essential",
            "description": "Designed specifically for the woodworking industry, our veneer splicing tapes are made from thin, high-tensile kraft paper coated with water-activated starch adhesive. Once dried, it holds veneer sheets tightly edge-to-edge during the pressing process. Perforations allow moisture to escape, preventing veneer blistering. Sanded off easily after pressing.",
            "specs": {
              "Width": "16mm",
              "Length": "200m",
              "Paper Type": "Solid Kraft",
              "Adhesive Type": "Water-Activated Starch",
              "Thickness": "0.07mm"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "veneer-tapes-1",
              "veneer-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "veneer-tapes-3",
            "name": "SBECO Veneer Ultra-Thin Wet-Activated Paper Tape 20mm",
            "sku": "SBL-TAPE-VNR-03",
            "brand": "SBECO",
            "tagline": "High-quality water-activated paper tape for wood veneer splicing and furniture manufacturing.",
            "badge": "Heavy Duty",
            "description": "Designed specifically for the woodworking industry, our veneer splicing tapes are made from thin, high-tensile kraft paper coated with water-activated starch adhesive. Once dried, it holds veneer sheets tightly edge-to-edge during the pressing process. Perforations allow moisture to escape, preventing veneer blistering. Sanded off easily after pressing.",
            "specs": {
              "Width": "20mm",
              "Length": "200m",
              "Paper Type": "Solid Kraft",
              "Adhesive Type": "Water-Activated Starch",
              "Thickness": "0.07mm"
            },
            "imageUrl": "/images/kraft_tape.png",
            "similar": [
              "veneer-tapes-1",
              "veneer-tapes-2"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "static-non-adhesive",
        "name": "Static/Non-Adhesive",
        "products": [
          {
            "id": "static-non-adhesive-1",
            "name": "SBECO Self-Clinging Static Protection Film Tape 50mm",
            "sku": "SBL-TAPE-SNA-01",
            "brand": "SBECO",
            "tagline": "Non-adhesive, static cling or high-contrast barrier tape for marking and safety marking.",
            "badge": "Popular",
            "description": "This category features non-adhesive films. The static protective tape relies on electrostatic cling to shield screens, glass, and polished electronics from dirt and scratches without any adhesive residue. The caution barricade tape is a lightweight, high-tensile polyethylene strip printed with high-contrast safety warnings, ideal for blocking off hazardous areas or construction sites.",
            "specs": {
              "Width": "50mm",
              "Length": "100m",
              "Material": "Static Cling PVC",
              "Adhesive-Free": "Yes",
              "UV Stable": "Yes"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "static-non-adhesive-2"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "static-non-adhesive-2",
            "name": "SBECO Non-Adhesive PE Barricade Caution Tape 75mm",
            "sku": "SBL-TAPE-SNA-02",
            "brand": "SBECO",
            "tagline": "Non-adhesive, static cling or high-contrast barrier tape for marking and safety marking.",
            "badge": "Essential",
            "description": "This category features non-adhesive films. The static protective tape relies on electrostatic cling to shield screens, glass, and polished electronics from dirt and scratches without any adhesive residue. The caution barricade tape is a lightweight, high-tensile polyethylene strip printed with high-contrast safety warnings, ideal for blocking off hazardous areas or construction sites.",
            "specs": {
              "Width": "75mm",
              "Length": "200m",
              "Material": "Polyethylene",
              "Adhesive-Free": "Yes",
              "UV Stable": "Yes"
            },
            "imageUrl": "/images/clear_tape.png",
            "similar": [
              "static-non-adhesive-1"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      },
      {
        "id": "packing-tapes",
        "name": "Packing Tapes",
        "products": [
          {
            "id": "packing-tapes-1",
            "name": "SBECO Packing Tape 48mm - Clear (Heavy-Duty Acrylic Carton Sealing)",
            "sku": "SBL-TAPE-PKG-01",
            "brand": "SBECO",
            "tagline": "Premium-grade clear packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Popular",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "48mm",
              "Length": "66m",
              "Color": "Clear",
              "Type": "Heavy-Duty Acrylic Carton Sealing",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-2",
              "packing-tapes-3",
              "packing-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "packing-tapes-2",
            "name": "SBECO Packing Tape 50mm - Brown (Silent Unwind Packaging)",
            "sku": "SBL-TAPE-PKG-02",
            "brand": "SBECO",
            "tagline": "Premium-grade brown packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Essential",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "50mm",
              "Length": "66m",
              "Color": "Brown",
              "Type": "Silent Unwind Packaging",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-3",
              "packing-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "packing-tapes-3",
            "name": "SBECO Packing Tape 75mm - Clear (Industrial Hot-Melt Packing)",
            "sku": "SBL-TAPE-PKG-03",
            "brand": "SBECO",
            "tagline": "Premium-grade clear packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Heavy Duty",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "75mm",
              "Length": "66m",
              "Color": "Clear",
              "Type": "Industrial Hot-Melt Packing",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-4"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "packing-tapes-4",
            "name": "SBECO Packing Tape 48mm - Brown (Cold-Storage Freezer Grade)",
            "sku": "SBL-TAPE-PKG-04",
            "brand": "SBECO",
            "tagline": "Premium-grade brown packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Premium",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "48mm",
              "Length": "66m",
              "Color": "Brown",
              "Type": "Cold-Storage Freezer Grade",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "packing-tapes-5",
            "name": "SBECO Packing Tape 50mm - Clear (Heavy-Duty Acrylic Carton Sealing)",
            "sku": "SBL-TAPE-PKG-05",
            "brand": "SBECO",
            "tagline": "Premium-grade clear packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Popular",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "50mm",
              "Length": "66m",
              "Color": "Clear",
              "Type": "Heavy-Duty Acrylic Carton Sealing",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "packing-tapes-6",
            "name": "SBECO Packing Tape 75mm - Brown (Silent Unwind Packaging)",
            "sku": "SBL-TAPE-PKG-06",
            "brand": "SBECO",
            "tagline": "Premium-grade brown packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Essential",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "75mm",
              "Length": "66m",
              "Color": "Brown",
              "Type": "Silent Unwind Packaging",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": true
          },
          {
            "id": "packing-tapes-7",
            "name": "SBECO Packing Tape 48mm - Clear (Industrial Hot-Melt Packing)",
            "sku": "SBL-TAPE-PKG-07",
            "brand": "SBECO",
            "tagline": "Premium-grade clear packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Heavy Duty",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "48mm",
              "Length": "66m",
              "Color": "Clear",
              "Type": "Industrial Hot-Melt Packing",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          },
          {
            "id": "packing-tapes-8",
            "name": "SBECO Packing Tape 50mm - Brown (Cold-Storage Freezer Grade)",
            "sku": "SBL-TAPE-PKG-08",
            "brand": "SBECO",
            "tagline": "Premium-grade brown packing tape with high shear adhesion for secure carton sealing.",
            "badge": "Premium",
            "description": "Reliable packing tape engineered for securing packages in shipping and storage. Available in clear and brown options, these tapes feature a thick BOPP backing combined with heavy acrylic or hot-melt adhesives. Offers superior tensile strength, ensuring boxes remain closed under vibration, handling, and varying temperature conditions.",
            "specs": {
              "Width": "50mm",
              "Length": "66m",
              "Color": "Brown",
              "Type": "Cold-Storage Freezer Grade",
              "Thickness": "0.052mm"
            },
            "imageUrl": "/images/carton_tape.png",
            "similar": [
              "packing-tapes-1",
              "packing-tapes-2",
              "packing-tapes-3"
            ],
            "dateAdded": "2026-06-01",
            "isBestSeller": false
          }
        ]
      }
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
