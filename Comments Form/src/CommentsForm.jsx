import { useState } from "react"
import Comments from "./Comments"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
   if (!values.remark) {
     errors.remark = 'Required';
   } else if (values.remark.length < 5) {
     errors.remark = 'Must be 5 characters or more';
   }
 
   if (!values.rating) {
     errors.rating = 'Required';
   } else if (values.rating < 1 || values.rating > 5) {
     errors.rating = 'Invalid rating';
   }
 
   return errors;
 };

export default function CommentsForm({handleNewComment})
{

    const formik = useFormik({
     initialValues: {
        username: "",
        remark: "",
        rating: 1
     },
     validate,
    onSubmit: (values, { resetForm }) => {
    handleNewComment(values);   // update comments list
    resetForm();                // 👈 clears the form
    },
   
    //  onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2));
    //    handleNewComment(values)
    //    resetForm()
    //  },
    
   });
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remark: "",
    //     rating: 1
    // })
    // let handleInputChange = (e)=>{
    //     setFormData((curr)=>{
    //         return {...curr, [e.target.name]: e.target.value}
    //     })
    // }
    // let handleSubmit = (e)=>{
    //     console.log(formData)
    //     e.preventDefault();
    //     handleNewComment(formData)
    //     setFormData({
    //          username: "",
    //     remark: "",
    //     rating: 1
    //     })
    // }
    return (
        <div>
            
            <h2>This is Comments Form</h2>
             <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Username:</label> <br />
                <input type="text" placeholder="username" id="username" name="username"   onChange={formik.handleChange}
                value={formik.values.username}/>

                 {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}

                <br /><br />

                <label htmlFor="remark">Enter ur remark:</label><br />
                <textarea placeholder="Add a remark" id="remark" name="remark"   onChange={formik.handleChange}
                 value={formik.values.remark}></textarea>

                 {formik.errors.remark ? <div style={{color: "red"}}>{formik.errors.remark}</div> : null}
 
                <br /><br />

                <label htmlFor="rating">Rating:</label><br />
                <input type="range" min={1} max={5} name="rating"   onChange={formik.handleChange}
                value={formik.values.rating}/>

                 {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}

                <br /><br />
                
                <button>Submit</button>
            </form>
        </div>
    )
}