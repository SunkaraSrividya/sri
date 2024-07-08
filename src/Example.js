import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
//provider --->produces the data
export default function Example(){
    //provide
    const [text,setText]=useState(" ");
    return(
        <div>
            <Mycontext.Provider  value={{text,setText}}>
             <Mycomponent/>
            </Mycontext.Provider>
        </div>
        
    )
}