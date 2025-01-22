import { NavLink } from "react-router-dom";

export function HomePage(){
    return <div>
          <h1>Hello world</h1>
          <nav>
            <NavLink to="/skill/all">Liste des compétences</NavLink>
          </nav>
        </div>
}