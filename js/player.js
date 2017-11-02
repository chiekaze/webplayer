$(document).ready(function(){
	// player constructor
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1",
	}, 
	[
		{
			title:"ALTWAVE - Back to the Past",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=11519df4cab6c4ee19a066a1b6fe6951a&authkey=AZuqiCeShhMZ0QwcTQjd2Bk",
		},
		{
			title:"ALTWAVE - Incoming Transmission",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=182d42b3f05c0429985356e7312b9b771&authkey=AaRHOc-38EaSAg640BrlxJk",
		},
		{
			title:"Auto Delta Time - Ms Minnie",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1074c7bb5a0604cfc8bf1744a985c0935&authkey=AUy--5HY8_G-497UGiPrADg",
		},
		{
			title:"Benny Smiles - Bad Ending",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=116dc6c9362d240ecb5e0910fd5de9fac&authkey=AWhsY5V0TNEB6mW9RSE4tdk",
		},
		{
			title:"Benny Smiles - Hotline Miami Theme",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1263e754c9fed46b582851b5a851cb31c&authkey=AfqzFmLQzsn8_mtia8iiLCU",
		},
		{
			title:"Carpenter Brut - Escape From Midwich Valley",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1c2acf4def7cc418297f355706549164c&authkey=AXyzwpTUhIelM3t3LVWMnCg",
		},
		{
			title:"Carpenter Brut - Le Perv",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10f7e14fb0eb04b05b96c5a05dc39f636&authkey=AV7aEw9xPDimM13j3fYCQaw",
		},
		{
			title:"Carpenter Brut - Le Perv (Moon Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1dd0d1e5f19c14de9aa84634a28ca20f0&authkey=ASJtCOj8f2bFOPXizLRHYSY",
		},
		{
			title:"Carpenter Brut - Le Perv (Siivagunner Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=158c9b29eecaf4ae481f6ce2563d8da2f&authkey=AdHrudQMz5IR2xu2hF0Jsxo",
		},
		{
			title:"Carpenter Brut - Roller Mobster",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1bf7ac1b6f8244d5289c65113cfd22069&authkey=Aa5JhAEbxKbAK-jB8Ax-f0s",
		},
		{
			title:"Carpenter Brut - Roller Mobster (Power Glove Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1eb3664fc8e5b4b1a980777c9bddb87fd&authkey=AescRL1s6BnmSv8pi8IJ7GI",
		},
		{
			title:"Carpenter Brut - Roller Mobster (Scattle Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=155854aa427e5473e92e4e3803a721649&authkey=AeUwFR_3HrpPxobUiX_q7SI",
		},
		{
			title:"Castanets - You Are The Blood",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1ff5cb1ce62b24e73809a3426e5738870&authkey=AUIfomP-Aobipdz8QeO6UVQ",
		},
		{
			title:"Chromacle - Interlude",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1dab0aa8e784c4a90a3d9a01d78b91410&authkey=AayiQWp-SctYx5xpa59bCkE",
		},
		{
			title:"Cinimod - The Rumble",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1fa4a1cb1aa8a4b43861d4b16ab7ac77d&authkey=AeBe-WmRQeDaA3N_2tUt8OA",
		},
		{
			title:"Coconuts - Silver Lights",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1fa7df4133c0841b29f3ec87a6df527a5&authkey=AeluGJZoOxVz4WQxVWcQHX0",
		},
		{
			title:"Dag Unenge - The Winding Theme #1",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=134943423c8544c40adc62750fc0563e1&authkey=AUSQZb1_XwjlaJ8lPO5erIE",
		},
		{
			title:"Dag Unenge - The Winding Theme #4",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1e5fe5391bcd34185a50c75e8288676d7&authkey=AXYnIaXkI7aZ4elEMnbUVzY",
		},
		{
			title:"Das Mörtal - La Drogue",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1b95055596e13407cb50890c9e693c832&authkey=ARJAOaSAypqZZYXP1B8fn1o",
		},
		{
			title:"Digitalism - Miami Showdown",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=18a29b508d9c74d20b65ce5757bcab8e7&authkey=Aeofu5UJrr-xDD-5fcAT_Y8",
		},
		{
			title:"Dubmood - Richard",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1eda6faf81a2b41758ef09c5df2886aa6&authkey=AQ3sJRtGv5Xl3UcUALR68kY",
		},
		{
			title:"Eirik Suhrke - A New Morning",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19abbc18db4234242a37549feea88b61c&authkey=AXbnQ4G-br5WV1DelNVOO0E",
		},
		{
			title:"El Huervo - Daisuke",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1ac9b6e9d90ae4b2ab25b456ebdf246e8&authkey=AcyXciSCWyQc6D2ijpw3oGQ",
		},
		{
			title:"El Huervo - Ghost",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10c1507db3ee541cca96e63f62318a5af&authkey=AaGzSk03fD5imWXmF2NiFuU",
		},
		{
			title:"El Huervo - Rest",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10b4e4a54014a45c994d6eccf060055b4&authkey=ARNPvGT3jihQewudMcnD2s8",
		},
		{
			title:"El Huervo - Rust",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=191f19efdc9e44a2e96f479f8fc53d4cc&authkey=AfZKUKrfCF2BCSYL2-eCE30",
		},
		{
			title:"El Huervo - Turf",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1697303dcbda24318a200ed47fd489d85&authkey=AfaEhaaVtljpFnpWSOS3oWo",
		},
		{
			title:"EL TIGR3 - She Swallowed Burning Coals",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=199b60d2280f840109413e7a8151fc91d&authkey=AZk4uemjoUn-uHqH7LDdSzA",
		},
		{
			title:"Elliott Berlin - Musikk per Automatikk",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1c1ca61dc8d76414bb1f79090ca7112dc&authkey=AYws6xEfVUx4JAQoTTV0xCk",
		},
		{
			title:"Endless - Disturbance",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1fad4cbd5455345a283c6a83971727708&authkey=AVx4OmrVUF9Z6t28pZN3BRM",
		},
		{
			title:"Endless - Keep Calm",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19b172b7314da443a848ac21951b52f56&authkey=Aexf5GCqhc9xODweKBI0bzE",
		},
		{
			title:"Fixions - Killing Pool",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1147354a4e9e34a1999a056cabd237de9&authkey=AW_73u5C_gdsHgwShStvD3o&e=c204fea57738432091c816a4bad6653a",
		},
		{
			title:"Frekt - Richard",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1989381d3d02b450088b83d9e4966a33d&authkey=AX2P2tOdoNQjZPhq_uorVB0",
		},
		{
			title:"Frekt - Wrong Alley",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=18b76a3a11047423199756ef7007647c2&authkey=AT8wrH2smW19SrKBeK2X3Ds",
		},
		{
			title:"Gesaffelstein - Pursuit",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1a50aa18cc1414255b9a48e5901ab0224&authkey=AViZrQ_ler9nRFsNdnHhOxA",
		},
		{
			title:"IAMTHEKIDYOUKNOWWHATIMEAN - Run",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1f60bea4a88194600afb9014a25884ffa&authkey=AXOYJD-K39u01wldaZNGenw",
		},
		{
			title:"IAMTHEKIDYOUKNOWWHATIMEAN - Run (Siivagunner Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1e127189f4a22416b8c68c4979c2d3c94&authkey=AfbPNY-2JwsyWjtjBZyRQO0",
		},
		{
			title:"Jasper Byrne - Decade Dance",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=147c0592269aa4a618a41845558146b77&authkey=ATu6b3089ZUDONx-b_GzPSI",
		},
		{
			title:"Jasper Byrne - Decade Dance (Vinyl Mix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1b9fa9167b38a4d15bef8d2deffb57894&authkey=AbWQ7euPuI62C6p_QLEbF8Q",
		},
		{
			title:"Jasper Byrne - Hotline",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1c1f330e1a41e42bba718d74e524f8c34&authkey=AdoQwHzQTtk6yZYf3ONbx5A",
		},
		{
			title:"Jasper Byrne - Hotline (Analogue Mix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=145815d79bba24a2ab21f2810a7794d06&authkey=Abt2VASfKCrF-zE-72PGhko",
		},
		{
			title:"Jasper Byrne - Killstreak",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=15eee9ae8bebc49429e7589306c85a6d5&authkey=AWa5uh2m8646Wv9yD-4LUbI",
		},
		{
			title:"Jasper Byrne - Love 2 Hurt U",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1e1c3e2dae0b5448a97de7d99139f0c73&authkey=AY2s_uMFDUgeDOHSRdvbjfw",
		},
		{
			title:"Jasper Byrne - Miami",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=188a221980d0243b5b2cb9dffa26a4f67&authkey=AZqARVwaqsOQgY3L6Ywv6hA",
		},
		{
			title:"Jasper Byrne - Sleep Forever",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=18a697d1d42074b778d80929791afdc52&authkey=AbCThgohpSjOMeZJ2tepEdc",
		},
		{
			title:"Jasper Byrne - Voyager",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=193f1224f36194deca3e6155446d3c74a&authkey=AQWqdtT3MDr2WHRJz2eQh1E",
		},
		{
			title:"Light Club - Blizzard",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1bf527730893e4ca2925f452bc384430b&authkey=AQ2w_AZzqTGcF48GOhnhOdw",
		},
		{
			title:"Light Club - Fahkeet",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=17174aa9d19074b1e9d1a6db577adf042&authkey=ARKmBnj0HcjwmW6bUuw3mSI",
		},
		{
			title:"Light Club - She Meditates",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=15810c9815217415d951bc2954c588356&authkey=Ad52BXPLxDBw_htwph6d-Ng",
		},
		{
			title:"LipPi Sound - Abyss",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=12c481a1072eb496c8eaf96cc31978ee9&authkey=AVGgrz_a-VCBIyBk6RmPbjI",
		},
		{
			title:"Magic Sword - In The Face of Evil",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1270c55ac9cde443b95f9e1f7ce7816dc&authkey=AVkyEvxgNztLoKr78st2CIw",
		},
		{
			title:"Magic Sword - Infinity",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=115ed4760febd400aaa49b50adcfd23a1&authkey=AZjH94BB9ETkhSK4544NyJ0",
		},
		{
			title:"Magic Sword - Journey's End",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1ea7ec29173924fa8b8b7e58c6cf091aa&authkey=ATO81ljzbywNwx9W40LlXog",
		},
		{
			title:"Magic Sword - The Way Home",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1fdb439df162e4bd684d46c6f35d50c46&authkey=ARths2DljRBw2fPIIlqhbBc",
		},
		{
			title:"Magic Sword - Uprising",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1dcf7f71a770a446d811f707fa439a650&authkey=AQC5s3od-ESHQF8nYQvRydE",
		},
		{
			title:"Magna - Divide (Miami Edit)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=196349e1ff4ea4d58a413015cdb156510&authkey=AQCyTlL-x_PFWEiZNVPzgcA",
		},
		{
			title:"Mega Drive - Acid Spit",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1c14f8bf5b8d345668478fd4ddec5479f&authkey=AX_Gxp4xCarIlutT1j7v9YQ",
		},
		{
			title:"Mega Drive - NARC",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1db5118b7acbd45f0bba18a680193cf15&authkey=AZfrKvfJQhZvEf7eDqnJkp0",
		},
		{
			title:"Mega Drive - Slum Lord",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10458631dde02492f8604926c2b6fe920&authkey=AffnIV4HXr8jPPboVlsAwms",
		},
		{
			title:"Mitch Murder - Frantic Aerobics",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=14439f025aea344faaf119bbf92548757&authkey=AXA_QNiYt3xfQBgSLLdvsEk",
		},
		{
			title:"Mitch Murder - Hollywood Heights",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1dadc7ad427284b2fb449ad33f073dff3&authkey=AfQDfZ73-hh8tCIId9MGfLs",
		},
		{
			title:"Modulogeek - Around",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1046dda007ef84b38bf4999a6b5b05779&authkey=AasTvnVTJdUFFgg9rEHgk8Y",
		},
		{
			title:"Modulogeek - Walking",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=128a20757a7364f31aafb47668028657b&authkey=ASVaJj8f6vAJgr74dSjY24k",
		},
		{
			title:"Moon - Crystals",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=140e5b808a2e0430ea5586713dd3830ac&authkey=AdQpgKx8wx7fnKD3HQsgvig",
		},
		{
			title:"Moon - Delay",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1961172501da14d46929abf8f828a013f&authkey=ARGGg7tXZ5CcIy6r12JhhKU",
		},
		{
			title:"Moon - Dust",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19448af7d4f0344ff8174e103fdd45aa3&authkey=AcaoPlbrC7bC8qvIpM7mRtc",
		},
		{
			title:"Moon - Dust (Carpenter Brut Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=17754b14f9eaa4706bf600883821024dd&authkey=AUKNKTEhSuR07iAEOwbOpRI",
		},
		{
			title:"Moon - Hydrogen",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1e9dbf2d712454d4d8c933073fb0523f5&authkey=ARLKDU48oFpv6K2sYFgm6ZM",
		},
		{
			title:"Moon - Paris",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=133afc950752a41879cf8664c3e51ea1d&authkey=AR2CvZ9gOL4Swz3dL_b6iBA",
		},
		{
			title:"Moon - Quixotic",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1a57227cb6ae04203be3442aaab271538&authkey=AaqV_hTBEGu5Sn4L8fQNAhg",
		},
		{
			title:"Moon - Quixotic (Scattle Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=15371c815a06b4106885f8fa6101eede3&authkey=AZyrq4qmVpMOEgqBJXjBYTg",
		},
		{
			title:"Moon - Quixotic (Siivagunner Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1238b868f301d4c778e450bd8b9e70c20&authkey=ARYggmdDOKdiH66d5upBrzI",
		},
		{
			title:"Moon - Release",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1847fc7723b2c49d1a319fdae18ca2137&authkey=AXugU1qHJkxAzQzNIXJ2yXk",
		},
		{
			title:"Old Future Fox Gang - Don't Cry For Me",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=140a002db9e364b6a8814ff7f0bd5b9bd&authkey=AXuaVl7zT995mQO9vLgorbI",
		},
		{
			title:"Old Future Fox Gang - Guided Meditation",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1340306e9c8864cc7ab93d70ebfdbc2f0&authkey=AUbEHDjIn0SK2P6mQKAh7tM",
		},
		{
			title:"Perturbator - Electric Dreams",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19edfc9c9a2004d37ae409b9418fe0686&authkey=AfxJEOYcD5PJLYAgL55Jexg",
		},
		{
			title:"Perturbator - Future Club",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=18ceedbcbaaba48e7a6ee4e38d5b8c056&authkey=Ac19TMxNUUFqcz2iuUU1mpY",
		},
		{
			title:"Perturbator - Miami Disco",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1eafc9392be214eb08e9d02c4a55569aa&authkey=AT5yvVvxobIRaUKkvxanbnI",
		},
		{
			title:"Perturbator - Perturbator's Theme",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19f97a323b4094726986da286e8595dcf&authkey=AeCUQXqDpcyT3rY2iYOgNZA",
		},
		{
			title:"Perturbator - Sexualizer",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1bda261a5e1f44d21a38876d2936893e9&authkey=AdbpMX0qMVesDB002V4U7Hw",
		},
		{
			title:"Perturbator - Tech Noir",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=19c00998954d14a129e15712f0143a1f2&authkey=Aazr7j-OfLCwYs9y2HmY7L4",
		},
		{
			title:"Perturbator - Vengeance",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1ce7be7840ec9478e8d345e7de5e974df&authkey=AQpV7z4PQI8nDJ_qhdfWDHY",
		},
		{
			title:"Power Glove - Crossfire",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1522473d9f34b4f4d841deb20bef4482e&authkey=AXsoh-7gx2xjA3poAXJdvxg",
		},
		{
			title:"Prey Growl - Detection",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10daa77ae04364a358dcde8273765ef2c&authkey=AcgUxlaph3DaitrURILloRw",
		},
		{
			title:"Riddarna - Miami Jam",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1913787f6955f441e93a9ce6fc8bc7499&authkey=ATcYv4FwRue5RG5Nw-InYsI",
		},
		{
			title:"Salvia Plath - Bardo States",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=140cc5afe36c64f10b16c0f28a8bb00d0&authkey=AYabtR54uHy4O4LYn7i4bg8",
		},
		{
			title:"Scattle - Bloodline",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=196e1889189554750b9cbaede44bef8b4&authkey=AcEouDW76NIQDScYjcs5ljY",
		},
		{
			title:"Scattle - Bloodline (Moon's Extra Cheese Mix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1136fc13627c64738a1fac064d1420b87&authkey=AUQ2VNbcqABnHd3rfOJ6W30",
		},
		{
			title:"Scattle - Electric",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10d99463c39934efdbb3c25ebc5fc3786&authkey=AUyGHdPmbnQWj87FPXhRbMA",
		},
		{
			title:"Scattle - Flatline",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=101f19cd0c63d4ffc8351d61e226dc497&authkey=AQRAT1tmkZgA5Z6QV2xpwsk",
		},
		{
			title:"Scattle - Inner Animal",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1bbe0e29d9d5c44dca0d75d5160f0da74&authkey=ASW0fZn1RX0bmoyz9SVpb_Q",
		},
		{
			title:"Scattle - It's Safe Now",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=13da07da804df43d5accecd9a9bb30dd2&authkey=AX-Et26g00FbH9hgNNPE1yM",
		},
		{
			title:"Scattle - Knock Knock",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1b03a1e40d93c4edaac2a223e251b5aa0&authkey=AZGnZRUNrLyxxHIhcqEoVx0",
		},
		{
			title:"Scattle - Remorse",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1098bba89686c43e2b30a1e8fdcbff0fe&authkey=ARmPZ621Mz2-Te9UPn2zsSk",
		},
		{
			title:"Scattle - Remorse (Carpenter Brut Remix)",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1d86d8508462a4ca898d243c2b41970ec&authkey=AVwcOvoLOQoEjCZao7QpWvs",
		},
		{
			title:"Scattle - To The Top",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=15a8c17b11d814eda80d3d58f5f13de4c&authkey=ASRGIlJmsry8y0v7isacFac",
		},
		{
			title:"Scattle - Visitors",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10058783ea3d84fa89d0d7d14ebfa0a26&authkey=AZKkldytjn2jnB2eliDJriE",
		},
		{
			title:"Sjellos - Chamber of Reflections",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1d747e7249f5540edbcf95015197f5d5b&authkey=ARCOqERZnvrZf7LadQrSC_Y",
		},
		{
			title:"Sun Araw - Deep Cover",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=121bdb2be860c494ba903fc7334242b00&authkey=AVoTRRw2xiz4m_00P9KJjFk",
		},
		{
			title:"Sun Araw - Horse Steppin",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=11b7ba1d8ed204a22aefec3bbbb613640&authkey=ATRBjZNzsDQAWX5Zcxfkx1A",
		},
		{
			title:"Tape - Beams",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=163595773cb5848538c1c69fb4c45f21f&authkey=ATLpa8kfuM24ywcOpjs4220",
		},
		{
			title:"Tempel - Disclosure",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=18603bfa5e70646049bbeb8223ad20bb3&authkey=AYg1UJY1fqAJWsdyKVHp5nw",
		},
		{
			title:"The Green Kingdom - Untitled",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=1a68c363a52cd4cac994ef920c2e11634&authkey=Aa1ZMg04QhpS11u8oXUv8LY",
		},
		{
			title:"Trizzle - WouJuno",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=10e438b01783f4f1fa2d956449f14b0f2&authkey=AQdrP_OqVpb8CTLvVRnG2HE",
		},
		{
			title:"Veston Vulture - New Wave Hookers",
			mp3:"https://edukainuu-my.sharepoint.com/personal/kimkarjalainen_kamk_fi/_layouts/15/guestaccess.aspx?docid=11f967a48026c43f3b9cc620ce80a624a&authkey=ASad9WKQ2NB0xHRDovNGP7c",
		},
	], 
	{
		// when played, get the current title 
		play: function(event) {
			console.log(event.jPlayer.status.media.title);
			$('#current-track').empty();
			$('#current-track').append(event.jPlayer.status.media.title);
		},
		
		// if player paused and the timer is 0, the player is stopped so clear the current title
		pause: function(event) {
			if(event.jPlayer.status.currentTime == 0) {
				console.log("stopped");
				$('#current-track').empty();
			}	
		},
		
		// remaining time
		timeupdate: function(event) {
			var status = event.jPlayer.status,
			remaining = status.duration - status.currentTime;
			$('#remaining-time').text($.jPlayer.convertTime(remaining));
		},
		
		// default playlist options
		playlistOptions: {
			autoPlay: true,
			loopOnPrevious: true, // this loops the playlist
			shuffleOnLoop: false,
			enableRemoveControls: false,
			displayTime: 'slow',
			addTime: 'fast',
			removeTime: 'fast',
			shuffleTime: 'slow'
		},
		
		loop: true, // this loops the playlist
		swfPath: "js/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
	});
	
	// shuffles the playlist 
	myPlaylist.shuffle(true); 
});