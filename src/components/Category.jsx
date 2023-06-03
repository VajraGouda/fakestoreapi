import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Category = (props) => {
    const { id, title, price, category, description, image, rating } = props.data;

    const product = { id, title, image, price }

    const handleCart = (product) => {
        console.log(product)
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id)
        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
        }
        alert('Product added to cart')
    }

    const handleWish = (product) => {
        console.log(product)
        const wish = JSON.parse(localStorage.getItem('wish')) || [];
        const isProductExist = wish.find(item => item.id === product.id)
        if (isProductExist) {
            const updatedWish = wish.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('wish', JSON.stringify(updatedWish))
        } else {
            localStorage.setItem('wish', JSON.stringify([...wish, { ...product, quantity: 1 }]))
        }
        alert('Product added to Wishlist')
    }


    return (


        <div className="col-md-3 mt-5 ">
            <div className="card h-100 text-center p-4" key={id}>
                <Link to={'/products/detail/' + id}> <img src={image} className="card-img-top" alt={title} height="250px" /></Link>
                <div className="card-body">
                    <h8 className="card-title mb-3 ">Brand, {title.substring(0, 20)}...</h8>
                    <div className="rating"> <span>({rating.count})</span></div>
                    <p className="card-text lead fw-bold">${price}</p>
                    <button className="btn btn-outline-dark m-2 align-center" onClick={() => handleCart(product)} >
                        <FontAwesomeIcon icon={faCartShopping} />Add to cart</button>
                    <div className="wishC"> <button href="#" className="btn btn-outline-dark" 
                    onClick={() => handleWish(product)}><FontAwesomeIcon icon={faHeart} /></button>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Category; 