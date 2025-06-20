import { Suspense } from 'react'

import CabinList from '@/app/_components/CabinList'
import Filter from '@/app/_components/Filter'
import Spinner from '@/app/_components/Spinner'

// not available because searchParams makes the page dynamic
// export const revalidate = 3600

export const metadata = {
  title: 'Cabins',
  description: 'Our luxury cabins'
}

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all'

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">Our Luxury Cabins</h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful
        mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub
        under the stars. Enjoy nature&apos;s beauty in your own little home away from home. The perfect spot for a
        peaceful, calm vacation. Welcome to paradise.
      </p>

      <div className="mb-4 flex justify-end">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  )
}
