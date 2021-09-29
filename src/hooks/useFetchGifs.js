import { useEffect, useState } from "react"
import { getGifts } from '../helpers/getGifts'


export const useFetchGifs =(category)=>{

    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{

        getGifts(category)
            .then(imgs=>{
                
                    setstate({
                        data:imgs,
                        loading: false
                    });

            })

    },[category])

    // setTimeout(() => {
    //     setstate({
    //         data:[1,2,3,4],
    //         loading: false
    //     })
    // }, 3000);

    return state;

}