export type PropsId = {
  id: string,
}

export interface PropsProcess {
  id: string,
  family_id: string,
  process_name: string,
  list_emails_responsables: string[],
  company_id: string,
}

export interface PropsProcessEdit {
  id: string,
  process_name: string
  list_emails_responsables: string[],
  family_name: string,
  company_id: string,
  family_id: string 
}

export type changeComponentsSlice = {
  value: string;
  isReload: number;
};