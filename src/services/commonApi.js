import axios from "axios"

export const commonApi = async(httpmethod,url,reqbody)=>{
    const reqConfig ={
        method:httpmethod,
        url,
        data:reqbody,
        headers :{"content-type":"application/json"}
    }

    return await axios (reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}

