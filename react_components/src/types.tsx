export interface FormState {
  forms: Forms[];
  isSubmited: boolean;
  isValidPhone: boolean;
  isValidName: boolean;
}

export interface Forms {
  name: string;
  phone: string;
  date: string;
  select: string;
  checkbox: boolean;
  gender: string;
  file: string;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
