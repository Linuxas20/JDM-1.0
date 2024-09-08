# Sentinel Tickets Discord Bot

[![GitHub Repo stars](https://img.shields.io/github/stars/ralphkb/sentinel-tickets?style=flat)](https://github.com/ralphkb/sentinel-tickets/stargazers)
[![GitHub release (latest)](https://img.shields.io/github/v/release/ralphkb/sentinel-tickets)](https://github.com/ralphkb/sentinel-tickets/releases/latest)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/ralphkb/sentinel-tickets/latest)](https://github.com/ralphkb/sentinel-tickets/commits/main/)
[![GitHub last commit](https://img.shields.io/github/last-commit/ralphkb/sentinel-tickets)](https://github.com/ralphkb/sentinel-tickets/commits/main/)
[![Patreon Sponsor](https://img.shields.io/badge/Patreon-Sponsor-blue?logo=patreon)](https://patreon.com/ralphkb)

## Introduction
This is a ticket bot that aims to provide a free and open source solution for managing tickets on Discord. The bot is designed to be lightweight, without any watermarks or unnecessary bloat. It allows users to create, track, and manage tickets seamlessly.

## Requirements
- Tested on latest Node.js v18

## Table of Contents
- [🛠️ Installation](#installation)
- [🔄 Updating](#updating)
- [✨ Features](#features)
- [💖 Sponsor](#sponsor)
- [📚 Documentation](#documentation)
- [🐛 Bug Reporting](#bug-reporting)
- [📃 License](#license)

## Installation
1. Install Node.js if not already installed (v18 recommended): [Node.js Installation Guide](https://nodejs.org/en/download/)
2. Clone the repository: `git clone https://github.com/ralphkb/sentinel-tickets.git` or download the latest release: https://github.com/ralphkb/sentinel-tickets/releases
3. Change to the project directory, for example: `cd sentinel-tickets` or the directory where you uploaded the release files.
4. Run `npm install` to install the dependencies
5. Rename .env.example to .env and config.yml.example to config.yml
6. Open .env file and fill it with your bot's token, guild ID and client ID
7. Open config.yml to configure the settings and messages to your liking, make sure to properly configure the ticket categories
8. Start the bot: `npm start`

## Updating
1. Make a backup of your current bot directory in case of issues so you have the option to revert back.
2. Make sure not to delete your `data` directory otherwise you might run into issues with tickets that you did not delete yet.
3. Download the new release/files and replace the current files with the ones you downloaded.
4. If you already followed the installation process, you can use the latest `config.yml.example` you downloaded to manually add any new config options to your `config.yml`.
5. If any dependencies got updated, you will have to delete your `node_modules` directory and run `npm install` again after you've already uploaded the new files.
6. Start the updated bot using `npm start`

## Features

- Up to 25 Categories: Organize support requests in different categories.
- Intuitive Ticket Panel: Create and manage tickets with ease using buttons or a select menu.
- Option to create many ticket panels and send them to any channel.
- Modal Questions: Gather necessary information before opening a ticket.
- Configuration to customize many of the messages and embed options.
- Option to configure support roles per ticket category.
- Option to require one or more roles to create a ticket per ticket category.
- Option to ping support roles on ticket creation per ticket category.
- The ability to have configure fallback categories if one becomes full.
- Edit permissions of the ticket creator, support roles, added roles and added users per ticket category.
- Per Day Working Hours feature with an option to specify the timezone and block ticket creation outside the working hours.
- Option to configure the amount of max opened tickets at one time.
- Ticket claiming feature that can be turned on/off.
- Automatic saving of transcripts upon ticket deletion and force deletion.
- Option to manually save a transcript with images downloaded, use with caution as it increases the transcript size.
- Options to DM users upon ticket close, ticket reopen or the usage of the alert command.
- Option to DM users on ticket deletion with their transcript and an embed with useful information.
- Configurable rating/feedback system with logs of the responses.
- Option to save the transcripts as HTML or TXT, with the possibility to save images in HTML transcripts.
- Ticket logs for multiple ticket events, such as ticket create, close, delete, force delete, reopen, claim, unclaim etc.
- Option to select a channel for each log event to be sent to.
- Precise and organized logs of errors and all ticket events in a logs.txt file.
- Option to edit the activity of the bot.
- Blacklist system with the ability to add users or roles with an optional reason and view them in a list.
- Option to automatically close tickets after X amount of time from the last message sent in that ticket, with an option to ignore bots.
- Option to automatically close or delete a ticket after the ticket creator left the discord server.
- Option to automatically close or delete a ticket after an alert was sent and the ticket creator did not reply in time.
- Option to automatically delete closed tickets after X amount of time from the ticket's closure time.
- DM preference system, allowing users to toggle their preference regarding receiving DMs from the bot such as alert, close, reopen & delete.
- The ability to create stats channels that will be automatically updated after a configurable amount of time.
- Multiple Commands: Efficiently manage tickets with various commands.
    - Send the ticket panels in any channel using the panel id
    - Add Users or Roles to a ticket
    - Remove Users or Roles from a ticket
    - Rename Ticket Channel
    - Alert Ticket Creator
    - Close Ticket to archive them until deleting them
    - Delete Tickets
    - Re-Open Tickets
    - Save Transcripts
    - Claim/Unclaim Tickets
    - Move tickets to another category
    - Pin tickets in a category
    - Add a custom slowmode to a ticket
    - Transfer ticket ownership to another user
    - Add a priority to a ticket
    - Change the topic of a ticket, with placeholders support
    - Close Request so users can request that staff close their ticket
    - List current open and closed tickets of a user
- Context Menu Commands: Right click commands that are easy to use.
    - Get User Info
    - Blacklist Add
    - Blacklist Remove
    - Ticket Alert
    - Ticket Pin
    - Ticket Transcript
    - Tickets List
    - Ticket Close Request
    - Ticket Claim
    - Ticket Unclaim
- Useful statistics such as:
    - Total Tickets
    - Total Open Tickets
    - Total Claimed Tickets
    - Total Messages
    - Total Ticket Creators
    - Average Tickets Created Per User
    - Total Reviews
    - Average Rating

## Sponsor
If you find value in this project, you can support the continued development by joining my Patreon! https://www.patreon.com/Ralphkb  
You may also consider leaving a star, all support is welcome and really appreciated, thank you! ❤️ 

## Documentation
You can find the documentation website of the bot here: https://sentineltickets.com

## Bug Reporting
- For bug reports, open an issue [here](https://github.com/ralphkb/sentinel-tickets/issues).  
This is a free project that I enjoy working on in my free time, I cannot guarantee support however I will try my best to fix bugs, sort issues and add new features! I am constantly learning and improving, thank you for your understanding. 😄  
Join my [Discord Server](https://discord.gg/vhXCzj9S3J) for community support. Patreon members receive unique roles and perks on the discord.

## License
This project is licensed under the [MIT License](LICENSE).