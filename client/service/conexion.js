export const data = async () => {
  const response = await fetch("http://192.168.0.108:3000/todos/1");
  const data = await response.json();
  return data;
};
