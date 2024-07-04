import axios from "axios";

const API_KEY = "AIzaSyDRmXuMfCix5Hv7TL2K3lq-hOgq7SFSbI0";
async function authenticate(authType, email, password) {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=`+ API_KEY,
		{
			email: email,
			password: password,
			returnSecureToken: true,
		}
	)
	return response;
}
export function signup(email, password) {
	return authenticate("signUp", email, password);
}
export function login(email, password) {
	return authenticate("signInWithPassword", email, password);
}
export function logout() {}
