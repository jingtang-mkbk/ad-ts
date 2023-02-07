import React, { useEffect } from 'react'
import { approvalsDetail } from '../../api/user'
 
const Department: React.FC = () => {

  useEffect(()=>{
    approvalsDetail(1175967133311934464).then(res=>{
      console.log('department',res) 
    })
  }, [])

  return (
    <>
      <div>Department</div>
    </>
  )
}

export default Department