
function MemeCard({ url, name }) {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition">
      <img
        src={url}
        alt={name}
        className="w-full h-60 object-cover rounded-lg"
      />
      <p className="mt-3 font-semibold text-center">{name}</p>
    </div>
  );
}

export default MemeCard;
