using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.FileProviders;
using ReactAPI;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/hello", () => "Hello World!");

app.UseRouting();
app.UseEndpoints(_ =>{});
app.UseSpaEndpoints();
app.UseFileServer();

 if(app.Environment.IsDevelopment())
 {
     app.UseSpa( c => c.UseProxyToSpaDevelopmentServer("http://localhost:3000/"));
 }

app.Run();
