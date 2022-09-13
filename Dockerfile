FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

COPY publish .

EXPOSE 80

CMD ["dotnet", "ReactAPI.dll"]

