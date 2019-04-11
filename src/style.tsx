import styled from '@emotion/styled';

//
// constants
//

const scrollbarWidth = '17px';
const tableBorder = '1px solid #ddd';

//
// table
//

export const StyledTableView = styled.div`
    background-color: #fff;
    width: 100%;
    overflow-y: hidden;
`;

//
// head
//

export const StyledTableHead = styled.div`
    display: flex;
    flex-flow: column;

    overflow-y: hidden;

    font-weight: bold;
    vertical-align: middle;
`;

export const StyledTableHeadRow = styled.div`
    flex: 1;
    display: flex;
    justify-content: stretch;

    padding-right: ${scrollbarWidth};

    border-bottom: ${tableBorder};
`;

export const StyledTableHeadCell = styled.div`
    flex: 1;
    display: flex;
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: flex-end;
    vertical-align: bottom;
`;

//
// body
//

export const StyledTableBody = styled.div`
    display: flex;
    flex-flow: column;

    vertical-align: middle;
`;

export const StyledTableBodyRow = styled.div`
    flex: 1;
    display: flex;
    justify-content: stretch;

    border-top: ${tableBorder};

    &:first-of-type {
        border-top: none;
    }
`;

export const StyledTableBodyCell = styled.div`
    flex: 1;
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
`;