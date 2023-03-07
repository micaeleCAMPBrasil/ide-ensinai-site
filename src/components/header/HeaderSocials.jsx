import React from 'react'

import {ImYoutube} from 'react-icons/im'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.youtube.com/channel/UCJ7ibvxYBt2Q9RCayZY_Nkg" target="_blank"><ImYoutube /></a>
        <a href="https://www.facebook.com/profile.php?id=100064389953519" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/institutoideeensinai/" target="_blank"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials