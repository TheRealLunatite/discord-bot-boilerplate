import { Bot } from "./bot";
import config from "./config";

(async () => {
    new Bot(config).start();
})();