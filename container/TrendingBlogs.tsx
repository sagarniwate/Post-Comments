import {Flex, Box, Text} from "@chakra-ui/react"
import Image from 'next/image';
import stakeLogo from '@assets/stakeLogo.svg'
import moment from 'moment'

const TrendingBlogs = ({trendingData}:any)=>{
    return(
      <Box>
      <Flex w="996px" marginY="120px">
        <Box w="486px"><Image src={stakeLogo} alt="logo" /></Box>
        <Box w="486px" display="flex" justifyContent="center" flexDirection="column" marginLeft="24px" >
          <Text>{moment().format("MMM D, YYYY")}</Text>
          <Text fontWeight="600px" fontSize="32px" lineHeight="38px" marginY="16px">Ledger Wallet User Guide for Stader Near</Text>
          <Text fontWeight="400px" fontSize="16px">With the launch of NEAR Wallet Selector on Stader Near, we are live with Ledger Wallet. Ledger wallets are ... more</Text>
        </Box>
      </Flex>
      <Text color="#FFFFFF" fontSize="32px" fontWeight="600" marginY="32px">Trending</Text>
        <Flex gap="16px">
            {trendingData.map((item:any, index:number) => {
        return <Box overflow="hidden" key={index} border="1px solid" borderColor="#424242" borderRadius="12px" backgroundColor="#2C2C2E" w="311px"
        color="#8F8F8F" cursor="pointer">
          {item.image && <Image src={item.image} alt='logo' width={311} height={175} />}
        <Flex h="calc(100% - 175px)" p="16px" flexDirection="column" justifyContent="space-between">
          <Box>
            <Text fontSize="24px" fontWeight="700px" color="#FFFFFF" >{item.title}</Text>
            <Flex gap="12px" marginTop="16px">
              <Box display="flex" justifyContent="center" w="51px" backgroundColor="#424242" borderRadius="6px"
                _hover={{ borderColor: "#FFFFFF", color: "#FFF" }}>
                {item.tags[0]}
              </Box>
              <Box display="flex" justifyContent="center" w="51px" backgroundColor="#424242" borderRadius="6px"
                _hover={{ borderColor: "#FFFFFF", color: "#FFF" }}>
                {item.tags[1]}
              </Box>
            </Flex>
          </Box>
          <Box mt="16px">
          <Text>{moment(item.date).format("MMM D")}</Text>
          </Box>
        </Flex>
      </Box>
    })}
        </Flex>
        </Box>
    )
}
export default TrendingBlogs