import { useEffect, useState } from "react";
import Order from "../components/Order.jsx"

function Cart() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("food")) || []);
    useEffect(() => {
        localStorage.setItem("food", JSON.stringify(items))
    }, [items])
    console.log(items)
    if (items.length == 0) return <div className="h-100 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-gray-200 p-3 rounded-md shadow-md shadow-blue-200">
            <h1>Kamu Belum Pesan Apapun 😘</h1>
        </div>
    </div>
    return (
        <>
        {items.map(item => {
            return <div className="p-1">
                <Order item={item} setItems={setItems}/>
            </div>
        })}
        </>
    )
}

export default Cart;