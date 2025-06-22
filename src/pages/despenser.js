import SquareLoader from "@/components/misc/loading"
import { useAppContext } from "@/context/app-context"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"



const Cookie = () => {
    const {gettingFortune} = useAppContext()

    return(
        <motion.div className='flex'

        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <motion.div className="w-24 aspect-square
            bg-contain bg-no-repeat bg-right
            origin-bottom-right
            "
            style={{
                backgroundImage: "url('/images/cookie-left.png')",
            }}

            initial={{rotate:0}}
            animate={{
                rotate:gettingFortune? -45:0
            }}
            />

            <motion.div className="w-24 aspect-square
            bg-contain bg-no-repeat bg-left
            origin-bottom-left
            "
            style={{
                backgroundImage: "url('/images/cookie-right.png')",
            }}

            initial={{rotate:0}}
            animate={{
                rotate:gettingFortune? 45:0
            }}
            />
        </motion.div>
    )
}


const Fortune = () => {
    const {fortune} = useAppContext()

    return(
        <motion.div className="text-foreground
        text-lg bg-white p-2 font-fortune
        "
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {fortune}
        </motion.div>
    )
}


export default function Dispenser() {
    const {
        fortune, getRandomFortune, 
        resetFortune, pageChangeVariants,
        displayFortune, siteLoading
    } = useAppContext()
  
   

    return (
    siteLoading? <SquareLoader />:
    <motion.div className="flex-1 flex flex-col items-center"

    variants={pageChangeVariants}
    initial='initial'
    animate='animate'
    >


        <div className="h-5/6 my-auto
        flex flex-col
        border border-white p-3
        
        w-5/6
        sm:w-5/6
        md:w-1/3
        lg:w-1/3
        xl:w-1/3
        "
        >
            <div className="my-auto h-1/3
            flex items-center justify-center
            "
            >
                <AnimatePresence mode="wait">
                    {
                        displayFortune? 
                        <Fortune key={'fortune'} />
                        :<Cookie key={'cookie'} />
                    }
                </AnimatePresence>
            </div>

            

            <div className="text-white text-2xl mx-auto my-auto"
            >
                Ready to get your fortune?
            </div>

            <motion.div className=" p-2 cursor-pointer w-full
            text-white border ml-auto
            flex justify-center"

            initial={{color:'#ffffff',background:'#ffffff00'}}
            whileHover={{color:'#000000',background:'#ffffffff'}} 
            
            onClick={() => {
                if (fortune) {
                    resetFortune()
                } else {
                    getRandomFortune()
                }
            }}      
            >
                {fortune? 'Close Your Cookie!':'Open Your Cookie!'}
            </motion.div>

        </div>


        
    </motion.div>
    )
}
