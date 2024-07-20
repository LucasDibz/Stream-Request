export async function* fetchStreamData() {
  const url = new URL('/stream', 'http://localhost:3333');

  const result = await fetch(url);

  const reader = result.body?.getReader();

  if (!reader) throw new Error('No reader found');

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      console.log('Done reading stream');
      return;
    }

    yield JSON.parse(new TextDecoder().decode(value));
  }
}
