import { Flex, Box, Text } from "@chakra-ui/react"
import Image from 'next/image';
import moment from 'moment'

const MoreBlogs = ({ trendingData }: any) => {
    return (
        <Flex gap="16px" marginBottom="420px">
            {trendingData.map((item: any, index: number) => {
                return <Box overflow="hidden" key={index} border="1px solid" borderColor="#424242" borderRadius="12px" backgroundColor="#2C2C2E" w="311px"
                    color="#8F8F8F" cursor="pointer">
                    {item.image && <Image src={item.image} alt='logo' width={311} height={175} />}
                    <Flex h="calc(100% - 175px)" p="16px" flexDirection="column" justifyContent="space-between">
                        <Text fontSize="24px" fontWeight="700px" color="#FFFFFF" >{item.title}</Text>
                        <Box mt="16px">
                            <Text>{moment(item.date).format("MMM D")}</Text>
                        </Box>
                    </Flex>
                </Box>
            })}
        </Flex>
    )
}
export default MoreBlogs