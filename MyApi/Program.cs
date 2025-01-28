var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// הוספת CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // כתובת ה-React App שלך
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// הוספת UseCors לפני MapControllers
app.UseCors("AllowReactApp"); // שימוש ב-CORS

app.MapControllers(); // מיפוי הקונטרולרים

app.Run();
