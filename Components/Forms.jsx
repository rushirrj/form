import Form from './Form';
import { useState } from 'react';

export default function displayForm(){

    const[arr,setArr]=useState([{}]);

    function add(){
        setArr([...arr,{}])
    }

    const showData=arr.map((key)=>{
        return(<Form key={key} />)
    })

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-11 my-4" >
                        {
                            showData
                        }
                    </div>
                    <div className="col-lg-1 mb-4 pb-4" style={{justifyContent:"center",alignItems:"end",display:'flex'}}>
                        <button type="submit" className="btn btn-primary my-2"  onClick={add} >ADD</button>
                    </div>
                </div>
            </div>
        </>
    )
}