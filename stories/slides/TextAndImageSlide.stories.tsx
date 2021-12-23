import { VFC } from "react";
import { Meta } from "@storybook/react";
import TextAndImageSlide from "@app/components/Slides/TextAndImageSlide";
import { TextAndImageSlideProps } from "@app/components/Slides/TextAndImageSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: TextAndImageSlide,
    title: "Slides/TextAndImageSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Text and image slide" }],
    slide_title: [{ type: "heading2", text: "Lorem ipsum dolor" }],
    slide_content: [
        {
            type: "paragraph",
            text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. Also, people love to highlight text. We should show them how. dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled."
        },
        { type: "paragraph", text: "" },
        { type: "heading3", text: "Bullet examples" },
        { type: "paragraph", text: "It would also help if we provided a few examples of bullets:" },
        {
            type: "list-item",
            text: "You can see that bullets have “after paragraph” spacing set to 5."
        },
        {
            type: "list-item",
            text: "Whereas body text and headings have “after paragraph” spacing of 20."
        },
        { type: "list-item", text: "This is an example of bulleted text. " },
        { type: "list-item", text: "This is another bullet example. " },
        { type: "list-item", text: "And here’s a third." },
        { type: "list-item", text: "Finally, we have a fourth.\n" },
        { type: "heading3", text: "Numeric Lists" },
        { type: "paragraph", text: "It would also help if we provided a few examples of bullets:" },
        {
            type: "o-list-item",
            text: "You can see that bullets have “after paragraph” spacing set to 10."
        },
        {
            type: "o-list-item",
            text: "Whereas body text and headings have “after paragraph” spacing of 20."
        },
        { type: "o-list-item", text: "This is an example of bulleted text. " },
        { type: "o-list-item", text: "This is another bullet example. " }
    ],
    slide_image: { url: `/assets/logos/logo_${dark ? "dark" : "light"}.png` },
    slide_image_right_aligned: true
});

export const LightThemeStoryImageToTheRight: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide content={exampleData(false)} />
);

export const LightThemeStoryImageToTheLeft: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide content={{ ...exampleData(false), slide_image_right_aligned: false }} />
);

export const DarkThemeStoryImageToTheRight: VFC<TextAndImageSlideProps> = () => {
    useDarkTheme();
    return <TextAndImageSlide content={exampleData(true)} />;
};

export const DarkThemeStoryImageToTheLeft: VFC<TextAndImageSlideProps> = () => {
    useDarkTheme();
    return (
        <TextAndImageSlide content={{ ...exampleData(true), slide_image_right_aligned: false }} />
    );
};
