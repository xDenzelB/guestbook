import { useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import { useUser } from "../context/UserContext";
import { getEntries } from "../services/entries";

export default function EntryList() {
  const [entires, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  function fetchEntries() {
    getEntries()
      .then(setEntries)
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchEntries();
  }, [])
  return (
    <div>
      <EntryForm onAddEntry={fetchEntries} />
      {loading ? (
        'loading entries...'
      ) : (
          <ul>
            {entires.length ? (
              entries.map(({ id, content, created_at }) => {
                <li key={id}>
                  <Entry
                    content={content}
                    author={user.email}
                    date={created_at}
                  />
                </li>
              })
            ) : (
                <p>No Entries Found ):</p>
            )}
          </ul>
      )}
    </div>
  )
}
