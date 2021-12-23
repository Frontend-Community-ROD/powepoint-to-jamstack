import PrismicDOM from "prismic-dom";
import { className } from "@app/shared/helpers/classname";
import { ChartSlideProps } from "./interfaces";
import styles from "./ChartSlide.module.scss";

/**
 * The chart slide component
 */
export default function ChartSlide(props: ChartSlideProps): JSX.Element {
    /**
     * Sets the pie chart conic gradient
     */
    function setPieChart(): string {
        let previousPercentage: number = 0;

        return props.content.chart_items
            .map(x => {
                const currentPercentage = previousPercentage + (x.item_percentage ?? 0);
                const chartSection = `${x.item_color} ${previousPercentage}% ${currentPercentage}%`;
                previousPercentage = currentPercentage;
                return chartSection;
            })
            .join(",");
    }

    return (
        <div className={styles.content}>
            <div
                className={styles.pieChart}
                style={{ backgroundImage: `conic-gradient(${setPieChart()})` }}
            >
                <div className={styles.inner}>
                    <h2 className="subtitle">{props.content.slide_title[0].text}</h2>

                    {props.content.slide_description.length > 0 && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: PrismicDOM.RichText.asHtml(props.content.slide_description)
                            }}
                        />
                    )}
                </div>
            </div>

            <div className={styles.pieChartReference}>
                {props.content.chart_items.map((x, i) => (
                    <p key={`reference_${i}`} className={styles.reference}>
                        <span
                            className={styles.color}
                            style={{ backgroundColor: x.item_color as string }}
                        />

                        <span className={styles.label}>{x.item_label[0].text}</span>
                        <span className={styles.percentage}>{x.item_percentage}%</span>

                        {x.item_description.length > 0 && (
                            <span
                                {...className("body-text-small", styles.detail)}
                                dangerouslySetInnerHTML={{
                                    __html: PrismicDOM.RichText.asHtml(x.item_description)
                                }}
                            />
                        )}
                    </p>
                ))}
            </div>
        </div>
    );
}
