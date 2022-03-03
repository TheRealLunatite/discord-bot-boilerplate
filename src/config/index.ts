import dotenv from "dotenv";
import path from "path";
import { IConfiguration } from "./Configuartion";

dotenv.config({
    path: path.resolve(__dirname, "../server.conf")
});

function getEnvironmentVariable(varName: string, required?: boolean, defaultValue?: string): string | undefined  {
    if (varName in process.env) {
        return process.env[varName];
    } else if (required) {
        throw new Error(`${varName} is a required env variable and was not found!`);
    } else {
        if (defaultValue !== null) {
            return defaultValue;
        }

        throw new Error(`${varName} is a optional env variable and a default value for it was not found!`);
    }
}


const config: IConfiguration = {
    botToken : getEnvironmentVariable("BOT_TOKEN" , true) as string,
    guildId : getEnvironmentVariable("GUILD_ID" , true) as string,
    applicationId : getEnvironmentVariable("APPLICATION_ID" , true) as string
};

export default config;