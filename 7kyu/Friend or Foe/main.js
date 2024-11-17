function friend(friends) {
    //your code here
    let friendsList = [];
    for (const friendName of friends) {
        if (friendName.length == 4) {
            friendsList.push(friendName)
        }
    }
  return friendsList;
}