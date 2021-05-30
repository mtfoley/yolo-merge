# yolo-merge
GitHub Action to Automatically Merge based on PR Title &amp; Owner
## Goals
This action should run on push, and automatically merge PRs to target branches under the following conditions:
- The author of the PR is the owner of the repo
- The PR title contains the phrase "YOLO!"
- The PR does not have any merge conflicts

## Steps
- For processing PR title, see [article on script hardening](https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions#good-practices-for-mitigating-script-injection-attacks)
- For other action variables, see [docs on variables](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context)
- For conditioning running, see [if syntax](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#example-expression-in-an-if-conditional)
- Might work in Node or Bash
- For auto-merge action, look at [Auto-Merge Pull Request](https://github.com/marketplace/actions/auto-merge-pull-request)
