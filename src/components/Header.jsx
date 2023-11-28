import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGear, faQuestionCircle, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/Header.css'


function Header() {
  return (
    <div className='header'>
        <div className='menuIcon'>
            <FontAwesomeIcon icon={faBars} size='2xl' />
        </div>

        <div className='worldleHeading'>
            <h1>Worldle</h1>
        </div>

        <div className='rightIcons'>
            <FontAwesomeIcon icon={faQuestionCircle} size='2xl' />
            <FontAwesomeIcon icon={faRankingStar} size='2xl' />
            <FontAwesomeIcon icon={faGear} size='2xl' />
            <button className='rightCornerButton'><b>Subscribe to Games</b></button>
        </div>

    </div>
  )
}

export default Header