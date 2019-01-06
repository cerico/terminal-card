'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 2,
  margin: 2,
  borderStyle: 'round',
  float: 'center',
}

// Text + chalk definitions
const data = {
  name: chalk.hex('#5ffa68')('               garethrobertlee'),
  handle: chalk.hex('#5ffa68')('cerico'),
  work: chalk.hex('#5ffa68')('Software Engineer at Rentify'),
  opensource: chalk.white('Node.js Community Committee ') + chalk.hex('#5ffa68')('⬢'),
  twitter: chalk.hex('#ffffff')('https://twitter.com/') + chalk.hex('#ff757d')('permuu'),
  npm: chalk.hex('#ffffff')('https://npmjs.com/') + chalk.hex('#ff757d')('~garethrobertlee'),
  github: chalk.hex('#ffffff')('https://github.com/') + chalk.hex('#ff757d')('cerico'),
  linkedin: chalk.white('https://linkedin.com/in/') + chalk.blue('garethrobertlee'),
  web: chalk.cyan('https://diagnostics.yesmat.es'),
  blog: chalk.cyan('https://cerico.github.io'),
  npx: chalk.hex('#ffffff')('npx') + ' ' + chalk.hex('ffffff')('cerico'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelBlog: chalk.white.bold('       Blog:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} 🌊 ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const bloging = `${data.labelBlog}  ${data.blog}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
              //  opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
              //  linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + // data.labelWeb + data.web
               bloging + newline + newline + 
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex('#5ffa68')(boxen(output, options)))
