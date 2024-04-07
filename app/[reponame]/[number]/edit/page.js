import { options } from '@/app/api/auth/[...nextauth]/options';
import EditForm from '@/app/ui/EditForm';
import { getIssueContent } from '@/app/utils/data';
import { getServerSession } from 'next-auth';

export default async function Home({ params }) {
  console.log(params);
  const reponame = params.reponame;
  const number = params.number;
  const session = await getServerSession(options);
  const accountName = session?.user?.name;
  const originalContent = await getIssueContent(accountName, reponame, number);

  return (
    <main>
      <EditForm
        reponame={reponame}
        accountName={accountName}
        number={number}
        originalContent={originalContent}
      />
    </main>
  );
}
