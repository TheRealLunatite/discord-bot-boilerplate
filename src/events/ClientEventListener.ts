import { Client } from "discord.js";

export interface IClientEventListener {
    execute(client : Client) : Promise<void>
}

export abstract class ClientEventListener {
    public async execute(client : Client) : Promise<void> {
        throw new Error("Event listener had no been implemented.");
    }
}