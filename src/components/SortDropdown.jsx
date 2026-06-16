const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'brand', label: 'By Brand' },
  { value: 'newest', label: 'Newest First' },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-2.5" id="sort-dropdown">
      <label
        htmlFor="sort-select"
        className="hidden md:inline text-[10px] tracking-[.1em] uppercase text-gray-400 font-semibold whitespace-nowrap"
      >
        Sort by
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-[10px] tracking-[.06em] uppercase font-semibold pl-3 pr-8 py-2.5 border border-gray-200 bg-white text-gray-700 cursor-pointer outline-none appearance-none hover:border-gray-400 focus:border-accent transition-colors duration-200 rounded-lg"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b7280' fill='none' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
          }}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
