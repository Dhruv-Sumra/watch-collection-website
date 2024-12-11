import React from 'react'
import { Link } from 'react-router-dom'
import style from './About.module.css'
const About = () => {
    return (
        <div className={style.about_sec}>

              <div className={style.about_info}>
                    
                <div className={style.info}>
                    <h2>About Us</h2>
                    <p>
                    At Dream Time, we believe every moment deserves to be cherished and celebrated.Dream Time blends tradition with innovation to deliver watches that are both enduring and distinctive. Join us in experiencing the art of timekeeping and discover how Dream Time can add a touch of brilliance to your journey.
                    </p>
                      <Link to="/Contact"><button className={style.contact_btn}>Contact Us</button></Link>
                </div>   

                <div className={style.about_img}>
                    <img src="./src/pages/imgs/ab1.jpg" alt="" />
                </div> 
            </div>

            <div className={style.about_boxs}>
                <div className={`${style.box} , ${style.box1}`}>
                  <div className="img">
                      <img src="/src/pages/imgs/ab4.jpg" alt="" />
                  </div>
                  <p>Welcome to Timeless Treasures, your ultimate destination for exquisite timepieces that blend artistry with precision. Our collection showcases a diverse array of watches, from classic mechanical marvels to cutting-edge smartwatches, each selected for its exceptional craftsmanship and innovative design. Whether you're a seasoned collector or a first-time buyer, we offer something truly special to enhance your personal style and celebrate the art of horology.</p>
                  
                </div>  

                <div className={`${style.box} , ${style.box2}`}>
                  <p>At Timeless Treasures, we believe that a watch is more than just a way to keep time—it's a statement of individuality and sophistication. Our curated selection features renowned brands and hidden gems alike, each with its own unique story and technical excellence. Our team of experts is dedicated to providing you with detailed insights and personalized recommendations, ensuring that every piece in our collection meets our high standards of quality and elegance.</p>
                  <div className="img">
                      <img src="/src/pages/imgs/ab5.jpg" alt="" />
                  </div>
                </div>  

                <div className={`${style.box} , ${style.box3}`}>
                  <div className="img">
                      <img src="/src/pages/imgs/ab6.jpg" alt="" />
                  </div>
                  <p>We invite you to explore our website and discover the perfect watch that resonates with your personal taste and lifestyle. With a focus on unparalleled service and a commitment to authenticity, Timeless Treasures is here to help you find a timepiece that not only marks moments but also becomes a cherished part of your journey. Thank you for visiting, and we look forward to guiding you through the world of fine watches.</p>
                  
                </div>  
            </div>
              
            </div>

    )
}

export default About