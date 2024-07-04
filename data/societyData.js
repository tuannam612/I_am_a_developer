export const npcs = [
	{
		name: "Alexa",
		isFriend: false,
		isDating: false,
		isBreakup: false,
	},
	{
		name: "Bill",
		isFriend: false,
		isDating: false,
		isBreakup: false,
	},
	{
		name: "John",
		isFriend: false,
		isDating: false,
		isBreakup: true,
	},
	{
		name: "Mary",
		isFriend: true,
		isDating: false,
		isBreakup: false,
	},
	{
		name: "Michael",
		isFriend: true,
		isDating: false,
		isBreakup: false,
	},
	{
		name: "Rose",
		isFriend: false,
		isDating: true,
		isBreakup: false,
	},
];

export const friends = npcs.filter((npc) => npc.isFriend);
export const lovers = npcs.filter((npc) => npc.isDating || npc.isBreakup);
