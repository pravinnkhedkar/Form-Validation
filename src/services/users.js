export const createUser = (user) => {
  return fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
  }).then((res)=>(res.status === 201? res.json(): new Error()));
};