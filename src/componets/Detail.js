import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Detail extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   console.log(value.detailProduct);
                   const {  id,
                            company,
                            img,
                            info,
                            price,
                            title,
                            inCart
                            }=value.detailProduct;
                   return(
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                           </div>
                           
                           <div className="row">
                            {/* endtitle */}
                                {/*product info  */}
                                <div className="col-10 mx-auto col-md-5 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className ="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model:{title}</h1>
                                    <h4 className="text-title text-uppercase text-muted m6-3 mb-2">
                                 made by : <span className="text-uppercase"> {company}</span>
                                    </h4>
                                    <h4 className="text-primary">
                                        <strong>
                                                 price: <span>$</span><span>{price}</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> some info about product:</p>
                                    <p className="text-muted lead">{info} </p>
                                    <div>
                                        <Link to="/"><ButtonContainer>
                                            back to product
                                            </ButtonContainer>
                                           </Link>
                                           <ButtonContainer cart disabled={inCart?true:false}
                                                onClick={()=>{
                                                    value.addToCart(id);
                                                    value.openModal(id)
                                                }}
                                            >
                                                {inCart ?"inCart": "add to Cart"}    
                                            </ButtonContainer>
                                    </div>
                                </div>
                           </div>
                       </div>
                   )
               }}


           </ProductConsumer>
        )
    }
}
