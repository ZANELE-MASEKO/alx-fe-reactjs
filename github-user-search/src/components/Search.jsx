import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await searchUsers(username, location, repos);
      setResults(users);
    } catch (err) {
      setError("Something went wrong fetching search results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User</h1>

      <form
        onSubmit={handleAdvancedSearch}
        className="bg-white shadow-md p-4 rounded-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location (e.g. South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 bg-gray-100 rounded shadow"
              >
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />

                <div>
                  <h3 className="font-bold text-lg">{user.login}</h3>
                  <p>Score: {user.score.toFixed(1)}</p>

                  <a
                    href={user.html_url}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
