import type { FC } from 'hono/jsx'
import {HEAD} from "../components/head";

export const BulmaPage: FC<{ title?: string; children?: any }> = ({ title, children }) => (
	<html lang="en">
	{HEAD}

	<body>
	<div className="container mt-1">

		<div className="p-1 mt-1">
			{children}
		</div>
	</div>
	</body>
	</html>
)
