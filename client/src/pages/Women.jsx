import style from './Women.module.css'
import data from '/src/pages/json/women.json'
import { Link } from 'react-router-dom'
import auth from '../../hooks/auth'
import axios from 'axios'


const Women = () => {
    const { user: users } = auth();
    const handleSubmit = async (record) => {
        try {
            const response = await axios.post('http://localhost:7777/api/cart/add/', {
                name: record.name,
                price: record.price,
                quantity: 1,
                imageUrl: record.img,  // Pass the image URL here
                userId: users._id,
            });

            if (response.status === 201) {
                alert('Item added to cart successfully');
            } else {
                alert('Failed to add item');
            }
        } 
        catch (error) {
            console.error('Error:', error);
            alert('Error occurred while adding item to cart');
        }
    };

  return (
    <div className={style.women}>

        <div className={style.banner}>
            <img src="/src/pages/imgs/banner4.webp" alt="" />
            <div className={style.explore}>
                <h2>Best {"Women's"} Watch collection is here</h2>
                <a href="#women_sec"><button>Explore</button></a>
            </div>
        </div>
    <div id='women_sec'>
    <div id={style.women_section}>

        {data.map(record =>{
            return(
        <div className={style.women_watches} key={record.id}>
            
            <div className={style.img}>
                <img src={record.img} alt="" />
            </div>
            <div className={style.info}>
                <h2>{record.name}</h2>
                {/* <p className={style.meta}>{record.meta}</p> */}
                <p className={style.price}>Price : {record.price}</p>

                <Link to="cart"> <button className={style.buy}>Buy</button></Link>
                            <button onClick={() => handleSubmit(record)} className={style.cart}>Add to cart</button>
            </div>

        </div>)
        })}
      
    </div>
    </div>
    </div>
  )
}

export default Women