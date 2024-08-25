import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState ([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/joyguha')
  //     .then(response => response.json())
  //     .then(data => {
  //         console.log(data);
  //         setData(data)
  //     })
  //   
  // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
      <div>{data.bio}</div>
      <img className='m-4' src= {data.avatar_url} alt="Git picture" width={300} />
      <div>Public Repos:{data.public_repos}</div>
    </div>
  )
}

export default Github

export const githubInforLoader = async () => {
  const response = await fetch ('https://api.github.com/users/joyguha') 
  return response.json()
}