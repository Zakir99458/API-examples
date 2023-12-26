loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(buddiesData => displayBuddies(buddiesData))
}

displayBuddies = (buddiesData) => {
    const buddies = buddiesData.results;
    const buddiesDiv = document.getElementById('buddies');

    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.first} ${buddy.name.last}; email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
        console.log(buddy);
    }
}

loadBuddies();