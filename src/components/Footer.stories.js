import Footer from './Footer.svelte';

export default {
	title: 'Example/Footer',
	component: Footer,
	argTypes: {
		name: { control: 'text' },
		textColor: { control: 'color' },
	},
};

const Template = ({ ...args }) => ({
	Component: Footer,
	props: args,
});

export const Default = Template.bind({});
Default.args = {};
