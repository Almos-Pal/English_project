document.getElementById("add_words").addEventListener("click", (event)=>{ AddWords(); });



        AddWords = () => {


            let data = {

                words:[{
                        word: document.getElementById("hu").value,
                        definition: document.getElementById("en").value
                }]
              }
              let option = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
              }
              fetch(`https://guideianangel.herokuapp.com/new?user=Béla`,option)
    .then( (response) => response.json())
    .then( (data)=>{

        console.log(data)

})};
