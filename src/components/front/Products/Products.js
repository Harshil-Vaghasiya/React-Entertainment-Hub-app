import React from 'react';
import './Products.css';

const Products = ({ productItems,handleAddProduct }) => {
    return (
        <div className='products'>
            {
                productItems.map((items) => (
                    <div className='card'>
                        <div>
                            <img
                                className='product-image'
                                src={items.image}
                                alt={items.name}
                            />
                        </div>
                        <div>
                            <h3 className='product-name'> {items.name} </h3>
                        </div>
                        <div className="product-price">${items.price}</div>
                        <div>
                            <button className='product-add-button' onClick={()=>handleAddProduct(items)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;
