const HASURA_SIGNUP_MUTATION = `
mutation Signup($username:String!,$password:String!,$profileImg:String!,$bio:String!) {
  insert_Users_one(object: {bio: $bio, password: $password, username: $username, profile_image: $profileImg}) {
    id
    profile_image
    bio
    username
  }
}`;

module.exports = HASURA_SIGNUP_MUTATION