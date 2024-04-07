import { options } from '@/app/api/auth/[...nextauth]/options';
import Form from '@/app/ui/CreateForm';
import { getServerSession } from 'next-auth';

export default async function Home({ params, searchParams }) {
  const reponame = params.reponame;
  const session = await getServerSession(options);
  const accountName = session?.user?.name;

  return (
    <main>
      <Form reponame={reponame} accountName={accountName} />
    </main>
  );
}
