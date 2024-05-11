import React from "react";
import { Table } from "@egovernments/digit-ui-react-components";

const ComplaintTable = ({ t, columns, data, getCellProps, onNextPage, onPrevPage, currentPage, totalRecords, pageSizeLimit, onPageSizeChange }) => (
  
 
  <Table
    t={t}
    data={data}
    columns={columns}
    getCellProps={getCellProps}
    onNextPage={onNextPage}
    onPrevPage={onPrevPage}
    currentPage={currentPage}
    totalRecords={totalRecords}
    onPageSizeChange={onPageSizeChange}
    pageSizeLimit={pageSizeLimit}
  />
  
);
console.log("jhi", ComplaintTable)
export default ComplaintTable;
