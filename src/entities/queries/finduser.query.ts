import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel()
export class FindUserQuery {
  @ApiModelProperty({ required: true })
  identity!: number;
}
