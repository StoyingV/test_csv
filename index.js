import _ from 'lodash';

export default function solution(content){
  // BEGIN
   const data = content.trim().split('\r\n');
  const key = data[0].split(',');
  const key1 = [...key.slice(0, 3), "Thurname", ...key.slice(-9)];
  console.log(key1);
  const data1 = data.slice(1).map((item) => {
    return item.split(',');
  });
  
  const dataObject = data1.map((passanger) => {
    const passangerData = {};
    passanger.map((item, index) => {
      passangerData[key1[index]] = item;
    });
    return passangerData;
  });

  console.log(dataObject);

  // END
}
