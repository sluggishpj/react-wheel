import { Button, Card, message, Row } from 'antd';
import React, { useState } from 'react';
import { uploadXlsxFile } from '@/utils/excel';
import type { ExcelObj } from '@/utils/excel';

function ExcelTools() {
  const [uploading, setUploading] = useState(false);
  const [uploadingByFirstRow, setUploadingByFirstRow] = useState(false);

  async function handleUploadExcel() {
    const res = await uploadXlsxFile();
    setUploading(true);
    // 进行合并操作
    await mergeAndExportExcel(res as ExcelObj[]);
    setUploading(false);
  }

  async function mergeAndExportExcel(arr: ExcelObj[]) {
    const XLSX = await import('xlsx');
    if (arr.length === 0) {
      message.info('请先上传文件~');
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

  /** 上传并合并Excel（第一行作为标题列一一对应） */
  async function mergeAndExportExcelByFirstRow(arr: ExcelObj[]) {
    const XLSX = await import('xlsx');
    if (arr.length === 0) {
      message.info('请先上传文件~');
      return;
    }

    let res: Record<string, any>[] = [];
    const header = [
      ...new Set(arr.reduce((prev, cur) => prev.concat(cur.data[0]), [] as string[])),
    ];
    header.unshift('filename-sheetname');

    for (const sheet of arr) {
      const { filename, sheetname } = sheet;
      let { data } = sheet;
      const sheetDataObjectArr: Record<string, any>[] = [];

      const sheetHeader = data[0];
      // 移除多余表头
      data = data.slice(1);

      // 转成JSON对象
      data.forEach((row) => {
        const sheetDataObject: Record<string, any> = {};
        sheetHeader.forEach((key: string, index: number) => {
          sheetDataObject[key] = row[index];
        });
        sheetDataObject['filename-sheetname'] = `${filename}-${sheetname}`;
        sheetDataObjectArr.push(sheetDataObject);
      });

      res = res.concat(sheetDataObjectArr);
    }

    const filename = '总表';
    const worksheet = XLSX.utils.json_to_sheet(res, { header });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  }

  async function handleUploadExcelByFirstRow() {
    const res = await uploadXlsxFile();
    setUploadingByFirstRow(true);
    // 进行合并操作
    await mergeAndExportExcelByFirstRow(res as ExcelObj[]);
    setUploadingByFirstRow(false);
  }

  return (
    <Card title="Excel">
      <Row style={{ marginBottom: 16 }}>
        <Button onClick={handleUploadExcel} loading={uploading}>
          上传并合并Excel（列号一一对应）
        </Button>
      </Row>

      <Row style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleUploadExcelByFirstRow} loading={uploadingByFirstRow}>
          上传并合并Excel（第一行作为标题列，各标题列一一对应）
        </Button>
      </Row>
    </Card>
  );
}

export default ExcelTools;
