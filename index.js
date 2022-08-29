#!/usr/bin/env node

/**
 * ack-cli
 * ack cli personl tools for useful command and prettry result show
 *
 * @author lilong <...>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	
	debug && log(flags) ;
	debug && log(cli.input[0])
	if(cli.input[0] == 'ls') {
		// call function ls the  cli.input[1] type
		// subcommand = cli.input[0]
		//resourceType = cli.input[1]
		var exec = require('child_process').exec;
		var cmd = 'pwd';

		exec(cmd, function (error, stdout, stderr) {
			// 获取命令执行的输出
			//log(error);
			log(stdout);
			//log(stderr);
		});

	}	
})();
