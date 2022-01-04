import { IUserInterface, defaultUser } from './UserInterface';

export interface IAppState {
  token: string;
  isAuthenticated: boolean;
  user: IUserInterface;
}

export interface IDispatch {
  type: string;
  payload: any;
}

export const initialAppState: IAppState = {
  token: '',
  isAuthenticated: false,
  user: defaultUser,
};

export interface IPrivateRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}
