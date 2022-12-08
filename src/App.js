// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer'; 
import React ,{useState} from 'react';
import Top from './components/Top';
import Additems from './Additems';

function App() {  
  const products =[
    {
      price: 99999,
      name : "IPhone14",
      quantity : 0,
    },
    {
      price: 9999,
      name : "redme9",
      quantity : 0,
    },
    {
      price: 999,
      name : "Mivi-earpods",
      quantity : 0,
    },
    {
      price:  230000,
      name : "Tank",
      quantity : 0,
    }
  ]
  let [productList, setProductList]=useState(products);  // statehook formation
  let [totalamount, settotalamount]=useState(0);         // hook for changing  totalamount=  sum of  (price*quantity)  of all element in array  product

  const incrementQuantity = (index)=>{
    let newProductList=[...productList]
    let newamount =totalamount;
    newamount += newProductList[index].price; 
    newProductList[index].quantity++; 
    settotalamount(newamount);
    setProductList(newProductList);
  };
 const decrementQuantity = (index)=>{
    let newProductList=[...productList];
    let newamount =totalamount;
     if(newProductList[index].quantity>0) {
      newProductList[index].quantity--
      newamount -=  newProductList[index].price; 
    }
    settotalamount(newamount);
    setProductList(newProductList);
  };
  
const resetfunction=()=>{
    let newProductList=[...productList];
    newProductList.map((products)=>{
      products.quantity=0;
    } )

    setProductList(newProductList);
     settotalamount(0); 
        
   }

const removeitem = (index) => { 
   let newProductList=[...productList];
   let newamount =totalamount;
    newamount-=newProductList[index].quantity * newProductList[index].price;
   newProductList.splice(index,1);
   setProductList(newProductList);
   settotalamount(newamount);
   };

  const Additem = (name,price) => {
   let newProductList=[...productList];
   newProductList.push({
    price:price,
    name:name,
    quantity:0
   })
   setProductList(newProductList);
   }
       
  return (
    <>
     
    <Navbar/>
      <main className='container mt-5'>
    <Additems Additem={Additem}/>
      <Top/>
    
    <ProductsList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeitem={removeitem}/>
    </main>
    
    <Footer  totalamount={totalamount}   resetfunction={resetfunction}  />
    </>
  );
}

export default App;
