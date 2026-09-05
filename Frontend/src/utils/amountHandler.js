    // Function untuk menambah item
export const addAmount = (item, food) => {
    const cartItem = food.find((data) => data.name === item.name);
    const currentAmount = cartItem ? cartItem.amount : 0;

    // Batas maksimal 5 item
    if (currentAmount >= 5) return food;

    if (cartItem) {
        // Jika item sudah ada, tambah amount + 1
        return food.map((data) =>
        data.name === item.name ? { ...data, amount: data.amount + 1 } : data
        );
    }

    // Jika item belum ada, tambah sebagai item baru
    const newItem = {
        name: item.name,
        price: item.prepTimeMinutes,
        amount: 1,
        image: item.image
    };
    return [...food, newItem];
    };

    // Function untuk mengurangi item
export const minusAmount = (item, food) => {
    const cartItem = food.find((data) => data.name === item.name);
    if (!cartItem) return food;

    // Kurangi amount item yang cocok
    const updated = food.map((data) =>
        data.name === item.name ? { ...data, amount: data.amount - 1 } : data
    );

    // Buang item yang amount-nya bernilai 0
    return updated.filter((data) => data.amount > 0);
};