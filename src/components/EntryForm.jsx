import { context } from 'msw';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { createEntry } from '../services/entries';

export default function EntryForm({ onAddEntry }) {
  const [content, setContent] = useState('');
  const { user } = useUser();

  async function handleAddingEntry(e) {
    e.preventDefault();
    const entry = await createEntry({ userId: user.id, content });
    onAddEntry(entry);
    setContent('');
  };
  return (
    <div>
      <form onSubmit={handleAddingEntry}>
        <textarea 
          id='content'
          name='content'
          required
          value={content}
          onChange={({ target }) => setContent(target.value)} />
        <button type='submit' >Add Entry</button>
      </form>
    </div>
  )
}
