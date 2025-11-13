
function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search memes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[95%] p-4 border border-gray-300 rounded-xl shadow-sm text-lg"
      />
    </div>
  );
}

export default SearchBar;
