// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Solution
  // const handleSubmit = event => {
  //   event.preventDefault()

  //   console.log(event.target.elements.userName.value)
  //   console.dir(event.target)

  //   const userName = event.target.elements.userName.value
  //   onSubmitUsername(userName)
  // }

  // Extra credit 1
  // const inputEl = React.useRef(null)
  // const handleSubmit = event => {
  //   event.preventDefault()

  //   console.log(inputEl.current.value)
  //   console.dir(inputEl.current)

  //   const userName = inputEl.current.value
  //   onSubmitUsername(userName)
  // }

  // Extra credit 2
  // const [error, setError] = React.useState(null)
  // const handleChange = event => {
  //   // console.log(event.target.value)
  //   const value = event.target.value
  //   const isValid = value === value.toLowerCase()

  //   setError(isValid ? null : 'Username must be lower case')
  // }

  // const handleSubmit = event => {
  //   event.preventDefault()

  //   console.log(event.target.elements.userName.value)
  //   console.dir(event.target)

  //   const userName = event.target.elements.userName.value
  //   onSubmitUsername(userName)
  // }

  // Extra credit 3
  const [userName, setUserName] = React.useState('')
  const handleChange = event => {
    const value = event.target.value
    setUserName(value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          onChange={handleChange}
          id="userName"
          type="text"
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
