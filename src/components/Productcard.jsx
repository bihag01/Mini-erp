

import { useState, useEffect } from "react";

export default function Productcard({onConfirm,onCancel,data}) {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState(0);
    const [price,setPrice] = useState(0);
    const [stockQuantity,setStockquantity] = useState(0);

    const clickConfirm =  () => {
        let productData = {
            name: name,
            description: description,
            category_id: parseInt(category),
            price: parseFloat(price),
            stock_quantity: parseInt(stockQuantity)
        }
        let id = data?.id || 0;
        
        onConfirm(parseInt(id), productData);
    }
    
    useEffect(() => {
        if(data){
            setName(data.name || '');
            setDescription(data.description || '');
            setCategory(data.category || 0);
            setPrice(data.price || 0);
            setStockquantity(data.stock_quantity || 0);
        }
    }, [data]);
 

    return (
    <div className='w-full h-full flex justify-center items-center'>

        <div className="w-1/4 h-[600px] rounded-lg bg-[#121a23] flex flex-col justify-center items-center gap-y-5  " >
            
            <div className="text-white">

                <p className="text-white py-2">Nombre</p>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Descripcion</p>
                <input  value={description} onChange={(e)=> setDescription(e.target.value)}  type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Categoria</p>
                <input value={category} onChange={(e)=> setCategory(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Precio</p>
                <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Stock</p>
                <input value={stockQuantity} onChange={(e)=> setStockquantity(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

            </div>
            <div className="flex gap-5">
                <button onClick={onCancel}   className="border rounded-md w-[130px] h-[35px] hover:cursor-pointer" >Cancelar</button>
                <button onClick={clickConfirm} className="border rounded-md w-[130px] h-[35px] hover:cursor-pointer" >Confirmar</button>
            </div>
        </div>
      
    </div>
    
  )
}