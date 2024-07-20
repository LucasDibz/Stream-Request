export async function* fetchStreamData() {
  const url = new URL('/stream', 'http://localhost:3333');

  const response = await fetch(url);

  const reader = response.body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();

  if (!reader) throw new Error('No reader found');

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      console.log('Done reading stream');
      return;
    }

    yield JSON.parse(value);
  }
}
