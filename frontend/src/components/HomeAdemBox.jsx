import React from 'react'

//pictures
import BoxPhoto from '../assets/images/Adem/BoxFoto.jpg'

//styling
import '../styles/_adembox.scss'

export default function HomeAdemBox() {
  return (
    <div className='adembox-container'>

        <img src={BoxPhoto} alt="" />

        <div>

            <h1>ADEMWERK</h1>

            <div>
                <ul>
                    <li>Stress en spanning verminderen</li>
                    <li>Vastgezette emoties en blokkades laten verdwijnen</li>
                    <li>Lichamelijke klachten verzachten of oplossen</li>
                    <li>Mentaal sterker worden</li>
                    <li>Fit en energiek zijn</li>
                </ul>
            </div>

            <button>Meer over ademwerk</button>

        </div>

    </div>
  )
}
