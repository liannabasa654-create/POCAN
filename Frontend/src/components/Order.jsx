import { XIcon, Plus, Minus } from "lucide-react";

function Order({ item, setItems }) {
    const datas = JSON.parse(localStorage.getItem("food"));
    const addItem = () => {
        if (item.amount >= 5) return;

        const newData = datas.map((data) => {
            return data.name === item.name ? { ...data, amount: data.amount + 1 } : data
        });

        setItems(newData);
    }
    
    const minusItem = () => {
        if (item.amount - 1 == 0) {
            const newData = datas.filter(data => data.name != item.name);
            setItems(newData)
            return;
        }
        
        const newData = datas.map((data) => {
            return data.name === item.name ? { ...data, amount: data.amount - 1 } : data
        });
        setItems(newData);
    }

    const deleteItem = () => {
        const data = JSON.parse(localStorage.getItem("food"));
        const newData = data.filter(data => data.name != item.name);
        setItems(newData)
    }
    return (
        <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-xs w-full max-w-sm mx-auto">
        {/* 1. Checkbox Aktif */}
        <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
            <XIcon className="w-4 h-4 stroke-[3]" onClick={deleteItem}/>
        </div>

        {/* 2. Gambar Produk */}
        <div className="w-22 h-22 rounded-xl bg-pink-100/60 shrink-0 flex items-center justify-center overflow-hidden">
            <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            />
        </div>

        {/* 3. Detail Informasi Produk */}
        <div className="flex-1 flex flex-col justify-between h-22 py-0.5">
            <div>
            <h1 className="font-bold text-gray-900 text-sm line-clamp-1 leading-tight">
                {item.name}
            </h1>
            <p className="text-[11px] text-gray-400 mt-0.5">
                Jumlah : {item.amount}
            </p>
            </div>

            <div className="flex items-baseline gap-0.5 text-blue-300 font-bold text-base">
            <span className="text-xs">$</span>
            <span>{item.price}</span>
            <span className="text-[10px] font-normal text-gray-400 ml-0.5">/porsi</span>
            </div>
        </div>

        <div className="flex flex-col items-center justify-between h-22 shrink-0 py-0.5">
            <div className="w-6 h-6 rounded-full border border-blue-300 text-lime-600 flex items-center justify-center">
            <Minus className="w-3.5 h-3.5 stroke-[2.5]" onClick={minusItem}/>
            </div>

            <span className="text-xs font-semibold text-blue-300">{item.amount}</span>

            <div className="w-6 h-6 rounded-full bg-blue-300 text-white flex items-center justify-center">
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" onClick={addItem}/>
            </div>
        </div>
        </div>
    );
}

export default Order;