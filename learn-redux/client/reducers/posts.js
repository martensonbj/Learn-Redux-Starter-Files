// A reducer takes in two things:
// 1. The action
// 2. The copy of current state

function posts(state = [], action) {
  console.log("The post will change")
  console.log(state, action);
  return state;
}

export default posts;
