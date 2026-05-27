import type { Child } from 'hono/jsx'
// docs:start component
import {HEAD} from "../components/head";

export const BulmaPage = (props: { children: Child }) => (
	<html lang="en">
	{HEAD}

	<body>
	<div className="container mt-1">

		<div className="p-1 mt-1">
			{props.children}
		</div>
	</div>
	</body>
	</html>
);
// docs:end component

