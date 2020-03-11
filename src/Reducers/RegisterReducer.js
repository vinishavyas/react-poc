const RegisterReducer = (state=0, action) => {
    switch(action.type) {
        case 'REGISTERED_SUCCESS':
          return action;
        default:
          return state;
      }
}

export default RegisterReducer;