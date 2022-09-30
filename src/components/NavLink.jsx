import React from 'react'
import {Link} from 'react-router-dom'
import {NavLinkWrapper} from './../styles/ComponentStyles'

export const NavLink = ({url, title}) => {
  return (
    <NavLinkWrapper>
      <Link to={url}>{title}</Link>
    </NavLinkWrapper>
  )
}