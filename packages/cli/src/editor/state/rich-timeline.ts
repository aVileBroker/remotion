import {createContext} from 'react';

type State = {
	richTimeline: boolean;
	setRichTimeline: React.Dispatch<React.SetStateAction<boolean>>;
};

export const persistRichTimelineOption = (option: boolean) => {
	localStorage.setItem('richTimeline', String(option));
};

export const loadRichTimelineOption = (): boolean => {
	const item = localStorage.getItem('richTimeline');
	return item === 'true';
};

export const RichTimelineContext = createContext<State>({
	richTimeline: loadRichTimelineOption(),
	setRichTimeline: () => undefined,
});
