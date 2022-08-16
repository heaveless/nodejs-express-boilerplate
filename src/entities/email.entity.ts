class BaseEmail {
  to!: string;
  subject!: string;
  body!: string;
}

export class EmailDto extends BaseEmail {}
