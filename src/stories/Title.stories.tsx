import type { Meta, StoryObj } from "@storybook/react";
import { MyTitle } from "../components/Title";


const meta: Meta<typeof MyTitle> = {
  component: MyTitle,
  title: "MyExample/Title",
  tags:['autodocs'], // document
  argTypes: {
    // bg: { control: "color"},
    bg: {
      control: "radio", // or 'select'
      options: ["orange", "purple", "blue"],
      name:"This is the BG color",
      description:"some description here about what bg is"
    },
    label:{
      control:"text",
      name:"This is the Title Text",
      description:"some description here"
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "I Am A base story",
  },
};

// https://storybook.js.org/docs/api/csf
// render function works when renaming file to `tsx` if it's `ts` file it will show error
export const Default: Story = {
  render: (args) => <MyTitle {...args} />,
};
