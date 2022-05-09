
export default function Entry({ author, content, date }) {
  return (
    <div>
      <p>{content}</p>
      <div>
        <p>{author}</p>
        <p>{String(new Date(date.toLocaleString('en-US')))}</p>
      </div>
    </div>
  );
}
