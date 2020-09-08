import React from "react";
import "./App.css";

import Form from "./index.jsx";
// import LoginControl from "./greetings.jsx";
// import "./assets";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Vegetables", "Fruits", "Legumes", "Cerials"],
      quantity: ["2kg", "500g", "400g", "600g", "1kg"],
      price: [100, 50, 40, 1000],
    };
  }
  render() {
    return (
      // <div>
      //   <LoginControl />
      // </div>
      // const doubled = price.map((p) => p * 2)

      
      <div style={{textAlign: "center"}}>
        <h1>GREENS KIOSK</h1>
        <h2>Vegetables</h2>
        <section className="products">
          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/mahindi.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Mahindi</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/skuma.jpg"/>
           </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/omena.png"/>
           </div>
            <div className="product-info">
              <h5> Omena</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>



          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/potato.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Potato</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>



          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/spinach.jpg"/>
           </div>
            <div className="product-info">
              <h5> Spinach</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          {/* //Fruits display */}


          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/pineaple.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Pineapple</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/mango.jpg"/>
           </div>
            <div className="product-info">
              <h5> Mango</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/orange.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Orange</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/tomato.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Tomato</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
             <img className="photo" src="assets/tomato.jpeg"/>
           </div>
            <div className="product-info">
              <h5> Tom</h5>
              <p> Kes {this.state.price[0]}</p>
              <p> Quantity {this.state.quantity[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>



          

        </section>
      </div>
    );
    
 
  }
  
}
export default App;
