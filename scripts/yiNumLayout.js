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
    const keys = ["yiNum", "yiType", "yiNumEnergyPercent"]
    const keysHeader = ["數組", "磁場", "能量"]
  
    keys.forEach((key, keyIndex) => {
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
        } else {
          cell.textContent = item[key]
        }
        row.appendChild(cell)
      })
      tbody.appendChild(row)
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
    }
  
    if (resultDiv) {
      resultDiv.appendChild(divTitleElement)
      resultDiv.appendChild(table)
    }
  }
}
