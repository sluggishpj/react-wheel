export interface ExcelObj {
  filename: string;
  sheetname: string;
  data: any[];
}

// 获取文件 binaryString
async function fileToUint8Array(file: File) {
  if (!file) return Promise.reject();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      resolve(new Uint8Array(e.target.result));
    };
    reader.onerror = function (ex) {
      console.error(ex);
      reject(ex);
    };
  });
}

// 上传xlsx文件并获取其内容
export const uploadXlsxFile = async function (
  accept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
) {
  const XLSX = await import('xlsx');
  return new Promise((resolve) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = accept;
    inputElement.multiple = true;
    inputElement.onchange = async () => {
      if (inputElement.value.length === 0) {
        resolve([]);
      } else {
        const { files } = inputElement;
        const result: ExcelObj[] = [];

        for (let i = 0; i < files!.length; i++) {
          const file = files![i];
          const { name: filename } = file;

          const data = await fileToUint8Array(file);
          const workbook = XLSX.read(data, {
            type: 'array',
          });

          workbook.SheetNames.forEach(function (sheetName) {
            const sheet = workbook.Sheets[sheetName];
            // 返回二维数组
            const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            result.push({ filename, sheetname: sheetName, data: sheetData });
          });
        }

        resolve(result);
      }
    };

    inputElement.click();
  });
};

/**
 * 导出 xlsx 文件
 * @param {Array} rows 数据
 * @param {Array} fields 表头
 * @param {String} filename 文件名
 */
// 导出方式1
// const fields = [
//   { label: '姓名', value: 'name' },
//   { label: '性别', value: 'gender' }
// ]
// const data = [
//   { name: 'xjj', gender: '男' },
//   { name: 'xkl', gender: '男' }
// ]

// 导出方式2
// const fields = ['姓名', '性别']
// const data = [
//   { 姓名: 'xjj', 性别: '男' },
//   { 姓名: 'xkl', 性别: '男' }
// ]
export const exportTableToXlsx = async (
  rows = [],
  fields = [],
  filename = 'downloadExcel',
  multiHeader = false,
) => {
  const XLSX = await import('xlsx');
  let worksheet;
  if (typeof fields[0] !== 'object') {
    // 说明是导出方式2
    worksheet = XLSX.utils.json_to_sheet(rows, { header: fields });
  } else {
    // 导出方式1
    const dataArr: string[][] = [];
    for (let i = 0, len = rows.length; i <= len; i++) {
      dataArr[i] = [];
    }
    fields.forEach((item: { label: string; value: any }) => {
      dataArr[0].push(item.label);
      rows.forEach((row, rowIdx) => {
        dataArr[rowIdx + 1].push(row[item.value]);
      });
    });

    // 多级表头 ==
    if (Array.isArray(multiHeader)) {
      if (Array.isArray(multiHeader[0])) {
        dataArr.unshift(...multiHeader);
      } else {
        dataArr.unshift(multiHeader);
      }
    }

    worksheet = XLSX.utils.aoa_to_sheet(dataArr);
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet);
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};
