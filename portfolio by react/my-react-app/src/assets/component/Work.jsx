import { useEffect,useState } from "react";
import Workcard from "./Workcard";
function Work(){

    const [workExp , setWorkExp]=useState([]);
    useEffect(()=>{
        const fetchWork = async()=>{
            const response = await  fetch("/src/api/work.json");
            const data =await response.json();
            console.log(data);
            setWorkExp(data);
        }

        fetchWork();
    },[])


    return(
        <section>
        {
            workExp.map(work => <Workcard key={work.id} work={work} />)
        }
        </section>
    );
}
export default Work;