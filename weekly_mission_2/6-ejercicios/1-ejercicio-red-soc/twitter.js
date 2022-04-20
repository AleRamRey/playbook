const twiter = {
  user: "alexramrey",
  tweets: 0,
  following: 100,
  followers: 200,
  getUser: function(){
    return this.user
  },
  getTweets: function(){
    return this.tweets
  },
  getFollowingFollowers: function(){
   return 'Following: ' + this.following + ',  Followers: ' + this.followers
  }
 }

console.log("Usuario: " + twiter.user)
console.log("Tweets: " + twiter.getTweets())
console.log(twiter.getFollowingFollowers())
