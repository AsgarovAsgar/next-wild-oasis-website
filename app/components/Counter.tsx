'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="border p-4">
      {/* <p>Data length: {length}</p> */}
      <button className="rounded-md bg-blue-500 p-2 text-white" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  )
}
