// const generateProjects = projectsArr => {
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${projectsArr
//           .filter(({ feature }) => feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}

const Employee = require("../__lib__/team");

  
//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
//   };



const generateCard = (templateData) => {
    console.log(templateData)
    console.log("line47fired")
    
    let results = templateData.map(eachperson=> {
      return `<div class="row">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${eachperson.name} test role</h5>
        <p class="card-text">test id.</p>
        <a href="${eachperson.email}" class="btn btn-primary">Email: ${eachperson.email}</a>
        <a href="${eachperson.github}" class="btn btn-primary">Github: ${eachperson.github}</a>
        </div>
    </div>
    </div>
    `
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

