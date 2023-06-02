import { Link } from "react-router-dom";

const Category = (props) => {
    const { id, title, price, category, description, image } = props.data;
    return (


        <div className="col-md-3 mt-5 ">
            <div className="card h-100 text-center p-4" key={id}>
               <Link to={'/products/detail/' + id}> <img src={image} className="card-img-top" alt={title} height="250px" /></Link>
                <div className="card-body">
                    <h5 className="card-title mb-3 ">{title.substring(0, 20)}...</h5>
                    <p className="card-text lead fw-bold">${price}</p>
                    <Link to={'/products/detail/' + id} className="btn btn-outline-dark m-2 align-center">Show More</Link>
                </div>
            </div>

        </div>


    );
};

export default Category; 