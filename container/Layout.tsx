import { Flex } from "@chakra-ui/react"
import React from "react"

interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {

    return <Flex width="100%" alignItems="center" flexDirection="column" backgroundColor="#000">
        <Flex width="100%" alignItems="center" flexDirection="column" maxW="996px">
        {children}
        </Flex>
    </Flex>
}

export default Layout