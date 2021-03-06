import * as React from 'react';
export declare type CellContent = React.ReactNode;
export interface TableCellProps extends React.DivProps {
    children?: CellContent;
    visible?: boolean;
}
export declare class TableCell extends React.PureComponent<TableCellProps> {
    static defaultProps: TableCellProps;
    static isTableCell(cell: unknown): cell is React.ReactElement<TableCellProps>;
    static getCellProps(cell: unknown): TableCellProps;
    static getCellContent(cell: unknown): CellContent;
    render(): JSX.Element;
}
export interface CellRenderArgs {
    rowIndex: number;
    columnIndex: number;
}
export declare type CellRender = (args: CellRenderArgs) => TableCell | CellContent;
