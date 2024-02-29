## Vite + React + TypeScript + TailwindCSS + Storybook

`pnpm create vite .`
`pnpm install`
`pnpm run dev`

## Install TailwindCSS

https://tailwindcss.com/docs/guides/vite

`pnpm add -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

## Set up Storybook

`npx storybook@latest init`
`pnpm run storybook`

## Storybook with TailwindCSS

https://storybook.js.org/recipes/tailwindcss

`npx storybook@latest add @storybook/addon-themes`

Toggle themes with CSS class

in my `index.css`

I added a `.dark` class

```
@tailwind base;
@tailwind components;
@tailwind utilities;

.dark {
  --background: hsl(220, 17%, 17%);
  --color: hsl(0, 0%, 90%);
}
.light {
  --background: hsl(222, 23%, 89%);
  --color: hsl(0, 0%, 0%);
}

```

## Some Issues with render()

```
// https://storybook.js.org/docs/api/csf

// this doesn't work
// export const WithProp: Story = {
//   render: () => <MyTitle label="something" bg="purple" />,
// };

```

### Solution -> change file from `ts` to `tsx` fixed it !

## Adding Docs

` tags:['autodocs'],`

## Add Switch Stories with useArgs()

@storybook/preview-api
