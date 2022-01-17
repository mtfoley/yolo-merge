const core = require('@actions/core');
const github = require('@actions/github');


async function run(){
  try {
//    const token = core.getInput("token");
//    const octokit = github.getOctokit(token);
    const context = github.context;
    const title = context.payload.pull_request.title;
    const {mergeable,mergeable_state,user:{login}} = context.payload.pull_request;
    const {owner:{login:repoOwner},name:repoName} = context.payload.repository;
    core.debug(JSON.stringify({title,login,repoOwner,repoName,mergeable,mergeable_state}));
  } catch (error) {
    core.setFailed(error.message);
  }  
}

 // @mtfoley does this look right?
 function userIsTeamMember(login: string, owner: string) {
  if (login === owner) return true
  const {data: userOrgs} = await client.request('GET /users/{user}/orgs', {
    user: login
  })
  return userOrgs.some((userOrg: {login: string}) => {
    return userOrg.login === owner
  })
} return userIsTeamMember(github.context.actor, github.context.repo.owner)

run()