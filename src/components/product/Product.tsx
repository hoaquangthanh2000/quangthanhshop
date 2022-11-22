import axios from "axios";
import { productSlice, setProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productSeletor } from "../../app/seletor";
import { productType } from "./typeitem";
import { Link } from "react-router-dom";

interface item {
  product: productType;
}
function Product(data: item) {
  // fetchProductDetail()
  return (
    <Link to={`/product/${data.product.id}`}>
      <div className="flex flex-col w-60 p-7 border">
        <img src={data.product.image} className="  h-56 p-4" alt="" />
        <div className=" pt-2">
          <p>{data.product.title}</p>
          <p>{data.product.price}$</p>
          <p>{data.product.category}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
