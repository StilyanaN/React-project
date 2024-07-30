import { useNavigate } from 'react-router-dom';
import * as productService from "../../../services/productService";
import "./CreateProduct.css"; 

export default function CreateProduct() {
    const navigate = useNavigate();
    
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.create(productData);
            navigate('/catalog');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container1">
            <div className="forms">
                <div className="form-content">
                    <div className="title">Create Product</div>
                    <form id="create" onSubmit={createProductSubmitHandler}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-ice-cream"></i>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
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
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>
                            <div className="button input-box">
                                <input type="submit" value="Create Product" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
