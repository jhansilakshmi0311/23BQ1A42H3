const axios = require("axios");

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqaGFuc2lyZWRkeTM3NEBnbWFpbC5jb20iLCJleHAiOjE3ODA2Mzk4MTIsImlhdCI6MTc4MDYzODkxMiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNiMzQ3OWYzLTgxOGYtNDZmZC04YTk3LWVkNjYyN2Y0MTNlOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRoaXJ1bWFsYXJlZGR5IGpoYW5zaSBsYWtzaG1pIiwic3ViIjoiYzY0ZjhkZDgtNGQ4Ni00NjRiLWE1YzgtMWY2ODIyYjI4MDA5In0sImVtYWlsIjoiamhhbnNpcmVkZHkzNzRAZ21haWwuY29tIiwibmFtZSI6InRoaXJ1bWFsYXJlZGR5IGpoYW5zaSBsYWtzaG1pIiwicm9sbE5vIjoiMjNicTFhNDJoMyIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6ImM2NGY4ZGQ4LTRkODYtNDY0Yi1hNWM4LTFmNjgyMmIyODAwOSIsImNsaWVudFNlY3JldCI6InpFZEVoQ2ZBZXRTa1pmTkIifQ.rX31CI4CD7BEHsu8mwMT-9nzNuFirSlpX7nPVsAJwsk"
        }
      }
    );

    console.log(response.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

module.exports = Log;