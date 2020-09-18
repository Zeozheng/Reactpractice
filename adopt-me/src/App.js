import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet.1';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatail"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  ]);
};
render(React.createElement(App), document.getElementById("root"));

// import React, { useState } from "react";
// import { render } from "react-dom";
// import { Router, Link } from "@reach/router";
// import SearchParams from "./SearchParams";
// import Details from "./Details";
// import ThemeContext from "./ThemeContext";

// const App = () => {
//   const themeHook = useState("darkblue");
//   console.log(themeHook[0]);
//   //   buttonColor: "darkblue",
//   //   modalColor: "pink"
//   // });
//   return (
//     <React.StrictMode>
//       <ThemeContext.Provider value={themeHook}>
//         <div>
//           <header>
//             <Link to="/">Adopt Me!</Link>
//           </header>

//           <Router>
//             <SearchParams path="/" />

//             <Details path="/details/:id" />
//           </Router>
//         </div>
//       </ThemeContext.Provider>
//     </React.StrictMode>
//   );
// };
// render(<App />, document.getElementById("root"));
