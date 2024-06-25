import { useState, useEffect } from 'react'
import { getAllClients } from '../../services/getAllClients'
import { updateDataClientForValidation } from '../../services/updateDataClientForValidation'
import './ValidateClientComponent.css'

const ValidateClientComponent = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchClients = async () => {
      const allClients = await getAllClients()
      console.log(allClients);
      setClients(allClients)
    }

    fetchClients()
  }, [])

  const handleCheckboxChange = (pUser) => {
    setClients((oldClients) => {
      const modifiedUser = { ...pUser }
      //(clients[index].validated_client = !clients[index].validated_client)
      modifiedUser.validated_client = !modifiedUser.validated_client
      const remainingClients = oldClients.filter((user) => user.id !== pUser.id)
      return [...remainingClients, modifiedUser].sort((a, b) => a.id - b.id)
    })
  }

  const handleButtonClick = async (client) => {
    await updateDataClientForValidation(client)
  }

  console.log(clients)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuarios</th>
            <th>CIF</th>
            <th>Validado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.CIF}</td>
              <td>
                <input
                  type="checkbox"
                  checked={client.validated_client}
                  onChange={() => {
                    handleCheckboxChange(client)
                  }}
                />
              </td>
              <td>
                <button onClick={() => handleButtonClick(client)}>
                  Confirmar cambios
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ValidateClientComponent
