
import './App.css';
import Users from './components/Users/Users';



function App() {
  return (
    <div className="App">
      <Users></Users>

    </div>
  );
}

/* 
<Users></Users>
function Users(){
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h1>Travelling Around The User World!!</h1>
      {
        users.map(user => <User name = {user.name} company = {user.company.name} email = {user.email}></User>)
        
    }
    </div>
    
  );
}

function User(props){
  return(
    <div>
      <h1>User-Name: {props.name}</h1>
      <p>User-Email: {props.email}</p>
      <p>Company: {props.company}</p>
    </div>
  );
} */
export default App;
