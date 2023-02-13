import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"
export default function ProductSection2() {
    const [data , setData] = useState([]);

    const [search , setSearch] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8090/api/products")
        .then(res => setData(res.data.result))
    } , [])
    const onChangeText = (e) => {
      console.log(e.target.value)
      setSearch(e.target.value);
      filterNews(e.target.value)
      e.preventDefault()
    }
const filterNews = (searchParams) => {
  const newArr = data.filter((e) => {
    if(e.productName && e.productName.length > 0){
      return e.productName.toLowerCase().includes(searchParams.toLowerCase())
    }
  })
  if(search === undefined){
    axios.get("http://localhost:8090/api/products")
    .then(res => setData(res.data.result))
  }else{
    setData(newArr)
  }
}

  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='input-group bg-white border-white rounded d-flex px-2'>
                <span className='fs-4 text-secondary'><i class="bi bi-search"></i></span>
                <input type="text" className="form-control border-white rounded" placeholder="Search..." onChange={onChangeText}/>
                <button className='btn text-white bg-success border-success rounded'>Find now</button>
            </div>
            <div className='pt-5 d-flex justify-content-between'>
               <div className='d-flex align-items-center gap-2'>
               <h2 className=''>Total Products </h2>
               <span className='bg-white px-2 border-secondary rounded text-primary'>{data.length}</span>
               </div>
               <button className='btn-light border-white bg-light'><i class="bi bi-list-nested"></i><span className='ps-2'>Sort By</span></button>

            </div>
            <div className='d-flex flex-wrap justify-content-evenly gap-1'>
                {data.map((e) => {
                  
                    return (
                      <div className='card mt-2 col-md-3'>
                       <div className='card-head '>
                         <img src={e.thumbImg} alt="" style={{width : "100%"}}/>
                       </div>
                       <div className='card-body2 px-3 text-truncate'>
                         <span>{e.categoryName}</span>
                         <h2>{e.productName}</h2>
                         <span >{e.description}</span>
                         <h2>{e.price}</h2>
                       </div>
                      </div>
                     )
                  
              
                })}
            </div>
        </div>
    </div>
  )
}
