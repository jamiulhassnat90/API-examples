const personFetchPromise =() =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(person=>person.json())
    .then(data=>myBideshini(data.results))
}

const myBideshini=(personDatas) =>{
    for (const personData of personDatas){
        const divId = document.getElementById('bideshi-data')
        const newElement = document.createElement('div')
        newElement.innerHTML=`
        <h3>Gender: ${personData.gender} Location: ${personData.location.country}  </h3>
        <h4>Gmail: ${personData.email}</h4>
        `       
        divId.appendChild(newElement);
        newElement.classList.add('add-some-style')
    }

}

personFetchPromise();
