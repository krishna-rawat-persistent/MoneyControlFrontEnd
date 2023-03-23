import React from 'react'

const UserData= ({users}) => {
  return (
    <div>
        {users.map((current_user)=>{
            const {schemeName, marketValue, oneWeek, oneMonth} = current_user;
       return(
        <tr key={schemeName}>
            <td>{schemeName}</td>
            <td>{marketValue}</td>
            <td>{oneWeek}</td>
            <td>{oneMonth}</td>
        </tr>
       )
       })}
    </div>
  )
}

export default UserData