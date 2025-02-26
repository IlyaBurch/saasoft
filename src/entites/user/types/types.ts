export interface Tag {
  text: string;
}

export interface Account {
  id: number;
  tags?: Tag[];
  recordType: "Локальная" | "LDAP" | undefined;
  login: string | undefined;
  password: string | null;
}

export interface AccountTagString {
    id: number;
  tags?: string;
  recordType: "Локальная" | "LDAP" | undefined;
  login: string | undefined;
  password: string | null;
}