import api from './index'

export const getAllClients = async () => {
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  const { data } = await api.get('/user', {
    headers: { Authorization: localStorage.token },
  })
  return data
}
