import React, { useState } from "react";
import { useInventory } from "../hooks/ProductHook";

const ProductList = () => {
    const { inventory, removeProduct, addProduct } = useInventory();
    const [name, setName ] = useState('');

    const handleRemoveProduct = (productId) => {
        removeProduct(productId);
    };

    

    return (
        <div>
            <h3>Product List:</h3>
            <ul>
                {inventory.map(product => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => handleRemoveProduct(product.id)}>Remove Prodouct</button>
                    </li>
                ))}
            </ul>
         </div>
    );
};

export default ProductList;