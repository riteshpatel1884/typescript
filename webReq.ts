import type {AxiosResponse} from "axios"
import axios = require("axios")

// Job bhi webrequest se data aayega uska defination/strucutre kuch aisa hoga

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

interface Todo{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}

const fetchData = async()=>{
  try {
    const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Todo", response.data);
  } catch (error:any) {
    console.log(error.message)   // since error ka datatype any hai so error. likhne ke baad suggestion nhi aayega 
    // kyuki guarantee nhi hai error ke andar message hoga ki nhi hoga so we need to deconstruct it in a better way like below
  }
}


const fetchDataNew = async()=>{
  try {
    const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Todo", response.data);
  } catch (error:any) {
    if(axios.isAxiosError(error))  // agar axios ka error hai then suggestion milega
    {
      console.log("Axios error", error.message)  // abb . ke baad suggestion show karega
      if(error.response){   // optional
        console.log(error.response.status)
      }
    }
  }
}



// Handling fetch request without axios
interface Todo{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}


const fetchDataWithoutAxios = async()=>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if(!response.ok){
      throw new Error(`HTTP error ${response.status}`);
    }

    // agar sabkuch thik raha ie no error then 👇
    const data: Todo = await response.json()
  } catch (error:any) {
    // handle error
  }
}
