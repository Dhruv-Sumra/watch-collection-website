
import style from './Recently.module.css'
import database from '/src/Components/Recently/recently.json'
import {Link} from 'react-router-dom'

function Recent(){
    return(
        <div className={style.popular_section}>
            <Link to={'/recent'}><h3 className={style.popular_title}>Recently Launched watches &nbsp; <i class="fa-solid fa-arrow-right"></i></h3></Link>

             
                <div className={style.popular_watch_cards}>
                {database.map((record)=>{
                    return(
                        <Link to={'/recent'}>
                        <div key={record.id} className={style.popular_cards} >
                           <a href=""> <img  src={record.img} alt={record.name} /> </a>
                           <div className={style.meta_data}>
                                <p className={style.watch_name}>{record.name}</p>
                                <p className={style.meta_info}>{record.meta}</p>
                           </div>
                        </div>
                        </Link>
                    )
                })}
               </div>
            
        </div>
    )

}

export default Recent