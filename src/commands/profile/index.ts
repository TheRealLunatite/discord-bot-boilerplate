import { ApplicationCommandOptionData, ApplicationCommandPermissionData , Client, CommandInteraction , MessageEmbed } from "discord.js";
import { SlashCommand } from "../SlashCommand";

export class ProfileCommand extends SlashCommand {
    public readonly name : string;
    public readonly description : string;
    public readonly options : ApplicationCommandOptionData[];
    public readonly defaultPermission? : boolean;
    public readonly permissions?: ApplicationCommandPermissionData[] | undefined;

    constructor() {
        super();
        
        this.name = "profile";
        this.description = "Get information about a user or yourself.";
        this.options = [
            {
                name : "user",
                type : 6,
                description : "Receive a profile of the mentioned user.",
                required : false
            }
        ];
        this.defaultPermission = false;
    }

    public async execute(client : Client, interaction : CommandInteraction) : Promise<void> {
        const mentionedUser = interaction.options.getUser("user" , false);
        const embed = new MessageEmbed();

        embed.setColor("GREEN");

        if(mentionedUser) {
            embed.addFields([
                {
                    name : "Username",
                    value : mentionedUser.tag,
                    inline : true
                },
                {
                    name : "Id",
                    value : mentionedUser.id,
                    inline : true
                },
                {
                    name : "Registeration Date",
                    value : mentionedUser.createdAt.toISOString()
                }
            ]);

            const avatarURL = mentionedUser.avatarURL();

            embed.setThumbnail(avatarURL ? avatarURL : mentionedUser.defaultAvatarURL);

            interaction.reply({ embeds : [ embed ]});
            return;
        }

        const interactionUser = interaction.user;
        embed.addFields([
            {
                name : "Username",
                value : interactionUser.tag,
                inline : true
            },
            {
                name : "Id",
                value : interactionUser.id,
                inline : true
            },
            {
                name : "Registeration Date",
                value : interactionUser.createdAt.toISOString()
            }
        ]);

        const avatarURL = interactionUser.avatarURL();
        embed.setThumbnail(avatarURL ? avatarURL : interactionUser.defaultAvatarURL);

        interaction.reply({ embeds : [ embed ]});
    }
}