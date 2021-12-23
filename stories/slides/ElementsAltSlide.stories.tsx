import { VFC } from "react";
import { Meta } from "@storybook/react";
import ElementsAltSlide from "@app/components/Slides/ElementsAltSlide";
import { ElementsAltSlideProps } from "@app/components/Slides/ElementsAltSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: ElementsAltSlide,
    title: "Slides/ElementsAltSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Elements grid alternative" }],
    elements: [
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 1" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        },
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 2" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        },
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 3" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        }
    ]
});

export const LightThemeStory: VFC<ElementsAltSlideProps> = () => (
    <ElementsAltSlide content={exampleData(false)} />
);

export const DarkThemeStory: VFC<ElementsAltSlideProps> = () => {
    useDarkTheme();
    return <ElementsAltSlide content={exampleData(true)} />;
};
