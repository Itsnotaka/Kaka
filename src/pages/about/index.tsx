import next from 'next';
import React from 'react';
import Typist from 'react-typist';
import Header from '../../components/Header';
import {ListItem} from '../../components/ListItems';
import Image from 'next/image';
import Banner from '../../../public/banner.jpg';
import FavSongs from '../../components/FavSongs';
import SongBlock from '../../components/SongBlock';
import ReverseSongBlock from '../../components/ReverseSongBlock';

const about = () => {
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<Typist className="text-left font-mit font-bold text-4xl">
							About
						</Typist>
						<div className="text-opacity-40 text-white hover:text-opacity-100 transition-all">
							<Image
								alt="A day in Hong Kong with my friends"
								src={Banner}
								width={1000}
								height={500}
								placeholder="blur"
								className="rounded-lg block border-2 object-cover border-white"
							/>
							<div className="text-left text-opacity-50 text-white hover:text-opacity-100 transition-all">
								<span className="text-sm not-sr-only">
									A day in Hong Kong with my friends
								</span>
							</div>
						</div>
						<p className="relative text-left opacity-80 not-sr-only">
							I am just an ordinary neighbourhood student who is into Economics
							and Computer Science.
							<br />
							Oh yeah, I listen to a wide variety of musics as well. In Fact,
							according to Spotify, I spent 46,992 minutes listening on Spotify.
						</p>
						<span>
							<h1 className="relative top-2 font-mit text-center font-bold text-2xl not-sr-only">
								Some Of My Favorite Songs
							</h1>
						</span>
						<FavSongs />
						<SongBlock />
						<ReverseSongBlock />
					</div>
				</div>
			</div>
		</>
	);
};

export default about;
