import React, { useContext, useEffect } from 'react';
import ReactTooltip from "react-tooltip";
import { MyContext } from '../../App';
const NewsCard = ({article,index}) => {

useEffect(() => {

console.log('ddddddddddddddddd')

}, [])


const {cart,setCart} = useContext(MyContext);

const addToCart= (product) => {

  setCart((p)=> [...p,product] 
  
  
  
  )
}


const imgStyle={width:"150px" , height:"150px" ,objectFit:'cover', borderRadius:'50%'}


    const{author,content, title, description,urlToImage ,publishedAt} =article
    return (
      <div class="col">
        {/*  */}
        <div
          data-tip={`<div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">
                  <small class="text-muted">Published At: ${publishedAt}</small>
                </p>
              </div>
            </div>`}
          data-class="tooltip"
          data-border={true}
          data-html={true}
        >
          {/*  xxxxxxxxxxxxxxxxxx   */}

          <div class="card  h-100" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center">
                <img
                  src={urlToImage}
                  class="img-fluid rounded-start"
                  style={imgStyle}
                  alt={title}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{description}</p>
                  <p class="card-text">
                    <small class="text-muted">
                      Published At: {publishedAt}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <button class="bg-primary btn" onClick={() => addToCart(article)}>
              Add to cart{" "}
            </button>
          </div>
          {/* xxxxxxxxxxxxxxxxxxx */}
        </div>{" "}
        <ReactTooltip html={true} />,{/* <ReactTooltip /> */}
        {/*  */}
      </div>
    );
};

export default NewsCard;