import { useForm } from "react-hook-form";
import { useState } from "react";

export default function form() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState({})

    function onSubmit(values) {

        setData(data => ({
            ...data,
            ...values
        }))
        console.log(data);
    }

    return (
        <>

            <form className="row row-cols-lg-auto  align-items-center my-4" onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                <div className="col-12">
                    <label htmlFor="inlineFormSelectPref">Exercise</label>
                    <select className="form-select" {...register("exercise")} name="exercise" id="inlineFormSelectPref">
                        <option defaultValue="selected">Exercise...</option>
                        <option value="exercise1">One</option>
                        <option value="exercise2">Two</option>
                        <option value="exercise3">Three</option>
                    </select>
                </div>

                <div className="col-12">
                    <label htmlFor="inlineFormInputGroupUsername">Set Number</label>
                    <div className="input-group">
                        <input type="number" name="setno" className="form-control" {...register("setno")} id="inlineFormInputGroupUsername" placeholder="Set Number" />
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="inlineFormInputGroupUsername">No Of Reps</label>
                    <div className="input-group">
                        <input type="number" className="form-control" {...register("reps")} id="inlineFormInputGroupUsername" name="reps" placeholder="No Of Reps" />
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="inlineFormInputGroupUsername">Resistance</label>
                    <div className="input-group">
                        <input type="text" className="form-control"  {...register("resistance")} id="inlineFormInputGroupUsername" name="resistance" placeholder="Resistance" />
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="inlineFormInputGroupUsername">Trainer Comment</label>
                    <div className="input-group">
                        <input type="text" className="form-control" {...register("comment")} id="inlineFormInputGroupUsername" name="comment" placeholder="Trainer Comment" />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </div>
            </form>

        </>
    )
}