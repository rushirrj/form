export default function form(){

    return(
        <>
            <div className="container">
                <div className="row" >
                    
                        <div className="col col-lg-12 my-4" >
                            <form  className="row row-cols-lg-auto  align-items-center my-4" style={{textAlign:"center",justifyContent:"center",alignItems:"center"}}>
                                <div className="col-12">
                                    <label  htmlFor="inlineFormSelectPref">Exercise</label>
                                    <select className="form-select" name="exercise" id="inlineFormSelectPref">
                                    <option  defaultValue="selected">Exercise...</option>
                                    <option value="exercise1">One</option>
                                    <option value="exercise2">Two</option>
                                    <option value="exercise3">Three</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label  htmlFor="inlineFormInputGroupUsername">Set Number</label>
                                    <div className="input-group">
                                    <input type="number" name="setno" className="form-control" id="inlineFormInputGroupUsername"  placeholder="Set Number"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label  htmlFor="inlineFormInputGroupUsername">No Of Reps</label>
                                    <div className="input-group">
                                    <input type="number" className="form-control" id="inlineFormInputGroupUsername" name="reps"  placeholder="No Of Reps"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label  htmlFor="inlineFormInputGroupUsername">Resistance</label>
                                    <div className="input-group">
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" name="resistance" placeholder="Resistance"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label  htmlFor="inlineFormInputGroupUsername">Trainer Comment</label>
                                    <div className="input-group">
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" name="comment"  placeholder="Trainer Comment"/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                                </div>
                                {/* <div className="col-12">
                                    <button type="submit" className="btn btn-primary my-2" onClick={addForm}>ADD</button>
                                </div> */}
                            </form>
                        </div>
                    {/* <div className="col-lg-1"></div> */}
                </div>
            </div>
        </>
    )
}