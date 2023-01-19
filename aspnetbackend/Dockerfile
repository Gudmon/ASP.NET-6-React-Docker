# Build stage
FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /source
COPY . .
RUN dotnet restore "aspnetbackend.csproj" --disable-parallel
RUN dotnet publish "aspnetbackend.csproj" -c release -o /app --no-restore

# Serve stage
FROM mcr.microsoft.com/dotnet/sdk:6.0-focal
ENV DOTNET_URLS=http://+:5005
WORKDIR /app
COPY --from=build /app ./

EXPOSE 5005


ENTRYPOINT ["dotnet", "aspnetbackend.dll"]
