# TODO — Strapping Solutions category structure

## Step 1: Verify data + category nesting
- [x] Inspect `src/data/products.js` Strapping Solutions section.
- [x] Ensure Tools has nested subcategories: `tensioners`, `sealers`, `cutters`.
- [ ] Add/adjust Machinery placement as **a subcategory under Strapping Solutions** (per user: option B).


## Step 2: Add Tools-only brand filter/sort in catalog UI
- [ ] Update `src/pages/Catalog.jsx` to read query params.
- [ ] When browsing Strapping Solutions → Tools branch, show a brand filter UI.
- [ ] Filter products by brand only in that Tools context.
- [ ] Keep existing category pills + global sorting intact.

## Step 3: Validate sidebar routing compatibility
- [ ] Confirm `src/components/CategorySidebar.jsx` writes `category`, `sub`, `nested` params.
- [ ] If needed, adjust navigation in sidebar for Tools brand filter state.

## Step 4: Test
- [ ] Run the project and confirm:
  - Tools brand filter appears only under Strapping Solutions → Tools.
  - Switching to other categories hides the Tools brand filter.
  - Tensioners/Sealers/Cutters work and filtering is consistent.

