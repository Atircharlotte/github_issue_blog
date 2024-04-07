import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { getRepoIssues } from '../utils/data';
import PostList from '../ui/PostList';
import { CreateIssue } from '../ui/Button';

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
        <h1>ISSUE LIST from {repo}</h1>
        <CreateIssue reponame={repo} />
      </div>

      <br />
      {repoIssues.length !== 0 ? (
        <PostList repoIssues={repoIssues} repo={repo} />
      ) : (
        <h1>No issue in this repo now </h1>
      )}
    </div>
  );
}
