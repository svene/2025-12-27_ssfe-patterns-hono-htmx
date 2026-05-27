import {TheChild} from "./m04d01child.tsx";

// docs:start component
export const Parent = (props: { greeting: string }) => (
	<>
		<h3>Parent</h3>
		<div class="area-border p-1">
			<TheChild>
				<>slot-content from parent. Greeting: {props.greeting}</>
			</TheChild>
		</div>
	</>
);
// docs:end component
