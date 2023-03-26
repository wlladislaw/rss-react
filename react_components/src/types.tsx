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
