import React, { useState, useEffect } from 'react'
import { Box, Text, Flex, Center, Button, Input, CloseButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import axios from 'axios'

const ToDo = () => {

    const [value, setValue] = useState("")
    const [list, setList] = useState([])
    const [update, setUpdate] = useState(false)
    const [index, setIndex] = useState(0)

    const baseUrl = "http://localhost:4000"

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleList = (data: any) => {
        let listData: any = [...list]
        if (!update) {
            // listData.push(data)  
            axios.post(`${baseUrl}/add`,{data:data}).then((res)=>{
                console.log('res2', res.data)
                getData()
            })         
        } else {
            // listData[index] = value
            axios.put(`${baseUrl}/edit/${index}`,{data:value}).then((res)=>{
                console.log('res3', res.data)
                getData()
            })
            setUpdate(false)
        }      
        setList(listData)
        setValue("")
    }

    const handleDel = (a: any, item:any) => {
        let data = [...list]
        if (a > -1) {
            // data.splice(a, 1)
            axios.delete(`${baseUrl}/delete/${a}`,{data:item}).then((res)=>{
                console.log('res5', res.data)
                getData()
            })
        }
        return setList(data)
    }

    const handleEdit = (n: any) => {
        setUpdate(!update)
        let data = [...list]
        setValue(data[n])
        setIndex(n)
    }

    const getData = ()=>{
        axios.get(baseUrl).then((res)=>{
            console.log("res", res)
            setList(res.data)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <Box w="400px">
            <Center marginTop="20px" color="#FFFFFF" fontWeight="700" fontSize="30px" > ToDo </Center>
            <Flex marginY="20px" justifyContent="space-around">
                <Input w="300px" color="#FFFFFF" placeholder="Add to do here..." value={value} onChange={handleChange} />
                <Button marginLeft="5px" colorScheme='teal' variant='outline' onClick={() => handleList(value)}>{!update ? "Add" : "update"}</Button>
            </Flex>
            <Box borderRadius="10px" bg="tomato" w="100%" h="300px" p={4} color="#FFFFFF">

                {list.map((item, index) => {
                    return <Flex key={index} justifyContent="space-between" alignItems="center" >
                        {`${index + 1}. ${item}`}
                        <Flex alignItems="center">
                            <EditIcon onClick={() => handleEdit(index)} />
                            <CloseButton onClick={() => handleDel(index,item)} />
                        </Flex>
                    </Flex>
                })}
            </Box>
        </Box>
    )
}
export default ToDo
