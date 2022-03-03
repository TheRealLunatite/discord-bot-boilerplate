import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client, ClientOptions, Collection, Intents } from "discord.js";

import Events from "./events";
import Commands from "./commands";
import { IConfiguration } from "./config/Configuartion";

export class Bot {
    public readonly client : Client;

    constructor(private readonly config : IConfiguration , private readonly options? : ClientOptions) {        
        if(this.options) {
            this.client = new Client({
                ...this.options
            });
        } else {
            this.client = new Client({
                intents : [ Intents.FLAGS.GUILDS ]
            });
        }

        this.client.slashCommands = new Collection();
    }

    public async setupEventListeners() : Promise<void> {
        console.log("Setting up event listeners.");

        for(const Event of Events) {
            const eventInstance = new Event();
            eventInstance.execute(this.client);
        }

        console.log("Finished setting up event listeners.");
    }

    public async setupCommands() : Promise<void> {
        console.log("Setting up (/) commands.");

        for(const Command of Commands) {
            const slashCommand = new Command();
            this.client.slashCommands.set(slashCommand.name , slashCommand);
        }

        console.log("Successfuly setup (/) commands.");
    }

    public async registerCommands() : Promise<void> {
        console.log("Started refreshing application (/) commands.");

        if(this.client.slashCommands.size === 0) {
            throw new Error("There are no slash commands to register.");
        }

        const rest = new REST({ version : "9" }).setToken(this.config.botToken);
        const body : unknown[] = [];

        this.client.slashCommands.forEach((slashCommand) => body.push(slashCommand.toJSON()));

        await rest.put(Routes.applicationGuildCommands(this.config.applicationId, this.config.guildId) , {
            body
        });

        console.log("Successfully registered (/) commands.");
    }


    public async start() : Promise<void> {
        await this.setupCommands();
        await this.setupEventListeners();

        this.client.login(this.config.botToken);
    }
}
