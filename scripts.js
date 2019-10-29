
var tooltips = document.querySelectorAll('.tooltiptext span');










function addItem() {


  var x = prompt("How many?", "0");
  var num1 = parseInt(x);
  if (typeof num1 == 'number') {

    var itemID = event.srcElement.id.replace("buybutton", "")
    console.log(itemID)



    var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff/recFwylkZWcdDJdaZ";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false)
    xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
    xhr.onload = function () {
      var data = JSON.parse(this.response)
      if (xhr.status >= 200 && xhr.status < 400) {

        document.getElementById("goldCount").innerHTML = "Currently Held:<br>" + data.fields.InvCharges + "g";



        var url2 = "https://api.airtable.com/v0/appzNIPEkH4ZWAMiT/Items/" + itemID;
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', url2, false)
        xhr2.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
        xhr2.onload = function () {
          var data2 = JSON.parse(this.response)
          if (xhr2.status >= 200 && xhr2.status < 400) {

            var cost = Number((data2.fields.Cost)) * Number(num1);
            console.log(data.fields.InvCharges);
            console.log(cost);
            currGold = Number(data.fields.InvCharges)

            if (typeof currGold == 'number') {
              currGold = Number(0)
            }
            if (typeof cost == 'number') {
              cost = Number(0)
            }
            if (Number(currGold) >= Number(cost)) {


              alert(Number(currGold) - Number(cost));
              alert(currGold + "|" + cost)
              stateModule.setNewGold(Number(currGold) - Number(cost));

              var dtaJS = ""

              if (data2.fields.Item != undefined) { dtaJS = dtaJS + "\"InvItem\": \"" + data2.fields.Item + "\"," }
              if (data2.fields.Cost != undefined) { dtaJS = dtaJS + "\"InvCost\": \"" + data2.fields.Cost + "\"," }
              if (data2.fields.Weight != undefined) { dtaJS = dtaJS + "\"InvWeight\": \"" + data2.fields.Weight + "\"," }
              if (data2.fields.Description != undefined) { dtaJS = dtaJS + "\"InvDescription\": \"" + data2.fields.Description + "\"," }
              if (data2.fields.Category != undefined) { dtaJS = dtaJS + "\"InvCategory\": \"" + data2.fields.Category + "\"," }
              if (data2.fields.ContainerCapacity != undefined) { dtaJS = dtaJS + "\"InvContainerCapacity\": \"" + data2.fields.ContainerCapacity + "\"," }
              if (data2.fields.Damage != undefined) { dtaJS = dtaJS + "\"InvDamage\": \"" + data2.fields.Damage + "\"," }
              if (data2.fields.Properties != undefined) { dtaJS = dtaJS + "\"InvProperties\": \"" + data2.fields.Properties + "\"," }
              if (data2.fields.ArmorClass != undefined) { dtaJS = dtaJS + "\"InvArmorClass\": \"" + data2.fields.ArmorClass + "\"," }
              if (data2.fields.StatRequirements != undefined) { dtaJS = dtaJS + "\"InvStatRequirements\": \"" + data2.fields.StatRequirements + "\"," }
              if (data2.fields.Disadvantage != undefined) { dtaJS = dtaJS + "\"InvDisadvantage\": \"" + data2.fields.Disadvantage + "\"," }
              if (data2.fields.AdditionalTags != undefined) { dtaJS = dtaJS + "\"InvAdditionalTags\": \"" + data2.fields.AdditionalTags + "\"," }
              if (data2.fields.PlusStr != undefined) { dtaJS = dtaJS + "\"InvPlusStr\": \"" + data2.fields.PlusStr + "\"," }
              if (data2.fields.PlusCon != undefined) { dtaJS = dtaJS + "\"InvPlusCon\": \"" + data2.fields.PlusCon + "\"," }
              if (data2.fields.PlusDex != undefined) { dtaJS = dtaJS + "\"InvPlusDex\": \"" + data2.fields.PlusDex + "\"," }
              if (data2.fields.PlusWis != undefined) { dtaJS = dtaJS + "\"InvPlusWis\": \"" + data2.fields.PlusWis + "\"," }
              if (data2.fields.PlusInt != undefined) { dtaJS = dtaJS + "\"InvPlusInt\": \"" + data2.fields.PlusInt + "\"," }
              if (data2.fields.PlusAC != undefined) { dtaJS = dtaJS + "\"InvPlusAC\": \"" + data2.fields.PlusAC + "\"," }
              if (data2.fields.Resistance != undefined) { dtaJS = dtaJS + "\"InvResistance\": \"" + data2.fields.Resistance + "\"," }
              if (data2.fields.Advantage != undefined) { dtaJS = dtaJS + "\"InvAdvantage\": \"" + data2.fields.Advantage + "\"," }
              if (data2.fields.DexMax != undefined) { dtaJS = dtaJS + "\"InvDexMax\": \"" + data2.fields.DexMax + "\"," }
              if (data2.fields.DamageType != undefined) { dtaJS = dtaJS + "\"InvDamageType\": \"" + data2.fields.DamageType + "\"," }
              if (data2.fields.Equipable != undefined) { dtaJS = dtaJS + "\"InvEquipable\": \"" + data2.fields.Equipable + "\"," }
              if (data2.fields.RemoveStatus != undefined) { dtaJS = dtaJS + "\"InvRemoveStatus\": \"" + data2.fields.RemoveStatus + "\"," }
              if (data2.fields.Heal != undefined) { dtaJS = dtaJS + "\"InvHeal\": \"" + data2.fields.Heal + "\"," }

              if (data2.fields.Stackable != undefined) {


                stateModule.setCurrStacks(0);
                stateModule.setOffSet("");

                var currStack = 0
                var stackID = ""
                var requestCurr = new XMLHttpRequest()
                requestCurr.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff?maxRecords=999&view=Grid%20view', false)
                requestCurr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
                requestCurr.onload = function () {
                  var dataCurr = JSON.parse(this.response)
                  if (requestCurr.status >= 200 && requestCurr.status < 400) {
                    dataCurr.records.forEach(varEntry => {

                      if (varEntry.fields.MainItemID == data2.id) {
                        stateModule.setCurrStacks(varEntry.fields.InvCharges);
                        stateModule.setOffSet(varEntry.id)



                      }
                    }
                    )
                  }
                }
                requestCurr.send(null)

                dtaJS = dtaJS + "\"InvStackable\": \"" + data2.fields.Stackable + "\","
                dtaJS = dtaJS + "\"InvCharges\": \"" + num1 + "\","
              }
              dtaJS = dtaJS + "\"MainItemID\": \"" + data2.id + "\""

              currStack = stateModule.getCurrStacks();
              if ((currStack != undefined) && (currStack > 0)) {
                console.log("stackable item found")
                var urlStack = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff";
                var jsonStack = "{\"records\": [{\"id\": \"" + stateModule.getOffSet() + "\",\"fields\": {\"InvCharges\": \"" + (Number(num1) + Number(currStack)) + "\"}}]}";
                var xhr3Stack = new XMLHttpRequest();
                xhr3Stack.open("PATCH", urlStack, false);
                xhr3Stack.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
                xhr3Stack.setRequestHeader('Content-Type', 'application/json')

                xhr3Stack.onload = function () {

                }
                xhr3Stack.send(jsonStack);
              }
              else {
                dtaJS = "{\"fields\": {" + dtaJS + "}}"
                var urls = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff";
                var jsons = dtaJS;
                var xhrs = new XMLHttpRequest();
                xhrs.open("POST", urls, false);
                xhrs.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
                xhrs.setRequestHeader('Content-Type', 'application/json')
                xhrs.onload = function () {
                  //    var Name = JSON.parse(xhrs.responseText);

                }
                xhrs.send(jsons);



              }

              var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff";
              var json = "{\"records\": [{\"id\": \"" + data.id + "\",\"fields\": {\"InvCharges\": \"" + stateModule.getNewGold() + "\"}}]}";
              var xhr3 = new XMLHttpRequest();
              xhr3.open("PATCH", url, false);
              xhr3.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
              xhr3.setRequestHeader('Content-Type', 'application/json')

              xhr3.onload = function () {
                //       var Name = JSON.parse(xhr3.responseText);

              }
              xhr3.send(json);
              console.log("chaning to")
              console.log(stateModule.getNewGold())

              document.getElementById("goldCount").innerHTML = "Currently Held:<br>" + (stateModule.getNewGold()) + "g";


              alert("Purchased " + data2.fields.Item)




            }
            else {
              alert("You do not have enough gold to purchase  " + data2.fields.Item)

            }


          }

        }
        xhr2.send(null);





      }

    }
    xhr.send(null);
  }
  else { alert("Not a valid number.") }





}






























function getGold() {



  var url = "https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff/recFwylkZWcdDJdaZ";
  var xhr = new XMLHttpRequest();


  xhr.open('GET', url, false)


  xhr.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')


  xhr.onload = function () {
    var data2 = JSON.parse(this.response)

    if (xhr.status >= 200 && xhr.status < 400) {

      document.getElementById("goldCount").innerHTML = "Currently Held:<br>" + data2.fields.InvCharges + "g";
    }

  }
  xhr.send(null);

}





function filterItems(searchParam) {


  document.getElementById("dropdownButton").style.opacity = 0;
  document.getElementById("dropdown-content").style.opacity = 0;
  document.getElementById("dropdown-all").style.opacity = 0;

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

          var cat = ""
          if (varEntry.fields.Category != undefined) {
            cat = varEntry.fields.Category
          }
          else { cat = "Special" }

          var wt = ""
          if (varEntry.fields.Weight != undefined) {
            wt = varEntry.fields.Weight
          }
          else { wt = "0" }

          var cst = ""
          if (varEntry.fields.Cost != undefined) {
            cst = varEntry.fields.Cost
          }
          else { cst = "0" }


          var desc = ""
          if (varEntry.fields.Description != undefined) {
            desc = varEntry.fields.Description
          }
          else
            desc = ""

          if (varEntry.fields.Damage != undefined) {
            desc = desc + "<br><br>Damage: " + varEntry.fields.Damage
          }
          if (varEntry.fields.DamageType != undefined) {
            desc = desc + ", " + varEntry.fields.DamageType
          }
          if (varEntry.fields.Properties != undefined) {
            desc = desc + "<br>Damage: " + varEntry.fields.Damage
          }
          if (varEntry.fields.PlusAC != undefined) {
            desc = desc + "<br><br>AC: +" + varEntry.fields.PlusAC
          }
          if (varEntry.fields.DexMax != undefined) {
            desc = desc + "<br>Max additional AC from Dex Mod: +" + varEntry.fields.DexMax
          }


          var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
          var a2 = varEntry.fields.Item
          var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
          var a4 = varEntry.id
          var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
          var a6 = varEntry.id
          var a7 = "\" id=\"heading-collapsed\"><p>"
          var a8 = cat
          var a9 = "</p><p>Weight: "
          var a10 = wt
          var a11 = "lb</p><p>Cost: "
          var a12 = cst
          var a13 = "g</p><br></a><a id=\"buybutton" + varEntry.id + "\" class=\"buyButton\" onClick=\"addItem()\">BUY</a></h5><div id=\"collapse-collapsed33"
          var a14 = varEntry.id
          var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
          var a16 = desc
          var a17 = "</div></div></div>"

          var g;
          g = document.createElement('div');
          g.id = i;
          document.getElementById("forms").appendChild(g);
          var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17;
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

          if (currIteration = 3) {
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

                var cat = ""
                if (varEntry.fields.Category != undefined) {
                  cat = varEntry.fields.Category
                }
                else { cat = "Special" }

                var wt = ""
                if (varEntry.fields.Weight != undefined) {
                  wt = varEntry.fields.Weight
                }
                else { wt = "0" }

                var cst = ""
                if (varEntry.fields.Cost != undefined) {
                  cst = varEntry.fields.Cost
                }
                else { cst = "0" }


                var desc = ""
                if (varEntry.fields.Description != undefined) {
                  desc = varEntry.fields.Description
                }
                else
                  desc = ""

                if (varEntry.fields.Damage != undefined) {
                  desc = desc + "<br><br>Damage: " + varEntry.fields.Damage
                }
                if (varEntry.fields.DamageType != undefined) {
                  desc = desc + ", " + varEntry.fields.DamageType
                }
                if (varEntry.fields.Properties != undefined) {
                  desc = desc + "<br>Damage: " + varEntry.fields.Damage
                }
                if (varEntry.fields.PlusAC != undefined) {
                  desc = desc + "<br><br>AC: +" + varEntry.fields.PlusAC
                }
                if (varEntry.fields.DexMax != undefined) {
                  desc = desc + "<br>Max additional AC from Dex Mod: +" + varEntry.fields.DexMax
                }


                var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
                var a2 = varEntry.fields.Item
                var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
                var a4 = varEntry.id
                var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
                var a6 = varEntry.id
                var a7 = "\" id=\"heading-collapsed\"><p>"
                var a8 = cat
                var a9 = "</p><p>Weight: "
                var a10 = wt
                var a11 = "lb</p><p>Cost: "
                var a12 = cst
                var a13 = "g</p><br></a><a id=\"buybutton" + varEntry.id + "\" class=\"buyButton\" onClick=\"addItem()\">BUY</a></h5><div id=\"collapse-collapsed33"
                var a14 = varEntry.id
                var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
                var a16 = desc
                var a17 = "</div></div></div>"

                var g;
                g = document.createElement('div');
                g.id = i;
                document.getElementById("forms").appendChild(g);
                var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17;
                document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

                if (currIteration = 5) {
                  currIteration = 0
                  document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
                }
              }
            })

            document.getElementById("dropdownButton").style.opacity = 1;
            document.getElementById("dropdown-content").style.opacity = 1;
            document.getElementById("dropdown-all").style.opacity = 1;



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


        var cat = ""
        if (varEntry.fields.Category != undefined) {
          cat = varEntry.fields.Category
        }
        else { cat = "Special" }

        var wt = ""
        if (varEntry.fields.Weight != undefined) {
          wt = varEntry.fields.Weight
        }
        else { wt = "0" }

        var cst = ""
        if (varEntry.fields.Cost != undefined) {
          cst = varEntry.fields.Cost
        }
        else { cst = "0" }


        var desc = ""
        if (varEntry.fields.Description != undefined) {
          desc = varEntry.fields.Description
        }
        else
          desc = ""

        if (varEntry.fields.Damage != undefined) {
          desc = desc + "<br><br>Damage: " + varEntry.fields.Damage
        }
        if (varEntry.fields.DamageType != undefined) {
          desc = desc + ", " + varEntry.fields.DamageType
        }
        if (varEntry.fields.Properties != undefined) {
          desc = desc + "<br>Damage: " + varEntry.fields.Damage
        }
        if (varEntry.fields.PlusAC != undefined) {
          desc = desc + "<br><br>AC: +" + varEntry.fields.PlusAC
        }
        if (varEntry.fields.DexMax != undefined) {
          desc = desc + "<br>Max additional AC from Dex Mod: +" + varEntry.fields.DexMax
        }






        currIteration = currIteration + 1
        var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
        var a2 = varEntry.fields.Item
        var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
        var a4 = varEntry.id
        var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
        var a6 = varEntry.id
        var a7 = "\" id=\"heading-collapsed\"><p>"
        var a8 = cat
        var a9 = "</p><p>Weight: "
        var a10 = wt
        var a11 = "lb</p><p>Cost: "
        var a12 = cst
        var a13 = "g</p><br></a><a id=\"buybutton" + varEntry.id + "\" class=\"buyButton\" onClick=\"addItem()\">BUY</a></h5><div id=\"collapse-collapsed33"
        var a14 = varEntry.id
        var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
        var a16 = desc
        var a17 = "</div></div></div>"

        var g;
        g = document.createElement('div');
        g.id = i;
        document.getElementById("forms").appendChild(g);
        var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17;
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

              var cat = ""
              if (varEntry.fields.Category != undefined) {
                cat = varEntry.fields.Category
              }
              else { cat = "Special" }

              var wt = ""
              if (varEntry.fields.Weight != undefined) {
                wt = varEntry.fields.Weight
              }
              else { wt = "0" }

              var cst = ""
              if (varEntry.fields.Cost != undefined) {
                cst = varEntry.fields.Cost
              }
              else { cst = "0" }

              var desc = ""
              if (varEntry.fields.Description != undefined) {
                desc = varEntry.fields.Description

              }
              else
                desc = ""


              if (varEntry.fields.Damage != undefined) {
                desc = desc + "<br><br>Damage: " + varEntry.fields.Damage
              }
              if (varEntry.fields.DamageType != undefined) {
                desc = desc + ", " + varEntry.fields.DamageType
              }
              if (varEntry.fields.Properties != undefined) {
                desc = desc + "<br>Damage: " + varEntry.fields.Damage
              }
              if (varEntry.fields.PlusAC != undefined) {
                desc = desc + "<br><br>AC: +" + varEntry.fields.PlusAC
              }
              if (varEntry.fields.DexMax != undefined) {
                desc = desc + "<br>Max additional AC from Dex Mod: +" + varEntry.fields.DexMax
              }
              var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
              var a2 = varEntry.fields.Item
              var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
              var a4 = varEntry.id
              var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
              var a6 = varEntry.id
              var a7 = "\" id=\"heading-collapsed\"><p>"
              var a8 = cat
              var a9 = "</p><p>Weight: "
              var a10 = wt
              var a11 = "lb</p><p>Cost: "
              var a12 = cst
              var a13 = "g</p><br></a><a id=\"buybutton" + varEntry.id + "\" class=\"buyButton\" onClick=\"addItem()\">BUY</a></h5><div id=\"collapse-collapsed33"
              var a14 = varEntry.id
              var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
              var a16 = desc
              var a17 = "</div></div></div>"

              var g;
              g = document.createElement('div');
              g.id = i;
              document.getElementById("forms").appendChild(g);
              var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17;
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
  var currStacks;
  var oldGold;
  var newGold;
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
  pub.setCurrStacks = function (newstate) {
    currStacks = newstate;
  };
  pub.getCurrStacks = function () {
    return currStacks;
  }
  pub.setOldGold = function (newstate) {
    oldGold = newstate;
  };
  pub.getOldGold = function () {
    return oldGold;
  }
  pub.setNewGold = function (newstate) {
    newGold = newstate;
  };
  pub.getNewGold = function () {
    return newGold;
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



function newTest() {


  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.airtable.com/v0/appHbTb5yS5006rqf/Ichaeff?maxRecords=999&view=Grid%20view', false)
  request.setRequestHeader('Authorization', 'Bearer keyPNiqLig0a2oKbv')
  request.onload = function () {
    stateModule.setArmorAC(0);
    var currIteration = 1;

    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.records.forEach(varEntry => {


        console.log(varEntry)
        if (currIteration = 1) {
          document.getElementById("invStats").innerHTML = document.getElementById("invStats").innerHTML + "<div class=\"row\">"
        }
        currIteration = currIteration + 1

        var cat = ""
        if (varEntry.fields.InvCategory != undefined) {
          cat = varEntry.fields.InvCategory
        }
        else { cat = "Special" }

        var wt = ""
        if (varEntry.fields.InvWeight != undefined) {
          wt = varEntry.fields.InvWeight
        }
        else { wt = "0" }

        var cst = ""
        if (varEntry.fields.InvCost != undefined) {
          cst = varEntry.fields.InvCost
        }
        else { cst = "0" }


        var desc = ""
        if (varEntry.fields.InvDescription != undefined) {
          desc = varEntry.fields.InvDescription
        }
        else
          desc = ""

        if (varEntry.fields.InvDamage != undefined) {
          desc = desc + "<br><br>Damage: " + varEntry.fields.InvDamage
        }
        if (varEntry.fields.InvDamageType != undefined) {
          desc = desc + ", " + varEntry.fields.InvDamageType
        }
        if (varEntry.fields.InvProperties != undefined) {
          desc = desc + "<br>Damage: " + varEntry.fields.InvDamage
        }
        if (varEntry.fields.InvPlusAC != undefined) {
          desc = desc + "<br><br>AC: +" + varEntry.fields.InvPlusAC
        }
        if (varEntry.fields.InvDexMax != undefined) {
          desc = desc + "<br>Max additional AC from Dex Mod: +" + varEntry.fields.InvDexMax
        }
        desc = desc + "<br></a><a id=\"destroyButton" + varEntry.id + "\" class=\"destroyButton\" onClick=\"destroyItem()\">DESTROY</a>"




        var a1 = "<div class=\"column\"><div class=\"card\"><h5 class=\"card-header\"><h3>";
        var a2 = varEntry.fields.InvItem
        var a3 = "</h3><a class=\"collapsed d-block\" data-toggle=\"collapse\" href=\"#collapse-collapsed33";
        var a4 = varEntry.id
        var a5 = "\" aria-expanded=\"true\" aria-controls=\"collapse-collapsed33"
        var a6 = varEntry.id
        var a7 = "\" id=\"heading-collapsed\"><p>"
        var a8 = cat
        var a9 = "</p><p>Weight: "
        var a10 = wt
        var a11 = "lb</p><p>Cost: "
        var a12 = cst
        var a13 = ""
        if (varEntry.fields.InvEquipable != undefined) {
          if (varEntry.fields.InvEquipped != undefined)
          {
          var a13 = "g</p></a><a id=\"equipButton" + varEntry.id + "\" class=\"equipButton\" onClick=\"itemUnequip()\">Un-Equip</a></h5><div id=\"collapse-collapsed33"
          }
          else
          {
            var a13 = "g</p></a><a id=\"equipButton" + varEntry.id + "\" class=\"equipButton\" onClick=\"itemEquip()\">Equip</a></h5><div id=\"collapse-collapsed33"
          }
        }
        else {

          var currCharges = 0
          if (varEntry.fields.InvCharges != undefined) {
            currCharges = varEntry.fields.InvCharges
          }
          var a13 = "g</p></a><a id=\"equipButton" + varEntry.id + "\" class=\"equipButton  \">Quantity : " + currCharges + "</a></h5><div id=\"collapse-collapsed33"

        }
        var a14 = varEntry.id
        var a15 = "\" class=\"collapse\" aria-labelledby=\"heading-collapsed\"><div class=\"card-body\"><br>"
        var a16 = desc
        var a17 = "</div></div></div>"

        var g;
        g = document.createElement('div');
        g.id = i;
        document.getElementById("invStats").appendChild(g);
        var abc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17;
        document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + abc;

        if (currIteration = 3) {
          currIteration = 0
          document.getElementById(g.id).innerHTML = document.getElementById(g.id).innerHTML + "</p></div>"
        }
      }

      )

    
       
    

    }



  }
  request.send();


}






function destroyItem()
{


}

function itemEquip(){

}



function equalizeCards(){
  console.log("transforming carddata")
  var maxHeight = 0;
    for(i=0;i<$(".card").length;i++){
      if($(".card").eq(i)){
        var currentHeight = $(".card").eq(i).height();
        if(currentHeight>=maxHeight){
          maxHeight = currentHeight;
        }
      }
      else{
        break;
      }
    }
    $(".card").height(maxHeight);
}