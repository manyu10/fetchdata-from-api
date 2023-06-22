import React, { useEffect, useState }  from 'react'

const Fetchdata = () => {
    const [user, setUser] = useState([]);
    const fetchtheData = () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => setUser(data))
    }
    useEffect(() => {fetchtheData();},[])

  return (
    <main>
      <h1>User Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {user.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Fetchdata