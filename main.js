// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else  {
        return false;
    }
}

function getEmail(user) {

    return user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com"
    
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}

function getHardestHomework(homework) {
    
    let empty = ''

    if (homework.length === 0) {
        return empty
    }
    
    // variables for for loop have to be after if startment for empty array due to "scope"
    let lowestName = homework[0].name
    let lowest = homework[0].averageScore

    for (let i = 0; i < homework.length; i++) {
        
        
        if (homework[i].averageScore < lowest) {
            lowest = homework[i].averageScore
            lowestName = homework[i].name
            
        }
        
    
    }
    return lowestName
    
}
//   array of names, array of phone numbers, new array of objects called phonebook
function createPhonebook(namesArr, phoneNumbersArr, phonebook = {}) {
    
    // let phonebook = {
    //     names: phoneNumbers
    // }

    for (let i = 0; i < namesArr.length; i++) {
        
        let names = namesArr[i]
        let phoneNumbers = phoneNumbersArr[i]
        phonebook[names] = phoneNumbers

        
    }


    return phonebook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};