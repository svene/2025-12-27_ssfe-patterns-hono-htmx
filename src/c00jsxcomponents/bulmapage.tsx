import type { ComponentChildren } from 'hono/jsx'
import {HEAD} from "../components/head";

type BulmaPageProps = {
	title?: string
	children?: ComponentChildren
}

// export const BulmaPage = ({ title, children }: BulmaPageProps) => (
export const BulmaPage = (props: { title: string, children: ComponentChildren }) => (
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

