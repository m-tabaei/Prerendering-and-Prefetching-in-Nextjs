const UserDetail = ({ data }) => {
  return (
    <div>
      <h1>UserDetail</h1>
      <h3>{data.name}</h3>
      <h3>{data.email}</h3>
    </div>
  );
};

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const usersData = data.slice(0, 4);
  const paths = usersData.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  if (!data.name) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 5,
  };
}
