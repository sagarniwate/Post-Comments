import { useEffect, useState } from "react"
import axios from "axios"

const useUser = ()=>{
    const [userData, setUserData] = useState<any>([])

    const getAxios = ()=>{
      const url = "http://192.168.1.157:8081"
      axios.get(`${url}/list_users`).then((res)=>{
        console.log('res', res.data)
        setUserData(res.data)
      })
    }
    
    useEffect(()=>{
      getAxios()
    },[])

    return {userData}
}
export default useUser