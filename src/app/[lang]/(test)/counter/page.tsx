"use client"

import React, { useMemo } from "react"
import { decrement, decrementByAmount, increment, incrementByAmount, useCounterSelector } from "@/client/state/features/counter/slice"
import { useAppDispatch, useAppSelector } from "@/client/providers/libs/hooks"

function Counter() {

  const { value, msg } = useAppSelector(useCounterSelector) 
  const dispatch = useAppDispatch()


  const message = useMemo(() => {

    return msg

  }, [msg]) 



  return (
    <div className="w-full ">

      <div className="flex justify-center gap-5">


        <button className="border-1px" aria-label="Increment value" onClick={() => dispatch(increment())} >
          Increment
        </button>

        <button className="border-1px" aria-label="Increment value" onClick={() => dispatch(incrementByAmount(10))} >
          IncrementBy 10
        </button>

        <h4>{value}</h4>

        <h2 style={{ marginBottom: 16 }}>{message}</h2>


        <button aria-label="Decrement value" onClick={() => dispatch(decrementByAmount(10))}>
          DecrementBy 10
        </button>

        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

      </div>


    </div>
  )
}

export default Counter