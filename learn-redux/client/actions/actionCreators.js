// Increment Like - Fires off "Add one to Like" action
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add Comment
export function addComment(postId, author, comment) {
  console.log('dispatching add comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove Comment
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// Change Route - by Redux - Still technically an "action"
