const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { exit } = require('process');

const main = () => {
  // You'll need to replace this with the rows in your CSV
  const csv = [];
  csv.forEach((row) => {
    // This is something that you'll need to figure out: how to map R&D teams
    // to klaviyocli teams
    const cliTeam = 'some-klaviyocli-team';

    // Title for the issue in Jira
    const title = 'Some title here';
    // Description for the item in Jira
    const description = 'Some description here';

    const epicCreateCommand = `klaviyocli jira create ${cliTeam} --type epic --theme ${THEME} --description '${description}' "${title}"`;

    try {
      execSync(epicCreateCommand, {
        encoding: 'utf8',
      });
      console.log(`SUCCESS`);
    } catch (err) {
      console.log(err);
      console.log(`FAILURE`);
      exit(1);
    }
  });
};

main();
