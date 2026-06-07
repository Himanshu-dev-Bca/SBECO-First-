# New Categories - Sample Products & Data Structure

## Category 1: Tape and Tape Dispensers

### Products:
- **SBECO Carton Sealing Tape 50mm** (SBL-TAPE-CST-50) - Best Seller
- **SBECO Clear Packaging Tape 48mm** (SBL-TAPE-CLR-48) - Essential
- **SBECO Kraft Paper Tape 50mm** (SBL-TAPE-KFT-50) - Eco Friendly
- **SBECO Tape Dispenser Gun** (SBL-DISP-GUN) - Professional
- **SBECO Table-Top Tape Dispenser** (SBL-DISP-TBL) - Industrial

---

## Category 2: Strapping Solutions ⭐ (With Nested Structure)

### Subcategory: Straps
- **SBECO Manual PP Strap** (SBL-PPS-1)
- **SBECO Semi-Automatic PP Strap** (SBL-PPS-2)
- **SBECO Machine Grade PP Strap** (SBL-PPS-3)

### Subcategory: Tools
#### → Nested: Tensioners
- **SBECO PP Strap Tensioner ECO** (SBL-TEN-ECO)
- **SBECO PP Strap Tensioner PRO** (SBL-TEN-PRO)

#### → Nested: Sealers
- **SBECO PP Strap Sealer ECO** (SBL-SEL-ECO)
- **SBECO PP Strap Sealer PRO** (SBL-SEL-PRO)

#### → Nested: Cutters
- **SBECO PP Strap Cutter ECO** (SBL-CUT-ECO)
- **SBECO PP Strap Cutter PRO** (SBL-CUT-PRO)

### Subcategory: Seals
- **SBECO PP Strap Seals 12MM** (SBL-SEAL-12)
- **SBECO PP Strap Seals 15MM** (SBL-SEAL-15)
- **SBECO PP Strap Seals 19MM** (SBL-SEAL-19)

---

## Category 3: Power Tools

### Subcategory: Cordless Tools
- **SBECO Cordless Drill 18V** (SBL-DRL-18V) - Popular
- **SBECO Cordless Impact Driver 20V** (SBL-IMP-20V) - Professional

### Subcategory: Power Saws
- **SBECO Circular Saw 1200W** (SBL-SAW-CIR-1200) - Industrial
- **SBECO Jigsaw 600W** (SBL-SAW-JIG-600) - Versatile

---

## Category 4: Nailing and Stapling Solutions

### Subcategory: Nails
- **SBECO Finishing Nails 50mm** (SBL-NAIL-FIN-50) - Popular
- **SBECO Common Nails 75mm** (SBL-NAIL-COM-75) - Heavy Duty
- **SBECO Brad Nails 25mm** (SBL-NAIL-BRD-25) - Precision

### Subcategory: Staples
- **SBECO Industrial Staples 10mm** (SBL-STAPLE-10) - Industrial
- **SBECO Staples 12mm** (SBL-STAPLE-12) - Essential
- **SBECO Staples 8mm** (SBL-STAPLE-8) - Light Duty

### Subcategory: Stapling Guns
- **SBECO Pneumatic Stapler Gun** (SBL-GUN-STAPLE-PNM) - Industrial
- **SBECO Electric Stapler Gun 220V** (SBL-GUN-STAPLE-ELC) - Professional

---

## Category 5: Packaging Consumables

### Subcategory: Stretch Film
- **SBECO Stretch Film 500mm** (SBL-STRETCH-500) - Popular
- **SBECO Stretch Film 250mm** (SBL-STRETCH-250) - Value Pick

### Subcategory: Foam Products
- **SBECO Bubble Wrap 10mm** (SBL-BUBBLE-10) - Essential
- **SBECO Bubble Wrap 20mm** (SBL-BUBBLE-20) - Heavy Duty
- **SBECO Foam Sheets 50mm** (SBL-FOAM-50) - Premium

---

## Category 6: Facility Management

### Subcategory: Cleaning Supplies
- **SBECO Industrial Cleaner 5L** (SBL-CLEAN-IND-5) - Essential
- **SBECO Floor Cleaner 5L** (SBL-CLEAN-FLR-5) - Popular

### Subcategory: Safety Equipment
- **SBECO Nitrile Safety Gloves (Pair)** (SBL-GLOVE-NTR) - Essential
- **SBECO Safety Glasses (10-pack)** (SBL-GLASS-SAFE) - Essential
- **SBECO Industrial First Aid Kit** (SBL-KIT-AID) - Safety

---

## Data Structure Example

```javascript
{
  id: "strapping-solutions",
  name: "Strapping Solutions",
  description: "Complete strapping solutions including PP and PET straps...",
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
          tagline: "Manual grade PP strap in 12mm & 19mm widths...",
          badge: "Popular",
          description: "...",
          specs: {
            "Grade": "Manual",
            "Strap Width": "12mm, 19mm",
            "Thickness": "0.5mm",
            // ... more specs
          },
          imageUrl: "/images/pp_strap_rolls.png",
          consumables: [
            { name: "PP Strap Tensioner ECO", sku: "SBL-TEN-ECO", icon: "tool" }
          ],
          similar: ["pp-strap-semi-auto"],
          dateAdded: "2026-06-01",
          isBestSeller: true
        }
      ]
    },
    {
      id: "tools",
      name: "Tools",
      nestedSubcategories: [  // ← NEW: Nested structure
        {
          id: "tensioners",
          name: "Tensioners",
          products: [
            {
              id: "pp-tensioner-eco",
              name: "SBECO PP Strap Tensioner ECO",
              // ... product details
            }
          ]
        },
        {
          id: "sealers",
          name: "Sealers",
          products: [
            // ... products
          ]
        },
        {
          id: "cutters",
          name: "Cutters",
          products: [
            // ... products
          ]
        }
      ]
    }
  ]
}
```

---

## Key Data Points

### Total Products: 50+
### Total Subcategories: 15
### Categories with Nested Structure: 1 (Strapping Solutions)
### Nested Levels: 2 (Strapping Solutions > Tools > [Tensioners/Sealers/Cutters])

### Product Badges Used:
- Best Seller
- Popular
- Essential
- Professional
- Industrial
- Eco Friendly
- Heavy Duty
- Value Pick
- Machine Grade
- Automatic
- Mid Range
- Max Strength
- Versatile
- Precision
- Light Duty
- Safety

### Product Properties:
- **id**: Unique identifier
- **name**: Full product name
- **sku**: Stock Keeping Unit
- **brand**: Manufacturer/Brand
- **tagline**: Short description (2-3 words)
- **badge**: Category badge (Best Seller, Popular, etc.)
- **description**: Full product description (150-200 words)
- **specs**: Object with key-value specifications
- **imageUrl**: Path to product image
- **consumables**: Related accessories/products
- **similar**: Array of related product IDs
- **dateAdded**: Product addition date
- **isBestSeller**: Boolean flag for best sellers

---

## Sorting Options (Available on all categories)

1. Default
2. Best Seller
3. Latest Products
4. Name A–Z
5. Name Z–A
6. Brand

---

## UI Components Used (All Existing)

- Category Card (with image, name, product count)
- Product Grid (responsive 1-4 columns)
- Sort Dropdown
- Search Filter
- Product Detail Page
- Sidebar Navigation
- Breadcrumb Navigation
- Badge System

✅ **No new components created** - All styling and layouts reused from existing design.
