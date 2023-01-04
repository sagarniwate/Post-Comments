import { useState, useEffect } from "react"
import axios from "axios"

const useNetwork =(footerArr:any)=>{
    const [footerData, setfooterData] = useState<any>(footerArr)

    const getFooterData = () => {
        const url = "http://192.168.1.157:8081"
        axios.get(`${url}/list_network`).then((res) => {
            console.log('res', res.data)
            setfooterData([...footerArr, {title:"Network", data:res.data}])
        })
    }

    const refresh =()=>{
        getFooterData()
    }

    useEffect(() => {
        refresh()
    }, [])

    return {footerData, refresh}


}
export default useNetwork