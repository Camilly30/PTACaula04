'use server'

const getUserAuthenticated = (user) => {
  const user = [
        {
        name:'Marcelino',
        email:'marcelino@teste.com',
        password:'123456',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
       },
       {
        name:'Ahsoka Tano',
        email:'padawan@legalbrow.com',
        password:'6666666',
        token:''
    },
       {
        name:'Anakin Skywalker',
        email:'nowimthemaster@legalbrow.com',
        password:'555555',
        token:''
       },
       {
        name:'Padmé',
        email:'legacy@legalbrow.com',
        password:'555555',
        token:''
       }
];
}

const getUsers = () =>{
   
        
}
export { getUsers, getUserAuthenticated };