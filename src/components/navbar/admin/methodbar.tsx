import { ReactElement } from "react";
import { Link } from "react-router-dom";
import '../../style/_methodbar.css'

const METHODS = [
    { name: "GET", endpoint: "/" },
    { name: "POST", endpoint: "/add"  },
    { name: "PATCH", endpoint: "/edit"  },
    { name: "DELETE", endpoint: "/delete"  },
]

export function Methodbar(): ReactElement{
    const methods = []
    for(let method of METHODS){
        methods.push(<Link to={`/admin/skill${method.endpoint}`} key={method.name} className={`method ${method.name.toLowerCase()}`}>{method.name}</Link>)
    }

    return <div className="method-links">
        {methods}
    </div>
}