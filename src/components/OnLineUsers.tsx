import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react";



export const OnLineUsers = () => {
    const countCtx = useContext(CountContext);

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }


    return(
        <>
        <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={handleBanAll}>Zerar Count context</button>
        </>
    )
}