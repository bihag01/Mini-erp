
import { getProducts } from "../components/utils";
import { useLocalStorage } from "../components/useLocalStorage";
import { useState, useEffect } from "react";
import TableProducts from "../components/TableProducts";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState(null);
    const [tokens, setTokens] = useLocalStorage("miniERPTokens");

    async function fetchProducts() {
            let data = await getProducts(tokens?.accessToken);
            let array = data.results;
            
            setProducts(array);
        }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    function handleDelete(productId) {
        if(confirm("Are you sure you want to delete this item?")) {
            async function fetchProducts() {
                let data = await deleteProducts(tokens?.accessToken, productId);
                let array = data.results;
                
            }
            fetchProducts();
        }
    }

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            {editId ?
               (<div>g</div>)
               :
               (<>
               <div className="flex w-[70%] h-[5%] justify-start gap-[10px]">
                    <button
                        onClick={() => { } }
                        className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/30 h-[80%] border-[3px] border-[#1f2937] rounded-md">
                        Refresh
                    </button>
                    <button
                        onClick={() => { } }
                        className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/30 h-[80%] border-[3px] border-[#1f2937] rounded-md">
                        New Product
                    </button>
                </div>
                <TableProducts products={products} />
                </>)
            }
            
        </div>
    )
}