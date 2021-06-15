const fetch = require("node-fetch")
const HASURA_SIGNUP_MUTATION = require('../Graphql/Signup.graphql.js')

const ADMIN_SECRET = process.env.ADMIN_SECRET
const URL = process.env.GRAPHQL_ENDPOINT

const insertUser = async (variables) => {
  // HASURA request headers
  const HEADERS = {
    method: 'POST',
    body: JSON.stringify({
      query: HASURA_SIGNUP_MUTATION,
      variables
    }),
    headers: {
      "x-hasura-admin-secret": ADMIN_SECRET
    }
  }
  try {
    const fetchResponse = await fetch(URL, HEADERS);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.log('DEBUG: ', e.message);
    return false
  }
};

module.exports = insertUser