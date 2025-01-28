import { ReactElement } from "react";
import { Input } from "../../common/Input";

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
        methods.push(<Input type='button' key={method.name} value={method.name} className={`method ${method.name.toLowerCase()}`}/>)
    }

    return <div className="method-links">
        {methods}
    </div>
}