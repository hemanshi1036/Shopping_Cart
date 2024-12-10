import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast"



const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart")
  }
  return (
    <div>
      <div>
        <p>
          {post.title}
        </p>
      </div>
      <div>
        <p>
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>
      <div>
        <img src={post.image}/>
      </div>
      <div>
        <p>{post.price}</p>
      </div>

    {
      //cart ni andar item present hoi tyare
      cart.some((p) => p.id == post.id) ? 
      (<button 
      onClick={removeFromCart}>
        Remove Item
      </button>) :
      (<button
      onClick={addToCart}>
        Add To Cart
      </button>)
    }
    </div>
  )
}

export default Product

