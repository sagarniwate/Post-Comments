import React, { useState } from 'react'
import { Box, Text, Flex, Center, Button, Input } from '@chakra-ui/react'


const PostComments = () => {

    const [value, setValue] = useState<string>("")
    const [list, setList] = useState([])
    const [inputStatus, setInputStatus] = useState(false)
    const [comVal, setComVal] = useState("")

    const jsonViewer = {"total":{"value":41715,"relation":"eq","page":1},"max_score":1,"hits":[{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"wPLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H27","Variable_name":"Additions to fixed assets","Variable_category":"Financial position","Value":"80","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465717"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"wfLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H28","Variable_name":"Disposals of fixed assets","Variable_category":"Financial position","Value":"35","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465720"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"wvLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H29","Variable_name":"Other assets","Variable_category":"Financial position","Value":"291","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465723"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"w_LVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H30","Variable_name":"Total equity and liabilities","Variable_category":"Financial position","Value":"1,231","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465726"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"xPLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H31","Variable_name":"Shareholders funds or owners equity","Variable_category":"Financial position","Value":"356","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465729"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"xfLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H32","Variable_name":"Current liabilities","Variable_category":"Financial position","Value":"624","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465732"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"xvLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars (millions)","Variable_code":"H33","Variable_name":"Other liabilities","Variable_category":"Financial position","Value":"252","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465736"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"x_LVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars","Variable_code":"H34","Variable_name":"Total income per employee count","Variable_category":"Financial ratios","Value":"665,600","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465739"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"yPLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Dollars","Variable_code":"H35","Variable_name":"Surplus per employee count","Variable_category":"Financial ratios","Value":"40,900","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465742"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"yfLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H36","Variable_name":"Current ratio","Variable_category":"Financial ratios","Value":"120","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465745"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"yvLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H37","Variable_name":"Quick ratio","Variable_category":"Financial ratios","Value":"82","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465748"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"y_LVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H38","Variable_name":"Margin on sales of goods for resale","Variable_category":"Financial ratios","Value":"41","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465751"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"zPLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H39","Variable_name":"Return on equity","Variable_category":"Financial ratios","Value":"40","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465754"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"zfLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H40","Variable_name":"Return on total assets","Variable_category":"Financial ratios","Value":"11","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465757"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"zvLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 4","Industry_code_NZSIOC":"GH135","Industry_name_NZSIOC":"Non-Store and Commission Based Retailing","Units":"Percentage","Variable_code":"H41","Variable_name":"Liabilities structure","Variable_category":"Financial ratios","Value":"29","Industry_code_ANZSIC06":"ANZSIC06 groups G431 and G432","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465760"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"z_LVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 3","Industry_code_NZSIOC":"GH21","Industry_name_NZSIOC":"Accommodation and Food Services","Units":"Dollars (millions)","Variable_code":"H01","Variable_name":"Total income","Variable_category":"Financial performance","Value":"16,060","Industry_code_ANZSIC06":"ANZSIC06 groups H440, H451, H452, and H453","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465763"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"0PLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 3","Industry_code_NZSIOC":"GH21","Industry_name_NZSIOC":"Accommodation and Food Services","Units":"Dollars (millions)","Variable_code":"H02","Variable_name":"Sales of goods not further processed","Variable_category":"Financial performance","Value":"3,341","Industry_code_ANZSIC06":"ANZSIC06 groups H440, H451, H452, and H453","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465766"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"0fLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 3","Industry_code_NZSIOC":"GH21","Industry_name_NZSIOC":"Accommodation and Food Services","Units":"Dollars (millions)","Variable_code":"H03","Variable_name":"Sales of other goods and services","Variable_category":"Financial performance","Value":"11,155","Industry_code_ANZSIC06":"ANZSIC06 groups H440, H451, H452, and H453","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465769"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"0vLVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 3","Industry_code_NZSIOC":"GH21","Industry_name_NZSIOC":"Accommodation and Food Services","Units":"Dollars (millions)","Variable_code":"H05","Variable_name":"Interest, dividends and donations","Variable_category":"Financial performance","Value":"92","Industry_code_ANZSIC06":"ANZSIC06 groups H440, H451, H452, and H453","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465772"}},{"_index":"1de19c3f-64f8-4c1c-9af9-a1f267c03b70","_type":"_doc","_id":"0_LVUYUBwDCaQ-VG6Qot","_score":1,"_source":{"Year":"2021","Industry_aggregation_NZSIOC":"Level 3","Industry_code_NZSIOC":"GH21","Industry_name_NZSIOC":"Accommodation and Food Services","Units":"Dollars (millions)","Variable_code":"H06","Variable_name":"Government funding, grants and subsidies","Variable_category":"Financial performance","Value":"1,263","Industry_code_ANZSIC06":"ANZSIC06 groups H440, H451, H452, and H453","sepana_job_id":"13fe4ece-3767-4fa2-b8b8-3331192a7ffc","sepana_indexing_datetime":"2022-12-27T04:27:31.465775"}}]}

    const handlePost = () => {
        let postData: any = [...list]
        postData.push({ title: value, comment: [], userName: '' })
        setList(postData)
        setValue("")
        console.log('value', value)
    }

    const handleComment = ()=>{
        let commentData:any = [...list]
        commentData.push({ title: comVal, comment: [], userName: '' })
        setList(commentData)
        setComVal("")
    }

    return (
        <Box>
            <Box marginTop="20px">
                <Center color="#FFFFFF"> Post Comments </Center>
                <Box height="300px" bg="lightcyan" w="100%" p="10px">
                    {list.map((item: any, index) => {
                        return <Box key={index}>
                            {item.title}
                        </Box>
                    })}
                    <Button colorScheme='teal' size='xs' marginY="5px" onClick={() => setInputStatus(!inputStatus)}>Comment</Button>
                    {inputStatus && <Flex>
                        <Input placeholder="Add comments here..." value={comVal} onChange={(e)=>setComVal(e.target.value)} />
                        <Button onClick={handleComment} >Add</Button>
                        </Flex>}
                </Box>
            </Box>
            <Flex>
                <Input placeholder="Add post here..." color="#FFFFFF" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={handlePost}>Post</Button>
            </Flex>



        </Box>
    )
}
export default PostComments
