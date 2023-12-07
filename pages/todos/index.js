import useSWR from "swr";
import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos";
const fecher = (url) => fetch(url).then((res) => res.json());
function Todos() {
  //   const [todos, setTodos] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data));
  //   }, []);

  const { data, error } = useSWR(url, fecher);
  console.log({ data, error });

  return (
    <div>
      {data ? (
        data.map((todo) => (
          <Link key={todo.id} href={`/todos/${todo.id}`}>
            <h3 >{todo.title}</h3>
          </Link>
        ))
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
}

export default Todos;
