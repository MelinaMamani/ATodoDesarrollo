import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <a href="" className="icon_link"><FontAwesomeIcon icon={faLinkedin}/>{" "}</a>
            <h2>Daiana Elizabeth Gimenez</h2>
            <h2>Melina Erika Mamaní</h2>
            <a href="" className="icon_link"><FontAwesomeIcon icon={faLinkedin}/>{" "}</a>
        </div>
    )
}

export default Footer
