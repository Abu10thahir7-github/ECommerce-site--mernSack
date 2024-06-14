import React from 'react'
import './cart.css'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import shoes from './shoes.jpeg'
function Carts() {




    const items =['Football & Kits','Shoes','Laptop & PC' , 'Shirt','Light & Bulbs' ]
  return (
    <div className='Cart'>
        <div className="fil-pri-bra-toggle">
            <div className="fil-pri-bra">
              <select name="" id="">
                <option value="0">Sort by</option>
                <option value="">New</option>
                <option value="">Old</option>
              </select>
              <select name="" id="">
                <option value="0">Sort by</option>
                <option value="">New</option>
                <option value="">Old</option>
              </select>
              <select name="" id="">
                <option value="0">low - high</option>
                <option value="">0 - 199</option>
                <option value="">200 - 500</option>
                <option value="">500 - 1000</option>
                <option value="">1000 - 3000</option>
              </select>
            </div>
            
               <div className="related">
                <p className='rele-name'>Related</p>
                <div className="rele-con">

                {
                    items.map((datas)=>
                        
                        <p className="rele-item">{datas}</p>
                    )
                }
                </div>
               </div>
        </div>

        <div className="carts">
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
            <div className="cart-con">
                <div className="cart-img">

                <img src={shoes} alt="" />
                </div>
                <p className='cart-title'> a architectoi minunisi et neque dolores culpa quia, quas fuga aliquam, dolorum fugiat?</p>
                 <p className="cart-price">$45.09</p>
                 <p className="cart-minTitle">Lorem  ctetur adipisicing elit. Blanditiis, id.</p>
                  <div className="cart-footer">
                      <div className="star-rating">
                         <div className="stars">
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarRateRoundedIcon className='star' />
                            <StarOutlineRoundedIcon className='star' />
                         </div>
                            <p className="rating">4.04</p>
                         <div className="cart-btn">
                            <button> <FavoriteBorderIcon className='heart-icon' />Watch</button>
                         </div>
                      </div>
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default Carts