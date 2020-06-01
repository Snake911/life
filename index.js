const root = document.getElementById('root');

const table = document.createElement('table');


const init = (size) => {
  const university = [];
  for (let i = 0; i < size; i++) {
    university.push([]);
    for (let j = 0; j < size; j++) {
      university[i].push(Math.round(Math.random()));
    }
  }
  return university;
};

const draw = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < arr[i].length; j++) {
      const td = document.createElement('td');
      if (arr[i][j]) {
        td.setAttribute('style','background: #000');
      }
      td.setAttribute('width', '15px');
      td.setAttribute('height', '15px');
      row.append(td);
    }
    table.append(row);
  }
  root.append(table);
};
const field = init(10);

draw(field);

const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let neign = 0;
      if (i > 0 && j > 0) {
        for(let x = i-1; x <= i+1; x++) {
          for(let y = j-1; y <= j+1; y++){
            if (arr[x][y] === 1) {
              neign++;
            }
            if(neign === 4) {
              break;
            }
          }
        }
        if(neign === 2 || neign === 3) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = 0;
        }
      }
    }
  }
  draw(arr);
};

setTimeout(() => {
  check(field);
}, 5000);
