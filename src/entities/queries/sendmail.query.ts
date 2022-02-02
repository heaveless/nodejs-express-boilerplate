import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel()
export class SendMailQuery {
  @ApiModelProperty({ required: true })
  to!: string;

  @ApiModelProperty({ required: true })
  subject!: string;

  @ApiModelProperty({ required: true })
  body!: string;
}
