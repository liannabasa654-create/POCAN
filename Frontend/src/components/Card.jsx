import { Minus } from "lucide-react";
import { useEffect } from "react"
import { addAmount, minusAmount } from "../utils/amountHandler.js"

function Card({ item, food, setFood }) {
    const cartItem = food.find(data => data.name == item.name);
    let amount = cartItem ? cartItem.amount : 0;

    useEffect(() => {
        localStorage.setItem("food", JSON.stringify(food))
    }, [food])

    const handleAdd = () => {
        const updatedCart = addAmount(item, food);
        setFood(updatedCart);
    };

    const handleMinus = () => {
        const updatedCart = minusAmount(item, food);
        setFood(updatedCart);
    };


    const buttonStyles = "w-5 h-5 rounded-full flex items-center justify-center text-lg"
    return(
        <div className="bg-blue-200 flex flex-col justify-between p-2 rounded-lg w-37 h-47">
            <div className="w-full h-25 rounded-lg bg-gray-200">
                <img src={item.image} alt="gambar makanan" className="rounded-lg w-full h-full" />
                <h1 className="font-semibold text-sm">{item.name}</h1>
            </div>
            <div className="flex justify-between items-end">
                <p>${item.prepTimeMinutes}</p>
                <div className="flex items-center gap-3">
                    <button onClick={handleMinus} className={`${buttonStyles} bg-blue-100 text-blue-600`}><Minus /></button>
                    <p>{amount}</p>
                    <button className={`${buttonStyles} bg-gray-700 text-white`} onClick={handleAdd}><span className="text-blue-200">+</span></button>
                </div>
            </div>
        </div>
    )
}

export default Card