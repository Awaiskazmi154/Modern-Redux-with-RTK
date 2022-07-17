# Modern-Redux-with-RTK
This light project demonstrates the use of redux using redux-toolkit which is super easy and understandable. 
RTK uses Immer library by allowing us to make state updates as mutable while it does the necessary immutable state changes through "provide" function. 
Every specific state required in the app is done by slicing that state part having its own reducers. RTK does all the work as defining action creators, action types, etc. 
automatically using slices pattern. 
Moreover, it also simplifies the async state updates using createAsyncThunk.
