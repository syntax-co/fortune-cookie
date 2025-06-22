import { useAppContext } from "@/context/app-context";
import { motion } from "framer-motion";







const Navbar = () => {
    const {changePage,pageChangeVariants} = useAppContext()

    return (
        <motion.div className="w-full py-2 px-4 flex items-center"

        variants={pageChangeVariants}
        initial='initial'
        animate='animate'
        >
            <div className="w-12 aspect-square 
            bg-center bg-contain bg-no-repeat
            cursor-pointer
            "
            
            style={{
                backgroundImage:'url(./images/fortune-cookie.png)'
            }}
            
            onClick={() => {changePage('/')}}
            >
            
            </div>


            {/* <motion.div className=" p-2 cursor-pointer
            text-white border ml-auto"

            initial={{color:'#ffffff',background:'#ffffff00'}}
            
            whileHover={{color:'#000000',background:'#ffffffff'}} 

            >
                Get A Cookie
            </motion.div> */}

        </motion.div>
    );
}
 
export default Navbar;