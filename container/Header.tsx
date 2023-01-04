import { Flex, Button } from "@chakra-ui/react"
import staderLogo from '@assets/staderLogo.svg'
import Image from 'next/image';
import Counter from "./Counter";

const Header = () => {
    return (
        <Flex justifyContent="space-between" marginTop="44px" >
            <Counter/>
            <Image src={staderLogo} alt="logo" />
            <Flex gap="40px" >
                <NavTab name={"Networks"}/>
                <NavTab name={"Governance"}/>
                <NavTab name={"Social"}/>
                <NavTab name={"Developers"}/>
            </Flex>
        </Flex>
    )
}
export default Header

const NavTab = ({name}:any) => {
    return (
        <Button colorScheme='teal' variant='link' color="#FFFFFF" fontSize="18px" fontWeight="500px" >
            {name}
        </Button>
    )
}