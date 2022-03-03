import { CommandInteraction , Client, ApplicationCommandOptionData , ApplicationCommandPermissionData , Collection } from "discord.js";

// export interface ISlashCommand {
//     name : string;
//     description : string;
//     options : ApplicationCommandOptionData[];
//     defaultPermission? : boolean;
//     permissions? : ApplicationCommandPermissionData[];
//     toJSON() : unknown;
//     execute(client : Client , interaction : CommandInteraction) : Promise<void>;
// }


export type SlashCommandCollection = Collection<string , SlashCommand>;

export abstract class SlashCommand {
    /**
     * The name of this slash command
     */
    public abstract readonly name : string;
    /**
     * The description of this slash command
     */
    public abstract readonly description : string;
    /**
     * {@link https://discord.com/developers/docs/interactions/application-commands}
     * The options of this slash command
     */
    public abstract readonly options : ApplicationCommandOptionData[];
    /**
     * Whether the command is enabled by default when the app is added to a guild
     */
    public abstract readonly defaultPermission? : boolean;

    public abstract readonly permissions? : ApplicationCommandPermissionData[];

    public toJSON() : unknown {
        return {
            name : this.name,
            description : this.description,
            options : this.options,
            defaultPermission : this.defaultPermission,
            permissions : this.permissions
        };
    }

    public async execute(client : Client , interaction : CommandInteraction) : Promise<void> {
        console.log(client);
        await interaction.reply(`${this.name} command has not been setup.`);
    }
}