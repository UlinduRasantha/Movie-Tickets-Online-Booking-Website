import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MoveDetails = () => {
  const {id} = useParams()
  const [show, setShow] = useState(null)
  return (
    <div>MoveDetails</div>
  )
}

export default MoveDetails