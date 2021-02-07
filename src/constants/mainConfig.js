export const ROOT_SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://zmemories-app.herokuapp.com';
