import MemeCard from "./MemeCard";

function MemeList({ memes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
      {memes.map((meme) => (
        <MemeCard key={meme.id} url={meme.url} name={meme.name} />
      ))}
    </div>
  );
}

export default MemeList;
