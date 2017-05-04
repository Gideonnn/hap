import { Category } from '../models/category.model';

export const INIT_DATA = 'INIT_DATA';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const categories = (state: Category[], action: { type: string, payload: any }) => {
  switch (action.type) {

    case INIT_DATA:
      return state = [...action.payload];

    case INCREMENT:
      return state = state.map(category => {
        return category.name === action.payload.name ? increment(category) : category;
      });

    case DECREMENT:
      return state = state.map(category => {
        return category.name === action.payload.name ? decrement(category) : category;
      });

    default:
      return state;
  }
};

const increment = (category: Category): Category => {
  return Object.assign({}, category, { amount: category.amount + 1 });
};

const decrement = (category: Category): Category => {
  return Object.assign({}, category, { amount: category.amount > 0 ? category.amount - 1 : 0 })
};
