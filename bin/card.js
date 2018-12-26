#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

// Some sweet ascii art
const avatar = require( "../art/avatar" );
const banner = require( "../art/banner" );

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.white.bold( "                   Ariel Martin Castro" ),
	handle: chalk.cyan( "amartincastro" ),
	work: chalk.white( "Internet Janitor" ),
	twitter: chalk.cyan( "https://twitter.com/AMartinCastro" ),
	github: chalk.cyan( "https://github.com/amartincastro" ),
	linkedin: chalk.cyan( "https://www.linkedin.com/in/arielmcastro/" ),
	npx: chalk.white( "npx amartincastro" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	bio: chalk.yellow( `Internet janitor, athlete, I fix the googles and play the nintendos` )
};

// Actual strings we're going to output
const hr = chalk.yellow( "----------~~~~~~~~~==========~~~~~~~~~-----------" );
const heading = `${ data.name }`;
const working = `\n${ data.labelWork }  ${ data.work }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;

const card = [
	avatar, banner,
	hr, heading, hr, working, workingUrl,
	twittering, githubing, linkedining,
	webing, carding, bio
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
