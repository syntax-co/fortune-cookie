import BlFrame from "@/components/main-frame/bl-frame";
import TrFrame from "@/components/main-frame/tr-frame";
import Navbar from "@/components/navbar/navbar";
import { AppProvider } from "@/context/app-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <AppProvider>
    <div className='w-full h-screen max-h-screen
    relative p-2 overflow-hidden font-primary
    
    sm:p-4
    md:p-8
    lg:p-16
    xl:p-16
    
    '
    >
      <div className="w-full h-full relative"
      >
        <BlFrame />
        <TrFrame />
        
        <div className="w-full h-full
        flex flex-col relative
        py-8
        p-6
        sm:p-4
        md:p-8
        lg:p-16
        xl:p-16
        
        "
        >
          <Navbar />
          
          <Component {...pageProps} />
        </div>
        
      </div>
    </div>
  </AppProvider>
  )
}
