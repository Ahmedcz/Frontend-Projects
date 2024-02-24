import React, { useState} from 'react';

function Input() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [homeRoomClassNumber, setHomeRoomClassNumber] = useState('');
  const [studentId, setStudentId] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
  function handleHomeRoomClassNumberChange(e) {
    setHomeRoomClassNumber(e.target.value);
  }
  function handleStudentIdChange(e) {
    setStudentId(e.target.value);
  }

 return (
 <div>
   <h2>Students Form</h2>
     <form>
      <ul>
       <li>
       <label htmlFor="First Name">First Name:</label>
       <input id="FirstName" type="text" value={firstName} onChange={handleFirstNameChange}/>
       </li>
       <li>
       <label htmlFor="Last Name">Last Name:</label>
       <input id="LastName" type="text" value={lastName} onChange={handleLastNameChange}/>
       </li>
       <li>
       <label htmlFor="age">Age:</label>
       <input id="age" type="text" value={age} onChange={handleAgeChange}/>
       </li>
       <li>
       <label htmlFor="address">Adress:</label>
       <input id="address" type="text" value={address} 
        onChange={handleAddressChange}/>
       </li>
       <li>
       <label htmlFor="Homeroom Class number">Homeroom Class Number:</label>
       <input id="HomeClassNumber" type="text" value={homeRoomClassNumber} onChange={handleHomeRoomClassNumberChange}/>
       </li>
       <li>
       <label htmlFor="Student ID">Student ID:</label>
       <input id="StudentId" type="text" value={studentId} onChange={handleStudentIdChange}/>
       </li>
      </ul>
     </form>
   <div>
      <h2>Current User Input: </h2>
      <h4>{`${firstName}, ${lastName}, ${age}, ${address}, ${homeRoomClassNumber}, ${studentId}`}</h4>
   </div>
   
 </div>
 );
}
export default Input;