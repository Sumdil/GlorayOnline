export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}