import React, { Component, useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {

  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const {isAuthenticated,toggleAuth} = useContext(AuthContext)

  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.bg, color: theme.sytnax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}  >
        {
        isAuthenticated? `Logged in`: `Logged out`
      }

    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
    );
}
 
export default Navbar;

// export default class Navbar extends Component {
//   render() {
//     console.log(this.context);

//     return (
//       <AuthContext.Consumer>
//         {
//           (authContext) =>  (
//             <ThemeContext.Consumer>
//               {themeContext => {
//                 const {isAuthenticated, toggleAuth } = authContext
//                 const { isLightTheme, light, dark } = themeContext;

//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <nav style={{ background: theme.bg, color: theme.sytnax }}>
//                     <h1>Context App</h1>
//                     <div onClick={toggleAuth}  >
//                       {
//                         isAuthenticated? `Logged in`: `Logged out`
//                       }

//                     </div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//         </ThemeContext.Consumer>
//           )
//         }
//       </AuthContext.Consumer>
//     );
//   }
// }
