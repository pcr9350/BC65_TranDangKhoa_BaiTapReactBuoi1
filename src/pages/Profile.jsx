//rafce
import React, { useEffect, useState } from 'react'
import { TOKEN_AUTHOR, getDataTextStorage } from '../util/utilFunction'
import axios from 'axios'
import useRoute  from '../CustomHook/useRoute'
import { httpStore } from '../util/config'

const Profile = () => {
  //state chứa userProfile sau khi gọi api
  const [userProfile, setUserProfile] = useState({});
  const {navigate} = useRoute();

  const getProfileApi = async()=>{
    const token = getDataTextStorage(TOKEN_AUTHOR);
    
    try{
      const res = await httpStore.post('/api/Users/getProfile')
    // console.log(res.data.content)
    setUserProfile(res.data.content)
    }
    catch(err){
      // console.log(err.response?.status);
      if(err.response?.status == 401){
        navigate('/login')
      }
    } finally{
      //
    }
    
  }

  useEffect(()=>{
    getProfileApi();
  },[])
  return (
    <div className='container'>
      <h3>Profile Page</h3>
      <div className="d-flex">
        <div className="w-25">
          <img src={userProfile.avatar} className='w-100 rounded rounded-circle' alt="" />
          <br />
          <br />
          <h5>{userProfile.name}</h5>
        </div>
        <div className="w-75">
          <h3>Info</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile