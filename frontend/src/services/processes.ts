import axios from 'axios';

interface Family {
  id: string;
  family_name: string;
}
  
export async function fetchProcesses(): Promise<Family[]> {
  const response = await fetch("http://localhost:3000/families");
  const data = await response.json();
  return data;
}