import { IAppState, IDispatch } from '../interfaces/AppInterface';
import { defaultUser } from '../interfaces/UserInterface';

const appReducer = (state: IAppState, action: IDispatch) => {
  switch (action.type) {
    case 'LOG_OUT':
      console.log('logging out');
      localStorage.clear();
      sessionStorage.clear();
      return {
        isAuthenticated: false,
        token: '',
        user: defaultUser,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
