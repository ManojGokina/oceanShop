import React, { useEffect, useState } from "react";
import './YourOrders.css'
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import { db } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";

function YourOrders() {
  const cartItem = JSON.parse(window.localStorage.getItem("productDesc"));
  const totalPrice = cartItem.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const [yourOrders, setYourOrders] = useState([]);
  console.log(yourOrders);
  const ordersCollectionRef = collection(db, "Orders");

  const [user] = useAuthState(auth);
  let userId = user.uid;

  const addOrder = async () => {
    const orderData = {
      id: userId,
      items: cartItem,
      price: totalPrice,
    };
    console.log(orderData);
    await addDoc(ordersCollectionRef, orderData);
  };

  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef);
      setYourOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getOrders();
  }, []);
  return (
    <div>
      <div className="checkout__header">
        <Header />
      </div>

      <div className="orders_container">
        <div className="order_header">
          <h1>Your Orders</h1>
        </div>
        <div className="ordered__item__container">
          {yourOrders &&
            yourOrders.map((order) => {
              return (
                <div>
                 <div className="order__details">
                
                 <h3>Order Placed By : {user.displayName}</h3>
                 <h3>Total Price: ${order.price}</h3>
                 </div>
                  {order.items &&
                    order.items.map((i) => {
                      return (
                          <>
                        <div className="ordered_products">
                          <img src={i.image} style={{height:"200px", width:"250px" , objectFit:"contain"}} alt="productImg"/>
                          <div className="orderId">
                          <h1 className="ordered_products_title">{i.title}</h1>
                          <h3 className="id">Your Order Id:{order.id}</h3>
                          </div>
                        <Button variant="filled" style={{backgroundColor:"#ff6565", color:"white" , height:"35px"}}>Cancel Order</Button>
                        </div>
                        <Divider id="divider"/>
                        </>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>

      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default YourOrders;
