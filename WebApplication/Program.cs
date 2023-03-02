using Microsoft.AspNetCore.SpaServices;
using SpaCliMiddleware;

var builder = Microsoft.AspNetCore.Builder.WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});

var app = builder.Build();

app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseRouting();

app.MapControllers();

app.MapToSpaCliProxy("{*path}",
                     new SpaOptions
                     {
                         SourcePath = "ClientApp"
                     },
                     "tauri dev",
                     regex: "Compiled successfully");

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
});

app.Run();