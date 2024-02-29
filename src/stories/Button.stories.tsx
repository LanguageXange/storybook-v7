import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

// https://storybook.js.org/docs/essentials/controls#annotation
// https://github.com/storybookjs/storybook/blob/next/docs/api/parameters.md
const meta: Meta<typeof Button> = {
  component: Button,
  title: "MyExample/Button",
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      options: ["download", "bookmark"],
      control:'select'
    },

    variant: {
      control: "radio",
      options: ["primary", "secondary", "icon"],
      //   if:{arg:"variant", neq:"icon"},
      description: "Select different button styling",
    },
    label: {
      control: "text",
      name: "button label",
      description: "Enter text for the button",
    },
  },
    parameters:{
      controls:{expanded:true},
      layout:'centered' // padded, centered, fullscreen
      
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Request Demo",
    variant: "primary",
  },
};

export const IconBtn: Story = {
  args: {
    label: "Download Now",
    variant: "icon",
    iconType: "download",
  },
};
