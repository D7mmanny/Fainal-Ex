import axios from "axios"
import Card from "../Components/Card"
import Nave from "../Components/Nave"
import {useState,useEffect} from "react"
import Footer from "../Components/Footer"



function Home() {

    const [products,setProducts]=useState([])
       useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            setProducts(res.data)
        })
    
    
    },[])
    
 console.log(products);
 
    
    

  return (
    <div className="bg-gray-300">
        <div>
            <Nave/>
        </div>
            
        <div className="flex justify-center bg-gray-300">
            <div className="grid grid-cols-4 w-10/12 gap-x-5 gap-y-5 ">
                
                   {
                    products.map(item =>{
                        return(
                            <div><Card title={item.title} image={item.image}/></div>
                        )
                    })
                   }
                

            </div>
        </div>

       





        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Home