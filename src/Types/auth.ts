

export type UserRole  = "SuperAdmin" | "Manager" | "Employee";

export interface User {
    id : string,
    email :string,
    name: string,
    role: UserRole,
    password? : string
    department: string
}

export interface AuthContextType {
    user : User | null,
    isAuthenticated : boolean,
    isLoading : boolean,
    login : (email : string, password : string) => Promise<boolean>,
    logout : ()=>void
}


 type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface Approval {
  id: number;
  initials: string;
  name: string;
  department: string;
  type: string;
  status: ApprovalStatus;
}