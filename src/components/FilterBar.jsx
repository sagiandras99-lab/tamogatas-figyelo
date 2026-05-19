const targetGroups = [
  "Összes",
  "Vállalkozás",
  "Önkormányzat",
  "Civil szervezet",
  "Magánszemély",
  "Kutatóhely",
  "Agrár szereplő",
];

const categories = [
  "Összes",
  "Digitalizáció",
  "Energetika",
  "Innováció",
  "Képzés",
  "Eszközbeszerzés",
  "Kutatás-fejlesztés",
  "Agrár",
];

const statuses = [
  "Összes",
  "Aktív",
  "Hamarosan indul",
  "Hamarosan zárul",
  "Lezárt",
];

function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={`
        rounded-full px-3 py-1.5 text-sm font-medium transition
        ${
          active
            ? "bg-blue-600 text-white shadow-sm"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }
      `}
    >
      {label}
    </button>
  );
}

function FilterGroup({ title, items, selected, onChange }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <FilterButton
            key={item}
            label={item}
            active={selected === item}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default function FilterBar({
  selectedTargetGroup,
  selectedCategory,
  selectedStatus,
  onTargetGroupChange,
  onCategoryChange,
  onStatusChange,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5">
        <FilterGroup
          title="Célcsoport"
          items={targetGroups}
          selected={selectedTargetGroup}
          onChange={onTargetGroupChange}
        />

        <FilterGroup
          title="Témakör"
          items={categories}
          selected={selectedCategory}
          onChange={onCategoryChange}
        />

        <FilterGroup
          title="Státusz"
          items={statuses}
          selected={selectedStatus}
          onChange={onStatusChange}
        />
      </div>
    </section>
  );
}