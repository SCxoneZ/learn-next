export default function Users({ users }){
  return (
  
  <>
    <h1>Users List</h1>
    {users.map(user => {
      return (
      
      <ul key ={user.id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
      );
    })}
  </>
  
  );
}

export async function getStaticProps(){
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();
  return {
    props: {
      users: data
    }
  };
}