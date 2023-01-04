import { useState, useEffect } from 'react';
import Head from 'next/head'
import Footer from '@container/Footer'
import { Box, Text, Input, InputGroup, InputLeftElement, Flex, Center, Button } from '@chakra-ui/react'
import Tabs from '@container/Tabs'
import searchIcon from '@assets/searchIcon.svg';
import trending1 from '@assets/trending1.svg';
import trending2 from '@assets/trending2.svg';
import trending3 from '@assets/trending3.svg';
import Image from 'next/image';
import TrendingBlogs from '../container/TrendingBlogs'
import MoreBlogs from '@container/MoreBlogs'
import Header from '@container/Header'
import axios from 'axios';
import useUser from 'hooks/useUser';

const trendingData = [
  {
    image: trending1,
    title: "The Hedera DeFi Alliance is Here!",
    link: "#",
    tags: ["Tag 1", "Tag 2"],
    date: new Date()
  },
  {
    image: trending2,
    title: "Liquid Staking 101",
    link: "#",
    tags: ["Tag 1", "Tag 2"],
    date: new Date()
  },
  {
    image: trending3,
    title: "Coming right up HBARX V2 !!!",
    link: "#",
    tags: ["Tag 1", "Tag 2"],
    date: new Date()
  }
]

export default function Home() {

  const {userData} = useUser()

  return (
    <Box>
      <Head>
        <title>Stader Blog</title>
        <meta name="description" content="Stader blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <Box display="flex" gap="8px" flexDirection="row" marginTop="20px" justifyContent="center" alignItems="center" >
      {/* <Button onClick={getAxios}>Data</Button> */}
        {userData.map((item:any, index:number)=>{
          return <Box key={index}>
             <Text color="#FFFFFF"> {item.profession} </Text>
          </Box>
        })}
      </Box>
      
      <Text marginTop="64px" display="flex" justifyContent="center" color="#FFFFFF" fontSize="54px" fontWeight="700">The Blog</Text>
      <Center w="100%">
        <InputGroup w="auto">
          <InputLeftElement pointerEvents='none'>
            <Box marginTop="80px">
              <Image src={searchIcon} alt="logo" />
            </Box>
          </InputLeftElement>
          <Input placeholder="Search here..." backgroundColor="#2C2C2E" w="640px" borderRadius="12px" height="56px" marginY="32px" />
        </InputGroup>
      </Center>
      <Tabs />
      <TrendingBlogs trendingData={trendingData}/>
      <Text color="#FFFFFF" fontSize="32px" fontWeight="600" marginBottom="32px" marginTop="120px">More from blogs</Text>
      <MoreBlogs trendingData={trendingData}/>
      <Footer />
    </Box>
  )
}
