import React, { useState } from "react";
import MainPage from "./MainPage";
import Hero from "./Hero";
import questions from "./Question";
import Answers from "./Answers";
import faq from '../Images/FAQ.webp'
import Category from "./Category";
// import Footer from "./Footer";
const LandingPage = ({
  product,
  category,
  filterItems,
  negotiableItem,
  notNegotiableItem,
  itemsLength,
}) => {
  return (
    <div>
      <Hero />

      <marquee className="marquee" behavior="normal" direction="left">we sell quality, and affordable footwears !!  </marquee>

    <div className="btn">
    <div className="buttons">
     <button
        onClick={() => {
          negotiableItem();
        }}>
        NegotiableItem
      </button>

      <button
        onClick={() => {
          notNegotiableItem();
        }}>
            Non-NegotiableItem
      </button>
     </div>


      <Category category={category} filterItems={filterItems} />

    </div>
<div className="foundCarrier">
<h5 className="productFound">{itemsLength}</h5> 

</div>
      <MainPage product={product} />

      <div className="questionsWrap">
        <h3>Frequently asked questions </h3>
        <div className="line"></div>
      <div className="flexQuestions">
        <div>
          <img src={faq} alt="QuestionsImg" />
        </div>
<div>
  
{questions.map((item)=>{
        return<Answers key={item.id} {...item} />
      })}
</div>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
