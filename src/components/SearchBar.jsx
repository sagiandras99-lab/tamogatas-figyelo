export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Keresés támogatásra, célcsoportra vagy témára..."
        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base placeholder-gray-500 shadow-sm hover:border-gray-300"
      />
    </div>
  );
}
