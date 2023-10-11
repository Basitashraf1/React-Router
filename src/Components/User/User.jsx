import React from 'react'

import { useParams } from 'react-router-dom'

function User(){
 const dongle=useParams()
    return(
        <>
        <div>User: {dongle.userid}</div>
        </>
    )
}
export default User