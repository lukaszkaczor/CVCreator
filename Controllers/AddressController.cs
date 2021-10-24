using System.Collections.Generic;
using System.Threading.Tasks;
using CvCreator.Data;
using CvCreator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CvCreator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Authorize]
    public class AddressController : ControllerBase
    {
        private ApplicationDbContext _context;

        public AddressController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Address>> Get() => await _context.Addresses.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Address>> Get(int id)
        {
            var address = await _context.Addresses.FindAsync(id);

            if (address is null) return NotFound();

            return address;
        }

        [HttpPost]
        public async Task<ActionResult<Address>> Post(Address todoItem)
        {
            _context.Addresses.Add(todoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = todoItem.Id }, todoItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Address address)
        {
            if (id != address.Id)
            {
                return BadRequest();
            }

            _context.Entry(address).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_context.Addresses.Find(id) is null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var address = await _context.Addresses.FindAsync(id);

            if (address is null) return NotFound();

            _context.Addresses.Remove(address);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}