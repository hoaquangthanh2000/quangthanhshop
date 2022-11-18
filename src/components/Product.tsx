import axios from "axios";
import { productSlice, setProduct } from "./product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productSeletor } from "../app/seletor";
import { productType } from "./typeitem";
function Product() {
  const dispatch = useDispatch();
  const productList = useSelector(productSeletor);
  console.log(productList);
  const fetchProductDetail = async () => {
      await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProduct(res.data));
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

fetchProductDetail()
  return <div></div>;
}

export default Product;
