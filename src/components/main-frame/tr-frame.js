import { useAppContext } from "@/context/app-context";
import { motion } from "framer-motion";




const TrFrame = () => {
    const {siteLoading} = useAppContext()

    return (
        <motion.div className='w-full h-full
        absolute
        '

        initial={{
            top:'0%',
            right:'0%'
        }}
        animate={{
            top:siteLoading? '60%':'0%',
            right:siteLoading? '60%':'0%',
            transition:{
                delay:.5
            }
        }}
        >

            
            <div className="h-screen 
            absolute right-0 bg-white
            border-x border-(--border)

            w-8
            sm:w-8
            md:w-12
            lg:w-12
            xl:w-12
            "
            >

            </div>
            

            
            <div className="w-screen
            bg-white border-y border-(--border) 
            absolute top-0 right-0
            
            h-8
            sm:h-8
            md:h-12
            lg:h-12
            xl:h-12
            "
            >

            </div>

            <div className="aspect-square bg-white
            border-r border-t border-(--border) absolute top-0 right-0
            
            w-8
            sm:w-8
            md:w-12
            lg:w-12
            xl:w-12
            "
            >

            </div>





        </motion.div>
    );
}
 
export default TrFrame;