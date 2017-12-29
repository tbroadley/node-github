const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.lock({
  owner: 'octokit',
  repo: 'node-github',
  number: 3
})
