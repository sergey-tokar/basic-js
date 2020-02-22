module.exports = function createDreamTeam(members) {
  let dreamTeamName = "";
  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach(element => {
    if (typeof element == "string") {
      element = element.split('');
      element = element.filter(item => { return item != " " });
      dreamTeamName = dreamTeamName + element[0].toUpperCase();
    };
  });

  dreamTeamName = dreamTeamName.split('').sort().join('');

  return dreamTeamName;
};