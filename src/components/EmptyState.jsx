export default function EmptyState() {
  return (
    <div className="text-center py-20 px-4">
      <div className="mb-6">
        <svg
          className="w-20 h-20 mx-auto text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Nincs találat a megadott szűrésre
      </h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Próbálj kevesebb szűrőt használni vagy más keresőszót megadni.
      </p>
    </div>
  );
}
