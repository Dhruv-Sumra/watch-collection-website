import React  from 'react'
import style from './Main.module.css'
import poster from './poster3.jpg'
import {Link} from 'react-router-dom'

function Main(){
  
    return(
        <div className={style.main}>
            {/* TAGLINE SECTION */}
                <div className={style.tagline_section}>
                    <h1 className={style.tagline}>Your Time Your Style</h1>

                    <p className={style.punchline}><b>E</b>xperience the perfect fusion of tradition and innovation designed to elevate your style with every moment of your journey</p>

                    <div className={style.sign_btns}>
                        <Link to="/login"><button className={`${style.login} ${style.sign_btn}`}>Login</button></Link>

                        <Link to="/register"><button className={`${style.sign_up} ${style.sign_btn}`}>Sign Up</button></Link>
                    </div>
                </div>
            

            {/* POSTER SECTION */}
                <div className={style.poster_section}>
                    <img src={poster} alt="Main_poster" className={`${style.poster}`}/>
                </div>
                
            </div>
        
    )
}

export default Main