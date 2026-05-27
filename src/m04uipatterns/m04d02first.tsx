import {Second} from "./m04d02second.tsx";

// docs:start component
export const First = (props: { greeting: string }) => {
	return props.greeting.includes('forward')
		? (
			<Second greeting={(`(First: ${props.greeting} -> Second)`)}></Second>
		)
		: (<div>First: {props.greeting}</div>);
};
// docs:end component
