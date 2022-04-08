class Neuron {
  constructor(options) {
      this.digit = options.di;
      this.input = options.input;
      this.output = options.output;
      this.memory = options.memory;
  }
}

var neurons = new Array();
for (let i = 0; i<10;i++)
{
  var currentneuron = new Neuron({
    output: 0,
  });
  var memoryarray = new Array();
  currentneuron.digit = i;
  for (let k = 0; k < 5; k++)
  {
    var subarray = new Array();
    for (let j = 0; j < 5; j++)
    {
      var currentweight = 0;
      subarray.push(currentweight);
    }
    memoryarray.push(subarray);
  }
  currentneuron.memory = memoryarray;
  neurons.push(currentneuron);
}

function generatefield()
{
    var body = document.getElementsByTagName("body")[0];
    var container = document.createElement("container");
    container.className = "container";
    var tbl = document.createElement("table");
    for (var i = 0; i < 5; i++) 
    {
        var row = document.createElement("tr");
        for (var j = 0; j < 5; j++) 
        {
          var cell = document.createElement("td");
          row.appendChild(cell);
          var content = document.createElement("div"); //Чтобы текст случайно не выделялся, заменил его на div'ы фиксированного размера
          content.className = "content";
          cell.appendChild(content);
          cell.id = i + " " + j;
          //Теперь координаты задаются как x y
          cell.setAttribute("xcoord", i); //Добавил кастомные атрибуты чтобы можно было выдёргивать координаты х и у отдельно
          cell.setAttribute("ycoord", j);
          cell.className = "empty";
        }
        tbl.appendChild(row);
    }
    container.appendChild(tbl)
    body.appendChild(container);
    let cells = document.querySelectorAll("td");
    cells.forEach(function (element)
    {
        element.onclick = function ()
        {
           if (element.classList.contains("empty"))
          {
            element.className = "colored";
          }
          else 
          {
            element.className = "empty";
          }
        }
    })
}

function teach()
{
  var input = new Array();
  for (let i = 0; i<5; i++)
  {
    var subinput = new Array();
    for (let k = 0; k<5;k++)
    {
      if (document.getElementById(i + " " + k).className == "colored")
      {
        subinput.push(true);
      }
      else
      {
        subinput.push(false);
      }
    }
    input.push(subinput);
  }
  console.log(input);
}

