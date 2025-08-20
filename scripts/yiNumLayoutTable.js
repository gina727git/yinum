"use strict";
class LayoutService {
    constructor() {
    }


    cleanTable(divId) {
        const resultDiv = document.getElementById(divId)
        
        if (resultDiv) {
        

          let selector = `#${divId} [id$="Table"] tbody`;
          const tbodys = document.querySelectorAll(selector);

          tbodys.forEach(tbody => {
              tbody.innerHTML = '';
          });

          selector = `#${divId} [id$="HeaderDiv"]`;
          document.querySelector(selector).innerHTML="";
        }
      
    }


    genWholeTable(type,data, tableIdPrefix, divId, divTitle) {

      const divTitleElement = document.createElement("h5")
      divTitleElement.textContent = divTitle + ": " + data.input + "    "
    

        data.resultYiTypes.forEach(resultYiType => {
          // 創建一個新的元素來顯示 yiType
          var yiTypeElement = document.createElement('span');
          yiTypeElement.textContent = resultYiType.yiType + "格";
          divTitleElement.appendChild(yiTypeElement);

          // 添加空白文本
          var spaceText = document.createTextNode('   ');
          divTitleElement.appendChild(spaceText);

          // 創建新的鏈接元素
          var newLink = document.createElement('a');
          newLink.href = resultYiType.yiUrl; // 使用當前迴圈的 yiUrl
          newLink.textContent = '解說';
          newLink.target = '_blank';
          divTitleElement.appendChild(newLink);

          // 添加換行或其他分隔符（可選）
          //var lineBreak = document.createElement('br');
          //divTitleElement.appendChild(lineBreak);
        });
     
    
      document.getElementById(tableIdPrefix + "HeaderDiv").appendChild(divTitleElement);
    
      let inputAry = data.convertInput.split("");
      const inputRow = document.createElement('tr');
  
      inputAry.forEach((item,index) => {
          const cell = document.createElement('th');
          cell.textContent = item;
          //cell.colSpan = data['tmpInputChar2NumDigitAry'][index];
          inputRow.appendChild(cell);
      });
  

      let selector = `#${tableIdPrefix}InputTable tbody`;
      document.querySelector(selector).appendChild(inputRow);
  
  
      if (JSON.stringify(inputAry) != JSON.stringify(data['tmpInputChar2NumAry'])) {
          const inputChar2NumRow = document.createElement('tr');
  
          data['tmpInputChar2NumAry'].forEach((item,index) => {
              const cell = document.createElement('th');
              cell.textContent = item;
              inputChar2NumRow.appendChild(cell);
          });
  
          let selector = `#${tableIdPrefix}InputTable tbody`;
          document.querySelector(selector).appendChild(inputChar2NumRow);
      } 
  
  
  
      let tempAry = data.tmpInputNumStr.split("");
      if (JSON.stringify(data['tmpInputChar2NumAry']) != JSON.stringify(tempAry)) {
          const inputTempRow = document.createElement('tr');
          tempAry.forEach((item,index) => {
              const cell = document.createElement('td');
              cell.textContent = item;
              inputTempRow.appendChild(cell);
          });
  
          let selector = `#${tableIdPrefix}TempTable tbody`;
          document.querySelector(selector).appendChild(inputTempRow);
      } 
  
      const inputTempRow = document.createElement('tr');
  
  
      
      const yiNumRow = document.createElement('tr');
  
      data.tmpOutputAry.forEach(item => {
          const cell = document.createElement('td');
          cell.textContent = item.yiNum;
          yiNumRow.appendChild(cell);
      });
      
      selector = `#${tableIdPrefix}OutputTable tbody`;
      document.querySelector(selector).appendChild(yiNumRow);
  
      // 创建第二行
      const secondRow = document.createElement('tr');
  
      data.tmpOutputAry.forEach(item => {
          const cell = document.createElement('th');
          cell.textContent = item.yiType;
          secondRow.appendChild(cell);
      });
  
      selector = `#${tableIdPrefix}OutputTable tbody`;
      document.querySelector(selector).appendChild(secondRow);


      const hiddenRow = this.createHiddenRowFromSegments(data.hiddenOutputArys);
      selector = `#${tableIdPrefix}HiddenOutputTable tbody`;
      document.querySelector(selector).innerHTML = hiddenRow;
  
  
      const br = document.createElement('br');
      document.querySelector(selector).appendChild(br);
  
  }


    createTable(result, tableId, divId, divTitle) {


    // Create table element
    const table = document.createElement("table")
    table.id = tableId;
    table.className = "table"
  
    // Create table content
    const tbody = document.createElement("tbody")
    const keys = ["yiNum", "yiType","yiHiddenType"]
    const keysHeader = ["數組", "磁場","隱藏"]
  
    keys.forEach((key, keyIndex) => {

      if (key === "yiHiddenType" 
        && result.hiddenOutputAry.some(obj => obj.yiType && obj.yiType.trim() !== '')
        )
      {



      const row = document.createElement("tr")
      const tdKey = document.createElement("td")
      tdKey.textContent = keysHeader[keyIndex]
      row.appendChild(tdKey)
  
      result.resultAry.forEach((item, index) => {
        const cell = document.createElement("td")
        if (keyIndex === 1) {
          cell.classList.add("text-success")
        } else if (keyIndex === 2) {
          cell.classList.add("text-secondary")
        }
  
        if (key === "yiType") {
          if (item["isYiNumExtend"]) {
            cell.textContent = item["yiTypeObj"].yiTypeExtend
          } else {
            cell.textContent = item[key]
          }

          
        }else if (key === "yiHiddenType") {
          if(result.hiddenOutputAry[index].yiType!=undefined){
            cell.textContent  += result.hiddenOutputAry[index].yiNum +" " + result.hiddenOutputAry[index].yiType 
          }
        } else {
          cell.textContent = item[key]
        }


       

        row.appendChild(cell)
      })
      tbody.appendChild(row)


      }
    })
    table.appendChild(tbody)
  
    // Get div element
    const resultDiv = document.getElementById(divId)
  
    // Clear the content of div element
    if (resultDiv) {
      resultDiv.innerHTML = ""
    }
  
    const divTitleElement = document.createElement("h5")
    divTitleElement.textContent = divTitle + ": " + result.input + "    "
  
    if(divId==="socialIdDiv"){
      const yiTypeElement = document.createElement("span")
      yiTypeElement.className = "badge bg-danger"
      yiTypeElement.textContent = result.resultYiType.yiType + "格"
      divTitleElement.appendChild(yiTypeElement)

      var spaceText = document.createTextNode('   ');
      divTitleElement.appendChild(spaceText);
      var newLink = document.createElement('a');
      newLink.href = result.resultYiType.yiUrl;
      newLink.textContent = '解說';
      newLink.target = '_blank';
      divTitleElement.appendChild(newLink);
    }
  
    if (resultDiv) {
      resultDiv.appendChild(divTitleElement)
      resultDiv.appendChild(table)
    }
  }




/**
 * 根據分段結果，生成兩列 HTML <tr>。
 * 第一列用於顯示分組結果，第二列則補齊單元格以保持表格結構對齊。
 *
 * @param {Array<Array<string|number>>} segments - 從 findSegments 得到的陣列，格式為 [yiNumInfo, count] 或 []。
 * @returns {string} - 包含兩列 <tr> 和 <th> 元素的 HTML 字串。
 */
createHiddenRowFromSegments(segments) {
  // 如果輸入無效，返回兩列空行以維持表格結構
  if (!Array.isArray(segments) || segments.length === 0 || segments.every(item => item.length === 0)) {
    return "";
  }

  let mainRowContent = '';
  let spacerRowContent = '';

  segments.forEach(item => {
    // 檢查陣列是否為空
    if (item.length === 0) {
      // 若為空陣列 `[]`，代表一個單元格
      mainRowContent += '<th></th>';
      spacerRowContent += `<th style="padding: 0; height: 0;"></th>`;
    } else {
      // 若為 [yiNumInfo, count] 格式
      const [yiNumInfo, count] = item;
      const colSpan = count + 1;

      // 假設 yiNumInfo 是一個包含 yiType 屬性的物件或字串
      let yiTypeContent = '';
      if (typeof yiNumInfo === 'object' && yiNumInfo.hasOwnProperty('yiType')) {
        yiTypeContent = yiNumInfo.yiType;
      } else {
        yiTypeContent = yiNumInfo;
      }

      // 產生主行的帶有 colspan 的 <th>
      mainRowContent += `<th colspan=${colSpan}>${yiTypeContent}</th>`;

      // 產生第二行用於對齊的 <th>
      for (let i = 0; i < colSpan; i++) {
        spacerRowContent += `<th style="padding: 0; height: 0;"></th>`;
      }
    }
  });

  return `<tr>${mainRowContent}</tr><tr>${spacerRowContent}</tr>`;
}
}
