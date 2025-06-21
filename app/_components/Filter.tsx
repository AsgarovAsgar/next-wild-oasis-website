'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Button({
  children,
  handleFilter,
  filter,
  activeFilter
}: {
  children: React.ReactNode
  filter: string
  handleFilter: (filter: string) => void
  activeFilter: string
}) {
  return (
    <button
      className={`px-5 py-2 transition-colors hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-700 text-primary-50' : ''}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}

export default function Filter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const activeFilter = searchParams.get('capacity') ?? 'all'

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams)
    params.set('capacity', filter)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex border border-primary-800">
      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1&mdash;3 guests
      </Button>
      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4&mdash;7 guests
      </Button>
      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8+ guests
      </Button>
    </div>
  )
}
