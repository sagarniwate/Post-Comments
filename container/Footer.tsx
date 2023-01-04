import { Flex, Box, Text, Button } from '@chakra-ui/react'
import logo from '@assets/logo.svg';
import Image from 'next/image';
import { useMediaQuery } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import useNetwork from 'hooks/useNetwork';
interface footerArrProps {
    title: string,
    data: string[]
}

const Footer = () => {
    const linkcolor = '#8C8C8C';
    const footerArr: footerArrProps[] = [
        // { title: 'Network', data: ['Hedera', 'Polygon', 'Fantom', 'Terra 2.0', 'Terra Classic'] },
        { title: 'Social', data: ['FAQ', 'Blogs', 'Twitter', 'Telegram', 'Discord', 'Medium'] },
        { title: 'Developers', data: ['GitHub', 'Litepaper'] }
    ];
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    const {footerData, refresh} = useNetwork(footerArr);

    return (
        <Box position={'fixed'} bottom='0px' height={isLargerThan800 ? "390px" : ""} backgroundColor='#1D1D1D' width="100%" left="0px" color='white'>
            <div>
                <ViewChange isDesktop={isLargerThan800}>
                    <Flex direction='column' gap='12px' mb={isLargerThan800 ? '' : '64px'}>
                        <Flex alignItems='center' gap='8px' mb='20px'>
                            <Image src={logo} alt='logo' />
                            <Text fontSize={'24px'} fontWeight='400'>Stader</Text>
                        </Flex>
                        <Text color={linkcolor} fontSize='12px'>Copyright © 2022 Stader</Text>
                        <Text color={linkcolor} fontSize='12px'>Terms of service</Text>
                    </Flex>
                    <Flex justifyContent='space-between'>
                        {footerData.map((item: footerArrProps, index: number) => {
                            return <Flex key={index} mx={index === 1 ? '70px' : ""}>
                                <div>
                                    <Text mb="24px" fontSize='16px'>{item.title}</Text>
                                    {/* <Flex justifyContent="space-between" gap="30px" > */}
                                        <Flex direction='column' gap='16px' >
                                            {item.data.map((element, idx) => {
                                                return <Text key={idx} fontSize='14px' cursor='pointer' color={linkcolor}>{element}</Text>
                                            })}
                                        </Flex>
                                        
                                    {/* </Flex> */}
                                </div>
                            </Flex>
                        })}
                    </Flex>
                </ViewChange>

            </div>
        </Box>
    )
}
const ViewChange = ({ isDesktop, children }: any) => {
    if (isDesktop) {
        return <Flex justifyContent={'space-around'} pt="80px">
            {children}
        </Flex>
    }
    return <Box p="16px">
        {children}
    </Box>
}
export default Footer
