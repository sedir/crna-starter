/**
 * Created by sedir on 15/09/17.
 */
import * as types from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, loading: false, error: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload};
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload};
    case types.LOGIN_USER_LOADING:
      return { ...state, loading: true};
    case types.LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      };
    case types.LOGIN_USER_FAIL:
      let errorMsg;
      switch (action.payload){
        case 'auth/invalid-email':
          errorMsg = 'Precisa ser um endereço de e-mail correto.';
          break;
        case 'auth/invalid-password':
        case 'auth/weak-password':
          errorMsg = 'Precisa ser uma senha com pelo menos seis caracteres.';
          break;
        case 'auth/email-already-exists':
        case 'auth/email-already-in-use':
          errorMsg = 'Senha incorreta.';
          break;
        default:
          errorMsg = 'Falha na autenticação.';
      }
      return { ...state, error: errorMsg, loading: false};
    default:
      return state;
  }
};