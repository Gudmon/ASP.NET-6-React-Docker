using aspnetbackend.Database;
using aspnetbackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspnetbackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public CustomerController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customer>>> GetCustomers()
        {
            var customers = await _dbContext.Customers.ToListAsync();
            return Ok(customers);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Customer>> GetCustomerById(int id)
        {
            var customer = await _dbContext.Customers.FindAsync(id);
            return Ok(customer);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Customer customer)
        {
            await _dbContext.Customers.AddAsync(customer);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(Customer customer)
        {
            _dbContext.Customers.Update(customer);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Update(int id)
        {
            var customer = await _dbContext.Customers.FindAsync(id);
            _dbContext.Customers.Remove(customer);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}

