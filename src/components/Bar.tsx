import React from "react"
import { createIonIcon } from "../scripts/createIonIcon"
import { removeClassById } from "../scripts/removeClassById"
import { toggleClassById } from "../scripts/toggleClassById"
import { ActionButton } from "./ActionButton"
import { LocalButtonRouterLink } from "./LocalButtonRouterLink"

export const Bar = () => {
  return (<div id='bar' className='level is-mobile mb-0'>
    <div className='level-left'>
      <div className='level-item'>
        <LocalButtonRouterLink
          id='go-home'
          to=''
          callback={() => removeClassById('NavSideBar', 'active')}
          content={createIonIcon('home-outline')}
          addClasses='is-primary is-inverted' />
      </div>
    </div>
    <div className='level-right is-pulled-right'>
      <div className='level-item'>
        <ActionButton
          id='NavSideBar-open'
          callback={() => toggleClassById('NavSideBar', 'active')}
          content={createIonIcon('menu-outline')}
          addClasses='is-primary is-inverted' />
      </div>
    </div>
  </div>)
}