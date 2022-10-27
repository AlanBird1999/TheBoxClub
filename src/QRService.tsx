

export function printQRCodes(containers : any[]) {
    const containerJSON = containers.map((container) => {
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
      body: JSON.stringify({containerJSON}),
      redirect: 'follow'
    })
      .then(response => response.text())
    //   .then(result => console.log(result)) // TODO: Use this result to pull up a PDF viewer
      .catch(error => console.log('error', error));
  }