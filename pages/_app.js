import GlobalStyle from "../styles";
import plants from "@/lib/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
