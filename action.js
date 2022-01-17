const core = require('@actions/core');
const github = require('@actions/github');

let isMergeable = Boolean


// check if the pr was opened by the repo owner
async function checkIfOpenedByRepoOwner() {
  const context = github.context;
  const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
  const { data: { owner } } = await octokit.repos.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  return context.payload.pull_request.user.login === owner.login, isMergeable = true;
}

// check if the pr was opened by a team member
async function checkIfOpenedByTeamMember() {
  const context = github.context;
  const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
  const { data: { members } } = await octokit.teams.listMembers({
    team_id: context.payload.pull_request.base.repo.owner.login,
  });
  return members.some(member => member.login === context.payload.pull_request.user.login), isMergeable = true;
}

/*
if mergable {
  core.setOutput('mergable', 'true');
} else {
  core.setOutput('mergable', 'false');
}
*/