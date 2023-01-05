import React from 'react';
import { Formik,Field,Form} from "formik";

function Signup() {
  return (
    <div className='main'>
        <div className='first'>

       
   <div className='firstdiv'>
    <h2>Sign Up</h2>
    <p className='fp'>It’s quick and easy.</p>
   </div>
  <div className='secdiv'>
    <h2> X </h2>
  </div>

 </div>
 <div className='secondiv'>
   
    <Formik 
                initialValues={{
                    firstname:"",
                    lastname:"",
                    email:"",
                    password:"",
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }
            }
            >
                <Form>

                <Field className="inp1" name="firstname"  placeholder="First name"/> 
    
                <Field className="inp2"  placeholder="Last name" name="lastname"/>
                <br/>
                <Field className="inp3"  placeholder="Mobile number or email" name="email"/>
                <br/>
                <Field className="inp4"  placeholder="New password" name="password"/>
                <br/>
                <p className='bp'>Birthday</p>
                   
                    <Field name="month"  className="month" component="select">
                    <option value="1" selected="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                     </Field>
  
                    <Field name="day" className="day" component="select">
                    <option value="1" selected="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    </Field>

                    
                    <Field name="year" className="year" component="select">
                    <option value="1" selected="1">2023</option>
                    <option value="2">2022</option>
                    <option value="3">2021</option>
                    <option value="4">2020</option>
                    <option value="5">2019</option>
                    <option value="6">2018</option>
                    <option value="7">2017</option>
                    <option value="8">2016</option>
                    <option value="9">2015</option>
                    <option value="10">2014</option>
                    <option value="11">2013</option>
                    <option value="12">2012</option>
                    <option value="13">2011</option>
                    <option value="14">2010</option>
                    <option value="15">2009</option>
                    <option value="16">2008</option>
                    <option value="17">2007</option>
                    <option value="18">2006</option>
                    <option value="19">2005</option>
                    <option value="20">2004</option>
                    <option value="21">2003</option>
                    <option value="22">2004</option>
                    <option value="23">2002</option>
                    <option value="24">2001</option>
                    <option value="25">2000</option>
                    </Field>
                  
                  <p>Gender</p>
                  <label className='femalel'> Female
                  <Field  name="gender" className="female" type="radio"/>
                   </label>
                   <label> Male
                  <Field  name="gender" className="male" type="radio"/>
                   </label>
                </Form>
                </Formik>
    

 </div>

    </div>
  )
}

export default Signup