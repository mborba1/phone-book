import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook, onChange, onSubmit }) {
  return (
    <form onSubmit={e => onSubmit(e)} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={addEntryToPhoneBook.firstName}
        onChange={e => onChange('firstName', e)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={addEntryToPhoneBook.lastName}
        onChange={(e) => onChange('lastName', e)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={addEntryToPhoneBook.phone}
        onChange={(e) => onChange('phone', e)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  const { data } = props
  let sortLastName = data.sort((a,b) => a.lastName.localeCompare(b.lastName))
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
      {sortLastName.map((item, index) => (
        <tr key={index}>
          <td style={style.tableCell}>{item.firstName}</td>
          <td style={style.tableCell}>{item.lastName}</td>
          <td style={style.tableCell}>{item.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
const initialValue = {firstName: '', lastName: '', phone: ''}

function Application(props) {
  const [users, setUsers] = useState([{firstName: 'Coder', lastName: 'Byte', phone: '8885559999'}])
  const [userInput, setUserInput] = useState(initialValue)

  function handleSubmit(e){
    e.preventDefault()
    let newUser =[...users]
    if(userInput.firstName !== '' && userInput.lastName !== '' && userInput.phone !== ''){
      newUser = [...users, userInput]
    }
    setUsers(newUser)
    setUserInput(initialValue)
  }
  function handleChange(name, event){
    setUserInput({...userInput, [name]: event.target.value})
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={userInput} onChange={handleChange} onSubmit={handleSubmit}/>
      <InformationTable data={users} />
    </section>
  );
}

export default Application;
