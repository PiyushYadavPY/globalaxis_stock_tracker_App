'use client'
import { useCallback, useRef } from "react";
export function useDebounce(callback:() => void, delay:number){
    const timeOutRef = useRef<NodeJS.Timeout | null>(null);
    
    return useCallback(()=> {
        if(timeOutRef.current){
            clearTimeout(timeOutRef.current);
        }

        timeOutRef.current = setTimeout(callback, delay);
    }, [callback, delay]);
}
// debounce is used for firing 1 single clean api 
//as if user types in search input for every chareacter added it will fire a 
//new api req/res with tthis we add delay untill user types all the words and
//then we fire api request, so again as soon as you stop typing it will wait and 
// then request api 