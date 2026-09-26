let API_KEY = "c4e442b0202493c0b10418fb183a0944";
let USERNAME = "DJEndreFM";
let radio_kijelzo = document.getElementById("radio_kijelzo");
let jelenlegi_dal_url = "- - -"
async function kijelzo_frissites() {
	jelenlegi_dal_url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
	const response = await fetch(jelenlegi_dal_url);
	const data = await response.json();
	const track = data.recenttracks.track;
	console.log("Legutóbbi számok:", track);
	radio_kijelzo.innerHTML = `MOST SZÓL: ${(track[0].artist["#text"]).toUpperCase()} - ${(track[0].name).toUpperCase()}`;
}
kijelzo_frissites_ido = setInterval(kijelzo_frissites(), 5000);