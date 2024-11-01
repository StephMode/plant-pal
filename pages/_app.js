import GlobalStyle from "../styles";
import plants from "@/lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [initialPlants, setInitialPlants] = useState(plants);


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} plants={initialPlants} />
    </>
  );
}
