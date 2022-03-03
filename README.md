# discord-bot-boilerplate
A simple Discord bot boilerplate made in Typescript to get you started. 

# Prerequisites
- Yarn
- Node 16.6+

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
|GUILD_ID|The id of the guild where this bot will reside in and listen to commands.|
|APPLICATION_ID|The id of the application where you've created your bot on.|

# Usage
```
# Start the bot.
yarn run start-bot

# Register commands.
# Run this command if you've added new commands or it is your first time running the bot.
yarn run register-commands
```
