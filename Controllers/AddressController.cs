using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CvCreator.Data;
using CvCreator.Models;
using Microsoft.AspNetCore.Mvc;

namespace CvCreator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private ApplicationDbContext _context;

        public AddressController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Address> Get()
        {
            var list = _context.Addresses.ToList();
            return list;
        }

        [HttpPost]
        public async Task Post(Address address)
        {
            var ss = _context.Addresses.Add(address);
            await _context.SaveChangesAsync();
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