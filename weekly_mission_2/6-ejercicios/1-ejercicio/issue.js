const issue = {
 title: "Undefined",
 repositoryNameAssociated: "RepoAssociated",
 status: "cerrado",
 numberOfComments: 10,
 labels: 20,
 author: "alexramirez",
 dateCreated: "12-04-2022",
 lastUpdate: "13-04-2022",
 getTitleAndAuthor: function(){
   return this.title + ', ' + this.author
 },
 getGeneralInfo: function(){
   return `This issue ${this.title} was created by ${this.author}`
 }
}

console.log("Titulo del issue: " + issue.title)
console.log("Titulo y autor: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
