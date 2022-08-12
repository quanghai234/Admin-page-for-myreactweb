import React, { useEffect, useState } from 'react';
import axios from '../api/api';



const Productmng = () => {
  

  const [list,setList] = useState([]);

  useEffect(()=>{
    getProduct();
  },[])

  const getProduct = async()=>{
    await axios.get("product")
    .then(resp=>setList(resp.data))
    .catch(err=>console.log(err))
  }
  

  const handleDelete = async(id)=>{
    await axios.delete('product/'+id)
    let newList = list.filter((product)=>{
      return product.id !== id
    })
    setList(newList)
  }

  const [id,setId] = useState('');
  const [name,setName]=useState('');
  const [imglink,setImg] = useState('');
  const [price,setPrice] = useState(0);
  const [tag,setTag] = useState('');
  const [deal,setDeal] = useState('');
  const [description,setDescription] = useState('');
  const [specification,setSpecification] = useState('');
  

  const handleEdit = (product)=>{ 
    setId(product.id)
    setName(product.name)
    setImg(product.imglink)
    setPrice(product.price)
    setTag(product.tag)
    setDeal(product.deal)
    setDescription(product.description)
    setSpecification(product.specification)
  }


  const handleUpdate = async(e)=>{
    e.preventDefault()
    await axios.put(`product/${id}`,
    {name,imglink,price,tag,deal,description,specification}
    )
    .catch(err=>console.log(err))
    getProduct()
  }


  return (
    <>
      <div className='admin-box'>
        <div className='product-slider'>
          <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumnail</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>              
                <tbody>
                    {
                    list.map((product,index)=>{
                    return <tr key={product.id}>
                        <td>{index+1}</td>
                        <td className='table-main'>
                            <div className='img-box'>
                                <img src={product.imglink} alt='#'/>
                            </div>
                        </td>
                        <td>
                            <div className='name'>
                             {product.name}
                            </div>

                        </td>
                        <td className='action'>
                            <button onClick={()=>handleEdit(product)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onClick={()=>handleDelete(product.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                    })
                    }
                </tbody>       
            </table>
        </div>
        <div className='product-detail'>
        <div className='product-img'>
          <img src={imglink===''
          ?'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
          :imglink} alt='#'/>
        </div>
        <form className='product-form' >
          <div className='single-input'>
            <label htmlFor='name'>Product Name</label>
            <input type='text' id='name' onChange={(e)=>setName(e.target.value)} value={name}></input>
          </div>
          <div className='single-input'>
            <label htmlFor='img'>Product Img Link</label>
            <input type='text' id='img'  onChange={(e)=>setImg(e.target.value)} value={imglink}></input>
          </div>
          <div className='multi-input'>
          <div className='single-input'>

            <label htmlFor='price'>Price</label>
            <input type='text' id='price' onChange={(e)=>setPrice(e.target.value)} value={price}></input>
          </div>
            <div className='single-input'>

            <label htmlFor='tag'>Tag</label>
            <input type='text' id='tag' onChange={(e)=>setTag(e.target.value)} value={tag}></input>
            </div>
            <div className='single-input'>

            <label htmlFor='deal'>Deal</label>
            <input type='text' id='deal' onChange={(e)=>setDeal(e.target.value)} value={deal}></input>
            </div>
          </div>
          <div className='single-input'>
            <label >description</label>
            <textarea
            name=""
            id=""
            cols={50}
            rows={3}
            onChange={(e)=>setDescription(e.target.value)} 
            value={description}
            />
          </div>
          <div className='single-input'>
            <label >specification</label>
            <textarea
            name=""
            id=""
            cols={50}
            rows={3}
            onChange={(e)=>setSpecification(e.target.value)} 
            value={specification}
            />
          </div>
          <button className='form-btn' onClick={(e)=>handleUpdate(e)}>Update</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Productmng