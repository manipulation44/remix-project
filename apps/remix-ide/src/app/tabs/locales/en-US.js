export default {
  'panel.author': 'Author',
  'panel.maintainedBy': 'Maintained By',
  'panel.documentation': 'Documentation',
  'panel.description': 'Description',

  'settings.displayName': 'Settings',
  'settings.reset': 'Reset to Default settings',
  'settings.general': 'General settings',
  'settings.generateContractMetadataText': 'Generate contract metadata. Generate a JSON file in the contract folder. Allows to specify library addresses the contract depends on. If nothing is specified, Remix deploys libraries automatically.',
  'settings.ethereunVMText': 'Always use Javascript VM at load',
  'settings.wordWrapText': 'Word wrap in editor',
  'settings.useAutoCompleteText': 'Enable code completion in editor.',
  'settings.useShowGasInEditorText': 'Display gas estimates in editor.',
  'settings.displayErrorsText': 'Display errors in editor while typing.',
  'settings.matomoAnalytics': 'Enable Matomo Analytics. We do not collect personally identifiable information (PII). The info is used to improve the site’s UX & UI. See more about ',
  'settings.enablePersonalModeText': ' Enable Personal Mode for web3 provider. Transaction sent over Web3 will use the web3.personal API.\n',
  'settings.warnText': 'Be sure the endpoint is opened before enabling it. \nThis mode allows a user to provide a passphrase in the Remix interface without having to unlock the account. Although this is very convenient, you should completely trust the backend you are connected to (Geth, Parity, ...). Remix never persists any passphrase'.split('\n').map(s => s.trim()).join(' '),
  'settings.gitAccessTokenTitle': 'GitHub Access Token',
  'settings.gitAccessTokenText': 'Manage the access token used to publish to Gist and retrieve GitHub contents.',
  'settings.gitAccessTokenText2': 'Go to github token page (link below) to create a new token and save it in Remix. Make sure this token has only \'create gist\' permission.',
  'settings.etherscanTokenTitle': 'EtherScan Access Token',
  'settings.etherscanAccessTokenText': 'Manage the api key used to interact with Etherscan.',
  'settings.etherscanAccessTokenText2': 'Go to Etherscan api key page (link below) to create a new api key and save it in Remix.',
  'settings.save': 'Save',
  'settings.remove': 'Remove',
  'settings.themes': 'Themes',
  'settings.locales': 'Lanaguage',
  'settings.swarm': 'Swarm Settings',
  'settings.ipfs': 'IPFS Settings',

  'filePanel.displayName': 'File explorer',
  'filePanel.workspace': 'WORKSPACES',
  'filePanel.create': 'Create',
  'filePanel.clone': 'Clone',
  'filePanel.download': 'Download',
  'filePanel.restore': 'Restore',
  'filePanel.workspace.create': 'Create Workspace',
  'filePanel.workspace.rename': 'Rename Workspace',
  'filePanel.workspace.delete': 'Delete Workspace',
  'filePanel.workspace.deleteConfirm': 'Are you sure to delete the current workspace?',
  'filePanel.workspace.name': 'Workspace name',
  'filePanel.workspace.chooseTemplate': 'Choose a template',
  'filePanel.workspace.download': 'Download Workspace',
  'filePanel.workspace.restore': 'Restore Workspace Backup',
  'filePanel.workspace.clone': 'Clone Git Repository',
  'filePanel.workspace.enterGitUrl': 'Enter git repository url',
  'filePanel.workspace.solghaction': 'Add the solidity GitHub action file. Push to a repository to start running it in the GitHub CI.',
  'filePanel.newFile': 'New File',
  'filePanel.newFolder': 'New Folder',
  'filePanel.rename': 'Rename',
  'filePanel.delete': 'Delete',
  'filePanel.deleteAll': 'Delete All',
  'filePanel.run': 'Run',
  'filePanel.pushChangesToGist': 'Push changes to gist',
  'filePanel.publishFolderToGist': 'Publish folder to gist',
  'filePanel.publishFileToGist': 'Publish file to gist',
  'filePanel.copy': 'Copy',
  'filePanel.paste': 'Paste',
  'filePanel.compile': 'Compile',
  'filePanel.compileForNahmii': 'Compile for Nahmii',
  'filePanel.createNewFile': 'Create New File',
  'filePanel.createNewFolder': 'Create New Folder',
  'filePanel.publishToGist': 'Publish all the current workspace files to a github gist',
  'filePanel.uploadFile': 'Load a local file into current workspace',
  'filePanel.updateGist': 'Update the current [gist] explorer',

  'home.scamAlert': 'Scam Alert',
  'home.scamAlertText': 'The only URL Remix uses is remix.ethereum.org',
  'home.scamAlertText2': 'Beware of online videos promoting "liquidity front runner bots"',
  'home.scamAlertText3': 'Additional safety tips',
  'home.learnMore': 'Learn more',
  'home.here': 'here',
  'home.more': 'More',
  'home.featured': 'Featured',
  'home.jumpIntoWeb3': 'JUMP INTO WEB3',
  'home.jumpIntoWeb3Text': `The Remix Project is a rich toolset which can be used for the entire journey of contract development by users of any knowledge level,
                            and as a learning lab for teaching and experimenting with Ethereum.`,
  'home.remixRewards': 'REMIX REWARDS',
  'home.remixRewardsText1': 'NFTs for our users!',
  'home.remixRewardsText2': `Remix Project rewards contributors, beta testers, and UX research participants with NFTs deployed on Optimism.
                            Remix Reward holders are able to mint a second “Remixer” user NFT badge to give to any other user of their choice.`,
  'home.betaTesting': 'BETA TESTING',
  'home.betaTestingText1': 'Our community supports us.',
  'home.betaTestingText2': 'You can join Beta Testing before each release of Remix IDE. Help us test now and get a handle on new features!',
  'home.featuredPlugins': 'Featured Plugins',
  'home.solidityPluginDesc': 'Compile, test and analyse smart contract.',
  'home.starkNetPluginDesc': 'Compile and deploy contracts with Cairo, a native language for StarkNet.',
  'home.solhintPluginDesc': 'Solhint is an open source project for linting Solidity code.',
  'home.sourcifyPluginDesc': 'Solidity contract and metadata verification service.',
  'home.unitTestPluginDesc': 'Write and run unit tests for your contracts in Solidity.',
  'home.getStarted': 'Get Started',
  'home.projectTemplates': 'Project Templates',
  'home.blankTemplateDesc': 'Create an empty workspace.',
  'home.remixDefaultTemplateDesc': 'Create a workspace with sample files.',
  'home.ozerc20TemplateDesc': 'Create an ERC20 token by importing OpenZeppelin library.',
  'home.ozerc721TemplateDesc': 'Create an NFT token by importing OpenZeppelin library.',
  'home.zeroxErc20TemplateDesc': 'Create an ERC20 token by importing 0xProject contract.',
  'home.learn': 'Learn',
  'home.remixBasics': 'Remix Basics',
  'home.remixBasicsDesc': "Introduction to Remix's interface and concepts used in Ethereum, as well as the basics of Solidity.",
  'home.remixIntermediate': 'Remix Intermediate',
  'home.remixIntermediateDesc': 'Using the web3.js to interact with a contract. Using Recorder tool.',
  'home.remixAdvanced': 'Remix Advanced',
  'home.remixAdvancedDesc': 'Learn the Proxy Pattern and working with Libraries in Remix. Learn to use the Debugger.',
  'home.remixYoutubePlaylist': 'Remix Youtube Playlist',
  'home.remixTwitterProfile': 'Remix Twitter Profile',
  'home.remixLinkedinProfile': 'Remix Linkedin Profile',
  'home.remixMediumPosts': 'Remix Medium Posts',
  'home.remixGitterChannel': 'Remix Gitter Channel',
  'home.nativeIDE': 'The Native IDE for Web3 Development.',
  'home.website': 'Website',
  'home.documentation': 'Documentation',
  'home.remixPlugin': 'Remix Plugin',
  'home.remixDesktop': 'Remix Desktop',
  'home.searchDocumentation': 'Search Documentation',
  'home.files': 'Files',
  'home.newFile': 'New File',
  'home.openFile': 'Open File',
  'home.connectToLocalhost': 'Connect to Localhost',
  'home.loadFrom': 'LOAD FROM',
  'home.resources': 'Resources',

  'terminal.listen': 'listen on all transactions',
  'terminal.search': 'Search with transaction hash or address',
  'terminal.used': 'used',
  'terminal.welcomeText1': 'Welcome to',
  'terminal.welcomeText2': 'Your files are stored in',
  'terminal.welcomeText3': 'You can use this terminal to',
  'terminal.welcomeText4': 'Check transactions details and start debugging',
  'terminal.welcomeText5': 'Execute JavaScript scripts',
  'terminal.welcomeText6': 'Input a script directly in the command line interface',
  'terminal.welcomeText7': 'Select a Javascript file in the file explorer and then run `remix.execute()` or `remix.exeCurrent()`  in the command line interface',
  'terminal.welcomeText8': 'Right click on a JavaScript file in the file explorer and then click `Run`',
  'terminal.welcomeText9': 'The following libraries are accessible',
  'terminal.welcomeText10': 'Type the library name to see available commands',

  'debugger.displayName': 'Debugger',
  'debugger.debuggerConfiguration': 'Debugger Configuration',
  'debugger.stopDebugging': 'Stop debugging',
  'debugger.startDebugging': 'Start debugging',
  'debugger.placeholder': 'Transaction hash, should start with 0x',
  'debugger.introduction': `When Debugging with a transaction hash,
                  if the contract is verified, Remix will try to fetch the source code from Sourcify or Etherscan. Put in your Etherscan API key in the Remix settings.
                  For supported networks, please see`,

  'udapp.displayName': 'Deploy & run transactions',
  'udapp.gasLimit': 'Gas limit',
  'udapp.account': 'Account',
  'udapp.value': 'Value',
  'udapp.contract': 'Contract',
  'udapp.signAMessage': 'Sign a message',
  'udapp.enterAMessageToSign': 'Enter a message to sign',
  'udapp.hash': 'hash',
  'udapp.signature': 'signature',
  'udapp.signedMessage': 'Signed Message',
  'udapp.environment': 'Environment',
  'udapp.environmentDocs': 'Click for docs about Environment',
  'udapp.deploy': 'Deploy',
  'udapp.publishTo': 'Publish to',
  'udapp.or': 'or',
  'udapp.atAddress': 'At Address',
  'udapp.noCompiledContracts': 'No compiled contracts',
  'udapp.loadContractFromAddress': 'Load contract from Address',
  'udapp.deployedContracts': 'Deployed Contracts',
  'udapp.deployAndRunClearInstances': 'Clear instances list and reset recorder',
  'udapp.deployAndRunNoInstanceText': 'Currently you have no contract instances to interact with.',
  'udapp.transactionsRecorded': 'Transactions recorded',

  'search.displayName': 'Search in files',
  'search.replace': 'Replace',
  'search.replaceAll': 'Replace All',
  'search.placeholder1': 'Search ( Enter to search )',
  'search.placeholder2': 'Include ie *.sol ( Enter to include )',
  'search.placeholder3': 'Exclude ie .git/**/* ( Enter to exclude )',
  'search.matchCase': 'Match Case',
  'search.matchWholeWord': 'Match Whole Word',
  'search.useRegularExpression': 'Use Regular Expression',
  'search.replaceWithoutConfirmation': 'replace without confirmation',
  'search.filesToInclude': 'Files to include',
  'search.filesToExclude': 'Files to exclude',

  'solidity.displayName': 'Solidity compiler',
  'solidity.compiler': 'Compiler',
  'solidity.addACustomCompiler': 'Add a custom compiler',
  'solidity.addACustomCompilerWithURL': 'Add a custom compiler with URL',
  'solidity.includeNightlyBuilds': 'Include nightly builds',
  'solidity.autoCompile': 'Auto compile',
  'solidity.hideWarnings': 'Hide warnings',
  'solidity.enableHardhat': 'Enable Hardhat Compilation',
  'solidity.learnHardhat': 'Learn how to use Hardhat Compilation',
  'solidity.enableTruffle': 'Enable Truffle Compilation',
  'solidity.learnTruffle': 'Learn how to use Truffle Compilation',
  'solidity.advancedConfigurations': 'Advanced Configurations',
  'solidity.compilerConfiguration': 'Compiler configuration',
  'solidity.compilationDetails': 'Compilation Details',
  'solidity.language': 'Language',
  'solidity.evmVersion': 'EVM Version',
  'solidity.enableOptimization': 'Enable optimization',
  'solidity.useConfigurationFile': 'Use configuration file',
  'solidity.change': 'Change',
  'solidity.compile': 'Compile',
  'solidity.noFileSelected': 'no file selected',
  'solidity.compileAndRunScript': 'Compile and Run script',
  'solidity.publishOn': 'Publish on',
  'solidity.Assembly': 'Assembly opcodes describing the contract including corresponding solidity source code',
  'solidity.Opcodes': 'Assembly opcodes describing the contract',
  'solidity.name': 'Name of the compiled contract',
  'solidity.metadata': 'Contains all informations related to the compilation',
  'solidity.bytecode': 'Bytecode being executed during contract creation',
  'solidity.abi': 'ABI: describing all the functions (input/output params, scope, ...)',
  'solidity.web3Deploy': 'Copy/paste this code to any JavaScript/Web3 console to deploy this contract',
  'solidity.metadataHash': 'Hash representing all metadata information',
  'solidity.functionHashes': 'List of declared function and their corresponding hash',
  'solidity.gasEstimates': 'Gas estimation for each function call',
  'solidity.Runtime Bytecode': 'Bytecode storing the state and being executed during normal contract call',
  'solidity.swarmLocation': 'Swarm url where all metadata information can be found (contract needs to be published first)',

  'pluginManager.displayName': 'Plugin manager',
  'pluginManager.activate': 'Activate',
  'pluginManager.deactivate': 'Deactivate',
  'pluginManager.activeModules': 'Active Modules',
  'pluginManager.inactiveModules': 'Inactive Modules',
  'pluginManager.connectLocal': 'Connect to a Local Plugin',
  'pluginManager.localForm.title': 'Local Plugin',
  'pluginManager.localForm.pluginName': 'Plugin Name',
  'pluginManager.localForm.shouldBeCamelCase': 'Should be camelCase',
  'pluginManager.localForm.displayName': 'Display Name',
  'pluginManager.localForm.nameInTheHeader': 'Name in the header',
  'pluginManager.localForm.required': 'required',
  'pluginManager.localForm.commaSeparatedMethod': 'comma separated list of method names',
  'pluginManager.localForm.commaSeparatedPlugin': 'comma separated list of plugin names',
  'pluginManager.localForm.pluginsItCanActivate': 'Plugins it can activate',
  'pluginManager.localForm.typeOfConnection': 'Type of connection',
  'pluginManager.localForm.locationInRemix': 'Location in remix',
  'pluginManager.localForm.sidePanel': 'Side Panel',
  'pluginManager.localForm.mainPanel': 'Main Panel',
  'pluginManager.localForm.none': 'None',
}
