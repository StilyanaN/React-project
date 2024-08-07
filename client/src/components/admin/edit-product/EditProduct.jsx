import { useNavigate, useParams, Link } from 'react-router-dom';
import * as productService from "../../../services/productService";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from "../../../utils/validationSchemas"; 
import "./EditProduct.css"; 

export default function EditProduct() {
    const navigate = useNavigate();
    const { flavorId } = useParams();


    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(productSchema),
        defaultValues: {
            name: '',
            price: '',
            calories: '',
            imageUrl: ''
        }
    });

    useEffect(() => {
        productService.getOne(flavorId)
            .then(result => {
                setValue('name', result.name);
                setValue('price', result.price);
                setValue('calories', result.calories);
                setValue('imageUrl', result.imageUrl);
            });
    }, [flavorId, setValue]);

    
    const editProductSubmitHandler = async (data) => {
        try {
            
            const editedProduct = {
                name: data.name,
                price: parseFloat(data.price) || 0,
                calories: parseInt(data.calories) || 0, 
                imageUrl: data.imageUrl
            };
    
            await productService.edit(flavorId, editedProduct);
            navigate('/catalog');
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div className="container1">
            <div className="forms">
                <Link className="text-success2" to={'/catalog'}>
                    <i className="fas fa-angle-left me-2"></i>Back
                </Link>
                <div className="form-content">
                    <div className="title">Edit Product</div>
                    <form id="edit" onSubmit={handleSubmit(editProductSubmitHandler)}>
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
                                <input type="submit" value="Edit Product" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
