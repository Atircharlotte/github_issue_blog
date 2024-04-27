export default function PostContent({ thisIssue }) {
  return (
    <div>
      <h1 className="my-5 text-4xl">Title: {thisIssue.title}</h1>
      <p>{thisIssue.body}</p>
    </div>
  );
}
