// import { unstable_noStore as noStore } from 'next/cache'

import { getCabins } from '@/app/_lib/data-service'

import CabinCard from './CabinCard'

export default async function CabinList({ filter }: { filter: string }) {
  // for the partial prerendering
  // noStore()

  const cabins = await getCabins()

  if (cabins.length === 0) return null

  let displayedCabins
  if (filter === 'all') displayedCabins = cabins
  if (filter === 'small') displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3)
  if (filter === 'medium') displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 6)
  if (filter === 'large') displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8)

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  )
}
