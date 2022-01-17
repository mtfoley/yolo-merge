const core = require('@actions/core');
const github = require('@actions/github');

async function run(){
  try {
//    const token = core.getInput("token");
//    const octokit = github.getOctokit(token);
    const context = github.context;
    core.debug(JSON.stringify(context.payload));
  } catch (error) {
    core.setFailed(error.message);
  }  
}
run()