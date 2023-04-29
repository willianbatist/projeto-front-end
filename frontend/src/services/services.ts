interface Family {
  id: string;
  family_name: string;
}
  
export async function fetchFamilies(): Promise<Family[]> {
  const response = await fetch("http://localhost:3000/families");
  const data = await response.json();
  return data;
}
 
// Exemplo de uso
// fetchFamilies().then((families) => console.log(families));
  