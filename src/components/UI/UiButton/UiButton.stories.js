import UiButton from './UiButton';
import './../../../styles/index.css';

export default {
  title: 'Ui-Kit/UiButton',
  component: 'UiButton',
};

const Template = (args) => <UiButton {...args} />;

const props = {
  text: 'Hello',
  onClick: () => alert('Button click'),
  disabled: false,
  theme: 'light',
  classes: '',
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: 'light',
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: 'dark',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  theme: 'light',
  disabled: true,
};
