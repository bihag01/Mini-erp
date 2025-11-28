
import { getProducts, deleteProducts, putProducts, postProducts } from "../components/utils";
import { useLocalStorage } from "../components/useLocalStorage";
import { useState, useEffect } from "react";
import TableProducts from "../components/TableProducts";
import Productcard from "../components/Productcard";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState(null);             // id del producto a editar? (null | Number)
    const [editingProd, setEditingProd] = useState(null);   // producto a editar
    const [newProduct, setNewProduct] = useState(false);    // Se creara un nuevo producto?
    const [tokens, setTokens] = useLocalStorage("miniERPTokens");

    // READY
    async function fetchProducts() {
        try{
            let data = await getProducts(tokens?.accessToken);
            let array = data.results;
            
            setProducts(array);
        }catch(e){
            console.error("ERROR AL FETCH:", e);
            alert(`${e.status}: ${e.message}`);
        }
    }
    
    // READY
    async function deleteProd(productId) {
        try{
            await deleteProducts(tokens?.accessToken, productId);

        }catch(e){
            console.error("ERROR AL DELETE:", e);
            alert(`${e.status}: ${e.message}`);
        }
    }

    // READY
    async function createProd(productId, newProd) {
        try{
            let data = await postProducts(tokens?.accessToken, newProd);
            console.log(data)

        }catch(e){
            console.error("ERROR AL POST:", e);
            alert(`${e.status}: ${e.message}`);
        }

        await fetchProducts();
        setNewProduct(false);
    }

    // READY
    async function updateProd(productId, newProd) {
        try{
            await putProducts(tokens?.accessToken, productId, newProd);

        }catch(e){
            console.error("ERROR AL PUT:", e);
            alert(`${e.status}: ${e.message}`);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    async function handleDelete(productId) {
        if(confirm("Are you sure you want to delete this item?")) {
            await deleteProd(productId);
            await fetchProducts();
        }
    }
    
    // function que llama onConfirm del component ProductCard
    async function handleUpdate(productId, newProd) {
        await updateProd(productId, newProd);
        await fetchProducts();
        setEditId(null);
    }

    // funcion que llama el boton edit de un row
    function onEdit(productId) {
        let prod = products.find(prod => prod.id === productId);
        if (!prod) return;

        let updProd = {
            id: prod.id,
            name: prod.name,
            description: prod.description,
            category: prod.category?.id,
            price: prod.price,
            stock_quantity: prod.stock_quantity
        };
        setEditingProd(updProd);
        setEditId(productId);
    }

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            {newProduct?
                // newProduct === true
                (
                    <>
                        <Productcard
                            onConfirm={createProd}
                            onCancel={ () => setNewProduct(false) }
                        />
                    </>
                )
                :
                // newProduct === false
                (editId != null ?
                    // editId === null
                    (
                        <>
                            <div>{editId}</div>
                            <Productcard
                                onConfirm={handleUpdate}
                                onCancel={ () => setEditId(null) }
                                data={editingProd}
                            />
                        </>
                    )
                    
                    :

                    // editId === Number
                    (
                        <>
                            <div className="flex w-[70%] h-[5%] justify-start gap-[10px]">
                                <button
                                    onClick={fetchProducts}
                                    className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/30 h-[80%] border-[3px] border-[#1f2937] rounded-md">
                                    Refresh
                                </button>
                                <button
                                    onClick={() => setNewProduct(true)}
                                    className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/30 h-[80%] border-[3px] border-[#1f2937] rounded-md">
                                    New Product
                                </button>
                            </div>
                            <TableProducts products={products} onEdit={onEdit} onDelete={handleDelete}/>
                        </>
                    )
                )
            
            }
            
        </div>
    )
}