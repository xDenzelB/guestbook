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
    <div>EntryForm</div>
  )
}
