import StatusBadge from "./StatusBadge";
import CategoryPill from "./CategoryPill";

export default function GrantDetails({ grant, onBack }) {
  if (!grant) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Pályázat nem található
          </h1>
          <p className="text-gray-600 mb-6">
            A keresett pályázat nem található az aktuális adatlistában.
          </p>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white py-3 px-5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Vissza a támogatásokhoz
          </button>
        </div>
      </div>
    );
  }

  const plainExplanation =
    grant.plainExplanation ||
    grant.shortDescription ||
    "Ehhez a pályázathoz jelenleg csak a hivatalos forrásból származó alapadatok érhetők el.";

  const goodFor =
    Array.isArray(grant.goodFor) && grant.goodFor.length
      ? grant.goodFor
      : Array.isArray(grant.targetGroups)
        ? grant.targetGroups
        : ["Nincs automatikusan meghatározva"];

  const usableFor =
    Array.isArray(grant.usableFor) && grant.usableFor.length
      ? grant.usableFor
      : Array.isArray(grant.categories)
        ? grant.categories
        : ["Nincs automatikusan meghatározva"];

  const warnings =
    Array.isArray(grant.warnings) && grant.warnings.length
      ? grant.warnings
      : [
          "A részletes feltételeket mindig a hivatalos pályázati felhívásban kell ellenőrizni.",
          "A beadási időszak és a keretösszeg változhat.",
          "Az itt látható összefoglaló tájékoztató jellegű.",
        ];

  const amountLabel =
    grant.amountLabel ||
    formatAmountLabel(grant.amount) ||
    "Nincs megadva";

  const intensity = grant.intensity || "Nincs megadva";

  const deadline =
    grant.deadline ||
    grant.applicationPeriod ||
    "Nincs megadva";

  const officialUrl =
    grant.officialUrl ||
    grant.sourceUrl ||
    grant.sourceSearchUrl ||
    "https://www.palyazat.gov.hu/palyazatok/palyazatkereso";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Vissza a támogatásokhoz
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-8 border border-gray-100">
          <div>
            <div className="flex justify-between items-start mb-5 gap-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {grant.title}
              </h1>
              <StatusBadge status={grant.status} />
            </div>
            <p className="text-gray-500 font-medium text-sm">
              {grant.code}
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
            <p className="text-gray-800 leading-relaxed">
              {plainExplanation}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">
                Kinek való?
              </h2>
              <ul className="space-y-3">
                {goodFor.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">
                Mire használható?
              </h2>
              <ul className="space-y-3">
                {usableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 py-8 px-6 bg-gray-50 rounded-xl border border-gray-200">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Támogatási összeg
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {amountLabel}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Intenzitás: {intensity}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Támogatás típusa
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {grant.supportType || "Nincs megadva"}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Beadási időszak / határidő
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {deadline}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Mire kell figyelni?
            </h2>
            <div className="space-y-3">
              {warnings.map((warning, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-orange-50 p-4 rounded-lg border border-orange-200"
                >
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{warning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 py-6 border-t border-gray-200">
            <div>
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                Célcsoportok
              </h2>
              <div className="flex flex-wrap gap-2">
                {(grant.targetGroups || []).map((group) => (
                  <CategoryPill key={group} text={group} type="targetGroup" />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                Témakörök
              </h2>
              <div className="flex flex-wrap gap-2">
                {(grant.categories || []).map((cat) => (
                  <CategoryPill key={cat} text={cat} type="category" />
                ))}
              </div>
            </div>
          </div>

          {grant.program || grant.operationalProgram ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              {grant.program ? (
                <p className="text-sm text-gray-700">
                  <strong>Fejlesztési program:</strong> {grant.program}
                </p>
              ) : null}

              {grant.operationalProgram ? (
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Operatív program:</strong> {grant.operationalProgram}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-900">
              <strong>Jogi figyelmeztetés:</strong> Az összefoglaló tájékoztató jellegű,
              nem helyettesíti a hivatalos pályázati felhívást vagy szakértői tanácsadást.
            </p>
          </div>

          <div className="flex gap-4 pt-6">
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Hivatalos forrás meglátogatása
            </a>

            <button
              onClick={onBack}
              className="flex-1 border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-medium hover:bg-blue-50 transition-colors"
            >
              Vissza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatAmountLabel(amount) {
  if (!amount) return null;

  const min = amount.rawMin || formatHuf(amount.min);
  const max = amount.rawMax || formatHuf(amount.max);

  if (min && max) return `${min} - ${max}`;
  if (max) return `Legfeljebb ${max}`;
  if (min) return `Legalább ${min}`;

  return null;
}

function formatHuf(value) {
  if (!value) return null;

  return new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  }).format(value);
}