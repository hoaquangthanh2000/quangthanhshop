import axios from "axios";
import { productSlice, setProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productType } from "./typeitem";
import { Link } from "react-router-dom";

interface item {
  product: productType;
}
function Product(data: item) {
  // fetchProductDetail()
  return (
    <Link to={`/product/${data.product.id}`}>
      <div className="flex flex-col border w-[225px] h-[350px]">
        <img src={data.product.image} className="h-56 p-4" alt="" />
        <div className=" pt-2 flex-1 ml-1">
          <p className=" h-1/3 one-line-ellipsis leading-9">{data.product.title}</p>
          <p className=" h-1/3 one-line-ellipsis leading-9">{data.product.price}$</p>
          <p className=" h-1/3 one-line-ellipsis leading-9">{data.product.category}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
