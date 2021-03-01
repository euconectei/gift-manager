export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
export function onlyUniqueGroups(data) {
  const groups = [];

  data.map(({ group }) => {
    if (!groups.includes(group)) {
      groups.push(group);
    }
    return false;
  });

  return groups;
}
