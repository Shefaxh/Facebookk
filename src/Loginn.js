import React from 'react';
import { Formik,Field,Form} from "formik";



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
                    <button className='btn2'>Create new account</button>
                </Form>
                </Formik>


        </div>
    )
}
export default Loginn