const {createSlice} = require('@reduxjs/toolkit');

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2022-01-22'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 6.26,
    date: new Date('2022-01-29'),
  },
  {
    id: 'e4',
    description: 'Coffee machine',
    amount: 489.99,
    date: new Date('2022-02-15'),
  },
  {
    id: 'e5',
    description: 'Formal shirts',
    amount: 36.77,
    date: new Date('2022-04-01'),
  },
  {
    id: 'e6',
    description: 'Groceries',
    amount: 250.88,
    date: new Date('2022-04-28'),
  },
  {
    id: 'e7',
    description: 'Phone charger',
    amount: 60.0,
    date: new Date('2023-02-15'),
  },
  {
    id: 'e8',
    description: 'Glass plates',
    amount: 34.76,
    date: new Date('2023-02-17'),
  },
  {
    id: 'e9',
    description: 'Dinner at a restaurant',
    amount: 101.2,
    date: new Date('2023-02-20'),
  },
];

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    allExpenses: DUMMY_EXPENSES,
  },

  reducers: {
    addExpense: (state, action) => {
      state.allExpenses.push(action.payload.expense);
    },

    deleteExpense: (state, action) => {
      state.allExpenses = state.allExpenses.filter(
        el => el.id !== action.payload.id,
      );
    },

    updateExpense: (state, action, payload) => {
      const currentItem = state.allExpenses.find(
        el => el.id === action.payload.id,
      );
      const index = state.allExpenses.indexOf(currentItem);
      const updatableExp = state[index];
      const updateItem = {
        ...updatableExp,
        item: currentItem,
      };

      const updatedExpenses = [state];
      updatedExpenses[index] = updateItem;
      //allExpenses[index] = updateItem
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const deleteExpense = expenseSlice.actions.deleteExpense;
export const updateExpense = expenseSlice.actions.updateExpense;

export default expenseSlice.reducer;
