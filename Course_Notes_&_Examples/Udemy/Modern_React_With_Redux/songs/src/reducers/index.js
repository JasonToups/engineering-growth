import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Smells Like Teen Spirit', duration: '4:04' },
		{ title: 'About a Boy', duration: '4:45' },
		{ title: 'No Scrubs', duration: '3:45' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
