export const { putUser } = {

    putUser: (username: string ) => {
        return new Promise(function(myResolve, myReject) {
            if (_getAllUsers().includes(username)) {
                if (_getRegisteredUsers().includes(username)) {
                    localStorage.setItem('authorization', username);
                }
                myResolve('Ok');
            }
            myReject('Err');
        })
    }
}

function _getAllUsers() : string[] {
    return ['Nevets'];
}

function _getRegisteredUsers() : string [] {
    return [''];
}