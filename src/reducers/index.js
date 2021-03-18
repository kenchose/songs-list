import { combineReducers } from "redux";

export const songsReducer = () => {
	return [
		{ title: "Anyone", duration: "4:04" },
		{ title: "Hey Boy", duration: "2:40" },
		{ title: "drivers license", duration: "5:30" },
	];
};

export const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SELECTED_SONG") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSongs: selectedSongReducer,
});
