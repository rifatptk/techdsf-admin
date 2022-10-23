import React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

import Pagination from '@mui/material/Pagination';

const DataTable = ({ data: { rows, columns } }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          border: 0,
          color: '#131523',
          paddingInline: '40px',
          '& .MuiDataGrid-cell:hover': {
            color: '#0058FF',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: '#131523',
            fontSize: '12px',
            fontWeight: 600,
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },

          '& .MuiDataGrid-footerContainer': {
            border: 'none',
          },
          '& .MuiDataGrid-cellContent': {
            fontSize: 14,
          },

          '&>.MuiDataGrid-main': {
            '&>.MuiDataGrid-columnHeaders': {
              border: 'none',
            },

            '& div div div div >.MuiDataGrid-cell': {
              border: 'none',
            },
          },
        }}
        localeText={{
          footerRowSelected: CustomPagination,
        }}
        components={{
          Footer: CustomPagination,
        }}
        // checkboxSelection
      />
    </div>
  );
};

export default DataTable;

export function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      shape="rounded"
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
