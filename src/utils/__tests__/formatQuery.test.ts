import { formatQuery } from '..';
import { RuleGroupType, ValueProcessor } from '../../types';

// Utility type from https://github.com/typeorm/typeorm/blob/master/src/common/DeepPartial.ts
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]> | T[P];
};

const query: RuleGroupType = {
  id: 'g-067a4722-55e0-49c3-83b5-b31e10e69f9d',
  rules: [
    {
      id: 'r-74bbb7e6-b046-40d2-9170-48113afbfe3e',
      field: 'firstName',
      value: '',
      operator: 'null'
    },
    {
      id: 'r-11af1a9a-10eb-4c5d-a7cb-64b776328ab7',
      field: 'lastName',
      value: '',
      operator: 'notNull'
    },
    {
      id: 'r-8c8882ad-b754-419a-9481-dec597a66570',
      field: 'firstName',
      value: 'Test,This',
      operator: 'in'
    },
    {
      id: 'r-85206a73-9806-434b-95ac-9d00a02a2d48',
      field: 'lastName',
      value: 'Test,This',
      operator: 'notIn'
    },
    {
      id: 'r-7e764eaf-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'age',
      value: '26',
      operator: '='
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'isMusician',
      value: true,
      operator: '='
    },
    {
      id: 'g-e87d3d99-41e6-48e9-b032-6db996039670',
      rules: [
        {
          id: 'r-86463d12-d045-4172-8489-0d9c42490967',
          field: 'gender',
          value: 'M',
          operator: '='
        },
        {
          id: 'r-a0d80c26-1daa-44ae-98ef-594c741b6eb5',
          field: 'job',
          value: 'Programmer',
          operator: '!='
        },
        {
          id: 'r-23206z73-9996-434b-72zr-9q87a02a2d48',
          field: 'email',
          value: '@',
          operator: 'contains'
        }
      ],
      combinator: 'or',
      not: true
    },
    {
      id: 'g-e87d4w79-82v6-42e9-n032-6hg996039670',
      rules: [
        {
          id: 'r-86463d12-d045-4172-8489-0d9c42490967',
          field: 'lastName',
          value: 'ab',
          operator: 'doesNotContain'
        },
        {
          id: 'r-a0d80c26-1daa-44ae-98ef-594c741b6eb5',
          field: 'job',
          value: 'Prog',
          operator: 'beginsWith'
        },
        {
          id: 'r-23206z73-9996-434b-72zr-9q87a02a2d48',
          field: 'email',
          value: 'com',
          operator: 'endsWith'
        },
        {
          id: 'r-a0d80c26-1daa-44ae-98ef-594c741b6eb5',
          field: 'job',
          value: 'Man',
          operator: 'doesNotBeginWith'
        },
        {
          id: 'r-23206z73-9996-434b-72zr-9q87a02a2d48',
          field: 'email',
          value: 'fr',
          operator: 'doesNotEndWith'
        }
      ],
      combinator: 'or',
      not: false
    }
  ],
  combinator: 'and',
  not: false
};
const mongoQuery: RuleGroupType = {
  id: 'g-067a4722-55e0-49c3-83b5-b31e10e69f9d',
  rules: [
    {
      id: 'r-74bbb7e6-b046-40d2-9170-48113afbfe3e',
      field: 'firstName',
      value: '',
      operator: 'null'
    },
    {
      id: 'r-11af1a9a-10eb-4c5d-a7cb-64b776328ab7',
      field: 'lastName',
      value: '',
      operator: 'notNull'
    },
    {
      id: 'r-8c8882ad-b754-419a-9481-dec597a66570',
      field: 'firstName',
      value: 'Test,This',
      operator: 'in'
    },
    {
      id: 'r-85206a73-9806-434b-95ac-9d00a02a2d48',
      field: 'lastName',
      value: 'Test,This',
      operator: 'notIn'
    },
    {
      id: 'r-7e764eaf-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'age',
      value: '26',
      operator: '='
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'isMusician',
      value: true,
      operator: '='
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'email',
      value: '@',
      operator: 'contains'
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'email',
      value: 'ab',
      operator: 'beginsWith'
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'email',
      value: 'com',
      operator: 'endsWith'
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'hello',
      value: 'com',
      operator: 'doesNotContain'
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'job',
      value: 'Man',
      operator: 'doesNotBeginWith'
    },
    {
      id: 'r-6d653dae-7c2f-436b-84b8-e1c4e24fcd7f',
      field: 'job',
      value: 'ger',
      operator: 'doesNotEndWith'
    },
    {
      id: 'g-067a4722-55e0-49c3-83b5-b31e10ef69f9d',
      rules: [
        {
          id: 'r-6d653dae-7c2f-436b-84reb8-e1c4e24fcd7f',
          field: 'job',
          value: 'Sales Executive',
          operator: '='
        }
      ],
      combinator: 'or',
      not: false
    }
  ],
  combinator: 'and',
  not: false
};

const sqlString = `(firstName is null and lastName is not null and firstName in ('Test', 'This') and lastName not in ('Test', 'This') and age = '26' and isMusician = TRUE and NOT (gender = 'M' or job != 'Programmer' or email like '%@%') and (lastName not like '%ab%' or job like 'Prog%' or email like '%com' or job not like 'Man%' or email not like '%fr'))`;
const parameterizedSQLString =
  '(firstName is null and lastName is not null and firstName in (?, ?) and lastName not in (?, ?) and age = ? and isMusician = ? and NOT (gender = ? or job != ? or email like ?) and (lastName not like ? or job like ? or email like ? or job not like ? or email not like ?))';
const params = [
  'Test',
  'This',
  'Test',
  'This',
  '26',
  'TRUE',
  'M',
  'Programmer',
  '%@%',
  '%ab%',
  'Prog%',
  '%com',
  'Man%',
  '%fr'
];

const mongoQueryString =
  '{$and:[{firstName:null},{lastName:{$ne:null}},{firstName:{$in:["Test","This"]}},{lastName:{$nin:["Test","This"]}},{age:{$eq:"26"}},{isMusician:{$eq:true}},{email:/@/},{email:/^ab/},{email:/com$/},{hello:{$not:/com/}},{job:{$not:/^Man/}},{job:{$not:/ger$/}},{$or:[{job:{$eq:"Sales Executive"}}]}]}';
describe('formatQuery', () => {
  it('formats JSON correctly', () => {
    expect(formatQuery(query)).toBe(JSON.stringify(query, null, 2));
    expect(formatQuery(query, 'json')).toBe(JSON.stringify(query, null, 2));
  });

  it('formats SQL correctly', () => {
    expect(formatQuery(query, 'sql')).toBe(sqlString);
  });

  it('formats parameterized SQL correctly', () => {
    const parameterized = formatQuery(query, 'parameterized') as { sql: string; params: string[] };
    expect(parameterized).toHaveProperty('sql', parameterizedSQLString);
    expect(parameterized).toHaveProperty('params');
    expect(parameterized.params).toEqual(params);
  });
  it('formats to mongo query correctly', () => {
    expect(formatQuery(mongoQuery, 'mongodb')).toBe(mongoQueryString);
  });

  it('handles invalid type correctly', () => {
    expect(formatQuery(query, 'null' as any)).toBe('');
  });

  it('handles custom valueProcessor correctly', () => {
    const queryWithArrayValue: RuleGroupType = {
      id: 'g-8953ed65-f5ff-4b77-8d03-8d8788beb50b',
      rules: [
        {
          id: 'r-32ef0844-07e3-4f3b-aeca-3873da3e208b',
          field: 'instrument',
          value: ['Guitar', 'Vocals'],
          operator: 'in'
        },
        {
          id: 'r-3db9ba21-080d-4a5e-b4da-d949b4ad055b',
          field: 'lastName',
          value: 'Vai',
          operator: '='
        }
      ],
      combinator: 'and',
      not: false
    };

    const valueProcessor: ValueProcessor = (_field, operator, value) => {
      if (operator === 'in') {
        return `(${value.map((v: string) => `'${v.trim()}'`).join(',')})`;
      } else {
        return `'${value}'`;
      }
    };

    expect(formatQuery(queryWithArrayValue, { format: 'sql', valueProcessor })).toBe(
      `(instrument in ('Guitar','Vocals') and lastName = 'Vai')`
    );
  });

  it('handles quoteFieldNamesWith correctly', () => {
    const queryWithArrayValue: RuleGroupType = {
      id: 'g-8953ed65-f5ff-4b77-8d03-8d8788beb50b',
      rules: [
        {
          id: 'r-32ef0844-07e3-4f3b-aeca-3873da3e208b',
          field: 'instrument',
          value: 'Guitar, Vocals',
          operator: 'in'
        },
        {
          id: 'r-3db9ba21-080d-4a5e-b4da-d949b4ad055b',
          field: 'lastName',
          value: 'Vai',
          operator: '='
        }
      ],
      combinator: 'and',
      not: false
    };

    expect(formatQuery(queryWithArrayValue, { format: 'sql', quoteFieldNamesWith: '`' })).toBe(
      "(`instrument` in ('Guitar', 'Vocals') and `lastName` = 'Vai')"
    );
  });

  it('handles json_without_ids correctly', () => {
    const example_without_ids: DeepPartial<RuleGroupType> = {
      rules: [
        {
          field: 'firstName',
          value: '',
          operator: 'null'
        },
        {
          field: 'lastName',
          value: '',
          operator: 'notNull'
        },
        {
          field: 'firstName',
          value: 'Test,This',
          operator: 'in'
        },
        {
          field: 'lastName',
          value: 'Test,This',
          operator: 'notIn'
        },
        {
          field: 'age',
          value: '26',
          operator: '='
        },
        {
          field: 'isMusician',
          value: true,
          operator: '='
        },
        {
          rules: [
            {
              field: 'gender',
              value: 'M',
              operator: '='
            },
            {
              field: 'job',
              value: 'Programmer',
              operator: '!='
            },
            {
              field: 'email',
              value: '@',
              operator: 'contains'
            }
          ],
          combinator: 'or',
          not: true
        },
        {
          rules: [
            {
              field: 'lastName',
              value: 'ab',
              operator: 'doesNotContain'
            },
            {
              field: 'job',
              value: 'Prog',
              operator: 'beginsWith'
            },
            {
              field: 'email',
              value: 'com',
              operator: 'endsWith'
            },
            {
              field: 'job',
              value: 'Man',
              operator: 'doesNotBeginWith'
            },
            {
              field: 'email',
              value: 'fr',
              operator: 'doesNotEndWith'
            }
          ],
          combinator: 'or',
          not: false
        }
      ],
      combinator: 'and',
      not: false
    };
    expect(formatQuery(query, 'json_without_ids')).toBe(JSON.stringify(example_without_ids));
  });
});
