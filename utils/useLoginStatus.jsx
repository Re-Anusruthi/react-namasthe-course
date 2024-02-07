import { useEffect, useState } from "react";

const useLoginStatus = () => {
    const [loginStatus, setLoginStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", ()=>{
            setLoginStatus(false);
        });
        window.addEventListener("online", ()=>{
            setLoginStatus(true);
        })
    },[])

    return loginStatus;
}

export default useLoginStatus;