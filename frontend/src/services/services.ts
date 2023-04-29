interface Family {
  id: string;
  family_name: string;
}
  
export async function fetchFamilies(): Promise<Family[]> {
  const response = await fetch("http://localhost:3000/families");
  const data = await response.json();
  return data;
}
 
// Exemplo de uso e forma de fazer
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchFamilies().then((families) => console.log(families));
  