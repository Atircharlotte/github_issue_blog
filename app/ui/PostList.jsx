import Link from 'next/link';

export default function PostList({ repoIssues, repo }) {
  //console.log(repoIssues);
  const issueLists = repoIssues.map((issue) => (
    <Link href={`/${repo}/${issue.number}`} key={issue.id}>
      <div
        key={issue.id}
        className="mx-3 my-3 bg-slate-200 px-2 py-2 hover:bg-slate-300 rounded"
      >
        <h1>{issue.title}</h1>
      </div>
    </Link>
  ));
  return <div>{issueLists}</div>;
}
