'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { DateRange } from 'react-day-picker'

interface ReservationContextType {
  range: DateRange | undefined
  setRange: (range: DateRange | undefined) => void
  resetRange: () => void
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined)

const initialState: DateRange = {
  from: undefined,
  to: undefined
}

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState)
  const resetRange = () => setRange(initialState)

  return <ReservationContext.Provider value={{ range, setRange, resetRange }}>{children}</ReservationContext.Provider>
}

function useReservation(): ReservationContextType {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider')
  }
  return context
}

export { ReservationProvider, useReservation }
