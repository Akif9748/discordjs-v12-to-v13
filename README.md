# Changes:
ENTER IntentS for client!


```js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES] });
```

ONLY CAN CHANGE EMBEDS defined embed, else give warn to console!


# Manuel Changes (the app will let you know where it is) :

message => messageCreate

```js
const collector = message.createReactionCollector(filter, { time: 15000 });
const collector = message.createReactionCollector({ filter, time: 15000 });

 const reactions = await message.awaitReactions(filter, { time: 15000 });
const reactions = await message.awaitReactions({ filter, time: 15000 });
```

```js
let count = 5;
embed.addField('Count', count);
embed.addField('Count', count.toString())
```

```js
permissions.has('SEND_MESSAGES')
 permissions.has(Permissions.FLAGS.SEND_MESSAGES) 

```
### From:

- news - a guild news channel
- store - a guild store channel
- unknown - a generic channel of unknown type, could be Channel or GuildChannel
### To:
- GUILD_NEWS - a guild news channel
- GUILD_STORE - a guild store channel
- UNKNOWN - a generic channel of unknown type, could be Channel or GuildChannel

```js
 client.user.setPresence({ activity: { name: 'with discord.js' } });
 client.user.setPresence({ activities: [{ name: 'with discord.js' }] });
```
```js
 Guild.fetchVanityCode().then(code => console.log(`Vanity URL: https://discord.gg/${code}`));
 Guild.fetchVanityData().then(res => console.log(`Vanity URL: https://discord.gg/${res.code} with ${res.uses} uses`));

```

#### Guild owner 
```js
 console.log(guild.owner);
 guild.fetchOwner().then(console.log);
```
```js
guild.voice
 guild.me.voice
```

```js
member.ban('reason')
 member.ban({ reason: 'reason' })

```


```js
message.delete({ timeout: 10000 });
setTimeout(() => message.delete(), 10000);

```

```js

 channel.send({ embeds: [new MessageEmbed().setTitle("Files").attachFiles(file)] })
 channel.send({ embeds: [new MessageEmbed().setTitle("Files")], files: [file] })
```

```js

 guild.roles.create({ data: { name: "New role" } }, "Creating new role");
 guild.roles.create({ name: "New role", reason: "Creating new role" })
```

#### Shard
```js
 shard.respawn(500, 30000);
 shard.respawn({ delay: 500, timeout: 30000 });
```


The User.presence property has been removed. Presences are now only found on GuildMember.

#### Webhook
```js
- new WebhookClient(id, token, options);
+ new WebhookClient({ id, token }, options);

+ new WebhookClient({ url }, options);

```