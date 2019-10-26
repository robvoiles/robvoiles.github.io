
var tooltips = document.querySelectorAll('.tooltiptext span');









function filterItems(searchParam) {
  document.getElementById("forms").innerHTML = "";
  stateModule.setOffSet("");
  var intValue = 0
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=999&maxRecords=999&view=Grid%20view', true)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {
var currIteration = 0
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {

      data.records.forEach(varEntry => {

        varSP = varEntry.fields.Category.toLowerCase()
        if (varSP.includes(searchParam) == true) {

        if (currIteration = 1) {
          document.getElementById("forms").innerHTML = document.getElementById("forms").innerHTML + "<div class=\"row\">"
        }
        currIteration = currIteration + 1
        var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
        var a2 = varEntry.fields.Item
        var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
        var a4 = varEntry.id
        var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
        var a6 = varEntry.id
        var a7 = "\" id=\"heading-collapsed\"><p>"
        var a8 = varEntry.fields.Category
        var a9 = "</p><p>Weight: "
        var a10 = varEntry.fields.Weight
        var a11 = "lb</p><p>Cost: "
        var a12 = varEntry.fields.Cost
        var a13 = "g</p><br></a><a class=\"buyButton\">BUY</a></h5><div id=\"collapse-collapsed33"
        var a14 = varEntry.id
        var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
        var a16 = varEntry.fields.Description
        var a17 = "</div></div></div>"

        var g;
          g = document.createElement('div');
          g.id = i;
          document.getElementById("forms").appendChild(g);
          var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13+ a14 + a15+ a16 + a17;
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

        if (currIteration = 5) {
          currIteration = 0
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
        }
      }

      })

      if (data.offset) {
        stateModule.setOffSet(data.offset);
      }

      while (stateModule.getOffSet()) {

        var osRef = stateModule.getOffSet()
        stateModule.setOffSet("");

        var request2 = new XMLHttpRequest()
        request2.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=9999&maxRecords=30&view=Grid%20view&offset=' + osRef, false)
        request2.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
        request2.onload = function () {
          var data2 = JSON.parse(this.response)

          if (request2.status >= 200 && request2.status < 400) {

            if (data2.offset) {
              stateModule.setOffSet(data2.offset);
            }

            data2.records.forEach(varEntry => {
              varSP = varEntry.fields.Category.toLowerCase()
              if (varSP.includes(searchParam) == true) {
              if (currIteration = 1) {
                document.getElementById("forms").innerHTML = document.getElementById("forms").innerHTML + "<div class=\"row\">"
              }
              
              currIteration = currIteration + 1
      
              var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
              var a2 = varEntry.fields.Item
              var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
              var a4 = varEntry.id
              var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
              var a6 = varEntry.id
              var a7 = "\" id=\"heading-collapsed\"><p>"
              var a8 = varEntry.fields.Category
              var a9 = "</p><p>Weight: "
              var a10 = varEntry.fields.Weight
              var a11 = "lb</p><p>Cost: "
              var a12 = varEntry.fields.Cost
              var a13 = "g</p><br></a><a class=\"buyButton\">BUY</a></h5><div id=\"collapse-collapsed33"
              var a14 = varEntry.id
              var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
              var a16 = varEntry.fields.Description
              var a17 = "</div></div></div>"
      
              var g;
                g = document.createElement('div');
                g.id = i;
                document.getElementById("forms").appendChild(g);
                var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13+ a14 + a15+ a16 + a17;
                document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

              if (currIteration = 5) {
                currIteration = 0
                document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
              }
            }
            })

          }
        }
        request2.send(null)
      }

    }

  }
  request.send()

}


function testItems() {

  stateModule.setOffSet("");
  var intValue = 0
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=999&maxRecords=999&view=Grid%20view', true)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {
var currIteration = 0
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {

      data.records.forEach(varEntry => {

        if (currIteration = 1) {
          document.getElementById("forms").innerHTML = document.getElementById("forms").innerHTML + "<div class=\"row\">"
        }
        
        currIteration = currIteration + 1
        var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
        var a2 = varEntry.fields.Item
        var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
        var a4 = varEntry.id
        var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
        var a6 = varEntry.id
        var a7 = "\" id=\"heading-collapsed\"><p>"
        var a8 = varEntry.fields.Category
        var a9 = "</p><p>Weight: "
        var a10 = varEntry.fields.Weight
        var a11 = "lb</p><p>Cost: "
        var a12 = varEntry.fields.Cost
        var a13 = "g</p><br></a><a class=\"buyButton\">BUY</a></h5><div id=\"collapse-collapsed33"
        var a14 = varEntry.id
        var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
        var a16 = varEntry.fields.Description
        var a17 = "</div></div></div>"

        var g;
          g = document.createElement('div');
          g.id = i;
          document.getElementById("forms").appendChild(g);
          var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13+ a14 + a15+ a16 + a17;
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

        if (currIteration = 5) {
          currIteration = 0
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
        }

      })

      if (data.offset) {
        stateModule.setOffSet(data.offset);
      }

      while (stateModule.getOffSet()) {

        var osRef = stateModule.getOffSet()
        stateModule.setOffSet("");

        var request2 = new XMLHttpRequest()
        request2.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=9999&maxRecords=30&view=Grid%20view&offset=' + osRef, false)
        request2.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
        request2.onload = function () {
          var data2 = JSON.parse(this.response)

          if (request2.status >= 200 && request2.status < 400) {

            if (data2.offset) {
              stateModule.setOffSet(data2.offset);
            }

            data2.records.forEach(varEntry => {
 
              if (currIteration = 1) {
                document.getElementById("forms").innerHTML = document.getElementById("forms").innerHTML + "<div class=\"row\">"
              }
              
              currIteration = currIteration + 1
      
              var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
              var a2 = varEntry.fields.Item
              var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
              var a4 = varEntry.id
              var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
              var a6 = varEntry.id
              var a7 = "\" id=\"heading-collapsed\"><p>"
              var a8 = varEntry.fields.Category
              var a9 = "</p><p>Weight: "
              var a10 = varEntry.fields.Weight
              var a11 = "lb</p><p>Cost: "
              var a12 = varEntry.fields.Cost
              var a13 = "g</p><br></a><a class=\"buyButton\">BUY</a></h5><div id=\"collapse-collapsed33"
              var a14 = varEntry.id
              var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
              var a16 = varEntry.fields.Description
              var a17 = "</div></div></div>"
      
              var g;
                g = document.createElement('div');
                g.id = i;
                document.getElementById("forms").appendChild(g);
                var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13+ a14 + a15+ a16 + a17;
                document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

              if (currIteration = 5) {
                currIteration = 0
                document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
              }

            })

          }
        }
        request2.send(null)
      }

    }

  }
  request.send()

}









/* 
<div class="row">
<div class="column">
    <div class="card">
        <h3>Card 1</h3>
        <p>Some text</p>
        <p>Some text</p>
    </div>
</div>

<div class="column">
    <div class="card">
        <h3>Card 2</h3>
        <p>Some text</p>
        <p>Some text</p>
    </div>
</div>

<div class="column">
    <div class="card">
        <h3>Card 3</h3>
        <p>Some text</p>
        <p>Some text</p>
    </div>
</div>

<div class="column">
    <div class="card">
        <h3>Card 4</h3>
        <p>Some text</p>
        <p>Some text</p>
    </div>
</div>

</div> */






function GetInv() {
  stateModule.setOffSet("");
  var intValue = 0
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=999&maxRecords=999&view=Grid%20view', true)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {

    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {

      data.records.forEach(varEntry => {
        intValue += 1
        console.log(varEntry.fields.Item)
        console.log(intValue)

      })

      if (data.offset) {
        stateModule.setOffSet(data.offset);
      }



      while (stateModule.getOffSet()) {

        var osRef = stateModule.getOffSet()
        stateModule.setOffSet("");


        var request2 = new XMLHttpRequest()
        request2.open('GET', 'https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/items?pagesize=9999&maxRecords=30&view=Grid%20view&offset=' + osRef, false)
        request2.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
        request2.onload = function () {
          var data2 = JSON.parse(this.response)

          if (request2.status >= 200 && request2.status < 400) {



            if (data2.offset) {
              stateModule.setOffSet(data2.offset);
            }



            data2.records.forEach(varEntry => {
              intValue += 1
              console.log(varEntry.fields.Item)
              console.log(intValue)

            })




          }
        }
        request2.send(null)


      }


    }


  }
  request.send()
}












function buttonAddAmount(amtAdd) {
  var currHealth = document.getElementsByTagName("progress").item(0).value + amtAdd;
  var maxHealth = document.getElementsByTagName("progress").item(0).max;

  if (currHealth > maxHealth) {
    currHealth = maxHealth;
  }
  document.getElementsByTagName("progress").item(0).value = currHealth;
  document.getElementById("currentHealth").innerText = (currHealth) + "  /  " + (maxHealth);

  if (currHealth <= (maxHealth / 2)) {
    document.getElementById("currentHealth").style.color = "#f44";

  }
  if (currHealth > (maxHealth / 2)) {
    document.getElementById("currentHealth").style.color = "white";

  }
  var url = "https://api.airtable.com/v0/appo1vlAOg4VZKUqs/Ichaeff";
  var json = "{\"records\": [{\"id\": \"recnAJN2K58wWMeSU\",\"fields\": {\"CharHealthCurrent\": \"" + currHealth + "\"}}]}";
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  xhr.setRequestHeader('Content-Type', 'application/json')

  xhr.onload = function () {
    var Name = JSON.parse(xhr.responseText);
    console.log(xhr.status);
  }
  xhr.send(json);



}




function equip() {

  var itemID = event.srcElement.id.replace("equip", "")
  console.log(itemID)


  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff/' + itemID, true)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {

    stateModule.setArmorAC(0);
    var armorAC = 0;
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {

      document.getElementById("changeThisMainHandText").innerHTML = "<br>";
      document.getElementById("changeThisMainHandDamage").innerHTML = "";
      document.getElementById("changeThisoffHandText").innerHTML = "";
      document.getElementById("changeThisoffHandDamage").innerHTML = "";
      document.getElementById("changeThisMainArmorText").innerHTML = "<br>";
      document.getElementById("changeThisMainArmorAC").innerHTML = "";
      document.getElementById("changeThisShieldText").innerHTML = "";
      document.getElementById("changeThisShieldAC").innerHTML = "";
      document.getElementById("changeThisMiscArmorText").innerHTML = "";
      document.getElementById("changeThisMiscArmorAC").innerHTML = "";
      document.getElementById("inventoryPanel").innerHTML = "<br>";

      var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff";
      var json = "{\"records\": [{\"id\": \"" + itemID + "\",\"fields\": {\"InvEquipped\": \"" + data.fields.InvEquipable + "\"}}]}";
      var xhr = new XMLHttpRequest();
      xhr.open("PATCH", url, true);
      xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onload = function () {
        var Name = JSON.parse(xhr.responseText);
        GetStatistics()
      }
      xhr.send(json);

    }


  }

  request.send()

}


function UnEquip() {

  var itemID = event.srcElement.id.replace("unequip", "")
  console.log(itemID)
  document.getElementById("changeThisMainHandText").innerHTML = "<br>";
  document.getElementById("changeThisMainHandDamage").innerHTML = "";
  document.getElementById("changeThisoffHandText").innerHTML = "";
  document.getElementById("changeThisoffHandDamage").innerHTML = "";
  document.getElementById("changeThisMainArmorText").innerHTML = "<br>";
  document.getElementById("changeThisMainArmorAC").innerHTML = "";
  document.getElementById("changeThisShieldText").innerHTML = "";
  document.getElementById("changeThisShieldAC").innerHTML = "";
  document.getElementById("changeThisMiscArmorText").innerHTML = "";
  document.getElementById("changeThisMiscArmorAC").innerHTML = "";
  document.getElementById("inventoryPanel").innerHTML = "<br>";

  var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff";
  var json = "{\"records\": [{\"id\": \"" + itemID + "\",\"fields\": {\"InvEquipped\": \"\"}}]}";
  console.log(json);
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  xhr.setRequestHeader('Content-Type', 'application/json')

  xhr.onload = function () {
    var Name = JSON.parse(xhr.responseText);
    console.log(xhr.status);
    GetStatistics()
  }
  xhr.send(json);


}




function deleteButton() {
  var itemID = event.srcElement.id.replace("delete", "")
  var r = confirm("Are you sure you want to delete " + document.getElementById(event.srcElement.id).previousElementSibling.innerHTML + "?");

  if (r == true) {
    txt = "You pressed OK!";

  } else {
    txt = "You pressed Cancel!";

  }
  console.log(txt)







  document.getElementById("changeThisMainHandText").innerHTML = "<br>";
  document.getElementById("changeThisMainHandDamage").innerHTML = "";
  document.getElementById("changeThisoffHandText").innerHTML = "";
  document.getElementById("changeThisoffHandDamage").innerHTML = "";
  document.getElementById("changeThisMainArmorText").innerHTML = "<br>";
  document.getElementById("changeThisMainArmorAC").innerHTML = "";
  document.getElementById("changeThisShieldText").innerHTML = "";
  document.getElementById("changeThisShieldAC").innerHTML = "";
  document.getElementById("changeThisMiscArmorText").innerHTML = "";
  document.getElementById("changeThisMiscArmorAC").innerHTML = "";
  document.getElementById("inventoryPanel").innerHTML = "<br>";

  var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff/" + itemID;
  var json = "{\"records\": [{\"id\": \"" + itemID + "\",\"fields\": {\"InvEquipped\": \"\"}}]}";

  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  //xhr.setRequestHeader('Content-Type', 'application/json')

  xhr.onload = function () {
    var Name = JSON.parse(xhr.responseText);
    console.log(xhr.status);
    GetStatistics()
  }
  xhr.send(json);



}





function GetStatistics() {

  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff?maxRecords=999&view=Grid%20view', true)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {
    stateModule.setArmorAC(0);
    var armorAC = 0;
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.records.forEach(varEntry => {

        if (varEntry.fields.InvEquipped == "MainHand") {
          document.getElementById("changeThisMainHandText").text = varEntry.fields.InvItem;
          document.getElementById("changeThisMainHandDamage").text = varEntry.fields.InvDamage + " " + varEntry.fields.InvDamageType;

          if (varEntry.fields.InvEquipped != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Un-Equip"));
            li.setAttribute("id", "unequip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = UnEquip;
            document.getElementById("changeThisMainHandText").appendChild(li);
          }
        };

        if (varEntry.fields.InvEquipped == "OffHand") {
          document.getElementById("changeThisOffHandText").text = varEntry.fields.InvItem;
          document.getElementById("changeThisOffHandDamage").text = varEntry.fields.InvDamage + " " + varEntry.fields.InvDamageType;

          if (varEntry.fields.InvEquipped != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Un-Equip"));
            li.setAttribute("id", "unequip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = UnEquip;
            document.getElementById("changeThisOffHandText").appendChild(li);
          }

        };

        if (varEntry.fields.InvEquipped == "MainArmor") {
          document.getElementById("changeThisMainArmorText").text = varEntry.fields.InvItem;
          document.getElementById("changeThisMainArmorAC").text = "+" + varEntry.fields.InvPlusAC + " (+" + varEntry.fields.InvDexMax + " max) -- " + varEntry.fields.InvDisadvantage;
          document.getElementById("changeThisMainArmorAC").title = varEntry.fields.InvPlusAC
          stateModule.setDexMax(varEntry.fields.InvDexMax);
          armorAC += Number(varEntry.fields.InvPlusAC);

          if (varEntry.fields.InvEquipped != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Un-Equip"));
            li.setAttribute("id", "unequip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = UnEquip;
            document.getElementById("changeThisMainArmorText").appendChild(li);
          }

        };
        if (varEntry.fields.InvEquipped == "Shield") {
          document.getElementById("changeThisoffHandText").text = varEntry.fields.InvItem;
          document.getElementById("changeThisShieldText").text = varEntry.fields.InvItem;
          document.getElementById("changeThisShieldAC").text = "+" + varEntry.fields.InvPlusAC;
          document.getElementById("changeThisShieldAC").title = varEntry.fields.InvPlusAC;
          armorAC += Number(varEntry.fields.InvPlusAC);

          if (varEntry.fields.InvEquipped != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Un-Equip"));
            li.setAttribute("id", "unequip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = UnEquip;
            document.getElementById("changeThisoffHandText").appendChild(li);
          }

          if (varEntry.fields.InvEquipped != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Un-Equip"));
            li.setAttribute("id", "unequip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = UnEquip;
            document.getElementById("changeThisShieldText").appendChild(li);
          }


        };
        stateModule.setArmorAC(armorAC);


        var node = document.createElement("LI");
        if (Number(varEntry.fields.InvCharges) > 0) {
          node.appendChild(document.createTextNode(varEntry.fields.InvItem + " x" + varEntry.fields.InvCharges));
          document.getElementById("inventoryPanel").appendChild(node);
        }
        else
          if (varEntry.fields.InvEquipped != undefined) {
            node.appendChild(document.createTextNode(varEntry.fields.InvItem + " (Equipped)"));
            document.getElementById("inventoryPanel").appendChild(node);     // Append <li> to <ul> with id="myList"
          }
          else {

            node.appendChild(document.createTextNode(varEntry.fields.InvItem));
            document.getElementById("inventoryPanel").appendChild(node);     // Append <li> to <ul> with id="myList"
          }


        var li = document.createElement("a");
        li.appendChild(document.createTextNode("Delete"));
        li.setAttribute("id", "delete" + varEntry.id);
        li.setAttribute("class", "btnItems");
        li.onclick = deleteButton;
        document.getElementById("inventoryPanel").appendChild(li);



        if (varEntry.fields.InvEquipped != undefined) {
          var li = document.createElement("a");
          li.appendChild(document.createTextNode("Un-Equip"));
          li.setAttribute("id", "unequip" + varEntry.id);

          li.setAttribute("class", "btnItems");
          li.onclick = UnEquip;
          document.getElementById("inventoryPanel").appendChild(li);
        }
        else
          if (varEntry.fields.InvEquipable != undefined) {
            var li = document.createElement("a");
            li.appendChild(document.createTextNode("Equip"));
            li.setAttribute("id", "equip" + varEntry.id);
            li.setAttribute("class", "btnItems");
            li.onclick = equip;
            document.getElementById("inventoryPanel").appendChild(li);
          }


        var request2 = new XMLHttpRequest()
        request2.open('GET', 'https://api.airtable.com/v0/appo1vlAOg4VZKUqs/Ichaeff?maxRecords=3&view=Grid%20view', true)
        request2.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
        request2.onload = function () {
          var data = JSON.parse(this.response)
          if (request2.status >= 200 && request2.status < 400) {

            data.records.forEach(varEntry => {
              document.getElementById("changeThisDexterity").text = varEntry.fields.CharDexterity;
              document.getElementById("changeThisWisdom").text = varEntry.fields.CharWisdom;
              document.getElementById("changeThisConstitution").text = varEntry.fields.CharConstitution;
              document.getElementById("changeThisIntelligence").text = varEntry.fields.CharIntelligence;
              document.getElementById("changeThisStrength").text = varEntry.fields.CharStrength;

              document.getElementById("modifierStrength").text = "(" + GetModifierValue(varEntry.fields.CharStrength) + ")";
              document.getElementById("modifierWisdom").text = "(" + GetModifierValue(varEntry.fields.CharWisdom) + ")";
              document.getElementById("modifierDexterity").text = "(" + GetModifierValue(varEntry.fields.CharDexterity) + ")";
              document.getElementById("modifierConstitution").text = "(" + GetModifierValue(varEntry.fields.CharConstitution) + ")";
              document.getElementById("modifierIntelligence").text = "(" + GetModifierValue(varEntry.fields.CharIntelligence) + ")";

              var dexAdd = 0
              if (Number(stateModule.getDexMax()) < Number(GetModifierValue(varEntry.fields.CharDexterity))) {
                document.getElementById("changeThisAC").text = Number(varEntry.fields.CharAC) + Number(stateModule.getDexMax()) + Number(stateModule.getArmorAC());
              }
              else {
                document.getElementById("changeThisAC").text = Number(varEntry.fields.CharAC) + Number(GetModifierValue(varEntry.fields.CharDexterity)) + Number(stateModule.getArmorAC());
              }

              document.getElementsByTagName("progress").item(0).value = varEntry.fields.CharHealthCurrent;
              document.getElementsByTagName("progress").item(0).max = varEntry.fields.CharHealthMax;
              document.getElementById("currentHealth").innerText = (varEntry.fields.CharHealthCurrent) + "  /  " + (varEntry.fields.CharHealthMax);

            })

          } else {
          }
        }
        request2.send()

      })

    } else {

    }
  }
  request.send()
}







var stateModule = (function () {
  var armorAC;
  var pub = {}
  var dexMax;
  var offSet;

  pub.setArmorAC = function (newstate) {
    armorAC = newstate;
  };
  pub.getArmorAC = function () {
    return armorAC;
  }
  pub.setDexMax = function (newstate) {
    dexMax = newstate;
  };
  pub.getDexMax = function () {
    return dexMax;
  }
  pub.setOffSet = function (newstate) {
    offSet = newstate;
  };
  pub.getOffSet = function () {
    return offSet;
  }
  return pub; // expose externally
}());








function GetModifierValue(ability) {
  var modVal = 0

  if (ability == 1) { modVal = -5 };
  if (ability == 2 || ability == 3) { modVal = -4 };
  if (ability == 4 || ability == 5) { modVal = -3 };
  if (ability == 6 || ability == 7) { modVal = -2 };
  if (ability == 8 || ability == 9) { modVal = -1 };
  if (ability == 10 || ability == 11) { modVal = 0 };
  if (ability == 12 || ability == 13) { modVal = 1 };
  if (ability == 14 || ability == 15) { modVal = 2 };
  if (ability == 16 || ability == 17) { modVal = 3 };
  if (ability == 18 || ability == 19) { modVal = 4 };
  if (ability == 20 || ability == 21) { modVal = 5 };
  if (ability == 22 || ability == 23) { modVal = 6 };
  if (ability == 24 || ability == 25) { modVal = 7 };
  if (ability == 26 || ability == 27) { modVal = 8 };
  if (ability == 28 || ability == 29) { modVal = 9 };
  if (ability >= 30) { modVal = 10 };

  return modVal

}










