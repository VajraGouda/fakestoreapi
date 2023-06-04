import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";


const CartPage = () => {
    const navigate = useNavigate()

    const [total, setTotal] = useState(0)

    const carts = JSON.parse(localStorage.getItem('cart')) || []

    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price)
        }, 0)
        setTotal(total)
    }, [])

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }
    if (!carts.length) { <div>Cart is Empty</div> }
    return (

        <div className="cart">
            <Navbar />
            <p className="cartDef">Shopping Cart</p>
            <Link to='/' className="p-5"><button className="btn btn-outline-dark m-2 align-center">Continue Shopping</button>
            </Link>



            {

                carts?.map(cart => {

                    return (
                        <div className="cart-main">


                            <div className="cart-product">
                                <div className="col-md-4 mt-5 p-3">

                                    <div className="card h-100 text-center p-4" >
                                        <div className="card-body">
                                            <img src={cart?.image} alt="" className="img-fluid" width="400px" />

                                            <h5 className="card-title mb-3 ">{cart.title}</h5>
                                            <h5 className="card-title mb-3 ">${cart.price}</h5>

                                            <button className="btn btn-outline-dark m-2 align-center"
                                                onClick={() => { removeProduct(cart?.id) }}>Remove Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-order">
                                <div className="col-md-4 mt-5 p-3">

                                    <div className="card h-100 text-center p-4" >
                                        <div className="card-body">

                                            <h4 className="p-3">Order Summary</h4>
                                            <h5 className="card-title mb-3 "><span>Cart Total          :     </span>${total}</h5>
                                            <h5 className="card-title mb-3 ">Shipping + taxes    : $10</h5>
                                            <h5 className="card-title mb-3 "><span>Order Total  : </span> ${total + 10}</h5>

                                            <button className="btn btn-outline-dark m-2 align-center"
                                            >Check Out</button>
                                        </div>
                                    </div>
                                </div>




                            </div>


                        </div>



                    )

                })
            }


        </div>
    );
};

export default CartPage;