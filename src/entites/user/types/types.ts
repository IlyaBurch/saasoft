export interface Tag {
  text: string;
}

export interface Account {
  id: number;
  tags?: Tag | Tag[] | undefined;
  recordType: "Локальная" | "LDAP" | undefined;
  login: string | undefined;
  password: string | null;
}