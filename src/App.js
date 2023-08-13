import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

import { useState } from "react";

import NavBar from "./Pages/NavBar";
import About from "./Pages/About";

import products from "./Pages/Product";

import Category from "./Pages/Category";
import whatsAppIcon from "./Images/4494495.png";
import Footer from "./Pages/Footer";

const allItem = ["All", ...new Set(products.map((item) => item.category))];
console.log(allItem);

function App() {
  const [product, setProduct] = useState(products);

  const [itemsLength, setItemsLength] = useState("");
  // const negotiable=products.filter((negotiableItem)=>{
  //   if(negotiableItem.negotiable==true){
  //     setProduct(negotiable)
  //   }
  // })
  // console.log(negotiable);

  const negotiableItem = () => {
    const newItems2 = products.filter((items) => items.negotiable == true);
    setProduct(newItems2);
    setItemsLength(newItems2.length + " wears found for Negotiable wears ");
  };

  const notNegotiableItem = () => {
    const newItems3 = products.filter((items) => items.negotiable == false);
    setProduct(newItems3);
    setItemsLength(newItems3.length + " wears found for Non-Negotiable wears ");
  };

  const filterItems = (category) => {
    if (category == "All") {
      setProduct(products);
      setItemsLength("");

      return;
    }
    const newItems = products.filter((item) => item.category == category);
    setProduct(newItems);
    setItemsLength(newItems.length + " wears found for " + category);
  };
  return (
    <div className="App">
      {/* +234 702 639 9492 */}
      {/* https://wa.me/message/BPARJ6I5JM6PL1 */}
      {/* belloayomide36@gmail.com */}
      {/* <button onClick={()=>{
        negotiableItem()
      }}>negotiable Goods </button>
      
      I'm Bello Ayomide, a Banking and Finance graduate from Laspotech. Despite my academic background, my passion led me to excel in the footwear business. With 2 years of dedicated experience in the footwear industry, I've not only developed a strong sense of customer relations but also cultivated a friendly and welcoming approach. My journey has equipped me with valuable insights into both the financial and footwear aspects of business, and I'm eager to continue making strides in this dynamic field.

<button onClick={()=>{
        notNegotiableItem()
      }}>Fixed  price  </button> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Category  />} />  */}
          <Route
            path="/"
            element={
              <LandingPage
                product={product}
                category={allItem}
                filterItems={filterItems}
                negotiableItem={negotiableItem}
                notNegotiableItem={notNegotiableItem}
                itemsLength={itemsLength}
              />
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      <a href="https://wa.me/message/BPARJ6I5JM6PL1">
        {" "}
        <img className="icon" src={whatsAppIcon} alt="" />
      </a>
      <a href="">REFRESH</a>
    </div>
  );
}

export default App;
