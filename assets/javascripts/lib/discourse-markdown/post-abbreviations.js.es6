import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['post-abbreviations'] = true;
});

function abbrWellKnown (text) {
	return text
		.replace(/\b(af)\b/ig, "<abbr class=\"dpa-abbr\" title=\"as fuck\">AF</abbr>")
		.replace(/\b(afaik)\b/ig, "<abbr class=\"dpa-abbr\" title=\"as far as I know\">AFAIK</abbr>")
		.replace(/\b(afk)\b/ig, "<abbr class=\"dpa-abbr\" title=\"away from keyboard\">AFK</abbr>")
		.replace(/\b(aka)\b/ig, "<abbr class=\"dpa-abbr\" title=\"also known as\">AKA</abbr>")
		.replace(/\b(aoe)\b/ig, "<abbr class=\"dpa-abbr\" title=\"area of effect\">AoE</abbr>")
		.replace(/\b(atm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"at the moment\">ATM</abbr>")
		.replace(/\b(bamf)\b/ig, "<abbr class=\"dpa-abbr\" title=\"badass mother fucker\">BAMF</abbr>")
		.replace(/\b(bbl)\b/ig, "<abbr class=\"dpa-abbr\" title=\"be back later\">BBL</abbr>")
		.replace(/\b(bff)\b/ig, "<abbr class=\"dpa-abbr\" title=\"best friends forever\">BFF</abbr>")
		.replace(/\b(B[oO]E)\b/g, "<abbr class=\"dpa-abbr\" title=\"bind on equip\">BoE</abbr>")
		.replace(/\b(B[oO]P)\b/g, "<abbr class=\"dpa-abbr\" title=\"bind on pickup\">BoP</abbr>")
		.replace(/\b(brb)\b/ig, "<abbr class=\"dpa-abbr\" title=\"be right back\">BRB</abbr>")
		.replace(/\b(btw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"by the way\">BTW</abbr>")
		.replace(/\b(cob)\b/ig, "<abbr class=\"dpa-abbr\" title=\"close of business\">COB</abbr>")
		.replace(/\b(diy)\b/ig, "<abbr class=\"dpa-abbr\" title=\"do it yourself\">DIY</abbr>")
		.replace(/\b(DoT)\b/g, "<abbr class=\"dpa-abbr\" title=\"damage over time\">DoT</abbr>")
		.replace(/\b(dps)\b/ig, "<abbr class=\"dpa-abbr\" title=\"damage per second\">DPS</abbr>")
		.replace(/\b(elim)\b/ig, "<abbr class=\"dpa-abbr\" title=\"elimination\">elim</abbr>")
		.replace(/\b(elims)\b/ig, "<abbr class=\"dpa-abbr\" title=\"eliminations\">elims</abbr>")
		.replace(/\b(elo)\b/ig, "<abbr class=\"dpa-abbr\" title=\"Elo rating system\">Elo</abbr>")
		.replace(/\b(eod)\b/ig, "<abbr class=\"dpa-abbr\" title=\"end of day\">EOD</abbr>")
		.replace(/\b(ez)\b/ig, "<abbr class=\"dpa-abbr\" title=\"easy\">EZ</abbr>")
		.replace(/\b(faq)\b/ig, "<abbr class=\"dpa-abbr\" title=\"frequently asked question\">FAQ</abbr>")
		.replace(/\b(faqs)\b/ig, "<abbr class=\"dpa-abbr\" title=\"frequently asked questions\">FAQs</abbr>")
		.replace(/\b(ftw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"for the win\">FTW</abbr>")
		.replace(/\b(fwiw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"for what it's worth\">FWIW</abbr>")
		.replace(/\b(fyi)\b/ig, "<abbr class=\"dpa-abbr\" title=\"for your information\">FYI</abbr>")
		.replace(/\b(gg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good game\">GG</abbr>")
		.replace(/\b(ggez)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good game, easy\">GGEZ</abbr>")
		.replace(/\b(ggwp)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good game, well played\">GGWP</abbr>")
		.replace(/\b(gl)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good luck\">GL</abbr>")
		.replace(/\b(glhf)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good luck, have fun\">GLHF</abbr>")
		.replace(/\b(gr)\b/ig, "<abbr class=\"dpa-abbr\" title=\"good round\">GR</abbr>")
		.replace(/\b(gtfo)\b/ig, "<abbr class=\"dpa-abbr\" title=\"get the fuck out\">GTFO</abbr>")
		.replace(/\b(HoT)\b/g, "<abbr class=\"dpa-abbr\" title=\"healing over time\">HoT</abbr>")
		.replace(/\b(hots)\b/ig, "<abbr class=\"dpa-abbr\" title=\"Heroes of the Storm\">HoTS</abbr>")
		.replace(/\b(idc)\b/ig, "<abbr class=\"dpa-abbr\" title=\"I don't care\">IDC</abbr>")
		.replace(/\b(idgaf)\b/ig, "<abbr class=\"dpa-abbr\" title=\"I don't give a fuck\">IDGAF</abbr>")
		.replace(/\b(idk)\b/ig, "<abbr class=\"dpa-abbr\" title=\"I don't know\">IDK</abbr>")
		.replace(/\b(iirc)\b/ig, "<abbr class=\"dpa-abbr\" title=\"if I recall correctly\">IIRC</abbr>")
		.replace(/\b(ily)\b/ig, "<abbr class=\"dpa-abbr\" title=\"I love you\">ILY</abbr>")
		.replace(/\b(imho)\b/ig, "<abbr class=\"dpa-abbr\" title=\"in my humble opinion\">IMHO</abbr>")
		.replace(/\b(imo)\b/ig, "<abbr class=\"dpa-abbr\" title=\"in my opinion\">IMO</abbr>")
		.replace(/\b(irl)\b/ig, "<abbr class=\"dpa-abbr\" title=\"in real life\">IRL</abbr>")
		.replace(/\b(itt)\b/ig, "<abbr class=\"dpa-abbr\" title=\"in this thread\">ITT</abbr>")
		.replace(/\b(jk)\b/ig, "<abbr class=\"dpa-abbr\" title=\"just kidding\">JK</abbr>")
		.replace(/\b(k\/?d)\b/ig, "<abbr class=\"dpa-abbr\" title=\"kill-death ratio\">K/D</abbr>")
		.replace(/\b(kdr)\b/ig, "<abbr class=\"dpa-abbr\" title=\"kill-death ratio\">KDR</abbr>")
		.replace(/\b(lfg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"looking for group\">LFG</abbr>")
		.replace(/\b(lfm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"looking for more\">LFM</abbr>")
		.replace(/\b(lmao)\b/ig, "<abbr class=\"dpa-abbr\" title=\"laughing my ass off\">LMAO</abbr>")
		.replace(/\b(lmfao)\b/ig, "<abbr class=\"dpa-abbr\" title=\"laughing my fucking ass off\">LMFAO</abbr>")
		.replace(/\b(lol)\b/ig, "<abbr class=\"dpa-abbr\" title=\"laughing out loud\">LOL</abbr>")
		.replace(/\b(L[oO]S)\b/g, "<abbr class=\"dpa-abbr\" title=\"line of sight\">LoS</abbr>")
		.replace(/\b(mfw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"my face when\">MFW</abbr>")
		.replace(/\b(mmo(rpg)?)\b/ig, "<abbr class=\"dpa-abbr\" title=\"massively multiplayer online role-playing game\">MMORPG</abbr>")
		.replace(/\b(mmr)\b/ig, "<abbr class=\"dpa-abbr\" title=\"matchmaking ratio\">MMR</abbr>")
		.replace(/\b(moba)\b/ig, "<abbr class=\"dpa-abbr\" title=\"multiplayer online battle arena\">MOBA</abbr>")
		.replace(/\b(np)\b/ig, "<abbr class=\"dpa-abbr\" title=\"no problem\">NP</abbr>")
		.replace(/\b(npc)\b/ig, "<abbr class=\"dpa-abbr\" title=\"non-player character\">NPC</abbr>")
		.replace(/\b(nsfw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"not safe for work\">NSFW</abbr>")
		.replace(/\b(nvm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"never mind\">NVM</abbr>")
		.replace(/\b(omfg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"on my fucking god\">OMFG</abbr>")
		.replace(/\b(omg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"on my god\">OMG</abbr>")
		.replace(/\b(omw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"on my way\">OMW</abbr>")
		.replace(/\b(oom)\b/ig, "<abbr class=\"dpa-abbr\" title=\"out of mana\">OOM</abbr>")
		.replace(/\b(otw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"on the way\">OTW</abbr>")
		.replace(/\b(potg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"play of the game\">PotG</abbr>")
		.replace(/\b(pov)\b/ig, "<abbr class=\"dpa-abbr\" title=\"point of view\">POV</abbr>")
		.replace(/\b(ptr)\b/ig, "<abbr class=\"dpa-abbr\" title=\"public test realm/region\">PTR</abbr>")
		.replace(/\b(PUG)\b/g, "<abbr class=\"dpa-abbr\" title=\"pick-up group\">PUG</abbr>")
		.replace(/\b(PUG[sS])\b/g, "<abbr class=\"dpa-abbr\" title=\"pick-up groups\">PUGs</abbr>")
		.replace(/\b(pvp)\b/ig, "<abbr class=\"dpa-abbr\" title=\"player versus player\">PvP</abbr>")
		.replace(/\b(pve)\b/ig, "<abbr class=\"dpa-abbr\" title=\"player versus environment\">PvE</abbr>")
		.replace(/\b(rot?fl)\b/ig, "<abbr class=\"dpa-abbr\" title=\"rolling on the floor laughing\">ROFL</abbr>")
		.replace(/\b(rot?flmao)\b/ig, "<abbr class=\"dpa-abbr\" title=\"rolling on the floor laughing my ass off\">ROFLMAO</abbr>")
		.replace(/\b(rpg)\b/ig, "<abbr class=\"dpa-abbr\" title=\"role-playing game\">RPG</abbr>")
		.replace(/\b(rsvp)\b/ig, "<abbr class=\"dpa-abbr\" title=\"répondez s'il vous plaît\">RSVP</abbr>")
		.replace(/\b(rtfm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"read the fucking manual\">RTFM</abbr>")
		.replace(/\b(sfw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"safe for work\">SFW</abbr>")
		.replace(/\b(smdh)\b/ig, "<abbr class=\"dpa-abbr\" title=\"shaking my damn head\">SMDH</abbr>")
		.replace(/\b(smh)\b/ig, "<abbr class=\"dpa-abbr\" title=\"shaking my head\">SMH</abbr>")
		.replace(/\b(SR)\b/g, "<abbr class=\"dpa-abbr\" title=\"skill rating\">SR</abbr>")
		.replace(/\b(stfu)\b/ig, "<abbr class=\"dpa-abbr\" title=\"shut the fuck up\">STFU</abbr>")
		.replace(/\b(SWIM)\b/g, "<abbr class=\"dpa-abbr\" title=\"someone who isn't me\">SWIM</abbr>")
		.replace(/\b(tba)\b/ig, "<abbr class=\"dpa-abbr\" title=\"to be announced\">OMW</abbr>")
		.replace(/\b(tbd)\b/ig, "<abbr class=\"dpa-abbr\" title=\"to be determined\">OMW</abbr>")
		.replace(/\b(tbh)\b/ig, "<abbr class=\"dpa-abbr\" title=\"to be honest\">TBH</abbr>")
		.replace(/\b(tf2)\b/ig, "<abbr class=\"dpa-abbr\" title=\"Team Fortress 2\">TF2</abbr>")
		.replace(/\b(tfw)\b/ig, "<abbr class=\"dpa-abbr\" title=\"that feel when\">TFW</abbr>")
		.replace(/\b(tlc)\b/ig, "<abbr class=\"dpa-abbr\" title=\"tender loving care\">TLC</abbr>")
		.replace(/\b(tmi)\b/ig, "<abbr class=\"dpa-abbr\" title=\"too much information\">TMI</abbr>")
		.replace(/\b(ttyl)\b/ig, "<abbr class=\"dpa-abbr\" title=\"talk to you later\">TTYL</abbr>")
		.replace(/\b(ty)\b/ig, "<abbr class=\"dpa-abbr\" title=\"thank you\">TY</abbr>")
		.replace(/\b(tyvm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"thank you very much\">TYVM</abbr>")
		.replace(/\b(wb)\b/ig, "<abbr class=\"dpa-abbr\" title=\"welcome back\">WB</abbr>")
		.replace(/\b(wfm)\b/ig, "<abbr class=\"dpa-abbr\" title=\"works for me\">WFM</abbr>")
		.replace(/\b(WoW)\b/g, "<abbr class=\"dpa-abbr\" title=\"World of Warcraft\">WoW</abbr>")
		.replace(/\b(wp)\b/ig, "<abbr class=\"dpa-abbr\" title=\"well played\">WP</abbr>")
		.replace(/\b(wtb)\b/ig, "<abbr class=\"dpa-abbr\" title=\"want to buy\">WTB</abbr>")
		.replace(/\b(wtf)\b/ig, "<abbr class=\"dpa-abbr\" title=\"what the fuck\">WTF</abbr>")
		.replace(/\b(wth)\b/ig, "<abbr class=\"dpa-abbr\" title=\"what the hell\">WTH</abbr>")
		.replace(/\b(wts)\b/ig, "<abbr class=\"dpa-abbr\" title=\"want to sell\">WTS</abbr>")
		.replace(/\b(e?xp)\b/ig, "<abbr class=\"dpa-abbr\" title=\"experience points\">XP</abbr>");
}

export function setup(helper) {
	helper.postProcessText(function (text) {
		text = [].concat(text);
		for (var i = 0; i < text.length; i++) {
			if (text[i].length > 0 && text[i][0] !== "<") {
				text[i] = abbrWellKnown(text[i]);
			}
		}
		return text;
	});

	helper.whiteList([
		'abbr.dpa-abbr'
	]);
}
