import { useRef, useState } from 'react';

function Wishlist({ products, removeProduct }) {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const sliderRef = useRef(null);

    const showNextProduct = () => {
      setCurrentProductIndex(currentProductIndex + 1);
      sliderRef.current.style.left = `-${(currentProductIndex + 1) * 100}%`;
    }

    const showPreviousProduct = () => {
      setCurrentProductIndex(currentProductIndex - 1);
      sliderRef.current.style.left = `-${(currentProductIndex - 1) * 100}%`;
    }

    const removeCurrentProduct = (productId) => {
      removeProduct(productId);
      if (currentProductIndex > 0) {
        setCurrentProductIndex(currentProductIndex - 1);
        sliderRef.current.style.left = `-${(currentProductIndex - 1) * 100}%`;
      }
    }
    

    return (
        <section className="wishlist-container mt-4">
          <h3 className='fw-bold'>Product Browser</h3>
          <p>Displaying { products.length } product{ products.length > 1 ? 's' : '' }</p>

          {
            products && (
              <div className=' overflow-hidden'>
                <div className="tab-container d-md-flex d-none justify-content-between">
                  <button className="btn btn-light"
                    disabled={products.length <= 1 || currentProductIndex === 0 }
                    onClick={ () => showPreviousProduct() }
                    >&lt;</button>
                  <div className="tab-item-container d-flex align-items-center gap-1">
                    {
                      products.map((product, productIndex) => (
                        <div key={product.id} className={`btn btn-light tab-item ${ productIndex === currentProductIndex ? 'border-dark' : '' }`}>{product.title}</div>
                      ))
                    }
                  </div>
                  <button className="btn btn-light"
                    disabled={products.length <= 1 || currentProductIndex === products.length - 1 }
                    onClick={ () => showNextProduct() }
                  >&gt;</button>
                </div>
                <div id='slider-container' className='product-container d-flex flex-md-row flex-column position-relative' ref={ sliderRef }>
                {
                  products.map(product => (
                    <div key={product.id} className="product-container mt-2 p-2 border rounded w-100 d-flex flex-column flex-shrink-0">
                      <h5>{ product.title}</h5>
                      <p>$ { product.price}</p>
                      <p className="mt-2">
                        { product.description }
                      </p>
                      <div className="button-container d-flex justify-content-end">
                        <button className="btn btn-light" onClick={ () => removeCurrentProduct(product.id) }>Remove Product</button>
                      </div>
                    </div>
                  )
                )}
                </div>
              </div>
            )
          }
        </section>
    );
}
  
export default Wishlist;
