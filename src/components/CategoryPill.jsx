export default function CategoryPill({ text, type = "category" }) {
  const typeStyles = {
    category: "bg-blue-100 text-blue-700 border border-blue-200",
    targetGroup: "bg-purple-100 text-purple-700 border border-purple-200",
  };

  const style = typeStyles[type] || typeStyles.category;

  return (
    <span
      className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${style}`}
    >
      {text}
    </span>
  );
}
