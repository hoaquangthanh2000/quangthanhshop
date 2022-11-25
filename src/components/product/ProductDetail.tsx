import { useParams } from "react-router-dom";
import { productType } from "./typeitem";
import axios from "axios";
import { selectProduct,removeProduct  } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productSeletor } from "./../../app/seletor";
interface item {
  product: productType;
}
function ProductDetail() {
  const dispatch = useDispatch();
  const { productSelect } = useSelector(productSeletor);
  console.log("productSelect:", productSelect);
  const { productId } = useParams();
  const fetchProductDetail = async (id: string) => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(selectProduct(res.data));
      })
      .catch((err) => console.log("err:", err));
  };
  useEffect(() => {
    if (productId) {
      fetchProductDetail(productId);
      dispatch(removeProduct(productId))
    }
  }, [productId]);

  // const  handleDelete = () => {
  //   dispatch(removeProduct())
  // }
  return (
    <div className=" w-full flex justify-center">
      <div className="flex flex-row w-[40rem] p-9 bg-slate-200">
        <div className=" p-10">
          <img src={productSelect.image} alt="" className="w-[14rem]" />
        </div>
        <div className="flex-1 flex flex-col pt-10 gap-2">
          <div className="text-2xl font-bold">{productSelect.category}</div>
          {/* <div className="text-lg">{productSelect.rating.rate}*</div> */}
          <div className="text-lg">{productSelect.description}</div>
          <div className="bg-slate-900 h-12 flex items-center justify-evenly rounded-lg mt-6 cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-white"></i>
            <div className="text-white ">Thêm sản phẩm</div>
            {/* <button onClick={handleDelete()}>Delete</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
