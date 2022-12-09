import React from "react";
import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Movies from "./Movies";

// import avengers from "../data";
// import App from "../App";

function Avenger ({ hero }) {
    const params = useParams()
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const heros = hero.find(item => item.id === Number(params.hero));
    return (
        <div className="character-list-wrapper">
            <div className="character-card">
                <h2>{heros.name}</h2>
                <p>{heros.nickname}</p>
                <button type="button" onClick={() => history.goBack()}>Go Back</button>
                <p>{heros.description}</p>
                <img src={heros.thumbnail} alt="random avengers img" />
                <nav className="nav-buttons">
                    <NavLink to={`${url}/movies`}>Movie List</NavLink>
                </nav>
                <Route path={`${path}/movies`}>
                    <Movies movieList={heros.movies}/>
                </Route>
            </div>
        </div>
        
    )
}

export default Avenger