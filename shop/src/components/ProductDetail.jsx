import React from 'react'
import { useParams } from 'react-router-dom'
import LandingHeader from './LandingHeader'
import Footer from "./Footer"
import { useState , useEffect} from 'react'
import axios from "axios"

export default function ProductDetail() {
  const {id} = useParams()
  const [data , setData] = useState([])
  const [procate , setProcate] = useState("")
  useEffect(() => {
axios.get("http://localhost:8090/api/products").then(res => setData(res.data.result))
  },[])
  return (
    <div className='container-fluid'>
        <LandingHeader/>
        <div className='container d-flex  py-5 '>
          {data.map((e)=> {
            if(e.productId == id) {
            return(
              <div className='d-flex justify-content-between'>
              <div className='col-md-6 border rounded'>
                <img src={e.thumbImg} alt="" style={{width : "100%" , height : "100%"}}/>
              </div>
              <div className='col-md-5 pt-5'>
                <h2>{e.productName}</h2>
                <span>{e.categoryName}</span>
                <p className='pt-3'>{e.description}</p>
                <h2 className='pt-2'>
                  ${e.price}
                </h2>
                <div className='d-flex pt-4 justify-content-between w-100'>
                  <button className='col-md-5 btn btn-success'>Buy Now</button>
                  <button className='col-md-5 btn btn-white border-dark'>Add to Chart</button>
                </div>
              </div>
              </div>
            )}
          })}
        </div>
        <div className='container'>
<h2>Related Items</h2>
<div className='container d-flex gap-3 overflow-auto pt-3'>
  {data.map((e)=> {
    
    return(
      <div className='col-md-4'>
        <div className='card-head'>
        <img src={e.thumbImg} alt="" style={{width : "100%" , height : "50%"}}/>
        </div>
       <div className='card-body text-truncate'>
        <p className='text-secondary'>{e.categoryName}</p>
        <h2>{e.productName}</h2>
     <span>{e.description}</span>
     <h2>${e.price}</h2>
       </div>

      </div>
    )
  })}
</div>
        </div>
        <Footer/>
    </div>
  )
}
