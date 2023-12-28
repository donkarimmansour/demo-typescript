'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  
  
  useEffect(() => {
   console.error("error.......................... : ", error.message)
  }, [error])
 
  return (
    <div>

      <h2>Something went wrong!</h2>

      <button onClick={() => reset() }>   
        Try again
      </button>

      <p>{error.message}</p>

    </div>
  )
}