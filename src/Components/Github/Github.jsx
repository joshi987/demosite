// import { data } from 'autoprefixer'
// import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
  const data= useLoaderData()
    // const[data,setData]= useState([]);
//  useEffect(()=>{
// fetch('https://api.github.com/users/joshi987').then(response => response.json()
// .then(data => setData(data)))
//  }, [])

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} className='rounded-full' width={300} alt='Git pitcher'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/joshi987')
    return  await response.json()
}