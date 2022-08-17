const { simpleGit, CleanOptions } = require('simple-git');

simpleGit().clean(CleanOptions.FORCE);
simpleGit().clone("coral-xyz/xnft-quickstart",["."]);