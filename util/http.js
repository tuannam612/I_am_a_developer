import {
	getDatabase,
	set,
	ref,
	get,
	update,
	remove,
	child,
} from "firebase/database";
import app from "../constants/firebase";
import axios from "axios";

const db = getDatabase(app);
const dbRef = ref(db);
export function createNewCharacter(userEmail, charData) {
	set(ref(db, `character/${userEmail}`), charData);
}

//handle fetching character data
export async function fetchCharacterData(userEmail="") {

	const response = await axios.get(
		"https://mpr-final-2cc67-default-rtdb.firebaseio.com/character/"+`${userEmail}.json`
	);
	return response.data;
}
export function updateCharacterData(userEmail, charData) {
	update(ref(db, `character/${userEmail}`), charData);
}
export function deleteCharacterData(userEmail) {
	remove(ref(db, `character/${userEmail}`));
}
export async function fetchGameData(gameData = "") {
	const response = await get(child(ref(db), `game/${gameData}`));
	return response;

	// get(child(ref(db), `game/${gameData}`)).then((snapshot) => {
	// 	console.log(snapshot.val());
	// });
}
