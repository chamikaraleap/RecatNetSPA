namespace ReactAPI
{
    public class SpaEndpointsMiddleware
    {
        private readonly RequestDelegate _next;

        public SpaEndpointsMiddleware(RequestDelegate next)
        {
            _next = next;

        }

        public  Task Invoke(HttpContext httpContext)
        {

            if (httpContext.Request.Path.StartsWithSegments("/api"))
               return  Task.CompletedTask;
           return  _next(httpContext);

        }
    }

    public static class MiddlewareExtensions
    {
         public static IApplicationBuilder UseSpaEndpoints(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<SpaEndpointsMiddleware>();
        }
    }
}