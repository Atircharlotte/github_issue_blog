export default function PostContent({ thisIssue }) {
  return (
    <div>
      <h1>Title: {thisIssue.title}</h1>
      <p>{thisIssue.body}</p>
    </div>
  );
}
