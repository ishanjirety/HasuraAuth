const HASURA_LOGIN_QUERY = require('../Graphql/Login.graphql.js')
const fetch = require('node-fetch')

const ADMIN_SECRET = process.env.ADMIN_SECRET
const URL = process.env.GRAPHQL_ENDPOINT

const validateUser = async (variables) => {
  console.log(variables)
  const HEADERS = {
    method: 'POST',
    body: JSON.stringify({
      query: HASURA_LOGIN_QUERY,
      variables
    }),
    headers: {
      "x-hasura-admin-secret": "zJ5cnc85mxlcCz0gWMcWD4RrYKeMjxW93MleobXkq0GWb5cEtJeU663gRdTwsB0g"
    }
  }
  try {
    const data = await fetch(URL, HEADERS)
    return data.json()
  } catch (e) {
    console.log('DEBUG: ', e.message);
    return false
  }

}
module.exports = validateUser