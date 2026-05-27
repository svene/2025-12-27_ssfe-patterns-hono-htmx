import {Child} from "hono/jsx";

type MaincardProps = {
	url: string
	title: Child
	subtitle?: Child
	recommendation?: Child
	children: Child
}

export const Maincard = (props: MaincardProps) => {
	return (
		<div className="cell is-flex is-justify-content-start is-align-items-center">
			<div className="card" style="width: 50%; height: 100%">
				<a href={props.url} target="_blank">
					<div className="card-content">
						<p className="title is-4 mb-1">{props.title}</p>
						{props.subtitle && (
							<p className="title is-6 mb-1">
								{props.subtitle}
							</p>
						)}
						{props.recommendation && (
							<p className="subtitle is-6 mb-1">
								{props.recommendation}
							</p>
						)}
					</div>
					<div className="card-content">
						{props.children}
					</div>
				</a>
			</div>
		</div>
	);
};
