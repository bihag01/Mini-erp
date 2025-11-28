

export default function Products() {

    return (
        <div className='w-full h-full flex justify-center items-center'>
        <div className="w-1/4 h-1/4 rounded-lg bg-[#121a23] flex flex-col justify-center items-center gap-y-5" >
            <div className="">
                <h1>Bienvenido</h1>
            </div>
            <div className="">
                <p className="text-white py-2">nombre</p>
                <input   type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

                <p className="text-white py-2">descripcion</p>
                <input   type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>
               
                <p className="text-white py-2">categoria</p>
                <input   type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>
                <p className="text-white py-2">precio</p>
                <input   type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>
                <p className="text-white py-2">stock</p>
                <input   type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>
            </div>
            <button className="border rounded-md w-[30px] h-[10]" >Iniciar sesion</button>
            
        </div>
      
    </div>
     
    )
}