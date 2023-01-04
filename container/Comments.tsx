import React, { useState } from 'react'
import { Flex, Button, Input } from '@chakra-ui/react'

const Comments = ({ handleCommentData, index }: any) => {
    const [inputStatus, setInputStatus] = useState(false)
    const [comment, setComment] = useState("")
    const handleAddComment = (comment: any, index: number) => {
        setInputStatus(false);
        setComment('')
        handleCommentData(comment, index)
    }

    return <div>
        <Button marginY="10px" colorScheme='teal' size='xs' onClick={() => setInputStatus(!inputStatus)} >Comment</Button>
        {inputStatus && <Flex justifyContent="space-between" alignItems="center" >
            <Input marginY="10px" placeholder="comments..." value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button colorScheme='teal' marginLeft="5px" onClick={() => handleAddComment(comment, index)} >Add</Button>
        </Flex>}
    </div>
}
export default Comments