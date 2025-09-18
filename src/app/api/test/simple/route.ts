export const runtime = 'edge';

export async function GET(request: Request, context: any) {
  const result = await context.env.DB.prepare('SELECT * FROM users').all();
  return new Response(JSON.stringify(result));
}


