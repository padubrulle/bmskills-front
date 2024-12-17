import { ReactElement } from "react";
import { Link } from "react-router-dom";
import '../../style/_methodbar.css'
import { Input } from "../../common/Input";

const METHODS = [
    { name: "GET", endpoint: "/" },
    { name: "POST", endpoint: "/add"  },
    { name: "PATCH", endpoint: "/edit"  },
    { name: "DELETE", endpoint: "/delete"  },
]



export function Methodbar(): ReactElement{

    function handleSelect(event){
        console.log(event.target.value)

    }

    const methods = []
    for(let method of METHODS){
        // methods.push(<Link to={`/admin/skill${method.endpoint}`} key={method.name} className={`method ${method.name.toLowerCase()}`}>{method.name}</Link>)
        methods.push(<Input type='button' value={method.name} className={`method ${method.name.toLowerCase()}`} onChange={(event) => handleSelect(event)}/>)
    }

    return <div className="method-links">
        {methods}
    </div>
}