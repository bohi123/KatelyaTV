export const runtime = 'edge';

export default async function handler(req: Request) {
  return new Response('Hello from Edge!');
}
