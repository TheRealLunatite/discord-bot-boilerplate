import { Client } from "discord.js";
import { ClientEventListener } from "../ClientEventListener";

export class ReadyEvent extends ClientEventListener {
    public async execute(client: Client): Promise<void> {
        client.on("ready" , () => {
            const user = client.user;

            if(!(user) || !(client.application)) {
                console.error("Client user or application is not defined");
                return;
            }

            console.log(`${user.username}#${user.discriminator} is now online.`);
        });
    }
}