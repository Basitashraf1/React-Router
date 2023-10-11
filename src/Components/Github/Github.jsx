import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const {followers}=useLoaderData()
  return (
<>
<div>Github Followers:{followers}</div>
{/* <div><img src={userData.avatar_url} alt="" /></div> */}
</>

    
  )
}

export default Github

export const GithubLoader= async()=>{
    const response=await fetch("https://api.github.com/users/Basitashraf1")
    let gitResponse=response.json()
    return gitResponse
}