import React from 'react'
import style from './popular.module.css'
import database from './watches.json'
import {Link} from 'react-router-dom'

function Popular(){
    return(
        <div className={style.popular_section}>
            <Link to={'/popular'}><h3 className={style.popular_title}>Popular watches &nbsp; <i class="fa-solid fa-arrow-right"></i></h3></Link>

             
                <div className={style.popular_watch_cards}>
                {database.map(data=>{
                    return(
                        <Link to={'/popular'}>
                        <div className={style.popular_cards} key={data.id}>
                           <a href=""> <img  src={data.img} alt={data.name} /> </a>
                           <div className={style.meta_data}>
                                <p className={style.watch_name}>{data.name}</p>
                                <p className={style.meta_info}>{data.meta}</p>
                           </div>
                        </div>
                        </Link>
                    )
                })}
               </div>
            
        </div>
    )

}

export default Popular