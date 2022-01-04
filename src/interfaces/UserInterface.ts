export interface IUserInterface {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: Array<string>;
  validFrom: string;
  validTo: string;
}

export const defaultUser: IUserInterface = {
  userId: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  role: [''],
  validFrom: '',
  validTo: '',
};

export interface IProfileInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export const defaultProfile: IProfileInterface = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};

// "firstName": "string",
//   "lastName": "string",
//   "email": "string",
//   "phoneNumber": "string"
