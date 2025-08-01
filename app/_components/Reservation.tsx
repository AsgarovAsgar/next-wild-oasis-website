import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service'
import ReservationForm from '@/app/_components/ReservationForm'
import DateSelector from '@/app/_components/DateSelector'

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)])

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  )
}
