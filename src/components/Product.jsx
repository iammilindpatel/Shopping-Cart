import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";
import { useState } from "react";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  const[readmore,setReadmore] = useState(false);
  const description = readmore ? post.description : post.description.split(" ").slice(0,10).join(" ");
  
    function readmoreHandler() {
      setReadmore(!readmore);
    }

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (

    <div className="flex flex-col items-center justify-between w-full gap-1 p-2 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
      <div>
        <p className="text-[#1d783e] font-semibold text-md text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        {

        }
        <p className="w-40 text-gray-500 font-normal text-[10px] text-left">
          {/* {post.description.split(" ").slice(0,10).join(" ") + "..."}      this method uses words */}
          {/* `${post.description.substring(0,70)}...` .....*****we can also use this method ********...... this method uses texts */}

          `{description} `

          <span onClick={readmoreHandler} className='text-blue-300 cursor-pointer'>
              {readmore ? `Show Less`: `Read More`}
          </span>....
          
        </p>
      </div>
      <div className="h-[130px] px-6">
        <img src={post.image} className="h-full w-full" alt=""/>
      </div>

      <div className="flex justify-between items-center w-full mt-2 px-2">
        <div>
          <p className="text-green-600 text-sm font-semibold">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id === post.id) ?  
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[10px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove&nbsp;Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[10px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add&nbsp;to&nbsp;Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
