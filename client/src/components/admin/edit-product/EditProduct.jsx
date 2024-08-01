import { useNavigate, useParams } from 'react-router-dom';
import * as productService from "../../../services/productService";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./EditProduct.css"; 

export default function EditProduct() {
    const navigate = useNavigate();
    const { flavorId } = useParams();
    const [flavor, setFlavor] = useState({
        name: '',
        price: '',
        calories: '',
        rating: '',
        imageUrl: '',
    });

    useEffect(() => {
        productService.getOne(flavorId)
            .then(result => {
                setFlavor(result);
            });
    }, [flavorId]);

    const editProductSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.edit(flavorId, values);
            navigate('/catalog');
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setFlavor(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container1">
            <div className="forms">
            <Link className="text-success2" to={'/catalog'}>
            <i className="fas fa-angle-left me-2"></i>Back
          </Link>
                <div className="form-content">
                    <div className="title">Edit Product</div>
                    <form id="edit" onSubmit={editProductSubmitHandler}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-ice-cream"></i>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={flavor.name}
                                    onChange={onChange}
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-dollar-sign"></i>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={flavor.price}
                                    onChange={onChange}
                                    placeholder="Enter product price"
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-fire-alt"></i>
                                <input
                                    type="number"
                                    id="calories"
                                    name="calories"
                                    value={flavor.calories}
                                    onChange={onChange}
                                    placeholder="Enter calories"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-star"></i>
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    value={flavor.rating}
                                    onChange={onChange}
                                    placeholder="Enter product rating"
                                    step="0.1"
                                    max="5"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-image"></i>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={flavor.imageUrl}
                                    onChange={onChange}
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>
                            <div className="button input-box">
                                <input type="submit" value="Edit Product" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
