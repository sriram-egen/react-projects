import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import GithubUserCard from "./github-user-card";

export default function GtihubProfileFinder() {
  const [userName, setUserName] = useState("pothuraju-dev");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <div>Loading User Data! Please Wait.</div>;
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Search Github Username..."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? (
        <div>
          <GithubUserCard user={userData} />
        </div>
      ) : null}
    </div>
  );
}
