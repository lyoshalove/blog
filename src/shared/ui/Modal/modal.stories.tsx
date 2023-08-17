import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, maiores! Harum ipsa hic amet voluptatum ea voluptate sit soluta enim neque, deserunt tenetur. Aperiam neque maiores quos ut harum excepturi?",
    isOpened: true,
  },
};

export const PrimaryDark: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, maiores! Harum ipsa hic amet voluptatum ea voluptate sit soluta enim neque, deserunt tenetur. Aperiam neque maiores quos ut harum excepturi?",
    isOpened: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
