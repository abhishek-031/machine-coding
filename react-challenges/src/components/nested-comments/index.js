import "./styles.css";
import comments from "./data/comments";
import Comments from "./components/Comments";
import { useCallback, useState } from "react";
import constants from "./data/constants";
import { deleteComment } from "./utils";
import { addComment } from "./utils";
import { editComment } from "./utils";

export default function NestedCommentsChallenge() {
  const [commentsData, setCommentsData] = useState(comments);

  const handleClick = useCallback((e) => {
    const commentId = e.target.dataset?.commentid;
    const action = e.target.dataset?.action;
    if (commentId && action) {
      if (action === constants.DELETE) {
        setCommentsData((comms) => deleteComment(comms, commentId));
      } else if (action === constants.REPLY) {
        setCommentsData((comms) => addComment(comms, commentId, "New comment"));
      } else if (action === constants.EDIT) {
        setCommentsData((comms) =>
          editComment(comms, commentId, "New comment")
        );
      }
    }
  }, []);
  return (
    <div>

      <div onClick={handleClick}>
        <Comments comments={commentsData} />
      </div>
    </div>
  );
}
