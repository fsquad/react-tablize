import * as React from 'react';
import { DocDir, OneOrMore, SizeCallback } from '../types';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableColumn } from './TableColumn';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
declare type TableChildren_RowsSyntax = [React.SubComp<TableHead>, React.SubComp<TableBody>];
declare type TableChildren_ColumnsSyntax = OneOrMore<React.SubComp<TableColumn>>;
export declare const RowAutoSize: () => number;
export declare type RowKeyCallback = (index: number) => React.Key;
export declare class TableViewProps {
    isVirtual?: boolean;
    rowCount: number;
    rowKey?: RowKeyCallback;
    children?: TableChildren_RowsSyntax | TableChildren_ColumnsSyntax;
    dir?: DocDir;
    className?: string;
    style?: React.CSSProperties;
    rowHeight?: number | SizeCallback;
    emptyMessage?: string;
    customScrollbars?: boolean;
    keyScroll?: boolean;
    overscanCount?: number;
}
export declare class TableView extends React.PureComponent<TableViewProps> {
    static readonly defaultHeight = "35vh";
    static readonly defaultHeadHeight = "40px";
    static Head: typeof TableHead;
    static Body: typeof TableBody;
    static Row: typeof TableRow;
    static Cell: typeof TableCell;
    static Column: typeof TableColumn;
    static defaultProps: TableViewProps;
    private tableElement;
    refresh(): void;
    render(): JSX.Element;
    private renderTableHead;
    private renderTableBody;
    private renderTableRows;
    private renderBodyRow;
    private renderCell;
    private renderItemsPlaceHolder;
    private getTheme;
    private getListComponent;
    private getRowKey;
    private getRowHeight;
}
export {};