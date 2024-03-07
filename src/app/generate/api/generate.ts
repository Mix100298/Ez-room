import axios from "axios"

export function getImagebyID(id: string) {
    try {
        //const response = await axios.get(``)
        return { url: "mock url", id: 'id from parameter' + id }
    } catch (e) {
        console.log(e)
    }

}

export async function setPrompt(prompt : string) {
    try {
       const response = await axios.post("http://localhost:4000/ai/mockpredict",{
        prompt : prompt
       }) 
       return response
    } catch (e) {
       return {error : e.message}
    }

}