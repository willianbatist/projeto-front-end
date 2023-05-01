import api from "./index";


type data = {
  id: string,
  company_id: string,
  family_id: string,
  list_emails_responsables: string[],
  process_name: string
};

export function postProcess(data: data) {
  return api.post('/processes', data)
    .then(response => {
      return response.data;

    })
    .catch(error => {
      return error
    });
}

export function deleteProcess(id: string) {
  return api.delete(`http://localhost:3000/processes/${id}`)
    .then(response => {
      return response.data;

    })
    .catch(error => {
      return error
    });
}