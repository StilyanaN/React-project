import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as productService from "../../../services/productService";
import "./CreateProduct.css"; 
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from "../../../utils/validationSchemas"


export default function CreateProduct() {
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(productSchema),
    });

    const createProductSubmitHandler = async (data) => {
        try {
            await productService.create(data);
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
                    <form id="create" onSubmit={handleSubmit(createProductSubmitHandler)}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-ice-cream"></i>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                    placeholder="Enter product name"
                                />
                                {errors.name && <p className="error-message">{errors.name.message}</p>}
                            </div>
                            <div className="input-box">
                                <i className="fas fa-dollar-sign"></i>
                                <input
                                    type="number"
                                    id="price"
                                    {...register('price')}
                                    placeholder="Enter product price"
                                    step="0.01"
                                />
                                {errors.price && <p className="error-message">{errors.price.message}</p>}
                            </div>
                            <div className="input-box">
                                <i className="fas fa-fire-alt"></i>
                                <input
                                    type="number"
                                    id="calories"
                                    {...register('calories')}
                                    placeholder="Enter calories"
                                />
                                {errors.calories && <p className="error-message">{errors.calories.message}</p>}
                            </div>
                            <div className="input-box">
                                <i className="fas fa-image"></i>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    {...register('imageUrl')}
                                    placeholder="Enter image URL"
                                />
                                {errors.imageUrl && <p className="error-message">{errors.imageUrl.message}</p>}
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
