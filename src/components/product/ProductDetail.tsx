import { useParams } from "react-router-dom";
import { productType } from "./typeitem";
import  axios  from 'axios';
import {selectProduct} from './productSlice'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
interface item {
  product: productType;
}
function ProductDetail() {
  const dispatch = useDispatch()
  const productSelect = useSelector()
  const { productId } = useParams();
  const fetchProductDetail = async (id:string) => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(selectProduct(res.data))
      })
      .catch((err) => console.log('err:', err))
  }
  useEffect(() => {
    if(productId){
      fetchProductDetail(productId)
      
    }
  },[productId])
  return (
    <div>{productId}</div>
  )
}

export default ProductDetail;
