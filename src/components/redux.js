import { createStore } from 'redux';

const initialstate = {
  fullname: '',
  mobile: '', // Correct field name here
  balance: 0,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'deposit':
      return { ...state, balance: state.balance + +action.payload };

    case 'withdraw':
      return { ...state, balance: state.balance - +action.payload };

    case 'mobileupdate':
      return { ...state, mobile: action.payload }; // Correct field name here

    case 'fullnameupdate':
      return { ...state, fullname: action.payload };

    case 'reset':
      return initialstate;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
