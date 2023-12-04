import Link from "next/link";
const Users = ({ users }) => {
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  console.log("Regenerating Users Page!");
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return {
    props: { users: data },
    revalidate: 10,
    redirect: { destination: "/" },
  };
}
