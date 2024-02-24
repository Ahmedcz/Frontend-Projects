import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }
  const login = (<form onSubmit = {handleSubmit} action="#">
               <input type="password" placeholder="Password"></input>
               <input type="submit"/>
               </form>);
  const contacInfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
  )          
  
  return (
      <div id="authorization">
       <h1>{
        authorized ? "contact" : "Enter the Password"
       }
       </h1>{
        authorized ? contacInfo : login
       }</div>
     
  );
}
export default Contact;