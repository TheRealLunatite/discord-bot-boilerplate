import process from "process";
import { Bot } from "./bot";
import config from "./config";

(async() => {
    const bot = new Bot(config);

    await bot.setupCommands();
    await bot.registerCommands();

    process.exit(1);
})();