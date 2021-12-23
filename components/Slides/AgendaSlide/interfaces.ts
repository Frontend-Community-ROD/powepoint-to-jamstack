import { RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface IAgendaSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_content: RichTextField;
}

export interface AgendaSlideProps {
    content: IAgendaSlide;
}
