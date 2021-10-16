// External Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Internal Components
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 4:45pm"
					content={faker.hacker.phrase()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 2:00am"
					content={faker.hacker.phrase()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Jane"
					timeAgo="Today at 7:30pm"
					content={faker.hacker.phrase()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
