import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

const state = {
  posts: [
    { id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. " },
    { id: 2, likesCount: 15, text: "lorem lorem blablabla" },
    { id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED " },
  ]
}

it("length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("blabla")

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect (newState.posts.length).toBe(4)
  expect (newState.posts[3].text).toBe('blabla')

})

it("after deleting length of messages should decrease", () => {
  //1. test data
  let action = deletePost(1)

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect (newState.posts.length).toBe(2)

})

it("after deleting length shouldn't be changed if id is incorrect", () => {
  //1. test data
  let action = deletePost(1000)

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect (newState.posts.length).toBe(3)

})

