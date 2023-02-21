export default function destruct(obj, prop) {
  const result = [];
  obj[prop].forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
