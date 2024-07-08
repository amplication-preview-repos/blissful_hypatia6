/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FavoriteWhereInput } from "./FavoriteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FavoriteOrderByInput } from "./FavoriteOrderByInput";

@ArgsType()
class FavoriteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FavoriteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FavoriteWhereInput, { nullable: true })
  @Type(() => FavoriteWhereInput)
  where?: FavoriteWhereInput;

  @ApiProperty({
    required: false,
    type: [FavoriteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FavoriteOrderByInput], { nullable: true })
  @Type(() => FavoriteOrderByInput)
  orderBy?: Array<FavoriteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FavoriteFindManyArgs as FavoriteFindManyArgs };
