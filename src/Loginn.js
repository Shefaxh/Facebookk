import React from 'react';
import { Formik,Field,Form} from "formik";
import { Link } from 'react-router-dom'



    function Loginn() {
       
        
        return( 
        <div>
                <Formik 
                initialValues={{
                    email:"",
                    password:""
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }
            }
            >
                <Form>

                <Field className="input1" name="email"  placeholder="Email or phone number"/> 
                <br/>
                <Field className="input2"  placeholder="Password" name="password"/>
                <br/>
                <button className='btn1' type="submit">Log In</button>
                <br/>
                    <a>Forgot password?</a>
                    <hr/>
                    <button  className='btn2'>    <Link className='link1' to={'Signup'} > Create new account</Link>  </button>
                </Form>
                </Formik>

               
        </div>
    )
}
export default Loginn