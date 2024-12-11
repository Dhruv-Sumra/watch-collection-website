import React from 'react'
import style from './Brand.module.css'
import data from '/src/pages/json/brand.json'

const Brand = () => {
  return (
    <div className={style.brand}>
        <div className={style.b_banner}>
             <img src="/src/pages/imgs/brand_banner.jpg" alt="" />
             <div className={style.brands}>
            {data.map(record => {
                return(
                <div className={style.imgs} key={record.id}>
                <a target='_blank' href={record.link}><img src={record.img} alt=''></img></a>
                </div>)
            })}
             </div>
        </div>
        </div>
  )
}

export default Brand