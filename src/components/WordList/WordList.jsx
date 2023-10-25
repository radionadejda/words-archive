import './_WordList.scss';

import {Button} from '../Button/Button';

export function WordList(props) {
	const { english, transcription, russian, tags } = props.word;
	return (
		<div className="word">
			<h2 className="title">{english}</h2>
			<div className="description">
				<div className="text">{transcription}</div>
				<div className="text">{russian}</div>
				<div className="text">{tags}</div>
			</div>
			<div className="edit">
				<Button name="Edit"/>
				<Button name="Delete"/>
			</div>
		</div>
	);
}