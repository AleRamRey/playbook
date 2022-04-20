const pullrequest = {
 title: "MiPullRequest",
 branchName: "main",
 dateCreated: "12-04-2022",
 status: "cerrado",
 repositoryNameAssociated: "RepoAssociated",
 getStatus: function(){
   return this.status
 },
 getAuthorAndDate: function(){
  return this.branchName + ', ' + this.dateCreated
 }
}

console.log("Titulo del pullRequest: " + pullrequest.title)
console.log("Estatus: " + pullrequest.getStatus())
console.log("Branch y fecha: " + pullrequest.getAuthorAndDate())
