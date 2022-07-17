# Modern-Redux-with-RTK
This simple project demonstrates the use of modern redux using redux-toolkit which is super easy and understandable. RTK uses Immer.js library by allowing us to make mutable state updates and it does the necessary immutable state updates under the hood through its "provide" function. Every specific state update required in the app is done by slicing that part or logic of the state which has its own reducers, actions etc.. RTK does all the work for us such as defining action creators, action types, etc. automatically using this "slice" pattern. Moreover, it also simplifies the asynchronous state updates using "createAsyncThunk" API. RTK also provides a "configureStore()" API which gives simplified configuration options for store and automatically combines the slice reducers for you. It also has redux-thunk by default, and also allows the use of the Redux DevTools Extension.

# Running Project
1- Clone/Download the git repository.
2- Go to the project directory
3- Open any Command line tool
4- Execute command "npm install"
5- After installation, execute command "npm run dev"
