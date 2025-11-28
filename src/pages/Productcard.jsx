

import { useState } from "react";

export default function Productcard({onConfirm,onCancel,data}) {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [stockQuantity,setStockquantity] = useState('');

    const clickConfirm =  () => {
        let productData = {
            name: name,
            description: description,
            category: category,
            price: price,
            stock_quantity: stockQuantity
        }
        let id = data.id? data.id : 0;
        onConfirm(id, productData);
    }
    

 

    return (
    <div className='w-full h-full flex justify-center items-center'>

        <div className="w-1/4 h-[600px] rounded-lg bg-[#121a23] flex flex-col justify-center items-center gap-y-5  " >
            <div className="">
            <h1 className="text-white text-3xl font-bold">Agregar</h1>
            </div>
            <div className="">

                <p className="text-white py-2">Nombre</p>
                <input value={data.name? data.name :''} onChange={(e)=> setName(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Descripcion</p>
                <input  value={data.description? data.description :''} onChange={(e)=> setDescription(e.target.value)}  type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Categoria</p>
                <input value={data.category? data.category :''} onChange={(e)=> setCategory(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Precio</p>
                <input value={data.price? data.price :''} onChange={(e)=> setPrice(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">Stock</p>
                <input value={data.stockQuantity? data.stock :''} onChange={(e)=> setStockquantity(e.target.value)} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

            </div>
            <div className="flex gap-5">
                <button onClick={onCancel}   className="border rounded-md w-[130px] h-[35px]" >Cancelar</button>
                <button onClick={clickConfirm} className="border rounded-md w-[130px] h-[35px]" >Confirmar</button>
            </div>
        </div>
      
    </div>
    
  )
}