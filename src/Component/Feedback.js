import { useState } from "react"

export default function Feedback(){
    const [formData,SubmitFromData]=useState({
        name:"",
        roll:"",
        feedback:""
    })
    const [table,SubmitTable]=useState([])
    function HandleChange(e){
        const {name,value}=e.target;
        SubmitFromData({...formData,[name]:value})
    }
    function HandleSubmit(){
        SubmitTable([...table,formData])
        SubmitFromData({name:"",
            roll:"",
            feedback:""

        })
    }
    return(
        <div>
            <input type="text"
            name="name"
            value={formData.name}
            onChange={HandleChange}
            placeholder="Name"
            />
            <input type="text"
            name="roll"
            value={formData.roll}
            onChange={HandleChange}
            placeholder="RollNumber"
            />
            <input type="text"
            name="feedback"
            value={formData.feedback}
            onChange={HandleChange}
            placeholder="Feedback"
            />
            <button>Submit</button>
            <table>
                <thead>
                    <tr>
                       
                    <th>name</th>
                    <th>RollNumber</th>
                    <th>feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((key,index)=> (
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
