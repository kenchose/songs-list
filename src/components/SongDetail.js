import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	if (!song) {
		return (
			<div>
				<h2>Select a song</h2>
			</div>
		);
	}
	return (
		<div>
			<h2>Song detail:</h2>
			<p>{song.title}</p>
			<p>{song.duration}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSongs };
};

export default connect(mapStateToProps)(SongDetail);
