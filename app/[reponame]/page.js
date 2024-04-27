import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { getRepoIssues } from '../utils/data';
import PostList from '../ui/PostList';
import { CreateIssue } from '../ui/Button';
import Image from 'next/image';

export default async function Home({ params }) {
  //get the corresponding repo
  const repo = params.reponame;

  const session = await getServerSession(options);
  //console.log(session);
  const repoIssues = await getRepoIssues(session?.user?.name, repo);
  //console.log(repoIssues);

  return (
    <div className="mx-5 my-5">
      <div className="flex justify-between">
        <h1 className="px-3 text-4xl">REPO: {repo}</h1>
        <CreateIssue reponame={repo} />
      </div>

      <br />
      {repoIssues.length !== 0 ? (
        <PostList repoIssues={repoIssues} repo={repo} />
      ) : (
        <div className="mt-6">
          <Image
            src="/noissue.png"
            alt="No issue in this repo"
            width={300}
            height={300}
            className="mr-auto ml-auto"
          />
          <h1 className="px-3 text-4xl text-center">
            No issue in this repo now{' '}
          </h1>
        </div>
      )}
    </div>
  );
}
