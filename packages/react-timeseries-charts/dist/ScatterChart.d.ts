import * as React from "react";
import { Event, Key } from "pondjs";
import { LabelValueList } from "./types";
import { Styler } from "./styler";
import { ChartProps } from "./charts";
import { ScatterChartStyle, ScatterChartChannelStyle, EventMarkerStyle } from "./style";
export declare type EventColumnPair = {
    event?: Event<Key>;
    column?: string;
};
export declare type ScatterChartProps = ChartProps & {
    series: any;
    columns?: string[];
    axis: string;
    radius?: number | ((...args: any[]) => any) | any;
    style?: ScatterChartStyle | ((channel: string, event?: Event<Key>) => ScatterChartChannelStyle) | Styler;
    info?: LabelValueList | string;
    infoStyle?: EventMarkerStyle;
    infoWidth?: number;
    infoHeight?: number;
    infoTimeFormat?: ((date: Date) => string) | string;
    selected?: EventColumnPair;
    onSelectionChange?: (...args: any[]) => any;
    highlight?: EventColumnPair;
    onMouseNear?: (...args: any[]) => any;
};
export declare class ScatterChart extends React.Component<ScatterChartProps> {
    static defaultProps: Partial<ScatterChartProps>;
    eventrect: SVGRectElement;
    constructor(props: ScatterChartProps);
    getOffsetMousePosition(e: React.MouseEvent<SVGElement>): number[];
    handleClick(e: React.MouseEvent<SVGCircleElement>, event: Event<Key>, column: string): void;
    handleHover(e: React.MouseEvent<SVGElement>): void;
    handleHoverLeave(): void;
    providedStyleMap(column: string, event: Event<Key>): ScatterChartChannelStyle;
    style(column: string, event: Event<Key>): {
        fill: string;
        opacity: number;
    } & React.CSSProperties;
    renderScatter(): JSX.Element;
    render(): JSX.Element;
}