



const generateCard = (templateData) => {
    console.log(templateData)
    console.log("line47fired")
    const generateId = ()=>{
      Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    let results = templateData.map(eachperson=> {
      if (eachperson.officenumber){
        return `<div class="row">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${eachperson.name} Manager</h5>
            <p class="card-text">ID: ${eachperson.id}</p>
            <a href="${eachperson.email}" class="btn btn-primary">Email: ${eachperson.email}</a>
            <a href="${eachperson.officenumber}" class="btn btn-primary">Office Number: ${eachperson.officenumber}</a>
            </div>
        </div>
        </div>
        `
      }
      if (eachperson.school) {
        return `<div class="row">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${eachperson.name} Intern</h5>
            <p class="card-text">ID: ${eachperson.id}</p>
            <a href="${eachperson.email}" class="btn btn-primary">Email: ${eachperson.email}</a>
            <a href="${eachperson.school}" class="btn btn-primary">School: ${eachperson.school}</a>
            </div>
        </div>
        </div>
        `
      }
      if (eachperson.github) {
        return`<div class="row">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${eachperson.name} Engineer</h5>
            <p class="card-text">ID: ${eachperson.id}</p>
            <a href="${eachperson.email}" class="btn btn-primary">Email: ${eachperson.email}</a>
            <a href="${eachperson.github}" class="btn btn-primary">Github: ${eachperson.github}</a>
            </div>
        </div>
        </div>
        `
      } else {
        return `<div class="row">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${eachperson.name} Employee</h5>
          <p class="card-text">ID: ${eachperson.id}</p>
          <a href="${eachperson.email}" class="btn btn-primary">Email: ${eachperson.email}</a>
          
          </div>
        </div>
        </div>
        `
      }
    });
    
    return results.join('');  
}

module.exports = templateData => {
    console.log (templateData)
    console.log ("line63fired")
    // const {name,github,email,...header} =templateData;
        return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="../src/style.css">
        </head>
        <body>
            <header>
                <h1>
                    My Team 
                </h1>
            </header>
            <main class="container">
                ${generateCard(templateData)}

            </main>
        </body>
        </html>
        `;
}

