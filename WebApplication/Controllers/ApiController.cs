using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers;

public class ApiController : Controller
{
    [Route("/api/get")]
    [HttpGet]
    public ActionResult Index2()
    {
        Console.WriteLine("--- index 2 ---");

        return Ok(new
        {
            data = 123131312313
        });
    }

    [Route("/api/data")]
    [HttpPost]
    public ActionResult Index([FromBody] dynamic data)
    {
        if (data != null)
        {
            Console.WriteLine(data);
        }

        return Ok(new
        {
            data = 123
        });
    }
}