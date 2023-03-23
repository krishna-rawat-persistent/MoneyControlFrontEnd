import React from "react";
import { useEffect, useState } from "react";

const API ="";

 const Table =()=>{
  const [users, setUsers]= useState([]);

   const fetchUser=async(url)=>{
      try{

          const res =await fetch(url);
          const data= await res.json();
            if (data.length > 0){
                setUsers(data);
            }
      } 
      catch(e){
       console.error(e)

      }
   }
    useEffect(()=>{
    fetchUser(API);

},[])
 
 return(
    <div>
        <table>
            
            <thead>
                <tr>
                <th>schemeName</th>
                <th>marketValue</th>
                <th>oneWeek</th>
                <th>oneMonth</th>
                </tr>
            </thead>
            
           <tbody>
            <UserData users={users}/>
           </tbody>
        </table>
    </div>
 )}
export default Table









