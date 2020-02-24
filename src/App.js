import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie"

import {
  actions as authActions,
  selectors as authSelectors
} from "store/reducers/auth";

import './styles/main.scss';

import Router from "./navigation/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">      
        <Router />
      </div>
    </BrowserRouter>
  );
}

// const App = props => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (Cookies.get("authorization-header-tally")) {
//       dispatch(authActions.me());
//     }
//   }, []);

//   const meLoading = useSelector(authSelectors.getMeLoading);

//   return (
//     <BrowserRouter>
//       {
//         meLoading ? (
//           <p>app loading page to be made</p>
//         ) : (
//           <div className="App">      
//             <Router />
//           </div>          
//         )
//       }
//     </BrowserRouter>
//   )
// }


export default App;
