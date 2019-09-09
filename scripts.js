





function buttonAddAmount(amtAdd) {
  var currHealth = document.getElementsByTagName("progress").item(0).value + amtAdd;
  var maxHealth = document.getElementsByTagName("progress").item(0).max;
  if (currHealth > maxHealth) {
    currHealth = maxHealth;
  }
  document.getElementsByTagName("progress").item(0).value = currHealth;
  document.getElementById("currentHealth").innerText = (currHealth) + "  /  " + (maxHealth);
  if (currHealth <= (maxHealth / 2))
 {
    document.getElementById("progress").color = "blue";
  }
  if (currHealth > (maxHealth / 2) );
 {
    document.getElementById("p2").style.color = B80F0A;
  }









  function MundaneButton() {
    PopulateItems("Mund")
  }
  function NatureButton() {
    PopulateItems("Natur")
  }
  function ToolsButton() {
    PopulateItems("Tool")
  }
  function ShadyButton() {
    PopulateItems("Shad")
  }


  function PopulateItems(searchParam) {

    const app = document.getElementById('home')
    const container = document.createElement('div')

    container.setAttribute('class', 'container')


    app.appendChild(container)





    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=9999&maxRecords=9999&view=Grid%20view', true)
    //request.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff?pagesize=9999&maxRecords=9999&view=Grid%20view', true)
    request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
        var elmtTable = document.getElementsByTagName("tbody").item(0);
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x = rowCount - 1; x > 0; x--) {
          elmtTable.removeChild(tableRows[x]);
        }
        data.records.forEach(varEntry => {
          if (varEntry.fields.AdditionalTags.includes(searchParam) == true) {
            tabBody = document.getElementsByTagName("tbody").item(0);
            row = document.createElement("tr");
            cell1 = document.createElement("td");
            cell2 = document.createElement("td");
            cell3 = document.createElement("td");
            textnode1 = document.createTextNode(varEntry.fields.Item);
            textnode2 = document.createTextNode(varEntry.fields.Description);
            textnode3 = document.createTextNode(varEntry.fields.Cost);
            cell1.appendChild(textnode1);
            cell2.appendChild(textnode2);
            cell3.appendChild(textnode3);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            tabBody.appendChild(row);
          }
        })
        document.getElementById("home").style.height = "";
      } else {
        console.log('Unexpected Error!');
      }
    }
    request.send()
  }




  function PopulateStats() {
    // var request = new XMLHttpRequest()
    //request.open('GET', 'https://api.airtable.com/v0/appo1vlAOg4VZKUqs/Ichaeff?maxRecords=3&view=Grid%20view', true)
    //request.setRequestHeader('Authorization' , 'Bearer keyPNiqLig0a2oKbv')
    // request.onload = function() {

    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=9999&maxRecords=9999&view=Grid%20view', true)
    //request.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff?pagesize=9999&maxRecords=9999&view=Grid%20view', true)
    request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
    Request.send()
    request.onload = function () {

      alert("aight");
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      alert(request.status);
      if (request.status >= 200 && request.status < 400) {
        alert("aight");
        //  var elmtTable = document.getElementsByTagName("tbody").item(0);
        //  var tableRows = elmtTable.getElementsByTagName('tr');
        // var rowCount = tableRows.length;

        // for (var x=rowCount-1; x>0; x--) {
        //   elmtTable.removeChild(tableRows[x]);
        // }
        data.records.forEach(varEntry => {
          //   if (varEntry.fields.AdditionalTags.includes(searchParam) == true) {   

          alert(varEntry.fields.Name);
          //  tabBody=document.getElementsByTagName("tbody").item(0);
          //  row=document.createElement("tr");
          //  cell1 = document.createElement("td");
          //  cell2 = document.createElement("td");
          //  cell3 = document.createElement("td");
          //  textnode1=document.createTextNode(varEntry.fields.Item);
          //  textnode2=document.createTextNode(varEntry.fields.Description);
          //  textnode3=document.createTextNode(varEntry.fields.Cost);
          //  cell1.appendChild(textnode1);
          //  cell2.appendChild(textnode2);
          //  cell3.appendChild(textnode3);
          //  row.appendChild(cell1);
          //  row.appendChild(cell2);
          //  row.appendChild(cell3);
          //  tabBody.appendChild(row);
        }

          //document.getElementById("home").style.height = "";
          // } else {
          //  console.log('Unexpected Error!');
          // }
        )
      }
      request.send();

    }

  }


