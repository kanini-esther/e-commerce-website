import React from "react";
import "./App.css";

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Vegetables", "Fruits", "Legumes", "Cerials"],
      quantity: ["2kg", "500g", "400g", "600g", "1kg"],
      price: [100, 50, 40, 1000, 2550, 45, 478, 69, 230, 145, 745, 589],
      name: ["Apple", "Mango", "Orange", "Pineapple", "Watermelon", "Banana", "Maize", "Mango"]
    };
  }
  render() {
    return (
      // <div>
      //   <LoginControl />
      // </div>
      // const doubled = price.map((p) => p * 2)

      
      <div style={{textAlign: "center"}}>
        
        <section className="products">
    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/apple.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[0]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[0]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>

    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/mango.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[1]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[1]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>


    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/orange.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[2]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[2]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/pineaple.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[3]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[3]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>


    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/watermelon.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[4]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[4]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/banana.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[5]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[5]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/mahindi.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[6]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[6]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="assets/carrot.jpeg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[7]}</h3>
        <p>Sweet</p>
      </div>
    <hr></hr>
      <div className="price">
      <h3>Kes {this.state.price[7]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>




        </section>
      </div>
    );
    
 
  }
  
}
export default Fruits;
