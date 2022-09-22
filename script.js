
fetch("Amazon.json")
.then(function(response){
    return response.json();
    // $('th').on('click' , function(){
    //     val coloum = $()
    // })
})
.then(function (datas){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let data of datas){
        out += `
        <tr>
            <td>${data.frequency}</td>
            <td><a href="${data.href}">${data.title}</a></td>
            <td>${data.difficulty}</td>
        </tr>
        `;
    }
    placeholder.innerHTML = out;
    
})