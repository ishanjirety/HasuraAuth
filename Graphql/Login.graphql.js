const HASURA_LOGIN_QUERY = `query Login($username: String!, $password: String!) {
  Users(where: {username: {_eq: $username}, _and: {password: {_eq: $password}}}) {
    username
    bio
    id
    profile_image
  }
}`
module.exports = HASURA_LOGIN_QUERY