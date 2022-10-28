import { Linking } from "react-native";

export async function printQRCodes(container_array : any[]) {
  console.log('loading...')
  const containers = container_array.map((container) => {
      return {
          "containerID": container.id,
          "containerName": container.cName,
          "roomName": container.pName
      }
  })
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch("https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({containers}),
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(async result => {
      const res = result.replaceAll("\"","");
      console.log(res);
      await Linking.openURL(res);
    })
    .catch(error => console.log('error', error));
        
  }