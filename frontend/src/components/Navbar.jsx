import React from 'react'
import { useEffect, useRef, useState } from 'react';

//router
import { Link } from 'react-router-dom'

//styling
import '../styles/_navbar.scss'

export default function Navbar() {
    
  return (
    <>

    <div className="navbar-under"></div>
    
    <div className="navbar-container">

        <div>

            <div>

                Fred & Yvette

            </div>

            <div>

                <Link>Home</Link>
                <Link>Over ons</Link>
                <Link>Het team</Link>

            </div>

            <div>

            <Link><button>Contact</button></Link>

            </div>


        </div>

    </div>
    
    </>
  )
}
