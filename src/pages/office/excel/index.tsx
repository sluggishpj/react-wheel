import { Button, message } from 'antd';
import React, { useState } from 'react';
import { uploadXlsxFile } from '@/utils/excel';
import type { ExcelObj } from '@/utils/excel';

function ExcelTools() {
  const [uploading, setUploading] = useState(false);

  async function handleUploadExcel() {
    const res = await uploadXlsxFile();
    setUploading(true);
    // 进行合并操作
    mergeAndExportExcel(res as ExcelObj[]);
    setUploading(false);
  }

  async function mergeAndExportExcel(arr: ExcelObj[]) {
    const XLSX = await import('xlsx');
    if (arr.length === 0) {
      message.info('请上传文件~');
      return;
    }
    const headerRowCount: number = 1;
    let res: [][] = [];
    const header = arr[0].data[0];
    header.unshift('filename-sheetname');
    res.push(header);
    for (const item of arr) {
      const { filename, sheetname } = item;
      let { data } = item;
      // 移除多余表头
      data = data.slice(headerRowCount);
      // 新增来源列
      data.forEach((row) => {
        row.unshift(`${filename}-${sheetname}`);
      });
      res = res.concat(data);
    }

    const filename = '总表';
    const worksheet = XLSX.utils.aoa_to_sheet(res, header);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  }

  return (
    <>
      <h2>Excel</h2>
      <Button onClick={handleUploadExcel} loading={uploading}>
        上传并合并Excel
      </Button>
    </>
  );
}

export default ExcelTools;
