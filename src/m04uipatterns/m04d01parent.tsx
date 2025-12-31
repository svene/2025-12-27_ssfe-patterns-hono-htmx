import {Child} from "./m04d01child.tsx";

export const Parent = (props: { greeting: string }) => (
	<>
		<h3>Parent</h3>
		<div class="area-border p-1">
			<Child>
				<>slot-content from parent. Greeting: {props.greeting}</>
			</Child>
		</div>
	</>
);
