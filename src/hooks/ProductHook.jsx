import { useState, UseEffect, useEffect } from "react";

const initalInventory = [
    {id: 1, name: 'Apple'},
    {id: 2, name: "Pear"},
    {id: 3, name: "Potato"},
];

const useInventory = () => {
    const [inventory, setInventory] = useState(initalInventory);

    useEffect(() => {
        const fetchInventory = () => {
            return inventory;
        };

       fetchInventory();
    }, []);

    const addProduct = (product) => {
        const newProduct = [...inventory, newProduct];
        setInventory(newProduct);
    };

    const removeProduct = (productId) => {
        const updatedInventory = inventory.filter(product => product.id !== productId);
        setInventory(updatedInventory);
    };

    return {
        inventory,
        addProduct,
        removeProduct,
    };
};

export default useInventory;