import { useAppContext } from '@/context/app-context';
import { motion } from 'framer-motion';
import { Square } from 'ldrs/react'
import 'ldrs/react/Square.css'




const SquareLoader = () => {
    const {siteLoading} = useAppContext()

    return (
        <motion.div className='w-full h-[85%] 
        flex items-center justify-center'

        initial={{opacity:0}}
        animate={{
            opacity:siteLoading? 1 : 0,
            transition:{
                delay: siteLoading? .75:0,
            }
        }}

        >
            <Square
            size="50"
            stroke="5"
            strokeLength="0.25"
            bgOpacity="0.1"
            speed="1"
            color="white" 
            />
        </motion.div>
    );
}
 
export default SquareLoader;