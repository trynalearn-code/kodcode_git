
// //1.
// function extractId(url){
//     const parts = url.split("/");
//     return Number(parts[2])
// }
// console.log(extractId("/users/42"))

// //2.
// function parseQuery(url){
//     const qs = url.split("?")[1] || "";
//     const qss = qs.split("&")
//     const result = {}
//     if (!qs) return {}
//     for (const pair of qss){
//         const [k, v] = pair.split("=")
//         result[k]=v
//     }
//     return result
// }
// console.log(parseQuery("/users?role=admin&page=2"))

// //3.
// function getQueryParams(rawUrl) {
//   const parsed = new URL(rawUrl, "http://localhost");
//   const qs = parsed.searchParams;
//   return {
//     "page": qs.get("page") || "1",
//     "limit": qs.get("limit") || "10",
//     "sort":  qs.get("name")|| "name"
//   };
// }
// console.log(getQueryParams("/users?page=3&sort=name"))

// //4.
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// function getParam(url, pattern) {
//   // /users/:id vs /users/42
//   const pp = pattern.split("/");
//   const up = url.split("/");
//   const key = pp.find(s => s.startsWith(":"))?.slice(1);
//   const idx = pp.findIndex(s => s.startsWith(":"));
//   return { [key]: up[idx] }
// }

// const { id } = getParam(url, "/users/:id");
// const user   = users.find(u => u.id === +id);
// if (user) {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json")
//     res.end(JSON.stringify(user))
// }
// else{
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify({error:"Not Found"}))
// }


//5.
function handler(req, res) {
  const parsed = new URL(req.url, "http://localhost");
  const qs = parsed.searchParams;
  const role  = qs.get("role");
  const page  = +(qs.get("page")  || 1);
  const limit = +(qs.get("limit") || 10);

  let result = users;
  if (role) {
    result = 
  }
  // כתוב כאן — slice לפי page ו-limit
  sendJSON(res, 200, result);
}