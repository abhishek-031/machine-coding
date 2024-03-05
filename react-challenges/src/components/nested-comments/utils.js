export function deleteComment(comments, id) {
  const newVal = JSON.parse(JSON.stringify(comments), (key, val) => {
    if (val?.id === id) return;
    return val;
  });
  return newVal;
}

export function addComment(comments, id, newComment) {
  const newVal = JSON.parse(JSON.stringify(comments), (key, val) => {
    if (val?.id === id) {
      if (!val.replies) {
        val.replies = [
          {
            id: Math.floor(Math.random() * 10000),
            comment: newComment,
          },
        ];
      } else if (Array.isArray(val.replies)) {
        val.replies.push({
          id: Math.floor(Math.random() * 10000),
          comment: newComment,
        });
      }
    }
    return val;
  });
  return newVal;
}

export function editComment(comments, id, newComment) {
  const newVal = JSON.parse(JSON.stringify(comments), (key, val) => {
    if (val?.id === id) {
      val.comment = newComment;
    }
    return val;
  });
  return newVal;
}
