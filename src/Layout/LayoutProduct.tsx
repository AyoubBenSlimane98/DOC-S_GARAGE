import { Outlet } from "react-router-dom";
import Product from "../pages/Product/Product";

const LayoutProduct = () => {
    return (<>
        <Product />
        <Outlet /> 
    </>);
};

export default LayoutProduct;
