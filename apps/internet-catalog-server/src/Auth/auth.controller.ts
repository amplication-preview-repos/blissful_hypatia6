import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { AdminCreateInput } from "../auth/AdminCreateInput";
import { AdminCreateOutput } from "../auth/AdminCreateOutput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/admin")
  @swagger.ApiOkResponse({
    type: AdminCreateOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateAdmin(
    @common.Body()
    body: AdminCreateInput
  ): Promise<AdminCreateOutput> {
        return this.service.CreateAdmin(body);
      }
}
