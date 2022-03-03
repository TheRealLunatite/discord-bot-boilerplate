# discord-bot-boilerplate
A simple Discord bot boilerplate made in Typescript to get you started. 

# Prerequisites
- Yarn
- Node 16.6+

# How To Create Your Discord Bot On The Developer Panel.

- Goto https://discord.com/developers/applications
- Create ```New Application``` on the top right next to your avatar.
- Goto your new application, copy your application id. You'll need it later.
- Navigate to the bot settings on the left side and click ```Add Bot```.
- Copy your token. You'll need it later. Do not reveal this token to anyone.
- Navigate to ```OAuth2``` -> ```URL Generator```. Check the following boxes ```bot``` and ```applications.commands```. 
- Copy the generated url on the bottom and proceed to invite your bot to your server.

# Installation
```
# Clone this repository
https://github.com/TheRealLunatite/discord-bot-boilerplate.git

# Install Required Dependecies
yarn install
```

# Configuration
Navigate to ```src/server.conf```.

|Name|Description|
|----|-----------|
|BOT_TOKEN|An authorization token for your bot to communicate with Discord's servers.|
|GUILD_ID|The id of the guild where this bot was invited to.|
|APPLICATION_ID|The id of the application where you've created your bot on.|

# Usage
```
# Start the bot.
yarn run start-bot

# Register commands.
# Run this command if you've added new commands or it is your first time running the bot.
yarn run register-commands
```
