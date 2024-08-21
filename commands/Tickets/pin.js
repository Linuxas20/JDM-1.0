const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const fs = require("fs");
const yaml = require("yaml");
const configFile = fs.readFileSync("./config.yml", "utf8");
const config = yaml.parse(configFile);
const { ticketsDB } = require("../../init.js");
const { checkSupportRole } = require("../../utils/mainUtils.js");
const { pinTicket } = require("../../utils/ticketPin.js");

module.exports = {
  enabled: config.commands.pin.enabled,
  data: new SlashCommandBuilder()
    .setName("pin")
    .setDescription("Pin the ticket channel in the category.")
    .setDefaultMemberPermissions(
      PermissionFlagsBits[config.commands.pin.permission],
    )
    .setDMPermission(false),
  async execute(interaction) {
    if (!(await ticketsDB.has(interaction.channel.id))) {
      return interaction.reply({
        content:
          config.errors.not_in_a_ticket || "You are not in a ticket channel!",
        ephemeral: true,
      });
    }

    const hasSupportRole = await checkSupportRole(interaction);
    if (!hasSupportRole) {
      return interaction.reply({
        content:
          config.errors.not_allowed || "You are not allowed to use this!",
        ephemeral: true,
      });
    }

    const pinEmoji = config?.commands?.pin?.emoji || "📌";

    if (interaction.channel.name.includes(pinEmoji)) {
      return interaction.reply({
        content:
          config.commands.pin.alreadyPinned || "This ticket is already pinned!",
        ephemeral: true,
      });
    }
    const isEphemeral =
      config.pinEmbed.ephemeral !== undefined
        ? config.pinEmbed.ephemeral
        : false;
    await interaction.deferReply({ ephemeral: isEphemeral });
    await pinTicket(interaction, pinEmoji, isEphemeral);
  },
};
