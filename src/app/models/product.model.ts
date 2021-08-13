export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Ao quan',
    price: 15000,
    description: 'Lorem ipsum dolor sit amet, consectetur elit.'
  },
  {
    id: 2,
    name: 'Giay dep ',
    price: 60000,
    description: 'Lorem ipsum dolor sit amet, consectetur elit.'
  },
  {
    id: 3,
    name: 'Dien thoai',
    price: 30000,
    description: 'Lorem ipsum dolor sit amet, consectetur elit.'
  }
];