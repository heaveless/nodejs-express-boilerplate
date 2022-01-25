import * as Faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { Default } from '@entities';

define(Default, (faker: typeof Faker) => {
  const item = new Default();
  item.id = uuidv4();
  item.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  item.createBy = faker.name.firstName();
  item.createTime = faker.date.recent();
  item.isDeleted = false;
  return item;
});
