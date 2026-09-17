let playlistTable = document.getElementById("playlist_table");
let API_KEY = "83cfceeb690a12bbaf6b79a43a42a732";
let USERNAME = "DJEndreFM";
let playlist = [];
async function getPlaylist() {
	let url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1000`;
	const tracksData = await fetch(url);
	const data = await tracksData.json();
	playlist = data.recenttracks.track;
	playlistTable.innerHTML = "";
	const tablazatSor = document.createElement("tr");
	playlistTable.appendChild(tablazatSor);
	const tablazatCellaDatum = document.createElement("td");
	tablazatSor.appendChild(tablazatCellaDatum);
	tablazatCellaDatum.innerHTML = "Dátum";
	const tablazatCellaDal = document.createElement("td");
	tablazatSor.appendChild(tablazatCellaDal);
	tablazatCellaDal.innerHTML = "Dal";
	for (const dal of playlist) {
		artist = dal.artist["#text"];
		songName = dal.name;
		songDate = dal.date["#text"];
		const tablazatSor = document.createElement("tr");
		playlistTable.appendChild(tablazatSor);
		const tablazatCellaDatum = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaDatum);
		tablazatCellaDatum.innerHTML = songDate;
		const tablazatCellaDal = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaDal);
		tablazatCellaDal.innerHTML = `${artist} - ${songName}`;
	}
}
getPlaylist();
playlistUpdateInterval = setInterval(getPlaylist, 10000);