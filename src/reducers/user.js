// import _ from 'lodash';
import I from 'seamless-immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';


const initialState = I.from({
  name: '',
});

export const LOGIN = createAction('LOGIN');

export function login(e: Object) {
  e.preventDefault();
  return (dispatch) => {
    dispatch(LOGIN({ name: 'Jairo' }));
  };
}

export default handleActions({
  LOGIN: (state, action) => I.merge(state.name, action.payload),
}, initialState);
