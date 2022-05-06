import { parse } from 'dotenv';
import { client, parseData } from './client';

export async function getEntries() {
  const req = await client
    .from('entries')
    .select()
    .order('created_at', { ascending: false });

  return parseData(req);
}

export async function createEntry({ userId, content }) {
  const req = await client
    .from('entries')
    .insert({ guest_id: userId, content });
  return parseData(req);
}



