// const score=100
// const scorevalue=100.8
// const isloggedin=false
// const outsidetemp=null
// let userEmail

// const id=Symbol('123')
// const anotherId=Symbol('123')

// // console.log(id)
// // console.log(anotherId)
// // console.log(anotherId===id) // here both value are not same
//  const bigNumber=1246765842993493924802898208298
// // console.log(bigNumber)



// // non-primitive
// const heros=["shaktiman","naagraj","doga"];
// let myobj={
//   name:"medha",
//   age:22,
// }

// const myfunction=function(){
//   console.log("hello world");
// }
// // console.log(typeof bigNumber);
// // console.log(typeof score);
// // console.log(typeof outsidetemp);
// // console.log(typeof isloggedin);
// myfunction();



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive) , heap(non-primitive)
// let myyoutubename="medhasingh"
// let anothername=myyoutubename
// anothername="hiimedha"
// console.log(anothername);
// console.log(myyoutubename);
//so here value are change in copy not in actual content
let user={
  email:"abc@gmail.com",
  upi:"abc@oksbi"
}
let user2=user;
user2.email="hiimedha@gmail.com"
console.log(user.email);
console.log(user2.email);
// here value are change in both user and user 2 so it's value are changing according to reference
