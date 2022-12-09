import { Link } from "react-router-dom";
import avengers from "../data";

const AvengersList = (props) => {
    return(
        <>
        <h1>Avengers List</h1>
        <div>
            {avengers.map(avenger => (
                <div className="avenger-card" key={avenger.id}>
                    <Link to={`/avengers/${avenger.id}`}><h3>{avenger.name}</h3></Link>
                   
                </div>
            ))}    
        </div>
        </>
    )
}



export default AvengersList