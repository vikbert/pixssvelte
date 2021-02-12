import Github from './Github.svelte';

export default {
	title: 'Example/Github',
	component: Github,
	argTypes: {
    width: {
      control: 'number',
      description: 'the width of icon',
      default: '30',
    },
		githubAuthor: { control: 'text', description: 'the name of github account' },
		githubProject: { control: 'text', description: 'the project name of github repository' },
	},
};

const Template = ({ ...args }) => ({
	Component: Github,
	props: args,
});

export const Default = Template.bind({});
Default.args = {};
