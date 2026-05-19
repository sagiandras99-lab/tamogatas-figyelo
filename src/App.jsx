import { useState } from 'react'
/*import './App.css' */
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import GrantCard from './components/GrantCard'
import GrantDetails from './components/GrantDetails'
import EmptyState from './components/EmptyState'
import { grants } from './data/grants'

export default function App() {
  const [selectedGrant, setSelectedGrant] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTargetGroup, setSelectedTargetGroup] = useState('Összes')
  const [selectedCategory, setSelectedCategory] = useState('Összes')
  const [selectedStatus, setSelectedStatus] = useState('Összes')

  // Szűrési és keresési logika
  const filteredGrants = grants.filter((grant) => {
    // Keresés
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch =
      grant.title.toLowerCase().includes(searchLower) ||
      grant.shortSummary.toLowerCase().includes(searchLower) ||
      grant.targetGroups.some((g) => g.toLowerCase().includes(searchLower)) ||
      grant.categories.some((c) => c.toLowerCase().includes(searchLower))

    if (!matchesSearch) return false

    // Célcsoport szűrő
    if (selectedTargetGroup !== 'Összes') {
      if (!grant.targetGroups.includes(selectedTargetGroup)) return false
    }

    // Kategória szűrő
    if (selectedCategory !== 'Összes') {
      if (!grant.categories.includes(selectedCategory)) return false
    }

    // Státusz szűrő
    if (selectedStatus !== 'Összes') {
      if (grant.status !== selectedStatus) return false
    }

    return true
  })

  // Ha ki van választva egy támogatás, mutasd a részletező nézetet
  if (selectedGrant) {
    return (
      <GrantDetails
        grant={selectedGrant}
        onBack={() => setSelectedGrant(null)}
      />
    )
  }

  // Lista nézet
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />

      {/* Felső információs sáv */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-blue-900 text-center">
            💡 Az összefoglalók tájékoztató jellegűek. A hivatalos pályázati felhívást mindig ellenőrizd.
          </p>
        </div>
      </div>

      {/* Hero szekció */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Támogatás Figyelő
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              EU-s és hazai támogatások érthetően, egy helyen
            </p>

            {/* Keresőmező */}
            <div className="mb-8">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>
        </div>
      </section>

      {/* Fő tartalom */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Szűrők */}
        <div className="mb-12">
          <FilterBar
            selectedTargetGroup={selectedTargetGroup}
            selectedCategory={selectedCategory}
            selectedStatus={selectedStatus}
            onTargetGroupChange={setSelectedTargetGroup}
            onCategoryChange={setSelectedCategory}
            onStatusChange={setSelectedStatus}
          />
        </div>

        {/* Támogatási kártyák */}
        {filteredGrants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGrants.map((grant) => (
              <GrantCard
                key={grant.id}
                grant={grant}
                onSelect={setSelectedGrant}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Támogatás Figyelő. Tájékoztató jellegű weboldal.
          </p>
        </div>
      </footer>
    </div>
  )
}
