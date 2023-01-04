import { Center, Flex, Text } from "@chakra-ui/react"
import sdLogo from '@assets/sdLogo.svg';
import hederaLogo from '@assets/hederaLogo.svg';
import polygonLogo from '@assets/polygonLogo.svg';
import fantomLogo from '@assets/fantomLogo.svg';
import terraLogo from '@assets/terraLogo.svg';
import nearLogo from '@assets/nearLogo.svg';
import Image from 'next/image';

const tabsData = [
    {
        title:"All chains",
        link:"#"
    },
    {
        title:"SD",
        link:"#",
        logo:sdLogo
    },
    {
        title:"Hedera",
        link:"#",
        logo:hederaLogo
    },
    {
        title:"Polygon",
        link:"#",
        logo:polygonLogo
    },
    {
        title:"Fantom",
        link:"#",
        logo:fantomLogo
    },
    {
        title:"Terra 2.0",
        link:"#",
        logo:terraLogo
    },
    {
        title:"Near",
        link:"#",
        logo:nearLogo
    }
]

const Tabs = ()=>{
    return(
    <Flex gap="8px">
        {tabsData.map((item,index)=>{
            return <Center key={index} h="56px" p="8px 16px" border="1px solid" borderColor="#424242" borderRadius="12px" backgroundColor="#2C2C2E" 
            _hover={{borderColor:"#FFFFFF", color:"#FFF"}} color="#8F8F8F" cursor="pointer">
               {item.logo && <Image src={item.logo} alt='logo' width={40} height={40} />}
              <Text marginLeft="8px" fontSize="16px" fontWeight="500" >{item.title}</Text>
            </Center>
        })}
    </Flex>
    )
}

export default Tabs