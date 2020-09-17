import { createContext } from "react";
//like hook ,state->update
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
