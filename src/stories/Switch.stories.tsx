import {StoryObj,Meta} from '@storybook/react' 

// https://storybook.js.org/docs/writing-stories/args#setting-args-from-within-a-story
import { useArgs } from '@storybook/preview-api';
import { Switch } from '../components/Switch';

const meta:Meta<typeof Switch> = {
    component:Switch,
    title:"MyExample/Switch",
    tags:['autodocs'],

}

export default meta; 


type Story = StoryObj<typeof meta>

//https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/blocks/useArgs.ts

export const BaseSwitch:Story = {
    args:{
        isOpen:true
    },

    render:(args) => {
        const [{isOpen}, updateArgs] = useArgs()
        const handleToggle =() =>{
            updateArgs({isOpen: !isOpen})
        }
        return <Switch {...args} isOpen={isOpen} onToggle={handleToggle}/>
    }
}