// Необходимо из объекта, который лежит в константе post вывести значения, к
// которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };  
  const commentsArr = Object.values(post.comments);  
  const tempArr = Object.values(commentsArr[0]);
  const tempArr1 = Object.values(tempArr[3]);  
  const tempArr2 = Object.values(commentsArr[1]);
  console.log(post.author,tempArr1[1],tempArr2[0],tempArr2[2]);
  
  