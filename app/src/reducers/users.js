const initialState = {
  data: [],
  loading: false
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_USERS':
      return {...state, loading: true}

    case 'RECIEVE_USERS':
      return {
        ...state,
        loading: false,
        data: action.users
      }

    default:
      return state
  }
}

export default users
