# TYPESCRIPT BASICS WITH REACT

I followed a freecodecamp article to learn typescript with using it with react . In this repo i follow multiple articles which teaches on how to use typescript in react projects

## FIRST ARTICLE - [link for first article](https://www.freecodecamp.org/news/use-typescript-with-react/)

In the first article i learned about these things in typescript react

- Creating function with props and creating types using interface and type keyword
- using types with react hooks
- fetching data using a api
- creating mouseEvent using typescript
- creating ChangeEvent using typescript

## Second Article - [Link for second article](https://www.smashingmagazine.com/2023/05/guide-redux-toolkit-typescript/)

In the second article i learned about these things in typescript react with redux toolkit for state management

- I encountered the bug of unable to use this code `ref.current.value = ""` to change the value of the useRef used in the input tag when using typescript
- creating slices for counter and issue components
- created initialState Types using typescript interface keyword for
- created the store using .ts extension
- exported the types of store as RootStore and dispatch as appDispatch
- learned about creating custom hooks for dispatch actions

```typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
```

- learned about creating async function using `createAsyncThunk` to fetch data from the apis
- creating slices using extrareducers builder.addCase to write the fetch function at different cases like pending,fulfilled,rejected
