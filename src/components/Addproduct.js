import axios from '../api/api';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
    
    const [name,setName]=useState('');
    const [imglink,setImg] = useState('');
    const [price,setPrice] = useState(0);
    const [tag,setTag] = useState('');
    const [deal,setDeal] = useState('');
    const [description,setDescription] = useState('');
    const [specification,setSpecification] = useState('');

    const nav = useNavigate();

    const handleAdd = async(e)=>{

        e.preventDefault();

        await axios.post('product',
        {name,imglink,price,tag,deal,description,specification,sold:0,rate:0}
        )
        .then(setName(''),setImg(''),setPrice(0),setTag(''),setDeal(''),setDescription(''),setSpecification(''))
        .catch(err=>console.log(err))

    }

  return (
        <>
        <div className='add-product'>
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
            value={description===undefined
            ?""
            :description}
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
            value={specification===undefined
            ?""
            :specification}
            />
        </div>
        <button className='form-btn' onClick={(e)=>handleAdd(e)}>ADD</button>
        </form>
        </div>
        </>
  )
}

export default Addproduct