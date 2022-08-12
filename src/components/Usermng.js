import React, { useEffect, useState } from 'react'
import axios from '../api/api';

const Usermng = () => {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        const getUser = async()=>{
            await axios.get('/user')
            .then(resp=>setUser(resp.data))
            .catch(err=>console.log(err))
        }
        getUser();
    },[])

    const handleDelete = async(id)=>{
        await axios.delete('user/'+id)
        let newUserList = user.filter((user)=>{
          return user.id !== id
        })
        setUser(newUserList)
    }



  return (
    <>
      <div className='admin-box'>
        <div className='admin-table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>              
                <tbody>
                    {
                    user.map((admin,index)=>{
                    return <tr key={admin.id}>
                        <td>{index+1}</td>
                        <td className='table-main'>
                            <div className='img-box'>
                                <img src={admin.avatar} alt='#'/>
                            </div>
                            <div className='name'>
                             {admin.username}
                            </div>
                        </td>
                        <td>{admin.email!==""?admin.email:"Not have email yet"}</td>
                        <td className='action'>
                            <button onClick={()=>handleDelete(admin.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                    })
                    }
                </tbody>       
            </table>
        </div>
      </div>
    </>
  )
}

export default Usermng