
'use server'

/*const user = [
    {
       id:1,
        name:'Teste',
        email:'teste@teste',
        password:'111' ,
        token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
    },
    {
       id:2,
        name:'Marcelino',
        email:'marcelino@teste.com',
        password:'1234' ,
      token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
    },
    {
       id:3,
        name:'Camilly',
        email:'Camilly@teste.com',
        password:'666' ,
        token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
    },
    {
       id:4,
        name:'Ahsoka ',
        email:'Ahsoka@teste.com',
        password:'456' ,
        token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
    },
    {
     id:5,
      name:'Anakin ',
      email:'imtheMaster@teste.com',
      password:'456' ,
      token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
  },
  {
   id:6,
    name:'João ',
    email:'jao@teste.com',
    password:'123' ,
    token:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA'
}
]
*/

const url ="https://aula-17-10-nu.vercel.app";


const getUserAuthenticated = async (user) => {
    console.log(user)
    try{
         const responseOfApi = await fetch(url +"/user/authenticated",
         {
            cache:"no-cache",
            method:"POST",
            headers:{"Content-Type":"Application/json"},
            body: JSON.stringify(user)
         }
         );
        const userAuth = await responseOfApi.json();
        console.log(userAuth)
        return userAuth;
       
    }catch{
        
    }
}
const getUsers = async() =>{
   try{ const responseOfApi = await fetch(url +"/users",{// vai reenderizar a cada 10s
        next:{revalidate :10}
    });
    const listUsers = responseOfApi.json();
    return listUsers;

    } catch{ 
        return null 
}
}
export { getUsers, getUserAuthenticated };


