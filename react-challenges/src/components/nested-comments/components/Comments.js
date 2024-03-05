import Buttons from "./Buttons";

export default function Comments({ comments }) {
  return comments?.map((commentI) => {
    if (!commentI) return null;
    const { comment, replies, id } = commentI;
    return (
      <div className="comment" key={id}>
        {comment}
        <Buttons commentId={id} />
        {replies && <Comments comments={replies} />}
      </div>
    );
  });
}
