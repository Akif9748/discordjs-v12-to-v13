# Changes:
ENTER Intents for client!


```js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES] });
```

ONLY CAN CHANGE EMBEDS defined embed, else give warn to console!

message => messageCreate

# Manuel Changes (the app will let you know where it is) :



```js
const collector = message.createReactionCollector(filter, { time: 15000 });
const collector = message.createReactionCollector({ filter, time: 15000 });

 const reactions = await message.awaitReactions(filter, { time: 15000 });
const reactions = await message.awaitReactions({ filter, time: 15000 });
```


#### Embeds are not support number
```js
let count = 5;
embed.addField('Count', count);
embed.addField('Count', count.toString())
```

I thing not required for now:
```js
permissions.has('SEND_MESSAGES')
 permissions.has(Permissions.FLAGS.SEND_MESSAGES) 

```

### From:
- text 
- news - a guild news channel
- store - a guild store channel
- unknown - a generic channel of unknown type, could be Channel or GuildChannel
### To:
- GUILD_TEXT
- GUILD_NEWS - a guild news channel
- GUILD_STORE - a guild store channel
- UNKNOWN - a generic channel of unknown type, could be Channel or GuildChannel

#### Presence
```js
 client.user.setPresence({ activity: { name: 'with discord.js' } });
 client.user.setPresence({ activities: [{ name: 'with discord.js' }] });
```
The User.presence property has been removed. Presences are now only found on GuildMember.

```js
 Guild.fetchVanityCode().then(code => console.log(`Vanity URL: https://discord.gg/${code}`));
 Guild.fetchVanityData().then(res => console.log(`Vanity URL: https://discord.gg/${res.code} with ${res.uses} uses`));

```

#### Guild owner 
```js
 console.log(guild.owner);
 guild.fetchOwner().then(console.log);
```

#### Guils voice
```js
guild.voice
 guild.me.voice
```

#### Ban (same kick)
```js
member.ban('reason')
 member.ban({ reason: 'reason' })

```

#### Message delete
```js
message.delete({ timeout: 10000 });
setTimeout(() => message.delete(), 10000);

```

#### Files
```js

 channel.send({ embeds: [new MessageEmbed().setTitle("Files").attachFiles(file)] })
 channel.send({ embeds: [new MessageEmbed().setTitle("Files")], files: [file] })
```

#### create role
```js

 guild.roles.create({ data: { name: "New role" } }, "Creating new role");
 guild.roles.create({ name: "New role", reason: "Creating new role" })
```

#### Shard
```js
 shard.respawn(500, 30000);
 shard.respawn({ delay: 500, timeout: 30000 });
```



#### Webhook
```js
- new WebhookClient(id, token, options);

+ new WebhookClient({ id, token }, options);

+ new WebhookClient({ url }, options);

```
