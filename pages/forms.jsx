
import Form from '../Components/Form'

export default function displayForm(){
    
    function addorm(){
        return(
            <Form />
        )
    }

    return(
        <>
            {/* <div >
                <button  className="btn btn-primary my-2" onClick={addorm}>ADD</button>
            </div> */}
            <Form/>
            <button onClick={addorm}>ADD</button>
        </>
    )
}