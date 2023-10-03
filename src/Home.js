import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

function Home() {
const[roomId, setRoomID] = useState()
const Navigate = useNavigate()
const handleJoin = () =>{
    Navigate(`/room/${roomId}`)
}

  return (
    <div>

        <input type='text' placeholder='Enter RoomID' value={roomId} onChange={e=>setRoomID
            (e.target.value)}></input>
        <button onClick={handleJoin}>Join</button>

    </div>
  )
}

export default Home