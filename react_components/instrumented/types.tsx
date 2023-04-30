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

export interface CardPic {
  id: string;
  image: string;
  title: string;
  owner: string;
  server: string;
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: string;
  title: string;
}

export interface Photos {
  page: string;
  pages: string;
  perpage: string;
  total: string;
  photo: Photo[];
}
export interface DataApi {
  photos: Photos;
}

export type CardsProps = {
  cards: CardPic[];
};
