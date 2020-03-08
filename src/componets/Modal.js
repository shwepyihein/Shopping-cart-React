import React, { Component } from 'react'
import styled from 'styled-components';
import {PorductConsumer, ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
export default class  extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   const {modalOpen,closeModal}=value;
                   const {img,title,price} =value.modalProduct;

                   if(!modalOpen){
                       return null
                   }else{
                     return(  <Modalcontainer>
                            <div className="container">
                                <div className="row">
                                    <div  id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item add to cart</h5>
                                        <img src={img} alt="prodcut" className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">  Price: {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>{                                                
                                                closeModal()}}>
                                                store
                                            </ButtonContainer>
                                        </Link><br/>
                                        <Link to='/cart'>
                                            <ButtonContainer  onClick={()=>closeModal()}>
                                                    got to cart
                                            </ButtonContainer>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                       </Modalcontainer>
                     )}
                   
               }}
           </ProductConsumer>
        )
    }
}

const Modalcontainer=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    justify-content: center;
    align-items: center;
    #modal{
        background:var(--mainWhite);
    }

`