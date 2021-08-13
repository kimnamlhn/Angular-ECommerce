export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Ao dai Viet Nam',
    price: 15000,
    description: 'Ao dai Viet Nam mang phong cach Viet Nam :)'
  },
  {
    id: 2,
    name: 'Dien thoai iphone',
    price: 60000,
    description: 'Dien thoai iphone nhung co CH play'
  },
  {
    id: 3,
    name: 'Nguoi yeu cho dan FA',
    price: 30000,
    description: 'Tao e qua nen t muon mua mon nay'
  }
];