import constants from "../data/constants";

export default function Buttons({ commentId }) {
  return (
    <div>
      <button data-action={constants.EDIT} data-testid={constants.EDIT+commentId} data-commentid={commentId}>
        Edit
      </button>
      <button data-action={constants.DELETE} data-testid={constants.DELETE+commentId} data-commentid={commentId}>
        Delete
      </button>
      <button data-action={constants.REPLY} data-testid={constants.REPLY+commentId} data-commentid={commentId}>
        Reply
      </button>
    </div>
  );
}
