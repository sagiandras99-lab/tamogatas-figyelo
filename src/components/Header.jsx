export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
              Támogatás Figyelő
            </h1>
          </div>



          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
