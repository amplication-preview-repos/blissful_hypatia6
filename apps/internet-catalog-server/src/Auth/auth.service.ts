import { Injectable } from "@nestjs/common";
import { AdminCreateInput } from "../auth/AdminCreateInput";
import { AdminCreateOutput } from "../auth/AdminCreateOutput";

@Injectable()
export class AuthService {
  constructor() {}
  async CreateAdmin(args: AdminCreateInput): Promise<AdminCreateOutput> {
    throw new Error("Not implemented");
  }
}
