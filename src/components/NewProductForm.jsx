import React, { useState} from 'react';
import useInventory from '../hooks/ProductHook';

const NewProductForm = () => {
    const { addProduct } = useInventory();
    const [name, setName] = useState('');



        const handleAddProduct = (e) => {
            e.preventDefault();
            addProduct({ name });
            setName('');
            console.log("Added product.")
        };

            return (
                <div>
                <form onSubmit={handleAddProduct} className='ProductForm'>
                <h3>Add New Product</h3>
                <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
                <button type="submit" onClick={() => handleAddProduct(product.name)}>Add Product</button>
            </form>
            </div>
            );
};

export default NewProductForm;