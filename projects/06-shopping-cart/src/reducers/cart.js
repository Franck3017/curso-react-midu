export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // 👀 una forma sería usando structuredClone
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}


export function cartReducer(state, action) {
  // El type -> es el string que indica la acción a realizar
  // El payload -> es la información necesaria para actualizar el estado
  // const { type, payload } = action
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state

  // switch (type) {
  //   case CART_ACTIONS_TYPES.ADD_TO_CART: {
  //     const { id } = payload
  //     const productInCartIndex  = state.findIndex(cartItem => cartItem.id === id)
  //     if (productInCartIndex >= 0) {
  //       const newState = structuredClone(state)
  //       newState[productInCartIndex].quantity += 1
  //       updateLocalStorage(newState)
  //       return newState
  //     }
  //     const newState =  [
  //       ...state,
  //       {
  //         ...payload,
  //         quantity: 1
  //       }
  //     ]

  //     updateLocalStorage(newState)

  //     return newState
  //   }
  //   case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
  //     const { id } = payload
  //     const newState = state.filter(item => item.id !== id)
  //     updateLocalStorage(newState)
  //     return newState
  //   }
  //   case CART_ACTIONS_TYPES.CLEAR_CART: {
  //     updateLocalStorage(initialState)
  //     return initialState
  //   }
    
  //   default:
  //     return state
  // }
}