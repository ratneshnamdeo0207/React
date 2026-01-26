import "./Product.css";
import Price from "./Price";
import Description from "./Description";
function Product({idx})
{
    let titles = ["Logitech MX Master", "Apple Pencil 2 gen", "Zebronics transformer", "Pentronic 23"];

    let features = [["8,000 DPI", "5 Programmable Button"], ["Intuitive Design", "designed for Ipad"],["Intuitive Design", "designed for Ipad"], ["Intuitive Design", "designed for Ipad"]];

    let prices =[["12,495", "8,999"], ["11,900", "9,199"], ["1,599", "899"], ["599", "289"]];

    
    return (
        <div className="Product">
            <h2>{titles[idx]}</h2>
            <Description features = {features[idx]} />
            <Price prices = {prices[idx]}/>
        
        </div>
    )
 
}

export default Product;