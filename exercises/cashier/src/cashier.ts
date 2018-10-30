interface CartItem {
  type: string;
  price: number;
  qty: number;
}
interface CartAPI {
  add: (type: string, price: number, qty: number) => CartAPI;
  addItem: (item: CartItem) => CartAPI;
  length: number;
  total: number;
}

export function cashier(): CartAPI {
  let cart: CartItem[] = [];
  return {
    add(type: string, price: number, qty: number = 1) {
      cart.push({ type, price, qty });
      return this;
    },
    addItem(item) {
      cart.push(item);
      return this;
    },
    get length() {
      return cart.reduce((acc, item) => acc + item.qty, 0);
    },
    get total() {
      return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    }
  };
}
