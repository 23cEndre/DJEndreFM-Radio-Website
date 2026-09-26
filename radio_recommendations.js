let playlistTable = document.getElementById("playlist_table");
let API_KEY = "83cfceeb690a12bbaf6b79a43a42a732";
let playlist = [];
let songEntry = document.getElementById("songEntry");
let songEntryButton = document.getElementById("songEntryButton");
async function getPlaylist() {
	if ((songEntry.value).includes(" - ") == true && songEntry.value != "") {
		let artist = songEntry.value.split(" - ")[0];
		let trackName = songEntry.value.split(" - ")[1];
		let trackURL = `http://ws.audioscrobbler.com/2.0/?method=track.getSimilar&artist=${artist}&track=${trackName}&api_key=${API_KEY}&format=json&limit=1000`;
		const tracksData = await fetch(trackURL);
		const data = await tracksData.json();
		let playlist = data.similartracks.track;
		playlistTable.innerHTML = "";
		const tablazatSor = document.createElement("tr");
		playlistTable.appendChild(tablazatSor);
		const tablazatCellaIndex = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaIndex);
		tablazatCellaIndex.innerHTML = "#";
		const tablazatCellaDal = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaDal);
		tablazatCellaDal.innerHTML = "Dal";
		let trackIndex = 0;
		for (const dal of playlist) {
			artist = dal.artist.name;
			songName = dal.name;
			trackIndex += 1;
			const tablazatSor = document.createElement("tr");
			playlistTable.appendChild(tablazatSor);
			const tablazatCellaIndex = document.createElement("td");
			tablazatSor.appendChild(tablazatCellaIndex);
			tablazatCellaIndex.innerHTML = trackIndex;
			const tablazatCellaDal = document.createElement("td");
			tablazatSor.appendChild(tablazatCellaDal);
			tablazatCellaDal.innerHTML = `${artist} - ${songName}`;
		}
	}
	else if (songEntry.value != "") {
		let artist = songEntry.value;
		let artistURL = `http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=${artist}&api_key=${API_KEY}&format=json&limit=1000`;
		const artistsData = await fetch(artistURL);
		const data = await artistsData.json();
		let artistsList = data.similarartists.artist;
		playlistTable.innerHTML = "";
		const tablazatSor = document.createElement("tr");
		playlistTable.appendChild(tablazatSor);
		const tablazatCellaIndex = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaIndex);
		tablazatCellaIndex.innerHTML = "#";
		const tablazatCellaEloado = document.createElement("td");
		tablazatSor.appendChild(tablazatCellaEloado);
		tablazatCellaEloado.innerHTML = "Előadó";
		let artistIndex = 0;
		for (const eloado of artistsList) {
			artist = eloado.name;
			artistIndex += 1;
			const tablazatSor = document.createElement("tr");
			playlistTable.appendChild(tablazatSor);
			const tablazatCellaIndex = document.createElement("td");
			tablazatSor.appendChild(tablazatCellaIndex);
			tablazatCellaIndex.innerHTML = artistIndex;
			const tablazatCellaDal = document.createElement("td");
			tablazatSor.appendChild(tablazatCellaEloado);
			tablazatCellaDal.innerHTML = `${artist}`;
		}
	}
}
getPlaylist();
playlistUpdateInterval = setInterval(getPlaylist, 10000);