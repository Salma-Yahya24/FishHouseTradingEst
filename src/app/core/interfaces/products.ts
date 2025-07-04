export interface Products {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  isDeleted: boolean;
}

export interface addProduct {
  name: string;
  price: number;
}
export interface MostProductResponse {
  success: boolean;
  data: string | string[];
}

export interface editProduct {
  id: number;
  name: string;
  price: number;
}
