import { useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import { useUser } from "../context/UserContext";
import { getEntries } from "../services/entries";
import  Entry  from '../components/Entry';

export default function EntryList() {
  const [entries, setEntries] = useState([]);
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
      ) : 
        <ul>
            {entries.length ? 
              entries.map(({ id, content, created_at }) =>
              
                <li key={id}>
                  <Entry
                    content={content}
                    author={user.email}
                    date={created_at}
                  />
                </li>)
          : (
            <li>No Entries Found ):</li>
          )}
        </ul>
      }
    </div>
  );
}
