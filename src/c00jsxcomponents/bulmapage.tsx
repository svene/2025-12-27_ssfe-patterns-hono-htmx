import type { FC } from 'hono/jsx'

export const BulmaPage: FC<{ title?: string; children?: any }> = ({ title, children }) => (
	<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>{title ?? 'My App'}</title>
		<link rel="stylesheet" href="/static/css/simplepage.css" />
	</head>

	<body class="page">
		{children}
	</body>
	</html>
)
