
'use server'

const user = [
    {
       id:1,
        name:'Teste',
        email:'teste@teste',
        password:'111' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
       id:2,
        name:'Marcelino',
        email:'marcelino@teste.com',
        password:'1234' ,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
       id:3,
        name:'Camilly',
        email:'Camilly@teste.com',
        password:'666' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
       id:4,
        name:'Ahsoka ',
        email:'Ahsoka@teste.com',
        password:'456' ,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
     id:5,
      name:'Anakin ',
      email:'imtheMaster@teste.com',
      password:'456' ,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  {
   id:6,
    name:'João ',
    email:'jao@teste.com',
    password:'123' ,
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}
]

const url ="https://aula-17-10-nu.vercel.app";


const getUserAuthenticated = async (user) => {
         const responseOfApi = await fetch(url +"/user/authenticated",
         {
            method:"POST",
            headers:{" Content-Type":"Application/json"},
            body: JSON.stringify(user)
         }
         );
        const userAuth =await responseOfApi.json();
        return userAuth;
}

const getUsers = () =>{
               
}

export { getUsers, getUserAuthenticated };


