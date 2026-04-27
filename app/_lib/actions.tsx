'use server'

import { signIn, signOut } from '@/app/_lib/auth'
import { auth } from './auth'
import { supabase } from './supabase'
import { revalidatePath } from 'next/cache'
import { getBookings } from './data-service'

export async function updateGuest(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error('You must be logged in')

  const nationalID = formData.get('nationalID')
  const [nationality, countryFlag] = formData.get('nationality')?.toString().split('%') ?? []
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('Please enter a valid national ID')
  }
  const updateData = {
    nationalID,
    nationality,
    countryFlag
  }

  const { error } = await supabase.from('guests').update(updateData).eq('id', session.user.guestId)

  if (error) throw new Error('Guest could not be updated')
  revalidatePath('/account/profile')
}

export async function deleteReservation(bookingId) {
  const session = await auth()
  if (!session) throw new Error('You must be logged in')

  const guestBookings = await getBookings(session?.user?.guestId)
  const guestBookingIds = guestBookings.map((booking) => booking.id)
  if (!guestBookingIds.includes(bookingId)) throw new Error('You are not allowed to delete this reservation')
  console.log('guestBookingIds', guestBookingIds)
  console.log('deleting', bookingId)

  const { error } = await supabase.from('bookings').delete().eq('id', bookingId)
  console.log('err', error)
  if (error) throw new Error('Booking could not be deleted')
  revalidatePath('/account/reservations')
}
export async function signInAction() {
  await signIn('google', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}
