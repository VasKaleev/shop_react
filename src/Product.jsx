import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import rating from "./assets/img/rating.svg"
import cartWhite from "./assets/img/cartWhite.svg"
import arrow from "./assets/img/arrow.svg"


export const Product = () => {
  //const [product, setProducts] = useState([])
  const [product, setProducts] = useState(null)
  const { prId } = useParams();
  const [isProductIncart, setisProductIncart] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    //const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/1')
    const promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${prId}`)
    promise.then((res) => {
      setProducts(res.data)
    })
    // eslint-disable-next-line
  }, []);

  const addProductToCartHandler = () => {
    // alert('Товар успешно добавлен в корзину')
    setCount(1)
    setisProductIncart(true)
  }

  function prov() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  //debugger
  return (
    <div>
      <div className="arrowBack">
        <Link to={"/"}>
          <img src={arrow} alt="" />
          Back to Best Sellers
        </Link>
      </div>
      {product === null ? <h2>Loading...</h2> :
        <div className="product">
          {/* <p>{productId}</p> */}
          <img src={product.image} alt="" />
          <div className="info">
            <p className="title">{product.title}</p>
            <p className="price">${product.price} </p>
            <div className="rating">
              <p>Rating: {product.rating.rate}</p>
              <img src={rating} alt="" />
            </div>
            <div className="category">
              <span>Category:</span>
              <p>{product.category}</p>
            </div>
            <p className="description">{product.description}</p>

            <p>{isProductIncart ? <h4>&#10004; Товар добавлен <span className="cart">в корзину</span></h4> : ""}</p>
            {isProductIncart ?
              <div className='butAddRem'>
                <button className="but_" onClick={prov}>
                  <span>-</span>
                </button>
                <div className='count'>{count}</div>
                <button className="butPlus" onClick={() => setCount(count + 1)}>
                  <span>+</span>
                </button>
              </div> : ''}
            <button onClick={addProductToCartHandler}>
              <img src={cartWhite} alt="" />
              {/* Add to cart */}
              {isProductIncart ? 'Go to cart' : 'Add to cart'}
            </button>

          </div>
        </div>
      }
    </div>
  )
}