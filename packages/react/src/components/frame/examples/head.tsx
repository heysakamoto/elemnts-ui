import { Frame } from "@elemnts-ui/react";

export default function Head() {
	return (
		<Frame
			head={
				<style
					dangerouslySetInnerHTML={{
						__html: `
							.frame-head-demo {
								display: flex;
								align-items: center;
								justify-content: center;
								height: 100%;
								font-family: system-ui, sans-serif;
								background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
							}
							.frame-head-demo p {
								color: white;
								font-size: 1.125rem;
								font-weight: 600;
							}
						`,
					}}
				/>
			}
		>
			<div className="frame-head-demo">
				<p>Styled via head prop</p>
			</div>
		</Frame>
	);
}
