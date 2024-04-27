import { options } from '@/app/api/auth/[...nextauth]/options';
import { BackToIssueList, UpdateIssue } from '@/app/ui/Button';
import DeleteForm from '@/app/ui/DeleteForm';
import PostContent from '@/app/ui/PostContent';
import { getIssueContent } from '@/app/utils/data';
import { getServerSession } from 'next-auth';

export default async function Home({ params, searchParams }) {
  const session = await getServerSession(options);
  const thisIssue = await getIssueContent(
    session?.user?.name,
    params.reponame,
    params.number
  );

  return (
    <div className="mx-5 my-5">
      <BackToIssueList reponame={params.reponame} />
      {/*section for blog post */}
      <PostContent thisIssue={thisIssue} />
      <div className="flex mt-10 justify-end">
        {/*edit form button */}
        <UpdateIssue reponame={params.reponame} number={params.number} />
        {/*delete post button */}
        <DeleteForm
          reponame={params.reponame}
          number={params.number}
          accountName={session?.user?.name}
        />
      </div>
    </div>
  );
}
