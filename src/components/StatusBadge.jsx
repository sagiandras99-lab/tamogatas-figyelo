export default function StatusBadge({ status }) {
  const statusStyles = {
    "Aktív": "bg-green-100 text-green-800 border-green-300",
    "Hamarosan indul": "bg-blue-100 text-blue-800 border-blue-300",
    "Hamarosan zárul": "bg-orange-100 text-orange-800 border-orange-300",
    "Lezárt": "bg-gray-100 text-gray-800 border-gray-300",
  };

  const style = statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border-2 ${style}`}
    >
      {status}
    </span>
  );
}
