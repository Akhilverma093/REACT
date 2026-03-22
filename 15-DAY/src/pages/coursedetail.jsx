import React from 'react'
import { useParams } from 'react-router-dom'

const coursedetail = () => {
//isse pata chalega kon sa routing hai
 const param= useParams()

  return (
    <div>
      <h1>{param.attu} CourseDetails</h1>
    </div>
  )
}

export default coursedetail