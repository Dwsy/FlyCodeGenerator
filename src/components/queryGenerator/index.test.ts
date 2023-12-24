// import { generateSql } from './index';


// describe('generateSql', () => {
//     it('should generate the correct SQL query', () => {
//         const queryModel = {
//             tableName: 'users',
//             tableShortName: 'u',
//             columns: [
//                 { columnName: 'id', tableShortName: 'u', queryName: null, zhColumnName: 'ID' },
//                 { columnName: 'name', tableShortName: 'u', queryName: null, zhColumnName: '姓名' },
//                 { columnName: 'age', tableShortName: 'u', queryName: null, zhColumnName: '年龄' },
//             ],
//             joins: [],
//             conditions: [],
//         };

//         const expectedSql = `SELECT
//   u.id,  //ID
//   u.name,  //姓名
//   u.age  //年龄
// FROM
//   users as u
//  NORULE;`;

//         const generatedSql = generateSql(queryModel);

//         expect(generatedSql).toEqual(expectedSql);
//     });

//     it('should generate the correct SQL query with query names', () => {
//         const queryModel = {
//             tableName: 'users',
//             tableShortName: 'u',
//             columns: [
//                 { columnName: 'id', tableShortName: 'u', queryName: 'userId', zhColumnName: 'ID' },
//                 { columnName: 'name', tableShortName: 'u', queryName: 'userName', zhColumnName: '姓名' },
//                 { columnName: 'age', tableShortName: 'u', queryName: 'userAge', zhColumnName: '年龄' },
//             ],
//             joins: [],
//             conditions: [],
//         };

//         const expectedSql = `SELECT
//   u.id as userId,  //ID
//   u.name as userName,  //姓名
//   u.age as userAge  //年龄
// FROM
//   users as u
//  NORULE;`;

//         const generatedSql = generateSql(queryModel);

//         expect(generatedSql).toEqual(expectedSql);
//     });

//     it('should generate the correct SQL query with joins and conditions', () => {
//         const queryModel = {
//             tableName: 'users',
//             tableShortName: 'u',
//             columns: [
//                 { columnName: 'id', tableShortName: 'u', queryName: null, zhColumnName: 'ID' },
//                 { columnName: 'name', tableShortName: 'u', queryName: null, zhColumnName: '姓名' },
//                 { columnName: 'age', tableShortName: 'u', queryName: null, zhColumnName: '年龄' },
//             ],
//             joins: [
//                 { joinType: 'INNER JOIN', tableName: 'orders', tableShortName: 'o', condition: 'u.id = o.user_id' },
//                 { joinType: 'LEFT JOIN', tableName: 'addresses', tableShortName: 'a', condition: 'u.id = a.user_id' },
//             ],
//             conditions: [
//                 { columnName: 'age', operator: '>', value: 18 },
//                 { columnName: 'name', operator: 'LIKE', value: '%John%' },
//             ],
//         };

//         const expectedSql = `SELECT
//   u.id,  //ID
//   u.name,  //姓名
//   u.age  //年龄
// FROM
//   users as u
// INNER JOIN orders as o ON u.id = o.user_id
// LEFT JOIN addresses as a ON u.id = a.user_id
// WHERE 1=1
//   AND u.age > 18
//   AND u.name LIKE '%John%'
//  NORULE;`;

//         const generatedSql = generateSql(queryModel);

//         expect(generatedSql).toEqual(expectedSql);
//     });
// });