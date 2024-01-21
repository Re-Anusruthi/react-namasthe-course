import { useRouteError } from "react-router-dom"


const Error = () => {
    
const error = useRouteError();
console.log(error);
    return (
        <div>
            <h2>Unexpected Error</h2>
            <h3>Status: {error.status} : {error.statusText}</h3>
            <h4>{error.data}</h4>
        </div>
    )
};

export default Error;