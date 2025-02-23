import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
function AllRoute(){
    const elements=useRoutes(routes);
    console.log(elements);
    return(
        <>
        {elements}
        </>
    )
}
export default AllRoute;