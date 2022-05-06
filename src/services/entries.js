import { client, parseData } from './client';

export async function getEntries() {
  const req = await client
    .from('entries')
    .select()
    .order('created_at', { ascending: false });

  return parseData(req)
}