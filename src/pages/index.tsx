import Header from '../components/_Header';
import Typist from 'react-typist';

import {ListItem} from '../components/ListItems';
import {
	SiAmazonaws,
	SiGit,
	SiGo,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,
	SiTypescript,
	SiWebpack,
	SiYarn,
} from 'react-icons/si';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {useLanyard, Data as LanyardData} from 'use-lanyard';
import RoadMap from '../components/RoadMap';
import GradientBar from '../components/GradientBar';

let age = new Date().getUTCFullYear() - 2003;
interface Props {
	lanyard: LanyardData;
}
export default function Home(props: Props) {
	const {data: lanyard} = useLanyard('365733917090906113', {
		fallbackData: props.lanyard,
	});

	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit font-bold text-4xl">
							Hello, I am Daniel 👋
						</h1>
						<Typist className="relative text-lg font-medium top-2 underline">
							Be passionate about your life, be interested in everything
							surrounding you.
						</Typist>
						<GradientBar />
						<p className=" text-lg text-left opacity-80 hover:opacity-100">
							Alright let's do this one last time. My name is Min Chun Fu. I am
							an ordinary {age} year old student. I was not bitten by a
							radioactive spider and I am pretty sure you know the rest. My
							favorite quote is "think about why obvious questions are obvious,
							that makes you understand how to solve complex problems"
						</p>
						<h1 className="font-mit text-left font-medium text-2xl">
							My Tech Stack 💻
						</h1>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
							<ListItem icon={SiPostgresql} text="Postgres" />
							<ListItem icon={SiReact} text="React.js" />
							<ListItem icon={SiNodeDotJs} text="Node.js" />
							<ListItem icon={SiTypescript} text="TypeScript" />
							<ListItem icon={SiGo} text="Golang" />
							<ListItem icon={SiAmazonaws} text="AWS" />
							<ListItem icon={SiNextDotJs} text="Next.js" />
							<ListItem icon={SiWebpack} text="Webpack" />
							<ListItem icon={SiYarn} text="Yarn" />
							<ListItem icon={SiTailwindcss} text="Tailwind CSS" />
							<ListItem icon={SiGit} text="Git" />
							<ListItem icon={SiStyledComponents} text="Styled Components" />
						</ul>
						
						<h1 className="font-mit text-left font-medium text-2xl">
							How Did I End Up Here? 🤔
						</h1>
						<RoadMap />
					</div>
				</div>
			</div>
		</>
	);
}
