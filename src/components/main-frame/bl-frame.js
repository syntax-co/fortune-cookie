import { useAppContext } from "@/context/app-context";
import { motion } from "framer-motion";




const BlFrame = () => {
    const {siteLoading} = useAppContext()

    return (
        <motion.div className="w-full h-full absolute"

        initial={{
            bottom:'0%',
            left:'0%'
        }}
        animate={{
            bottom:siteLoading? '60%':'0%',
            left:siteLoading? '60%':'0%',
            transition:{
                delay:.5
            }
        }}
        >

            <div className="h-screen
             absolute left-0 bottom-0 bg-white
             border-x border-(--border)
             
            w-8
            sm:w-8
            md:w-12
            lg:w-12
            xl:w-12
             "
            >

            </div>
            

            
            <div className="w-screen border-(--border)
            bg-white border-y absolute bottom-0 left-0
            
            h-8
            sm:h-8
            md:h-12
            lg:h-12
            xl:h-12
            "
            >

            </div>

            <div className="aspect-square bg-white
            border-l border-b border-(--border) 
            absolute bottom-0 left-0

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
 
export default BlFrame;