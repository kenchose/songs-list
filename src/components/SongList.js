import React from "react";
import { connect } from "react-redux";

import { songSelected } from "../actions";

const style = {
	display: "inline-block",
};

class SongList extends React.Component {
	renderList = () => {
		return this.props.songs.map((song) => {
			return (
				<div key={song.title}>
					<div className="song">
						<ul
							className="song__list"
							style={{
								listStyle: "none",
								display: "inline-block",
								padding: 0,
							}}>
							<li>{song.title}</li>
						</ul>
						<button
							style={style}
							onClick={() => this.props.songSelected(song)}
							className="song-select__button">
							Select
						</button>
					</div>
				</div>
			);
		});
	};

	render() {
		return <div>{this.renderList()}</div>;
	}
}

const maptToStateProps = (state) => {
	return { songs: state.songs };
};

export default connect(maptToStateProps, { songSelected })(SongList);
