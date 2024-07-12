"use strict";
class LayoutService {
    constructor() {
    }


    cleanTable(divId) {
        const resultDiv = document.getElementById(divId)
        
        if (resultDiv) {
          resultDiv.innerHTML = ""
        }
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
            cell.textContent  += result.hiddenOutputAry[index].yiNum  + result.hiddenOutputAry[index].yiType 
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
