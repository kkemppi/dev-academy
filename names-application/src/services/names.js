import axios from 'axios'

const baseUrl = 'http://localhost:3001/names'

export const getNames = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}