import BlFrame from "@/components/main-frame/bl-frame";
import TrFrame from "@/components/main-frame/tr-frame";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return 
  <div className='w-full h-screen max-h-screen
  relative p-12 
  '
  >
    <TrFrame />
    <BlFrame />
    <Component {...pageProps} />;
  </div>
}
