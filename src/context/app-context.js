import { createContext, useContext, useEffect, useState } from 'react'

import fortunes from '@/json_files/fortunes.json'
import { useRouter } from 'next/router'


// Create Context
const AppContext = createContext()

// Provider Component
export const AppProvider = ({ children }) => {

    const router = useRouter()
    const [siteLoading,setSiteLoading] = useState(false)
    const [fortune,setFortune] = useState('')
    const [displayFortune,setDisplayFortune] = useState(false)
    const [gettingFortune,setGettingFortune] = useState(false)
                                


    const pageChangeVariants = {
    initial:{opacity:0},
    animate:{
        opacity:!siteLoading?1:0,
        transition:{
            delay: !siteLoading? .75:0
        }
    }
}
    // █████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
    // ╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝                                                                                  
                                                                                  
                                                                                  
    const changePage = (path) => {
        setSiteLoading(true)

        setTimeout(() => {
            setSiteLoading(false)
            router.push(path)
        }, 2000)
    }


    const getRandomFortune = () => {

        setGettingFortune(true)

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * fortunes.fortunes.length) 
            setFortune(fortunes.fortunes[randomIndex])
        }, 2000);

        setTimeout(() => {
            setGettingFortune(false)
        }, 3000);
    }

    const resetFortune = () => {
        setDisplayFortune(false)

        setTimeout(() => {
            setFortune('')
        }, 1000);
    }


    useEffect(() => {
        if (fortune) {
            setDisplayFortune(true)
        } 
    }, [fortune]);

    return (
    <AppContext.Provider value={{
        pageChangeVariants,
        siteLoading,
        gettingFortune,
        displayFortune,
        fortune,
        changePage,
        getRandomFortune,
        resetFortune
    }}>
        {children}
    </AppContext.Provider>
    )
}

// Hook to use the context
export const useAppContext = () => useContext(AppContext)
