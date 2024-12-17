import React from 'react'
import { Data } from '../Data/products'
import {useLocation,useNavigate} from 'react-router-dom'

const Products = () => {
    const location=useLocation() 
    const navigate=useNavigate()

    const queryparams=new URLSearchParams(location.search) // these helps in distructuring the query paramas
    console.log(queryparams)
    // extract the parameters
    const category=queryparams.get("category")
    const sort=queryparams.get("sort")
    console.log(category)

    //filtering thev products 
    const filteredProducts=Data.filter((product)=>category?product.category===category:true)
    console.log(filteredProducts) 


    //sorting the products
    if(sort==="asc"){
        filteredProducts.sort((a,b)=>a.price-b.price)
    }else if(sort==="des"){
        filteredProducts.sort((a,b)=>a.price-a.price)
    }

    function HandleFilter(key,value){
        if(value){
            queryparams.set(key,value)
        }else{
            queryparams.delete(key)

        }
        navigate(`?${queryparams.toString()}`)

    }

  return (
    <div className="container text-center">
        <h1>Shop The Best Summer Deals</h1>
        {/*category filter section start */}
        <div className=''>
            <h3>Filter By Category</h3>
            {/*button start*/}
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={()=>HandleFilter("category","men's clothing")} className="btn btn-danger">Men's clothing</button>
                <button type="button" onClick={()=>HandleFilter("category","women's clothing")} className="btn btn-warning">Women's clothing</button>
                <button type="button" onClick={()=>HandleFilter("category","electronics")} className="btn btn-info">Electronics</button>
                <button type="button" onClick={()=>HandleFilter("category","jewelery")} className="btn btn-success">Jewelery</button>
                <button type="button" onClick={()=>HandleFilter("category","All products")} className="btn btn-primary">All products</button>
            </div>
            {/*button end*/}
        </div>

        {/*category filter section end */}

        {/*sort buttons start */}
        <div className='sort-products'>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={()=>HandleFilter("sort","asc")} className="btn btn-danger">LOW</button>
                <button type="button" onClick={()=>HandleFilter("sort","des")} className="btn btn-warning">HIGH</button>
            </div>
        </div>

        {/* sort buttons end*/}

        {/*products start */}
        <div className='row gy-3'>
            {
                filteredProducts.length>0?filteredProducts.map((ele)=>(
                    
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className="card shadow p-3">
                            <img src={ele.image} alt="" width={"100%"} height={"150px"} />
                            <h1 className="card-title">{ele.title.slice(1,15)}</h1>
                            <p className="card-text">{ele.price}</p>
                        </div>
                    </div>

                )):"No-products Found"
            }

        </div>
        {/*products end */}
    </div>
  )
}

export default Products