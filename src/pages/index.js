import SquareLoader from "@/components/misc/loading";
import { useAppContext } from "@/context/app-context";
import { motion } from "framer-motion";
import { useRouter } from "next/router";





export default function Home() {
  const {changePage,siteLoading,pageChangeVariants} = useAppContext()

  return (
    siteLoading? <SquareLoader />:
    <motion.div className="flex flex-col items-center justify-center flex-1 text-white px-4
    "
    variants={pageChangeVariants}
    initial='initial'
    animate='animate'
    >

      <section className="text-center max-w-2xl my-auto h-1/2
      flex flex-col
      ">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Fortune Cracker 🥠</h1>
        <p className="text-lg mb-8 text-[var(--muted-foreground)]">
          Discover your daily dose of digital wisdom. Crack open a virtual cookie and reveal a fortune crafted just for you.
        </p>
        
        <motion.div className=" p-2 cursor-pointer w-full
        text-white border ml-auto mt-auto"

        initial={{color:'#ffffff',background:'#ffffff00'}}
        whileHover={{color:'#000000',background:'#ffffffff'}} 
        
        onClick={() => {changePage('/despenser')}}      
        >
            Get A Cookie
        </motion.div>
        
      </section>

      <footer className="text-sm text-[var(--muted-foreground)] py-4 mt-auto">
        &copy; {new Date().getFullYear()} Fortune Cracker. All rights reserved.
      </footer>
    </motion.div>
  );
}
