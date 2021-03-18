
const state = {

  profilePage: {
    postsData: [
      { id: 1, message: "Hi!", like: "15" },
      { id: 2, message: "It is my first post!", like: "22" },
      { id: 3, message: "What a new social network?", like: "1" },
      { id: 4, message: "Hi all!", like: "0" },
      { id: 5, message: "OLOLO ONATOLE", like: "100500" }
    ]
  },
    /**/
  messagePage: {
      usersData: [
        { name: "Andrey", id: 1 },
        { name: "Sonya", id: 2 },
        { name: "Eduard", id: 3 },
        { name: "Galina", id: 4 },
        { name: "Pavel", id: 5 }
      ],
     
      messangersData: [
        { id: 1, messange: "Hi!" },
        { id: 2, messange: "I teach React!" },
        { id: 3, messange: "It`s amazing!" },
        { id: 4, messange: "YO!!!" }
      ]
    }
  }

export  let addPost = (newMessage) => {

    let message = {
      id: 5,
      message: newMessage,
      like: 0,
    }

    state.profilePage.postsData.push(message);
  }




export default state;