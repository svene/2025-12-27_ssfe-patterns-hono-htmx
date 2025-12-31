import {Second} from "./m04d02second.tsx";

export const First = (props: { greeting: string }) => {
	return props.greeting.includes('forward')
		? (
			<Second greeting={(`(First: ${props.greeting} -> Second)`)}></Second>
		)
		: (<div>First: {props.greeting}</div>);
};
