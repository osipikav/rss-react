export interface IProduct {
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

export interface ICard {
  inputName: string;
  inputDate: string;
  selectText: string;
  checkboxChecked: boolean;
  radioChecked: string;
  imageUrl?: string;
  imageUploaded: string;
  isFormSubmitted: boolean;
}
