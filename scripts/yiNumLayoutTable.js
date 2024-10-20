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
    
      if(divId==="socialIdDiv"){

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
     
      }
    
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



      const hiddenRow = document.createElement('tr');
      let needToShowHiddenRow = false;
  
      data.hiddenOutputAry.forEach((item,index) => {

        if(index>0){
          const cell = document.createElement('th');
          cell.textContent = item.yiType;
          if(item.yiType!=null){
            needToShowHiddenRow = true;
          }
          hiddenRow.appendChild(cell);
        }
      });
  
      if(needToShowHiddenRow){
      selector = `#${tableIdPrefix}HiddenOutputTable tbody`;
      document.querySelector(selector).appendChild(hiddenRow);
      }
  
  
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

      if (key === "yiHiddenType" && result.hiddenOutputAry.some(obj => obj.yiType && obj.yiType.trim() !== '')
    || key!="yiHiddenType")
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
}
