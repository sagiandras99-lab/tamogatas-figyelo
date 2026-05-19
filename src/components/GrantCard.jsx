import StatusBadge from "./StatusBadge";
import CategoryPill from "./CategoryPill";

export default function GrantCard({ grant, onSelect }) {
  return (
    <article
      onClick={() => onSelect(grant)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-200 p-6 cursor-pointer border border-gray-100"
    >
      <header className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
          {grant.title}
        </h3>
        <StatusBadge status={grant.status} />
      </header>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{grant.shortSummary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {grant.targetGroups.slice(0, 3).map((g) => (
          <CategoryPill key={g} text={g} type="targetGroup" />
        ))}
        {grant.targetGroups.length > 3 && (
          <span className="text-xs text-gray-500 self-center">+{grant.targetGroups.length - 3}</span>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-700 mb-4 border-t pt-4">
        <div>
          <div className="text-xs text-gray-500">Támogatás</div>
          <div className="font-semibold text-gray-900">{grant.amountLabel}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Határidő</div>
          <div className="font-semibold text-gray-900">{grant.deadline}</div>
        </div>
      </div>

      <footer className="flex gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(grant);
          }}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Részletek
        </button>
        <a
          href={grant.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
        >
          Forrás
        </a>
      </footer>
      
    </article>
  );
}
