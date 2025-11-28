import { getProducts } from "../components/utils";

export default function TableProducts({ products, setEdit, onDelete }) {
    
    
    return (
        <div className="w-[70%] h-[80%] bg-[#121a23] border border-[#1f2937] rounded-xl shadow-lg flex flex-col">

            {/* TH */}
            <div className="h-[30px] flex bg-[#1f2937] rounded-t-xl text-lg">
                <p className="text-center w-[6%]">id</p>
                <p className="w-[20%]">name</p>
                <p className="ml-[5px] flex-1">descripion</p>
                <p className="text-center w-[10%]">category</p>
                <p className="text-center w-[7%]">price</p>
                <p className="text-center w-[7%]">stock</p>
                <p className="text-center w-[8%]">actions</p>
            </div>

            {/* TB */}
            <div className="flex flex-col flex-1 rounded-b-xl overflow-y-auto">
                {products.map(product => (
                    <div key={product.id} className="flex w-full h-[45px] border-b border-[#1f2937] items-center">
                        <div className="text-center w-[6%]">{product.id}</div>
                        <div className="w-[20%] whitespace-nowrap overflow-x-hidden">{product.name}</div>
                        <div className="ml-[5px] flex-1 whitespace-nowrap overflow-x-hidden">{product.description}</div>
                        <div className="text-center w-[10%]">{product.category?.name}</div>
                        <div className="text-center w-[7%]">{product.price}</div>
                        <div className="text-center w-[7%]">{product.stock_quantity}</div>
                        <div className="justify-center w-[8%] flex gap-[10px]">
                            <svg onClick={() => {setEdit(product.id)}} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebebeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                            <svg onclick={() => {onDelete(product.id)}} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebebeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}