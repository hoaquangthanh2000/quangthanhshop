import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';
interface typeP  {
    body:string,
    id:number,
    title:string,
    userId:number
}
export default function Test() {
    const [post,setPost] = useState<typeP[] | []>([])
    const getTodo = async (id:number | unknown) => {
        try{
            await axios
                .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(res => {
                    console.log('res data >>>:', res.data)
                })
        }
        catch (err){
            console.log(err)
        }
    }
    useEffect( () => {
        getTodo('sfasf')
    },[])
    console.log('post la :',post)
  return (
    <div>
        {post.map(item => 
            <div key={item.id}>{item.title}</div>
        )}
    </div>
  )
}
