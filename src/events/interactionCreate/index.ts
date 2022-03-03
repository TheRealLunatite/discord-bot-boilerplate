import { Client } from "discord.js";
import { ClientEventListener } from "../ClientEventListener";

export class InteractionCreateEvent implements ClientEventListener {
    public async execute(client: Client): Promise<void> {
        client.on("interactionCreate" , (interaction) => {
            if(!(interaction.isCommand())) {
                return;
            }

            const interactionCommandName = interaction.commandName;
            const slashCommand = client.slashCommands.get(interactionCommandName);

            if(!(slashCommand)) {
                console.error(`${interactionCommandName} slash command does not exist. Try running 'yarn run deploy-commands' on your terminal.`);
                return;
            }

            try {
                slashCommand.execute(client , interaction);
            } catch (e) {
                // eslint-disable-next-line no-ex-assign
    
                console.error(`An error occurred in ${interactionCommandName} command : ${(e as Error).message}`);
            }
        });
    }
}