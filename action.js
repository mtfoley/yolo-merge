const core = require('@actions/core');
const github = require('@actions/github');

async function run(){
  try {
//    const token = core.getInput("token");
//    const octokit = github.getOctokit(token);
    const context = github.context;
    const title = context.payload.pull_request.title;
    const {login} = context.payload.pull_request.user;
    const {owner:{login:repoOwner},name:repoName} = context.payload.repository;
    core.debug(JSON.stringify({title,login,repoOwner,repoName}));
  } catch (error) {
    core.setFailed(error.message);
  }  
}
run()