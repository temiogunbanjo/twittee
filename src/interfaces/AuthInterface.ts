export interface LoginDTO {
  email: string;
  password: string;
}

export const loginDTO: LoginDTO = {
  email: '',
  password: '',
};

export interface SignupDTO {
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupDTO: SignupDTO = {
  email: '',
  password: '',
  confirmPassword: '',
};
