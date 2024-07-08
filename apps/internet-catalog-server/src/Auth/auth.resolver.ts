import * as graphql from "@nestjs/graphql";
import { AdminCreateInput } from "../auth/AdminCreateInput";
import { AdminCreateOutput } from "../auth/AdminCreateOutput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => AdminCreateOutput)
  async CreateAdmin(
    @graphql.Args()
    args: AdminCreateInput
  ): Promise<AdminCreateOutput> {
    return this.service.CreateAdmin(args);
  }
}
