import React, { useEffect, useState } from 'react'
import { Box, Text, Flex, Center, Button, Input } from '@chakra-ui/react'
import Comments from './Comments'
const axios = require('axios').default;

const PostComments = () => {

    const baseUrl = "http://localhost:4000/posts"
    const [value, setValue] = useState("")
    const [list, setList] = useState([])
    // const temp = [
    //     { title: '', username: '', comments: [] },
    //     { title: '', comments: [] },
    //     { title: '', comments: [] }
    // ]
    const [comment, setComment] = useState("")
    const [userStatus, setUserStatus] = useState(false)
    const [user, setUser] = useState("")

    const handlePost = (data: any) => {
        if (!user) {
            setUserStatus(true)
        } else {
            let dataToSubmit = { title: data, comments: [], username: user }
            // let postData: any = [...list]
            // postData.push({ title: data, comments: [], username: user })
            axios.post(`${baseUrl}/add`, {data:dataToSubmit}).then((res:any)=>{
                console.log("res1", res)
                getData()
            })
            // setList(postData)
            setValue("")
            setUser('');
            setUserStatus(false)
        }
    }

    const handleCommentData = (data: any, index: number) => {
        // let commentData: any = [...list]
        // commentData[index].comments.push(data)
        axios.post(`${baseUrl}/${index}/comment/add`, {data:data}).then((res:any)=>{
            console.log("res2", res)
            getData()
        })
        // setList(commentData)
        setComment("")
    }

    const getData = ()=>{
        axios.get(baseUrl).then((res:any)=>{
            console.log("res", res)
            setList(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <Box marginLeft="50px">
            <Center marginTop="20px" color="#FFFFFF" fontWeight="700" fontSize="30px" > Post & Comments </Center>
            <Box marginY="20px" borderRadius="10px" bg="tomato" w="100%" h="500px" p={4} color="#FFFFFF">
                {list.map((item: any, index) => {
                    return <Box key={index} >
                        <Text> {item.username || user}: {item.title} </Text>
                        <Comments handleCommentData={handleCommentData} index={index} />
                        {item.comments?.map((comment: any, j: number) => {
                            return <Box key={j}>
                                <Text display="flex" justifyContent="flex-end" > {comment} </Text>
                            </Box>
                        })}
                    </Box>
                })}
            </Box>
            <Flex justifyContent="space-around">
                <Input w="300px" color="#FFFFFF" placeholder="Add your post here..." value={value} onChange={(e) => setValue(e.target.value)} />
                <Button marginLeft="5px" colorScheme='teal' variant='outline' onClick={() => handlePost(value)} >Post</Button>
                {userStatus ? <Flex justifyContent="space-between" alignItems="center" >
                    <Input marginLeft="10px" color="#FFFFFF" placeholder="Add user name..." value={user} onChange={(e) => setUser(e.target.value)} />
                </Flex> : <></>}
            </Flex>
        </Box>
    )
}
export default PostComments