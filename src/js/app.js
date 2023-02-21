export default function orderByProps(object, [...props]) {
  let result = [];
  const other = [];
  for (const property in object) {
    if (props.includes(property)) {
      result.push({ key: property, value: object[property] });
    } else {
      other.push({ key: property, value: object[property] });
    }
  }
  other.sort((a, b) => (a.key > b.key ? 1 : -1));
  result = [...result, ...other];
  return result;
}
