const Albums = ({ albums }) => {
  console.log(albums);
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h1>{album.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: { albums: data },
  };
}
