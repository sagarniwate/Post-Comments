import { Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const tick = ()=>{
        setCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (
        <Box color="#FAFAFA" fontWeight="700" fontSize="30px" >
            {count}
        </Box>
    )
}

export default Counter