import React from 'react'
import style from './Gender.module.css'
import {Link} from 'react-router-dom'

const Gender = () => {
  return (
    <div className={style.gender}>
      <Link to={'/men'}>
      <div className={style.gen}>
        <img src="/src/Components/gender/gen1.jpeg" alt="" />
        <p>Watches For Men</p>
      </div>
      
      </Link>

      <Link to={'/women'}>
      <div className={style.gen}>
        <img src="/src/Components/gender/gen2.jpg" alt="" />
        <p>Watches For Women</p>
      </div>
      </Link>
      
      <Link to={'/kids'}>
      <div className={style.gen}>
        <img src="/src/Components/gender/gen3.jpeg" alt="" />
        <p>Watches For Kids</p>
      </div>
      </Link>

    </div>
  )
}

export default Gender