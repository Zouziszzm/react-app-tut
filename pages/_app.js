import {ChakraProvider} from "@chakra-ui/react"
import { defaultHead } from "next/head.js"
import Layout from "../components/layouts/main"

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website  